//business
var userResult = [];

function hasNumbers(originalInput) {
  return /\d/.test(originalInput);
}

function pingPong(originalInput) {
  for (var index = 1; index <= originalInput; index++) {
    if ((index % 15) === 0) {
      userResult.push("pingpong!");
    } else if ((index % 3) === 0) {
      userResult.push("ping!");
    } else if ((index % 5) === 0) {
      userResult.push("pong!");
    } else {
      userResult.push(index);
    }
  } return userResult;
};

// UI
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    var originalInput = parseInt($("input#userInput").val());
    var isNumber = hasNumbers(originalInput);
    var finalOutput = pingPong(originalInput);

    realFinalOutput = userResult.map(function(result) {
      return "<li>" + result + "</li>";
    });

    if (isNumber === false) {
      alert("Please only use numbers");
    } else if (originalInput < 1) {
      alert("Please only use positive numbers");
    } else {
      $("#result").append(realFinalOutput);
      $(".output").show();
    }
    event.preventDefault();
  });
});
