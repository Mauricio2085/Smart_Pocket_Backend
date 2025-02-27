const {
  cloudinaryController,
} = require('../controllers/cloudinary.controller');
const express = require('express');
const router = express.Router();

router.get('/', cloudinaryController);

module.exports = router;
