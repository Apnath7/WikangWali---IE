import { useState, useCallback } from "react";
import UpdatedSuccessfully from "../components/UpdatedSuccessfully";
import PortalPopup from "../components/PortalPopup";
import StudentMode from "../components/StudentMode";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDSETTINGSPARENT.css";
import { Icon } from "@iconify/react";

const DASHBOARDSETTINGSPARENT = () => {
  const [isUpdatedSuccessfullyOpen, setUpdatedSuccessfullyOpen] =
    useState(false);
  const [isStudentModeOpen, setStudentModeOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/21-dashboard-parent-progress");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const openUpdatedSuccessfully = useCallback(() => {
    setUpdatedSuccessfullyOpen(true);
  }, []);

  const closeUpdatedSuccessfully = useCallback(() => {
    setUpdatedSuccessfullyOpen(false);
  }, []);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-settings-parent_PTS2">
        <div className="group-parent9_PTS2">
          <div className="group-parent10_PTS2">
            <div className="rectangle-parent11_PTS2">
              <div className="group-child16_PTS2" />
              <div className="group-parent11_PTS2">
              <button className="group-wrapper5_PTS" onClick={onGroupButtonClick}>
                  <div className="contact-us-container_PTS">
                  <div className="contact-us21_HP">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                  </div>
                </button>
                <button
                  className="vector-parent4_PTS"
                  onClick={onGroupButton1Click}
                >
                  <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress22_HP">Progress</div>
                </button>
                <button className="group-parent7_PTS">
                <Icon className="group-icon12_HP" alt="" icon="solar:settings-outline" color="white" />
              <div className="settings25_HP">Settings</div>
                </button>
                <div className="vector-parent5_PTS">
                <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
                </div>
              </div>
            </div>
            <button className="home-container_PTS" onClick={onGroupButton3Click}>
            <div className="home9_CUS">Home</div>
            <Icon className="vector-icon45_CUS" alt="" icon="material-symbols-light:home-outline" color="white"/>
            </button>
          </div>
          <button className="vector-parent6_PTS" onClick={onGroupButton4Click}>
          <Icon className="vector-icon71_HP" alt="" icon="carbon:course" color="white" />
                <div className="courses24_HP">Courses</div>
          </button>
        </div>
        <div className="dashboard-settings-parent-child_PTS2" />
        <div className="div4_PTS2">
          ______________________________________________________________________________________________________________________________________________
        </div>
        <div className="settings9_PTS2">Settings</div>
        <button
          className="dashboard-settings-parent-inner_PTS2"
          onClick={onGroupButton5Click}
        >
          <div className="rectangle-parent12_PTS2">
            <div className="frame-child_PTS2" />
            <div className="profile3_PTS2">Profile</div>
          </div>
        </button>
        <div className="dashboard-settings-parent-item_PTS2" />
        <div className="dashboard-settings-parent-child1_PTS2" />
        <div className="dashboard-settings-parent-child2_PTS2" />
        <div className="dashboard-settings-parent-child3_PTS2" />
        <input className="rectangle-input" type="password" />
        <input className="dashboard-settings-2-child3" type="password" />
        <img
          className="dashboard-settings-2-child4"
          alt=""
          src="/mother.png.png"
        />
        <div className="marie-antoinette_PTS2">{`Marie Antoinette `}</div>
        <div className="cruz_PTS2">Cruz</div>
        <div className="parent_PTS2">Parent</div>
        <div className="your-avatar2_PTS2">Your Avatar</div>
        <div className="firstname2_PTS2">FirstName</div>
        <div className="lastname2_PTS2">LastName</div>
        <div className="role2_PTS2">Role</div>
        <div className="password3_PTS2">Password</div>
        <div className="new-password1_PTS2">New Password</div>
        <div className="confirm-passowrd1_PTS2">Confirm Passowrd</div>
        <div className="dashboard-settings-parent-inner1_PTS2">
          <div className="rectangle-parent13_PTS2">
            <div className="frame-item_PTS2" />
            <div className="password4_PTS2">Password</div>
          </div>
        </div>
        <img
          className="microsoftteams-image-1-4"
          alt=""
          src="/wikangwali.png"
        />
        <img
          className="n-2-icon1"
          alt=""
          src="/undefined93.png"
        />
        <div className="rectangle-parent14_PTS2" onClick={openUpdatedSuccessfully}>
          <div className="group-child17_PTS2" />
          <div className="update2_PTS2">Update</div>
        </div>
        <div className="fluent-mdl2radio-bullet-icon">*****************</div>
        
        <button className="rectangle-parent41_HP" onClick={openStudentMode}>
          <Icon className="group-child76_HP" alt="" icon="twemoji:white-circle" />
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
      {isStudentModeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStudentMode}
        >
          <StudentMode onClose={closeStudentMode} />
        </PortalPopup>
      )}
    </>
  );
};

export default DASHBOARDSETTINGSPARENT;
