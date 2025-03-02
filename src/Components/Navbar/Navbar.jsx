// import React, { useContext } from 'react';
// import"./Navbar.css"
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/Authprovider';
// import { FaUserCircle, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

// const Navbar = () => {
//     const {user,hanadlelogout} = useContext(AuthContext)

//     const handlesignout = () => {
//         hanadlelogout()
//           .then((result) => {
//             console.log(result.user);
//           })
//           .catch((error) => {
//             console.error(error.message);
//           });
//       };

//     return (
//         <div className='flex bg-blue-950 text-white mt-6 p-2 justify-between items-center'>
//             <div className='flex gap-6'>
//                 <h1 className=''>logo img</h1>
//                 <div className='font-bold'>
                    
//                     A Sports Equipment Store
//                 </div>
//             </div>
//             <div className='gap-4 flex font-bold '>
//                 <NavLink to='/'>Home</NavLink>
//                 <NavLink to='/allequipment'>All Sports Equipment</NavLink>
//                 {
//                     user && <><NavLink to='/addequipment'>Add Equipment</NavLink>
//                     <NavLink to='/myequipment'>My Equipment</NavLink>
//                     </>
//                 }
                
//             </div>
//             <div >
//                 {/* <NavLink to='/signup'><button className='btn btn-primary'>Register</button></NavLink>
//                 <NavLink to='/signin'><button className='btn btn-primary ml-6'>Login</button></NavLink>
//                 <button className='btn btn-primary ml-6'>Logout</button> */}
//            <div className="flex items-center space-x-4 mt-4 md:mt-0">

//              {
//                   user ? (
//                     <>
//                       <div className="relative flex items-center group  space-x-2">
                       
//                       <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
//                           {user?.displayName}
//                         </span>
                       
//                         <img
//                           src={user?.photoURL}
//                           alt="User"
//                           className="w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg transition-all group-hover:scale-105"
//                         />
                        
//                       </div>
//                       <button
//                         onClick={handlesignout}
//                         className="flex items-center px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300 shadow-md transition-all space-x-2"
//                       >
//                         <FaSignOutAlt />
//                         <span>Signout</span>
//                       </button>
//                     </>
//                   )
//                   :
//                   (
//                     <>
//                       <NavLink
//                         to="/signup"
//                         className="flex items-center px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:ring focus:ring-purple-300 shadow-md transition-all space-x-2"
//                       >
//                         <FaUserPlus />
//                         <span>Register</span>
//                       </NavLink>
//                       <NavLink
//                         to="/signin"
//                         className="flex items-center px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:ring focus:ring-purple-300 shadow-md transition-all space-x-2"
//                       >
//                         <FaSignInAlt />
//                         <span>Login</span>
//                       </NavLink>
//                     </>
//                   )
//              }

//             </div> 
           



//             </div>
//         </div>
//     );
// };

// export default Navbar;




// import React, { useContext, useState } from 'react';
// import "./Navbar.css";
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/Authprovider';
// import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

// const Navbar = () => {
//     const { user, hanadlelogout } = useContext(AuthContext);
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handlesignout = () => {
//         hanadlelogout()
//             .then((result) => {
//                 console.log(result.user);
//             })
//             .catch((error) => {
//                 console.error(error.message);
//             });
//     };

//     return (
//         <nav className='bg-blue-950 text-white p-4'>
//             {/* Small devices layout */}
//             <div className='flex justify-between items-center md:hidden'>
//                 <div className='flex items-center gap-2'>
//                     <h1>Logo Img</h1>
//                     <div className='font-bold'>A Sports Store</div>
//                 </div>
//                 <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>
//             {menuOpen && (
//                 <div className='flex flex-col mt-4 space-y-2 md:hidden'>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                     <div className='mt-4'>
//                         {user ? (
//                             <>
                         
                         
//                                 <img src={user?.photoURL} alt="User" className='w-12 h-12 rounded-full border-2 border-purple-500' />
//                                 <button onClick={handlesignout} className='btn bg-red-500 text-white rounded-md px-4 py-2 mt-2'>
//                                     <FaSignOutAlt /> Signout
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <NavLink to='/signup' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                     <FaUserPlus /> Register
//                                 </NavLink>
//                                 <NavLink to='/signin' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                     <FaSignInAlt /> Login
//                                 </NavLink>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* Medium and Larger Devices Layout */}
//             <div className='hidden md:flex flex-col items-center'>
//                 <div className='flex flex-col items-center'>
//                     <h1>Logo Img</h1>
//                     <div className='font-bold'>A Sports Store</div>
//                 </div>
//                 <div className='flex gap-4 mt-4'>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                 </div>
//                 <div className='mt-4 flex items-center space-x-4'>
//                     {user ? (
//                         <>

//                         <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
//                          {user?.displayName}
//                          </span>
//                             <img src={user?.photoURL} alt="User" className='w-12 h-12 rounded-full border-2 border-purple-500' />
//                             <button onClick={handlesignout} className='btn bg-red-500 text-white px-4 py-2 rounded-md'>
//                                 <FaSignOutAlt /> Signout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <NavLink to='/signup' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                 <FaUserPlus /> Register
//                             </NavLink>
//                             <NavLink to='/signin' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                 <FaSignInAlt /> Login
//                             </NavLink>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




// import React, { useContext, useState } from 'react';
// import "./Navbar.css";
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/Authprovider';
// import { FaBars, FaTimes, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

// const Navbar = () => {
//     const { user, hanadlelogout } = useContext(AuthContext);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [showUsername, setShowUsername] = useState(false); // State for username visibility

//     const handlesignout = () => {
//         hanadlelogout()
//             .then((result) => {
//                 console.log(result.user);
//             })
//             .catch((error) => {
//                 console.error(error.message);
//             });
//     };

//     return (
//         <nav className='bg-blue-950 text-white p-4'>
//             {/* Small devices layout */}
//             <div className='flex justify-between items-center md:hidden'>
//                 <div className='flex items-center gap-2'>
//                     <h1>Logo Img</h1>
//                     <div className='font-bold'>A Sports Store</div>
//                 </div>
//                 <button onClick={() => setMenuOpen(!menuOpen)} className='text-white text-2xl'>
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>
//             {menuOpen && (
//                 <div className='flex flex-col mt-4 space-y-2 md:hidden'>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                     <div className='mt-4'>
//                         {user ? (
//                             <>
//                                 <img 
//                                     src={user?.photoURL} 
//                                     alt="User" 
//                                     className='w-12 h-12 rounded-full border-2 border-purple-500 cursor-pointer' 
//                                     onClick={() => setShowUsername(!showUsername)}
//                                 />
//                                 {showUsername && (
//                                     <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-lg  shadow-md mt-2">
//                                         {user?.displayName}
//                                     </span>
//                                 )}
//                                 <button onClick={handlesignout} className='btn bg-red-500 text-white rounded-md px-4 py-2 mt-2'>
//                                     <FaSignOutAlt /> Signout
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <NavLink to='/signup' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                     <FaUserPlus /> Register
//                                 </NavLink>
//                                 <NavLink to='/signin' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                     <FaSignInAlt /> Login
//                                 </NavLink>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* Medium and Larger Devices Layout */}
//             <div className='hidden md:flex flex-col items-center'>
//                 <div className='flex flex-col items-center'>
//                     <h1>Logo Img</h1>
//                     <div className='font-bold'>A Sports Store</div>
//                 </div>
//                 <div className='flex gap-4 mt-4'>
//                     <NavLink to='/'>Home</NavLink>
//                     <NavLink to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                 </div>
//                 <div className='mt-4 flex items-center space-x-4'>
//                     {user ? (
//                         <>
//                             {showUsername && (
//                                 <span className="bg-gray-800 text-white text-sm px-2 py-1  rounded-lg shadow-md">
//                                     {user?.displayName}
//                                 </span>
//                             )}
//                             <img 
//                                 src={user?.photoURL} 
//                                 alt="User" 
//                                 className='w-12 h-12 rounded-full border-2 border-purple-500 cursor-pointer' 
//                                 onClick={() => setShowUsername(!showUsername)}
//                             />
//                             <button onClick={handlesignout} className='btn bg-red-500 text-white px-4 py-2 rounded-md'>
//                                 <FaSignOutAlt /> Signout
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             <NavLink to='/signup' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                 <FaUserPlus /> Register
//                             </NavLink>
//                             <NavLink to='/signin' className='btn bg-purple-500 text-white px-4 py-2 rounded-md'>
//                                 <FaSignInAlt /> Login
//                             </NavLink>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import "./Navbar.css";
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../../Provider/Authprovider';
// import { FaBars, FaTimes, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

// const Navbar = () => {
//     const { user, hanadlelogout } = useContext(AuthContext);
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handlesignout = () => {
//         hanadlelogout()
//             .then((result) => console.log(result.user))
//             .catch((error) => console.error(error.message));
//     };

//     return (
//         <nav className='bg-blue-950 text-white p-4 shadow-lg'>
//             {/* Small devices layout */}
//             <div className='flex justify-between items-center md:hidden'>
//                 <div className='flex items-center gap-2'>
//                     <h1 className="text-xl font-bold tracking-wide">Logo Img</h1>
//                     <span className='text-lg font-semibold text-gray-200'>A Sports Store</span>
//                 </div>
//                 <button 
//                     onClick={() => setMenuOpen(!menuOpen)} 
//                     className='text-white text-2xl hover:text-gray-300 transition-all duration-300'>
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>
            
//             {menuOpen && (
//                 <div className='flex flex-col mt-4 space-y-2 md:hidden'>
//                     <NavLink className="hover:text-gray-300 transition-all" to='/'>Home</NavLink>
//                     <NavLink className="hover:text-gray-300 transition-all" to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink className="hover:text-gray-300 transition-all" to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink className="hover:text-gray-300 transition-all" to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                     <div className='mt-4 flex flex-col items-center space-y-3'>
//                         {user ? (
//                             <>
//                                 <img src={user?.photoURL} alt="User" className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-md' />
//                                 <button 
//                                     onClick={handlesignout} 
//                                     className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all duration-300 shadow-md'>
//                                     <FaSignOutAlt /> Sign Out
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <NavLink to='/signup' className='bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-all duration-300 shadow-md'>
//                                     <FaUserPlus /> Register
//                                 </NavLink>
//                                 <NavLink to='/signin' className='bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-all duration-300 shadow-md'>
//                                     <FaSignInAlt /> Login
//                                 </NavLink>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* Medium and Larger Devices Layout */}
//             <div className='hidden md:flex flex-col items-center space-y-4'>
//                 <div className='flex flex-col items-center'>
//                     <h1 className="text-2xl font-bold tracking-wide text-gray-100">Logo Img</h1>
//                     <span className='text-lg font-semibold text-gray-300'>A Sports Store</span>
//                 </div>
                
//                 <div className='flex gap-6 mt-4 text-lg font-medium'>
//                     <NavLink className="hover:text-gray-300 transition-all" to='/'>Home</NavLink>
//                     <NavLink className="hover:text-gray-300 transition-all" to='/allequipment'>All Sports Equipment</NavLink>
//                     {user && (
//                         <>
//                             <NavLink className="hover:text-gray-300 transition-all" to='/addequipment'>Add Equipment</NavLink>
//                             <NavLink className="hover:text-gray-300 transition-all" to='/myequipment'>My Equipment</NavLink>
//                         </>
//                     )}
//                 </div>

//                 <div className='mt-4 flex items-center space-x-5'>
//                     {user ? (
//                         <div className="relative group flex items-center">
//                             {/* Tooltip - Left Side */}
//                             <span className="absolute left-[-50%] bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
//                                 {user?.displayName}
//                             </span>
//                             {/* Profile Image */}
//                             <img src={user?.photoURL} alt="User" className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg transition-transform transform group-hover:scale-105' />
//                             <button 
//                                 onClick={handlesignout} 
//                                 className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 ml-4 hover:bg-red-600 transition-all duration-300 shadow-md'>
//                                 <FaSignOutAlt /> Sign Out
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <NavLink to='/signup' className='bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-all duration-300 shadow-md'>
//                                 <FaUserPlus /> Register
//                             </NavLink>
//                             <NavLink to='/signin' className='bg-purple-500 text-white px-5 py-2 rounded-md hover:bg-purple-600 transition-all duration-300 shadow-md'>
//                                 <FaSignInAlt /> Login
//                             </NavLink>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// deep seek version 


import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';
import { FaBars, FaTimes, FaSignOutAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, hanadlelogout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handlesignout = () => {
        hanadlelogout()
            .then((result) => console.log(result.user))
            .catch((error) => console.error(error.message));
    };

    return (
        <nav className='bg-gradient-to-r from-blue-950 to-purple-900 text-white p-4 shadow-2xl'>
            {/* Small devices layout */}
            <div className='flex justify-between items-center md:hidden'>
                <div className='flex items-center gap-2'>
                    <h1 className="text-xl font-bold tracking-wide text-white">Logo Img</h1>
                    <span className='text-lg font-semibold text-gray-200'>A Sports Store</span>
                </div>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className='text-white text-2xl hover:text-gray-300 transition-all duration-300 focus:outline-none'>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {menuOpen && (
                <div className='flex flex-col mt-4 space-y-2 md:hidden'>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/allequipment'
                    >
                        All Sports Equipment
                    </NavLink>
                    {user && (
                        <>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/addequipment'
                            >
                                Add Equipment
                            </NavLink>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/myequipment'
                            >
                                My Equipment
                            </NavLink>
                        </>
                    )}
                    <div className='mt-4 flex flex-col items-center space-y-3'>
                        {user ? (
                            <>
                                <img 
                                    src={user?.photoURL} 
                                    alt="User" 
                                    className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg hover:border-purple-300 transition-all duration-300' 
                                />
                                <button 
                                    onClick={handlesignout} 
                                    className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    <FaSignOutAlt /> Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink 
                                    to='/signup' 
                                    className={({ isActive }) => 
                                        `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                        }`
                                    }
                                >
                                    <FaUserPlus /> Register
                                </NavLink>
                                <NavLink 
                                    to='/signin' 
                                    className={({ isActive }) => 
                                        `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                        }`
                                    }
                                >
                                    <FaSignInAlt /> Login
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Medium and Larger Devices Layout */}
            <div className='hidden md:flex flex-col items-center space-y-4'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl font-bold tracking-wide text-white">Logo Img</h1>
                    <span className='text-lg font-semibold text-gray-300'>A Sports Store</span>
                </div>
                
                <div className='flex gap-6 mt-4 text-lg font-medium'>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => 
                            `px-4 py-2 rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                            }`
                        } 
                        to='/allequipment'
                    >
                        All Sports Equipment
                    </NavLink>
                    {user && (
                        <>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/addequipment'
                            >
                                Add Equipment
                            </NavLink>
                            <NavLink 
                                className={({ isActive }) => 
                                    `px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-700 hover:text-white'
                                    }`
                                } 
                                to='/myequipment'
                            >
                                My Equipment
                            </NavLink>
                        </>
                    )}
                </div>

                <div className='mt-4 flex items-center space-x-5'>
                    {user ? (
                        <div className="relative group flex items-center">
                            {/* Tooltip - Left Side */}
                            <span className="absolute left-[-80%] bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                {user?.displayName}
                            </span>
                            {/* Profile Image */}
                            <img 
                                src={user?.photoURL} 
                                alt="User" 
                                className='w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg transition-transform transform group-hover:scale-105' 
                            />
                            <button 
                                onClick={handlesignout} 
                                className='bg-red-500 text-white px-5 py-2 rounded-md flex items-center gap-2 ml-4 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                <FaSignOutAlt /> Sign Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink 
                                to='/signup' 
                                className={({ isActive }) => 
                                    `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                        isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                    }`
                                }
                            >
                                <FaUserPlus /> Register
                            </NavLink>
                            <NavLink 
                                to='/signin' 
                                className={({ isActive }) => 
                                    `bg-purple-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                        isActive ? 'bg-purple-700' : 'hover:bg-purple-600'
                                    }`
                                }
                            >
                                <FaSignInAlt /> Login
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


