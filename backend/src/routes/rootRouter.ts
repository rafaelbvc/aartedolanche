import { Router } from "express";
import  path  from "path";
import { uriPathComposer } from "../utils/uriPathComposer";

const rootRouter = Router()



// rootRouter.get("^/$|/index(.html)?", (request: Request, response: any) => {
//     response.sendFile(path.join(__dirname, "..", "views", "index.html"));
//   });

 rootRouter.get("^/$|/index(.html)?", (request: Request, response: any) => {
   response.sendFile(path.join(__dirname, "..", "uploads/images", "image-1721884448442-731564312.png"));
 });



  

export default rootRouter