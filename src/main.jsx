import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider,} from "react-router-dom";
import { router } from './Components/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-5xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
