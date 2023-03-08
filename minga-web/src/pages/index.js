import Hero from "./Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MangaForm from './MangaForm/MangaForm';
import FormAuthor from "./FormAuthor/FormAuthor";
import FormLogin from "./FormLogin/FormLogin";
import Register  from './Register/Register';
import { createBrowserRouter } from "react-router-dom";


export   const router = createBrowserRouter([
    {
        path: "/",
    element: <IndexLayout />,
    children: [
        { path: "/", element: <Index /> },
        { path: "/hero", element: <Hero /> },
        { path: "/signup", element: <Register /> },
        { path: "/signin", element: <FormLogin/> },
        { path: "/*", element: <NotFound /> },
        { path: '/mangas' , element: <MangaForm/> },
]
   },
   ,{
    path: '/' , 
    element: <MainLayout /> , 
    children: [
        { path: '/register' , element: <FormAuthor state='register'/> },
        { path: '/signin' , element: <FormAuthor state='login'/> },
        
    ]
}
])