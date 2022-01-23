import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from '../slices/BookSlice';
import { reviewReducer } from '../slices/ReviewSlice';


const store = configureStore({
    reducer: {'book': bookReducer, 'review': reviewReducer},
});

export default store;