import React, {useState} from "react";
import Select from "react-select";


export const SearchForm = (props) => {

    const countryOptions = [
        {value: 'en', label: 'en'},
        {value: 'jp', label: 'jp'},
        {value: 'cn', label: 'cn'}
    ];
    const categoryOptions = [
        {value: 'business', label: 'business'},
        {value: 'entertainment', label: 'entertainment'},
        {value: 'general', label: 'general'},
        {value: 'health', label: 'health'},
        {value: 'science', label: 'science'},
        {value: 'sports', label: 'sports'},
        {value: 'technology', label: 'technology'}
    ];
    const pageSizeOptions = [
        {value: 15, label: 15},
        {value: 30, label: 30},
        {value: 50, label: 50},
    ];

    const [keyword, setKeyword] = useState('');

    const handleSubmit = () => {
        let data = {
            country: country.value,
            keyword: keyword,
        };
        alert(JSON.stringify(data));
    };

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value)
    };

    const [country, setCountry] = useState(countryOptions[0]);

    const handleCountryChange = (country) => {
        setCountry(country);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'text'} value={keyword} placeholder={'keyword'} onChange={handleKeywordChange}/>
                <Select
                    value={country}
                    onChange={handleCountryChange}
                    options={countryOptions}
                />
                <input type={'submit'} value={'Submit'}/>
            </form>
        </>
    );
};