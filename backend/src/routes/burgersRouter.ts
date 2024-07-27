import Router from "express";
import {
  burgersGetAll,
  burgersPost,
  burgersByName,
  burgerAndImageByName,
} from "../controllers/burgersController";

const burgersRouter = Router();

burgersRouter
  .get("/", burgersGetAll)
  .post("/hamburgerregister", burgersPost)
  .get("/:burgerName", burgersByName)
  .get("/burgerimage/:burgerName", burgerAndImageByName);

export default burgersRouter;
