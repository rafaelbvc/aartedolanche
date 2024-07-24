import { ObjectId } from "mongoose";

export default interface IBurgers {
  burgerName: string;
  burgerPhotoPath: ObjectId;
  burgerDescription: string;
  burgerIngredients: string;
  burgerPrice: Number;
  burgerLikes: Number;
}
