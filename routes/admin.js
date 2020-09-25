const path = require("path");

const express = require("express");

// const rootDir = require("../utils/path");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;
