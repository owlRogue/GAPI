import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login'; 
// import { GoogleLogin } from 'react-google-login';
 
const responseGoogle = (response) => {
  console.log(response);
}
  
ReactDOM.render(
  <GoogleLogin
    clientId={'208109669255-s9hf7ile0omkkivpcm6plpdiagn4ccl6.apps.googleusercontent.com'}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);

// https://developers.google.com/identity/sign-in/web/sign-in