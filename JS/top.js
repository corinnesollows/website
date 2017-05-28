
$(function () {
    $(".backtotop").hide();
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('.backtotop').fadeIn(400);
    } else {
        $('.backtotop').fadeOut(400);
    }
});

$("#backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
});
