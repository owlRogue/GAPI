import React from 'react';
import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login'; 
// import { GoogleLogin } from 'react-google-login';

export const responseGoogle = (response) => {
  console.log(response);
}
  
ReactDOM.render(
  <Report1
    // clientId={'208109669255-s9hf7ile0omkkivpcm6plpdiagn4ccl6.apps.googleusercontent.com'}
    buttonText="Report1"
    // onSuccess={responseGoogle}
    // onFailure={responseGoogle}
  />,
  document.getElementById('switchreportButton')
);