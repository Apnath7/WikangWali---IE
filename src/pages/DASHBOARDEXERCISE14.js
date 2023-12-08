import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDEXERCISE14.css";
import { Icon } from '@iconify/react';

const DASHBOARDEXERCISE14 = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onDASHBOARDEXERCISE14Click = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

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
  }, []);

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
        className="dashboard-exercise-14"
        onClick={onDASHBOARDEXERCISE14Click}
      >
        <div className="rectangle-parent10">
          <div className="group-child23" />
          <div className="group-parent4">
            <div className="vector-parent1" onClick={onGroupContainerClick}>
            <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses1">Courses</div>
            </div>
            <button className="progress2" onClick={onProgressClick}>
              <div className="vector-parent2">
              <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress3">Progress</div>
              </div>
            </button>
            <button className="settings2" onClick={onSettingsClick}>
              <div className="group-parent5">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings3">Settings</div>
              </div>
            </button>
            <div className="parent-mode2">
              <div className="vector-parent3">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode3">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent11"
                onClick={onGroupButtonClick}
              >
                <div className="group-child24" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home2" onClick={onHomeClick}>
              <div className="home-group">
                <div className="home3">Home</div>
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
          <b className="gelu-ursal1">Gelu Ursal</b>
          <Icon icon="carbon:course" color="white" className="vector-icon26" alt="" src="/undefined46.png" />
          <img
            className="microsoftteams-image-1-61"
            alt=""
            src="/undefined47.png"
          />
          <Icon icon="ph:bell-fill" className="vector-icon20" alt="" src="/undefined48.png" />
          <Icon icon="bxs:down-arrow" className="vector-icon21" alt="" src="/undefined49.png" />
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
        <button className="logout1" onClick={openLogoutPopup}>
          <div className="group-parent6">
            <div className="group-parent7">
              <div className="rectangle-sign-in-button-container">
                <div className="rectangle-sign-in-button1" />
              </div>
              <div className="log-out2">Log Out</div>
            </div>
            <img className="group-icon12" alt="" src="/undefined56.png" />
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
