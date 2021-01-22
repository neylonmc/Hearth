const router = require("express").Router();
const userRoutes = require("./users");
const activityRoutes = require("./activities");
const pollRoutes = require("./polls");
const commentRoutes = require("./comments");

// Book routes
router.use("/users", userRoutes);
router.use("/activities", activityRoutes);
router.use("/polls", pollRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
