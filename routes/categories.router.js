const express = require('express');
const {
  getCategories,
  getOneCategory,
} = require('../services/categories.service');
const router = express.Router();

router.get('/', async (req, res) => {
  const renderCategories = await getCategories();
  res.json(renderCategories);
});

router.get('/:categoryName/:categoryId', async (req, res) => {
  const { categoryName, categoryId } = req.params;
  console.log('este es el id: ', categoryId);
  const category = await getOneCategory(categoryId);

  res.json(category);
});

module.exports = router;
