import React from "react";
import "./pricing.css";
import { FaBug, FaLongArrowAltRight } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GiTalk } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { RiShakeHandsFill, RiExchangeDollarLine } from "react-icons/ri";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="titleAbout">Pricing</h1>
      <div className="pricingContainer">
        <div className="ourFeatures">
          <div className="iconFeatures">
            <GrTechnology className="ikonFitur" />
          </div>
          <h1 className="TitleFitur">Features</h1>
        </div>
        <div className="pricingCards">
          <div className="pricingCard">
            <div className="cardTitle">
              <div className="iconTitlePri">
                <FaBug className="iconCardPri" />
              </div>
              <h2 className="titleTextPri">Fix Bugs</h2>
            </div>
            <p className="deskCard">
              Have any problem in your codes? Tell me, i will help you fix it.
            </p>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
          <div className="pricingCard">
            <div className="cardTitle">
              <div className="iconTitlePri">
                <RiShakeHandsFill className="iconCardPri" />
              </div>
              <h2 className="titleTextPri">Cooperation</h2>
            </div>
            <p className="deskCard">
              Looking to collaborate? Let’s work together to achieve your goals.
            </p>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
          <div className="pricingCard">
            <div className="cardTitle">
              <div className="iconTitlePri">
                <GiTalk className="iconCardPri" />
              </div>
              <h2 className="titleTextPri">Consultation</h2>
            </div>
            <p className="deskCard">
              Need expert advice? Let’s discuss your project and goals.
            </p>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
          <div className="pricingCard">
            <div className="cardTitle">
              <div className="iconTitlePri">
                <FaCode className="iconCardPri" />
              </div>
              <h2 className="titleTextPri">Code Review</h2>
            </div>
            <p className="deskCard">
              Want your code reviewed? I’ll ensure it’s optimized and
              error-free.
            </p>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
        </div>
        <div className="ourFeatures">
          <div className="iconFeatures">
            <RiExchangeDollarLine className="ikonFitur" />
          </div>
          <h1 className="TitleFitur">Projects Plans</h1>
        </div>
        <div className="plansCards">
          <div className="plansCard">
            <div className="isiCard">
              <h4 className="judulCard">Frontend</h4>
              <h3 className="hargaCard">$100</h3>
              <p className="deskCard">
                For just $100, you’ll receive a modern, fully responsive
                frontend tailored to your brand’s identity. This includes custom
                layouts, interactive elements, and optimized performance across
                all devices. Ideal for businesses looking to make a strong
                online presence with a user-friendly and visually stunning
                website.
              </p>
            </div>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
          <div className="plansCard">
            <div className="isiCard">
              <h4 className="judulCard">Backend</h4>
              <h3 className="hargaCard">$250</h3>
              <p className="deskCard">
                For $250, you get a robust backend solution that includes secure
                database management, efficient API development, and server-side
                logic. This package ensures that your application runs smoothly
                and efficiently, with scalable infrastructure to handle growing
                users demands and complex business logic.
              </p>
            </div>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
          <div className="plansCard">
            <div className="isiCard">
              <h4 className="judulCard">Full Stack</h4>
              <h3 className="hargaCard">$500</h3>
              <p className="deskCard">
                At $500, our Full Stack package covers both frontend and backend
                development. You’ll get a complete, end-to-end solution
                including user-friendly interfaces, seamless backend
                integration, and comprehensive testing. Perfect for businesses
                needing a cohesive, well-rounded web application with high
                performance and reliability.
              </p>
            </div>
            <button className="btnPri">
              Join Now <FaLongArrowAltRight className="butonIkon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
