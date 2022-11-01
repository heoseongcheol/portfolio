$(document).ready(function(){
    $(".menu>li").hover(function(){
        $(this).children(".submenu").stop().slideDown("fast");
    },function(){
        $(this).children(".submenu").stop().slideUp("fast");
    });
});
