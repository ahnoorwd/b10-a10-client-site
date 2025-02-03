import React from 'react';
import"./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex bg-blue-950 text-white mt-6 p-2 justify-between items-center'>
            <div className='flex gap-6'>
                <h1 className=''>logo img</h1>
                <div className='font-bold'>
                    
                    A Sports Equipment Store
                </div>
            </div>
            <div className='gap-4 flex font-bold '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allequipment'>All Sports Equipment</NavLink>
                <NavLink to='/addequipment'>Add Equipment</NavLink>
                <NavLink to='/myequipment'>My Equipment</NavLink>
            </div>
            <div >
                <button className='btn btn-primary'>Register</button>
                <button className='btn btn-primary ml-6'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;