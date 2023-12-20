import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./DASHBOARDLESSONS.css";
const DASHBOARDLESSONS = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onCoursesClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "16- DASHBOARD -ParentMode Login" to the project
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onStartCourseClick = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-lessons_LNS">
        <div className="containerButton_LNS">
          <div className="blueHover_LNS" />
          <div className="buttonGroup_LNS">
            <button className="courses6" onClick={onCoursesClick}>
                <div className="vector-parent27">
                  <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
                  <div className="courses7">Courses</div>
                </div>
              </button>
              <button className="progress12" onClick={onProgressClick}>
                <div className="vector-parent28">
                  <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                  <div className="progress13">Progress</div>
                </div>
              </button>
              <button className="settings6_EX1" onClick={onSettingsClick}>
                <div className="group-parent24">
                  <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                  <div className="settings13">Settings</div>
                </div>
              </button>
            <div className="parent-mode8_LNS">
              <div className="vector-parent14_LNS">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode9_LNS">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent24_LNS"
                onClick={onGroupButtonClick}
              >
                <div className="group-child71_LNS" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home8_LNS" onClick={onHomeClick}>
              <div className="home-parent2_LNS">
                <div className="home9_LNS">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled4_LNS" />
        <div className="dashboard-lessons-child_LNS" />
        <div className="dashboard-lessons-item_LNS" />
        <img
          className="microsoftteams-image-1-24_LNS"
          alt=""
          src="/undefined44.png"
        />
      
        <div
          className="dashboard-lessons-child1_LNS"
          alt=""
          src="/undefined64.png"
        />
        <img
          className="dashboard-lessons-child2_LNS"
          alt="" 
          src="/undefined65.png"
        />
        <div className="kurso-1-pambungad-container5_LNS">
          <p className="startCourse_LNS">Kurso 1</p>
          <p className="pambungad-sa-wikang_LNS">Pambungad sa Wikang Filipino</p>
        </div>
        <div className="introduction-to-filipino_LNS">
          Introduction to Filipino Language
        </div>
        <img
          className="ca88b0e1-977b-4453-99ba-b1a77c-icon2_LNS"
          alt=""
          src="/undefined66.png"
        />
        <button className="start-course_LNS" onClick={onStartCourseClick}>
          <div
            className="start-course-child_LNS"
            alt=""
            src="/undefined67.png"
            onClick={onRectangle7Click}
          />
          <div className="start-course1_LNS">
            <p className="start_LNS">START COURSE</p>
            <p className="start_LNS">COURSE</p>
          </div>
        </button>
        <div className="aralin-1-pagbati-container4_LNS">
          <ul className="aralin-1-pagbati_LNS">
            Aralin 1: Pagbati at Karaniwang Pananalita Aralin
          </ul>
        </div>
        <img
          className="dashboard-lessons-child3_LNS"
          alt=""
          src="/undefined65.png"
        />
        <div className="aralin-1-pagbati-container5_LNS">
          <ul className="aralin-1-pagbati">
            Aralin 1: Pagbati at Karaniwang Pananalita Aralin
          </ul>
        </div>
        <div className="vector-parent15_LNS">
          <div className="group-child73_LNS" alt="" src="/undefined68.png" />
          <div className="aralin-3-payak-container_LNS">
            <ul className="aralin-1-pagbati_LNS">{`Aralin 3: Payak na Balangkas ng Pangungusap `}</ul>
          </div>
        </div>
        <div className="vector-parent16_LNS">
          <div className="group-child73_LNS" alt="" src="/undefined68.png" />
          <div className="aralin-4-pamilya-container_LNS">
            <ul className="aralin-1-pagbati_LNS">{`Aralin 4: Pamilya at mga Ugnayan `}</ul>
          </div>
        </div>
        <div className="vector-parent17_LNS">
          <div className="group-child73_LNS" alt="" src="/undefined68.png" />
          <div className="aralin-2-batayang-container_LNS">
            <ul className="aralin-1-pagbati_LNS">
              Aralin 2: Batayang Bokabularyo at mga Bilang
            </ul>
          </div>
        </div>
        <div className="vector-parent18_LNS">
          <div className="group-child73_LNS" alt="" src="/undefined68.png" />
          <div className="aralin-1-pagbati-container6_LNS">
            <ul className="aralin-1-pagbati_LNS">
              Aralin 1: Pagbati at Karaniwang Pananalita Aralin
            </ul>
          </div>
        </div>
        <button className="return-arrow4_LNS" onClick={onReturnArrowClick}>
          <Icon icon="mingcute:back-fill" color="white" className="return-arrow-icon_LNS" alt="" src="/undefined69.png" />
        </button>
        <div className="rectangle-parent25_LNS">
          <div className="group-child77_LNS" />
          <div className="vector-parent19_LNS">
            <div className="group-child78_LNS" alt=""/>
            <b className="gelu-ursal4_LNS">Gelu Ursal</b>
            <img
              className="microsoftteams-image-1-72_LNS"
              alt=""
              src="/undefined47.png"
            />
            <Icon className="bellIcon" alt="" icon="ph:bell-fill" color="black" />
            <Icon className="arrowdown" alt="" icon="bxs:down-arrow" />
          </div>
          <div className="group-wrapper4_LNS">
            <div className="kurso-parent_LNS">
              <div className="kurso_LNS">kurso</div>
              <Icon icon="carbon:course" className="vector-icon47_LNS" alt="" />
            </div>
          </div>
        </div>
        <div className="dashboard-lessons-child4_LNS"></div>
          
        <button className="logout4_LNS" onClick={openLogoutPopup}>
          <div className="group-parent18_LNS">
            <div className="group-parent19_LNS">
              <div className="rectangle-sign-in-button-wrapper2_LNS">
                <div className="rectangle-sign-in-button4_LNS" />
              </div>
              <div className="log-out5_LNS">Log Out</div>
            </div>
            <Icon className="group-icon24" alt="" icon="carbon:logout" color="white" />
          </div>
        </button>
      </div>
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

export default DASHBOARDLESSONS;
