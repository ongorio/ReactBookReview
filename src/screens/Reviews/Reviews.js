import React from 'react';

import { useSelector } from 'react-redux';

import ReviewsListItem from '../../components/reviews/ReviewsListItem';

const Reviews = () =>{

    const reviews = useSelector(state=>{
        return state.review.items.slice();
    });

    let reviewsRender = <h3>No Reviews Found</h3>

    if (reviews && reviews.length > 0){
        reviewsRender = reviews.map(item=>{
            return <ReviewsListItem key={item.id} view={true} review={item} />
        });
    }

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Reviews</h1>
            <hr/>

            <ul>
                {reviewsRender}
            </ul>

        </div>
    )
};

export default Reviews;