const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const routersApi = require('./routes');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.listen(port, () => {
    console.log('lisening')});

    routersApi(app);


