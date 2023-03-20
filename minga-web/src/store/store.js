import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from './Detail/reducer'
import captureState from './Capture/reducer'
import categoriesReducer from "./Categories/reducer"
import textReducer from './Search/reducer'
import sortReducer from "./Sort/reducer"
import mangasReducer from "./Mangas/reducer"
import myMangasReducer from './MyMangas/reducer'
import alertReducer from './Alert/reducer'
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        mangas: mangasReducer,
        checked: captureState,
        categories: categoriesReducer, 
        order: sortReducer,
        text: textReducer,
        manga: mangaReducer,
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer
    }
})

