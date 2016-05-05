var CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];


//Checks if user has authorized application
function checkAuth() {
  gapi.auth.authorize(
  {
    'client_id': CLIENT_ID,
    'scope': SCOPES.join(' '),
    'immediate': true
  }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('calendar');
  if (authResult && !authResult.error) {
    //Hides auth UI and loads client library
    authorizeDiv.style.display = 'none';
    loadCalendarApi();
  } else {
    //Shows auth UI, and allows user to initiate authorization
    //by clicking authorize button
    authorizeDiv.style.display = 'inline';
  }
}

//Initiate auth flow in response to user clicking authorize link/button
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

//Load Google Calendar client library. Lists upcoming events
//once client library is loadCalendarApi
function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

//Prints summary and start datetime/date of next ten events in the user's calendar.
//If no events exist, another message is printed
function listUpcomingEvents() {
  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderby': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;

    if (events.length > 0) {

      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        var date = convertDate(when.substring(0,10));
        var time = when.substring(11,16);

        console.log("Date: " + event.when);
        console.log("Name: " + event.summary);

        if (!when) {
          when = event.start.date;
        }

        var table = document.getElementById("calendarTable");
        var row = table.insertRow(-1);

        var dateOfEvent = row.insertCell(0);
        var timeOfEvent = row.insertCell(1);
        var nameOfEvent = row.insertCell(2);

        dateOfEvent.innerHTML = date;;
        timeOfEvent.innerHTML = time;
        nameOfEvent.innerHTML = event.summary;

      }
    } else {
      var table = document.getElementById("calendarTable");
      var row = table.insertRow(-1);

      var noEvents = row.insertCell(0);

      noEvents.innerHTML = "No upcoming events found!";
    }

  });
}




















