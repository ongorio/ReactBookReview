import React from 'react';

import classes from './NewestReleases.module.css';

import { useSelector } from 'react-redux';

const BestRatedBooks = props =>{

    const books = useSelector(state=>{
        return state.book.items.slice();
    });

    
    const reviews = useSelector(state=>{
        return state.review.items.slice();
    });
    

    
    let bookRender = <h3>No Books Found!</h3>

    if (books && books.length > 0){

        bookRender = books.sort((a,b)=>{
            const aReviewsScore = reviews.filter(item=>{
                return item.bookId === a.id;
            }).reduce((prev, item)=>{
                return prev + item.score;
            }, 0);

            const bReviewsScore = reviews.filter(item=>{
                return item.bookId === b.id;
            }).reduce((prev, item)=>{
                return prev + item.score;
            }, 0);

            if (aReviewsScore > bReviewsScore) return -1;
            if (aReviewsScore < bReviewsScore) return 1;
            return 0;
        })
        .slice(0,3)
        .map(item=>{
            return <li key={item.id}>{item.title}</li>
        });
    }

    return (
        <>
        <h3 style={{textAlign: 'center'}}>Top Rated!</h3>
                
        <hr/>
        <ul className={classes['release-list']}>
            {bookRender}
        </ul>
    </>
    )
};


export default BestRatedBooks;