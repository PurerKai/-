$(document).ready(function () {
  let githubURL = new URL(location.href);
  let params = githubURL.searchParams;
  if (params.has('q')) {
    var a = document.getElementById(params.get('q'));
    $("#Internet-commerce").toggleClass("active show")
    $(a).toggleClass('active show');
  }
});