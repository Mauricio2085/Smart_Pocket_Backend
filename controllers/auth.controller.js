const express = require('express');
const { authenticateUser } = require('../services/auth.service');

const loginUser = async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const authResult = await authenticateUser(correo, contraseña);

    if (authResult.error) {
      return res.status(authResult.status).json({ error: authResult.error });
    }

    res.json({
      message: 'Login exitoso',
      token: authResult.token,
      user: authResult.user,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { loginUser };
