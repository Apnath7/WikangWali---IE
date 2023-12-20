import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./ABOUTUSPAGEPaez.css";
const ABOUTUSPAGEPaez = () => {
  const navigate = useNavigate();

  const onIcroundPlayArrowClick = useCallback(() => {
    navigate("/1-about-us-page-salvoro");
  }, [navigate]);

  const onIcroundPlayArrow1Click = useCallback(() => {
    navigate("/1-about-us-page-ursal");
  }, [navigate]);

  const onGETSTARTEDClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTUSClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  return (
    <div className="about-us-page-paez">
      <div className="rectangle-group">
        <div className="group-inner" />
        <div className="rectangle-div" />
      </div>
      <div className="about-us1">ABOUT US</div>
      <div className="marie-antoinette-paez">Marie Antoinette Paez</div>
      <div className="role">Role</div>
      <div className="hobbies1">Hobbies</div>
      <div className="motto1">Motto</div>
      <div className="uiux-designer-developer1">UI/UX Designer, Developer</div>
      <div className="coding-drawing-graphic-container">
        <p className="coding-drawing-graphic">
          Coding, drawing, graphic designing,
        </p>
        <p className="coding-drawing-graphic">
          video gaming, artistic merchandising.
        </p>
      </div>
      <div className="code-create-and">"Code, Create, and Coffee"</div>
      <img className="about-us-page-paez-child" alt="" src="/undefined7.png" />
      <div className="about-us-page-paez-item" />
      <div className="about-us-page-paez-inner" />
      <div className="about-us-page-paez-child1" />
      <Icon className="group-icon1" icon="mingcute:message-3-line" color="white" />
      <img className="wikang-wali-logo-11" alt="" src="/undefined2.png" />
      <Icon className="vector-icon1" icon="bi:person-gear" color="white"/>
      <Icon className="about-us-page-paez-child2" icon="heroicons:fire-solid" color="white"/>
      <div className="icround-play-arrow-parent">
        <button
          className="icround-play-arrow"
          onClick={onIcroundPlayArrowClick}
        >
          <Icon className="vector-icon2" icon="bxs:right-arrow" color="#2C5F7C"  />
        </button>
        <button
          className="icround-play-arrow1"
          onClick={onIcroundPlayArrow1Click}
        >
          <Icon className="vector-icon3" icon="bxs:left-arrow" color="#2c5f7c" rotate={2}  />
        </button>
      </div>
      <div className="group">
        <div className="div1">|</div>
        <a className="get-started1" onClick={onGETSTARTEDClick}>
          GET STARTED
        </a>
        <a className="contact-us1" onClick={onCONTACTUSClick}>
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default ABOUTUSPAGEPaez;
