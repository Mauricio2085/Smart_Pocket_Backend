const {
  generateProducts,
  getOneProduct,
} = require('../services/products.service');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await generateProducts();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await getOneProduct(productId);
    res.json({ product });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProducts, getSingleProduct };
