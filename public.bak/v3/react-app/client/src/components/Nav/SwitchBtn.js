import React from 'react';
import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login'; 
// import { GoogleLogin } from 'react-google-login';

export const getSheet = (response) => {
  console.log(response);
}
  
ReactDOM.render(
  <Report1
    sheetId={sheet.__id}
    buttonText={sheet.title}
    onSuccess={getSheet}
    onFailure={missingReport}
  />,
  document.getElementById('switchreportButton')
);