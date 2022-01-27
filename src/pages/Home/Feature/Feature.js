import React from "react";
import { FaFighterJet } from "react-icons/fa";

import "./Featue.css";

const Feature = () => {
  return (
    <div className=" md:position-relative bg-teal-500 ">
      <div className="feature_bg md:rounded-lg md:w-1/4 md:my-5 md:right-0 md:position-fixed">
        <h3 className="text-center md:py-3 text-2xl text-slate-100">
          Make A Short Tour
        </h3>
        <ul className="text-center space-y-3 text-xl text-slate-100 md:w-3/4 mx-auto md:py-3">
         <li><i className="fas fa-fighter-jet mx-2"></i>Pick a Location</li>
         <li><i className="fas fa-fighter-jet mx-2"></i>Take A Decision</li>
         <li><i className="fas fa-fighter-jet mx-2"></i>Quick Prepare</li>
         <li><i className="fas fa-fighter-jet mx-2"></i>Backpack & Ready</li>
         <li><i className="fas fa-fighter-jet mx-2"></i>Go</li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
