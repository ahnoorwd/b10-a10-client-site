import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
const SignInpage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error,seterror] = useState("")
     const {signInuser} = useContext(AuthContext)
     const {handlegooglelogin} = useContext(AuthContext)
    const handlesignIn = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        seterror("");
        //console.log(email,password);
        signInuser(email,password)
        .then(result=>{
            // console.log(result.user);
            // e.target.reset();
            // navigate ('/')
        

            Swal.fire({
              icon: "success",
              title: "Login Successful",
              text: "Welcome back!",
              timer: 2000,
              showConfirmButton: false,
            }).then(() => {
              navigate(from, { replace: true });
            });
    
            e.target.reset(); 

        })
        .catch((error) => {
          setErrorMessage("Email or password is not correct");
        });
    }

   const Handlegooglelogin =()=>{
    handlegooglelogin()
    .then(result=>{
      // console.log(result);
      // navigate('/');

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      })
      .then(() => {
        navigate(from, { replace: true });
      });

    })
    //.catch(error=>console.log(error.message));
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "An error occurred during Google login.",
        timer: 2000,
        showConfirmButton: false,
      });
    });
   }
  

    return (
        <div className="hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-lg p-6">
          <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-sm shadow-lg p-6">
            <h1 className="text-center text-3xl font-bold text-white">SignIn Now</h1>
            <form onSubmit={handlesignIn}
            className="card-body space-y-4">
              {/* Name Input */}
             
  
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500" required />
              </div>
  
              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="Your Password" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500" required />
              </div>
  
            
             
  
              {/* Submit Button */}
              <div className="form-control mt-4">
                <button className="btn btn-primary w-full text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500 border-none hover:from-blue-500 hover:to-purple-500">
                  Sign In
                </button>
              </div>
            </form>
           
            <button onClick={Handlegooglelogin} className='btn btn-primary'>Log In With Google</button>
            {
                error&&<p className='mt-2 text-red-500 font-bold text-center'>{error.split("/")[1].slice(0,18)}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default SignInpage;