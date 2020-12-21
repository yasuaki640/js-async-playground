import './App.css';
import React, {useState} from "react";
import {SearchForm} from "./components/SearchForm";
import axios from "axios";

function App() {
    const countryOptions = [
        {value: 'en', label: 'en'},
        {value: 'jp', label: 'jp'},
        {value: 'cn', label: 'cn'}
    ];
    const [country, setCountry] = useState(countryOptions[0]);
    const handleCountryChange = (country) => {
        setCountry(country);
    };

    const categoryOptions = [
        {value: 'business', label: 'business'},
        {value: 'entertainment', label: 'entertainment'},
        {value: 'general', label: 'general'},
        {value: 'health', label: 'health'},
        {value: 'science', label: 'science'},
        {value: 'sports', label: 'sports'},
        {value: 'technology', label: 'technology'}
    ];
    const [category, setCategory] = useState(categoryOptions[0]);
    const handleCategoryChange = (category) => {
        setCategory(category);
    };

    const pageSizeOptions = [
        {value: 15, label: 15},
        {value: 30, label: 30},
        {value: 50, label: 50},
    ];
    const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
    const handlePageSizeChange = (pageSize) => {
        setPageSize(pageSize);
    };

    const [keyword, setKeyword] = useState('');
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value)
    };

    const [articles, setArticles] = useState([]);
    const handleSubmit = async (event) => {
        //prevent reload by submit
        event.preventDefault();

        let articlesArr = await axios.get('http://localhost:3000/news', {
            params: {
                country: country.value,
                category: category.value,
                q: keyword,
                pageSize: pageSize.value
            }
        })
            .then(res => res.data.articles);

        setArticles(articlesArr);
    };

    return (
        <div className='App'>
            <h1>Search Your Favorite Newssssss!!!!!!</h1>
            <p>Enter news info you looking for.</p>
            <SearchForm
                country={country}
                countryOptions={countryOptions}
                handleCountryChange={handleCountryChange}
                category={category}
                categoryOptions={categoryOptions}
                handleCategoryChange={handleCategoryChange}
                pageSize={pageSize}
                pageSizeOptions={pageSizeOptions}
                handlePageSizeChange={handlePageSizeChange}
                keyword={keyword}
                handleKeywordChange={handleKeywordChange}
                handleSubmit={handleSubmit}
            />
            {articles.map(article =>
                <p key={article.title}>{article.title}</p>
            )}
        </div>
    );
}

export default App;
