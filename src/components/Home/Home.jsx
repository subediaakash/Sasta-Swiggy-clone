import React from "react";
import Woym from "./Woym";
import TopRestaurants from "./TopRestaurants";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-[#e8ebf0]">
      <Woym />
      <TopRestaurants />
      <Footer />
    </div>
  );
};

export default Home;
