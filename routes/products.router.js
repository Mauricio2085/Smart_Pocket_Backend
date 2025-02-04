const express = require('express');
const Boom = require('@hapi/boom');
const {
  generateProducts,
  getOneProduct,
  createProduct,
} = require('../services/products.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const renderProducts = await generateProducts();
  res.json(renderProducts);
});

router.get('/:categoryName/:productId', async (req, res) => {
  try {
    const { categoryName, productId } = req.params;
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

router.post('/', async (req, res) => {
  const body = req.body;
  console.log(body);
  const newProduct = await createProduct(body);
  res.json({
    message: 'created',
    data: newProduct,
  });
});

module.exports = router;
