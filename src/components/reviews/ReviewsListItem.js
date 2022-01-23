import React from 'react';

import classes from './ReviewsListItem.module.css';

import LinkButton from '../UI/LinkButton';

const ReviewsListItem = props =>{

    const { title, author, text, score, bookId, pubDate } = props.review;
    
    return (
        <li className={classes['item']}>
            <h5>{title}</h5>
            <hr/>
            <p>{text}</p>
            {props.view && <LinkButton to={`/book-detail/${bookId}/comments`}>View Book</LinkButton>}
            <small className='d-flex'>
                <p>Score: {score}</p>
                <p className='ml-auto'>{author}</p><br/>
            </small>
        </li>
    )
};

export default ReviewsListItem;