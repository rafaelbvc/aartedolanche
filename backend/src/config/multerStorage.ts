import { request, Request } from "express";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storageDestination = (
  request: Request,
  file: Express.Multer.File,
  callback: DestinationCallback,
) => {
  callback(null, "../uploads/images");
};

const fileNameDestination = (
  request: Request,
  file: Express.Multer.File,
  callback: FileNameCallback,
) => {
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  callback(null, file.fieldname + "-" + uniqueSuffix);
};

const multerStorage = multer.diskStorage({
  destination: storageDestination,
  filename: fileNameDestination,
});

const uploadImages = multer({ storage: multerStorage });

export default uploadImages;
