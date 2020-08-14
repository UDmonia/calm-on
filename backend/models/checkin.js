const mongoose = require("mongoose");


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
      },
      author: {
        type: Schema.Types.ObjectId,
        ref:"User"
      }
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
    }
  );
const CheckIn = mongoose.model("CheckIn", CheckInSchema);
module.exports = CheckIn;