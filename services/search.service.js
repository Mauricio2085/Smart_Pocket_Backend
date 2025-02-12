const pool = require('../libs/postgres.pool');
const Boom = require('@hapi/boom');
const searchProduct = async (productName) => {
  try {
    const query = `
            SELECT * FROM productos 
            WHERE LOWER(nombre_producto) LIKE LOWER($1) 
        `;
    const values = [`%${productName}%`]; // Busca coincidencias parciales
    console.log(values);
    const result = await pool.query(query, values);
    return result.rows; // Devuelve los productos encontrados
  } catch (error) {
    throw Boom.badImplementation('Error en la búsqueda ', {
      error: error.message,
    });
  }
};

module.exports = { searchProduct };
