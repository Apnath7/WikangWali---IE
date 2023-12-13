import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FORGOTPASS.css";
const FORGOTPASS = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  return (
    <div className="forgot-pass">
      <img className="notocloud-icon19" alt="" src="cloud.png" />
      <div className="forgot-pass-child" />
      <img className="n-1-icon1" alt="" src="/undefined80.png" />
   
      <input className="rectangle-email" type="text" />
      <div className="username2">Username</div>
      <button className="sign-in-wrapper" onClick={onFrameButtonClick}>
        <div className="sign-in6">SIGN IN</div>
      </button>
      <img className="notocloud-icon20" alt="" src="cloud.png" />
      <img className="notocloud-icon21" alt="" src="cloud.png" />
    </div>
  );
};

export default FORGOTPASS;
