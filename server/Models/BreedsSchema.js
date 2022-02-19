const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
// const { comments } = require("./models/CommentsSchema");

const JasminSchema = new Schema({
  Breed: { type: String },
  Picture: { type: String },
  ShortDescription: { type: String },
  Characteristics: { type: String },
  Origin: { type: String },
  Nature: { type: String },
  Health: { type: String },
  Movement: { type: String },
  Nutrition: { type: String },
  Maintenance: { type: String },
  Children: { type: String },
});

const commentsSchema = new Schema({
  commentator: { type: String },
  added: { type: Date },
  comment: { type: String },
});



JasminSchema.add({
  comments: [commentsSchema],
});

JasminSchema.plugin(mongoosePaginate);

const comments = mongoose.model("comments", commentsSchema);
const Jasmin = mongoose.model("jasmins", JasminSchema);

module.exports = {
  Jasmin,
  comments,
};

