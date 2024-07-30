import { Request, Response } from "express";
import Images from "../schemas/imagesSchema";

const uriPathComposer = async(request: Request, response: Response) => {

    const {  productName  } = request.params


    const productNameByParam = await Images.findOne({ productName: productName  })

    console.log(productName, "eee", productNameByParam)

    let uriPath = productNameByParam?.path

    uriPath = uriPath?.slice(uriPath.lastIndexOf("\\"))
    const uriPathURL = uriPath?.slice(1, uriPath.length)

    return uriPath

}

export { uriPathComposer }


// import { Request, Response } from 'express';
// import Images from '../models/Images'; // Certifique-se de ajustar o caminho para o seu modelo

// const uriPathComposer = async (request: Request, response: Response) => {
//     const { productName } = request.params;

//     try {
//         const productNameByParam = await Images.findOne({ productName: productName });

//         if (!productNameByParam) {
//             return response.status(404).json({ message: "Product not found" });
//         }

//         let uriPath = productNameByParam.path;
//         uriPath = uriPath.slice(uriPath.lastIndexOf("\\"));
//         const uriPathURL = uriPath.slice(1, uriPath.length);

//         // Retornando as variáveis como parte da resposta
//         return response.status(200).json({ uriPath, uriPathURL });
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         return response.status(500).json({ message: "Internal server error" });
//     }
// };

// export default uriPathComposer;