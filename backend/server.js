'use strict';

const express = require('express');
const dotenv = require('dotenv');
const NewsAPI = require('newsapi');
const path = require('path');

const app = express();

dotenv.config({path: './.env'});
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);

//routing
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, 'view', 'index.html')));

app.get("/data", (req, res) => {
    newsapi.v2.topHeadlines({
        country: 'jp',
        category: 'technology',
        pageSize: 40
    }).then(news => res.json(news));
});

app.listen(process.env.PORT, () =>
    console.log('listening on port ' + process.env.PORT));

module.exports = app;