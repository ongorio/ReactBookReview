import { createSlice } from '@reduxjs/toolkit';

const defaultCommentState = {
    items: [],
}

const ReviewSlice = createSlice({
    name: 'reviews',
    initialState: defaultCommentState,
    reducers:{
        addComment (state, action){
            const commentIndex = state.items.findIndex(item=>{
                return item.id === action.payload.id;
            });

            
            if (commentIndex === -1){
                
                state.items.push(action.payload);
            }
        },
        removeComment (state, action){
            state.items.filter(item=>{
                return item.id !== action.payload;
            });
        }
    }
})

export const reviewActions = ReviewSlice.actions;

export const reviewReducer = ReviewSlice.reducer;
