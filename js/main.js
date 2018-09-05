$(window).on('load', function () {
    
    //카드 위아래 움직이기
    var lifelist_center = ($(".life_list").height() * 0.5);
    var life_center = ($(".life").height() * 0.5);
    
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
    
    //등장효과
    $(".header_wrap").addClass("show");
    
    


    
    $(window).scroll(function(){
        var show_iphone = $(".header_wrap").offset().top + ($(".header_wrap").height() * 0.5);
        var show_life = $(".iphone").offset().top + ($(".iphone").height() * 0.5);
        var show_gift = $(".life").offset().top + ($(".life").height() * 0.5);
        var show_rate = $(".gift").offset().top + ($(".gift").height() * 0.5);
        var show_ft = $(".rate").offset().top + ($(".rate").height() * 0.5);
        
        console.log(show_iphone);
        
        if($(this).scrollTop() >= show_iphone) {
            $(".iphone").addClass("show");
        }
        
        if ($(this).scrollTop() >= show_life) {
            $(".life").addClass("show");
            $(".life_list").addClass("show");
            $(".life_txt").addClass("show");  
        }
        
        if ($(this).scrollTop() >= show_gift) {
            $(".gift").addClass("show");
            setTimeout(function(){
                $(".gift_list_item").addClass("show");
                $(".gift_list_item").eq(0).addClass("gift_show_01");
                $(".gift_list_item").eq(1).addClass("gift_show_02");
                $(".gift_list_item").eq(2).addClass("gift_show_03");
            },500);
            setTimeout(function(){
                $(".gift_list_item").eq(0).removeClass("gift_show_01");
                $(".gift_list_item").eq(1).removeClass("gift_show_02");
                $(".gift_list_item").eq(2).removeClass("gift_show_03");
            },3000);
        }
        
        if ($(this).scrollTop() >= show_rate) {
            $(".rate").addClass("show");
        }
        
        if ($(this).scrollTop() >= show_ft) {
            $("footer").addClass("show");
        }
        
        return false
    });/*스크롤 펑션*/
    


});/*onload*/

$(document).ready(function(){
    

});/*ready*/