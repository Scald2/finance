/**
 * Created by dmitry on 31.08.15.
 */
$(document).ready(function(){
    //drop ul
    $('.drop-ul').click(function(e){
            $(this).toggleClass('active');
            //update scroll for hiden divs
            if($(this).hasClass('hasScroll')) {
                $("#scroll-button").customScrollbar({
                    preventDefaultScroll: true
                });
        }
    });
    //menu click
    $('.nav-button').click(function(){
       $('.body-blob').toggleClass('opened');
        $("#scroll-shadowed").customScrollbar({
            preventDefaultScroll: true,
            fixedThumbHeight: 8,
            swipeSpeed: 1
        });
    });
    //scroll
    $("#scroll-shadowed, #scroll-button").mCustomScrollbar({
        theme: 'dark',
        autoDraggerLength: false,
        advanced: {
            updateOnContentResize: true
        }
    });
    //click for menu
    var $dropMain = $('.hasDrop_main');
    $dropMain.click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
        }
        else {
            $dropMain.removeClass('active');
            $(this).addClass('active');
        }
    });
    //parallax width
    $window = $(window);
    $window.scroll(function(){
        if($window.scrollTop() + $window.height() >= $('#wide_parallax').offset().top) {
            $('#main_parallax').addClass('wide');
        }
        else {
            $('#main_parallax').removeClass('wide');
        }
    });
    //carousel waiting
    setInterval(function(){
        var $rectWidth = parseInt($('#Rectangle').attr('width'), 10);
        $('#Rectangle').attr('width', $rectWidth + 43);
    }, 100);
    $('#carousel-top-2').on('slide.bs.carousel', function (e) {
        $('#Rectangle').attr('width', 0);
    });
});