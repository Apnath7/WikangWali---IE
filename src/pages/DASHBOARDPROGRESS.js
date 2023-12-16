import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPROGRESS.css";
import { Icon } from "@iconify/react";
const DASHBOARDPROGRESS = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onCourseClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    // Please sync "14- DASHBOARD PARENT - SETTINGS" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "16- DASHBOARD -ParentMode Login" to the project
    navigate("/dashboard-parent-mode");
  }, []);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-progress">
        <div className="rectangle-parent34">
          <div className="group-child92" />
          <div className="course-parent">
            <button className="courseButton" onClick={onCourseClick}>
              <div className="vectorImage" onClick={onGroupContainerClick}>
                <Icon className="vectorIcon" alt="" icon="carbon:course" color="white" />
                <div className="coursesText">Courses</div>
              </div>
            </button>
            <button className="progress16">
              <div className="vectorImage">
                <Icon className="vectorIcon1" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress17">Progress</div>
              </div>
            </button>
            <button className="settings17" onClick={onSettingsClick}>
              <div className="group-parent31" onClick={onGroupContainer2Click}>
                <Icon className="group-icon27" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings18">Settings</div>
              </div>
            </button>
            <button className="homeButton" onClick={onHomeClick}>
              <div className="home-parent6" onClick={onGroupContainer3Click}>
                <div className="home16">Home</div>
                <Icon className="vector-icon73" alt="" icon="material-symbols-light:home-outline" color="white"/>
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-progress-child" />
        <div className="dashboard-progress-item" />
        <div className="rectangle-statistics" />
        <div className="dashboard-progress-inner" />
        <div className="progress-tracker">Progress Tracker</div>
        <Icon className="charmgraduate-cap-icon" alt="" icon="charm:graduate-cap" color="gray" />
        <div className="gelu-marie-ursal1">Gelu Marie Ursal</div>
        <div className="student1">Student</div>
        <div className="eggs">
          <Icon className="noto-v1egg-icon" icon="noto-v1:egg"  />
          <img className="noto-v1egg-icon" src="/grayegg.png"  />
          <img className="noto-v1egg-icon" src="/goldenegg.png"  />
        </div>
        <div className="line-div" />
        <div className="circular-progress-parent">
          <img
            className="circular-progress-icon"
            alt=""
            src="/progress.png"
          />
          <div className="summary">Summary</div>
          <div className="performance">Performance</div>
          <div className="awards">Awards</div>
          <div className="percentageprogress">
            <div className="parent2">
              <div className="div12">25%</div>
              <div className="to-begin">to begin</div>
            </div>
            <div className="parent3">
              <div className="div12">25%</div>
              <div className="to-begin">in progress</div>
            </div>
            <div className="parent4">
              <div className="div12">50%</div>
              <div className="to-begin">completed</div>
            </div>
          </div>
          <div className="circle-colors">
            <div className="circle-colors-inner">
              <div className="frame-child5" />
            </div>
            <div className="circle-colors-inner">
              <div className="frame-child6" />
            </div>
            <div className="circle-colors-inner">
              <div className="frame-child7" />
            </div>
          </div>
        </div>
        <img
          className="microsoftteams-image-1-3"
          alt=""
          src="/undefined44.png"
        />
        <Icon className="tablerdots-icon" alt="" icon="tabler:dots" color="gray" />
        <div className="dashboard-progress-child1" />
        <div className="rectangle-parent35">
          <div className="group-child93" />
          <div className="kurso-2-pagsasalita-container">
            <span className="kurso-2-pagsasalita1">
              Kurso 2: Pagsasalita at
            </span>
            <b>{` `}</b>
            <span className="pagsusulat">Pagsusulat</span>
          </div>
          <img
            className="microsoftteams"
            alt=""
            src="/undefined101.png"
          />
          <div className="in-progress1">in progress</div>
          <div className="group-child94" />
        </div>
        <div className="rectangle-parent36">
          <div className="group-child933" />
          <div className="kurso-2-pagsasalita-container2">
            <span className="pagsusulat">{`Kurso 1: `}</span>
            <span className="pambungad">Pambungad</span>
            <span className="pagsusulat">{` sa `}</span>
            <span className="pambungad">Wikang</span>
            <span className="pagsusulat"> Filipino</span>
          </div>
          <div className="completed12">completed</div>
          <div className="group-child96" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon4"
            alt=""
            src="/undefined102.png"
          />
        </div>
        <div className="performance1">
          <img className="performance-child" alt="" src="/perform.png" />
          
          
          
          <div className="div15">80%</div>
        </div>
        <div className="div16">1</div>
        <div className="div17">0</div>
        <div className="div18">0</div>
        <div className="parent-mode16">
          <div className="vector-parent36">
            <Icon className="vector-icon74" alt="" icon="ri:parent-line" />
            <div className="parent-mode17">Parent Mode</div>
          </div>
          <button className="parentSwitch" onClick={onGroupButtonClick}>
            <div className="group-child100" />
            <Icon className="group-child101" alt="" icon="twemoji:white-circle" />
          </button>
        </div>
        <button className="logout8" onClick={openLogoutPopup}>
          <div className="group-parent32">
            <div className="group-parent33">
              <div className="rectangle-sign-in-button-wrapper6">
                <div className="rectangle-sign-in-button8" />
              </div>
              <div className="log-out9">Log Out</div>
            </div>
            <Icon className="group-icon28" alt="" icon="carbon:logout" color="white" />
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

export default DASHBOARDPROGRESS;
