import { useState, useCallback } from "react";
//import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDParentModeForgotP1.css";

const DASHBOARDParentModeForgotP1 = () => {
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

  const onGroupContainer13Click = useCallback(() => {
    navigate("/19-dashboard-parentmode-forgot-password-2");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/16-dashboard-parentmode-login");
  }, [navigate]);

  const onVectorIcon4Click = useCallback(() => {
    navigate("/17-dashboard-parentmode-invalid-password");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-parentmode-forgot-p1">
        <div className="group-parent16">
          <div className="group-parent17">
            <div className="group-parent17">
              <div className="group-child24" />
              <div className="contact-us-parent4">
                <button className="contact-us7" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner1"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent5">
                      <div className="contact-us8">Contact Us</div>
                      <img className="vector-icon26" alt="" src="/vector.svg" />
                    </div>
                  </div>
                </button>
                <button className="progress8" onClick={onProgressClick}>
                  <div
                    className="vector-parent13"
                    onClick={onGroupContainer2Click}
                  >
                    <img className="vector-icon27" alt="" src="/vector1.svg" />
                    <div className="progress9">Progress</div>
                  </div>
                </button>
                <div className="vector-parent14">
                  <img className="vector-icon28" alt="" src="/vector2.svg" />
                  <div className="parent-mode6">Parent Mode</div>
                </div>
                <div className="home-parent3">
                  <div className="home6">Home</div>
                  <img className="vector-icon29" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <button className="courses10" onClick={onCoursesClick}>
              <div className="vector-parent15" onClick={onGroupContainer7Click}>
                <img className="vector-icon30" alt="" src="/vector4.svg" />
                <div className="courses11">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings12" onClick={onSettingsClick}>
            <div className="group-parent18" onClick={onGroupContainer9Click}>
              <img className="group-icon6" alt="" src="/group.svg" />
              <div className="settings13">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-parentmode-forgot-p-child4" />
        <div className="dashboard-parentmode-forgot-p-inner2">
          <div className="rectangle-wrapper2">
            <div className="group-child25" />
          </div>
        </div>
        <img
          className="microsoftteams-image-1-12"
          alt=""
          src="/microsoftteamsimage-1-1@2x.png"
        />
        <div className="dashboard-parentmode-forgot-p-child5" />
        <img
          className="dashboard-parentmode-forgot-p-child6"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <div className="marie4">
          <p className="marie5">Marie</p>
        </div>
        <div className="mother2">Mother</div>
        <img className="vector-icon31" alt="" src="/vector5.svg" />
        <img
          className="dashboard-parentmode-forgot-p-child7"
          alt=""
          src="/rectangle-922.svg"
        />
        <img
          className="dashboard-parentmode-forgot-p-child8"
          alt=""
          src="/rectangle-912.svg"
        />
        <input className="rectangle-email1" type="text" />
        <b className="enter-email-address">Enter Email Address</b>
        <input className="rectangle-email2" type="text" />
        <b className="enter-new-password">Enter New Password</b>
        <div className="change-wrapper" onClick={onGroupContainer13Click}>
          <button className="change">
            <div className="change1">CHANGE</div>
          </button>
        </div>
        <img className="image-45-icon" alt="" src="/image-45@2x.png" />
        <button className="return-arrow" onClick={onReturnArrowClick}>
          <img
            className="vector-icon32"
            alt=""
            src="/vector7.svg"
            onClick={onVectorIcon4Click}
          />
        </button>
        <button className="rectangle-parent19" onClick={openStudentMode}>
          <div className="group-child26" />
          <img className="group-child27" alt="" src="/ellipse-5.svg" />
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

export default DASHBOARDParentModeForgotP1;
