const express = require('express');
const cors = require('cors');
const signUp = require('./Routes/signUp');
const signIn = require('./Routes/signIn');
const saveSketch = require('./Routes/saveSketch');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', signUp, signIn);
app.use('/sketch', saveSketch);

const port = process.env.PORT || 4000;
const hostname = process.env.HOST || '127.0.0.1';

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
