const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

//50 entries max
//over 50 entries, remove first entry in array
//reaction true is like and false is dislike
const ActivitySchema = new Schema(
  {
    author: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    name: {
      type: String,
    },
    spriteActivities : {
        type : Array,
        default : [{'54321' : {reaction : null, confused : [], count : 0}},
            {BoxBreathing : {reaction : null, confused : [], count : 0}},
            {CalmCounting : {reaction : null, confused : [], count : 0}},
            {DragonBreath : {reaction : null, confused : [], count : 0}},
            {GoingOnAPicnic : {reaction : null, confused : [], count : 0}},
            {MilkMilkMilk : {reaction : null, confused : [], count : 0}}]
    },
    flynnActivities : {
        type : Array,
        default : [{HokeyPokey : {reaction : null, confused : [], count : 0}},
            {BabyShark : {reaction : null, confused : [], count : 0}},
            {CalmCounting : {reaction : null, confused : [], count : 0}},
            {Pushups : {reaction : null, confused : [], count : 0}},
            {JumpingJacks : {reaction : null, confused : [], count : 0}}]
    },
    auroraActivities : {
        type : Array,
        default : [{Coloring : {reaction : null, confused : [], count : 0}},
            {DecodingMessages : {reaction : null, confused : [], count : 0}},
            {MatchTheColor : {reaction : null, confused : [], count : 0}},
            {ColorCopy : {reaction : null, confused : [], count : 0}},
            {ColorPuzzle : {reaction : null, confused : [], count : 0}},
            {FruitSudoku : {reaction : null, confused : [], count : 0}},
            {BlockPuzzle : {reaction : null, confused : [], count : 0}}]
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
}
);

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;
