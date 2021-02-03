const db = require("../models");
const axios = require("axios");


// Defining methods for the activitiesController
module.exports = {
  findAll: function (req, res) {
    db.Activity
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Activity
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //type will probobly be switched to medium
  findByType: function (req, res) {
    db.Activity
      .find({ type: req.params.type })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByHighest: function (req, res) {
    db.Activity
      .find({ type: req.params.type })
      .sort({ averageRating: -1 })
      .limit(1)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //category will probably be switched to genre
  findByCategory: function (req, res) {
    db.Activity
      .find({ category: req.params.tag })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    //these will be environmental variables
    const imdbApiKey = 'bfe070362amsh86909dbb9fbfe22p191db1jsnfb9dfda72961';
    const host = 'imdb8.p.rapidapi.com';
    let options = {};

    let activity = {
      title: "",
      type: req.body.type,
      ageRange: "all",
      category: req.body.category,
      Tags: [],
      totalRatings: 0,
      averageRating: null,
      description: "",
      comments: [],
      Polls: [],
      Image: ""
    }
    switch (activity.type) {
      case "Movie":
        options = {
          method: 'GET',
          url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
          params: { q: req.body.title },
          headers: {
              'x-rapidapi-key': imdbApiKey,
              'x-rapidapi-host': host
          }
          
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
        break;

      case "TV":
        options = {
          method: 'GET',
          url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
          params: { q: req.body.title },
          headers: {
              'x-rapidapi-key': imdbApiKey,
              'x-rapidapi-host': host
          }
          
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
        break;

      case "Book":
        options = {
          method: 'GET',
          url: 'http://openlibrary.org/search.json?',
          params: { q: req.body.title }
        };
        axios.request(options).then(function (book) {
          activity.title = book.data.docs[0].title;
          db.Activity
            .find({title: activity.title})
            .then(dbModel => {
              if (!dbModel[0]) {
                db.Activity
                  .create(activity)
                  .then(dbActivity => res.json(dbActivity))
                  .catch(err => {console.error(err);});
              }
              else {
                console.log(dbModel);
              }
            }).catch(function (error) {
              console.error(error);
            });

        }).catch(function (error) {
          console.error(error);
        });
        /*    .then(search => 
              db.Activity
              .findById(type)
          .then(dbModel => if(dbModel !== {})
          create comment 
          put update with rating}
          else{
            create activity
            create comment
          }
          .catch(err => res.status(422).json(err));
            */
        break;

      case "Music":

        break;

      default:
        break;
    }
    db.Activity
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Activity
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Activity
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
