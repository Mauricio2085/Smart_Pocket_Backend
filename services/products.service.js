const Boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

const generateProducts = async () => {
  try {
    const query = `SELECT *	FROM productos;`;
    const rta = await pool.query(query);
    console.log('Datos obtenidos:', rta.rows);
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

const createOneProduct = async (productData) => {
  try {
    const {
      nombre_producto,
      imagen_producto,
      descripcion,
      especificaciones,
      categoria_id,
      cantidad,
      costo_unitario,
      porcentaje_utilidad,
      disponible,
      destacado,
      propietario,
      nombre_comercial,
      precio_comercial,
    } = productData;
    const query = `INSERT INTO productos (nombre_producto, imagen_producto, descripcion, especificaciones, categoria_id, cantidad, costo_unitario, porcentaje_utilidad, disponible, destacado, propietario, nombre_comercial, precio_comercial) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;
    const rta = await pool.query(query, [
      nombre_producto,
      imagen_producto,
      descripcion,
      especificaciones,
      categoria_id,
      cantidad,
      costo_unitario,
      porcentaje_utilidad,
      disponible,
      destacado,
      propietario,
      nombre_comercial,
      precio_comercial,
    ]);
    return rta.rows;
  } catch (err) {
    throw Boom.badRequest('Error al crear el producto!!', {
      error: err.message,
    });
  }
};

const getSumaryProducts = async () => {
  try {
    const query = `SELECT id_producto, nombre_producto, costo_unitario, porcentaje_utilidad, precio_venta, cantidad FROM productos;`;
    const rta = await pool.query(query);
    return rta.rows;
  } catch (err) {
    throw Boom.badRequest('Error al consultar los productos', {
      error: err.message,
    });
  }
};

module.exports = {
  generateProducts,
  getOneProduct,
  createOneProduct,
  getSumaryProducts,
};
