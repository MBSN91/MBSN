//*** button test 1 */

$("#1").on("focus", function () {
  $("#1").addClass("focus");
  $("#1").removeClass("mouseover");
  $("#1place").addClass("focus");
  $("#1place").removeClass("mouseover");
});

$("#1").on("mouseover", function () {
  $("#1").removeClass("focus");
  $("#1").addClass("mouseover");
  $("#1place").removeClass("focus");
  $("#1place").addClass("mouseover");
});

$("#1").on("mouseout", function () {
  $("#1").removeClass("focus");
  $("#1").removeClass("mouseover");
  $("#1place").removeClass("focus");
  $("#1place").removeClass("mouseover");
});

$("#1").click(function (e) {
  $("#1").addClass("focus");
  $("#1").removeClass("mouseover");
  $("#1place").addClass("focus");
  $("#1place").removeClass("mouseover");
});

var myElement = document.getElementById('1');if ($("#1").is(":focus")) {
  //I have the focus
}
if(myElement === document.activeElement){
  $("#1").css("pointer-events", "none");
}
