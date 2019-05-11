var intervalDate = new Date("May 12, 2019 15:37:25").getTime();
var interval = setInterval(function() {
  var now = new Date().getTime();
  var dateRange = intervalDate - now;
  var days      = Math.floor(dateRange / (1000 * 60 * 60 * 24));
  var hours     = Math.floor((dateRange % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes   = Math.floor((dateRange % (1000 * 60 * 60)) / (1000 * 60));
  var seconds   = Math.floor((dateRange % (1000 * 60)) / 1000);
  function asingValues(days, hours, minutes, seconds){
    document.getElementById("days").innerHTML    = days;
    document.getElementById("hours").innerHTML   = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  if (dateRange < 0) {
    var expired = "No time"
    clearInterval(interval); //<-Stop time.
    asingValues(expired, expired, expired, expired);
  }else{
    asingValues(days, hours, minutes, seconds);
  }
}, 1000);
