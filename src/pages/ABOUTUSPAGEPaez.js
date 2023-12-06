import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABOUTUSPAGEPaez.css";
const ABOUTUSPAGEPaez = () => {
  const navigate = useNavigate();

  const onIcroundPlayArrowClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIcroundPlayArrow1Click = useCallback(() => {
    navigate("/1-about-us-page-ursal");
  }, [navigate]);

  const onGETSTARTEDClick = useCallback(() => {
    navigate("/1-landing-page");
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
      <div className="role1">Role</div>
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
      <img className="group-icon1" alt="" src="/undefined1.png" />
      <img className="wikang-wali-logo-11" alt="" src="/undefined2.png" />
      <img className="vector-icon1" alt="" src="/undefined3.png" />
      <img className="about-us-page-paez-child2" alt="" src="/undefined4.png" />
      <div className="icround-play-arrow-parent">
        <button
          className="icround-play-arrow"
          onClick={onIcroundPlayArrowClick}
        >
          <img className="vector-icon2" alt="" src="/undefined8.png" />
        </button>
        <button
          className="icround-play-arrow1"
          onClick={onIcroundPlayArrow1Click}
        >
          <img className="vector-icon3" alt="" src="/undefined8.png" />
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
