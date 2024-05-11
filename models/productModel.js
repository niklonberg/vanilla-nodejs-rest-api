const products = require("../data/products");

function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

module.exports = {
  find,
};
