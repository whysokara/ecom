import React from "react";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
