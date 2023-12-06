import { useState, useCallback } from "react";
import UpdatedSuccessfully from "../components/UpdatedSuccessfully";
import PortalPopup from "../components/PortalPopup";
import LogoutPopup from "../components/LogoutPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDSETTINGS2.css";
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
            <button className="courses8" onClick={onCoursesClick}>
              <div className="vector-parent31" onClick={onGroupContainerClick}>
                <img className="vector-icon67" alt="" src="/undefined38.png" />
                <div className="courses9">Courses</div>
              </div>
            </button>
            <button className="progress14" onClick={onProgressClick}>
              <div className="vector-parent32" onClick={onGroupContainer1Click}>
                <img className="vector-icon68" alt="" src="/undefined39.png" />
                <div className="progress15">Progress</div>
              </div>
            </button>
            <button className="settings14">
              <div className="group-parent28" onClick={onGroupContainer2Click}>
                <img className="group-icon25" alt="" src="/undefined40.png" />
                <div className="settings15">Settings</div>
              </div>
            </button>
            <button className="home13" onClick={onHomeClick}>
              <div className="home-parent5" onClick={onGroupContainer3Click}>
                <div className="home14">Home</div>
                <img className="vector-icon69" alt="" src="/undefined43.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="dashboard-settings-2-child" />
        <div className="div11">
          ______________________________________________________________________________________________________________________________________________
        </div>
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
        <input className="rectangle-input" type="text" />
        <input className="dashboard-settings-2-child3" type="text" />
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
        <img
          className="fluent-mdl2radio-bullet-icon"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon1"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon2"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon3"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon4"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon5"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon6"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon7"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon8"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon9"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon10"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon11"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="fluent-mdl2radio-bullet-icon12"
          alt=""
          src="/undefined94.png"
        />
        <img
          className="microsoftteams-image-1-5"
          alt=""
          src="/undefined44.png"
        />
        <div className="parent-mode14">
          <div className="vector-parent33">
            <img className="vector-icon70" alt="" src="/undefined41.png" />
            <div className="parent-mode15">Parent Mode</div>
          </div>
          <button className="rectangle-parent33" onClick={onGroupButtonClick}>
            <div className="group-child90" />
            <img className="group-child91" alt="" src="/undefined42.png" />
          </button>
        </div>
        <button className="logout7" onClick={openLogoutPopup}>
          <div className="group-parent29">
            <div className="group-parent30">
              <div className="rectangle-sign-in-button-wrapper5">
                <div className="rectangle-sign-in-button7" />
              </div>
              <div className="log-out8">Log Out</div>
            </div>
            <img className="group-icon26" alt="" src="/undefined56.png" />
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
