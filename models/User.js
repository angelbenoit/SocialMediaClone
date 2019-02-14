const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    username: String,
    email: String,
    authorId: String,
    password: String,
    postHistory: Array
});
// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
    // get access to the user model
    const user = this;

    // generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err); }

      // hash (encrypt) our password using the salt
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) { return next(err); }

        // overwrite plain text password with encrypted password
        user.password = hash;
        next();
      });
    });
  });

  userSchema.methods.comparePassword = function(candidatePassword, callback) {
    console.log(candidatePassword, this.password);
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      console.log(isMatch)
      if (err) { return callback(err); }

      callback(null, isMatch);
    });
  }

  // Create the model class
  const ModelClass = mongoose.model('user', userSchema);

  // Export the model
  module.exports = ModelClass;
