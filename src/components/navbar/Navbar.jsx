import React from "react";
import "./navbar.css";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaProjectDiagram,
  FaDollarSign,
} from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <a href="#home" className="icons">
          <FaHome className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">HOME</p>
          </div>
        </a>
        <a href="#about" className="icons">
          <FaUser className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">ABOUT</p>
          </div>
        </a>
        <a href="#resume" className="icons">
          <FaFileAlt className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">RESUME</p>
          </div>
        </a>
        <a href="#projects" className="icons">
          <FaProjectDiagram className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">PROJECTS</p>
          </div>
        </a>
        {/* <a href="#pricing" className="icons">
          <FaDollarSign className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">PRICING</p>
          </div>
        </a> */}
        <a href="#contact" className="icons">
          <IoPhonePortraitOutline className="iconNav" />
          <div className="popUpNotif">
            <p className="popUp">CONTACT</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
