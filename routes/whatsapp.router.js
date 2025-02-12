const { whatsappNumber } = require('../controllers/whatsapp.controller');
const express = require('express');

const router = express.Router();

router.get('/', whatsappNumber);

module.exports = router;
