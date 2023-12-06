import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDSETTINGS.css";
const DASHBOARDSETTINGS = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onCoursesClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onPasswordButtonClick = useCallback(() => {
    navigate("/15-dashboard-settings-2");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/15-dashboard-settings-2");
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
      <div className="dashboard-settings">
        <div className="rectangle-parent38">
          <div className="group-child102" />
          <div className="courses-container">
            <button className="courses11" onClick={onCoursesClick}>
              <div className="vector-parent37" onClick={onGroupContainerClick}>
                <img className="vector-icon75" alt="" src="/undefined38.png" />
                <div className="courses12">Courses</div>
              </div>
            </button>
            <button className="progress18" onClick={onProgressClick}>
              <div className="vector-parent38" onClick={onGroupContainer1Click}>
                <img className="vector-icon76" alt="" src="/undefined39.png" />
                <div className="progress19">Progress</div>
              </div>
            </button>
            <button className="settings19">
              <div className="group-parent34" onClick={onGroupContainer2Click}>
                <img className="group-icon29" alt="" src="/undefined40.png" />
                <div className="settings20">Settings</div>
              </div>
            </button>
            <button className="home17" onClick={onHomeClick}>
              <div className="home-parent7" onClick={onGroupContainer3Click}>
                <div className="home18">Home</div>
                <img className="vector-icon77" alt="" src="/undefined43.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-settings-child" />
        <div className="div19">
          ______________________________________________________________________________________________________________________________________________
        </div>
        <div className="settings21">Settings</div>
        <div className="dashboard-settings-item" />
        <div className="dashboard-settings-inner" />
        <div className="dashboard-settings-child1" />
        <div className="dashboard-settings-child2" />
        <div className="dashboard-settings-child3" />
        <img
          className="dashboard-settings-child4"
          alt=""
          src="/undefined92.png"
        />
        <button className="upload">
          <div className="upload1">
            <div className="upload-new">Upload New</div>
          </div>
        </button>
        <button className="delete">
          <div className="delete-avatar">Delete Avatar</div>
        </button>
        <div className="gelu1">Gelu</div>
        <div className="filipino1">Filipino</div>
        <div className="yahoogmailcom">yahoo@gmail.com</div>
        <div className="ursal1">Ursal</div>
        <div className="student2">Student</div>
        <div className="your-avatar1">Your Avatar</div>
        <div className="firstname1">FirstName</div>
        <div className="lastname1">LastName</div>
        <div className="role5">Role</div>
        <div className="nationality">Nationality</div>
        <div className="email5">Email</div>
        <img
          className="emojioneflag-for-philippines-icon"
          alt=""
          src="/undefined103.png"
        />
        <img className="n-2-icon1" alt="" src="/undefined93.png" />
        <img
          className="microsoftteams-image-1-4"
          alt=""
          src="/undefined44.png"
        />
        <div className="settings22">Settings</div>
        <button className="profile-button">
          <div className="profile-button-inner">
            <div className="group-child103" />
          </div>
          <div className="profile2">Profile</div>
        </button>
        <button className="password-button" onClick={onPasswordButtonClick}>
          <div
            className="password-button-inner"
            onClick={onGroupContainer7Click}
          >
            <div className="group-child104" />
          </div>
          <div className="password7">Password</div>
        </button>
        <div className="parent-mode18">
          <div className="vector-parent39">
            <img className="vector-icon78" alt="" src="/undefined41.png" />
            <div className="parent-mode19">Parent Mode</div>
          </div>
          <button className="rectangle-parent39" onClick={onGroupButtonClick}>
            <div className="group-child105" />
            <img className="group-child106" alt="" src="/undefined42.png" />
          </button>
        </div>
        <button className="logout9" onClick={openLogoutPopup}>
          <div className="group-parent35">
            <div className="group-parent36">
              <div className="rectangle-sign-in-button-wrapper7">
                <div className="rectangle-sign-in-button9" />
              </div>
              <div className="log-out10">Log Out</div>
            </div>
            <img className="group-icon30" alt="" src="/undefined56.png" />
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

export default DASHBOARDSETTINGS;
