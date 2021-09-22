import React from "react";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
