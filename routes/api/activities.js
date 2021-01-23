const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/books"
router.route("/")
  .get(activitiesController.findAll)
  .post(activitiesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

module.exports = router;
