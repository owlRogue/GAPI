const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Sheets collection and inserts the sheets below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reportplatform", {
    // useMongoClient: true
  }
);

const sheetSeed = [
  {
    title: 'Dummy Data',
    gid: '1l1GyTc65N-afxhIJ-9O7eogKYdOIUvZQw1m1D9IWoyQ',
    range: "['A1:Q100']",
    url: "https://docs.google.com/spreadsheets/d/"+this.gid
    // date: new Date(Date.now())
  },
  {
    title: 'Data Bunch 1',
    gid: '1KbuidBzpeH_i6X-1QoXgxcyi2PoldMyiBtqvRX_OuAQ',
    range: "['A1:ZZ200']",
    url: "https://docs.google.com/spreadsheets/d/"+this.gid
  },
  {
    title: 'Insert sheet title',
    gid: 'INSERT SHEET ID FROM URL',
    range: "['INSERT RANGE']",
    url: "https://docs.google.com/spreadsheets/d/"+this.gid
  },
  {
    title: 'Insert sheet title',
    gid: 'INSERT SHEET ID FROM URL',
    range: "['INSERT RANGE']",
    url: "https://docs.google.com/spreadsheets/d/"+this.gid
  },
  {
    title: 'Insert sheet title',
    gid: 'INSERT SHEET ID FROM URL',
    range: "['INSERT RANGE']",
    url: "https://docs.google.com/spreadsheets/d/"+this.gid
  }
];

db.Sheet
  .remove({})
  .then(() => db.Sheet.collection.insertMany(sheetSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
