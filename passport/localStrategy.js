const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcryptjs");


const strategy = new LocalStrategy(
    {
        usernameField: "username"
    },
    function(username, password, done) {
		User.findOne({ username: username }
			.then(user => {
				if(!user) {
					const newUser = new User({ username, password });
					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(newUser.password, salt, (err, hash) => {
							if (err) throw err;
							newUser.password = hash;
							newUser
								.save()
								.then (user => {
									return done(null, user);
								})
								.catch(err => {
									return done(null, false, { message: err });
								});
						});
					});
				} else {
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if (err) throw err;
						if (isMatch) {
							return done(null, user);
						} else {
							return done(null, false, { message: "Wrong Password" });
						}
					});
				}
			})
			.catch(err => {
				return done(null, false, { message: err });
			})
		)}
);
	// 		if (err) {
	// 			return done(err)
	// 		}
	// 		if (!user) {
	// 			return done(null, false, { message: "Incorrect username" })
	// 		}
	// 		if (!user.checkPassword(password)) {
	// 			return done(null, false, { message: "Incorrect password" })
	// 		}
	// 		return done(null, user)
	// 	})
	// }
  
  module.exports = strategy;