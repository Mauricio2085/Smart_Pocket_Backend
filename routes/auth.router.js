const { loginUser } = require('../controllers/auth.controller');
const verifyToken = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();

router.post('/', loginUser);
router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Perfil de usuario', user: req.user });
});

module.exports = router;
