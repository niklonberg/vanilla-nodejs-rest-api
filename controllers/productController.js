const Product = require("../models/productModel");

// @desc   Gets all products
// @route  GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc   Gets product by id
// @route  GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById();

    if (!product) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "product not found" }));
    }
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};
