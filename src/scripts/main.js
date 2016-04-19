import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
    $('.menu__item').hover(function(){
        $(this).addClass('menu__item--hover');
    }, function(){
        $(this).removeClass('menu__item--hover');
    });

    $('.menu__link').click(function(e){
        $(this).hasClass('overlay__link') && e.preventDefault();
        $('*').removeClass('menu__item--current');
        $(this).parent('.menu__item').addClass('menu__item--current');
    });

    $('#menu-toggle').click(function(e){
        e.preventDefault();
        if($(this).hasClass('menu_toggle_active')) {
            $(this).removeClass('menu_toggle_active');
            $('#header .menu').removeClass('visible');
        } else {
            $(this).addClass('menu_toggle_active');
            $('#header .menu').addClass('visible');
        }
    })
});
