import { createBrowserRouter } from "react-router-dom";
import Aboutme from "../Aboutme/Aboutme";
import Home from "../home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        children: [

            {

                path: '/',
                element: <Home></Home>

            },
            // {

            //     path: '//about',
            //     element: <Aboutme></Aboutme>

            // }




        ]

    }





])