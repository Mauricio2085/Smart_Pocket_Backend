const {
  generateProducts,
  getOneProduct,
  createOneProduct,
  getSumaryProducts,
} = require('../services/products.service');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await generateProducts();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};

const sumaryProducts = async (req, res, next) => {
  try {
    const sumary = await getSumaryProducts();
    res.json(sumary);
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

const createProduct = async (req, res, next) => {
  try {
    productCreated = await createOneProduct(req.body);
    res.json({
      data: productCreated,
      message: 'Product created',
      status: res.statusCode,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  sumaryProducts,
};
