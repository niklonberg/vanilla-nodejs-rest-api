let products = require("../data/products");
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
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, productData) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((product) => product.id === id);
    products[index] = { ...productData, id };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((product) => product.id !== id);
    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
