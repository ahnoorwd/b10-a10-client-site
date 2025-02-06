import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewurAdded = () => {
    const veiwequipmentlist = useLoaderData();
    const {_id,coffeename,Chefname,Suppliername,tasteprofile,category,Details,PhotoURL} =veiwequipmentlist
    return (
        <div className="hero bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={PhotoURL}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{coffeename}</h1>
            <p>{Chefname}</p>
            <p>{Suppliername}</p>
            <p>{tasteprofile}</p>
            <p>{category}</p>
            <p className="py-6">
              {Details}  
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ViewurAdded;