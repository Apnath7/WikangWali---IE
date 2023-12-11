import { useState, useCallback } from "react";
//import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDHOMEPARETNT.css";

const DASHBOARDHOMEPARETNT = () => {
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
    navigate("/21-dashboard-contact-parent");
  }, [navigate]);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-home-paretnt">
        <div className="group-parent29">
          <div className="group-parent30">
            <div className="group-parent30">
              <div className="group-child59" />
              <div className="contact-us-parent16">
                <button className="contact-us20" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner7"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent17">
                      <div className="contact-us21">Contact Us</div>
                      <img className="vector-icon67" alt="" src="/vector.svg" />
                    </div>
                  </div>
                </button>
                <button className="progress21" onClick={onProgressClick}>
                  <div
                    className="vector-parent33"
                    onClick={onGroupContainer2Click}
                  >
                    <img className="vector-icon68" alt="" src="/vector1.svg" />
                    <div className="progress22">Progress</div>
                  </div>
                </button>
                <div className="vector-parent34">
                  <img className="vector-icon69" alt="" src="/vector2.svg" />
                  <div className="parent-mode12">Parent Mode</div>
                </div>
                <div className="home-parent9">
                  <div className="home15">Home</div>
                  <img className="vector-icon70" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <button className="courses23" onClick={onCoursesClick}>
              <div className="vector-parent35" onClick={onGroupContainer7Click}>
                <img className="vector-icon71" alt="" src="/vector4.svg" />
                <div className="courses24">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings24" onClick={onSettingsClick}>
            <div className="group-parent31" onClick={onGroupContainer9Click}>
              <img className="group-icon12" alt="" src="/group.svg" />
              <div className="settings25">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-home-paretnt-child" />
        <div className="dashboard-home-paretnt-item" />
        <img
          className="microsoftteams-image-1-17"
          alt=""
          src="/microsoftteamsimage-1-1@2x.png"
        />
        <img
          className="dashboard-home-paretnt-inner"
          alt=""
          src="/rectangle-83.svg"
        />
        <div className="rectangle-parent37">
          <div className="group-child60" />
          <div className="group-child61" />
          <img className="group-child62" alt="" src="/ellipse-12@2x.png" />
          <div className="marie-antoinette-cruz-container3">
            <p className="marie-antoinette-cruz3">Marie ANTOINETTE CRUZ</p>
          </div>
        </div>
        <img className="vector-icon72" alt="" src="/vector5.svg" />
        <div className="sat-parent">
          <div className="sat1">Sat</div>
          <div className="rectangle-parent38">
            <div className="group-child63" />
            <div className="gelus-average-study1">
              Gelu’s Average Study Time
            </div>
            <div className="sun1">Sun</div>
            <div className="min6">10min</div>
            <div className="min7">15min</div>
            <div className="min8">20min</div>
            <div className="min9">25min</div>
            <div className="min10">30min</div>
            <div className="min11">35min</div>
            <div className="mon1">Mon</div>
            <div className="tue1">Tue</div>
            <div className="wed1">Wed</div>
            <div className="thu1">Thu</div>
            <div className="fri1">Fri</div>
            <div className="div19">
              _________________________________________
            </div>
            <div className="div20">
              _________________________________________
            </div>
            <div className="div21">
              _________________________________________
            </div>
            <div className="div22">
              _________________________________________
            </div>
            <div className="div23">
              _________________________________________
            </div>
            <div className="div24">
              _________________________________________
            </div>
            <div className="group-child64" />
            <div className="group-child65" />
            <div className="group-child66" />
            <div className="group-child67" />
            <div className="group-child68" />
            <div className="group-child69" />
          </div>
          <div className="group-child70" />
        </div>
        <button className="dots" onClick={onDotsClick}>
          <div className="dots-child" />
          <div className="dots-item" />
          <div className="dots-inner" />
        </button>
        <div className="dashboard-home-paretnt-child1" />
        <div className="rectangle-parent39">
          <div className="group-child71" />
          <div className="kurso-1-pambungad-container">
            <span className="sa">{`Kurso 1: `}</span>
            <span className="pambungad">Pambungad</span>
            <span className="sa">{` sa `}</span>
            <span className="pambungad">Wikang</span>
            <span className="sa"> Filipino</span>
          </div>
          <div className="completed8">completed</div>
          <div className="group-child72" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon1"
            alt=""
            src="/-ca88b0e1977b445399bab1a77caee010-11@2x.png"
          />
        </div>
        <div className="rectangle-parent40">
          <div className="group-child73" />
          <div className="kurso-1-pambungad-container">
            <span className="kurso-2-pagsasalita2">
              Kurso 2: Pagsasalita at
            </span>
            <b>{` `}</b>
            <span className="sa">Pagsusulat</span>
          </div>
          <div className="in-progress3">in progress</div>
        </div>
        <div className="ellipse-group">
          <div className="group-child74" />
          <img
            className="microsoftteams-image-5-11"
            alt=""
            src="/microsoftteamsimage-5-11@2x.png"
          />
        </div>
        <button className="rectangle-parent41" onClick={openStudentMode}>
          <div className="group-child75" />
          <img className="group-child76" alt="" src="/ellipse-5.svg" />
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

export default DASHBOARDHOMEPARETNT;
