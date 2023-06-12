const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const multer = require('multer');
const connectDB = require('./config/db');
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('working!');
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
