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
      <div className="dashboard-exercise-1_EX1">
        <div className="rectangle-parent19_EX1">
          <div className="group-child56_EX1" />
          <div className="group-parent12_EX1">
            <div className="vector-parent8_EX1" onClick={onGroupContainerClick}>
            <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses3_EX1">Courses</div>
            </div>
            <button className="progress6_EX1" onClick={onProgressClick}>
              <div className="vector-parent9_EX1">
              <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress7_EX1">Progress</div>
              </div>
            </button>
            <button className="settings6_EX1" onClick={onSettingsClick}>
              <div className="group-parent13_EX1">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings7_EX1">Settings</div>
              </div>
            </button>
            <div className="parent-mode6_EX1">
              <div className="vector-parent10_EX1">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode7_EX1">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent20_EX1"
                onClick={onGroupButtonClick}
              >
                <div className="group-child57_EX1" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home6_EX1" onClick={onHomeClick}>
              <div className="home-parent1_EX1">
                <div className="home7_EX1">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled3_EX1" />
        <img
          className="microsoftteams-image-1-23_EX1"
          alt=""
          src="/undefined44.png"
        />
        <div className="rectangle-parent21_EX1">
          <div className="group-child59_EX1" />
          <div className="group-child62_EX1" />
          <div className="group-child63_EX1" />
          <div className="rectangle-parent22_EX1">
            <div className="group-child64_EX1" />
            <div className="vector-parent11_EX1">
              <div className="group-child65_EX1" alt="" src="/undefined45.png" />
              <b className="gelu-ursal3_EX1">Gelu Ursal</b>
              <img
                className="microsoftteams-image-1-71_EX1"
                alt=""
                src="/undefined47.png"
              />
              <Icon className="bellIcon" alt="" icon="ph:bell-fill" color="black" />
              <Icon className="arrowdown" alt="" icon="bxs:down-arrow" />
            </div>
            <Icon icon="carbon:course" color='white' className="group-child66_EX1" alt="" src="/undefined46.png" />
          </div>
          <div className="aralin-1-pagbati-container3_EX1">
            <p className="aralin-13_EX1">Aralin 1</p>
            <p className="pagbati-at-karaniwang3_EX1">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <div className="group-child67_EX1" alt="" src="/undefined50.png" />
          <div class="group-child44_EX1" alt="" src="/undefined51.png"></div>
          <div class="div8_EX1">1/2</div>

          <button className="return-arrow3_EX1" onClick={onReturnArrowClick}>
            <div className="return-arrow-child1_EX1" />
            <Icon icon="mingcute:back-fill" color="white" className="returnButton_EX1" alt="" src="/undefined52.png" />
          </button>
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon1_EX1"
            alt=""
            src="/undefined62.png"
          />
          <button className="continue4_EX1" onClick={onContinueClick}>
            <div className="continue-inner_EX1" alt="" src="/undefined63.png" />
            <div className="continue5_EX1">continue</div>
          </button>
          <div className="ehersisyo-1-3_EX1">{`EHERSIsYO 1  - GREETING `}</div>
        </div>

        
        <div className="hello-little-friends_EX1">
          Hello, little friends! Today, we will learn some simple words in
          Tagalog, the language spoken in the Philippines. It's like learning a
          secret code to talk to new friends!
        </div>
        <div className="hello-kamusta-container_EX1">
          <ul className="hello-kamusta-good-morni_EX1">
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">Hello</b>
              <span>{` - "Kamusta!" `}</span>
            </li>
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">Good morning</b>
              <span className="hello_EX1"> - “Magandang umaga!"</span>
            </li>
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">Good night</b>
              <span className="hello_EX1">{` - "Magandang gabi!" `}</span>
            </li>
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">Thank you</b>
              <span className="hello_EX1"> - "Salamat!"</span>
            </li>
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">You're welcome</b>
              <span className="hello_EX1">
                {" "}
                - "Walang anuman" or "Walang anuman po"
              </span>
            </li>
            <li className="hello-kamusta_EX1">
              <b className="hello_EX1">Please</b>
              <span className="hello_EX1">
                {" "}
                - "Paki-" before a verb. For example, "Pakipasuyo" (Please
                pass).
              </span>
            </li>
            <li>
              <b className="hello_EX1">Excuse me</b>
              <span className="hello_EX1"> - "Paumanhin" or "Pasensya na."</span>
            </li>
          </ul>
        </div>
        <div className="these-are-some_EX1">
          These are some easy and friendly words to make new friends and talk to
          people in Tagalog. Tagalog is a special language, and when you use
          these words, you'll make friends and be a polite friend.
        </div>
        </div>
        <button className="logout3_EX1" onClick={openLogoutPopup}>
          <div className="group-parent14_EX1">
            <div className="group-parent15_EX1">
              <div className="rectangle-sign-in-button-wrapper1_EX1">
                <div className="rectangle-sign-in-button3_EX1" />
              </div>
              <div className="log-out4_EX1">Log Out</div>
            </div>
            <Icon className="group-icon24" alt="" icon="carbon:logout" color="white" />
          </div>
        </button>
      
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
