var authenticated = false;

function updateMessageForTimeOfDay(timeOfDay) {

  if (timeOfDay == "morning" && messageTimeOfDay != "morning") {

    messageTimeOfDay = "morning"
    $("#message").fadeOut(2000, function() {
      document.getElementById("message").innerHTML = "Good morning!";
      $("#message").fadeIn(2000);
    });
  } else if (timeOfDay == "afternoon" && messageTimeOfDay != "afternoon") {

      messageTimeOfDay = "afternoon"
      $("#message").fadeOut(2000, function() {
        document.getElementById("message").innerHTML = "Good afternoon!";
        $("#message").fadeIn(2000);
      });
  } else if (timeOfDay == "evening" && messageTimeOfDay != "evening") {

      messageTimeOfDay = "evening"
      $("#message").fadeOut(2000, function() {
        document.getElementById("message").innerHTML = "Good evening!";
        $("#message").fadeIn(2000);
      });

  }
}

function updateMessageForUserAuth(auth) {

  if (auth) {

    if (!authenticated) {

      authenticated = true;
      showCalendar();

      $("#auth-Message-Text").fadeOut("slow", function() {
        document.getElementById("auth-Message-Text").innerHTML = "User Authorized";
        $("#auth-Message-Text").fadeIn("slow", function() {
          $("#auth-Message-Text").fadeOut(3000, function() {
          });
        });
      });

    }
  } else {

    if (authenticated) {

      authenticated = false;
      hideCalendar();

      $("#auth-Message-Text").fadeOut("slow", function() {
        document.getElementById("auth-Message-Text").innerHTML = "Unknown User";
        $("#auth-Message-Text").fadeIn("slow", function() {
          $("#auth-Message-Text").fadeOut(2000);
        });
      });

    }
  }
}


function showCalendar() {

  $("#calendarTable").fadeIn(6000);
  $("#output").fadeIn(6000);

}

function hideCalendar() {
  $("#calendarTable").fadeOut(1000);
  $("#output").fadeOut(1000);
}

function hideCalendarOnStartup() {
  $("#calendarTable").fadeOut(100);
  $("#output").fadeOut(100);
}

function hideAuthFaceOnStartup() {
  $("#authImage").fadeOut(100);
}











