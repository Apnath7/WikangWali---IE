import { useState, useCallback } from "react";
import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDCONTACTPARENT.css";
import { Icon } from "@iconify/react";

const DASHBOARDCONTACTPARENT = () => {
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

  const onDotsClick = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-contact-parent_CP">
        <div className="group-parent23_CP">
          <div className="group-parent24_CP">
            <div className="group-parent24_CP">
              <div className="group-child36_CP" />
              <div className="contact-us-parent10_CP">
                <button className="contact-us14_CP" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner4_CP"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent11_CP">
                    <div className="contact-us21_HP">Contact Us</div>
                      <Icon className="vector-icon67_HP" icon="mdi:about-circle-outline" color="white" />
                    </div>
                  </div>
                </button>
                <button className="progress14_CP" onClick={onProgressClick}>
                  <div
                    className="vector-parent24_CP"
                    onClick={onGroupContainer2Click}
                  >
                    <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress15">Progress</div>
                  </div>
                </button>
                <div className="vector-parent25_CP">
                <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode9_CP">Parent Mode</div>
                </div>
                <div className="home-parent6_CP">
                  <div className="home10_CP">Home</div>
                  <Icon className="vector-icon70_HP" alt="" icon="material-symbols-light:home-outline" />
                </div>
              </div>
            </div>
            <button className="courses17_CP" onClick={onCoursesClick}>
              <div className="vector-parent26_CP" onClick={onGroupContainer7Click}>
              <Icon className="vector-icon71_HP" alt="" icon="carbon:course" color="white" />
                <div className="courses18_CP">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings18_CP" onClick={onSettingsClick}>
            <div className="group-parent25_CP" onClick={onGroupContainer9Click}>
              <Icon className="group-icon12_HP" alt="" icon="solar:settings-outline" color="white" />
              <div className="settings19_CP">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-contact-parent-child_CP" />
        <div className="dashboard-contact-parent-item_CP" />
        <img
          className="microsoftteams-image-1-15_CP"
          alt=""
          src="/wikangwali.png"
        />
        <div className="rectangle-parent26_CP">
          <div className="group-child37_CP" />
          <div className="group-child38_CP" />
          <img className="group-child39_CP" alt="" src="/mother.png.png" />
          <div className="marie-antoinette-cruz-container_CP">
            <p className="marie-antoinette-cruz_CP">Marie ANTOINETTE CRUZ</p>
          </div>
        </div>
        
        <button className="dots_HP" onClick={onDotsClick}>
          <div className="dots-child_HP" />
          <div className="dots-item_HP" />
          <div className="dots-inner_HP" />
        </button>
        <div className="dashboard-contact-parent-child1_CP" />
        <div className="dashboard-contact-parent-child2_CP" />
        <div className="email-adress_CP">Email Adress:</div>
        <div className="dashboard-contact-parent-child3_CP" />
        <div className="contact_CP">Contact:</div>
        <div className="dashboard-contact-parent-child4_CP" />
        <div className="address_CP">Address:</div>
        <a
          className="marieantoinettecruzyahoocom_CP"
          href="mailto:MarieAntoinetteCruz@yahoo.com"
          target="_blank"
        >
          MarieAntoinetteCruz@yahoo.com
        </a>
        <div className="div9_CP">08346723423</div>
        <div className="springtree-cebu-city_CP">SpringTree Cebu City</div>
        <Icon className="vector-icon53_CP" alt="" icon="mdi:pencil" />
        <Icon className="vector-icon54_CP" alt="" icon="mdi:pencil" />
        <Icon className="vector-icon55_CP" alt="" icon="mdi:pencil" />
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

export default DASHBOARDCONTACTPARENT;
