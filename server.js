'use strict';

const express = require('express');
const dotenv = require('dotenv');
const NewsAPI = require('newsapi');

dotenv.config({path: './.env'});
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);