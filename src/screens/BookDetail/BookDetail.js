import React from 'react';

import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './BookDetail.module.css';


const BookDetail = props =>{

    const params = useParams();

    const book = useSelector(state=>{
        const foundBook = state.book.items.find(item=>{
            return item.id === params.id;
        });

        return foundBook;
    });

    const { title, releaseYear, summary, author } = book;

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>{title}</h1>

            <span className='d-flex'>
                <strong>By: </strong> <span style={{display:'inline-block', width:'5px'}}></span>{author}

                <strong className='ml-auto'>Release Year: </strong> {releaseYear}
            </span>

            <hr/>
            
            <div className={classes['jumbotron']}>
                <p>
                    {summary}
                </p>
            </div>
            <hr/>


            <Outlet />

        </div>
    )
};

export default BookDetail;