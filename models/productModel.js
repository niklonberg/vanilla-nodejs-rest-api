const products = require("../data/products");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { ...product, id: crypto.randomUUID() };
    products.push(newProduct);
    writeDataToFile("../data/products.json", products);
    resolve(newProduct);
  });
}

module.exports = {
  findAll,
  findById,
  create,
};
