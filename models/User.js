const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
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

// create the Pizza model using the PizzaSchema
const User = model('User', userSchema);

// export the Pizza model
module.exports = User;