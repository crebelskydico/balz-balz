import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {

    function showOverlay(hash) {
        const route = hash && hash.replace(/^#/, '');
        if($('.overlay').hasClass('visible')) {
            hideOverlay(route);
            hideMenu();
            return false;
        } else {
            $('.overlay__' + route).show();
            $('.overlay').addClass('visible');
        }
    }

    function hideOverlay(route) {
        $('.overlay__datenschutz, .overlay__impressum, .overlay__oeffnungszeiten').hide();
        $('.overlay').removeClass('visible');
    }

    function showNotice() {
        showOverlay('notice');
    }

    function showMenu() {
         if ($('#menu-toggle').hasClass('menu_toggle_active')) {
            hideMenu();
            $('#header').css('height', 'auto');
            return false;
        } else {
            $('#menu-toggle').addClass('menu_toggle_active');
            $('#header').css('height', '100%');
            $('#header .show-for-large').css('display') === 'block' ? $('#header .menu').addClass('visible') : $('#header .mobilemenu').addClass('visible');
        }
    }

    function hideMenu() {
        $('#menu-toggle').removeClass('menu_toggle_active');
        $('*').removeClass('menu__item--current');
        $('#header .menu, #header .mobilemenu').removeClass('visible');
    }

    $('.menu__item').hover(function(){
        $(this).addClass('menu__item--hover');
    }, function(){
        $(this).removeClass('menu__item--hover');
    });

    $('.menu__link').click(function(e){
        const hash = e.currentTarget.hash;
        $(this).hasClass('overlay__link') && e.preventDefault();
        $(this).hasClass('overlay__link') && showOverlay(hash);
        $('*').removeClass('menu__item--current');
        $(this).parent('.menu__item').addClass('menu__item--current');
    });

    $('#menu-toggle').click(function(){
        showMenu();
    })

    $('#overlay-toggle').click(function(){
        showOverlay();
    });

    $(window).on('load', function(){
       showNotice();
    });
});
