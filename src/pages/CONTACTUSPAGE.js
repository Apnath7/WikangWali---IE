import { useState, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./CONTACTUSPAGE.css";
const CONTACTUSPAGE = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onGETSTARTEDTextClick = useCallback(() => {
    navigate("/1-landing-page");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="contact-us-page">
        <div className="rectangle-parent5">
          <div className="group-child12" />
          <div className="group-child13" />
        </div>
        <div className="contact-us5">CONTACT US</div>
        <div className="lets-talk">Let’s talk</div>
        <div className="were-here-to">We’re here to help you</div>
        <div className="feel-free-to">Feel free to drop us a line below</div>
        <a className="get-started-wrapper">
          <div className="get-started5" onClick={onGETSTARTEDTextClick}>
            GET STARTED
          </div>
        </a>
        <img className="contact-us-page-child" alt="" src="/undefined30.png" />
        <img className="contact-us-page-item" alt="" src="/undefined30.png" />
        <img className="contact-us-page-inner" alt="" src="/undefined30.png" />
        <button className="group-button" onClick={openFrame}>
          <div className="submit-wrapper">
            <div className="submit">SUBMIT</div>
          </div>
        </button>
        <input className="frame-input" type="text" />
        <input className="email3" type="text" />
        <input className="password3" type="text" />
        <textarea className="message" />
        <img className="contact-us-page-child1" alt="" src="/undefined31.png" />
        <img className="contact-us-page-child2" alt="" src="/undefined31.png" />
        <img className="contact-us-page-child3" alt="" src="/undefined31.png" />
        <img className="vector-icon11" alt="" src="/undefined32.png" />
        <Icon className="vector-icon12"  icon="el:phone-alt" color="#3bb8fe" /> 
        <img className="contact-us-page-child4"  Icon="" />
        <div className="phone">PHONE</div>
        <div className="email4">EMAIL</div>
        <div className="location">LOCATION</div>
        <div className="div7">+63 992 123 4567</div>
        <div className="wikangwaligmailcom">wikangwali@gmail.com</div>
        <div className="cebu-city">Cebu City</div>
        <img className="wikang-wali-logo-2" alt="" src="/undefined2.png" />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default CONTACTUSPAGE;
