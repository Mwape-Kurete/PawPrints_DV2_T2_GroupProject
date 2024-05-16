import React from "react";
import "./Home.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import backgroundImage from "../../assets/images/Cover-image.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <HeroImage />
    </div>
  );
};

export default Home;
