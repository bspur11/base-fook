const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    userName: {
      type: String,
      required: true,
      trim: true
    },
    
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    userBody: {
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