import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <h1>LOADING.......... </h1>
    }
    if(!user){
     return <Navigate to='/signin'></Navigate>
    }
    return children
};

export default Privateroute;