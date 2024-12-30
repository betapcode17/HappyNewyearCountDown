(function ($) {
  // Fireworks function
  window.startFireworks = function () {
    $("#fireworks-container").fireworks();
  };
})(jQuery);

// Set the countdown date
var countDownDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML content
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If countdown is finished
  if (distance <= 0) {
    clearInterval(x);

    // Set all to "0"
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    console.log("Countdown finished. Starting fireworks!");
    // Trigger fireworks
    startFireworks();
    showPopup();
  }
}, 1000);
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Đóng popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
