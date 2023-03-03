import IndexLayout from "../layouts/IndexLayout/IndexLayout"
import Index from "./Index/Index";
import Hero from "./Hero/Hero";
import Register from "./Register/Register";

import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,
        children: [

            { path: "/index", element: <Index /> },
            { path: "/hero", element: <Hero /> },
            { path: "/register", element: <Register /> }
        ]
    }])