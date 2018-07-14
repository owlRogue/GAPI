import axios from "axios";

export default {
  // Gets all sheets
  getSheets: function () {
    return axios.get("/api/sheets");
  },
  // Gets the sheet with the given id
  getSheet: function (id) {
    return axios.get("/api/sheets/" + id);
  },
  // Deletes the sheet with the given id
  deleteSheet: function (id) {
    return axios.delete("/api/sheets/" + id);
  },
  // Saves a sheet to the database
  saveSheet: function (sheetData) {
    return axios.post("/api/sheets", sheetData);
  },
  // Gets all matrix logic
  getLogicMatrix: function () {
    return axios.get("/api/logicmatrix");
  }
};
console.log(axios.get("/api/logicmatrix"));