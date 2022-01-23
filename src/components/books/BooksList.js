import React from 'react';

import { useSelector } from 'react-redux';

import BooksListItem from './BooksListItem';

import classes from './BooksList.module.css';

const BooksList = props =>{

    const books = useSelector(state=>{
        return state.book.items;
    });

    let bookRender = <h3>No Books Found</h3>

    if (books && books.length > 0){
        bookRender = books.map(item=>{
            return <BooksListItem key={item.id} book={item} />
        });
    }
   
   
    return (
        <div className={classes['display']}>
            <ul className={`${classes['books-list']} ${classes['grid-item-1']}`}>
                {bookRender}
            </ul>
        </div>

   )
}


export default BooksList