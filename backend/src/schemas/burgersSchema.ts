import mongoose from "mongoose";
import IBurgers from "../interfaces/IBurgers";

const burgersSchema = new mongoose.Schema(
    {
        burgerName: {
            type: String,
            require: true,
            unique: true
        },
        burgerPhotoPath: {
            type:String,
            require: true,
        },
        burgerDescription: {
            type: String,
            require: true,
        },
        burgerIngredients: {
            type: String,
            require: true
        },
        burgerPrice: {
            type: Number,
            require: true,
        },
        burgerLikes: {
            type: Number,
            require: true
        }
    },{
        timestamps: true
    }
)

const Burgers = mongoose.model<IBurgers>("Burgers", burgersSchema)

export default Burgers