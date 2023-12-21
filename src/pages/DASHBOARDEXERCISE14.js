import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDEXERCISE14.css";
import { Icon } from '@iconify/react';

const DASHBOARDEXERCISE14 = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  

  const onGroupContainerClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "16- DASHBOARD -ParentMode Login" to the project
    navigate("/dashboard-parent-mode");
  }, [navigate])

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/11-dashboard-exercise-13");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate("/8-dashboard-lessons");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className="dashboard-exercise-14">
        
      
        <div className="rectangle-parent10">
        <div className="group-child56_EX1" />
          <div className="group-parent4">
          <div className="vector-parent4" onClick={onGroupContainerClick}>
              <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses2">Courses</div>
            </div>
            <button className="progress4" onClick={onProgressClick}>
              <div className="vector-parent5">
                <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress5">Progress</div>
              </div>
            </button>
            <button className="settings4" onClick={onSettingsClick}>
              <div className="group-parent9">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings5">Settings</div>
              </div>
            </button>
            <div className="parent-mode4">
              <div className="vector-parent6">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode5">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent14"
                onClick={onGroupButtonClick}
              >
                <div className="group-child33" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home4" onClick={onHomeClick}>
              <div className="home-container">
                <div className="home5">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled1" />
        <img
          className="microsoftteams-image-1-21"
          alt=""
          src="/undefined44.png"
        />
        <div className="dashboard-exercise-14-child" />
        <div className="rectangle-parent12">
          <div className="group-child26" />
          <div className="group-child27" />
          <div className="group-child28" />
          <div className="group-child29" alt="" src="/undefined45.png" />
          <b className="gelu-ursal1">Gelu Marie Ursal</b>
          <p className="student-ursal1">student</p>
          
          <Icon icon="carbon:course" color="white" className="vector-icon26" alt="" src="/undefined46.png" />
          
          
          <div className="group-child30" alt="" src="/undefined50.png" />
          <div className="group-child31" alt="" src="/undefined51.png" />
          <button className="return-arrow1" onClick={onReturnArrowClick}>
            <div className="return-arrow-item" />
            <Icon icon="mingcute:back-fill" color="white" className="group-icon11" alt="" src="/undefined52.png" />
          </button>
          <button className="back" onClick={onBackClick}>
            <div className="back-child" alt="" src="/undefined53.png" />
            <div className="back1">back</div>
          </button>
          <button className="continue2" onClick={onContinueClick}>
            <div className="back-child" alt="" src="/undefined53.png" />
            <div className="back1">continue</div>
          </button>
          <div className="lesson-complete">lesson complete!</div>
          <img className="image-41-icon" alt="" src="/undefined57.png" />
          <div className="ehersisyo-1-1">{`Ehersisyo 1  - GREETING MATCH - UP `}</div>
          <div className="aralin-1-pagbati-container1">
            <p className="aralin-11">Aralin 1</p>
            <p className="pagbati-at-karaniwang1">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <img
            className="microsoftteams-image-1-8"
            alt=""
            src="/undefined58.png"
          />
        </div>
        <button className="logout2" onClick={openLogoutPopup}>
          <div className="group-parent10">
            <div className="group-parent11">
              <div className="rectangle-sign-in-button-frame">
                <div className="rectangle-sign-in-button2" />
              </div>
              <div className="log-out3">Log Out</div>
            </div>
            <Icon className="group-icon24" alt="" icon="carbon:logout" color="white" />
          </div>
        </button>
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

export default DASHBOARDEXERCISE14;
