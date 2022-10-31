$(function(){
    $(".main_menu>li").hover(function(){
       $(this).children(".sub_menu").stop().fadeIn(300);
    },function(){
       $(this).children(".sub_menu").stop().fadeOut(300);
    });
 });

$(function(){
    $("#search").click(function(){
       $(".search").fadeIn(300);
    });
 });
$(function(){
    $("#close").click(function(){
       $(".search").fadeOut(300);
    });
 });


var n = 0;
$(".carousel a").eq(n).children("img").attr("src","./images/ca_bar_ov.png");
function count(){
    n++;
    if(n<3){
        slideView(n);
    } else{
        n=0;
        slideView(n);
    }
}
var time = 3500;
var slideStart = setInterval("count()",time);
$(document).ready(function(){
    $(".slide>a:nth-of-type(3)>img").css("opacity","0");
});
function slideView(n){
    $(".carousel a").children("img").attr("src","./images/ca_bar.png");

    $(".carousel a").eq(n).children("img").attr("src","./images/ca_bar_ov.png");

    
    $(".slide img").animate({"opacity":"0"},1000);
    $(".slide img").eq(n).stop().addClass("topImg").css("opacity",0).animate({"opacity":"1"},1000);
}

$(".bnr").hover(function(){
    clearInterval(slideStart);
},function(){
    slideStart = setInterval("count()" , time);
});

$(".carousel a").click(function(){
    n= $(this).attr("data-i");
    slideView(n);
});

function nextFunc(){
   n++;
   if(n<=2){
    slideView(n);
} else{
    n=0;
    slideView(n);
}
}

function prevFunc(){
   n--;
   if(n>=0){
    slideView(n);
} else{
    n=0;
    slideView(n=2);
}
}

















/*
function nextFunc(){
   $(".slide").append($(".slide a").first().clone());
   $(".slide a").first().remove();
}

function prevFunc(){
   $(".slide").prepend($(".slide a").last().clone());
   $(".slide a").last().remove();
}



var slideAuto = setInterval(() => {
   $(".slide").animate({"margin-left":"-1920px"},function(){
       $(".slide>a:first-child").appendTo(".slide");
       $(".slide").css("margin-left","0");
   });
},2000);




$(".bnr>button").hover(function(){
    clearInterval(slideAuto);
},function(){
   slideAuto = setInterval(() => {
      $(".slide").animate({"margin-left":"-1920px"},function(){
          $(".slide>a:first-child").appendTo(".slide");
          $(".slide").css("margin-left","0");
      });
   },2000);
});

$(".slide").hover(function(){
    clearInterval(slideAuto);
},function(){
   slideAuto = setInterval(() => {
      $(".slide").animate({"margin-left":"-1920px"},function(){
          $(".slide>a:first-child").appendTo(".slide");
          $(".slide").css("margin-left","0");
      });
   },2000);
});
*/



