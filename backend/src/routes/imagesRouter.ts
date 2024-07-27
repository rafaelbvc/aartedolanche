import Router from "express";
import uploadImages from "../config/multerStorage";
import {
  imagesByProductName,
  imagesGetAll,
  imagesPostUnique,
} from "../controllers/imagesController";

const imagesRouter = Router();

imagesRouter
  .get("/", imagesGetAll)
  .post("/postimage", uploadImages.single("image"), imagesPostUnique)
  .get("/:productName", imagesByProductName);

export default imagesRouter;
