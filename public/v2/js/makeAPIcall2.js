// CHANGE ME AND UPDATE MY TITLE TO makeAPIcall.js

var sheet_ID;
var sheet_range;
var sheet_title;

var sheet = [
  (defaultSheet = {
    sheet_ID: "1KbuidBzpeH_i6X-1QoXgxcyi2PoldMyiBtqvRX_OuAQ",
    sheet_range: ["A1:ZZ200"],
    sheet_title: "Data Bunch 1"
  }),
  (sheet1 = {
    sheet_ID: "INSERT SHEET ID FROM URL",
    sheet_range: ["INSERT RANGE ARRAY"],
    sheet_title: "Insert sheet title"
  }),
  (sheet2 = {
    sheet_ID: "INSERT SHEET ID FROM URL",
    sheet_range: ["INSERT RANGE ARRAY"],
    sheet_title: "Insert sheet title"
  }),
  (sheet3 = {
    sheet_ID: "INSERT SHEET ID FROM URL",
    sheet_range: ["INSERT RANGE ARRAY"],
    sheet_title: "Insert sheet title"
  }),
  (sheet4 = {
    sheet_ID: "INSERT SHEET ID FROM URL",
    sheet_range: ["INSERT RANGE ARRAY"],
    sheet_title: "Insert sheet title"
  })
];

// Make API call to gSheets:
function makeApiCall() {
    $("#instructions")
      .empty()
      .removeClass("instructions");
  
    const params = {
      spreadsheetId: sheet_ID,
      range: sheet_range,
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