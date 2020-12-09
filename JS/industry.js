$(document).ready(function () {
  let githubURL = new URL(location.href);
  let params = githubURL.searchParams;
  if (params.has('q')) {
    var a = document.getElementById(params.get('q'));
    $("#Upstream").toggleClass("active show")
    $(a).toggleClass('active show');
  }
  var c = $(".block")
  $(c).on("click", function () {
    $(this).find($(".product")).toggleClass('flip');
  });
});