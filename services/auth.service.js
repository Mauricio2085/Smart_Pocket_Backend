const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const poolConection = require('../libs/postgres.pool');

const authenticateUser = async (correo, contraseña) => {
  try {
    const query = 'SELECT * FROM usuarios WHERE correo = $1';
    const userResult = await poolConection.query(query, [correo]);

    if (userResult.rows.length === 0) {
      return { error: 'Credenciales incorrectas', status: 401 };
    }
    const user = userResult.rows[0];
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    console.log(isMatch);

    if (!isMatch) {
      return { error: 'Credenciales incorrectas en el match', status: 401 };
    }
    const token = jwt.sign(
      { id_usuario: user.id_usuario, nombre: user.nombre, rol_id: user.rol_id },
      config.jwtSecret,
      { expiresIn: '1h' }
    );
    return {
      token,
      user: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        rol_id: user.rol_id,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { authenticateUser };
