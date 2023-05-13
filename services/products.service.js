const { faker }  = require('@faker-js/faker');
const pool = require('./../libs/postgres.pool')


const generateProducts = async () => {
  const query = `SELECT id, nombre, descripcion, categoria, imagen, disponibilidad
	FROM public.producto;`;

  const rta = await pool.query(query);

  // const products = [];
  // const limit = 100;
  //     for(let index = 0; index < limit; index ++){
  //       products.push({
  //         id: faker.datatype.uuid(),
  //         name: faker.commerce.productName(),
  //         price: parseInt(faker.commerce.price(), 10),
  //         image: faker.image.imageUrl(),
  //       });
  // }
  return rta.rows;
}

module.exports = {generateProducts};
