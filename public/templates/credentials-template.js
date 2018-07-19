// Welcome to our reporting platform! Let's get started with credentials.
// NOTE: Credentials setup is only necessary in the dev environments.

// INSTRUCTIONS for credentials2.js:

// 1. Enable sheets API here:
//       • [https://console.developers.google.com/apis/library/sheets.googleapis.com?q=sheets&id=739c20c5-5641-41e8-a938-e55ddc082ad1&project=csbi-test-1&folder&organizationId=551112949629]

// 2. Create a new project to generate credentials (should only do this one time for the app) :
//       • [https://console.developers.google.com/projectcreate?previousPage=%2Fapis%2Fcredentials%3Ffolder%3D%26organizationId%3D551112949629%26project%3Dcsbi-test-1&organizationId=551112949629]

// 3. API Key Restriction Settings:
//       • Application restrictions: None
//       • API restrictions: None

// 4. Set up OAuth 2.0 Client ID
//     Type: Web Application

// 5. Allow access to  http://localhost:8000 for both Restrictions:
//      • Authorized JavaScript origins
//      • Authorized Redirect URIs

// 6. Replace variables for Key and Client

// 7. Retitle this file 'credentials.js'

// More info... from https://console.developers.google.com/apis/:

var credentials = {
    gapi_Key: "INSERT YOUR API KEY FROM GOOGLE CONSOLE",
    gapi_Client: "INSERT CLIENT ID"
};

var sheet = [

    (defaultSheet = {
        sheet_ID: '1l1GyTc65N-afxhIJ-9O7eogKYdOIUvZQw1m1D9IWoyQ',
        sheet_range: ['A1:Q100'],
        sheet_title: 'dummy data'
    }),

    (sheet1 = {
        sheet_ID: "INSERT SHEET ID",
        sheet_range: ["INSERT RANGE"],
        sheet_title: "INSERT TITLE"
    }),

    (sheet2 = {
        sheet_ID: "INSERT SHEET ID",
        sheet_range: ["INSERT RANGE"],
        sheet_title: "INSERT TITLE"
    }),

    (sheet3 = {
        sheet_ID: "INSERT SHEET ID",
        sheet_range: ["INSERT RANGE"],
        sheet_title: "INSERT TITLE"
    }),

    (sheet4 = {
        sheet_ID: "INSERT SHEET ID",
        sheet_range: ["INSERT RANGE"],
        sheet_title: "INSERT TITLE"
    })
];