import React from 'react';
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Youraddlist = ({equipment,addingequipments,setaddequipments}) => {
    const {_id,coffeename,Chefname,Suppliername,tasteprofile,category,Details,PhotoURL} = equipment;
    const handledelete = _id =>{
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/addequipment/${_id}`,{
                method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
              });
              const remaining = addingequipments.filter(add=>add._id!==_id);
              setaddequipments(remaining);
            }
            })
            }
            
          });
    }
    return (
        <div className="card card-side bg-gradient-to-r from-teal-100 to-white shadow-2xl p-6 rounded-lg hover:shadow-3xl transition duration-300 ease-in-out">
        {/* Single Equipment Card - Repeat this inside a .map() function for dynamic data */}
        <div className=" p-5 flex items-center justify-between w-full">
          {/* Image & Info Section */}
          <div className="flex gap-4 items-center">
            <img
              src={PhotoURL} // Replace with dynamic image URL
              alt="Equipment"
              className="w-36 h-36 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{coffeename}</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Supplier Name:</span> {Suppliername}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Chef Name:</span> {Chefname}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Test-Of-Product:</span>{tasteprofile}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Product-Category:</span> {category}
              </p>
            </div>
          </div>
  
          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <Link to={`/updatepage/${_id}`}>
            <button className="btn btn-primary flex items-center gap-2">
              <FaEdit />
              Update info
            </button>
            </Link>
            <Link to={`/viewyouraddlist/${_id}`}>
            <button className="btn bg-pink-500 text-white flex items-center gap-2">
              <FaEye />
              View-Details
            </button>
            </Link>
            <button onClick={()=>handledelete(_id)}
             className="btn bg-red-500 text-white flex items-center gap-2">
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
        </div>



        // <div className="card card-side bg-gradient-to-r from-teal-100 to-white shadow-2xl p-6 rounded-lg hover:shadow-3xl transition duration-300 ease-in-out">
        // <figure>
        //   <img
        //     src={}
        //     alt="Coffee"
        //     className="w-48 h-48  rounded-xl"
        //   />
        // </figure>
        // <div className="flex justify-between w-full p-4">
        //   {/* Coffee Details */}
        //   <div>
        //     <h2 className="card-title text-lg font-bold">{coffeename}</h2>
        //     <p className="text-gray-600">Supplier: {suppliername}</p>
        //     <p className="text-gray-600">Chef: {chefname}</p>
        //     <p className="text-gray-600">Profile: {testprofile}</p>
        //     <p className="text-gray-600">Category: {coffeecate}</p>
        //   </div>
  
        //   {/* Action Buttons with Icons */}
        //   <div className="card-actions justify-end">
        //     <div className="space-y-4">
        //       <Link to={`updatecoffee/${_id}`}>
        //       <button className="btn btn-primary flex items-center gap-2 w-full">
        //         <FaEdit /> Edit
        //       </button>
        //       </Link>
        //       <button className="btn btn-secondary flex items-center gap-2 w-full">
        //         <FaEye /> View
        //       </button>
        //       <button onClick={()=> handleDelete(_id)}
        //       className="btn btn-error flex items-center gap-2 w-full">
        //         <FaTrash /> Delete
        //       </button>
        //     </div>
        //   </div>
        // </div>
        // </div>
    );
};

export default Youraddlist;

