const express = require('express');
const {generateProducts} = require('../services/products.service');
const router = express.Router();

router.use('/', async (req, res) => {
     const render = await generateProducts();
  res.json(render);
});

module.exports = router;
