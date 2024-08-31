import React from "react";
import "./resume.css";
import { FaGraduationCap } from "react-icons/fa6";
import { GiBabyFace } from "react-icons/gi";
import { FaChild, FaUserTie } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <h1 className="titleAbout">Resume</h1>
      <div className="resumeContainer">
        <div className="resumeTitle">
          <div className="gradIcon">
            <FaGraduationCap className="iconGrad" />
          </div>
          <h3 className="judulGrad">Graduation</h3>
        </div>
        <div className="resumeCards">
          <div className="resumeCard">
            <div className="cardTitle">
              <div className="iconCard">
                <GiBabyFace className="cardIcon" />
              </div>
              <h3 className="namaSekolah">SDN Rowosari 01</h3>
            </div>
            <p className="deskripsi">
              I started attending elementary school in 2010 and graduated in
              2016, and I didn't have any achievements at that time
            </p>
          </div>
          <div className="resumeCard">
            <div className="cardTitle">
              <div className="iconCard">
                <FaChild className="cardIcon" />
              </div>
              <h3 className="namaSekolah">SMPN 33 Semarang</h3>
            </div>
            <p className="deskripsi">
              I started junior high school in 2016 and graduated in 2019, at the
              start of school I was already interested in studying design
            </p>
          </div>
          <div className="resumeCard">
            <div className="cardTitle">
              <div className="iconCard">
                <GiSchoolBag className="cardIcon" />
              </div>
              <h3 className="namaSekolah">SMKN 11 Semarang</h3>
            </div>
            <p className="deskripsi">
              I entered a vocational high school in 2019 and graduated in 2022,
              I majored in graphic design, at that time Covid-19 happened
            </p>
          </div>
        </div>
        <div className="resumeTitle marginTop">
          <div className="gradIcon">
            <FaUserTie className="iconGrad" />
          </div>
          <h3 className="judulGrad">Experience</h3>
        </div>
        <div className="expContainer">
          <div className="expItem">
            <div className="garisDanBulat">
              <div className="garis"></div>
              <div className="bulat"></div>
            </div>
            <div className="textsExp">
              <h1 className="titleExp">
                CV. Gajah Mandiri <span className="spanExp">2022 - 2022</span>
              </h1>
              <p className="jabatan">Design Graphic & Quality Control</p>
              <p className="deskPertama">
                As Production Quality Control, I am responsible for ensuring
                each product meets strict quality standards. I carry out
                thorough inspections at every stage of production, from material
                selection to the final product, to ensure that all technical and
                quality specifications are met. With a thorough and analytical
                approach, I am committed to identifying and fixing problems
                before the product reaches the consumer.
              </p>
              <p className="DeskDua">
                On the other hand, as a Graphic Designer, I focus on creating
                visual designs that are attractive and match the client's
                vision. I combine creativity and technical skills to produce
                aesthetic and functional designs, paying attention to the
                details that are important to ensure a stunning end result. With
                experience in both fields, I am able to unite quality and design
                to create superior and satisfying products.
              </p>
            </div>
          </div>
          <div className="expItem">
            <div className="garisDanBulat">
              <div className="garis"></div>
              <div className="bulat"></div>
            </div>
            <div className="textsExp">
              <h1 className="titleExp">
                CV. Gedhe Margo Gandum{" "}
                <span className="spanExp">2022 - 2023</span>
              </h1>
              <p className="jabatan">Baker</p>
              <p className="deskPertama">
                As a baker, I have skills in creating various types of bread,
                cakes and pastries that are not only delicious but also visually
                appealing. With experience in dough making and decorating
                techniques, I ensure each product meets high standards of
                quality and consistency of taste. I utilize my in-depth
                knowledge of ingredients and baking processes to create products
                that delight the taste buds and satisfy customers.
              </p>
              <p className="DeskDua">
                Additionally, I am committed to maintaining cleanliness and
                efficiency in the kitchen, and following recipes closely to
                achieve the desired results. I also enjoy experimenting with new
                and innovative recipes to suit a variety of tastes and requests.
                With dedication and passion in every stage of creation, I strive
                to provide a satisfying and memorable culinary experience for
                every customer.
              </p>
            </div>
          </div>
          <div className="expItem">
            <div className="garisDanBulat">
              <div className="garis"></div>
              <div className="bulat"></div>
            </div>
            <div className="textsExp">
              <h1 className="titleExp">
                CV. Indoprinting <span className="spanExp">2023 - 2024</span>
              </h1>
              <p className="jabatan">Design Graphic & Customer Service</p>
              <p className="deskPertama">
                As a Graphic Designer, I combine creativity and technical skills
                to create effective and engaging visual designs. From designing
                marketing materials to developing brand identities, I focus on
                creating design solutions that not only meet clients' needs but
                also increase the visibility and appeal of products or services.
                With attention to detail and the latest design trends, I ensure
                that each project produces results that are high quality and
                consistent with the client's vision.
              </p>
              <p className="DeskDua">
                On the other hand, my experience in customer service allows me
                to interact directly with clients, understand their needs, and
                provide satisfactory solutions. I prioritize clear communication
                and empathy to build strong relationships and ensure customer
                satisfaction. With skills in graphic design and customer
                service, I can offer a holistic experience, from visual concept
                to after-sales support, that strengthens client relationships
                and improves business results.
              </p>
            </div>
          </div>
          <div className="expItem">
            <div className="garisDanBulat">
              <div className="garis pendek"></div>
              <div className="bulat"></div>
            </div>
            <div className="textsExp">
              <h1 className="titleExp">
                PT. Suharda Tiga Putra{" "}
                <span className="spanExp">2024 - Present</span>
              </h1>
              <p className="jabatan">Cleaning Service</p>
              <p className="deskPertama">
                As a Cleaning Service worker, I have the skills to maintain a
                clean and tidy environment to a high standard. I am responsible
                for conducting thorough cleaning of various areas, including
                office spaces, public facilities, and private areas. With
                attention to detail and the use of proper cleaning techniques
                and products, I ensure every space is free of dirt and dust,
                creating a clean and healthy environment.
              </p>
              <p className="DeskDua marginBottom">
                Additionally, I am committed to working with efficiency and
                reliability, while following strict safety and hygiene
                procedures. I have the ability to customize cleaning methods to
                suit clients' specific needs and preferences, and am prepared to
                meet any challenges that may arise. With dedication and
                professionalism in every task, I strive to provide satisfactory
                cleaning services and ensure client comfort and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
