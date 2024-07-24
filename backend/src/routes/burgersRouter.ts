import Router, { Request, Response } from "express";
import {
  burgersGetAll,
  burgersPost,
} from "../controllers/burgersController";



const burgerRouter = Router();


burgerRouter.get("/", burgersGetAll);
burgerRouter.post("/hamburgerregister", burgersPost);



export default burgerRouter
