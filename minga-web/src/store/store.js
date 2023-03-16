import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from './Detail/reducer'
import captureState from './Capture/reducer'

export const store = configureStore({
    reducer: {
       mangas: mangaReducer,
       checked: captureState
    }
})