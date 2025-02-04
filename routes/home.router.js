const express = require('express');
const router = express.Router();


router.use('/', (req, res) =>{
  res.send('Hola soy el Home');
});

module.exports = router;
