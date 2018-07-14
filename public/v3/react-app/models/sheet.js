const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sheetSchema = new Schema({
  sheet: { type: String, required: true },
  gid: { type: String, required: true },
  range: { type: String, required: true },
  url: { type: String, required: false },
  date_added: { type: Date, default: Date.now }
});

const Sheet = mongoose.model("sheet", sheetSchema);

module.exports = Sheet;
