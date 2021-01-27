const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hearthdb"
);

const bookSeed = [
  {
    name: "Me",
    password: "Test",
    email: "{type: String}",
    Interests: ["cxfx"],
    Ratings: [
      {
        Id: 1,
        activityId: 2,
        Rating: 3
      }],
    totalRatings: { type: 4 },
    CurrentlyWatching: [{}],

    Following: [{ UserId: 1 }]
  }
];

const activitySeed = [
  {
    title: "Placeholder",
    type: "Test",
    ageRange: "All ages",
    category: "category",
    Tags: [],
    totalRatings: 0,
    averageRating: 0,
    description: "This is a placeholder",
    comments: [],
    Polls: []
  },
  {
    title: "Placeholder2fsdfds",
    type: "Test",
    ageRange: "All ages",
    category: "category",
    Tags: [],
    totalRatings: 0,
    averageRating: 4,
    description: "This is a placeholder",
    comments: [],
    Polls: []
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //    process.exit(0);
    db.Activity
      .remove({})
      .then(() => db.Activity.collection.insertMany(activitySeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });

  })
  .catch(err => {
    console.error(err);
    process.exit(1);

  });
