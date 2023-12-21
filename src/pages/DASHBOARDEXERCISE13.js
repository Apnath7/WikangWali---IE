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
    navigate("/dashboard-parent-mode");
  }, [navigate])

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
      <div className="dashboard-exercise-13_13">
        <div className="rectangle-parent7_13">
          <div className="group-child15_13" />
          <div className="group-parent1_13">
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
        <div className="fluenttriangle-16-filled_13" />
        <img
          className="microsoftteams-image-1-2_13"
          alt=""
          src="/undefined44.png"
        />
        <div className="dashboard-exercise-13-child_13" />
        <div className="rectangle-parent9_13">
          <div className="group-child17_13" />
          <div className="group-child18_13" />
          <div className="rectangle-parent16">
            <div className="group-child40" />
            <div className="vector-parent7">
              <div className="group-child41" alt="" src="/undefined45.png" />

              <b className="gelu-ursal5">Gelu Marie Ursal</b>
              <p className="student-ursal5">student</p>

            </div>
            <Icon icon="carbon:course" color="white" className="group-child42" alt="" src="/undefined46.png" />
          </div>
          <div className="group-child20_13" alt="" src="/undefined50.png" />
          <div className="group-child21_13" alt="" src="/undefined51.png" />
          <button className="return-arrow_13" onClick={onReturnArrowClick}>
          <div className="return-arrow-inner" />
          <Icon className="group-icon17" icon="mingcute:back-line"/>
          </button>
          <button className="continue_13" onClick={onContinueClick}>
            <div className="continue-child_13" alt="" src="/undefined53.png" />
            <div className="continue1_13">continue</div>
          </button>
          <div className="good-job-parent_13">
            <div className="good-job_13">good job!</div>
            <div className="group-child22_13" alt="" src="/undefined54.png" />
          </div>
          <div className="aralin-1-pagbati-container2">
            <p className="exercise">Aralin 1</p>
            <p className="pagbati-at-karaniwang2">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <div className="ehersisyo-1-_13">{`Ehersisyo 1  - GREETING MATCH - UP `}</div>
          <img
            className="microsoftteams-image-6-icon_13"
            alt=""
            src="/undefined55.png"
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

export default DASHBOARDEXERCISE13;
