// import React from "react";

// const Signup = () => {
//   return (
//     <div className="hero bg-base-200 ">
        
//     <div className="hero-content flex-col lg:flex-row-reverse">
    
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <h1 className="text-center text-2xl font-bold">Register Now</h1>
//         <form className="card-body">
//         <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input type="text" placeholder="Name" className="input input-bordered" required />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input type="email" placeholder="email" className="input input-bordered" required />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input type="password" placeholder="password" className="input input-bordered" required />
           
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">PhotoUrl</span>
//             </label>
//             <input type="text" placeholder="photourl" className="input input-bordered" required />
           
//           </div>


//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";

const Signup = () => {
    const [error,seterror] = useState("")
    const {CreateUser,updateprofile} = useContext(AuthContext)

    const handlesignup = e =>{
        e.preventDefault();
        seterror("")
       const name = e.target.name.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       const photourl = e.target.photourl.value;
       const userinformation = {name,email,password,photourl}
       console.log(userinformation);

      if (!/[a-z]/.test(password)){
            seterror("Password must be atleast one lowercase ");
            return ;
      }
      if (!/[A-Z]/.test(password)){
            seterror("Password must be atleast one uppercase ");
            return ;
      }
      if (password.length<6){
            seterror("Password must contain atleast 6 characters");
            return ;
      }
      
       CreateUser(email,password)
       .then(result=>{
        updateprofile(name,photourl)
        console.log(result.user);
        const newUser = {email,name}
        //save new info from database 
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('user creating to db',data);
        })
       })
       .catch(error=>{
        console.log('error is here', error);
       })

    }
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-lg p-6">
        <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-full max-w-sm shadow-lg p-6">
          <h1 className="text-center text-3xl font-bold text-white">Register Now</h1>
          <form onSubmit={handlesignup}
          className="card-body space-y-4">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500" required />
            </div>

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

            {/* Photo URL Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input type="text" name="photourl"  placeholder="Profile Photo URL" className="input input-bordered bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-500" required />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button className="btn btn-primary w-full text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500 border-none hover:from-blue-500 hover:to-purple-500">
                Sign Up
              </button>
            </div>
          </form>
          {error&&<p className="text-red-500 font-bold text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
