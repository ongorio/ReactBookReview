import React from 'react';

import classes from './ReviewsList.module.css';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import ReviewsListItem from './ReviewsListItem';
import LinkButton from '../UI/LinkButton';

const ReviewsList = props =>{

    const params = useParams();

    const reviews = useSelector(state=>{
        return state.review.items.slice();
    });

    
    const filteredReviewList = reviews
    .filter(item=>{
        return item.bookId === params.id; 
    })
    
    const reviewList = filteredReviewList.map(item=>{
        return <ReviewsListItem key={item.id} review={item} />
    });

    const reviewRender = (filteredReviewList && filteredReviewList.length > 0) ? reviewList : <h5>No reviews Found</h5>


    let totalScore = reviews.reduce((prev, item)=>{
        return prev + item.score;
    }, 0);

    totalScore = totalScore / filteredReviewList.length;

    return (
        <>
            <h3 style={{textAlign: 'center'}}>Reviews</h3>
            <div className='d-flex'>
                <LinkButton to="../" center={true}>Hide Reviews</LinkButton>
                <LinkButton to="../comments/form" center={true}>Add Reviews +</LinkButton>
                <p className='ml-auto'><strong>Average Score: </strong>{totalScore}</p>
            </div>
           

            <ul className={classes['reviews-list']}>
                {reviewRender}
            </ul>

        </>
    )

};

export default ReviewsList;