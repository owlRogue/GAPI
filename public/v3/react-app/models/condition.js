const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conditionSchema = new Schema({ 
  default: { type: Number, required: true },
  bool: { type: Boolean, required: true },
  custom: { type: Array }
});

const Metrics = mongoose.model("condition", conditionSchema);

module.exports = Condition;
