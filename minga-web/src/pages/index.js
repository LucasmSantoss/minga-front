import ChapterForm from "./ChapterForm/ChapterForm.jsx"
import Index from "./Index/Index.jsx"
import NotFound from "./NotFound/NotFound.jsx"
import Hero from "./Hero/Hero.jsx"
import Register from "./Register/Register.jsx"
import IndexLayout from "../../src/layouts/IndexLayout/IndexLayout.jsx"



import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    { path: "/",
      element: <IndexLayout/>,
      children: [
        {path: "/index", element: <Index/>},
        {path: "/hero", element: <Hero/>},
        {path: "/register", element: <Register/>},
    ]   },
    
        {path: "/*", element: <NotFound/>},
        { path: "/ChapterForm", element: <ChapterForm/>},


    // {path: "/*", element: <NotFound/>}
    

])