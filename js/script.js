//Header Part Height Validation Controls
//let sel_header=document.querySelector("#baner");
//sel_header.style.height=window.innerHeight+'px';

//Menu Bar Fixed Process
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > window.innerHeight){
        $(".main-menu").addClass("menu_fix");
    }
    else{
        $(".main-menu").removeClass("menu_fix"); 
    }
});
//progress bar process
  (function($) {
    'use strict';

    $('.html').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#6dc107',
        height:"10px"
    });
    $('.css').rProgressbar({
        percentage: 50,
        fillBackgroundColor: '#6dc107',
        height:"10px"
    });
    $('.php').rProgressbar({
        percentage: 35,
        fillBackgroundColor: '#6dc107',
        height:"10px"
    });
 

})(jQuery);


//END OF THE HEADER PART HEIGHT MAPING

////$(function(){
////// About part slider
////$('.about-slider').slick({
////  slidesToShow: 4,
////  slidesToScroll: 1,
////  autoplay: true,
////  autoplaySpeed: 2000,
////    arrows:false,
////    
//// responsive: [
////    {
////      breakpoint: 576,
////      settings: {
////        slidesToShow: 2,
////      }
////    },
////    {
////      breakpoint: 481,
////      settings: {
////        slidesToShow: 1,
////      }
////    } 
////  ]    
////});
////    
////    
////});
//
//
//new WOW().init();
//
//
//
//

//
//$(window).scroll(function(){
//    var scrolling = $(this).scrollTop();
//    
//    if(scrolling > 200){
//        $(".goTop").fadeIn();
//    }
//    else{
//        $(".goTop").fadeOut();
//    }
//});
//
//
//
//$(".goTop").click(function(){
//    $("html,body").animate({
//        scrollTop:0,
//    },1000);
//});
//
//
//
//
//
//
//
//
//
//
//
//
//
//$(function(){
//// About part slider
//$('header').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  autoplay: true,
//  autoplaySpeed: 3000,
//    arrows:true,
//    dots:true,
//   nextArrow: '<i class="prev">&#10094;</i>',
//   prevArrow: '<i class="next">&#10095;</i>',
//    
//    
// responsive: [
//    {
//      breakpoint: 576,
//      settings: {
//        slidesToShow: 3,
//      }
//    },
//    {
//      breakpoint: 481,
//      settings: {
//        slidesToShow: 1,
//      }
//    }, 
//     {
//      breakpoint: 768,
//      settings: {
//        slidesToShow: 2,
//      }
//    } 
//  ]    
//});
//    
//    
//});
//
//

//
//
//
//
//
//
//
//
//
