const bcrypt = require('bcryptjs');
const poolConection = require('../libs/postgres.pool'); // Asegúrate de que este apunta a tu conexión con PostgreSQL

const actualizarPassword = async () => {
  const correoAdmin = 'smart-pocket@gmail.com'; // Reemplaza con el correo del administrador
  const nuevaContraseña = '1234'; // Reemplázala con la contraseña real

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(nuevaContraseña, salt);

    const result = await poolConection.query(
      'UPDATE usuarios SET contraseña = $1 WHERE correo = $2 RETURNING correo',
      [hashedPassword, correoAdmin]
    );

    if (result.rowCount > 0) {
      console.log(
        `Contraseña actualizada para el usuario: ${result.rows[0].correo}`
      );
    } else {
      console.log('Usuario no encontrado.');
    }
  } catch (error) {
    console.error('Error actualizando contraseña:', error);
  }
};

actualizarPassword();
