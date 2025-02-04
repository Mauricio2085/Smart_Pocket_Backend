const express = require('express');
const Boom = require('@hapi/boom');
const { searchProduct } = require('../services/search.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const productName = req.query.search;
  console.log(productName);
  const foundProduct = await searchProduct(productName);
  res.json({
    message: 'Encontrado',
    data: foundProduct,
  });
});

module.exports = router;
