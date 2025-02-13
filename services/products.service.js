const Boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

const generateProducts = async () => {
  try {
    const query = `SELECT *
	FROM productos;`;
    const rta = await pool.query(query);
    return rta.rows;
  } catch (err) {
    console.error('Error en la consulta:', err.message);
    // throw Boom.notFound('Productos no disponibles', { error: err.message });
  }
};

const getOneProduct = async (id) => {
  try {
    const products = await generateProducts();
    const idNumber = Number(id);
    const productFound = products.find(
      (product) => product.id_producto === idNumber
    );
    if (!productFound) {
      throw Boom.notFound(`No se encontró el producto con id ${id}`);
    }
    const query = `SELECT * 
    FROM productos 
    INNER JOIN categorias ON productos.categoria_id = categorias.id_categoria
    WHERE productos.id_producto = $1`;
    const rta = await pool.query(query, [idNumber]);
    return rta.rows;
  } catch (err) {
    if (Boom.isBoom(err)) {
      throw err;
    }
    throw Boom.badRequest('Error al consultar la base de datos', {
      error: err.message,
    });
  }
};

module.exports = { generateProducts, getOneProduct };
