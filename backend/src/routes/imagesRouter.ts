import Router from "express";
import uploadImages from "../config/multerStorage";
import { imagesGetAll, imagesPostUnique } from "../controllers/imagesController";


const imagesRouter = Router();


imagesRouter.get("/", imagesGetAll)

imagesRouter.post("/postimage", uploadImages.single("image")  ,imagesPostUnique)

export default imagesRouter
