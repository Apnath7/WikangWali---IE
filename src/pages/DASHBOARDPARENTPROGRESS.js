import { useState, useCallback } from "react";
//import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPARENTPROGRESS.css";
import { Icon } from "@iconify/react";

const DASHBOARDPARENTPROGRESS = () => {
  const [isStudentModeOpen, setStudentModeOpen] = useState(false);
  const navigate = useNavigate();

  const onContactUsClick = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/22-dashboard-parent-courses");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
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
      <div className="dashboard-parent-progress">
        <div className="rectangle-parent32">
          <div className="group-child51" />
          <div className="contact-us-parent14">
            <button className="contact-us18" onClick={onContactUsClick}>
              <div
                className="contact-us-inner6"
                onClick={onGroupContainer1Click}
              >
                <div className="contact-us-parent15">
                <div className="contact-us21_HP">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                </div>
              </div>
            </button>
            <button className="progress19">
              <div className="vector-parent30">
              <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress22_HP">Progress</div>
              </div>
            </button>
            <div className="vector-parent31">
            <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
            </div>
          </div>
        </div>
        <div className="dashboard-parent-progress-child" />
        <div className="dashboard-parent-progress-item" />
        <div className="rectangle-statistics" />
        <div className="dashboard-parent-progress-inner">
          <div className="group-child52" />
        </div>
        <div className="progress-tracker">Progress Tracker</div>
        <Icon
          className="charmgraduate-cap-icon"
          alt=""
          icon="charm:graduate-cap" color="gray"
        />
        <div className="gelu-marie-ursal">Gelu Marie Ursal</div>
        <div className="student2">Student</div>
        <div className="eggs2">
          <img className="noto-v1egg-icon" alt="" src="/grayegg.png" />
          <Icon className="noto-v1egg-icon" alt="" icon="noto-v1:egg" />
          <img className="noto-v1egg-icon" alt="" src="/goldenegg.png" />
        </div>
        <div className="line-div" />
        <div className="circular-progress-parent">
          <img
            className="circular-progress-icon"
            alt=""
            src="/progress.png"
          />
          <div className="summary">Summary</div>
          <div className="gelus-average-study">Gelu’s Average Study Time</div>
          <div className="awards">Awards</div>
          <div className="percentageprogress">
            <div className="group">
              <div className="div10">25%</div>
              <div className="to-begin">to begin</div>
            </div>
            <div className="container">
              <div className="div10">25%</div>
              <div className="to-begin">in progress</div>
            </div>
            <div className="parent1">
              <div className="div10">50%</div>
              <div className="to-begin">completed</div>
            </div>
          </div>
          <div className="circle-colors">
            <div className="circle-colors-inner">
              <div className="frame-child5" />
            </div>
            <div className="circle-colors-inner">
              <div className="frame-child6" />
            </div>
            <div className="circle-colors-inner">
              <div className="frame-child7" />
            </div>
          </div>
        </div>
        <div className="sun">Sun</div>
        <div className="min">10min</div>
        <div className="min1">15min</div>
        <div className="min2">20min</div>
        <div className="min3">25min</div>
        <div className="min4">30min</div>
        <div className="min5">35min</div>
        <div className="mon">Mon</div>
        <div className="tue">Tue</div>
        <div className="wed">Wed</div>
        <div className="thu">Thu</div>
        <div className="fri">Fri</div>
        <div className="sat">Sat</div>
        <img
          className="microsoftteams-image-1-3"
          alt=""
          src="/wikangwali.png"
        />
        <Icon className="tablerdots-icon" alt="" icon="tabler:dots" />
        <div className="div13">_________________________________________</div>
        <div className="div14">_________________________________________</div>
        <div className="div15">_________________________________________</div>
        <div className="div16">_________________________________________</div>
        <div className="div17">_________________________________________</div>
        <div className="div18">_________________________________________</div>
        <div className="dashboard-parent-progress-child1" />
        <div className="dashboard-parent-progress-child2" />
        <div className="dashboard-parent-progress-child3" />
        <div className="dashboard-parent-progress-child4" />
        <div className="dashboard-parent-progress-child5" />
        <div className="dashboard-parent-progress-child6" />
        <div className="dashboard-parent-progress-child7" />
        <div className="dashboard-parent-progress-child8" />
        <div className="rectangle-parent33">
          <div className="group-child53" />
          <div className="kurso-2-pagsasalita1">
            Kurso 2: Pagsasalita at Pagsusulat
          </div>
          <img
            className="microsoftteams-image-5-1"
            alt=""
            src="undefined74.png"
          />
          <div className="in-progress2">in progress</div>
          <div className="group-child54" />
        </div>
        <div className="rectangle-parent34">
          <div className="group-child53" />
          <div className="kurso-2-pagsasalita1">
            Kurso 1: Pambungad sa Wikang Filipino
          </div>
          <div className="in-progress2">completed</div>
          <div className="group-child56" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon"
            alt=""
            src="/undefined61.png"
          />
        </div>
        <button className="home8_CUS" onClick={onHomeClick}>
          <div className="home-parent5_CUS" onClick={onGroupContainer10Click}>
            <div className="home9_CUS">Home</div>
            <Icon className="vector-icon45_CUS" alt="" icon="material-symbols-light:home-outline" color="white"/>
          </div>
        </button>
        <button className="settings16_CUS" onClick={onSettingsClick}>
          <div className="group-parent22_CUS" onClick={onGroupContainer11Click}>
            <Icon className="group-icon8_CUS" alt="" icon="solar:settings-outline" color="white"/>
            <div className="settings17_CUS">Settings</div>
          </div>
        </button>
        <button className="courses21" onClick={onCoursesClick}>
          <div className="vector-parent32" onClick={onGroupContainer12Click}>
          <Icon className="vector-icon71_HP" alt="" icon="carbon:course" color="white" />
                <div className="courses24_HP">Courses</div>
          </div>
        </button>
        <button className="rectangle-parent24_CUS" onClick={openStudentMode}>
          <Icon className="group-child35_CUS" alt="" icon="twemoji:white-circle" />
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

export default DASHBOARDPARENTPROGRESS;
