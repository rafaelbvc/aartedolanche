import {MongoClient as Mongo, Db} from "mongodb"
import { connect } from "mongoose"


export const MongoClient = {
    client: undefined as unknown as Mongo,
    db: undefined as unknown as Db,

    async connect(): Promise<void> {
        const url = process.env.MONGODB_URL || "localhost:270170"
        const username = process.env.MONGODB_USERNAME
        const password = process.env.MONGODB_PASSWORD

        const client = new Mongo(url, { auth: {username, password}})
        const db = client.db("aartedolanchedb")

        this.client = client
        this.db = db

        console.log("connected to mongodb...")
    }
}