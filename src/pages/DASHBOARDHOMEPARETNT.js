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
      <div className="dashboard-home-parent_HP">
        <div className="group-parentmode29_HP">
          <div className="group-parentmode30_HP">
            <div className="group-parentmode30_HP">
              <div className="group-child59_HP" />
              <div className="contact-us-parent16_HP">
                <button className="contact-us20_HP" onClick={onContactUsClick}>
                  <div
                    className="contact-us-inner7_HP"
                    onClick={onGroupContainer1Click}
                  >
                    <div className="contact-us-parent17_HP">
                      <div className="contact-us21_HP">Contact Us</div>
                      <img className="vector-icon67_HP" alt="" src="/vector.svg" />
                    </div>
                  </div>
                </button>
                <button className="progress21_HP" onClick={onProgressClick}>
                  <div
                    className="vector-parent33_HP"
                    onClick={onGroupContainer2Click}
                  >
                    <img className="vector-icon68_HP" alt="" src="/vector1.svg" />
                    <div className="progress22_HP">Progress</div>
                  </div>
                </button>
                <div className="vector-parent34_HP">
                  <img className="vector-icon69_HP" alt="" src="/vector2.svg" />
                  <div className="parent-mode12_HP">Parent Mode</div>
                </div>
                <div className="home-parent9_HP">
                  <div className="home15_HP">Home</div>
                  <img className="vector-icon70_HP" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <button className="courses23_HP" onClick={onCoursesClick}>
              <div className="vector-parent35_HP" onClick={onGroupContainer7Click}>
                <img className="vector-icon71_HP" alt="" src="/vector4.svg" />
                <div className="courses24_HP">Courses</div>
              </div>
            </button>
          </div>
          <button className="settings24_HP" onClick={onSettingsClick}>
            <div className="group-parent31_HP" onClick={onGroupContainer9Click}>
              <img className="group-icon12_HP" alt="" src="/group.svg" />
              <div className="settings25_HP">Settings</div>
            </div>
          </button>
        </div>
        <div className="dashboard-home-paretnt-child_HP" />
        <div className="dashboard-home-paretnt-item_HP" />
        <img
          className="microsoftteams-image-1-17_HP"
          alt=""
          src="/microsoftteamsimage-1-1@2x.png"
        />
        <img
          className="dashboard-home-paretnt-inner_HP"
          alt=""
          src="/rectangle-83.svg"
        />
        <div className="rectangle-parent37_HP">
          <div className="group-child60_HP" />
          <div className="group-child61_HP" />
          <img className="group-child62_HP" alt="" src="/ellipse-12@2x.png" />
          <div className="marie-antoinette-cruz-container3_HP">
            <p className="marie-antoinette-cruz3_HP">Marie ANTOINETTE CRUZ</p>
          </div>
        </div>
        <img className="vector-icon72_HP" alt="" src="/vector5.svg" />
        <div className="sat-parent_HP">
          <div className="sat1_HP">Sat</div>
          <div className="rectangle-parent38_HP">
            <div className="group-child63_HP" />
            <div className="gelus-average-study1_HP">
              Gelu’s Average Study Time
            </div>
            <div className="sun1_HP">Sun</div>
            <div className="min6_HP">10min</div>
            <div className="min7_HP">15min</div>
            <div className="min8_HP">20min</div>
            <div className="min9_HP">25min</div>
            <div className="min10_HP">30min</div>
            <div className="min11_HP">35min</div>
            <div className="mon1_HP">Mon</div>
            <div className="tue1_HP">Tue</div>
            <div className="wed1_HP">Wed</div>
            <div className="thu1_HP">Thu</div>
            <div className="fri1_HP">Fri</div>
            <div className="div19_HP">
              _________________________________________
            </div>
            <div className="div20_HP">
              _________________________________________
            </div>
            <div className="div21_HP">
              _________________________________________
            </div>
            <div className="div22_HP">
              _________________________________________
            </div>
            <div className="div23_HP">
              _________________________________________
            </div>
            <div className="div24_HP">
              _________________________________________
            </div>
            <div className="group-child64_HP" />
            <div className="group-child65_HP" />
            <div className="group-child66_HP" />
            <div className="group-child67_HP" />
            <div className="group-child68_HP" />
            <div className="group-child69_HP" />
          </div>
          <div className="group-child70_HP" />
        </div>
        <button className="dots_HP" onClick={onDotsClick}>
          <div className="dots-child_HP" />
          <div className="dots-item_HP" />
          <div className="dots-inner_HP" />
        </button>
        <div className="dashboard-home-paretnt-child1_HP" />
        <div className="rectangle-parent39_HP">
          <div className="group-child71_HP" />
          <div className="kurso-1-pambungad-container_HP">
            <span className="sa_HP">{`Kurso 1: `}</span>
            <span className="pambungad_HP">Pambungad</span>
            <span className="sa_HP">{` sa `}</span>
            <span className="pambungad_HP">Wikang</span>
            <span className="sa_HP"> Filipino</span>
          </div>
          <div className="completed8_HP">completed</div>
          <div className="group-child72_HP" />
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon1_HP"
            alt=""
            src="/-ca88b0e1977b445399bab1a77caee010-11@2x.png"
          />
        </div>
        <div className="rectangle-parent40_HP">
          <div className="group-child73_HP" />
          <div className="kurso-1-pambungad-container_HP">
            <span className="kurso-2-pagsasalita2_HP">
              Kurso 2: Pagsasalita at
            </span>
            <b>{` `}</b>
            <span className="sa_HP">Pagsusulat</span>
          </div>
          <div className="in-progress3_HP">in progress</div>
        </div>
        <div className="ellipse-group_HP">
          <div className="group-child74_HP" />
          <img
            className="microsoftteams-image-5-11_HP"
            alt=""
            src="/microsoftteamsimage-5-11@2x.png"
          />
        </div>
        <button className="rectangle-parent41_HP" onClick={openStudentMode}>
          <div className="group-child75_HP" />
          <img className="group-child76_HP" alt="" src="/ellipse-5.svg" />
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
