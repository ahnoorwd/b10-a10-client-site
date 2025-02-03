import React from 'react';
import Bannerr from '../Bannerr';
import { NavLink, useLoaderData } from 'react-router-dom';
import Productcard from '../productcard/Productcard';
import Category from '../Categorysection/Category';

const Home = () => {
    const products = useLoaderData();
   // console.log(products);
    return (
        <div >
        <Bannerr></Bannerr>
        <h1 className='font-bold text-3xl text-center'>Our Current Product's</h1>
        <div className=' gap-4 grid md:rid-cols-2 lg:grid-cols-3 mt-4'>
            {
              products.slice(0,6).map(product=><Productcard product={product} ></Productcard>)  
            }
        </div>
        <NavLink to='/allcurrentproduct'><button className='btn btn-primary w-full mt-6'>Show-More</button></NavLink>

         <Category></Category>
        </div>
    );
};

export default Home;