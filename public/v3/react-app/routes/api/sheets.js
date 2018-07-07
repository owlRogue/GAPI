const router = require("express").Router();
const sheetsController = require("../../controllers/sheetsController");

// Matches with "/api/sheets"
router.route("/")
  .get(sheetsController.findAll)
  .post(sheetsController.create);

// Matches with "/api/sheets/:id"
router
  .route("/:id")
  .get(sheetsController.findById)
  .put(sheetsController.update)
  .delete(sheetsController.remove);

module.exports = router;
