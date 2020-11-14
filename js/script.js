$(function(){

    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height > 0){
            $('header').css('position','fixed');
        }else if(height == 0){
            $('header').css('position','relative');
        }
    });


    $(".nav").hover(function(){
        $('.main-nav li ul').slideToggle();
        $('header.main').toggleClass('active');
        $('.sub-back').slideToggle();
    });

    $('.go-top').click(function(){
        $('html','body').animate({
            scrollTop: 0
        }, 1500);
    }); 


    $('.main-nav > li > ul > li > a').click(function(){
        $('.main-nav > li > ul > li > a').removeClass('active');
        $(this).addClass('active');
    });


    $('.card-2 img').click(function(){
        $(".main-popup").css('display','block');
    });

    $('.pop-close').click(function(){
        $(".main-popup").css('display','none');
    });


    // 구매물품 접수 팝업
    $('.go-to-cart').click(function(){
        $('.buy-receive').css('display','block');
    });
    $('.buy-btn.cancle').click(function(){
        $('.buy-receive').css('display','none');
    });

    // 상태 관리 팝업
    $('.open-stat1').click(function(){
        $('.stat-pop').css('display','block');
    });
    $(".stat-btn .close").click(function(){
        $('.stat-pop').css('display','none');
    });

    // 댓글 달기 팝업
    $(".openrq").click(function(){
        $(".request").css('display','block');
    });
    $(".request .cancle").click(function(){
        $('.request').css('display','none');
    });

    // 캠페인 팝업
    $('.write-btn-2 a').click(function(){
        $('.cp-popup').css('display','block');
    });
    $('.camp-btn .cancle').click(function(){
        $('.cp-popup').css('display','none');
    });


    var fileTarget = $('.buy-attach-wrap .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload-name').val(filename);
    });


    var campTarget =  $('.camp-hidden');

    campTarget.on('change', function(){
        if(window.FileReader){
            var campfile = $(this)[0].files[0].name;
        } else {
            var campfile = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.imageUpload').val(campfile);
    });
});