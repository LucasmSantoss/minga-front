import ChapterForm from "./ChapterForm/ChapterForm.jsx"
import Index from "./Index/Index.jsx"
import NotFound from "./NotFound/NotFound.jsx"
import Hero from "./Hero/Hero.jsx"
import Register from "./Register/Register.jsx"
import IndexLayout from "../../src/layouts/IndexLayout/IndexLayout.jsx"
import MainLayout from "../layouts/MainLayout/MainLayout.jsx"
import MangaForm from './MangaForm/MangaForm.jsx'
import FormAuthor from "./FormAuthor/FormAuthor";
import FormLogin from "./FormLogin/FormLogin";
import Page from "./Page/Page"
import Mangas from "./Mangas/Mangas.jsx"
import Manga from './Manga/Manga'
import MyMangas from "./MyMangas/MyMangas";
import EditChapter from "./EditChapter/EditChapter.jsx"
import AuthorProfile from "./AuthorProfile/AuthorProfile.jsx"



import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    { path: "/",
      element: <IndexLayout/>,
      children: [
        {path: "/", element: <Index/>},
        {path: "/hero", element: <Hero/>},
        { path: "/signup", element: <Register /> },
        { path: "/signin", element: <FormLogin/> },
        { path: "/*", element: <NotFound /> },


    ]   },



    { path: "/",
      element: <MainLayout/>,
      children: [
        { path: '/signin' , element: <FormAuthor state='login'/> },
        { path: '/mangas' , element: <MangaForm/> },
        { path: '/mymangas/:page', element: <MyMangas /> },
        { path: "/chapther-form/:manga_id", element: <ChapterForm/>},
        { path: "/api/chapters/:id/:page", element: <Page/>},
        { path: "/manga/:id/:page", element: <Manga/>},
        { path: "/edit/:manga_id", element: <EditChapter/>},
        {path: "/mangas/:page", element: <Mangas/>},
        { path: "/profile", element: <AuthorProfile /> },
    ]},
])














