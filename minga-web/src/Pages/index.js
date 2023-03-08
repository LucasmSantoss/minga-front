import Hero from "./Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound";
import MangaForm from './MangaForm/MangaForm'
import { createBrowserRouter } from "react-router-dom";

export   const router = createBrowserRouter([
    {
        path: "/",
    element: <IndexLayout />,
    children: [
    { path: "/", element: <Index /> },
    { path: "/hero", element: <Hero /> },
    { path: "/*", element: <NotFound /> }
]
   },
    {
        path: "/mangas",
        element: <MangaForm />

    }
])