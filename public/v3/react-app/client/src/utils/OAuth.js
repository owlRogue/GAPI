import React from 'react';
import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login'; 
import { GoogleLogin } from 'react-google-login';
 
const responseGoogle = (response) => {
  console.log(response);
}

// var credentials = {
//   // gapi_Key: "AIzaSyAks0XPRiz2lyWUEp8vsjC0Ie0CMGnHWsk",
//   gapi_Client:
//     "208109669255-s9hf7ile0omkkivpcm6plpdiagn4ccl6.apps.googleusercontent.com"
// };

  // const API_KEY = credentials.gapi_Key;
  // const CLIENT_ID = credentials.gapi_Client;
  
ReactDOM.render(
  <GoogleLogin
    clientId="208109669255-s9hf7ile0omkkivpcm6plpdiagn4ccl6.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);

// https://developers.google.com/identity/sign-in/web/sign-in