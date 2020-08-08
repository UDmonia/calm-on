const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const CheckInSchema = new Schema(
  {
    mood: {
    type: String,
    },
    journal: {
    type: String,
    },
    date: {
      type: Date,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
    },
    checkIns: [CheckInSchema]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.plugin(uniqueValidator);

const User = mongoose.model("User", UserSchema);
module.exports = User;
