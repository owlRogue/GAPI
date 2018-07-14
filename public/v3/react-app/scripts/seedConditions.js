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

    highoperator: ['>=', '<', '>'],
    lowoperator: ['<=', '>', '<'],
    equals: ['='],
    ampersand: ['&&'],
    orpipes: ['||'],
    hightarget: ['excellent', 'effective', 'average', 'improvable', 'unacceptable'],
    lowtarget: ['unacceptable', 'improvable', 'average', 'effective', 'excellent'],
    booltarget: ['pass', 'fail']

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