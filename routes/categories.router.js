const express = require('express');
const {
  getAllCategories,
  getCategory,
} = require('../controllers/categories.controller');
const router = express.Router();

router.get('/', getAllCategories);

router.get('/:categoryName/:categoryId', getCategory);

module.exports = router;
