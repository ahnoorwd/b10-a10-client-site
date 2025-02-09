// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Allequipmentcard = ({eqipment}) => {
//    // console.log(eqipment);
//    const {image,item_name,category_name,price,id}  = eqipment ;
//     return (
//         <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <th>Product Name</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
                  
//                   <div>
//                     <div className="font-bold">{item_name}</div>
//                     <div className="text-sm opacity-50">United States</div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 {category_name}
//                 <br />
//                 <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//               </td>
//               <td>{price}</td>
//               <th>
//                 <NavLink to={`/details/${id}`}>
//                 <button className="btn btn-ghost btn-xs">View-Details</button>
//                 </NavLink>
//               </th>
//             </tr>
           
           
//           </tbody>
          
          
//         </table>
//       </div>
//     );
// };

// export default Allequipmentcard;



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Allequipmentcard = ({ eqipment }) => {
//   const { image, item_name, category_name, price, id } = eqipment;

//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         {/* head */}
//         <thead>
//           <tr>
//             <th>
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>
//             <th>Product Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           <tr>
//             <th>
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>
//             <td>
//               <div className="flex items-center gap-3">
//                 <div>
//                   <div className="font-bold">{item_name}</div>
//                   <div className="text-sm opacity-50">Made In Bangladesh</div>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <div className="flex items-center gap-2">
//                 <span>{category_name}</span>
//                 <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//               </div>
//             </td>
//             <td>{price}</td>
//             <th>
//               <NavLink to={`/details/${id}`}>
//                 <button className="btn btn-ghost btn-xs">View-Details</button>
//               </NavLink>
//             </th>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Allequipmentcard;


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Allequipmentcard = ({ eqipment }) => {
//   const { image, item_name, category_name, price, id } = eqipment;

//   return (
//     <div className="overflow-x-auto p-4">
//       <table className="table w-full border border-gray-300 shadow-lg rounded-lg">
//         {/* Table Head */}
//         <thead className="bg-gray-100 text-gray-700">
//           <tr>
//             <th className="p-3">
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>
//             <th className="p-3">Product Name</th>
//             <th className="p-3">Category</th>
//             <th className="p-3">Price</th>
//             <th className="p-3">Action</th>
//           </tr>
//         </thead>

//         {/* Table Body */}
//         <tbody>
//           <tr className="hover:bg-gray-50 transition duration-200">
//             <th className="p-3">
//               <label>
//                 <input type="checkbox" className="checkbox" />
//               </label>
//             </th>

//             {/* Product Name */}
//             <td className="p-3">
//               <div className="flex items-center gap-3">
//                 <img src={image} alt={item_name} className="w-12 h-12 rounded-md object-cover shadow-md" />
//                 <div>
//                   <div className="font-bold text-lg">{item_name}</div>
//                   <div className="text-sm text-gray-500">Made In Bangladesh</div>
//                 </div>
//               </div>
//             </td>

//             {/* Category */}
//             <td className="p-3">
//               <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg">
//                 <span className="font-medium">{category_name}</span>
//                 <span className="badge badge-ghost badge-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Desktop Support Technician</span>
//               </div>
//             </td>

//             {/* Price */}
//             <td className="p-3 font-semibold text-green-600">${price}</td>

//             {/* Action */}
//             <td className="p-3">
//               <NavLink to={`/details/${id}`}>
//                 <button className="btn btn-error btn-xs  rounded-md shadow-md hover:bg-blue-600 transition duration-200">
//                   View Details
//                 </button>
//               </NavLink>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Allequipmentcard;  2 is start here and it's effective


import React from 'react';
import { Zoom } from "react-reveal";
import { NavLink } from 'react-router-dom';

const Allequipmentcard = ({ eqipment }) => {
  const { image, item_name, category_name, price, id } = eqipment;

  return (
    <div className="overflow-x-auto p-4">
      <div className="hidden md:block">
        {/* Table for medium and larger screens */}
        <table className="table w-full border border-gray-300 shadow-lg rounded-lg">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-200">
              <th className="p-3">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              {/* Product Name */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                
              
               <Zoom>
               <img src={image} alt={item_name} className="w-12 h-12 rounded-md object-cover shadow-md" />

               </Zoom>
                               
                  <div>
                    <div className="font-bold text-lg">{item_name}</div>
                    <div className="text-sm text-gray-500">Made In Bangladesh</div>
                  </div>
                </div>
              </td>
              
              {/* Category */}
              <td className="p-3">
                <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-lg">
                  <span className="font-medium">{category_name}</span>
                  <span className="badge badge-ghost badge-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Desktop Support Technician</span>
                </div>
              </td>

              {/* Price */}
              <td className="p-3 font-semibold text-green-600">${price}</td>

              {/* Action */}
              <td className="p-3">
                <NavLink to={`/tabledetails/${id}`}>
                  <button className="btn btn-error btn-xs rounded-md shadow-md hover:bg-blue-600 transition duration-200">
                    View Details
                  </button>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="block md:hidden">
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-300">
          <div className="flex items-center gap-4">
            <img src={image} alt={item_name} className="w-16 h-16 rounded-md object-cover shadow-md" />
            <div>
              <div className="font-bold text-lg">{item_name}</div>
              <div className="text-sm text-gray-500">Made In Bangladesh</div>
              <div className="text-sm bg-gray-200 px-2 py-1 rounded-lg mt-2">
                {category_name}
              </div>
              <div className="text-green-600 font-semibold mt-1">${price}</div>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
            <NavLink to={`/tabledetails/${id}`}>
              <button className="btn btn-error btn-xs rounded-md shadow-md hover:bg-blue-600 transition duration-200">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allequipmentcard;



