import {Request, Response} from "express"


const burgersGetCommon = async(request: Request, response: Response) => {
    
    try {
        await response.status(200).send("Connected Successfully")
    }
    catch(error){
        response.status(500).send(console.log(error))
        return
    }


}




export { burgersGetCommon }