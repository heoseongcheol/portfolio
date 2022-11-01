var slideIndex = 0;
function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    // .backimg안에 있는 모든 li에 접근 한 후 거기에 topImg 클래스가 있다면 지워 버려라!
    slideIndex++;
    var isIdx = slideIndex % 3;
    $(".backimg>li").eq(isIdx).addClass("topImg");
}
var slideCall = setInterval("slideAuto()", 3000);

$(".headerWrap").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()", 3000);
});


$(function(){
   $("#gnb>li").hover(function(){
      $(this).children(".sub").stop().fadeIn(300);
   },function(){
      $(this).children(".sub").stop().fadeOut(300);
   });
});

$(function(){
   $("#menu").click(function(){
      $(this).toggleClass("aniMenu");
      $("#gnb").fadeToggle(100);
   });
});
















