import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componante/Main.jsx';
import Home from './Componante/Home/Home';
import About from './Componante/Home/About';
import Home2 from './Componante/Home/Home2';
import Serveces from './Componante/Home/Serveces';
import Login from './Componante/Login/Login';
import Singup from './Componante/Singup/Singup';
import Authprovider from './Componante/Authprovider/Authprovider';
import Chackout from './Componante/ChackOut/Chackout';
import ConframOrder from './Componante/Singup/Orders/ConframOrder';
import PrivateRoutes from './Componante/Singup/Orders/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home2></Home2>
      },{
        path:'about',
        element:<About></About>
      },{
        path:'/serveces',
        element:<Serveces></Serveces>
      },{
        path:'login',
        element:<Login></Login>
      },{
        path:'singup',
        element:<Singup></Singup>
      },{
        path:'chackout/:id',
        element:<Chackout></Chackout>,
        loader:({params})=>fetch(`http://localhost:3000/servece/${params.id}`)
      },
      {
        path:'order',
        element:<PrivateRoutes><ConframOrder></ConframOrder></PrivateRoutes>
        
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl	mx-auto'>
    <React.StrictMode >

<Authprovider>
<RouterProvider router={router} />
</Authprovider>


</React.StrictMode>
  </div>,
)
