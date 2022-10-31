
function nextFunc(){
    $(".slideWrap").append($(".slideWrap li").first().clone());
    $(".slideWrap li").first().remove();
}

function prevFunc(){
    $(".slideWrap").prepend($(".slideWrap li").last().clone());
    $(".slideWrap li").last().remove();
}

var slideAuto = setInterval(() => {nextFunc()}, 3000);

$("#slide").hover(function(){
    clearInterval(slideAuto);
},function(){
    slideAuto = setInterval(() => {nextFunc()}, 3000);
});


