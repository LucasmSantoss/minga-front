import ChapterForm from "./ChapterForm/ChapterForm.jsx"
import Index from "../components/Index/Index.jsx"
import NotFound from "./NotFound/NotFound.jsx"
import Hero from "./Hero/Hero.jsx"
import Register from "./Register/Register.jsx"
import IndexLayout from "../../src/layouts/IndexLayout/IndexLayout.jsx"
import MainLayout from "../layouts/MainLayout/MainLayout.jsx"
import MangaForm from './MangaForm/MangaForm.jsx'
import FormAuthor from "./FormAuthor/FormAuthor";
import FormLogin from "./FormLogin/FormLogin";


import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    { path: "/",
      element: <IndexLayout/>,
      children: [
        {path: "/", element: <Index/>},
        {path: "/hero", element: <Hero/>
        { path: "/signup", element: <Register /> },
        { path: "/signin", element: <FormLogin/> },
        { path: "/*", element: <NotFound /> },
        { path: '/mangas' , element: <MangaForm/> }
    ]   },
    { path: "/",
      element: <MainLayout/>,
      children: [
        {path: "/chapther-form/:manga_id", element: <ChapterForm/>},
        { path: '/register' , element: <FormAuthor state='register'/> },
        { path: '/signin' , element: <FormAuthor state='login'/> }
    ]    },

    {path: "/*", element: <NotFound/>},

    {
        path: "/mangas",
        element: <MangaForm />

    }













