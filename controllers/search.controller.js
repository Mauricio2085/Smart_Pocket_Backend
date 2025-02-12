const { searchProduct } = require('../services/search.service');

const getProductSearched = async (req, res, next) => {
  try {
    const { productName } = req.query;
    const productSearched = await searchProduct(productName);

    res.json(productSearched);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProductSearched };
