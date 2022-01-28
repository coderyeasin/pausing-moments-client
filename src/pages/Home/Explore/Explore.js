import React from "react";
import place from "../../../images/map.jpg";

const Explore = () => {
  return (
    <div className="md:flex w-100 justify-evenly items-center">
      <div className="md:w-1/4 space-y-3">
        <span className="text-gray-300 text-sm">LET THE JOURNEY BEGIN</span>
        <h2 className="text-5xl font-bold">Explore Now</h2>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          temporibus ullam laboriosam repellendus modi, architecto distinctio,
          dignissimos quae saepe, nihil neque! Ipsa eveniet eum voluptatem
          distinctio architecto id fugit ratione.
        </p>
        <button className="rounded-lg cursor-pointer bg-transparent outline-none border-b-2 py-2 px-4 bg-teal-500 text-xl text-white transform duration-500 hover:scale-95">
          Guide Plan
        </button>
      </div>
      <div className="explore_img">
        <img src={place} alt="map" />
      </div>
    </div>
  );
};

export default Explore;
