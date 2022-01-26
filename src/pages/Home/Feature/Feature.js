import React from "react";
import "./Featue.css";

const Feature = () => {
  return (
    <div className=" md:position-relative ">
      <div className="feature_bg md:rounded-lg md:w-1/4 md:my-5 md:right-0 md:position-fixed">
        <h3 className="text-center md:py-3 text-2xl">
          Latest Blogs - article show with slide(carousel) || make a Quick Tour
          Plan
        </h3>
        <p className="text-center text-sm md:w-3/4 mx-auto md:py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          maxime corrupti aperiam laborum! Deleniti nam cumque consectetur ut
          quis veritatis et praesentium. Reiciendis dolorem id dolore quisquam
          ad error? Odio.
        </p>
      </div>
    </div>
  );
};

export default Feature;
