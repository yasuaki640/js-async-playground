const router = require('express').Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);
const morgam = require('morgan');

module.exports = (app) => {
    router.route('/')
        .get((req, res) =>
            res.json({message: 'This is a index page.'}));

    router.route('/news')
        .get((req, res) => {
            newsapi.v2.topHeadlines({
                country: req.query.country || 'jp',
                category: req.query.category || 'general',
                q: req.query.q || '',
                pageSize: Number(req.query.pageSize) || 30

            }).then(news => res.json(news));
        });

    //bind access logger
    app.use(morgam('dev'));

    app.use(router);
};

