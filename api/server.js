import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import index from './routes/index.js';
import cors from 'cors';
const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
index(app);

// express server
app.listen(process.env.PORT || 5001, () =>
  console.log(
    `Server is running at http://localhost:${process.env.PORT || 5001}`
  )
);
