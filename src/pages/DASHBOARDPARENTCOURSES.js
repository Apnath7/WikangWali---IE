import { useState, useCallback } from "react";
import StudentMode from "../components/StudentMode";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDPARENTCOURSES.css";
import { Icon } from "@iconify/react";

const DASHBOARDPARENTCOURSES = () => {
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

  const onHomeClick = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/20-dashboard-home-paretnt");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/14-dashboard-parent-settings");
  }, [navigate]);

  const onDotsClick = useCallback(() => {
    navigate("/21-dashboard-contact-parent");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aralin1Pagbati']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openStudentMode = useCallback(() => {
    setStudentModeOpen(true);
  }, []);

  const closeStudentMode = useCallback(() => {
    setStudentModeOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-parent-courses_PC">
        <div className="group-parent26_PC">
          <div className="rectangle-parent29_PC">
            <div className="group-child45_PC" />
            <div className="contact-us-parent12_PC">
            <button className="contact-us11_CUS">
                <div
                  className="contact-us-inner5_PC"
                  onClick={onGroupContainer1Click}
                >
                  <div className="contact-us-parent13_PC">
                  <div className="contact-us12_CUS">Contact Us</div>
                  <Icon className="vector-icon39_CUS" alt="" icon="mdi:about-circle-outline" color="white" />
                  </div>
                </div>
              </button>
              <button className="progress16_PC" onClick={onProgressClick}>
                <div
                  className="vector-parent27_PC"
                  onClick={onGroupContainer2Click}
                >
                  <Icon className="vector-icon68_HP" alt="" icon="material-symbols:progress-activity" color="white"/>
                    <div className="progress22_HP">Progress</div>
                </div>
              </button>
              <div className="vector-parent28_PC">
                <Icon className="vector-icon69_HP" alt="" icon="ri:parent-line" color="#F24E1E" />
                  <div className="parent-mode12_HP">Parent Mode</div>
              </div>
            </div>
          </div>
          <button className="home11_PC" onClick={onHomeClick}>
            <div className="home-parent7_PC" onClick={onGroupContainer6Click}>
            <div className="home9_CUS">Home</div>
            <Icon className="vector-icon45_CUS" alt="" icon="material-symbols-light:home-outline" color="white"/>
            </div>
          </button>
        </div>
        <div className="dashboard-parent-courses-child_PC" />
        <div className="dashboard-parent-courses-item_PC" />
        <img
          className="microsoftteams-image-1-16_PC"
          alt=""
          src="/wikangwali.png"
        />
        <div className="rectangle-parent30_PC">
          <div className="group-child46_PC" />
          <div className="group-child47_PC" />
          <img className="group-child48_PC" alt="" src="/mother.png.png" />
          <div className="marie-antoinette-cruz-container2_PC">
            <p className="blank-line_PC">Marie ANTOINETTE CRUZ</p>
          </div>
        </div>
        <img className="vector-icon60_PC" alt="" src="/vector5.svg" />
        <button className="dots_HP" onClick={onDotsClick}>
          <div className="dots-child_HP" />
          <div className="dots-item_HP" />
          <div className="dots-inner_HP" />
        </button>
        <div className="dashboard-parent-courses-child1_PC"/>
        
        <div className="dashboard-parent-courses-child2_PC" />
        <div className="unang-antas_PC">Unang Antas:</div>
        <div className="progress18_PC">progress:</div>
        <div className="eggs_PC" />
        <img
          className="dashboard-parent-courses-child3_PC"
          alt=""
          src="/smallgoldenegg.png"
        />
        <img
          className="gold1"
          alt=""
          src="/smallgoldenegg.png"
        />
        <img
          className="gold2"
          alt=""
          src="/smallgoldenegg.png"
        />
        <img
          className="gold3"
          alt=""
          src="/smallgoldenegg.png"
        />
        <img
          className="dashboard-parent-courses-child4_PC"
          alt=""
          src="/smallgoldenegg.png"
        />
        <img
          className="dashboard-parent-courses-child5_PC"
          alt=""
          src="/smallgoldenegg.png"
        />
        <div className="eggs1_PC">
          <img className="eggs-child_PC" alt="" src="/smallbronzeegg.png" />
        </div>
        <div className="in-progress_PC">in progress</div>
        <div className="completed_PC">completed</div>
        <div className="completed1_PC">completed</div>
        <div className="completed2_PC">completed</div>
        <div className="completed3_PC">completed</div>
        <div className="completed4_PC">completed</div>
        <div className="completed5_PC">completed</div>
        <div className="aralin-1-pagbati-at-karaniwan-wrapper_PC">
          <div
            className="aralin-1-pagbati-container_PC"
            data-scroll-to="aralin1Pagbati"
          >
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">
              {" "}
              Aralin 1: Pagbati at Karaniwang Pananalita
            </p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">{` Aralin 2: Batayang Bokabularyo at mga Bilang `}</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">
              Aralin 3: Payak na Balangkas ng Pangungusap
            </p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC"> Aralin 4: Pamilya at mga Ugnayan</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">
              {" "}
              Aralin 5: Konteksto ng Kultura at mga Tradisyon
            </p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">&nbsp;</p>
            <p className="blank-line_PC">&nbsp;</p>
          </div>
        </div>
        <div className="kurso-1-pambungad_PC">
          Kurso 1: Pambungad sa Wikang Filipino
        </div>
        <div className="kurso-2-pagsasalita_PC">{` Kurso 2: Pagsasalita at Pagsulat `}</div>
        {/*<div className="wrapper-line-12_PC">
          <img className="wrapper-line-12-child_PC" alt="" src="/line-12.svg" />
        </div>
        <div className="wrapper-line-13_PC">
          <img className="wrapper-line-13-child_PC" alt="" src="/line-12.svg" />
  </div>*/}
        <div className="aralin-1-pagbigkas-container_PC">
          <p className="blank-line_PC">{`Aralin 1: Pagbigkas at Pagsasanay sa Pakikipag-usap `}</p>
          <p className="blank-line_PC">&nbsp;</p>
          <p className="blank-line_PC">{`Aralin 2: Pambungad sa Alpabetong Filipino `}</p>
          <p className="blank-line_PC">&nbsp;</p>
        </div>
        <div className="not-yet-started_PC">not yet started</div>
        <div className="not-yet-started1_PC">not yet started</div>
        <img
          className="dashboard-parent-courses-child6_PC"
          alt=""
          src="/grayegg.png"
        />
        <img
          className="dashboard-parent-courses-child7_PC"
          alt=""
          src="/grayegg.png"
        />
        <button className="settings20_PC" onClick={onSettingsClick}>
          <div className="group-parent27_PC" onClick={onGroupContainer10Click}>
          <Icon className="group-icon8_CUS" alt="" icon="solar:settings-outline" color="white"/>
            <div className="settings17_CUS">Settings</div>
          </div>
        </button>
        <button className="courses19_PC">
          <div className="vector-parent29_PC" onClick={onGroupContainer11Click}>
          <Icon className="vector-icon46_CUS" alt="" icon="carbon:course" color="white" />
            <div className="courses15_CUS">Courses</div>
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

export default DASHBOARDPARENTCOURSES;
