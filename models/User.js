const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    
    email: {
      type: String,
      requiered: true,
      unique: true,
      match: [/.+@.+\..+/]
    },
    userThoughts: {
      type: String,
      required: true
    },
  
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

// create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;