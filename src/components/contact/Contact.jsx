import React from "react";
import "./contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { BsCalendarMonthFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  const [hasil, setHasil] = React.useState("");

  const diSubmit = async (e) => {
    e.preventDefault();
    setHasil("Sending....");

    const formData = new FormData(e.target);

    formData.append("access_key", "c4aad0f0-1eee-4da5-9421-0c5972a0cd07");

    const respon = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await respon.json();

    if (data.success) {
      setHasil("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setHasil(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="titleAbout">Contact Me</h1>
      <div className="contactContainer">
        <h1 className="titleAbout getCuk">Get in Touch</h1>
        <div className="mapsCon">
          <iframe
            className="mapsCuy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79661812767!2d110.33466223677328!3d-7.0247226075141525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sKota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1723170099320!5m2!1sid!2sid"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contactMe">
          <div className="kiri">
            <h3 className="kirimText">
              Send me a message <MdMarkEmailRead className="judulIkon" />
            </h3>
            <p className="kalimatSingkat">
              Feel free to reach out to me with any questions or inquiries. I’m
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let’s connect and create
              something amazing together.
            </p>
            <ul>
              <li className="listRinci">
                <IoIosMailOpen className="iconRinci" />
                rendyharvest@gmail.com
              </li>
              <li className="listRinci">
                <BsCalendarMonthFill className="iconRinci" />
                Aug, 10 2004
              </li>
              <li className="listRinci">
                <ImLocation2 className="iconRinci" />
                Semarang, Indonesia
              </li>
            </ul>
          </div>
          <form className="kanan" onSubmit={diSubmit}>
            <label>Your Name</label>
            <input
              className="inputAnjing"
              type="text"
              placeholder="Enter Your Name"
              required
              name="name"
            />
            <label>Your Email</label>
            <input
            name="email"
              className="inputAnjing"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <label>Your Message</label>
            <textarea
              className="inputAnjing textArea"
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button type="submit" className="btnPri">
              Submit <FaLongArrowAltRight className="butonIkon" />
            </button>
            <span>{hasil}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
