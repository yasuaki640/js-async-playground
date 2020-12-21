import React from 'react';

const imgStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '400px'
};

export const Article = (props) => {
    return (
        <>
            <h4>{props.article.title}</h4>
            <a href={props.article.url} target="_blank" rel="noopener noreferrer">
                <img style={imgStyle} alt={props.article.title} src={props.article.urlToImage}/>
            </a>
        </>
    );
};