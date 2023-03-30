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
import chaptersReducer from "./Chapters/reducer"
import authorReducer from './Author/reducer'
<<<<<<< HEAD
import companyReducer from './Company/reducer'

=======
import checkoutMercadoPagoReducer from "./CheckoutMercadoPago/reducer"
import reactionsReducer from './Reactions/reducer'
import favouritesMangasReducer from './FavouritesMangas/reducer'
import renderCommentsModal from './RenderCommentsModal/reducer'
import getComents from './Comments/reducer'
>>>>>>> 9e5e0274f1cdcfbd46ff3edf48490baaa3ccd9f8

const store = configureStore({
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
        modalDeleteState: modalDeleteReducer,
        chapters: chaptersReducer,
        author: authorReducer,
<<<<<<< HEAD
        Company: companyReducer

=======
        checkout: checkoutMercadoPagoReducer
        reactions: reactionsReducer,
        favouritesMangas: favouritesMangasReducer,
        commentsModal: renderCommentsModal,
        comments: getComents
>>>>>>> 9e5e0274f1cdcfbd46ff3edf48490baaa3ccd9f8
    }
})

export default store

