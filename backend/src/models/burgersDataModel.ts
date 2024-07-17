
//verificar lib types
//@ts-ignore
import mongoose, { Schema, model, Model, InferSchemaType } from "mongoose"

const BurgersDataModel = new Schema(
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

export const Burgers: Model<InferSchemaType<typeof BurgersDataModel>> = model(
    "Burgers",
    BurgersDataModel
)