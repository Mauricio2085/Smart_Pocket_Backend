const express = require('express');
const Boom = require('@hapi/boom');
const { getProductSearched } = require('../controllers/search.controller');
const router = express.Router();

router.get('/', getProductSearched);

module.exports = router;
