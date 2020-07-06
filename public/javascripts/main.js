$(document).ready(function () {

    // get header height to add space for the next div
    const headerDivHeight = $('#header-div').height() + 40;
    $('header').css('margin-bottom', headerDivHeight);

    // get logo width to center main logo horizontally
    const loginLogoWidth = $('.login-logo-header').width();
    $('.tmyc-logo-header').css('margin-left', loginLogoWidth);

    // get email field height to center arrow horizontally
    const emailNewsletterHeight = $('.send-newsletter').height();
    $('.arrow-newsletter').css('max-height', emailNewsletterHeight * 0.75);

    $('.battle-race').hide();

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


    $(".btn-discover").on('click', function (e) {
        if ($(this).css('cursor') !== 'pointer')
            return;

        // adding and removing borders on click
        $('.btn-battle-race').removeClass('border-yellow');
        $('.btn-e-sport').removeClass('border-orange');
        $(this).addClass('border-black');

        // update logo color smoothly
        $('.tmyc-logo-header').fadeTo(500, 0.2, function () {
            $(this).attr('src', '/images/tmyc-logos/black.svg');
            $('.tmyc-logo-header').fadeTo(500, 1, function () {
                $(this).attr('src', '/images/tmyc-logos/black.svg');
            });
        });

        $(this).css('cursor', 'default');

        $('.battle-race').fadeOut(1500);
        $('.discover').fadeIn(500);
    });

    $(".btn-battle-race").on('click', function (e) {
        if ($(this).css('cursor') !== 'pointer')
            return;

        // adding and removing borders on click
        $('.btn-discover').removeClass('border-black');
        $('.btn-e-sport').removeClass('border-orange');
        $(this).addClass('border-yellow');

        // update logo color smoothly
        $('.tmyc-logo-header').fadeTo(500, 0.2, function () {
            $(this).attr('src', '/images/tmyc-logos/yellow.svg');
            $('.tmyc-logo-header').fadeTo(500, 1, function () {
                $(this).attr('src', '/images/tmyc-logos/yellow.svg');
            });
        });

        $(this).css('cursor', 'default');

        $('.discover').fadeOut(500);
        $('.battle-race').fadeIn(1500);
    });

    $(".btn-e-sport").on('click', function (e) {
        if ($(this).css('cursor') !== 'pointer')
            return;

        // adding and removing borders on click
        $('.btn-discover').removeClass('border-black');
        $('.btn-battle-race').removeClass('border-yellow');
        $(this).addClass('border-orange');

        // update logo color smoothly
        $('.tmyc-logo-header').fadeTo(500, 0.2, function () {
            $(this).attr('src', '/images/tmyc-logos/orange.svg');
            $('.tmyc-logo-header').fadeTo(500, 1, function () {
                $(this).attr('src', '/images/tmyc-logos/orange.svg');
            });
        });

        $(this).css('cursor', 'default');
    });
});