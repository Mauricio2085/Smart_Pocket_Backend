const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const routersApi = require('./routes');
const errorHandler = require('./middleware/errorHandler');

app.use(
  cors({
    origin: 'https://smart-pocket-v1.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log('lisening');
});
routersApi(app);

app.use(errorHandler);
