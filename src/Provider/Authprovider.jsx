import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Components/firebasedata/firebase.config';
 export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const [user,setuser] = useState(null);
    const [loading,setloading] =useState(true);



    const CreateUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const userinfo ={
        user,loading,CreateUser,
    }
    return (
        <AuthContext.Provider value={userinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;