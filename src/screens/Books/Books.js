import React from 'react';

import { useSelector } from 'react-redux';

// componenets
import BooksList from '../../components/books/BooksList';
import Card from '../../components/UI/Card';
import NewestReleases from '../../components/books/NewestReleases';
import BestRatedBooks from '../../components/books/BestRatedBooks';

import classes from './Books.module.css';


const Books = () =>{

    const books = useSelector(state=>{
        return state.book.items.slice();
    });

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Books</h1>
            <hr />

            <div className={classes['main-display']}>
                <Card className={classes['main-col']}>
                    <BooksList books={books} />
                </Card>

                <div className={classes['side-col']}>
                    <NewestReleases />
                    <BestRatedBooks />
                </div>

            </div>
        </div>
    )
};

export default Books;