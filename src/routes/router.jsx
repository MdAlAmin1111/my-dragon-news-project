import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: async () => {
                    const response = await fetch('/news.json');
                    return response;
                }

            }
        ]

    },
    {
        path: '/auth',
        element: <h1>Authentication</h1>
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '*',
        element: <h1>Error404</h1>
    }
])