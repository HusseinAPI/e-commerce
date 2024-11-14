import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';
import productRouter from './router/productRouter.js';
import userRouter from './router/userRouter.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

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

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json('index page');
});

app.listen(port, (res, req) => {
  console.log('server in running in localhost 3001');
});
