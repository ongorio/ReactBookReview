import React from 'react';

import classes from './BooksListItem.module.css';

import LinkButton from '../UI/LinkButton';

const BooksListItem = props =>{

    const { title, author, summary, releaseYear, id } = props.book;

    return (
        <div>
            <div className={classes['books-item']}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <span className='d-flex'>
                    <small className={classes['book-info']}>
                        <strong>Author: </strong> {author} 
                        <strong> Publication Year: </strong> {releaseYear}
                    </small>
                </span>
                <br/>
                <LinkButton className='ml-auto' to={`/book-detail/${id}`}>View</LinkButton>
            </div>
            <br />
        </div>
    );
};

export default BooksListItem;