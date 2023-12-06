import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDCOURSES.css";
const DASHBOARDCOURSES = () => {
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

  const onFrameButtonClick = useCallback(() => {
    navigate("/8-dashboard-lessons");
  }, [navigate]);

  const onRectangle13Click = useCallback(() => {
    navigate("/8-dashboard-lessons");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-courses">
        <div className="rectangle-parent26">
          <div className="group-child79" />
          <div className="group-parent20">
            <div className="vector-parent20" onClick={onGroupContainerClick}>
              <img className="vector-icon48" alt="" src="/undefined38.png" />
              <div className="courses5">Courses</div>
            </div>
            <button className="progress10" onClick={onProgressClick}>
              <div className="vector-parent21">
                <img className="vector-icon49" alt="" src="/undefined39.png" />
                <div className="progress11">Progress</div>
              </div>
            </button>
            <button className="settings10" onClick={onSettingsClick}>
              <div className="group-parent21">
                <img className="group-icon21" alt="" src="/undefined40.png" />
                <div className="settings11">Settings</div>
              </div>
            </button>
            <div className="parent-mode10">
              <div className="vector-parent22">
                <img className="vector-icon50" alt="" src="/undefined41.png" />
                <div className="parent-mode11">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent27"
                onClick={onGroupButtonClick}
              >
                <div className="group-child80" />
                <img className="group-child81" alt="" src="/undefined42.png" />
              </button>
            </div>
            <button className="home10" onClick={onHomeClick}>
              <div className="home-parent3">
                <div className="home11">Home</div>
                <img className="vector-icon51" alt="" src="/undefined43.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled5" />
        <div className="dashboard-courses-child" />
        <div className="dashboard-courses-item" />
        <img
          className="microsoftteams-image-1-25"
          alt=""
          src="/undefined44.png"
        />
        <div className="dashboard-courses-inner" />
        <img
          className="b1642db9-f637-44fd-8187-e63b2d-icon"
          alt=""
          src="/undefined71.png"
        />
        <b className="kurso-1-mas-container">
          <p className="mas-malalim-na">{`Kurso 1: `}</p>
          <p className="mas-malalim-na">Mas Malalim na Filipino at Panitikan</p>
        </b>
        <b className="kurso-2-pagsusuri-container">
          <p className="mas-malalim-na">{`Kurso 2: `}</p>
          <p className="mas-malalim-na">
            Pagsusuri ng mga Teksto at Pagtuklas ng Kultura
          </p>
        </b>
        <button className="ikalawang-antas-2">
          <img
            className="ikalawang-antas-2-child"
            alt=""
            src="/undefined72.png"
          />
          <div className="kurso-2-pang-unawa-at-masusin-parent">
            <b className="kurso-2-pang-unawa-container">
              <p className="mas-malalim-na">{`Kurso 2: `}</p>
              <p className="mas-malalim-na">Pang-unawa at Masusing Pahayag</p>
            </b>
            <img
              className="microsoftteams-image-3-1"
              alt=""
              src="/undefined73.png"
            />
          </div>
        </button>
        <button className="unang-antas-2">
          <img className="unang-antas-2-child" alt="" src="/undefined72.png" />
          <div className="kurso-2-pagsasalita-at-pagsul-parent">
            <b className="kurso-2-pagsasalita">
              Kurso 2: Pagsasalita at Pagsulat
            </b>
            <img
              className="microsoftteams-image-5-1"
              alt=""
              src="/undefined74.png"
            />
          </div>
        </button>
        <img
          className="dashboard-courses-child1"
          alt=""
          src="/undefined30.png"
        />
        <button className="ikalawang-antas">
          <div className="ikalawang-antas1">Ikalawang Antas</div>
          <div className="vector-parent23">
            <img
              className="ikalawang-antas-2-child"
              alt=""
              src="/undefined75.png"
            />
            <div className="kurso-1-gitnang-antas-ng-wika-parent">
              <b className="kurso-1-gitnang-container">
                <p className="mas-malalim-na">{`Kurso 1: `}</p>
                <p className="mas-malalim-na">
                  Gitnang Antas ng Wikang Filipino
                </p>
              </b>
              <img
                className="ca88b0e1-977b-4453-99ba-b1a77c-icon3"
                alt=""
                src="/undefined76.png"
              />
            </div>
          </div>
        </button>
        <button className="ikatlong-antas-3">
          <img
            className="ikalawang-antas-2-child"
            alt=""
            src="/undefined72.png"
          />
          <div className="kurso-2-pang-unawa-at-masusin-parent">
            <b className="kurso-2-pang-unawa-container">
              <p className="mas-malalim-na">{`Kurso 2: `}</p>
              <p className="mas-malalim-na">
                Pagsusuri ng mga Teksto at Pagtuklas ng Kultura
              </p>
            </b>
            <img
              className="microsoftteams-image-3-1"
              alt=""
              src="/undefined73.png"
            />
          </div>
        </button>
        <button className="ikatlong-antas">
          <div className="ikalawang-antas1">Ikatlong Antas</div>
          <div className="vector-parent24">
            <img className="frame-child1" alt="" src="/undefined75.png" />
            <div className="kurso-1-mas-malalim-na-filipi-parent">
              <b className="kurso-1-mas-container1">
                <p className="mas-malalim-na">{`Kurso 1: `}</p>
                <p className="mas-malalim-na">
                  Mas Malalim na Filipino at Panitikan
                </p>
              </b>
              <img
                className="microsoftteams-image-6-2"
                alt=""
                src="/undefined77.png"
              />
            </div>
          </div>
        </button>
        <img
          className="dashboard-courses-child2"
          alt=""
          src="/undefined70.png"
        />
        <div className="vector-parent25">
          <img className="group-child82" alt="" src="/undefined45.png" />
          <b className="gelu-ursal5">Gelu Ursal</b>
          <img
            className="microsoftteams-image-1-73"
            alt=""
            src="/undefined47.png"
          />
          <img className="vector-icon52" alt="" src="/undefined59.png" />
          <img className="vector-icon53" alt="" src="/undefined49.png" />
        </div>
        <div className="dashboard-courses-child3" />
        <div className="unang-antas">Unang Antas</div>
        <button className="frame-button" onClick={onFrameButtonClick}>
          <img
            className="frame-child2"
            alt=""
            src="/undefined78.png"
            onClick={onRectangle13Click}
          />
          <div className="rectangle-parent28">
            <div className="frame-child3" />
            <div className="frame-child4" />
            <div className="kurso-1-pambungad-sa-wikang-f-parent">
              <b className="kurso-1-pambungad">
                Kurso 1: Pambungad sa Wikang Filipino
              </b>
              <img className="image-39-icon" alt="" src="/undefined79.png" />
            </div>
          </div>
        </button>
        <div className="dashboard-courses-inner1">
          <div className="kurso-group">
            <div className="kurso1">kurso</div>
            <img className="vector-icon54" alt="" src="/undefined46.png" />
          </div>
        </div>
        <div className="vector-parent25">
          <img className="group-child82" alt="" src="/undefined45.png" />
          <b className="gelu-ursal5">Gelu Ursal</b>
          <img
            className="microsoftteams-image-1-73"
            alt=""
            src="/undefined47.png"
          />
          <img className="vector-icon52" alt="" src="/undefined59.png" />
          <img className="vector-icon53" alt="" src="/undefined49.png" />
        </div>
        <div className="dashboard-courses-inner1">
          <div className="kurso-group">
            <div className="kurso1">kurso</div>
            <img className="vector-icon54" alt="" src="/undefined46.png" />
          </div>
        </div>
        <button className="logout5" onClick={openLogoutPopup}>
          <div className="group-parent22">
            <div className="group-parent23">
              <div className="rectangle-sign-in-button-wrapper3">
                <div className="rectangle-sign-in-button5" />
              </div>
              <div className="log-out6">Log Out</div>
            </div>
            <img className="group-icon22" alt="" src="/undefined56.png" />
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

export default DASHBOARDCOURSES;
