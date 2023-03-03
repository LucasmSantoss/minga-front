import ChapterForm from "./ChapterForm/ChapterForm.jsx"
import Index from "./Index/Index.jsx"
import NotFound from "./NotFound/NotFound.jsx"
import Hero from "./Hero/Hero.jsx"
import Register from "./Register/Register.jsx"
import IndexLayout from "../../src/layouts/IndexLayout/IndexLayout.jsx"
import MainLayout from "../layouts/MainLayout/MainLayout.jsx"


import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    { path: "/",
      element: <IndexLayout/>,
      children: [
        {path: "/", element: <Index/>},
        {path: "/hero", element: <Hero/>},
        {path: "/register", element: <Register/>},
    ]   },
    { path: "/newchapter",
      element: <MainLayout/>,
      children: [
        {path: "/newchapter", element: <ChapterForm/>}
    ]    },

    {path: "/*", element: <NotFound/>},

    
])