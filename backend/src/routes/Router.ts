import Router, { Request, Response } from "express";
import {
  burgersGetAll,
  burgersGetCommon,
  burgersPost,
} from "../controllers/burgersController";

const routes = Router();

routes.get("/", burgersGetCommon);

routes.get("/hamburgers", burgersGetAll);

routes.post("/hamburgerregister", burgersPost);

export default routes;
