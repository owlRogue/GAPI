const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sheetSchema = new Schema({
  metric: { type: String, required: true },
  operator: { type: String, required: true },
  target: { type: String, required: true },
  valueParams: { type: String, required: true },
  className: { type: String, required: true }
});

const Sheet = mongoose.model("sheet", sheetSchema);

module.exports = Sheet;
