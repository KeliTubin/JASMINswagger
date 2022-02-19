const mongoose = require("mongoose");
const { Todos } = require("./models/TodoSchema");
const { Users } = require("./models/UsersSchema");
const { Jasmin } = require("./models/BreedsSchema");

// Connecting to database
mongoose.connect(
  "mongodb+srv://test:test@cluster0.5y6pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
// const Schema = mongoose.Schema;

// const JasminSchema = new Schema({
//   Breed: { type: String },
//   Picture: { type: String },
//   ShortDescription: { type: String },
//   Characteristics: { type: String },
//   Origin: { type: String },
//   Nature: { type: String },
//   Health: { type: String },
//   Movement: { type: String },
//   Nutrition: { type: String },
//   Maintenance: { type: String },
//   Children: { type: String },
// });

// const Jasmin = mongoose.model("jasmins", JasminSchema);

module.exports = {
  Jasmin,
  Todos,
  Users,
};
