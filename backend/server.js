'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const morgan = require('morgan');
const cors = require('cors');

//enable all CORS requests
app.use(cors());
require('./routes/news')(app);

//bind access logger
app.use(morgan('dev'));

app.listen(process.env.PORT, () =>
    console.log('listening on port ' + process.env.PORT));

module.exports = app;