import React from 'react';
import Card from "react-bootstrap/Card";

export const Article = (props) => {
    return (
        <>
            <Card>
                <Card style={{width: '18rem'}}>
                    <a href={props.article.url}>
                        <Card.Img variant="top" src={props.article.urlToImage}/>
                    </a>
                    <Card.Body>
                        <Card.Title>{props.article.title}</Card.Title>
                        <Card.Text>
                            {props.article.article}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card>
        </>
    );
};