const router = require("express").Router();
const sheetRoutes = require("./sheets");

// Sheet routes
router.use("/sheets", sheetRoutes);

module.exports = router;
