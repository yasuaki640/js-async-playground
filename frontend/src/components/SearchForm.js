import React from 'react';
import Select from 'react-select';

export const SearchForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <label>Country
                    <Select
                        value={props.country}
                        onChange={props.handleCountryChange}
                        options={props.countryOptions}
                    />
                </label>
                <label>Category
                    <Select
                        value={props.category}
                        onChange={props.handleCategoryChange}
                        options={props.categoryOptions}
                    />
                </label>
                <label>Page Size
                    <Select
                        value={props.pageSize}
                        onChange={props.handlePageSizeChange}
                        options={props.pageSizeOptions}
                    />
                </label>
                <label>Keyword
                    <input type={'text'} value={props.keyword} placeholder={'Enter search keyword'}
                           onChange={props.handleKeywordChange}/>
                </label>
                <input type={'submit'} value={'Submit'}/>
            </form>
        </>
    );
};