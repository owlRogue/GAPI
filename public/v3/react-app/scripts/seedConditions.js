const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Sheets collection and inserts the sheets below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reportplatform", {
    // useMongoClient: true
  }
);

const conditionSeed = [{

  bool_target: [{
    greater_eq: '>=',
    less_eq: '<='
  }],

  high_operator: [{
    greater_eq: '>=',
    less_than: '<',
    greater_than: '>',
    equals: '='
  }],

  low_operator: [{
    less_eq: '<=',
    greater_than: '>',
    less_than: '<',
    equals: '='
  }],
  high_target: [
    'excellent',
    'effective',
    'average',
    'improvable',
    'unacceptable'
  ],
  low_target: [
    'unacceptable',
    'improvable',
    'average',
    'effective',
    'excellent'
  ],
  equal_symbol: ['='],
  ampersand_symbol: ['&&'],
  or_symbol: ['||']
}];

db.Condition
  .remove({})
  .then(() =>
    db.Condition.collection.insertMany(conditionSeed)
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    })
  );