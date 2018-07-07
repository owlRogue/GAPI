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
    title: 'Agent MtD - Import',
    gid: '1-nT-x2v6abhbaOzDABH3XkUWfS65ihfB8SAdZPIug1I',
    range: ['A1:R1200'],
    date: new Date(Date.now())
  },
  {
    title: 'Team MtD ScoreCard',
    gid: '1JqGHHQb04UF99ch9r9zTADCIAnbUevvyDYK9I8OMS20',
    range: ['A1:L100']
  },
  {
    title: 'Agent MtD – Autofill',
    gid: '1SB_o8MuffgbFURB_YxxzqXpaFLrYsvAEUWovrSDjxFE',
    range: ['A1:R100']
  },
  {
    title: 'Agent EoD – Autofill',
    gid: '1_iIXq7Pj9OEqgXpJfVP6nIw5j_oN-QvttqDm5D0BkeY',
    range: ['A1:R100']
  },
  {
    title: 'Agent WtD – Autofill',
    gid: '1OLDvp6kvyCPZC_izDchq7bgcRQ9r_8CgrKPMuQbNlsM',
    range: ['A1:R100']
  },
  {
    title: 'Legend',
    gid: '1GVluuYF9hAgCu5fH9nUqbrQsb-j-r8kLaRFSKE0thi8',
    range: ['Legend - Source!A1:F37']
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
