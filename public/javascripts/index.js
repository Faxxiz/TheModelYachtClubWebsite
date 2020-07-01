$(document).ready(function () {

    // get header height to add space for the next div
    const headerDivHeight = $('#header-div').height() + 40;
    $('.home-content').css('margin-top', headerDivHeight);

    // get logo width to center main logo horizontally
    const loginLogoWidth = $('.login-logo-header').width();
    $('.tmyc-logo-header').css('margin-left', loginLogoWidth);

    // get email field height to center arrow horizontally
    const emailNewsletterHeight = $('.send-newsletter').height();
    $('.arrow-newsletter').css('max-height', emailNewsletterHeight * 0.75);


    // cursor changed to pointer if the pointed element is not the current page
    function addPointer(thisObj) {
        if (thisObj.css('border-bottom-style') !== 'solid') {
            thisObj.css('cursor', 'pointer');
        } else {
            thisObj.css('cursor', 'default');
        }
    }

    $('.btn-discover').mouseenter(function () {
        addPointer($(this));
    });
    $('.btn-battle-race').mouseenter(function () {
        addPointer($(this));
    });
    $('.btn-e-sport').mouseenter(function () {
        addPointer($(this));
    });


    // adding and removing borders on click
    $(".btn-discover").on('click', function () {
        if ($(this).css('cursor') !== 'pointer')
            return;
        $('.btn-battle-race').removeClass('btn-header-border');
        $('.btn-e-sport').removeClass('btn-header-border');
        $(this).addClass('btn-header-border');
    });

    $(".btn-battle-race").on('click', function () {
        if ($(this).css('cursor') !== 'pointer')
            return;
        $('.btn-discover').removeClass('btn-header-border');
        $('.btn-e-sport').removeClass('btn-header-border');
        $(this).addClass('btn-header-border');
    });

    $(".btn-e-sport").on('click', function () {
        if ($(this).css('cursor') !== 'pointer')
            return;
        $('.btn-discover').removeClass('btn-header-border');
        $('.btn-battle-race').removeClass('btn-header-border');
        $(this).addClass('btn-header-border');
    });
});