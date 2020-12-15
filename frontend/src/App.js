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
    const pageSizeOptions = [
        {value: 15, label: 15},
        {value: 30, label: 30},
        {value: 50, label: 50},
    ];
    return (
        <div className='App'>
            <h1>Search Your Favorite Newssssss!!!!!!</h1>
            <p>Enter news info you looking for.</p>
            <form>
                <input placeholder={'keyword'}/>
                <Select defaultValue={{value: 'en', label: 'en'}} options={countryOptions}/>
                <Select defaultValue={{value: 'business', label: 'business'}} options={categoryOptions}/>
                <Select defaultValue={{value: 15, label: 15}} options={pageSizeOptions}/>
            </form>
        </div>
    );
}
