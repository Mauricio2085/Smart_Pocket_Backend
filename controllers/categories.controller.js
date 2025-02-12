const {
  getCategories,
  getOneCategory,
} = require('../services/categories.service');

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const { categoryName, categoryId } = req.params;
    console.log('este es el id: ', categoryId);
    const category = await getOneCategory(categoryId);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCategories, getCategory };
