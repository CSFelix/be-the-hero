const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // defining JSON as the response's body default format
app.use(routes);
app.listen(3333);