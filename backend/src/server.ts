import express from "express";
import dotenv from "dotenv";
import routes from "./routes/Router";
import mongoConnection from "./db/mongoConnection";
import cors from "cors";
import multer from "multer";
import path from "path"
dotenv.config();

const port = process.env.PORT;

const server = express();

server.use(cors({ origin: "*" }));

server.use(express.json());

mongoConnection();

server.use(multer);

server.use(routes);

server.use("/images", express.static(path.join(__dirname, ".." , "uploads")))

server.listen(port, () => console.log(`server is up on localhost:${port}`));
