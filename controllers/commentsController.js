const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Comment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Comment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    let comment = {
      title: req.body.title,
      review: req.body.review,
      userId: "",
      topicId: "",
      rating: req.body.rating,
      topic: req.body.topic
    }

    db.Activity
      .find({ title: req.body.topic })
      .then(dbModel => {
        if (dbModel[0]) {
          comment.topic = dbModel[0].title;
          comment.topicId = dbModel[0]._id;
          console.log(comment);
          db.Comment
            .create(comment)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
