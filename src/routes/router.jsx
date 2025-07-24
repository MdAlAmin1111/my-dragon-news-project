import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import NewsDetails from "../pages/NewsDetails";
import Loading from "../pages/Loading";


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
                },
                // loader: async () => {
                //     await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
                //     const response = await fetch('/news.json');
                //     return response.json(); // optional: parse json
                // },
                hydrateFallbackElement: <Loading></Loading>

            }
        ]

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '*',
        element: <h1>Error404</h1>
    }
])

// <PrivateRoute>
// </PrivateRoute >