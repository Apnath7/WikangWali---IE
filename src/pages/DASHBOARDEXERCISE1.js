import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDEXERCISE1.css";
import { Icon } from '@iconify/react';

const DASHBOARDEXERCISE1 = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
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

  const onReturnArrowClick = useCallback(() => {
    navigate("/8-dashboard-lessons");
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate("/10-dashboard-exercise-12");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-exercise-1">
        <div className="rectangle-parent19">
          <div className="group-child56" />
          <div className="group-parent12">
            <div className="vector-parent8" onClick={onGroupContainerClick}>
            <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses3">Courses</div>
            </div>
            <button className="progress6" onClick={onProgressClick}>
              <div className="vector-parent9">
              <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress7">Progress</div>
              </div>
            </button>
            <button className="settings6" onClick={onSettingsClick}>
              <div className="group-parent13">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings7">Settings</div>
              </div>
            </button>
            <div className="parent-mode6">
              <div className="vector-parent10">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode7">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent20"
                onClick={onGroupButtonClick}
              >
                <div className="group-child57" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home6" onClick={onHomeClick}>
              <div className="home-parent1">
                <div className="home7">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled3" />
        <img
          className="microsoftteams-image-1-23"
          alt=""
          src="/undefined44.png"
        />
        <div className="rectangle-parent21">
          <div className="group-child59" />
          <div className="group-child62" />
          <div className="group-child63" />
          <div className="rectangle-parent22">
            <div className="group-child64" />
            <div className="vector-parent11">
              <div className="group-child65" alt="" src="/undefined45.png" />
              <b className="gelu-ursal3">Gelu Ursal</b>
              <img
                className="microsoftteams-image-1-71"
                alt=""
                src="/undefined47.png"
              />
              <Icon className="vector-icon65" alt="" icon="ph:bell-fill" color="black" />
              <Icon className="vector-icon66" alt="" icon="bxs:down-arrow" />
            </div>
            <Icon icon="carbon:course" color='white' className="group-child66" alt="" src="/undefined46.png" />
          </div>
          <div className="aralin-1-pagbati-container3">
            <p className="aralin-13">Aralin 1</p>
            <p className="pagbati-at-karaniwang3">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <div className="group-child67" alt="" src="/undefined50.png" />
          <div class="group-child44" alt="" src="/undefined51.png"></div>
          <div class="div8">1/2</div>

          <button className="return-arrow3" onClick={onReturnArrowClick}>
            <div className="return-arrow-child1" />
            <Icon icon="mingcute:back-fill" color="white" className="group-icon17" alt="" src="/undefined52.png" />
          </button>
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon1"
            alt=""
            src="/undefined62.png"
          />
          <button className="continue4" onClick={onContinueClick}>
            <div className="continue-inner" alt="" src="/undefined63.png" />
            <div className="continue5">continue</div>
          </button>
          <div className="ehersisyo-1-3">{`EHERSIsYO 1  - GREETING `}</div>
        </div>
        <div className="hello-little-friends">
          Hello, little friends! Today, we will learn some simple words in
          Tagalog, the language spoken in the Philippines. It's like learning a
          secret code to talk to new friends!
        </div>
        <div className="hello-kamusta-container">
          <ul className="hello-kamusta-good-morni">
            <li className="hello-kamusta">
              <b className="hello">Hello</b>
              <span>{` - "Kamusta!" `}</span>
            </li>
            <li className="hello-kamusta">
              <b className="hello">Good morning</b>
              <span className="hello"> - “Magandang umaga!"</span>
            </li>
            <li className="hello-kamusta">
              <b className="hello">Good night</b>
              <span className="hello">{` - "Magandang gabi!" `}</span>
            </li>
            <li className="hello-kamusta">
              <b className="hello">Thank you</b>
              <span className="hello"> - "Salamat!"</span>
            </li>
            <li className="hello-kamusta">
              <b className="hello">You're welcome</b>
              <span className="hello">
                {" "}
                - "Walang anuman" or "Walang anuman po"
              </span>
            </li>
            <li className="hello-kamusta">
              <b className="hello">Please</b>
              <span className="hello">
                {" "}
                - "Paki-" before a verb. For example, "Pakipasuyo" (Please
                pass).
              </span>
            </li>
            <li>
              <b className="hello">Excuse me</b>
              <span className="hello"> - "Paumanhin" or "Pasensya na."</span>
            </li>
          </ul>
        </div>
        <div className="these-are-some">
          These are some easy and friendly words to make new friends and talk to
          people in Tagalog. Tagalog is a special language, and when you use
          these words, you'll make friends and be a polite friend.
        </div>
        <button className="logout3" onClick={openLogoutPopup}>
          <div className="group-parent14">
            <div className="group-parent15">
              <div className="rectangle-sign-in-button-wrapper1">
                <div className="rectangle-sign-in-button3" />
              </div>
              <div className="log-out4">Log Out</div>
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

export default DASHBOARDEXERCISE1;
