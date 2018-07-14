const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matrixSchema = new Schema({ 
  default: { type: Number, required: true },
  bool: { type: String, required: true },
  custom: { type: Array }
});

const LogicMatrix = mongoose.model("logicmatrix", matrixSchema);

module.exports = LogicMatrix;
