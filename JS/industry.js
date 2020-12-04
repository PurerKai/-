$(document).ready(function () {
    var c=$(".block")
    console.log(c)
    $(c).on("click", function () {
      $(this).find($(".product")).toggleClass('flip');
    });
});