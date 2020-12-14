const router = require('express').Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);

module.exports = (app) => {
    router.route('/')
        .get((req, res) =>
            res.json({message: 'This is a index page.'}));

    router.route('/news')
        .get((req, res) => {
            let country = req.query.country || 'jp';
            let category = req.query.category || 'general';
            let pageSize = Number(req.query.pageSize) || 30;

            newsapi.v2.topHeadlines({
                country: country,
                category: category,
                pageSize: pageSize
            }).then(news => res.json(news));
        });

    app.use(router);
};

