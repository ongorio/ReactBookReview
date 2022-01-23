import React, { useRef } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './ReviewForm.module.css';

import { reviewActions } from '../../slices/ReviewSlice';


const ReviewForm = props =>{

    const titleInput = useRef();
    const reviewInput = useRef();
    const scoreInput = useRef();
    const authorInput = useRef();

    const navigate = useNavigate();

    const params = useParams();
    const dispatch = useDispatch();

    const formSubmitHandler = event =>{
        event.preventDefault();

        // console.log(titleInput.current.value);
        // console.log(reviewInput.current.value);

        const review = {
            id: Math.random(),
            bookId: params.id,
            title: titleInput.current.value,
            author: authorInput.current.value,
            score: +scoreInput.current.value,
            text: reviewInput.current.value,
            pubDate: new Date().toDateString(),
        };
        
        dispatch(reviewActions.addComment(review));


        navigate('../comments', {replace: true})
    };

    return (
        <>
            <h3 style={{textAlign:'center'}}>Comments</h3>
            <form className={classes['form-container']} onSubmit={formSubmitHandler} >

                <div className={classes['form-control']}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id={'title'} ref={titleInput} />
                </div>
                <br/>

                <div className={classes['form-control']}>
                    <label htmlFor='author'>Author</label>
                    <input type="text" id={'author'} ref={authorInput} />
                </div>
                <br/>

                <div className={`${classes['form-control']} ${classes['score']}`}>
                    <label htmlFor='score'>Score</label>
                    <input type="number" max={5} min={0} id={'score'} ref={scoreInput} />
                </div>
                

                <div className={classes['form-control']}>
                    <label htmlFor='comment'>Review</label>
                    <br/>
                    <textarea id={'comment'} rows={'5'} ref={reviewInput} />
                </div>

                <div className='d-flex'>

                    <button className='ml-auto'>Submit</button>
                </div>
            </form>
        </>
    )
};


export default ReviewForm;