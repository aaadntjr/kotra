$(window).on('load', function () {
    
    //카드 위아래 움직이기
    var lifelist_center = ($(".life_list").height() * 0.5);
    var life_center = ($(".life").height() * 0.5);
//    console.log(lifelist_top);
//    console.log(life_top);
    
    $(".life_list").css({"top" : life_center - lifelist_center});
     console.log(life_center - lifelist_center);
    
    $(".life_list_item").click(function(){
            $(this).addClass("view");
            $(this).siblings().removeClass("view");
    });
    
    var card_top = $(".view").offset().top;
    var card_center = ($(".view").height() * 0.5);
    
    $(".life_list_item").eq(0).click(function(){
        $(".life_list").css({"top" : life_center - lifelist_center + card_center*2 + 27});
    });
    $(".life_list_item").eq(2).click(function(){
        $(".life_list").css({"top" : life_center - lifelist_center - card_center*2 - 27});
    });
    $(".life_list_item").eq(1).click(function(){
        $(".life_list").css({"top" : life_center - lifelist_center});
    });//카드 끝


});/*onload*/

$(document).ready(function(){
    

});/*ready*/