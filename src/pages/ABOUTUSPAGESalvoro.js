import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABOUTUSPAGESalvoro.css";
const ABOUTUSPAGESalvoro = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/1-about-us-page-paez");
  }, [navigate]);

  const onGETSTARTEDClick = useCallback(() => {
    navigate("/1-landing-page");
  }, [navigate]);

  const onCONTACTUSClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  return (
    <div className="about-us-page-salvoro">
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="group-item" />
      </div>
      <div className="about-us">ABOUT US</div>
      <div className="nathaniel-salvoro">Nathaniel Salvoro</div>
      <div className="role">Role</div>
      <div className="hobbies">Hobbies</div>
      <div className="motto">Motto</div>
      <div className="uiux-designer-developer">UI/UX Designer, Developer</div>
      <div className="watching-movies-playing-container">
        <p className="watching-movies-playing">
          Watching movies, playing guitar
        </p>
        <p className="watching-movies-playing">coding, video games</p>
      </div>
      <div className="program-with-passion-container">
        <p className="watching-movies-playing">{`"Program with passion, debug with `}</p>
        <p className="watching-movies-playing">
          determination, and always let your
        </p>
        <p className="watching-movies-playing">
          code tell a compelling story."
        </p>
      </div>
      <img
        className="about-us-page-salvoro-child"
        alt=""
        src="/undefined.png"
      />
      <div className="about-us-page-salvoro-item" />
      <div className="about-us-page-salvoro-inner" />
      <div className="ellipse-div" />
      <img className="group-icon" alt="" src="/undefined1.png" />
      <img className="wikang-wali-logo-1" alt="" src="/undefined2.png" />
      <img className="vector-icon" alt="" src="/undefined3.png" />
      <img
        className="about-us-page-salvoro-child1"
        alt=""
        src="/undefined4.png"
      />
      <img
        className="about-us-page-salvoro-child2"
        alt=""
        src="/undefined5.png"
      />
      <button
        className="icround-play-arrow-wrapper"
        onClick={onGroupButtonClick}
      >
        <img className="icround-play-arrow-icon" alt="" src="/undefined6.png" />
      </button>
      <div className="parent">
        <div className="div">|</div>
        <a className="get-started" onClick={onGETSTARTEDClick}>
          GET STARTED
        </a>
        <a className="contact-us" onClick={onCONTACTUSClick}>
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default ABOUTUSPAGESalvoro;
