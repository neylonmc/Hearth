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
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Departed",
        title: "Ehh",
        review: "Couldn't live up to hype.",
        rating: 2.5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "A Day To Remember",
        title: "Good Band",
        review: "I've listened to their music for a long time now, good band.",
        rating: 4,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Scarlet Letter",
        title: "Love this book",
        review: "This is the book that I really learned to love reading.",
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Catcher in the Rye",
        title: "One of my Favorites",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Catcher in the Rye",
        title: "Eh",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Catcher in the Rye",
        title: "I had some issues with...",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 2,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Dune",
        title: "One of my Favorites",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Dune",
        title: "Eh",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Dune",
        title: "I had some issues with...",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 2,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Spirited Away",
        title: "One of my Favorites",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Spirited Away",
        title: "Eh",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "Spirited Away",
        title: "I had some issues with...k",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 2,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Mandalorian",
        title: "One of my Favorites",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Mandalorian",
        title: "Eh",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 3,
        related_titles: ["The Mandalorian", "Star Wars"]
    },
    {
        topic: "The Mandalorian",
        title: "I had some issues with...",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 2,
        related_titles: ["The Mandalorian", "Star Wars"]
    }
  ];

  db.Topic
  .remove({})
  .then(() => db.Topic.collection.insertMany(topicSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    //    process.exit(0);
    db.Comment
      .remove({})
      .then(() => db.Comment.collection.insertMany(reviewSeed))
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