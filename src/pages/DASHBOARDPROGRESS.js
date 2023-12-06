import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPROGRESS.css";
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
            <button className="course1" onClick={onCourseClick}>
              <div className="vector-parent34" onClick={onGroupContainerClick}>
                <img className="vector-icon71" alt="" src="/undefined38.png" />
                <div className="courses10">Courses</div>
              </div>
            </button>
            <button className="progress16">
              <div className="vector-parent35">
                <img className="vector-icon72" alt="" src="/undefined39.png" />
                <div className="progress17">Progress</div>
              </div>
            </button>
            <button className="settings17" onClick={onSettingsClick}>
              <div className="group-parent31" onClick={onGroupContainer2Click}>
                <img className="group-icon27" alt="" src="/undefined40.png" />
                <div className="settings18">Settings</div>
              </div>
            </button>
            <button className="home15" onClick={onHomeClick}>
              <div className="home-parent6" onClick={onGroupContainer3Click}>
                <div className="home16">Home</div>
                <img className="vector-icon73" alt="" src="/undefined43.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-progress-child" />
        <div className="dashboard-progress-item" />
        <div className="rectangle-statistics" />
        <div className="dashboard-progress-inner" />
        <div className="progress-tracker">Progress Tracker</div>
        <img className="charmgraduate-cap-icon" alt="" src="/undefined95.png" />
        <div className="gelu-marie-ursal1">Gelu Marie Ursal</div>
        <div className="student1">Student</div>
        <div className="eggs">
          <img className="noto-v1egg-icon" alt="" src="/undefined96.png" />
          <img className="noto-v1egg-icon" alt="" src="/undefined97.png" />
          <img className="noto-v1egg-icon" alt="" src="/undefined98.png" />
        </div>
        <div className="line-div" />
        <div className="circular-progress-parent">
          <img
            className="circular-progress-icon"
            alt=""
            src="/undefined99.png"
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
        <img className="tablerdots-icon" alt="" src="/undefined100.png" />
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
            className="microsoftteams-image-5-11"
            alt=""
            src="/undefined101.png"
          />
          <div className="in-progress1">in progress</div>
          <div className="group-child94" />
        </div>
        <div className="rectangle-parent36">
          <div className="group-child93" />
          <div className="kurso-2-pagsasalita-container">
            <span className="pagsusulat">{`Kurso 1: `}</span>
            <span className="pambungad">Pambungad</span>
            <span className="pagsusulat">{` sa `}</span>
            <span className="pambungad">Wikang</span>
            <span className="pagsusulat"> Filipino</span>
          </div>
          <div className="completed1">completed</div>
          <div className="group-child96" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon4"
            alt=""
            src="/undefined102.png"
          />
        </div>
        <div className="performance1">
          <img className="performance-child" alt="" src="/undefined29.png" />
          <div className="ellipse-group">
            <div className="group-child97" />
            <div className="group-child98" />
            <div className="group-child99" />
            <div className="efficiency1">
              <div className="y1">y</div>
              <div className="c2">c</div>
              <div className="n4">n</div>
              <div className="e7">e</div>
              <div className="i4">i</div>
              <div className="c3">c</div>
              <div className="i5">i</div>
              <div className="f2">f</div>
              <div className="f3">f</div>
              <div className="e8">E</div>
            </div>
          </div>
          <div className="timeliness1">
            <div className="s2">s</div>
            <div className="s3">s</div>
            <div className="e9">e</div>
            <div className="n5">n</div>
            <div className="i6">i</div>
            <div className="l1">l</div>
            <div className="e10">e</div>
            <div className="m2">m</div>
            <div className="i7">i</div>
            <div className="t2">T</div>
          </div>
          <div className="engagement1">
            <div className="t3">t</div>
            <div className="n6">n</div>
            <div className="e11">e</div>
            <div className="m3">m</div>
            <div className="e12">e</div>
            <div className="g2">g</div>
            <div className="a1">a</div>
            <div className="g3">g</div>
            <div className="n7">n</div>
            <div className="e13">E</div>
          </div>
          <div className="div15">80%</div>
        </div>
        <div className="div16">1</div>
        <div className="div17">0</div>
        <div className="div18">0</div>
        <div className="parent-mode16">
          <div className="vector-parent36">
            <img className="vector-icon74" alt="" src="/undefined41.png" />
            <div className="parent-mode17">Parent Mode</div>
          </div>
          <button className="rectangle-parent37" onClick={onGroupButtonClick}>
            <div className="group-child100" />
            <img className="group-child101" alt="" src="/undefined42.png" />
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
            <img className="group-icon28" alt="" src="/undefined56.png" />
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
