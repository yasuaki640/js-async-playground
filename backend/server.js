'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

require('./routes/news')(app);

app.listen(process.env.PORT, () =>
    console.log('listening on port ' + process.env.PORT));

module.exports = app;