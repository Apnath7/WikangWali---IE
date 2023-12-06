import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABOUTUSPAGEUrsal.css";
const ABOUTUSPAGEUrsal = () => {
  const navigate = useNavigate();

  const onIcroundPlayArrowClick = useCallback(() => {
    navigate("/1-about-us-page-paez");
  }, [navigate]);

  const onIcroundPlayArrow1Click = useCallback(() => {
    navigate("/1-about-us-page-gumagay");
  }, [navigate]);

  const onGETSTARTEDClick = useCallback(() => {
    navigate("/1-landing-page");
  }, [navigate]);

  const onCONTACTUSClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  return (
    <div className="about-us-page-ursal">
      <div className="rectangle-container">
        <div className="group-child1" />
        <div className="group-child2" />
      </div>
      <div className="about-us2">ABOUT US</div>
      <div className="gelu-marie-ursal">Gelu Marie Ursal</div>
      <div className="role2">Role</div>
      <div className="hobbies2">Hobbies</div>
      <div className="motto2">Motto</div>
      <div className="uiux-designer-developer2">UI/UX Designer, Developer</div>
      <div className="badminton-drawing-coding-container">
        <p className="badminton-drawing-coding">Badminton, drawing, coding,</p>
        <p className="badminton-drawing-coding">cooking, watching movie,</p>
        <p className="badminton-drawing-coding">jogging.</p>
      </div>
      <div className="whilealive-container">
        <p className="badminton-drawing-coding">{`while(alive) {               eat(); `}</p>
        <p className="badminton-drawing-coding">{`             sleep(); `}</p>
        <p className="badminton-drawing-coding">{`             code(): `}</p>
        <p className="badminton-drawing-coding">{`}`}</p>
      </div>
      <img className="about-us-page-ursal-child" alt="" src="/undefined9.png" />
      <div className="about-us-page-ursal-item" />
      <div className="about-us-page-ursal-inner" />
      <div className="about-us-page-ursal-child1" />
      <img className="group-icon2" alt="" src="/undefined1.png" />
      <img className="wikang-wali-logo-12" alt="" src="/undefined2.png" />
      <img className="vector-icon4" alt="" src="/undefined3.png" />
      <img
        className="about-us-page-ursal-child2"
        alt=""
        src="/undefined4.png"
      />
      <div className="icround-play-arrow-group">
        <button
          className="icround-play-arrow2"
          onClick={onIcroundPlayArrowClick}
        >
          <img className="vector-icon5" alt="" src="/undefined8.png" />
        </button>
        <button
          className="icround-play-arrow3"
          onClick={onIcroundPlayArrow1Click}
        >
          <img className="vector-icon6" alt="" src="/undefined8.png" />
        </button>
      </div>
      <div className="container">
        <div className="div2">|</div>
        <a className="get-started2" onClick={onGETSTARTEDClick}>
          GET STARTED
        </a>
        <a className="contact-us2" onClick={onCONTACTUSClick}>
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default ABOUTUSPAGEUrsal;
