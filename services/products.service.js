const Boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

const generateProducts = async () => {
  try {
    const query = `SELECT *	FROM productos
    ORDER BY id_producto ASC;`;
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
    WHERE productos.id_producto = $1;`;
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
    const query = `SELECT id_producto, nombre_producto, costo_unitario, porcentaje_utilidad, precio_venta, cantidad 
    FROM productos
    ORDER BY id_producto ASC;`;
    const rta = await pool.query(query);
    return rta.rows;
  } catch (err) {
    throw Boom.badRequest('Error al consultar los productos', {
      error: err.message,
    });
  }
};

const updateOneProduct = async (productData) => {
  try {
    console.log(productData);
    const {
      id_producto,
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
    const query = `UPDATE productos
    SET nombre_producto = $2, imagen_producto = $3, descripcion = $4, especificaciones = $5, categoria_id = $6, cantidad = $7, costo_unitario = $8, porcentaje_utilidad = $9, disponible = $10, destacado = $11, propietario = $12, nombre_comercial = $13, precio_comercial = $14
    WHERE id_producto = $1;`;
    const rta = await pool.query(query, [
      id_producto,
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
    console.log(err);
    throw Boom.badRequest('Error al modificar el producto!', {
      error: err.message,
    });
  }
};

const deleteOneProduct = async (id) => {
  try {
    const idNumber = Number(id);
    const query = `DELETE FROM productos WHERE id_producto = $1 RETURNING id_producto, nombre_producto;`;
    const rta = await pool.query(query, [idNumber]);
    return rta.rows;
  } catch (err) {
    console.log(err);
    throw Boom.badRequest('Error al eliminar el producto!', {
      error: err.message,
    });
  }
};

module.exports = {
  generateProducts,
  getOneProduct,
  createOneProduct,
  getSumaryProducts,
  updateOneProduct,
  deleteOneProduct,
};
