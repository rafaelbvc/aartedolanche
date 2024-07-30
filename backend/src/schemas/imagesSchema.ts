import mongoose, { Schema } from "mongoose";
import IImages from "../interfaces/IImages";

const imagesSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
      unique: true,
    },
    path: {
      type: String,
      require: true,
    },
    altText: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      enum: ["Hamburger", "Combo", "FrenchFries"],
      require: true,
    },
    imageName: {
      type: String
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  },
);

const Images = mongoose.model<IImages>("Images", imagesSchema);

export default Images;
