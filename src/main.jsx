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
import Allcurrentpro from './Components/Allcurrentproduct/Allcurrentpro.jsx';
import Details from './Components/viewdetails/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch("/Product.json")
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
          },
          {
            path:'/allcurrentproduct',
            element:<Allcurrentpro></Allcurrentpro>,
            loader:()=>fetch("/Product.json")

          },
          {
            path:'/details/:id',
            element:<Details></Details>,
            loader:async({params})=>{
            const res= await fetch("/Product.json")
            const data =await res.json();
           // console.log(data,params.id);
           const singleproduct = data.find(d=>d.id==params.id)
            return singleproduct
            }
          }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
