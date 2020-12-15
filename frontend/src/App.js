import React from "react";
import Select from 'react-select';
import "./styles.css";
import {SearchForm} from "./components/SearchForm";


export default function App() {
    return (
        <div className='App'>
            <h1>Search Your Favorite Newssssss!!!!!!</h1>
            <p>Enter news info you looking for.</p>
            <SearchForm/>
        </div>
    );
}
