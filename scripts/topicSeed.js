const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hearthdb"
);

const topicSeed = [
    {
        topic: "The Departed",
        type: "film",
        Review: [ ]
    },
    {
        topic: "A Day To Remember",
        type: "music",
        Review: [ ]
    },
    {
        topic: "The Scarlet Letter",
        type: "books",
        Review: [ ]
    }
  ];

  const reviewSeed = [
    {
        topic: "The Departed",
        title: "BEST MOVIE EVER",
        review: "Best movie I've ever seen!",
        rating: 5
    },
    {
        topic: "The Departed",
        title: "Ehh",
        review: "Couldn't live up to hype.",
        rating: 2.5
    },
    {
        topic: "A Day To Remember",
        title: "Good Band",
        review: "I've listened to their music for a long time now, good band.",
        rating: 4
    },
    {
        topic: "The Scarlet Letter",
        title: "Love this book",
        review: "This is the book that I really learned to love reading.",
        rating: 5
    }
  ];

  db.Topic
  .remove({})
  .then(() => db.Topic.collection.insertMany(topicSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //    process.exit(0);
    db.Review
      .remove({})
      .then(() => db.Review.collection.insertMany(reviewSeed))
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