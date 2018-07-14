const router = require("express").Router();
const sheetRoutes = require("./sheets");
const metricRoutes = require("./metrics");
const conditionRoutes = require("./conditions");

// Sheet routes
router.use("/sheets", sheetRoutes);

module.exports = router;
