import { useState, useCallback } from "react";
//import Frame from "../components/Frame";
import PortalPopup from "../components/PortalPopup";
//import StudentMode from "../components/StudentMode";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPARENTCONTACTUS.css";
import { Icon } from "@iconify/react";

const DASHBOARDPARENTCONTACTUS = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isStudentModeOpen, setStudentModeOpen] = useState(false);
  const navigate = useNavigate();

  const onProgressClick = useCallback(() => {
    navigate("/21-dashboard-parent-progress");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/21-dashboard-parent-progress");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-parent-contact-us_CUS">
        <div className="rectangle-parent22_CUS">
          <div className="group-child32_CUS" />
          <div className="contact-us-parent8_CUS">
            <button className="contact-us11_CUS">
              <div className="contact-us-inner3_CUS">
                <div className="contact-us-parent9_CUS">
                  <div className="contact-us12_CUS">Contact Us</div>
                  <Icon className="vector-icon39_CUS" alt="" icon="mdi:about-circle-outline" color="white" />
                </div>
              </div>
            </button>
            <button className="progress12_CUS" onClick={onProgressClick}>
              <div className="vector-parent19_CUS" onClick={onGroupContainer2Click}>
                <Icon className="vector-icon40_CUS" alt="" icon="material-symbols:progress-activity" color="white"/>
                <div className="progress13_CUS">Progress</div>
              </div>
            </button>
            <div className="vector-parent20_CUS">
              <Icon className="vector-icon41_CUS" alt="" icon="ri:parent-line" color="#F24E1E" />
              <div className="parent-mode8_CUS">Parent Mode</div>
            </div>
          </div>
        </div>
        <div className="dashboard-parent-contact-us-child_CUS" />
        <img
          className="microsoftteams-image-1-14_CUS"
          alt=""
          src="/wikangwali.png"
        />
        <img className="vector-icon42_CUS" alt="" src="/vector5.svg" />
        <div className="dashboard-parent-contact-us-item_CUS" />
        <div className="contact-us13_CUS">Contact us</div>
        <div className="any-questions-or_CUS">
          Any questions or remarks? Just write us a message
        </div>
        <input type="email" className="div5_CUS" placeholder="Email"/>
        <input type="text" className="div7_CUS" placeholder="Name"/>
         
        <textarea className="div6_CUS" placeholder="Message"/>

        
        
        <div className="call-us-bird_CUS">
          <div className="call-us-bird-child_CUS" />
          <img
            className="callusBird_CUS"
            alt=""
            src="/callusBird.png"
          />
        </div>
        <div className="vector-parent21_CUS">
          <Icon className="vector-icon43_CUS" alt="" icon="ion:call" color="#38B7FE" />
          <div className="div8_CUS">+639870000000</div>
        </div>
        <div className="vector-parent22_CUS">
          <Icon className="vector-icon44_CUS" alt="" icon="ic:baseline-email" color="#38B7FE" />
          <div className="wikangwaligmailcom_CUS">wikangwali@gmail.com</div>
        </div>
        <div className="for-more-contact_CUS">for more contact information</div>
        <button className="rectangle-parent23_CUS" onClick={openFrame}>
          <div className="group-child33_CUS" />
          <div className="submit_CUS">Submit</div>
        </button>
        <button className="home8_CUS" onClick={onHomeClick}>
          <div className="home-parent5_CUS" onClick={onGroupContainer8Click}>
            <div className="home9_CUS">Home</div>
            <Icon className="vector-icon45_CUS" alt="" icon="material-symbols-light:home-outline" color="white"/>
          </div>
        </button>
        <button className="settings16_CUS" onClick={onSettingsClick}>
          <div className="group-parent22_CUS" onClick={onGroupContainer9Click}>
            <Icon className="group-icon8_CUS" alt="" icon="solar:settings-outline" color="white"/>
            <div className="settings17_CUS">Settings</div>
          </div>
        </button>
        <button className="courses14_CUS" onClick={onCoursesClick}>
          <div className="vector-parent23_CUS" onClick={onGroupContainer10Click}>
            <Icon className="vector-icon46_CUS" alt="" icon="carbon:course" color="white" />
            <div className="courses15_CUS">Courses</div>

          </div>
        </button>
        <button className="rectangle-parent24_CUS" onClick={openStudentMode}>
          <Icon className="group-child35_CUS" alt="" icon="twemoji:white-circle" />
        </button>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
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

export default DASHBOARDPARENTCONTACTUS;
