import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from './Detail/reducer'
import captureState from './Capture/reducer'
import categoriesReducer from "./Categories/reducer"
import textReducer from './Search/reducer'
import sortReducer from "./Sort/reducer"
import mangasReducer from "./Mangas/reducer"

export const store = configureStore({
    reducer: {
        mangas: mangasReducer,
        checked: captureState,
        categories: categoriesReducer, 
        order: sortReducer,
        text: textReducer,
        manga: mangaReducer
    }
})

