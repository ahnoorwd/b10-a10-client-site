import React, { useContext } from 'react';
import"./Navbar.css"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaUserCircle, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
    const {user,hanadlelogout} = useContext(AuthContext)

    const handlesignout = () => {
        hanadlelogout()
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error.message);
          });
      };

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
                {
                    user && <><NavLink to='/addequipment'>Add Equipment</NavLink>
                    <NavLink to='/myequipment'>My Equipment</NavLink>
                    </>
                }
                
            </div>
            <div >
                {/* <NavLink to='/signup'><button className='btn btn-primary'>Register</button></NavLink>
                <NavLink to='/signin'><button className='btn btn-primary ml-6'>Login</button></NavLink>
                <button className='btn btn-primary ml-6'>Logout</button> */}
           <div className="flex items-center space-x-4 mt-4 md:mt-0">

             {
                  user ? (
                    <>
                      <div className="relative flex items-center group  space-x-2">
                       
                      <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                          {user?.displayName}
                        </span>
                       
                        <img
                          src={user?.photoURL}
                          alt="User"
                          className="w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg transition-all group-hover:scale-105"
                        />
                        
                      </div>
                      <button
                        onClick={handlesignout}
                        className="flex items-center px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300 shadow-md transition-all space-x-2"
                      >
                        <FaSignOutAlt />
                        <span>Signout</span>
                      </button>
                    </>
                  )
                  :
                  (
                    <>
                      <NavLink
                        to="/signup"
                        className="flex items-center px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:ring focus:ring-purple-300 shadow-md transition-all space-x-2"
                      >
                        <FaUserPlus />
                        <span>Register</span>
                      </NavLink>
                      <NavLink
                        to="/signin"
                        className="flex items-center px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:ring focus:ring-purple-300 shadow-md transition-all space-x-2"
                      >
                        <FaSignInAlt />
                        <span>Login</span>
                      </NavLink>
                    </>
                  )
             }

            </div> 
           



            </div>
        </div>
    );
};

export default Navbar;