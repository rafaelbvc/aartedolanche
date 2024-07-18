import express from "express"
import { config } from "dotenv"
import { MongoClient } from "./db/mongo"

const Server = async() => {
    config()

const server = express()

server.use(express.json())

await MongoClient.connect()

const port = process.env.PORT || 8002

server.listen(port, () => console.log(`listening on port ${port}...`))

}

Server()