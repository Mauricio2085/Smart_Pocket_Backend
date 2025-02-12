const poolConection = require('./../libs/postgres.pool');
const Boom = require('@hapi/boom');
const getCategories = async () => {
  try {
    const query = `SELECT * FROM categorias
    ORDER BY id_categoria ASC;`;

    const rta = await poolConection.query(query);
    return rta.rows;
  } catch (err) {
    throw Boom.badRequest('Error al consultar las categorías', {
      error: err.message,
    });
  }
};

const getOneCategory = async (id) => {
  try {
    const categories = await getCategories();
    const idNumber = parseInt(id, 10);
    // Validar que el id es un número válido
    if (isNaN(idNumber)) {
      throw Boom.badRequest(
        `El ID proporcionado (${id}) no es un número válido`
      );
    }
    const categoryFound = categories.find(
      (category) => category.id_categoria === idNumber
    );
    console.log('Categoría encontrada', categoryFound);
    if (!categoryFound) {
      throw Boom.notFound(`No se encontró la categoría con id ${id}`);
    }
    const query = `SELECT * 
    FROM productos WHERE categoria_id = $1;`;
    const rta = await poolConection.query(query, [idNumber]);
    return rta.rows;
  } catch (err) {
    if (Boom.isBoom(err)) {
      throw err;
    }
    throw Boom.internal('Error al consultar la base de datos', {
      error: err.message,
    });
  }
};

module.exports = { getCategories, getOneCategory };
