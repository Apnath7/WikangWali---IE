import { useState, useCallback } from "react";
import StudentMode from "../components/StudentMode";
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
      <div className="dashboard-parent-progress_PG">
        <div className="rectangle-parent32_PG">
          <div className="group-child51_PG" />
          <div className="contact-us-parent14_PG">
            <button className="contact-us18_PG" onClick={onContactUsClick}>
              <div
                className="contact-us-inner6_PG"
                onClick={onGroupContainer1Click}
              >
                <div className="contact-us-parent15_PG">
                <div className="contact-us21_HP">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                </div>
              </div>
            </button>
            <button className="progress19_PG">
              <div className="vector-parent30_PG">
              <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress22_HP">Progress</div>
              </div>
            </button>
            <div className="vector-parent31_PG">
            <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
            </div>
          </div>
        </div>
        <div className="dashboard-parent-progress-child_PG" />
        <div className="dashboard-parent-progress-item_PG" />
        <div className="rectangle-statistics_PG" />
        <div className="dashboard-parent-progress-inner_PG">
          <div className="group-child52_PG" />
        </div>
        <div className="progress-tracker_PG">Progress Tracker</div>
        <Icon
          className="charmgraduate-cap-icon_PG"
          alt=""
          icon="charm:graduate-cap_PG" color="gray"
        />
        <div className="gelu-marie-ursal_PG">Dawn Marie Gumagay</div>
        <div className="student2_PG">Parent</div>
        <div className="eggs2_PG">
          <img className="noto-v1egg-icon_PG" alt="" src="/grayegg.png" />
          <Icon className="noto-v1egg-icon_PG" alt="" icon="noto-v1:egg" />
          <img className="noto-v1egg-icon_PG" alt="" src="/goldenegg.png" />
        </div>
        <div className="line-div_PG" />
        <div className="circular-progress-parent_PG">
          <img
            className="circular-progress-icon_PG"
            alt=""
            src="/progress.png"
          />
          <div className="summary_PG">Summary</div>
          <div className="gelus-average-study_PG">Gelu’s Average Study Time</div>
          <div className="awards_PG">Awards</div>
          <div className="percentageprogress_PG">
            <div className="group_PG">
              <div className="div10_PG">25%</div>
              <div className="to-begin_PG">to begin</div>
            </div>
            <div className="container_PG">
              <div className="div10_PG">25%</div>
              <div className="to-begin_PG">in progress</div>
            </div>
            <div className="parent1_PG">
              <div className="div10_PG">50%</div>
              <div className="to-begin_PG">completed</div>
            </div>
          </div>
          <div className="circle-colors_PG">
            <div className="circle-colors-inner_PG">
              <div className="frame-child5_PG" />
            </div>
            <div className="circle-colors-inner_PG">
              <div className="frame-child6_PG" />
            </div>
            <div className="circle-colors-inner_PG">
              <div className="frame-child7_PG" />
            </div>
          </div>
        </div>
        <div className="sun_PG">Sun</div>
        <div className="min_PG">10min</div>
        <div className="min1_PG">15min</div>
        <div className="min2_PG">20min</div>
        <div className="min3_PG">25min</div>
        <div className="min4_PG">30min</div>
        <div className="min5_PG">35min</div>
        <div className="mon_PG">Mon</div>
        <div className="tue_PG">Tue</div>
        <div className="wed_PG">Wed</div>
        <div className="thu_PG">Thu</div>
        <div className="fri_PG">Fri</div>
        <div className="sat_PG">Sat</div>
        <img
          className="microsoftteams-image-1-3_PG"
          alt=""
          src="/wikangwali.png"
        />
        <Icon className="tablerdots-icon_PG" alt="" icon="tabler:dots" />
        <div className="div13_PG">_________________________________________</div>
        <div className="div14_PG">_________________________________________</div>
        <div className="div15_PG">_________________________________________</div>
        <div className="div16_PG">_________________________________________</div>
        <div className="div17_PG">_________________________________________</div>
        <div className="div18_PG">_________________________________________</div>
        <div className="dashboard-parent-progress-child1_PG" />
        <div className="dashboard-parent-progress-child2_PG" />
        <div className="dashboard-parent-progress-child3_PG" />
        <div className="dashboard-parent-progress-child4_PG" />
        <div className="dashboard-parent-progress-child5_PG" />
        <div className="dashboard-parent-progress-child6_PG" />
        <div className="dashboard-parent-progress-child7_PG" />
        <div className="dashboard-parent-progress-child8_PG" />
        <div className="rectangle-parent33_PG">
          <div className="group-child53_PG" />
          <div className="kurso-2-pagsasalita1_PG">
            Kurso 2: Pagsasalita at Pagsusulat
          </div>
          <img
            className="microsoftteams-image-5-1_PG"
            alt=""
            src="undefined74.png"
          />
          <div className="in-progress2_PG">in progress</div>
          <div className="group-child54_PG" />
        </div>
        <div className="rectangle-parent34_PG">
          <div className="group-child53_PG" />
          <div className="kurso-2-pagsasalita1_PG">
            Kurso 1: Pambungad sa Wikang Filipino
          </div>
          <div className="in-progress2_PG">completed</div>
          <div className="group-child56_PG" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon_PG"
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
        <button className="courses21_PG" onClick={onCoursesClick}>
          <div className="vector-parent32_PG" onClick={onGroupContainer12Click}>
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
