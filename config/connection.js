const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||  "mongodb://localhost/hearthdb").then(
  () => { 
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
    console.log("Connected to Mongo");
    
},
err => {
     /** handle initial connection error */ 
     console.log("error connecting to Mongo: ")
     console.log(err);
     
    }
);

module.exports = mongoose.connection;