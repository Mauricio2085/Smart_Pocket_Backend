const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(403)
      .json({ error: 'Acceso denegado, se requiere un token' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), config.jwtSecret);
    req.user = decoded; // Ahora req.user tiene el usuario autenticado
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = verifyToken;
