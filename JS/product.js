$(document).ready(function () {
    var c = $(".block")
    $(c).on("click", function () {
        $(this).find($(".product")).toggleClass('flip');
    });
});