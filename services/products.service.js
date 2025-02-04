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
    FROM productos WHERE id_producto = ${id};`;

    const rta = await pool.query(query);

    return rta.rows;
  } catch (err) {
    const error = err;
    console.log(error.routine, error.message, error.code, error.hint);
    return;
  }
};

const createProduct = async (product) => {
  console.log('este es el producto: ', product);
  const {
    nombre_producto: nombre,
    descripcion,
    categoria_id: categoria,
    cantidad,
    costo_unitario: costoUnitario,
    porcentaje_utilidad: porcentajeUtilidad,
  } = product;
  console.log(
    nombre,
    descripcion,
    categoria,
    cantidad,
    costoUnitario,
    porcentajeUtilidad
  );
  const query = `INSERT INTO productos (nombre_producto, descripcion, categoria_id, cantidad, costo_unitario, porcentaje_utilidad)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;

  const values = [
    nombre,
    descripcion,
    categoria,
    cantidad,
    costoUnitario,
    porcentajeUtilidad,
  ];
  const rta = await pool.query(query, values);
  return rta.rows;
};

module.exports = { generateProducts, getOneProduct, createProduct };
