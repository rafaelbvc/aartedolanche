
const mongoose = require("mongoose");
const { Schema } = mongoose;

const burgersSchema = new Schema(
    {
     ids: {type: Number, required: true, unique: true},
     photo: {type: String, required: true},
     name: {type: String, required: true},
     ingredients: {type: String, required: true},
     description: {type: String, required: true},
     price: {type: Number, required: true},
     likes: {type: Number, required: true},
     numberOfLikes: {type: Number, required: true}
  }, {
     timestamps: true
 }
)

const Burgers = mongoose.model("Burgers", burgersSchema)

module.exports = Burgers