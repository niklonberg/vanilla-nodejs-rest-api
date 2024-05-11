/************************************************ version 1 ************************************************/
// const http = require("http");
// const products = require("./data/products");
// const PORT = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//   // res.statusCode = 200; // set status code
//   // res.setHeader("Content-Type", "text/html"); // set header
//   // res.write("<h1>Hello world</h1>"); // what we are sending
//   // res.end(); // end the response
//   // no matter what subroute or request we make in this simple example, the above will always be the response.
//   // http://localhost:5000/, http://localhost:5000/tshirts/, http://localhost:5000/users <-- no diff.
//   // GET, POST, PUT <-- no diff

//   // the lines of code above can be shortened to
//   res.writeHead(200, { "Content-type": "application/json" });
//   res.end(JSON.stringify(products));
// });
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/************************************************ version 2 ************************************************/
// const http = require("http");
// const products = require("./data/products");
// const PORT = process.env.PORT || 5000;
// lets add checks for request method and url used
// const server = http.createServer((req, res) => {
//   if (req.url === "/api/products" && req.method === "GET") {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(products));
//   } else {
//     res.writeHead(404, { "Content-type": "application/json" });
//     res.end(JSON.stringify({ message: "route not found" }));
//   }
// so now we have added some rudimentary checks for url and method,
// but this will get messy very quickly as we proceed
// lets add a model & controller
// });

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/************************************************ version 3 ************************************************/

const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const productID = req.url.split("/")[3];
    getProduct(req, res, productID);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    const productID = req.url.split("/")[3];
    updateProduct(req, res, productID);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const productID = req.url.split("/")[3];
    deleteProduct(req, res, productID);
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: "route not found" }));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
