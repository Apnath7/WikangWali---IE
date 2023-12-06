import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LANDINGPAGE.css";
const LANDINGPAGE = () => {
  const navigate = useNavigate();

  const onGETSTARTEDBUTTONClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  const onSIGNINClick = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const onCONTACTUSClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  const onABOUTUSClick = useCallback(() => {
    navigate("/1-about-us-page-gumagay");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="contentcontainer">
        <div className="contentcontainer-child" />
        <div className="contentcontainer-item" />
        <div className="image-34" />
        <div className="content">
          <div className="discover-wikangwali-your">
            Discover WikangWali: Your Fun Tagalog Learning Sidekick!
          </div>
          <div className="designed-to-help">
            Designed to help kids master the beauty of the Filipino language,
            WikangWali is the perfect companion for parents who want their
            children to develop a strong foundation in Tagalog.
          </div>
          <img className="wikang-wali-logo-14" alt="" src="/undefined23.png" />
          <button
            className="get-started-button"
            onClick={onGETSTARTEDBUTTONClick}
          >
            <div className="get-started4">GET STARTED</div>
          </button>
          <img
            className="microsoftteams-image-3-icon"
            alt=""
            src="/undefined24.png"
          />
        </div>
        <div className="links">
          <a className="sign-in5" onClick={onSIGNINClick}>
            SIGN IN
          </a>
          <div className="div4">|</div>
          <a className="contact-us4" onClick={onCONTACTUSClick}>
            CONTACT US
          </a>
          <div className="div4">|</div>
          <a className="about-us4" onClick={onABOUTUSClick}>
            ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default LANDINGPAGE;
