import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Education from "../pages/Education/Education";
import Projects from "../pages/Projects/Projects";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout> ,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/education",
                element: <Education></Education>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;