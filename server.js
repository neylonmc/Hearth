const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const session = require("express-session");
const dbConnection = require("./passport/connection");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const routes = require("./routes");
const user = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
/*app.use(
	bodyParser.urlencoded({
		extended: false
	})
);*/
app.use(bodyParser.json());
//app.use(session);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearthdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/hearthdb").then(
//   () => {
//     /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
//     console.log('Connected to Mongo');

// },
// err => {
//      /** handle initial connection error */
//      console.log('error connecting to Mongo: ')
//      console.log(err);

//     }
// );

// sessions
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false, //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Add routes, both API and view
app.use(routes);
app.use("/user", user);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
