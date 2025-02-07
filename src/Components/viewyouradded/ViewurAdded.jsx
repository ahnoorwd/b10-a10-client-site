// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

// const ViewurAdded = () => {
//     const veiwequipmentlist = useLoaderData();
//     const {_id,coffeename,Chefname,Suppliername,tasteprofile,category,Details,PhotoURL} =veiwequipmentlist
//     return (
//         <div className="hero bg-base-200 mt-10">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img
//             src={PhotoURL}
//             className="max-w-sm rounded-lg shadow-2xl" />
//           <div>
//             <h1 className="text-5xl font-bold">{coffeename}</h1>
//             <p>{Chefname}</p>
//             <p>{Suppliername}</p>
//             <p>{tasteprofile}</p>
//             <p>{category}</p>
//             <p className="py-6">
//               {Details}  
//             </p>
            
//             <Link to='/myequipment'>
//             <button className="btn btn-primary">GO BACK</button>
//             </Link>

//           </div>
//         </div>
//       </div>
//     );
// };

// export default ViewurAdded;


// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";

// const ViewurAdded = () => {
//   const veiwequipmentlist = useLoaderData();
//   const {
//     _id,
//     coffeename,
//     Chefname,
//     Suppliername,
//     tasteprofile,
//     category,
//     Details,
//     PhotoURL,
//   } = veiwequipmentlist;

//   return (
//     <div className="hero bg-base-200 mt-10 py-10">
//       <div className="hero-content flex-col lg:flex-row-reverse items-center gap-8">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2">
//           <img
//             src={PhotoURL}
//             alt={coffeename}
//             className="w-full max-w-sm rounded-2xl shadow-lg border border-gray-300"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl font-extrabold text-gray-800">{coffeename}</h1>
//           <p className="text-lg text-gray-600 mt-2">👨‍🍳 <span className="font-bold">Chef:</span> {Chefname}</p>
//           <p className="text-lg text-gray-600">🏭 <span className="font-bold">Supplier:</span> {Suppliername}</p>
//           <p className="text-lg text-gray-600">☕ <span className="font-bold">Taste:</span> {tasteprofile}</p>
//           <p className="text-lg text-gray-600">📌 <span className="font-bold">Category:</span> {category}</p>
//           <p className="mt-4 text-gray-700 leading-relaxed px-4 lg:px-0">{Details}</p>

//           {/* Button */}
//           <div className="mt-6">
//             <Link to="/myequipment">
//               <button className="btn btn-primary btn-wide transition-transform transform hover:scale-105">
//                 🔙 Go Back
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewurAdded;



import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewurAdded = () => {
  const veiwequipmentlist = useLoaderData();
  const {
    _id,
    coffeename,
    Chefname,
    Suppliername,
    tasteprofile,
    category,
    Details,
    PhotoURL,
  } = veiwequipmentlist;

  return (
    <div className="hero bg-base-200 mt-10 py-10 px-8 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <img
            src={PhotoURL}
            alt={coffeename}
            className="w-full max-w-lg rounded-2xl shadow-lg border border-gray-300"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{coffeename}</h1>
          <p className="mt-2 text-lg"><span className="font-semibold">👨‍🍳 Chef:</span> {Chefname}</p>
          <p className="text-lg"><span className="font-semibold">🏭 Supplier:</span> {Suppliername}</p>
          <p className="text-lg"><span className="font-semibold">☕ Taste:</span> {tasteprofile}</p>
          <p className="text-lg"><span className="font-semibold">📌 Category:</span> {category}</p>
          <p className="mt-4 text-gray-700">{Details}</p>

          {/* Button */}
          <Link to="/myequipment">
            <button className="btn btn-primary mt-6">🔙 Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewurAdded;
