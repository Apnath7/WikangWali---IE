import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogoutPopup.css";
const LogoutPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainer4Click = useCallback(() => {
    navigate("/lougoutthankyou");
  }, [navigate]);

  return (
    <div className="logout-popup">
      <div className="logout-popup-child" />
      <div className="are-you-sure-you-want-to-logou-parent">
        <div className="are-you-sure-container">
          <span className="are-you-sure-container1">
            <p className="are-you-sure">Are you sure</p>
            <p className="are-you-sure">you want to logout?</p>
          </span>
        </div>
        <div className="group-container">
          <div className="group-frame">
            <div className="group-frame">
              <div className="group-child7" />
              <div className="cancel">cancel</div>
            </div>
          </div>
        </div>
        <div className="group-wrapper1">
          <div className="group-wrapper2" onClick={onGroupContainer4Click}>
            <div className="group-frame">
              <div className="group-child8" />
              <div className="cancel">Log out</div>
            </div>
          </div>
        </div>
        <img className="image-43-icon" alt="" src="/undefined28.png" />
      </div>
    </div>
  );
};

export default LogoutPopup;
