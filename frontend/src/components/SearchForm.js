import React from 'react';
import Select from 'react-select';
import {Form, Button} from "react-bootstrap";

const formStyle = {
    maxWidth: '600px'
};

export const SearchForm = (props) => {
    return (
        <>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group ControllId={"formSearchArticles"}>
                    <Form.Label>Country
                        <Select
                            value={props.country}
                            onChange={props.handleCountryChange}
                            options={props.countryOptions}
                        />
                    </Form.Label>
                    <Form.Label>Category
                        <Select
                            value={props.category}
                            onChange={props.handleCategoryChange}
                            options={props.categoryOptions}
                        />
                    </Form.Label>
                    <Form.Label>Page Size
                        <Select
                            value={props.pageSize}
                            onChange={props.handlePageSizeChange}
                            options={props.pageSizeOptions}
                        />
                    </Form.Label>
                    <Form.Label>Keyword
                        <Form.Control type={"text"} value={props.keyword} placeholder={'Enter search keyword'}
                                      onChange={props.handleKeywordChange}/>
                    </Form.Label>
                </Form.Group>
                <Button variant={"primary"} type={'submit'}>Search</Button>
            </Form>
        </>
    );
};