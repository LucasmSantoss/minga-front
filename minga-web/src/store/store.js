import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        estado1: reductor_estado1,
        estado2: reductor_estado2,
        estado3: reductor_estado3,
    }
})