import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDLESSONS.css";
const DASHBOARDLESSONS = () => {
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

  const onStartCourseClick = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-lessons">
        <div className="rectangle-parent23">
          <div className="group-child70" />
          <div className="group-parent16">
            <div className="vector-parent12" onClick={onGroupContainerClick}>
              <img className="vector-icon41" alt="" src="/undefined38.png" />
              <div className="courses4">Courses</div>
            </div>
            <button className="progress8" onClick={onProgressClick}>
              <div className="vector-parent13">
                <img className="vector-icon42" alt="" src="/undefined39.png" />
                <div className="progress9">Progress</div>
              </div>
            </button>
            <button className="settings8" onClick={onSettingsClick}>
              <div className="group-parent17">
                <img className="group-icon19" alt="" src="/undefined40.png" />
                <div className="settings9">Settings</div>
              </div>
            </button>
            <div className="parent-mode8">
              <div className="vector-parent14">
                <img className="vector-icon43" alt="" src="/undefined41.png" />
                <div className="parent-mode9">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent24"
                onClick={onGroupButtonClick}
              >
                <div className="group-child71" />
                <img className="group-child72" alt="" src="/undefined42.png" />
              </button>
            </div>
            <button className="home8" onClick={onHomeClick}>
              <div className="home-parent2">
                <div className="home9">Home</div>
                <img className="vector-icon44" alt="" src="/undefined43.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled4" />
        <div className="dashboard-lessons-child" />
        <div className="dashboard-lessons-item" />
        <img
          className="microsoftteams-image-1-24"
          alt=""
          src="/undefined44.png"
        />
        <img
          className="dashboard-lessons-inner"
          alt=""
          src="/undefined30.png"
        />
        <img
          className="dashboard-lessons-child1"
          alt=""
          src="/undefined64.png"
        />
        <img
          className="dashboard-lessons-child2"
          alt=""
          src="/undefined65.png"
        />
        <div className="kurso-1-pambungad-container">
          <p className="start">Kurso 1</p>
          <p className="pambungad-sa-wikang">Pambungad sa Wikang Filipino</p>
        </div>
        <div className="introduction-to-filipino">
          Introduction to Filipino Language
        </div>
        <img
          className="ca88b0e1-977b-4453-99ba-b1a77c-icon2"
          alt=""
          src="/undefined66.png"
        />
        <button className="start-course" onClick={onStartCourseClick}>
          <img
            className="start-course-child"
            alt=""
            src="/undefined67.png"
            onClick={onRectangle7Click}
          />
          <div className="start-course1">
            <p className="start">START</p>
            <p className="start">COURSE</p>
          </div>
        </button>
        <div className="aralin-1-pagbati-container4">
          <ul className="aralin-1-pagbati">
            Aralin 1: Pagbati at Karaniwang Pananalita Aralin
          </ul>
        </div>
        <img
          className="dashboard-lessons-child3"
          alt=""
          src="/undefined65.png"
        />
        <div className="aralin-1-pagbati-container5">
          <ul className="aralin-1-pagbati">
            Aralin 1: Pagbati at Karaniwang Pananalita Aralin
          </ul>
        </div>
        <div className="vector-parent15">
          <img className="group-child73" alt="" src="/undefined68.png" />
          <div className="aralin-3-payak-container">
            <ul className="aralin-1-pagbati">{`Aralin 3: Payak na Balangkas ng Pangungusap `}</ul>
          </div>
        </div>
        <div className="vector-parent16">
          <img className="group-child73" alt="" src="/undefined68.png" />
          <div className="aralin-4-pamilya-container">
            <ul className="aralin-1-pagbati">{`Aralin 4: Pamilya at mga Ugnayan `}</ul>
          </div>
        </div>
        <div className="vector-parent17">
          <img className="group-child73" alt="" src="/undefined68.png" />
          <div className="aralin-2-batayang-container">
            <ul className="aralin-1-pagbati">
              Aralin 2: Batayang Bokabularyo at mga Bilang
            </ul>
          </div>
        </div>
        <div className="vector-parent18">
          <img className="group-child73" alt="" src="/undefined68.png" />
          <div className="aralin-1-pagbati-container6">
            <ul className="aralin-1-pagbati">
              Aralin 1: Pagbati at Karaniwang Pananalita Aralin
            </ul>
          </div>
        </div>
        <button className="return-arrow4" onClick={onReturnArrowClick}>
          <img className="return-arrow-icon" alt="" src="/undefined69.png" />
        </button>
        <div className="rectangle-parent25">
          <div className="group-child77" />
          <div className="vector-parent19">
            <img className="group-child78" alt="" src="/undefined45.png" />
            <b className="gelu-ursal4">Gelu Ursal</b>
            <img
              className="microsoftteams-image-1-72"
              alt=""
              src="/undefined47.png"
            />
            <img className="vector-icon45" alt="" src="/undefined59.png" />
            <img className="vector-icon46" alt="" src="/undefined49.png" />
          </div>
          <div className="group-wrapper4">
            <div className="kurso-parent">
              <div className="kurso">kurso</div>
              <img className="vector-icon47" alt="" src="/undefined46.png" />
            </div>
          </div>
        </div>
        <img
          className="dashboard-lessons-child4"
          alt=""
          src="/undefined70.png"
        />
        <button className="logout4" onClick={openLogoutPopup}>
          <div className="group-parent18">
            <div className="group-parent19">
              <div className="rectangle-sign-in-button-wrapper2">
                <div className="rectangle-sign-in-button4" />
              </div>
              <div className="log-out5">Log Out</div>
            </div>
            <img className="group-icon20" alt="" src="/undefined56.png" />
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

export default DASHBOARDLESSONS;
