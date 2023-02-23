import express from "express";

import productTypeController from "../controllers/product-type.controller.js";

const router = express.Router();

router.get("/", productTypeController.getProductTypes);

router.post("/", productTypeController.createProductType);

router.post("/:id", productTypeController.updateProductType);

router.delete("/:id", productTypeController.deleteProductType);

export default router;
