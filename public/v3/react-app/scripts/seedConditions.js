const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Conditionss collection and inserts the sheets below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reportplatform", {
    // useMongoClient: true
  }
);


var setup = [{
  metric: "metric 1",
  operator: operators["op1"],
  target: target["high"],
  valueParams: [90, 80, 70, 60],
  className: "metric-1"
},
{
  metric: "metric 2",
  operator: operators["op1"],
  target: target["high"],
  valueParams: [9.8, 9.3, 8.8, 7.0],
  className: "metric-2"
},

{
  metric: "metric-3",
  operator: operators["op1"],
  target: target["low"],
  valueParams: [8.8, 7.3, 6.8, 5.0],
  className: "metric-3"
},

{
  metric: "metric-4",
  operator: operators["op1"],
  target: target["low"],
  valueParams: [40, 30, 20, 17],
  className: "metric-4"
},

{
  metric: "metric-5",
  operator: operators["op1"],
  target: target["low"],
  valueParams: [600, 720, 840, 1050],
  className: "metric-5"
},

{ metric: "metric-6",
  operator: operators["op1"],
  target: target["bool"],
  valueParams: [99.0],
  className: "metric-6"
}
];
console.log(setup);
db.Conditions
  .remove({})
  .then(() => db.Conditions.collection.insertMany(setup))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
