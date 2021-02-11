$(document).ready(function(){

let isCollapsed = 0;

$(".menuBtn").click(() => {

    $(".menuBtn").toggleClass("rotated");
    $(".l2").toggleClass("small");
    $(".l3").toggleClass("smallest");

    $(".menu").slideToggle(300);
    $(".menu").toggleClass("menuFlex");

    $(".menu-item").delay("fast").fadeIn();
    $(".menu-item").toggleClass("show-item");


    if($(".menuBtn").hasClass("rotated")) {
        $(".logo").html("Menu");
    } else {
        $(".logo").html("JH Portfolio");
    }

    })
});
