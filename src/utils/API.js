import axios from "axios";

export default {
  // Gets all activities
  getActivities: function () {
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivitybyTitle: function (title) {
    return axios.get("/api/activities/" + title);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activities/" + id);
  },
  getActivitiesByType: function (type) {
    return axios.get("/api/activities/type/" + type);
  },
  getActivitiesByTypeHighestRated: function (type) {
    return axios.get("/api/activities/highest/" + type);
  },
  getActivitiesByTag: function (tag) {
    return axios.get("/api/activities/tag/" + tag);
  },
  // Saves an activity to the database
  saveActivity: function (activityData) {
    console.log("Test2");
    return axios.post("/api/activities", activityData);
  },
  // Gets all comments
  getComments: function () {
    return axios.get("/api/comments");
  },
  // Gets the comments with the given Activity id
  getCommentsByActivity: function (id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the comments with the given id
  deleteComment: function (id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a comment to the database
  saveComment: function (commentData) {
    return axios.post("/api/comments", commentData);
  },
  // Gets all polls
  getPolls: function () {
    return axios.get("/api/polls");
  },
  // Gets the poll with the given id
  getPoll: function (id) {
    return axios.get("/api/polls/" + id);
  },
  // Deletes the poll with the given id
  deletePoll: function (id) {
    return axios.delete("/api/polls/" + id);
  },
  // Saves a poll to the database
  savePoll: function (pollData) {
    return axios.post("/api/polls", pollData);
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  }
};
