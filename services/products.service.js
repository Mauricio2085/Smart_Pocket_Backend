const pool = require('../libs/postgres.pool');

const generateProducts = async () => {
  const query = `SELECT *
	FROM productos;`;
  const rta = await pool.query(query);
  return rta.rows;
};

const getOneProduct = async (id) => {
  try {
    var error = new Error('Unexpected input');
    const products = await generateProducts();
    const idNumber = Number(id);
    const productFound = products.find(
      (product) => product.id_producto === idNumber
    );
    console.log('este es el producto encontrado: ', productFound);
    if (!productFound) {
      Boom.boomify(error, { statusCode: 400 });
    }
    const query = `SELECT * 
    FROM productos 
    INNER JOIN categorias ON productos.categoria_id = categorias.id_categoria
    WHERE productos.id_producto = $1`;

    const rta = await pool.query(query, [id]);

    return rta.rows;
  } catch (err) {
    const error = err;
    console.log(error.routine, error.message, error.code, error.hint);
    return;
  }
};

const searchProduct = async (productName) => {
  const allProducts = await generateProducts();
  console.log('Todos los productos', allProducts);
  console.log('Entra a funcion search', productName);
};

module.exports = { generateProducts, getOneProduct, searchProduct };
