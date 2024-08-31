import React from "react";
import background from "../../assets/background.jpg";
import "./home.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="bgGelap"></div>
      <div className="homeContainet">
        <h1 className="titleHome">Welcome to My Personal Website</h1>
        <p className="deskHome">
          I don't know what to say, I just want to thank you because you want to
          visit my personal website, and maybe you are here because there is
          something you want to say
        </p>
        <div className="buttonContainerHome">
          <button className="buttonHome">Explore More</button>
          <div className="iconsHm">
            <FaArrowRightLong className="iconCuy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
