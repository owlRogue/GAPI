// Make API call to gSheets:
var makeApiCall = () => {
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

  request.then(response => {
    renderTable(response.result.values);
  });
};

// Set landing page to Legend:
var landingPage = () => {
  sheet_ID = defaultSheet.sheet_ID;
  sheet_range = defaultSheet.sheet_range;
  makeApiCall();
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();
