import responseHandler from "../handlers/response.handler.js";

import ProductType from "../models/product-type.model.js";

const getProductTypes = async (_, res) => {
  try {
    const productTypes = await ProductType.find();
    responseHandler.ok(res, productTypes);
  } catch {
    responseHandler.error(res);
  }
};

const createProductType = async (req, res) => {
  try {
    const productType = new ProductType(req.body);
    await productType.save();
    responseHandler.created(res, productType);
  } catch {
    responseHandler.error(res);
  }
};

const updateProductType = async (req, res) => {
  try {
    await ProductType.findById(req.params.id).updateOne(req.body);
    responseHandler.ok(res, req.body);
  } catch {
    responseHandler.error(res);
  }
};

const deleteProductType = async (req, res) => {
  try {
    const productType = await ProductType.findByIdAndDelete(req.params.id);
    responseHandler.ok(res, productType);
  } catch {
    responseHandler.error(res);
  }
};

export default {getProductTypes, createProductType, deleteProductType, updateProductType};
