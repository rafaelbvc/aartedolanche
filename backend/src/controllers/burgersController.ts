import { Request, Response } from "express";
import Burgers from "../schemas/burgersSchema";
import imagesSchema from "../schemas/imagesSchema";
import Images from "../schemas/imagesSchema";


const burgersGetAll = async (request: Request, response: Response) => {
  try {
    const burgersData = await Burgers.find().lean();
    response.status(200).json(burgersData);
  } catch (error) {
    response.status(400).json("Bad request!");
    return;
  }
};

const burgersPost = async (resquest: Request, response: Response) => {
  const {
    burgerName,
    burgerDescription,
    burgerIngredients,
    burgerPrice,
    burgerLikes,
  } = resquest.body;

  if (
    !burgerName ||
    !burgerDescription ||
    !burgerIngredients ||
    !burgerPrice
  ) {
    response
      .status(400)
      .json({ message: "All the fields need to be filled in" });
    return;
  }

  const hasBurger = await Burgers.findOne({ burgerName });
  console.log(hasBurger);
  if (hasBurger) {
    response.status(400).json({ message: "The burger already registered" });
    return;
  }

  const imagesGet = await imagesSchema.findOne({productName: burgerName})

  if(!imagesGet){
    response.status(404).json({message: "The image from hamburger can't be found"})
    return
  }

  try {
    await Burgers.create({
      burgerName,
      burgerDescription,
      burgerIngredients,
      burgerPrice,
      burgerLikes,
      burgerImagePath: imagesGet?.path,
      burgerAltImageText: burgerName
    });
    response.status(201).json("Hamburger registered successfully!");
  } catch (error: any) {
    response.status(400).send(error.message);
    return;
  }
}



const burgersByName = async( request: Request, response: Response ) => {


  const { burgerName } =  request.params


  const burgerNameByParam = await Burgers.findOne({burgerName: burgerName})

   if(!burgerNameByParam){
     response.status(404).json({message: "Hamburger não cadastrado"})
     return
   }

  response.status(200).json({burgerNameByParam})

}

const burgerAndImageByName = async(request: Request, response: Response) => {

  const { burgerName } = request.params

  const burgerAndImage = await Burgers.findOne({ burgerName: burgerName })
  const imageAndBurger = await Images.findOne({productName: burgerName})

  if(!burgerAndImage || !imageAndBurger){
    response.status(404).json({message: "Hamburger e/ou Imagem não cadastrados"})
    return
  }

  const burgerWithImage =  {  
    burgerName: burgerAndImage.burgerName, 
    burgerDescription: burgerAndImage.burgerDescription, 
    burgerIngredients: burgerAndImage.burgerIngredients, 
    burgerPrice: burgerAndImage.burgerPrice, 
    burgerLikes: burgerAndImage.burgerLikes, 
    imagePath: imageAndBurger.path, 
    imageAlt: imageAndBurger.altText  }


  if(burgerAndImage && imageAndBurger){
    response.status(200).json(burgerWithImage)
  }

}







export { burgersPost, burgersGetAll, burgersByName, burgerAndImageByName };
