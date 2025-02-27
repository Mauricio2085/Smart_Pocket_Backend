const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const routersApi = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const urlProduction = 'https://smart-pocket-v1.vercel.app';
const urllocal = 'http://localhost:3000';

const urlList = [urlProduction, urllocal];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || urlList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log('lisening');
});
routersApi(app);

app.use(errorHandler);
