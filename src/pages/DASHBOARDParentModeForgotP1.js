import { useState, useCallback } from "react";
//import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDParentModeForgotP1.css";
import { Icon } from "@iconify/react";

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
      <div className="dashboard-parentmode-forgot-p1_P1">
        <div className="group-parent16_P1">
          <div className="group-parent17_P1">
            <div className="group-parent17_P1">
              <div className="group-child24_P1" />
              <div className="contact-us-parent4_P1">
                <button className="contact-us7_P1" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner1_P1"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent5_P1">
                      <div className="contact-us8_P1">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                    </div>
                  </div>
                </button>
                <button className="progress8_P1" onClick={onProgressClick}>
                  <div
                    className="vector-parent13_P1"
                    onClick={onGroupContainer2Click}
                  >
                    <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress9_P1">Progress</div>
                  </div>
                </button>
                <div className="vector-parent34_HP">
                  <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
                </div>
                <div className="home-parent3_P1">
                  <div className="home6_P1">Home</div>
                  <Icon className="vector-icon70_HP" alt="" icon="material-symbols-light:home-outline" />
                </div>
              </div>
            </div>
            <button className="courses10_P1" onClick={onCoursesClick}>
              <div className="vector-parent15_P1" onClick={onGroupContainer7Click}>
              <Icon className="vector-icon71_HP" alt="" icon="carbon:course" color="white" />
                <div className="courses11_P1">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings12_P1" onClick={onSettingsClick}>
            <div className="group-parent18_P1" onClick={onGroupContainer9Click}>
            <Icon className="group-icon12_HP" alt="" icon="solar:settings-outline" color="white" />
              <div className="settings13_P1">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-parentmode-forgot-p-child4_P1" />
        <div className="dashboard-parentmode-forgot-p-inner2_P1">
          <div className="rectangle-wrapper2_P1">
            <div className="group-child25_P1" />
          </div>
        </div>
        <img
          className="microsoftteams-image-1-12_P1"
          alt=""
          src="/wikangwali.png"
        />
        <div className="dashboard-parentmode-forgot-p-child5_P1" />
        <img
          className="dashboard-parentmode-forgot-p-child6_P1"
          alt=""
          src="/mother.png.png"
        />
        <div className="marie4_P1">
          <p className="marie5_P1">Marie</p>
        </div>
        <div className="mother2_P1">Mother</div>
        <img className="vector-icon31_P1" alt="" src="/vector5.svg" />
        <div
          className="dashboard-parentmode-forgot-p-child7_P1"/>
        <div
          className="dashboard-parentmode-forgot-p-child8_P1"/>
        <input className="rectangle-email1_P1" type="text" />
        <b className="enter-email-address_P1">Enter Email Address</b>
        <input className="rectangle-email2_P1" type="text" />
        <b className="enter-new-password_P1">Enter New Password</b>
        <div className="change-wrapper_P1" onClick={onGroupContainer13Click}>
          <button className="change_P1">
            CHANGE
          </button>
        </div>
        <img className="image-45-icon_P1" alt="" src="/detectivebird.png" />
        <button className="return-arrow_P1" onClick={onReturnArrowClick}>
          <Icon
            className="vector-icon32_P1"
            alt=""
            icon="mingcute:back-fill" color="white"
            onClick={onVectorIcon4Click}
          />
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

export default DASHBOARDParentModeForgotP1;
