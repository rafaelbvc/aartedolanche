import { NextFunction, Request, Response } from "express"
import imagesSchema from "../schemas/imagesSchema"
import fs from  "fs"


const imagesGetAll = async(request: Request , response:Response, Next: NextFunction) => {

    const imagesData = await imagesSchema.find({}).lean()

    if(!imagesData) {
        console.error("Error imagesGetAll")
        return response.status(400).json({message: "Operation not complete"})
    }
    console.log("Success imagesGetAll")
    response.status(200).json(imagesData)

}



const imagesPostUnique = async(request: Request, response: Response, Next: NextFunction) => {

    const {  productName, path, altText, category, image  } = request.body

    const file = request.file

    // if( !productName || !path || !altText || !category || !image){
    //     console.error("Error imagesUnique")
    //     return
    //     // return response.status(400).json({message: "Operation not complete!"})
    // }
       //path: file.path
    const createImage = await imagesSchema.create({
        productName,
        path,
        altText,
        category,
        image: file
    })
    
    console.log("Success imagesPostUnique")
    response.status(201).json(createImage)

}


export { imagesPostUnique, imagesGetAll }