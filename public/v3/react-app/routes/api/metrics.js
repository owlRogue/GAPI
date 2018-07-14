const router = require("express").Router();
const metricsController = require("../../controllers/metricsController");

// Matches with "/api/metrics"
router.route("/")
  .get(metricsController.findAll)
  .post(metricsController.create);

// Matches with "/api/metrics/:id"
router
  .route("/:id")
  .get(metricsController.findById)
  .put(metricsController.update)
  .delete(metricsController.remove);

module.exports = router;
