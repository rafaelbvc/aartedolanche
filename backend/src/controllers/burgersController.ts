import { Request, Response } from "express";
import Burgers from "../schemas/burgersSchema";
import imagesSchema from "../schemas/imagesSchema";


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
    !burgerPrice||
    !burgerLikes
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

  const imagesGet = await imagesSchema.find().lean()



  try {
    await Burgers.create({
      burgerName,
      burgerDescription,
      burgerIngredients,
      burgerPrice,
      burgerLikes,
      images: imagesGet
    });
    response.status(201).json("Hamburger registered successfully!");
  } catch (error: any) {
    response.status(400).send(error.message);
    return;
  }
};


//query param do base hamburgers pelo nome do hamburger 
//trazer como response o hamburger

const burgersByName = async( request: Request, response: Response ) => {


  const burgerNameParam =  request.params.burgerName

  const burgerFilter = request.body.burgerName

  const id = request.body._id


  console.log(burgerNameParam, "param")

  const burgerNameByParam = await Burgers.findById("66a1e163668989fc774a7eb1")
  // .$where(() => {burgerFilter === burgerNameByParam})
  console.log(burgerNameByParam, "byparam")

  if(!burgerNameByParam){
    response.status(404).json({message: "Hamburguer não cadastrado"})
    return
  }

  response.status(200).json({burgerNameByParam})

}


export { burgersPost, burgersGetAll, burgersByName };
