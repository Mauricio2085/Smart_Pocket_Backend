const pool = require('../libs/postgres.pool');
const { generateProducts } = require('./products.service');

const searchProduct = async (productName) => {
  try {
    const query = `
            SELECT * FROM productos 
            WHERE LOWER(nombre_producto) LIKE LOWER($1) 
        `;
    const values = [`%${productName}%`]; // Busca coincidencias parciales

    const result = await pool.query(query, values);
    return result.rows; // Devuelve los productos encontrados
  } catch (error) {
    console.error('Error al buscar productos:', error);
    throw new Error('Error en la búsqueda de productos');
  }
};

module.exports = { searchProduct };
