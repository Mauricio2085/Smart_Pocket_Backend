const express = require('express');
const app = express();
const port = 3000;
const routersApi = require('./routes');



app.get('/', (req, res) =>{
    res.send('Hello word')
})

app.listen(port, () => {
    console.log('lisening')});

    routersApi(app);


