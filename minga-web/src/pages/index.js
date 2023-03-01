import ChapterForm from "../ChapterForm/ChapterForm.jsx"
import Index from "./Index/Index.jsx"
import NotFound from "./NotFound/NotFound.jsx"

import { createBrowserRouter } from "react-router-dom"

export default router = createBrowserRouter([
    { path: "/", element: <Index/>},
    { path: "/ChapterForm", element: <ChapterForm/>},
    { path: "/NotFound", element: <NotFound/>}
])