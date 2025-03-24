const express = require('express');
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  summaryProducts,
  updateProducts,
  deleteProducts,
} = require('../controllers/products.controller');
const router = express.Router();

router.get('/', getAllProducts);

router.get('/product-detail/:productId', getSingleProduct);

router.get('/dashboard/summary', summaryProducts);

router.get('/detail/:productId', getSingleProduct);

router.post('/productos', createProduct);

router.patch('/productos', updateProducts);

router.delete('/productos', deleteProducts);
module.exports = router;
