// import React from 'react';
// import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
// import { Link, NavLink } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Youraddlist = ({equipment,addingequipments,setaddequipments}) => {
//     const {_id,coffeename,Chefname,Suppliername,tasteprofile,category,Details,PhotoURL} = equipment;
//     const handledelete = _id =>{
//         console.log(_id);

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {

//             fetch(`http://localhost:5000/addequipment/${_id}`,{
//                 method:"DELETE",
//             })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log(data);
//                 if(data.deletedCount>0){
//                     Swal.fire({
//                 title: "Deleted!",
//                 text: "Your item has been deleted.",
//                 icon: "success"
//               });
//               const remaining = addingequipments.filter(add=>add._id!==_id);
//               setaddequipments(remaining);
//             }
//             })
//             }

//           });
//     }
//     return (
//         <div className="card card-side bg-gradient-to-r from-teal-100 to-white shadow-2xl p-6 rounded-lg hover:shadow-3xl transition duration-300 ease-in-out">
//         {/* Single Equipment Card - Repeat this inside a .map() function for dynamic data */}
//         <div className=" p-5 flex items-center justify-between w-full">
//           {/* Image & Info Section */}
//           <div className="flex gap-4 items-center">
//             <img
//               src={PhotoURL} // Replace with dynamic image URL
//               alt="Equipment"
//               className="w-36 h-36 rounded-lg object-cover"
//             />
//             <div>
//               <h3 className="text-lg font-bold">{coffeename}</h3>
//               <p className="text-gray-600">
//                 <span className="font-semibold">Supplier Name:</span> {Suppliername}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-semibold">Chef Name:</span> {Chefname}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-semibold">Test-Of-Product:</span>{tasteprofile}
//               </p>
//               <p className="text-gray-600">
//                 <span className="font-semibold">Product-Category:</span> {category}
//               </p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-2">
//             <Link to={`/updatepage/${_id}`}>
//             <button className="btn btn-primary flex items-center gap-2">
//               <FaEdit />
//               Update info
//             </button>
//             </Link>
//             <Link to={`/viewyouraddlist/${_id}`}>
//             <button className="btn bg-pink-500 text-white flex items-center gap-2">
//               <FaEye />
//               View-Details
//             </button>
//             </Link>
//             <button onClick={()=>handledelete(_id)}
//              className="btn bg-red-500 text-white flex items-center gap-2">
//               <FaTrash />
//               Delete
//             </button>
//           </div>
//         </div>
//         </div>

//     );
// };

// export default Youraddlist;

import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Youraddlist = ({ equipment, addingequipments, setaddequipments }) => {
  const {
    _id,
    coffeename,
    Chefname,
    Suppliername,
    tasteprofile,
    category,
    PhotoURL,
  } = equipment;

  const handledelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addequipment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = addingequipments.filter(
                (add) => add._id !== _id
              );
              setaddequipments(remaining);
            }
          });
      }
    });
  };

//   return (
//     <div className="bg-gradient-to-r from-teal-100 to-white shadow-2xl p-6 rounded-lg hover:shadow-3xl transition duration-300 ease-in-out">
//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//         {/* Full-width image on small screens */}
//         <img
//           src={PhotoURL}
//           alt="Equipment"
//           className="w-full sm:w-36 h-48 sm:h-36 rounded-lg object-cover"
//         />

//         {/* Content Section */}
//         {/* <div className="flex-1 text-center sm:text-left">
//                     <h3 className="text-lg font-bold">{coffeename}</h3>
//                     <p className="text-gray-600"><span className="font-semibold">Company-Name:</span> {Suppliername}</p>
//                     <p className="text-gray-600"><span className="font-semibold">product Category:</span> {Chefname}</p>
//                     <p className="text-gray-600"><span className="font-semibold">Processing Time:</span> {tasteprofile}</p>
//                     <p className="text-gray-600"><span className="font-semibold">Extra Customization:</span> {category}</p>
//                 </div> */}

//         <div className="flex-1 text-center sm:text-left bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
//           <h3 className="text-xl font-bold text-gray-800 mb-2">{coffeename}</h3>

//           <p className="text-gray-700 flex justify-between">
//             <span className="font-semibold text-gray-900">Company Name:</span>
//             <span className="text-gray-600">{Suppliername}</span>
//           </p>

//           <p className="text-gray-700 flex justify-between">
//             <span className="font-semibold text-gray-900">
//               Product Category:
//             </span>
//             <span className="text-gray-600">{Chefname}</span>
//           </p>

//           <p className="text-gray-700 flex justify-between">
//             <span className="font-semibold text-gray-900">
//               Processing Time:
//             </span>
//             <span className="text-gray-600">{tasteprofile}</span>
//           </p>

//           <p className="text-gray-700 flex justify-between">
//             <span className="font-semibold text-gray-900">
//               Extra Customization:
//             </span>
//             <span className="text-gray-600">{category}</span>
//           </p>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
//           <Link
//             to={`/updatepage/${_id}`}
//             className="w-full sm:w-auto"
//             title="Update"
//           >
//             <button className="btn btn-primary flex items-center gap-2 min-w-[120px] md:w-full">
//               <FaEdit />
//               Update
//             </button>
//           </Link>

//           <Link
//             to={`/viewyouraddlist/${_id}`}
//             className="w-full sm:w-auto"
//             title="View"
//           >
//             <button className="btn bg-pink-500 text-white flex items-center gap-2 min-w-[120px] md:w-full">
//               <FaEye />
//               View
//             </button>
//           </Link>

//           <button
//             onClick={() => handledelete(_id)}
//             className="btn bg-red-500 text-white flex items-center gap-2 min-w-[120px] md:w-full"
//             title="Delete"
//           >
//             <FaTrash />
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );

return (
    <div className="bg-gradient-to-r from-teal-100 to-white shadow-2xl p-6 rounded-lg hover:shadow-3xl transition duration-300 ease-in-out">
      {/* Centering All Items */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        
        {/* Full-width image on small screens */}
        <img
          src={PhotoURL}
          alt="Equipment"
          className="w-full sm:w-36 h-48 sm:h-36 rounded-lg object-cover"
        />
  
        {/* Content Section */}
        <div className="flex-1 text-center sm:text-left bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{coffeename}</h3>
  
          <p className="text-gray-700 flex justify-between">
            <span className="font-semibold text-gray-900">Company Name:</span>
            <span className="text-gray-600">{Suppliername}</span>
          </p>
  
          <p className="text-gray-700 flex justify-between">
            <span className="font-semibold text-gray-900">Product Category:</span>
            <span className="text-gray-600">{Chefname}</span>
          </p>
  
          <p className="text-gray-700 flex justify-between">
            <span className="font-semibold text-gray-900">Processing Time:</span>
            <span className="text-gray-600">{tasteprofile}</span>
          </p>
  
          <p className="text-gray-700 flex justify-between">
            <span className="font-semibold text-gray-900">Extra Customization:</span>
            <span className="text-gray-600">{category}</span>
          </p>
        </div>
  
        {/* Buttons Section */}
        <div className="flex sm:flex-col gap-2 w-full sm:w-auto items-center sm:items-start">
          <Link to={`/updatepage/${_id}`} className="w-full sm:w-auto" title="Update">
            <button className="btn btn-primary flex items-center justify-center gap-2 min-w-[120px] md:w-full">
              <FaEdit />
              Update
            </button>
          </Link>
  
          <Link to={`/viewyouraddlist/${_id}`} className="w-full sm:w-auto" title="View">
            <button className="btn bg-pink-500 text-white flex items-center justify-center gap-2 min-w-[120px] md:w-full">
              <FaEye />
              View
            </button>
          </Link>
  
          <button onClick={() => handledelete(_id)}
            className="btn bg-red-500 text-white flex items-center justify-center gap-2 min-w-[120px] md:w-full"
            title="Delete">
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  


};

export default Youraddlist;
