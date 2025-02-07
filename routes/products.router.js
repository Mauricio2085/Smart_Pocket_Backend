const express = require('express');
const Boom = require('@hapi/boom');
const {
  generateProducts,
  getOneProduct,
  searchProduct,
} = require('../services/products.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const renderProducts = await generateProducts();
  res.json(renderProducts);
});

router.get('/product-detail/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    var error = new Error('Unexpected input');
    console.log('Este es el id', productId);
    const product = await getOneProduct(productId);
    res.json({ product });
  } catch (error) {
    Boom.badImplementation('Error al consultar la base de datos', {
      error: error.message,
    });
  }
});

router.get('/?productName', async (req, res) => {
  const { productName } = req.body;
  console.log(productName);
  const searchedProduct = await searchProduct(productName);
  searchedProduct.json({
    message: 'created',
    data: newProduct,
  });
});

module.exports = router;
