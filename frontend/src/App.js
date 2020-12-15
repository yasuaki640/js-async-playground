import React from "react";
import Select from 'react-select';
import "./styles.css";

export default function App() {
    const countryOptions = [
        {value: 'en', label: 'en'},
        {value: 'jp', label: 'jp'},
        {value: 'cn', label: 'cn'}
    ];
    return (
        <div className="App">
            <h1>Search Your Favorite Newssssss!!!!!!</h1>
            <form>
                <Select options={countryOptions}/>
            </form>
        </div>
    );
}
