import {Request, Response} from "express"
import Burgers from "../schemas/burgersSchema"


const burgersGetCommon = async(request: Request, response: Response) => {
    
    try {
        await response.status(200).send("Connected Successfully")
    }
    catch(error){
        response.status(500).send(console.log(error))
        return
    }
}

const burgersGetAll = async(request: Request, response: Response) => {

    try {
        const burgersData = await Burgers.find().lean()
        response.status(200).json(burgersData)
    }catch(error) {
        response.status(400).json("Bad request!")
        return
    }


}

const burgersPost = async(resquest: Request, response:Response) => {

    const { burgerName, burgerPhotoPath, burgerDescription, burgerIngredients, burgerPrice, burgerLikes } = resquest.body

    if(!burgerName || !burgerPhotoPath || !burgerDescription || !burgerIngredients || !burgerPrice || !burgerLikes ){
        response.status(400).json({message: "All the fields need to be filled in"})
        return
    }

    const hasBurger = await Burgers.findOne({burgerName}) 
    console.log(hasBurger)
    if(hasBurger){
        response.status(400).json({message: "The burger already registered"})
        return
    }

    try {
        const  burgerData = await Burgers.create({
            burgerName,
            burgerPhotoPath,
            burgerDescription,
            burgerIngredients,
            burgerPrice,
            burgerLikes
        })
        response.status(201).json("Hamburger registered successfully!")
    }catch(error: any ){
        response.status(400).send(error.message)
        return
    }
}




export { burgersGetCommon, burgersPost, burgersGetAll }