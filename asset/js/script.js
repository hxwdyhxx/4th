$(document).ready(function () {

    //****************** header ******************//
    $('.team-menu, .submenu-wrap').hover(function () {
        $(this).parent('.gnb').toggleClass('active');
    });

    $('.language').click(function () {
        $(this).toggleClass('active');
    });

    $('.btn-menu').click(function(){
        $('.menu-wrap').toggleClass('open');
        $('.menu-wrap').toggleClass('close');
        $(this).toggleClass("close");
    });

    $('.menu').click(function(){
        $(this).parent('.menu-item').toggleClass("active");
        $(this).parent('.menu-item').siblings().removeClass("active");
    });
    //****************** header 끝 ******************//



    //****************** main ******************//    
    var swiper = new Swiper(".sc-visual", {
        loop: true,
        speed:800,
        touchRatio: 0,
        // simulateTouch:false,
        autoplay: {
            delay: 5000,
        },
        cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',  
    });

    $('.group-search .select').click(function () {
        $(this).toggleClass('active');
    });

    $('.sc-search .select').change(function () {
        $(this).css('color', '#000000');
    });



    // people-swiper **************************** //
    var swiper = new Swiper(".people-swiper", {
        slidesPerView: 1,
        spaceBetween: 44,
        draggable: true,
        breakpoints: {
            
            768: {
              slidesPerView: 1,
              spaceBetween: 44,
            },
            
            1024: {
                slidesPerView: 1.1,
                spaceBetween: 30,
            },
          },
          navigation: {
              nextEl: ".next",
              prevEl: ".prev",
          },
          
          // centeredSlides: true,
        });
    // people-swiper **************************** //

    // benefits-swiper **************************** //
    var swiper = new Swiper(".benefits-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        draggable: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        // centeredSlides: true,


        breakpoints:{
            769:{
                slidesPerView: 3,
                spaceBetween: 30,
            },
            
        },

    });
    // benefits-swiper **************************** //


    //****************** main 끝 ******************//    





    //****************** footer ******************//    
    $('.relate-site').click(function(){
        $(this).parent('.relate').toggleClass("active");
    });
    //****************** footer 끝 ******************//    

}) //////////////////// 지우지 마세요 //////////////////////