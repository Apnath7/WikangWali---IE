import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./DASHBOARDHOME.css";
const DASHBOARDHOME = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onCoursesClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "16- DASHBOARD -ParentMode Login" to the project
    navigate("/dashboard-parent-mode");
  }, []);

  const onLessonArrowClick = useCallback(() => {
    navigate("/8-dashboard-lessons");
  }, [navigate]);

  const onProgressArrowClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onAchievementsArrowClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  

  return (
    <>
      <div className="dashboard-home">
        <div className="rectangle-parent29">
          <div className="group-child84" />
          <div className="courses-parent">
            <button className="courses6" onClick={onCoursesClick}>
              <div className="vector-parent27">
                <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
                <div className="courses7">Courses</div>
              </div>
            </button>
            <button className="progress12" onClick={onProgressClick}>
              <div className="vector-parent28">
                <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress13">Progress</div>
              </div>
            </button>
            <button className="settingsButton" onClick={onSettingsClick}>
              <div className="group-parent24">
                <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings13">Settings</div>
              </div>
            </button>
            <div className="home-parent4" onClick={onGroupContainerClick}>
              <div className="home12">Home</div>
              <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
            </div>
            <div className="parent-mode12" />
          </div>
        </div>
        <button className="logout6" onClick={openLogoutPopup}>
          <div className="group-parent25">
            <div className="group-parent26">
              <div className="rectangle-sign-in-button-wrapper4">
                <div className="rectangle-sign-in-button6" />
              </div>
              <div className="log-out7">Log Out</div>
            </div>
            <Icon className="group-icon24" alt="" icon="carbon:logout" color="white" />
          </div>
        </button>
        <div className="group-parent27">
          <div className="vector-parent29">
            <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
            <div className="parent-mode13">Parent Mode</div>
          </div>
          <button className="rectangle-parent30" onClick={onGroupButtonClick}>
            <div className="group-child85" />
            <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
          </button>
        </div>
        <div className="dashboard-home-child" />
        <div className="dashboard-home-item" />
        <div className="dashboard-home-inner" />
        <div className="dashboard-home-child1" />
        <button className="lesson-arrow" onClick={onLessonArrowClick}>
          <Icon className="vector-icon62" alt="" icon="mingcute:arrow-right-fill" color="#0745A3" />
        </button>
        <button className="progress-arrow" onClick={onProgressArrowClick}>
          <Icon className="vector-icon62" alt="" icon="mingcute:arrow-right-fill" color="#0745A3" />
        </button>
        <button
          className="achievements-arrow"
          onClick={onAchievementsArrowClick}
        >
          <Icon className="vector-icon62" alt="" icon="mingcute:arrow-right-fill" color="#0745A3" />
        </button>
        <div className="hi-gelu">Hi Gelu!</div>
        <img
          className="microsoftteams-image-1-1"
          alt=""
          src="/undefined86.png"
        />
        <div className="your-current-lesson">Your current lesson</div>
        <div className="recent-progress">Recent progress</div>
        <div className="your-achievements">Your Achievements</div>
        <div className="aralin-1-nouns">Aralin 1: Nouns</div>
        <div className="stars">
          <span className="stars-txt">
            <p className="p1">10</p>
            <p className="stars1">Stars</p>
          </span>
        </div>
        <div className="diamonds">
          <span className="stars-txt">
            <p className="p1">10</p>
            <p className="stars1">Diamonds</p>
          </span>
        </div>
        <div className="div10">70%</div>
        <div className="dashboard-home-child2" />
        <div className="dashboard-home-child3" />
        <img className="line-icon" alt="" src="/undefined87.png" />
        <img className="mdimedal-outline-icon" alt="" src="/blueline.png" />
        <div className="dashboard-home-child4" />
        <div className="dashboard-home-child5" />
        <button className="continue-wrapper" onClick={onFrameButtonClick}>
          <div className="continue6">Continue</div>
        </button>
        <div className="kurso-1-pambungad-container1">
          <p className="p1">Kurso 1:</p>
          <p className="p1">Pambungad sa Wikang Filipino</p>
        </div>
        <div className="aralin-1-pagbati-container7">
          <p className="p1">Aralin 1:</p>
          <p className="pagbati-at-karaniwang4">
            Pagbati at Karaniwang Pananalita
          </p>
        </div>
        <div className="dashboard-home-child6" />
        <img className="dashboard-home-child7" alt="" src="/undefined88.png" />
        <img className="image-38-icon" alt="" src="/undefined89.png" />
        <img
          className="microsoftteams-image-5-icon"
          alt=""
          src="/undefined90.png"
        />
        <img
          className="microsoftteams-image-1-62"
          alt=""
          src="/undefined91.png"
        />
        <div className="statsContainer">
          <div className="group-child87" />
          <b className="gelu-ursal7">Gelu Ursal</b>
          <img
            className="microsoftteams-image-1-75"
            alt=""
            src="/undefined47.png"
          />
          <Icon className="bellIcon" alt="" icon="ph:bell-fill" color="black" />
          <Icon className="arrowdown" alt="" icon="bxs:down-arrow" />
        </div>
      </div>
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <LogoutPopup onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DASHBOARDHOME;
