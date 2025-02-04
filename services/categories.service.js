const pool = require('./../libs/postgres.pool');

const getCategories = async () => {
  const query = `SELECT *
	FROM categorias
  ORDER BY id_categoria ASC;`;

  const rta = await pool.query(query);
  console.log(rta.rows);
  return rta.rows;
};

const getOneCategory = async (id) => {
  try {
    const categories = await getCategories();
    const idNumber = parseInt(id, 10);
    const categoryFound = categories.find(
      (category) => category.id_categoria === idNumber
    );
    console.log('este segundo: ', categoryFound);
    if (categoryFound === undefined) {
      console.error(new Error('Category not found'));
    }
    const query = `SELECT * 
  FROM productos WHERE categoria_id = ${id};`;
    const rta = await pool.query(query);
    console.log('Solo un producto', rta.rows);
    return rta.rows;
  } catch (err) {
    const error = err;
    console.log(error.routine, error.message, error.code, error.hint);
    return;
  }
};

module.exports = { getCategories, getOneCategory };
