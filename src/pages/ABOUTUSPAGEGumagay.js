import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./ABOUTUSPAGEGumagay.css";
const ABOUTUSPAGEGumagay = () => {
  const navigate = useNavigate();

  const onGETSTARTEDClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTUSClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/1-about-us-page-ursal");
  }, [navigate]);

  return (
    <div className="about-us-page-gumagay">
      <div className="group-div">
        <div className="group-child3" />
        <div className="group-child4" />
      </div>
      <div className="about-us3">ABOUT US</div>
      <div className="dawn-marie-gumagay">Dawn Marie Gumagay</div>
      <div className="role3">Role</div>
      <div className="hobbies3">Hobbies</div>
      <div className="motto3">Motto</div>
      <div className="team-leader-uiux-container">
        <p className="team-leader">{`Team leader, `}</p>
        <p className="team-leader">UI/UX Designer, Developer</p>
      </div>
      <div className="playing-lawn-and-container">
        <p className="team-leader">Playing lawn and table tennis,</p>
        <p className="team-leader">{`painting, cooking, coding, `}</p>
        <p className="team-leader">sleeping, and reading books.</p>
      </div>
      <div className="code-with-precision-container">
        <p className="team-leader">“Code with precision, innovate</p>
        <p className="team-leader">with passion.”</p>
      </div>
      <img
        className="about-us-page-gumagay-child"
        alt=""
        src="/undefined10.png"
      />
      <div className="about-us-page-gumagay-item" />
      <div className="about-us-page-gumagay-inner" />
      <div className="about-us-page-gumagay-child1" />
      <Icon className="group-icon3"  icon="mingcute:message-3-line" color="white" />
      <img className="wikang-wali-logo-13" alt="" src="/undefined2.png" />
      <Icon className="vector-icon7"  icon="bi:person-gear" color="white" />  
      <Icon  className="about-us-page-gumagay-child2"  icon="heroicons:fire-solid" color="white" />
      
      <div className="parent1">
        <div className="div3">|</div>
        <a className="get-started3" onClick={onGETSTARTEDClick}>
          GET STARTED
        </a>
        <a className="contact-us3" onClick={onCONTACTUSClick}>
          CONTACT US
        </a>
      </div>
      <button
        className="icround-play-arrow-container"
        onClick={onGroupButtonClick}
      >
        <Icon className="icround-play-arrow-icon1"  icon="bxs:right-arrow" color="#2C5F7C" />
      </button>
    </div>
  );
};

export default ABOUTUSPAGEGumagay;
