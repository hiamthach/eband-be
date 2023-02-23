import responseHandler from "../handlers/response.handler.js";

import Product from "../models/product.model.js";

const getProducts = async (_, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "producttypes",
          localField: "type",
          foreignField: "_id",
          as: "type",
        },
      },
    ]);
    responseHandler.ok(res, products);
  } catch {
    responseHandler.error(res);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    responseHandler.ok(res, product);
  } catch {
    responseHandler.error(res);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    responseHandler.created(res, product);
  } catch {
    responseHandler.error(res);
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.findById(req.params.id).updateOne(req.body);
    responseHandler.ok(res, req.body);
  } catch {
    responseHandler.error(res);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    responseHandler.ok(res, product);
  } catch {
    responseHandler.error(res);
  }
};

export default {getProducts, getProductById, createProduct, deleteProduct, updateProduct};
