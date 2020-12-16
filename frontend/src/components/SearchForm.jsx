import React, {useState} from "react";
import Select from "react-select";

const handleSubmit = (event) => {
    const query = event.target.value;
    alert(query);
};

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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'text'} placeholder={'keyword'}/>
                <input type={'submit'} value={'Submit'}/>
                <Select
                    defaultValue={countryOptions[0]}
                    options={countryOptions}/>
                <Select
                    defaultValue={categoryOptions[0]}
                    options={categoryOptions}/>
                <Select
                    defaultValue={pageSizeOptions[0]}
                    options={pageSizeOptions}/>
            </form>
        </>
    );
};