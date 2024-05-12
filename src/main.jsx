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
import Recommend from './Queries/Recommend';
import MyRecommendations from './MyRecommendations/MyRecommendations';
import RecommendationsForMe from './RecommendationsForMe/RecommendationsForMe';
import UpdateQuery from './MyQueries/UpdateQuery';
import ViewDetails from './ViewDetails/ViewDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
      , {
        path: '/myQueries',
        element: <MyQueries></MyQueries>
      }
      , {
        path: '/addQueries',
        element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
      },
      {
        path: '/queries',
        element: <Queries></Queries>
      }
      , {
        path: '/query/:id',
        element: <PrivateRoute><Recommend></Recommend></PrivateRoute>,
        loader: ({ params }) => fetch(`https://product-sphere-server.vercel.app/query/${params.id}`),
      }
      , {
        path: '/myRecommendations',
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
      },
      {
        path: '/recommendationsForMe',
        element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <UpdateQuery></UpdateQuery>,

      }
      , {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>

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
