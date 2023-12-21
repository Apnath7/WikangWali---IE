import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import "./DASHBOARDParentModeLogin.css";
import { Icon } from "@iconify/react";

const generateRandomPassword = () => {
  const length = 8; // Set your desired password length
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

const DASHBOARDParentModeLogin = () => {
  const [password, setPassword] = useState("");
  const [isStudentModeOpen, setStudentModeOpen] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const onContactUsClick = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/21-dashboard-parent-progress");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/21-dashboard-parent-progress");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/dashboard-parentmode-forgot-password");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    if (password === "") {
      alert("Please enter a password.");
    } else {
      navigate("/20-dashboard-home-paretnt");
      // Add additional logic for handling non-empty password
    }
  }, [navigate, password]);

  return (
    <>
      <div className="dashboard-parentmode-login">
        <div className="group-parent28">
          <div className="dashbaord">
            <div className="dashboard">
              <div className="group-child68" />
              <div className="contact-us-parent16">
              <button className="contact-us20_HP" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner7_HP"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent17_HP">
                      <div className="contact-us21_HP">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                    </div>
                  </div>
                </button>
                <button className="progress21_HP" onClick={onProgressClick}>
                  <div
                    className="vector-parent33_HP"
                    onClick={onGroupContainer2Click}
                  >
                    <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress22_HP">Progress</div>
                  </div>
                </button>
                <div className="vector-parent34_HP">
                  <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
                </div>
                <div className="home-parent9_HP">
                  <div className="home15_HP">Home</div>
                  <Icon className="vector-icon70_HP" alt="" icon="material-symbols-light:home-outline" />
                </div>
              </div>
            </div>
            <button className="courses23_HP" onClick={onCoursesClick}>
              <div className="vector-parent35_HP" onClick={onGroupContainer7Click}>
                <Icon className="vector-icon71_HP" alt="" icon="carbon:course" color="white" />
                <div className="courses24_HP">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings24_HP" onClick={onSettingsClick}>
            <div className="group-parent31_HP" onClick={onGroupContainer9Click}>
              <Icon className="group-icon12_HP" alt="" icon="solar:settings-outline" color="white" />
              <div className="settings25_HP">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-parentmode-login-child" />
        <div className="dashboard-parentmode-login-item" />
        <img
          className="microsoftteams-image-1-17"
          alt=""
          src="wikangwali.png"
        />
        <div className="dashboard-parentmode-login-inner" />
        <img
          className="dashboard-parentmode-login-child1"
          alt=""
          src="mother.png.png"
        />
        <div className="marie6">
          <p className="marie7">Marie</p>
        </div>
        <div className="mother3">Mother</div>
        <img className="vector-icon68" alt="" src="/vector5.svg" />
        <div className="dashboard-parentmode-login-child2" style={{ backgroundColor: "#FFFF008F" }}>
    <img className="birdicon" alt="" src="Parentbird.png" />
</div>

<div className="dashboard-parentmode-login-child3" style={{ backgroundColor: "#FF0000" }}>
   
</div>

        <input className="rectangle-email3" 
        type="password" 
        value={password}
        onChange={handlePasswordChange}/>
        <b className="enter-password1">Enter Password</b>
        <Link
          className="forgot-password1"
          to="/dashboard-parentmode-forgot-password"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </Link>
        <button className="rectangle-parent41_HP" onClick={openStudentMode}>
          <Icon className="group-child76_HP" alt="" icon="twemoji:white-circle" />
        </button>
        <div className="enter-container" onClick={onFrameContainerClick}>
          <div className="enter2">ENTER</div>
        </div>
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

export default DASHBOARDParentModeLogin;
