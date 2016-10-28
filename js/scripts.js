//business

function hasNumbers(originalInput) {
  return /\d/.test(originalInput);
}





// UI
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var originalInput = parseInt($("input#userInput").val());
    var isNumber = hasNumbers(originalInput);
    // var finalOutput = _____(originalInput);

    if (isNumber === false) {
      alert("Please only use positive numbers");
    } else {
      $("result").text(finalOutput);
      $("output").append();
    }

  });
});
