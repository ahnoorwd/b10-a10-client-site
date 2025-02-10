import React from 'react';
import { FaMedal, FaDumbbell, FaRunning } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Category = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Champions’ Corner */}
      

      <Link to='/fitnessandfun'>
      <div className="bg-gradient-to-r from-blue-500 to-green-400 p-6 rounded-xl shadow-lg">
        <FaMedal className="text-4xl text-white mb-4" />
        <h3 className="text-white text-2xl font-bold">Champions’ Corner</h3>
        <p className="text-white mt-2">
          A place for top athletes to showcase their achievements and inspire
          others.
        </p>
      </div>
      </Link>

      {/* Fitness & Fun */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-6 rounded-xl shadow-lg">
        <FaDumbbell className="text-4xl text-white mb-4" />
        <h3 className="text-white text-2xl font-bold">Fitness & Fun</h3>
        <p className="text-white mt-2">
          Engage in exciting workouts and fun activities for a healthier life.
        </p>
      </div>

      {/* Athlete's Arena */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-6 rounded-xl shadow-lg">
        <FaRunning className="text-4xl text-white mb-4" />
        <h3 className="text-white text-2xl font-bold">Athlete's Arena</h3>
        <p className="text-white mt-2">
          A dynamic space where athletes train, compete, and push their limits.
        </p>
      </div>
    </div>
    

    );
};

export default Category;