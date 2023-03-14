import { createReducer } from "@reduxjs/toolkit";
import mangasActions from "./actions"

const { readMangas } = mangasActions

const initialState = {
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        readMangas.fulfilled,
        (state, action) => {
            let newState = {
                ...state,
                mangas: action.payload.mangas
            }
            return newState
        }
    )
)

export default reducer