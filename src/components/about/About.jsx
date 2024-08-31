import React from "react";
import "./about.css";
import fotoNjir from "../../assets/njir.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <h1 className="titleAbout">About Me</h1>
        <div className="aboutMe">
          <img className="fotoAbout" src={fotoNjir} alt="fotoSaya"  />
          <div className="aboutTexts">
            <h1 className="namaSaya">Rendy Agus S</h1>
            <p className="tentangSaya">
              I am a graphic design graduate in 2022 at SMKN 11 Semarang, after
              graduating I went straight to work. I was born and raised in the
              city of Semarang. I am currently 20 years old. I really like
              learning new things and I am just learning to create websites and
              learning to develop websites. I have 2 years of work experience in
              various fields. I started studying design in the 1st grade of
              junior high school, and currently I am still learning to create
              websites, and I will also learn other programming languages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
