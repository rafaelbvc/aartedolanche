import Router, {Request, Response} from "express"
import { burgersGetCommon } from "../controllers/burgers"


const routes = Router()


routes.get("/", burgersGetCommon)


export default routes