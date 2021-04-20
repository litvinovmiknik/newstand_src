$(function() {
    $('.address__link').on('click', function(e) {
        e.preventDefault();
        $('.address__popup').toggle();
    });

    $('html, body')
        .on('click', function() {
            $('.address__popup').hide();
        })
        .on('click', '.address__link, .address__popup', function(e) {
            e.stopPropagation();
        });
});