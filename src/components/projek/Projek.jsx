import React from "react";
import "./projek.css";
import resnBot from "../../assets/uuyyyy.jpg";
import portFOlio from "../../assets/rrti.jpg";
import netflixClone from "../../assets/aaaaa.jpg";
import ytClone from "../../assets/podocuy.jpg";

const Projek = () => {
  return (
    <div className="projek" id="projects">
      <h1 className="titleAbout">Projects</h1>
      <div className="projekContainer">
        <div className="porjectCards">
          <div className="projekCard">
            <img className="projekImage" src={portFOlio} alt="" />
            <h1 className="judulProjek">Personal Web</h1>
            <p className="deskripsiProjek">
              A personal portfolio site to showcase professional work, skills
              and experience online.
            </p>
            <a
              href="https://rusdyrush.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projekButon">Visit</button>
            </a>
          </div>
          <div className="projekCard">
            <img className="projekImage" src={resnBot} alt="" />
            <h1 className="judulProjek">Gemini Clone</h1>
            <p className="deskripsiProjek">
              An application that completely imitates the interface and features
              of the Gemini trading platform.
            </p>
            <a
              href="https://rensbotai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projekButon">Visit</button>
            </a>
          </div>
          <div className="projekCard">
            <img className="projekImage" src={netflixClone} alt="" />
            <h1 className="judulProjek">Netflix CLone</h1>
            <p className="deskripsiProjek">
              A video streaming platform that resembles Netflix, with
              subscription features and movie collections.
            </p>
            <a
              href="https://netfilxbjir.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projekButon">Visit</button>
            </a>
          </div>
          <div className="projekCard">
            <img className="projekImage" src={ytClone} alt="" />
            <h1 className="judulProjek">YouTube Clone</h1>
            <p className="deskripsiProjek">
              Video sharing platforms such as YouTube, are equipped with search
              and content recommendation features.
            </p>
            <a
              href="https://renstube.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projekButon">Visit</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projek;
