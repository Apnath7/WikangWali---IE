import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDEXERCISE13.css";
import { Icon } from '@iconify/react';

const DASHBOARDEXERCISE13 = () => {
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
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/10-dashboard-exercise-12");
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate("/12-dashboard-exercise-14");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-exercise-13">
        <div className="rectangle-parent7">
          <div className="group-child15" />
          <div className="group-parent1">
            <div className="vector-parent" onClick={onGroupContainerClick}>
            <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses">Courses</div>
            </div>
            <button className="progress" onClick={onProgressClick}>
              <div className="vector-group">
              <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress1">Progress</div>
              </div>
            </button>
            <button className="settings" onClick={onSettingsClick}>
              <div className="group-group">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings1">Settings</div>
              </div>
            </button>
            <div className="parent-mode">
              <div className="vector-container">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode1">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent8"
                onClick={onGroupButtonClick}
              >
                <div className="group-child16" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home" onClick={onHomeClick}>
              <div className="home-parent">
                <div className="home1">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled" />
        <img
          className="microsoftteams-image-1-2"
          alt=""
          src="/undefined44.png"
        />
        <div className="dashboard-exercise-13-child" />
        <div className="rectangle-parent9">
          <div className="group-child17" />
          <div className="group-child18" />
          <div className="group-child19" />
          <div className="rectangle-icon" alt="" src="/undefined45.png" />
          <b className="gelu-ursal">Gelu Ursal</b>
          <img className="vector-icon19" alt="" src="/undefined46.png" />
          <img
            className="microsoftteams-image-1-6"
            alt=""
            src="/undefined47.png"
          />
          <Icon icon="ph:bell-fill" className="vector-icon20" alt="" src="/undefined48.png" />
          <Icon icon="bxs:down-arrow" className="vector-icon21" alt="" src="/undefined49.png" />
          <div className="group-child20" alt="" src="/undefined50.png" />
          <div className="group-child21" alt="" src="/undefined51.png" />
          <button className="return-arrow" onClick={onReturnArrowClick}>
            <div className="return-arrow-child" />
            <Icon icon="mingcute:back-fill" color="white" className="group-icon8" alt="" src="/undefined52.png" />
          </button>
          <button className="continue" onClick={onContinueClick}>
            <img className="continue-child" alt="" src="/undefined53.png" />
            <div className="continue1">continue</div>
          </button>
          <div className="good-job-parent">
            <div className="good-job">good job!</div>
            <img className="group-child22" alt="" src="/undefined54.png" />
          </div>
          <div className="aralin-1-pagbati-container">
            <p className="aralin-1">Aralin 1</p>
            <p className="pagbati-at-karaniwang">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <div className="ehersisyo-1-">{`Ehersisyo 1  - GREETING MATCH - UP `}</div>
          <img
            className="microsoftteams-image-6-icon"
            alt=""
            src="/undefined55.png"
          />
        </div>
        <button className="logout" onClick={openLogoutPopup}>
          <div className="group-parent2">
            <div className="group-parent3">
              <div className="rectangle-sign-in-button-wrapper">
                <div className="rectangle-sign-in-button" />
              </div>
              <div className="log-out1">Log Out</div>
            </div>
            <img className="group-icon9" alt="" src="/undefined56.png" />
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

export default DASHBOARDEXERCISE13;
