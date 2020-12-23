import React from 'react';
import Select from 'react-select';
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const formStyle = {
    maxWidth: '600px'
};

export const SearchForm = (props) => {
    return (
        <>
            <Container>
                <Form style={formStyle} onSubmit={props.handleSubmit}>
                    <Form.Group controlId={'formSelectCountry'}>
                        <Form.Label>Country</Form.Label>
                        <Select
                            value={props.country}
                            onChange={props.handleCountryChange}
                            options={props.countryOptions}
                        />
                    </Form.Group>
                    <Form.Group controlId={'formSelectCategory'}>
                        <Form.Label>Category</Form.Label>
                        <Select
                            value={props.category}
                            onChange={props.handleCategoryChange}
                            options={props.categoryOptions}
                        />
                    </Form.Group>
                    <Form.Group controlId={'formSelectLabel'}>
                        <Form.Label>Page Size</Form.Label>
                        <Select
                            value={props.pageSize}
                            onChange={props.handlePageSizeChange}
                            options={props.pageSizeOptions}
                        />
                    </Form.Group>
                    <Form.Group controlId={'formInputKeyword'}>
                        <Form.Label>Keyword</Form.Label>
                        <Form.Control type={"text"} value={props.keyword} placeholder={'Enter search keyword'}
                                      onChange={props.handleKeywordChange}/>
                    </Form.Group>
                    <Button variant={"primary"} type={'submit'}>Search</Button>
                </Form>
            </Container>
        </>
    );
};