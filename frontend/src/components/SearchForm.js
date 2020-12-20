import React, {useState} from 'react';
import Select from 'react-select';
import axios from 'axios';

export const SearchForm = (props) => {

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
        <>
            <form onSubmit={handleSubmit}>
                <label>Country
                    <Select
                        value={country}
                        onChange={handleCountryChange}
                        options={countryOptions}
                    />
                </label>
                <label>Category
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                        options={categoryOptions}
                    />
                </label>
                <label>page size
                    <Select
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        options={pageSizeOptions}
                    />
                </label>
                <label>Keyword
                    <input type={'text'} value={keyword} placeholder={'Enter search keyword'}
                           onChange={handleKeywordChange}/>
                </label>
                <input type={'submit'} value={'Submit'}/>
            </form>
        </>
    );
};