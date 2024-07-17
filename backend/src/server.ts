import express from "express"
import { Router, Request, Response  } from "express"
import dotenv from "dotenv"
dotenv.config()
import {router} from "../src/routes/public/routes"
// import  cors  from "cors"


const server = express()

// const router = Router()

const PORT = process.env.PORT || "5050"

server.use(express.json())

// server.use(cors())

// route.get("/", (req: Request, res: Response)  => {
//     res.json({message: "messsagewerrgfwerfgwgwrgf"})
// })

server.use(router)

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))