import express from "express";
import dotenv from "dotenv";
import mongoConnection from "./db/mongoConnection";
import cors from "cors";
import path from "path";
import burgersRouter from "./routes/burgersRouter";
import imagesRouter from "./routes/imagesRouter";
import rootRouter from "./routes/rootRouter";
import {uriPathComposer} from "./utils/uriPathComposer";
dotenv.config();

const port = process.env.PORT;

const server = express();


server.use(cors({ origin: "*" }));

server.use(express.json());

mongoConnection();

server.use("/hamburgers", burgersRouter);
server.use("/images", imagesRouter);
// server.use(`/${uriPathComposer}`, rootRouter)
// server.use("/teste/:productName", uriPathComposer)

server.use(
  "./uploads/images",
  express.static(path.join(__dirname, "..", "uploads")),
);
server.set("views", path.join(__dirname, "views"))

server.listen(port, () => console.log(`server is up on localhost:${port}`));
