import Credentials from '../../credentials/credentialsv2.js';

// var credentials = {
//   gapi_Key: "AIzaSyBCIdV3pRHZEYE-NY4-PFTiOtTjeFx36GY", // 
//   gapi_Client: "876864941121-gr57qs2lcfq8f4un9i1rsmcu53v3rivg.apps.googleusercontent.com"
// };

// Authenticate Google:
function initClient() {
// var credentials = {
//   gapi_Key: "AIzaSyDmahkvaiX7_UfvhIeneSkESNKR4MhDRbM", // KCH@GM
//   // gapi_Key: "AIzaSyDmahkvaiX7_UfvhIeneSkESNKR4MhDRbM", // palmer
//   // gapi_Key: "AIzaSyCbR_nmon6VsFaaCHti0s-ECRSw3jlrzd4", // cs
//   gapi_Client: "636126207964-eu6thv1vbffi8g7t0smvstctlgmmb6t6.apps.googleusercontent.com" // KCH@gmail
//   // gapi_Client: "291977590444-gsu34sc0jorph142r1ajmdo24sb7jab0.apps.googleusercontent.com" // palmer
//   // gapi_Client: "876864941121-gr57qs2lcfq8f4un9i1rsmcu53v3rivg.apps.googleusercontent.com" // cs
// };

// var credentials = {
//   gapi_Key: "INSERT API KEY",
//   gapi_Client:
//   "INSERT CLIENT ID"
// };
var credentials = {
  API_KEY: gapi_Key,
  CLIENT_ID: gapi_Client
};

  // $("#instructions").text("authenticating credentials...");
  // $("#instructions").addClass("instructions");


  
  const SCOPE = "https://www.googleapis.com/auth/spreadsheets/"
  gapi.client
    .init({
      apiKey: credentials.API_KEY,
      clientId: credentials.CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(function () {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function updateSignInStatus() {
  $("#instructions").text(
    "You are signed in. Please select a report from the nav bar."
  );
  if (!$("#instructions").hasClass("instructions")) {
    $(this).addClass("instructions");
  }
}

function handleSignInClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// ERROR CHECK FEATURE: logs file loaded to console
logFile();
