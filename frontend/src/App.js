import React from "react";
import Select from 'react-select';
import "./styles.css";

export default function App() {
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

    return (
        <div className="App">
            <h1>Search Your Favorite Newssssss!!!!!!</h1>
            <form>
                <input placeholder={'keyword'}/>
                <Select options={countryOptions}/>
                <Select options={categoryOptions}/>
            </form>
        </div>
    );
}
