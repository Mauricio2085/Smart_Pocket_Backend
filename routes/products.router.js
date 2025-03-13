const express = require('express');
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  sumaryProducts,
  updateProducts,
} = require('../controllers/products.controller');
const router = express.Router();

router.get('/', getAllProducts);

router.get('/product-detail/:productId', getSingleProduct);

router.get('/sumary', sumaryProducts);

router.get('/detail/:productId', getSingleProduct);

router.post('/', createProduct);

router.patch('/', updateProducts);
module.exports = router;
