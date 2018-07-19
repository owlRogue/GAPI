// const Express = require('./credentialsv2.js');


// var sheet_ID;
// var sheet_range;
// var sheet_title;

// var sheet = [
//   (defaultSheet = {
//     sheet_ID: '1l1GyTc65N-afxhIJ-9O7eogKYdOIUvZQw1m1D9IWoyQ',
//     sheet_range: ['A1:Q100'],
//     sheet_title: 'dummy data'
//   }),
//   (sheet1 = {
//     sheet_ID: '1KbuidBzpeH_i6X-1QoXgxcyi2PoldMyiBtqvRX_OuAQ',
//     sheet_range: ['A1:ZZ200'],
//     sheet_title: 'Data Bunch 1'
//   }),
//   (sheet2 = {
//     sheet_ID: 'INSERT SHEET ID FROM URL',
//     sheet_range: ['INSERT RANGE ARRAY'],
//     sheet_title: 'Insert sheet title'
//   }),
//   (sheet3 = {
//     sheet_ID: 'INSERT SHEET ID FROM URL',
//     sheet_range: ['INSERT RANGE ARRAY'],
//     sheet_title: 'Insert sheet title'
//   }),
//   (sheet4 = {
//     sheet_ID: 'INSERT SHEET ID FROM URL',
//     sheet_range: ['INSERT RANGE ARRAY'],
//     sheet_title: 'Insert sheet title'
//   })
// ];

// Make API call to gSheets:
function makeApiCall() {
  $("#instructions")
    .empty()
    .removeClass("instructions");

  const params = {
    spreadsheetId: sheet.sheet_ID,
    range: sheet.sheet_range,
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "SERIAL_NUMBER"
  };

  const request = gapi.client.sheets.spreadsheets.values.get(params);

  request.then(function(response) {
    renderTable(response.result.values);
  });
};

// Set landing page to Legend:
function landingPage() {
  sheet_ID = defaultSheet.sheet_ID;
  sheet_range = defaultSheet.sheet_range;
  makeApiCall();
}; 

// ERROR CHECK FEATURE: logs file loaded to console
logFile();