const { mongoose } = require("../Database");
const Schema = mongoose.Schema;
const GeneralUser = require("./GeneralUser").schema;

const reviewSchema = new Schema({
  user: {
    type: GeneralUser,
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);