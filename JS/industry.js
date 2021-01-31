$(".btn01").click(function () {
    $('.bb1').removeClass('hide');
    $('.bb2').addClass('hide');
    $('.bb3').addClass('hide');
    $('.bb4').addClass('hide');
})
$(".btn02").click(function () {
    $('.bb2').removeClass('hide');
    $('.bb1').addClass('hide');
    $('.bb3').addClass('hide');
    $('.bb4').addClass('hide');
})
$(".btn03").click(function () {
    $('.bb3').removeClass('hide');
    $('.bb1').addClass('hide');
    $('.bb2').addClass('hide');
    $('.bb4').addClass('hide');
})
$(".btn04").click(function () {
    $('.bb4').removeClass('hide');
    $('.bb2').addClass('hide');
    $('.bb3').addClass('hide');
    $('.bb1').addClass('hide');
})
$(".allhide").click(function () {
    $('.bb1').addClass('hide');
    $('.bb2').addClass('hide');
    $('.bb3').addClass('hide');
    $('.bb4').addClass('hide');
})