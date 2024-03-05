const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = 3001;
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');

mongoose.connect('mongodb://127.0.0.1:27017/eCommerce');

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/products', productRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.json('index page');
});

app.listen(port, (res, req) => {
  console.log('server in running in localhost 3001');
});
