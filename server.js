'use strict';

const express = require('express');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_ACCESS_KEY);
