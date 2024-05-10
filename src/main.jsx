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
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import MyQueries from './MyQueries/MyQueries';
import AddQueries from './AddQueries/AddQueries';
import Queries from './Queries/Queries';

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      ,{
        path: '/myQueries',
        element: <MyQueries></MyQueries>
      }
      ,{
        path: '/addQueries',
        element: <AddQueries></AddQueries>
      },
      {
        path: '/queries',
        element: <Queries></Queries>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>

)
