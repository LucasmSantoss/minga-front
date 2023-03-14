import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from './Detail/reducer'

export const store = configureStore({
    reducer: {
       mangas: mangaReducer
    }
})