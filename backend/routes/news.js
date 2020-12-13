const router = require('express').Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);

module.exports = (app) => {
    router.route('/')
        .get((req, res) =>
            res.json({message: 'This is a index page.'}));

    router.route('/news')
        .get((req, res) => {
            newsapi.v2.topHeadlines({
                country: 'jp',
                category: 'technology',
                pageSize: 40
            }).then(news => res.json(news));
        });

    app.use(router);
};

