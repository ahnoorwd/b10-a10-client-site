import React from "react";
import { useLoaderData } from "react-router-dom";
import Youraddlist from "../YourAddlist/Youraddlist";
const Myequipment = () => {
  const addingequipments = useLoaderData();
  return (
    <div>
      <h1>Total added equipment form you {addingequipments.length} </h1>

       
   <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
   {
       addingequipments.map(equipment=><Youraddlist key={equipment._id}
       equipment={equipment}
       ></Youraddlist>) 
    }

   </div>

    </div>
  );
};

export default Myequipment;
