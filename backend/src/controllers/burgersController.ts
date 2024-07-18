import { Request, Response } from "express"
import IburgersSchema from "../interfaces/IburgesSchema"
const Burgers = require("../models/BurgersSchema")



const getAllBurgers = async(req: Request, res: Response) => {

    try { 
       const burgers:IburgersSchema = await Burgers.find().select("-ids").lean()
       res.status(201).json(burgers)

    } catch(error: any) {
        res.status(417).json({ message: "Upssss, something wrong..." }).send(error)
        
    } 
    finally { console.log("finnaly do getAllBurgers")}

}

module.exports = {getAllBurgers}