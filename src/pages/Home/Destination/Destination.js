import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="mt-5">
      <div className="text-center space-y-3 w-6/12 mx-auto mt-20 ">
        <h3 className="text-3xl font-bold">Popular Destinations</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          soluta quisquam earum error expedita doloremque aliquam consectetur
          vel dicta reprehenderit.
        </p>
      </div>

      <div className="md:flex justify-center items-center gap-3 my-12">
        <div className="asia md:w-1/4 h-100 transform hover:scale-105 duration-500">
          <h3 className="text-5xl text-right bg-emerald-700 p-1 w-40 float-right transform hover:scale-105 duration-500 text-gray-300 cursor-pointer">
            Asia
          </h3>
        </div>
        <div className="africa md:w-1/4 h-100 transform hover:scale-105 duration-500">
          <h3 className="text-5xl text-right bg-emerald-700 p-1 w-40 float-right transform hover:scale-105 duration-500 text-gray-300 cursor-pointer">
            Africa
          </h3>
        </div>
        <div className="europe md:w-1/4 h-100 transform hover:scale-105 duration-500">
          <h3 className="text-5xl text-right bg-emerald-700 p-1 w-40 float-right transform hover:scale-105 duration-500 text-gray-300 cursor-pointer">
            Europe
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Destination;
