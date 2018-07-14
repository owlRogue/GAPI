const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conditionSchema = new Schema({


  valueParams: [{
    condition: String,
    numbers: Array
  }],

  operator: [{
    condition: String,
    op1: String,
    // required: true
    op2: String,
    // required: true
    custom: Array
  }],
  target: [{
    condition: String,
    high: String,
    // required: true,
    low: String,
    // required: true,
    bool: String,
    // required: true
  }]

});

const Condition = mongoose.model("condition", conditionSchema);

module.exports = Condition;

// valueParams.numbers here should = valueParams in metric collection