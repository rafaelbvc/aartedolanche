import Router from "express";
import {
  burgersGetAll,
  burgersPost,
  burgersByName
} from "../controllers/burgersController";



const burgersRouter = Router();


burgersRouter.get("/", burgersGetAll).post("/hamburgerregister", burgersPost).get('/:burgerName', burgersByName);
// burgersRouter;
// burgersRouter



export default burgersRouter
