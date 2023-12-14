import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
//import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import "./DASHBOARDParentModeLogin.css";
import { Icon } from "@iconify/react";

const DASHBOARDParentModeLogin = () => {
  const [isStudentModeOpen, setStudentModeOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  return (
    <>
      <div className="dashboard-parentmode-login">
        <div className="group-parent28">
          <div className="dashbaord">
            <div className="dashboard">
              <div className="group-child68" />
              <div className="contact-us-parent16">
                <button className="contact-us20" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner7"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent17">
                      <div className="contact-us21">Contact Us</div>
                      <Icon className="vector-icon63"   icon="mingcute:information-line" color="white" /> 
                    </div>
                  </div>
                </button>
                <button className="progress19" onClick={onProgressClick}>
                  <div
                    className="vector-parent30"
                    onClick={onGroupContainer2Click}
                  >
                    <img className="vector-icon64" alt="" src="/vector1.svg" />
                    <div className="progress20">Progress</div>
                  </div>
                </button>
                <div className="vector-parent31">
                  <img className="vector-icon65" alt="" src="/vector2.svg" />
                  <div className="parent-mode10">Parent Mode</div>
                </div>
                <div className="home-parent8">
                  <div className="home13">Home</div>
                  <img className="vector-icon66" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <button className="courses21" onClick={onCoursesClick}>
              <div className="vector-parent32" onClick={onGroupContainer7Click}>
                <Icon className="vector-icon67" icon="carbon:course" color="white"/>
                <div className="courses22">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings21" onClick={onSettingsClick}>
            <div className="group-parent30" onClick={onGroupContainer9Click}>
              <img className="group-icon10" alt="" src="/group.svg" />
              <div className="settings22">Settings</div>
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

        <input className="rectangle-email3" type="password" />
        <b className="enter-password1">Enter Password</b>
        <Link
          className="forgot-password1"
          to="/dashboard-parentmode-forgot-password"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </Link>
        <button className="rectangle-parent36" onClick={openStudentMode}>
          <div className="group-child69" />
          <img className="group-child70" alt="" src="/ellipse-5.svg" />
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
