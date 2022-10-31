var n = 0; //인덱스값으로 사용할 변수
$("#carousel a").eq(n).children("img").attr("src","./images/btn_banner_ov.png");
function count(){
    n++; // count() 호출하면 n값은 +1이 됨.
    if(n<5){
        slideView(n);
    } else{
        n=0;
        slideView(n);
    }
}
var time = 1000; // 전역병수로 사용 (시간으로 사용)
var slideStart = setInterval("count()",time);

function slideView(n){
    $("#carousel a").children("img").attr("src","./images/btn_banner.png");
    // 캐로셀로 잡힌 이미지들 모두 선택해서 테두리만 있는 원으로 바꿈(전체)

    $("#carousel a").eq(n).children("img").attr("src","./images/btn_banner_ov.png");
    // $("#carousel a").eq(n).children("img") : 캐로셀 아이디 안에 있는 모든 a태그중에 eq(n)<-인덱스 값에 해당하는 a태그 선택. 그 a태그의 자식 요소중 img태그를 선택.

    $("#slideImg img").animate({"opacity":"0"},time-500);
    $("#slideImg img").eq(n).stop().addClass("topImg").css("opacity",0).animate({"opacity":"1"},time-500);
    //$("#slideImg img").eq(n).stop().addClass("topImg").css("opacity",0).
    //인덱스n 에 해당하는 이미지한테 topImg라는 클래스를 넣어주고. 해당 이미지한테 style="..." 인라인 스타일로 opacity:0을 셋팅해줌
    // 0을 셋팅 해줬다가 animate({"opacity":"1"},time-500) 을 실행해줌.
    // 투명도가 0.5초 동안 0 -> 1 로 바뀜.
}

$("#container").hover(function(){
    clearInterval(slideStart);
},function(){
    slideStart = setInterval("count()" , time);
});

$("#carousel a").click(function(){
    n= $(this).attr("data-i");
    slideView(n);
});




