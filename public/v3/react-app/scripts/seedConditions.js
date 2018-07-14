const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Sheets collection and inserts the sheets below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reportplatform", {
    // useMongoClient: true
  }
);

var setup = [
  (fcr = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [90, 80, 70, 60],
    className: "7-day-call-fcr"
  }),

  (agent_ease = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "high",
    valueParams: [9.8, 9.3, 8.8, 7.0],
    className: "agent-ease"
  }),

  (replacement_rate = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [8.8, 7.3, 6.8, 5.0],
    className: "replacement-rate"
  }),

  (aux = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [40, 30, 20, 17],
    className: "aux"
  }),

  (aht = {
    condition: conditions["default"],
    operator: operators["op1"],
    target: "low",
    valueParams: [600, 720, 840, 1050],
    className: "aht"
  }),

  (deltacast = {
    condition: conditions["bool"],
    operator: operators["op1"],
    target: "bool",
    valueParams: [99.0],
    className: "deltacast"
  })
];


db.Sheet
  .remove({})
  .then(() => db.Sheet.collection.insertMany(setup))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
