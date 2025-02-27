const express = require('express');
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  sumaryProducts,
} = require('../controllers/products.controller');
const router = express.Router();

router.get('/', getAllProducts);

router.get('/product-detail/:productId', getSingleProduct);

router.get('/sumary', sumaryProducts);

router.post('/', createProduct);

module.exports = router;
