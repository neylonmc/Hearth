const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/activities"
router.route("/")
  .get(activitiesController.findAll)
  .post(activitiesController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

//  Matches with "/api/type/:type"
router.route("/type/:type")
  .get(activitiesController.findByType);

//  Matches with "/api/highest/type"
router.route("/highest/:type")
  .get(activitiesController.findByHighest)

router.route("/tag/:tag")
  .get(activitiesController.findByCategory);


module.exports = router;
