/**
 * Created by petrov on 31.08.15.
 */
$(document).ready(function(){
    //drop ul
    $('.drop-ul').click(function(e){
            $(this).toggleClass('active');
        return false
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
    //carousel waiting
    //if($('#Rectangle').length) {
    //    setInterval(function(){
    //        var $rectWidth = parseInt($('#Rectangle').attr('width'), 10);
    //        $('#Rectangle').attr('width', $rectWidth + 43.6);
    //    }, 100);
    //    $('#carousel-top-2').on('slide.bs.carousel', function (e) {
    //        $('#Rectangle').attr('width', 0);
    //    });
    //}
    //mobil menu {}
    if($('#mobile_menu').length) {
        $('#mobile_open').click(function(){
           $('#mobile_menu').addClass('active');
            return false
        });
        $('#menu_close').click(function(){
            $('#mobile_menu').removeClass('active');
            return false
        });
    }
    //to destroy
    var $window = $(window);
    $window.scroll(function(){
       if($(this).scrollTop() >= $('.row.advantages.top').offset().top + 20) {
           $('#main_parallax').addClass('wide')
       }
        else {
           $('#main_parallax').removeClass('wide')
       }
    });
    //data-alert
    $('.normal-input').keyup(function(){
       if($(this).hasClass('alert')) {
           var $parent = $(this).parent();
           var $alert = $(this).data('alert');
           $('<div class="alertText">' + $alert + "</div>").prependTo($parent);
           console.log($alert);
       }
    });
    //ontop click
    $('#ontop').click(function(){
       $('body').animate({scrollTop: 0}, 300);
        return false
    });
    //initPhone
    if($('body').hasClass('RTL')) {

    }
    $("#phone").intlTelInput();
    //country select
    var $country = $('#country');
    $country.select2();
    //custom scroll bar
    $(".country-list").mCustomScrollbar({
        theme: 'dark',
        autoDraggerLength: false,
        advanced: {
            updateOnContentResize: true
        }
    });
    //carousel sync
    $('#carousel-top .carousel-indicators').click(function (e) {
        var $elem = e.target;
       var $slideTo = $($elem).data('slideTo');
       $('#carousel-top2').carousel($slideTo);
    });
    $('#carousel-bottom .carousel-indicators').click(function (e) {
        if (e.target.nodeName == 'LI') {
            $('.blue-line').addClass('active');
        };
        var $elem = e.target;
        var $slideTo = $($elem).data('slideTo');
        $('#carousel-bottom2').carousel($slideTo);
    });
    $('#carousel-bottom2').on('slid.bs.carousel', function(){
        $('.blue-line').removeClass('active');
    });
});