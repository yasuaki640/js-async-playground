'use strict';

const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const express = require('express');
const morgan = require('morgan');

//enable all CORS requests
app.use(cors());
require('./routes/news')(app);

//bind access logger
app.use(morgan('dev'));

app.listen(process.env.PORT, () =>
    console.log('listening on port ' + process.env.PORT));

module.exports = app;