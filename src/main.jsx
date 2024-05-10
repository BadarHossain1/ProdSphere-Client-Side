import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import ErrorPage from './Routes/Error/ErrorPage';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>

)
