const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Sheets collection and inserts the sheets below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reportplatform", {
    // useMongoClient: true
  }
);

const matrixSeed = [

    (conditions = {
      default: ["1", "2", "3", "4", "5"],
      bool: ["pass", "fail"],
      custom: []
    })
    // ,
    // (operators = {
    //   op1: [">=", "<", ">"],
    //   op2: ["<=", ">", "<"],
    //   custom: []
    // }),
    // (target = {
    //   high: ["exceptional", "effective", "achieves", "NI", "unacceptable"],
    //   low: ["unacceptable", "NI", "achieves", "effective", "exceptional"],
    //   bool: ["pass", "fail"]
    // }),

    // (valueParam = {
    //   vP: []
    // })
  ];

db.LogicMatrix
  .remove({})
  .then(() => db.LogicMatrix.collection.insertMany(matrixSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });