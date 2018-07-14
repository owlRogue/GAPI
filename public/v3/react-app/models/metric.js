const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const metricSchema = new Schema({
  metric: { type: String, required: true },
  operator: { type: String, required: true },
  target: { type: String, required: true },
  valueParams: { type: String, required: true },
  className: { type: String, required: true }
});

const Metric = mongoose.model("metric", metricSchema);

module.exports = Metric;
