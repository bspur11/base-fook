const {
  Schema,
  model,
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
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

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },

  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;