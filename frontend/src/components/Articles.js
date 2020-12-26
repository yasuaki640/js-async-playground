import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export const Articles = props => {
    return (
        <>
            <CardColumns>
                {props.articles.map(article =>
                    <Article article={article}/>
                )}
            </CardColumns>
        </>
    );
};

const Article = (props) => {
    return (
        <>
            <Card key={props.article.url}>
                <a href={props.article.url} target={'_blank'} rel={'noopener noreferrer'}>
                    <Card.Img variant='top' src={props.article.urlToImage}/>
                </a>
                <Card.Body>
                    <Card.Title>{formatTitle(props.article.title)}</Card.Title>
                    <Card.Text>
                        {props.article.article}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

const MAX_DISPLAY_LENGTH = 45;
const formatTitle = title => {
    if (title.length > MAX_DISPLAY_LENGTH) {
        return title.slice(0, MAX_DISPLAY_LENGTH) + '...';
    } else {
        return title;
    }

};