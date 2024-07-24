import mongoose, { Schema } from "mongoose";
import IBurgers from "../interfaces/IBurgers";
import Images from "./imagesSchema";

const burgersSchema = new mongoose.Schema(
  {
    burgerName: {
      type: String,
      require: true,
      unique: true,
    },
    burgerDescription: {
      type: String,
      require: true,
    },
    burgerIngredients: {
      type: String,
      require: true,
    },
    burgerPrice: {
      type: Number,
      require: true,
    },
    burgerLikes: {
      type: Number,
      require: true,
    },
    images: 
   [ {
      type: Schema.Types.Array,
      ref: Images
    }]
  },
  {
    timestamps: true,
  },
);

const Burgers = mongoose.model<IBurgers>("Burgers", burgersSchema);

export default Burgers;
