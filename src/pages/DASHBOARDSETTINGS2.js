import { useState, useCallback } from "react";
import UpdatedSuccessfully from "../components/UpdatedSuccessfully";
import PortalPopup from "../components/PortalPopup";
import LogoutPopup from "../components/LogoutPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDSETTINGS2.css";
import { Icon } from "@iconify/react";
const DASHBOARDSETTINGS2 = () => {
  const [isUpdatedSuccessfullyOpen, setUpdatedSuccessfullyOpen] =
    useState(false);
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

  const onGroupContainer6Click = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const openUpdatedSuccessfully = useCallback(() => {
    setUpdatedSuccessfullyOpen(true);
  }, []);

  const closeUpdatedSuccessfully = useCallback(() => {
    setUpdatedSuccessfullyOpen(false);
  }, []);

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
      <div className="dashboard-settings-2">
        <div className="rectangle-parent31">
          <div className="group-child88" />
          <div className="courses-group">
          <button className="coursesButton" onClick={onCoursesClick}>
              <div className="vector-parent37" onClick={onGroupContainerClick}>
                <Icon className="vector-icon75" alt="" icon="carbon:course" color="white"/>
                <div className="courses12">Courses</div>
              </div>
            </button>
            <button className="progress18" onClick={onProgressClick}>
              <div className="vector-parent38" onClick={onGroupContainer1Click}>
                <Icon className="vector-icon76" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress19">Progress</div>
              </div>
            </button>
            <button className="settingsButton">
              <div className="groupSettings" onClick={onGroupContainer2Click}>
                <Icon className="settingsIcon" alt="" icon="solar:settings-outline" color="white"/>
                <div className="settingsText">Settings</div>
              </div>
            </button>
            <button className="home17" onClick={onHomeClick}>
              <div className="home-parent7" onClick={onGroupContainer3Click}>
                <div className="home18">Home</div>
                <Icon className="vector-icon77" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-settings-2-child" />
        <div className="div11">
          ______________________________________________________________________________________________________________________________________________
        </div>
        <img
          className="microsoftteams-image-1-4"
          alt=""
          src="/undefined44.png"
        />
        <div className="settings16">Settings</div>
        <div className="profile-wrapper" onClick={onGroupContainer6Click}>
          <button className="profile" onClick={onProfileClick}>
            <div className="profile1">Profile</div>
          </button>
        </div>
        <div className="dashboard-settings-2-item" />
        <div className="dashboard-settings-2-inner" />
        <div className="dashboard-settings-2-child1" />
        <div className="dashboard-settings-2-child2" />
        <input className="rectangle-input" type="password" />
        <input className="dashboard-settings-2-child3" type="password" />
        <img
          className="dashboard-settings-2-child4"
          alt=""
          src="/undefined92.png"
        />
        <div className="gelu">Gelu</div>
        <div className="ursal">Ursal</div>
        <div className="student">Student</div>
        <div className="your-avatar">Your Avatar</div>
        <div className="firstname">FirstName</div>
        <div className="lastname">LastName</div>
        <div className="role4">Role</div>
        <div className="password5">Password</div>
        <div className="new-password">New Password</div>
        <div className="confirm-passowrd">Confirm Passowrd</div>
        <div className="rectangle-parent32">
          <div className="group-child89" />
          <div className="password6">Password</div>
        </div>
        <img className="n-2-icon" alt="" src="/undefined93.png" />
        <div className="update-wrapper" onClick={openUpdatedSuccessfully}>
          <button className="update">
            <div className="update1">Update</div>
          </button>
        </div>
        <div className="fluent-mdl2radio-bullet-icon">*****************</div>

        
        <div className="parentmodeSwitch">
          <div className="parentContainer">
            <Icon className="parentIcon" icon="ri:parent-line" />
            <div className="parent-mode15">Parent Mode</div>
          </div>
          <button className="rectangle-parent33" onClick={onGroupButtonClick}>
            <div className="group-child90" />
            <Icon className="group-child91" alt="" icon="twemoji:white-circle" />
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
            <Icon className="group-icon30" alt="" icon="carbon:logout" color="white"/>
          </div>
        </button>
      </div>
      {isUpdatedSuccessfullyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpdatedSuccessfully}
        >
          <UpdatedSuccessfully onClose={closeUpdatedSuccessfully} />
        </PortalPopup>
      )}
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

export default DASHBOARDSETTINGS2;
