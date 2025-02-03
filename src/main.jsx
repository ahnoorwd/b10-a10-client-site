import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';
import Home from './Components/Home/Home.jsx';
import Allequipment from './Components/AllSportsequpment/Allequipment.jsx';
import Addequipment from './Components/Addequipment/Addequipment.jsx';
import Myequipment from './Components/Myequipment/Myequipment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/allequipment',
            element:<Allequipment></Allequipment>
          },
          {
            path:'/addequipment',
            element:<Addequipment></Addequipment>
          },
          {
            path:'/myequipment',
            element:<Myequipment></Myequipment>
          }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
