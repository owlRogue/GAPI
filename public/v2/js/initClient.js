// Authenticate Google:
var initClient = () => {

  $("#instructions").text("authenticating credentials...");
  $("#instructions").addClass("instructions");
  const API_KEY = credentials.gapi_Key;
  const CLIENT_ID = credentials.gapi_Client;
  const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

var handleClientLoad = () => {
  gapi.load("client:auth2", initClient);
}

var updateSignInStatus = () => {
  $("#instructions").text(
    "You are signed in. Please select a report from the nav bar."
  );
  if (!$("#instructions").hasClass("instructions")) {
    $(this).addClass("instructions");
  }
}

var handleSignInClick = () => {
  gapi.auth2.getAuthInstance().signIn();
}

// ERROR CHECK FEATURE: logs file loaded to console
logFile();