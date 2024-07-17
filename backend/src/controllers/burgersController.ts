import {Request, Response} from "express"
import IburgersSchema from "../interfaces/IburgesSchema"
import { Burgers } from "../models/burgersDataModel"

export const getAllBurgers = async(req: Request, res: Response) => {

    let burgers: IburgersSchema

    try { 

       burgers = await Burgers.find().select("-ids").lean()

    } catch(e: any) {
        res.status(417).json({ message: "Upssss, something wrong..." }) 
        return
    } 
    finally { console.log("finnaly do getAllBurgers")}

    
    res.status(201).json({ message: "List of Hamburguers" })

}