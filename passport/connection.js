// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearthdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// // Connect to the Mongo DB
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/hearthdb")
//   .then(
//     () => {
//       /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
//       console.log("Connected to Mongo");
//     },
//     (err) => {
//       /** handle initial connection error */
//       console.log("error connecting to Mongo: ");
//       console.log(err);
//     }
//   );

// module.exports = mongoose.connection;
