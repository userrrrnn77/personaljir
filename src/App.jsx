import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projek from "./components/projek/Projek";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projek />
      {/* <Pricing /> */}
      <Contact />
      <div className="hrCuy">
        <div className="garisHr"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
