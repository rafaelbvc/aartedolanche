const mongoose = require("mongoose");
const { Schema } = mongoose;

const burgersDataSchema = new Schema(
  {
    ids: Number,
    photo: String,
    name: String,
    ingredients: String,
    description: String,
    price: Number,
    likes: Number,
    numberOfLikes: Number,
  },
  {
    timestamps: true,
  },
);

const BurgersDataModel = mongoose.model("BurgersDataModel", burgersDataSchema);

module.exports = BurgersDataModel;
