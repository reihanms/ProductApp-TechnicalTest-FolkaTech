const apiResponses = require("../helpers/apiResponse");
const ProductsModel = require("../models/products");

const getAllProducts = async (req, res) => {
  try {
    const [data] = await ProductsModel.getAllProducts();
    const successResponse = apiResponses.createSuccessResponse(
      data,
      "Get All Products Success"
    );
    res.json(successResponse);
  } catch (error) {
    const errorResponse = apiResponses.createErrorResponse(
      "Server Error",
      error,
      500
    );
    res.status(errorResponse.status).json(errorResponse);
  }
};

const getProductById = async (req, res) => {
  const product_id = req.params['product_id']
  try {
    const [data] = await ProductsModel.getProductById(product_id);
    if(data.length > 0) {
      const successResponse = apiResponses.createSuccessResponse(
        data,
        "Get Product Success"
      );
      res.json(successResponse);
    }
    else {
      const errorResponse = apiResponses.createErrorResponse(
        "Product Not Found",
        {},
        404
      );
      res.status(errorResponse.status).json(errorResponse);
    }
  } catch (error) {
    const errorResponse = apiResponses.createErrorResponse(
      "Server Error",
      error,
      500
    );
    res.status(errorResponse.status).json(errorResponse);
  }
};
module.exports = {
  getAllProducts,
  getProductById
};
