import express, {Request, Response} from "express"
import dotenv from "dotenv"
import routes from "./routes/Router"
import mongoConnection from "./db/mongoConnection"
import cors from "cors"
dotenv.config()

const port = process.env.PORT

const server = express()

server.use(cors({origin: '*'}))

server.use(express.json())

mongoConnection()

server.use(routes) 


server.listen(port, () => console.log(`server is up on localhost:${port}`))