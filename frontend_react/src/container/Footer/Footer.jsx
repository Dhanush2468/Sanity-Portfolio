import React, { useState } from "react";

import { images } from "../../constants";
import { AppWarp, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    client.create(contact).then((data) => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        Take a coffee & <span>chat</span> with <span>me</span>
      </h2>

      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:dhanushgollavilli02@gmail.com" className="p-text">
            dhanushgollavilli02@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 7396526527" className="p-text">
            +91 7396526527
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className=" portfolio-button"
            onClick={handleSubmit}
          >
            {loading ? "Sending Message" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWarp(
  MotionWrap(Footer, "app__contact"),
  "contact",
  "app__whitebg"
);