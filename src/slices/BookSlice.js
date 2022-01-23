import { createSlice } from '@reduxjs/toolkit';

const defaultBookState = {
    items: [],

};

const BookSlice = createSlice({
    name: 'books',
    initialState: defaultBookState,
    reducers: {
        addBook (state, action){
            const bookIndex = state.items.findIndex(item=>{
                return item.id === action.payload.id;
            });

            if (bookIndex === -1){
                state.items.push(action.payload);
            }
        },
        removeBook(state, action){
            state.items = state.items.filter(item=>{
                return item.id !== action.payload;
            });
        },
        
        replaceBookList (state, action){
            state.items = action.payload;
        }
    }
});

export const bookActions = BookSlice.actions;

export const bookReducer = BookSlice.reducer;