$(function(){
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


    $('.card-2').click(function(){
        $(".main-popup").css('display','block');
    });

    $('.pop-close').click(function(){
        $(".main-popup").css('display','none');
    });
});