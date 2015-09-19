/**
 * Created by petrov on 31.08.15.
 */
$(document).ready(function(){
    //drop ul
    $('.drop-ul').click(function(e){
            $(this).toggleClass('active');
        return false
    });
    //menu click
    $('.nav-button').click(function(){
       $('.body-blob').toggleClass('opened');
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
    $dropMain.click(function(e){
        if($(this).hasClass('active')) {
            $(this).removeClass('active')
        }
        else {
            $dropMain.removeClass('active');
            $(this).addClass('active');
        }
        return false;
    });
});