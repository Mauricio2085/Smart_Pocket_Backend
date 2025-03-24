const {
  generateProducts,
  getOneProduct,
  createOneProduct,
  getSumaryProducts,
  updateOneProduct,
  deleteOneProduct,
} = require('../services/products.service');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await generateProducts();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};

const summaryProducts = async (req, res, next) => {
  try {
    const summary = await getSumaryProducts();
    res.json(summary);
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
    const productCreated = await createOneProduct(req.body);
    res.json({
      data: productCreated,
      message: 'Producto creado exitosamente!!',
      status: res.statusCode,
    });
  } catch (err) {
    next(err);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const productModified = await updateOneProduct(req.body);
    res.json({
      data: productModified,
      message: 'Producto actualizado exitosamente!!',
      status: res.statusCode,
    });
  } catch (err) {
    next(err);
  }
};

const deleteProducts = async (req, res, next) => {
  try {
    const productId = req.body.id_producto;
    console.log('Id del producto: ', productId);
    const productDeleted = await deleteOneProduct(productId);
    res.json({
      data: productDeleted,
      message: 'Producto eliminado exitosamente!!',
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
  summaryProducts,
  updateProducts,
  deleteProducts,
};
