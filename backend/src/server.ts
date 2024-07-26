import express from "express";
import dotenv from "dotenv";
import mongoConnection from "./db/mongoConnection";
import cors from "cors";
import path from "path"
import burgersRouter from "./routes/burgersRouter";
import imagesRouter from "./routes/imagesRouter";
import { burgersByName } from "./controllers/burgersController";
dotenv.config();

const port = process.env.PORT;

const server = express();

server.use(cors({ origin: "*" }));

server.use(express.json());

mongoConnection();


server.use("/hamburgers",burgersRouter);
server.use("/images",imagesRouter);

server.use("./uploads/images", express.static(path.join(__dirname, ".." , "uploads")))

server.listen(port, () => console.log(`server is up on localhost:${port}`));
