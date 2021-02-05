const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authenticated = require("../passport/middleware/authenticated");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Authenticated User will be sent to the dashboard page
// Non-Authenticated User will be sent back to login page using middleware
router.get("/members", authenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});
///////////////May need to change path depending on file names

module.exports = router;
