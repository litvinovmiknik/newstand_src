$(function() {
    $('.callback').on('click', function(e) {
        e.preventDefault();
        $('.popup').css('display', 'flex');
    });

    $('.popup__close, .popup').on('click', function() {
        $('.popup').hide();
    }).on('click', '.popup__container', function(e) {
        e.stopPropagation();
    });
});