$(document).ready(function() {

$("#lion").click(function() {
  $("#lionpic").fadeToggle();
});

$("#lionpic").click(function() {
  $("p#roar").fadeToggle();
  $("body").toggleClass("lionBG")
  $("h1").toggleClass("h1lion")
});

$("#tigerpic").click(function() {
  $("body").toggleClass("tigerBG");
  $("h1").toggleClass("h1tiger");
});

$("#tiger").click(function() {
  $("#tigerpic").fadeToggle();
});
$("#bear").click(function() {
  $("#bearpic").fadeToggle();
});
});
