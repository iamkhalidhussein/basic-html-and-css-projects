import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Navbar></Navbar>
            }
        ]
    }
])