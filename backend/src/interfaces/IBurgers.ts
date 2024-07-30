import { ObjectId } from "mongoose";

export default interface IBurgers {
  burgerName: string;
  burgerDescription: string;
  burgerIngredients: string;
  burgerPrice: Number;
  burgerLikes: Number;
  burgerImagePath: String;
  burgerAltImageText: String;
}
