
import {  createBrowserRouter, } from "react-router-dom";
import App from "../App";


import AddCoffee from "./AddCoffee";
import UpdateCoffee from "./UpdateCoffee";
import Home from "./Home";
import PopularCoffee from "./PopularCoffee";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: "coffee",
            element: <PopularCoffee/> ,
            loader: ()=>fetch('https://coffee-store-server-nu.vercel.app/coffee')
          },
          {
            path: "addCoffee",
            element: <AddCoffee />,
          },
          {
            path: "updateCoffee/:id",
            element: <UpdateCoffee />,
            loader: ({ params }) => fetch(`https://coffee-store-server-nu.vercel.app/updateCoffee/${params.id}`)
    
          },
        ]
      }
    ]);