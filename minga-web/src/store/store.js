import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from "./Categories/reducer"
import textReducer from './Search/reducer'
import sortReducer from "./Sort/reducer"
import mangasReducer from "./Mangas/reducer"


export const store = configureStore({
    reducer: {
        categories: categoriesReducer, 
        order: sortReducer,
        text: textReducer,
        mangas: mangasReducer
    }
})

