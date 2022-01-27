import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Destination from "../Destination/Destination";
import Explore from "../Explore/Explore";
import TourType from "../Explore/TourType/TourType";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Feature />
      <Explore />
      <TourType />
      <Blogs />
      <Destination />
    </div>
  );
};

export default Home;
