import React from 'react';

import { useSelector } from 'react-redux';

import classes from './NewestReleases.module.css'

const NewestReleases = props =>{

    const books = useSelector(state=>{
        return state.book.items.slice();
    });

    let booksRender = <h3>No books Found</h3>


    if (books && books.length > 0){

        booksRender = books.sort((a,b)=>{
            
            const aDate = new Date(a.pubDate);
            const bDate = new Date(b.pubDate);
            if (aDate > bDate) return 1;
            if (aDate < bDate) return -1;
            return 0;
        })
        .slice(0, 3)
        .map(item=>{
            return <li key={item.id}>{item.title}</li>
        });
    }


    return(
        <>
            <h3 style={{textAlign: 'center'}}>Newest Releases!</h3>
                    
            <hr/>
            <ul className={classes['release-list']}>
                {booksRender}
            </ul>
        </>
    )    
};

export default NewestReleases;