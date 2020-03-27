$(document).ready(function () {
  $("#questions").submit(function () {
    var climate = parseInt($("#climate").val());
    var gun = parseInt($("#gun").val());
    var immigration = parseInt($("#immigration").val());

    var result = climate + gun + immigration;


    if (result <= 4) {
      $("#result").text("Liberal, Congrads!");
    } else if (result <= 7) {
      $("#result").text("Moderate, Awesome!");
    } else if (result <= 10) {
      $("#result").text("Conservative, Super!");
    }

  event.preventDefault();

  });
});