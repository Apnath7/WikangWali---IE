import { useState, useCallback } from "react";
import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPARENTSETTINGS.css";
import { Icon } from "@iconify/react";

const DASHBOARDPARENTSETTINGS = () => {
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

  const onFrameButton1Click = useCallback(() => {
    navigate("/15-dashboard-settings-parent-mode");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/15-dashboard-settings-parent-mode");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-parent-settings_PTS">
        <div className="group-parent4_PTS">
          <div className="group-parent5_PTS">
            <div className="rectangle-parent8_PTS">
              <div className="group-child10_PTS" />
              <div className="group-parent6_PTS">
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
        <div className="dashboard-parent-settings-child_PTS" />
        <div className="div3_PTS">
          ______________________________________________________________________________________________________________________________________________
        </div>
        <div className="settings6_PTS">Settings</div>
        <div className="dashboard-parent-settings-item_PTS" />
        <div className="dashboard-parent-settings-inner_PTS" />
        <div className="dashboard-parent-settings-child1_PTS" />
        <div className="dashboard-parent-settings-child2_PTS" />
        <div className="dashboard-parent-settings-child3_PTS" />
        <div className="dashboard-parent-settings-child4_PTS" />
        <img
          className="dashboard-settings-child4"
          alt=""
          src="/mother.png.png"
        />
        <button className="upload">
          <div className="upload1">
            <div className="upload-new">Upload New</div>
          </div>
        </button>
        <button className="delete">
          <div className="delete-avatar">Delete Avatar</div>
        </button>
        <div className="gelu1">Dawn Marie</div>
        <div className="filipino1">Filipino</div>
        <div className="yahoogmailcom">yahoo@gmail.com</div>
        <div className="ursal1">Gumagay</div>
        <div className="student2">Parent</div>
        <div className="your-avatar1">Your Avatar</div>
        <div className="firstname1">FirstName</div>
        <div className="lastname1">LastName</div>
        <div className="role5">Role</div>
        <div className="nationality">Nationality</div>
        <div className="email5">Email</div>
        <Icon
          className="emojioneflag-for-philippines-icon"
          alt=""
          icon="emojione:flag-for-philippines"
        />
        <img className="n-2-icon1" alt="" src="/undefined93.png" />
        <img
          className="microsoftteams-image-1-4"
          alt=""
          src="/wikangwali.png"
        />
        <div className="settings7_PTS">Settings</div>
        <button className="frame-button_PTS">
          <div className="rectangle-wrapper_PTS">
            <div className="group-child12_PTS" />
          </div>
          <div className="profile2_PTS">Profile</div>
        </button>
        <button className="group-parent8_PTS" onClick={onFrameButton1Click}>
          <div className="rectangle-frame_PTS" onClick={onGroupContainer8Click}>
            <div className="group-child13_PTS" />
          </div>
          <div className="password2_PTS">Password</div>
        </button>
        <button className="rectangle-parent41_HP" onClick={openStudentMode}>
          <Icon className="group-child76_HP" alt="" icon="twemoji:white-circle" />
        </button>
      </div>
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

export default DASHBOARDPARENTSETTINGS;
