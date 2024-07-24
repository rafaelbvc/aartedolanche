import express from "express";
import dotenv from "dotenv";
import mongoConnection from "./db/mongoConnection";
import cors from "cors";
import multer from "multer";
import path from "path"
import burgerRouter from "./routes/burgersRouter";
import imagesRouter from "./routes/imagesRouter";
dotenv.config();

const port = process.env.PORT;

const server = express();

server.use(cors({ origin: "*" }));

server.use(express.json());

mongoConnection();

// server.use(multer);

server.use("/hamburgers",burgerRouter);
server.use("/images",imagesRouter);

server.use("./uploads/images", express.static(path.join(__dirname, ".." , "uploads")))

server.listen(port, () => console.log(`server is up on localhost:${port}`));
