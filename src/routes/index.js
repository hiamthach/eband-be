import express from "express";

import productRoutes from "./product.route.js";
import productTypeRoutes from "./product-type.route.js";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/product-types", productTypeRoutes);

export default router;
