import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Components/Services/Register/Register.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayOut from './Components/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Services/Login/Login.jsx';
import AuthProvider from './Components/Services/AuthProvider.jsx';
import ServiceDetailes from './Components/Home/ServiceDetailes.jsx';
import ProtectedRoute from './Components/Services/ProtectedRoute/ProtectedRoute.jsx';
import Event from './Components/Event/Event.jsx';
import GetAQuote from './Components/OptionalPage/GetAQuote.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')

      },
      {
        path: '/servicedetailes/:id',
        element: <ProtectedRoute><ServiceDetailes></ServiceDetailes></ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      {
        path: '/event',
        element: <ProtectedRoute> <Event></Event> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },

{
   path:'/getquote',
   element: <ProtectedRoute><GetAQuote></GetAQuote></ProtectedRoute>,
},

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
