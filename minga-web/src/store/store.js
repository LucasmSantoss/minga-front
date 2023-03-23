import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from './Detail/reducer'
import captureState from './Capture/reducer'
import categoriesReducer from "./Categories/reducer"
import textReducer from './Search/reducer'
import sortReducer from "./Sort/reducer"
import mangasReducer from "./Mangas/reducer"
import alertReducer from './Alert/reducer'
import chaptersReducer from "./Chapters/reducer"
import authorReducer from './Author/reducer'

const store = configureStore({
    reducer: {
        mangas: mangasReducer,
        checked: captureState,
        categories: categoriesReducer, 
        order: sortReducer,
        text: textReducer,
        manga: mangaReducer,
        alert: alertReducer,
        chapters: chaptersReducer
        author: authorReducer
    }
})

export default store

