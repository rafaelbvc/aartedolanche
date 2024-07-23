import Router, { Request, Response } from "express";
import {
  burgersGetAll,
  burgersGetCommon,
  burgersPost,
} from "../controllers/burgersController";
import uploadImages from "../config/multerStorage";
import { imagesGetAll, imagesPostUnique } from "../controllers/imagesController";
import "../schemas/imagesSchema";


const routes = Router();

routes.get("/", burgersGetCommon);

routes.get("/hamburgers", burgersGetAll);

routes.post("/hamburgerregister", burgersPost);

routes.get("/images", imagesGetAll)

routes.post("/postimage", uploadImages.single("Images")  ,imagesPostUnique)

export default routes
