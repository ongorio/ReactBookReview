import React from 'react'

import { useSelector } from 'react-redux';

import Card from '../../components/UI/Card';
import BooksList from '../../components/books/BooksList';

import classes from './Home.module.css'

const Home = () =>{

    const books = useSelector(state=>{
        return state.book.items.slice();
    });

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>New Releases!</h1>
            <hr/>
            
            <div className={classes['main-display']}>
                <Card className={classes['list-one']}>
                    <BooksList books={books} />
                </Card>
                <Card className={classes['list-two']}>
                    <BooksList books={books} />
                </Card>
            </div>
        </div>
    )
};

export default Home;