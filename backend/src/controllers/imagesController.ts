import { Request, Response } from "express";
import imagesSchema from "../schemas/imagesSchema";
import Images from "../schemas/imagesSchema";

const imagesGetAll = async (request: Request, response: Response) => {
  const imagesData = await imagesSchema.find({}).lean();

  if (!imagesData) {
    console.error("Error imagesGetAll");
    return response.status(400).json({ message: "Operation not complete" });
  }
  console.log("Success imagesGetAll");
  response.status(200).json(imagesData);
};

const imagesPostUnique = async (request: Request, response: Response) => {
  const { productName, path, altText, category, image } = request.body;

  const file = request.file;

  if (!productName || !altText || !category) {
    console.error("Error imagesUnique");
    //   return
    return response.status(400).json({ message: "Operation not complete!" });
  }

  const createImage = await imagesSchema.create({
    productName,
    path: file?.path,
    altText,
    category,
    image: file,
  });

  console.log("Success imagesPostUnique");
  response.status(201).json(createImage);
};

// query com nome do mesmo hamburger e imagem
const imagesByProductName = async (request: Request, response: Response) => {
  const { productName } = request.params;

  const imageByProductName = await Images.findOne({ productName: productName });

  if (!imageByProductName) {
    response.status(404).json({ message: "Imagem não cadastrada" });
    return;
  }

  response.status(200).json({ imageByProductName });
};

export { imagesPostUnique, imagesGetAll, imagesByProductName };
