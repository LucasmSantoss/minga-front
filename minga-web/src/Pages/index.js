import MainLayout from '../layouts/MainLayout/MainLayout'
import IndexLayout from '../layouts/IndexLayout/IndexLayout'
import Index from './Index/Index';
import Hero from './Hero/Hero';
import MangaForm from './MangaForm/MangaForm'
import { createBrowserRouter } from "react-router-dom";

export   const router = createBrowserRouter([
    {
        path: "/",
    element: <MangaForm />,
    children: [

        {path: '/mangaform', element: <MangaForm />}
]

    }
])