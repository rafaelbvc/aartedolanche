import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

let uri = process.env.URI 

if(!uri){
    uri = "0.0.0.0:0000"
}

const mongoConnection = async() => {

    try{
        await mongoose.connect(uri)
        console.log("Mongo is connected successfully!")
    }catch(error){
        throw new Error
        console.error(error, { message: "Can't reach the request"})
        return
    }
}


export default mongoConnection 