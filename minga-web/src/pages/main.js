import MainLayout from "../layouts/MainLayout/MainLayout";
import NewAuthor from "../pages/NewAuthor/NewAuthor"
import Author from "../pages/Author/Author"
import AuthorProfile from "./AuthorProfile/AuthorProfile";

import { createBrowserRouter } from 'react-router-dom'



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/newauthor", element: <NewAuthor /> },
            { path: "/author", element: <Author /> },
            { path: "/authorprofile", element: <AuthorProfile /> }
        ]
    }])