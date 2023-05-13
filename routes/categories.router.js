const express = require('express');
const router = express.Router();
const saludar = require('./../src/js')

router.use('/', (req, res) => {
    res.send('Hola soy categories');
    saludar();
});

router.use('/', (req, res) => {
  res.send('Hola soy categories');
});

router.use('/', (req, res) => {
  res.send('Hola soy categories');
});

router.use('/', (req, res) => {
  res.send('Hola soy categories');
});

router.use('/', (req, res) => {
  res.send('Hola soy categories');
});

module.exports = router;
