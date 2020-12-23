import React from 'react';
import Select from 'react-select';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const formStyle = {
    maxWidth: '600px'
};

export const SearchForm = (props) => {
    return (
        <>
            <Form style={formStyle} onSubmit={props.handleSubmit}>
                <Form.Group controlId={'formSearchNews'}>
                    <Form.Label>Country</Form.Label>
                    <Select
                        value={props.country}
                        onChange={props.handleCountryChange}
                        options={props.countryOptions}
                    />
                    <Form.Label>Category</Form.Label>
                    <Select
                        value={props.category}
                        onChange={props.handleCategoryChange}
                        options={props.categoryOptions}
                    />
                    <Form.Label>Page Size</Form.Label>
                    <Select
                        value={props.pageSize}
                        onChange={props.handlePageSizeChange}
                        options={props.pageSizeOptions}
                    />
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control type={"text"} value={props.keyword} placeholder={'Enter search keyword'}
                                  onChange={props.handleKeywordChange}/>
                    <Button variant={"primary"} type={'submit'}>Search</Button>
                </Form.Group>
            </Form>
        </>
    );
};