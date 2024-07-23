import { NextFunction, Request, Response } from "express"
import imagesSchema from "../schemas/imagesSchema"
import fs from  "fs"


const imagesGetAll = async(request: Request , response:Response, Next: NextFunction) => {

    const imagesData = await imagesSchema.find({}).lean()

    if(!imagesData) {
        console.error("Error imagesGetAll")
        return Next(response.status(400).json({message: "Operation not complete"}))
    }
    console.log("Success imagesGetAll")
    response.status(200).send("Success!")

}



const imagesPostUnique = async(request: Request, response: Response, Next: NextFunction) => {

    const {  productName, path, altText, category, image  } = request.body

    if( !productName || !path || !altText || !category || !image){
        console.error("Error imagesUnique")
        return
        // return response.status(400).json({message: "Operation not complete!"})
    }
       
    await imagesSchema.create({
        productName,
        path,
        altText,
        category,
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/images/' + request.file?.filename)),
            contentType: ['image/png', 'image/jpg', 'image/svg', 'image/ico']
        }
    })
    
    console.log("Sucess imagesPostUnique")
    response.status(201).send("Success!")

}


export { imagesPostUnique, imagesGetAll }