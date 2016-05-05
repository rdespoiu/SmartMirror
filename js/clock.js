var messageTimeOfDay = "";

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
  var currentMonth = currentTime.getMonth ( ) + 1;
  var currentDay = currentTime.getDate ( );
  var currentYear = currentTime.getFullYear ( );
  var dayOfWeek = currentTime.getDay();
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayOfWeek = daysOfWeek[parseInt(dayOfWeek)];
  
  // Pad mins/secs with zeroes
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // AM/PM
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  //Display hours in 12-hour format
  currentHours = ( currentHours % 12 == 0) ? 12 : currentHours % 12;

  // Build display string
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  var currentDateString = currentMonth + "/" + currentDay + "/" + currentYear;
  

  // Update time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("date").firstChild.nodeValue = currentDateString;
  document.getElementById("day").firstChild.nodeValue = dayOfWeek;

  /**
  // Messages disabled while testing news feed functionality 

  if (timeOfDay == "AM") {
    updateMessageForTimeOfDay("morning");
  }
  else if (timeOfDay == "PM") {
    if (currentHours < 5) {
      updateMessageForTimeOfDay("afternoon");
    }
    else if (currentHours >= 5) {
      updateMessageForTimeOfDay("evening");
    }
  }

  **/

}