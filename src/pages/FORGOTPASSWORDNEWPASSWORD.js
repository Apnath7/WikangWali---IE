import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FORGOTPASSWORDNEWPASSWORD.css";
const FORGOTPASSWORDNEWPASSWORD = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/4-forgot-pass");
  }, [navigate]);

  return (
    <div className="forgot-passwordnew-password">
      <div className="forgot-passwordnew-password-child" />
      <img className="n-1-icon" alt="" src="/undefined80.png" />
      <div className="reset-password">RESET PASSWORD</div>
      <img className="notocloud-icon16" alt="" src="cloud.png" />
      <img className="notocloud-icon17" alt="" src="cloud.png" />
      <div className="password-field-parent">
        <input className="password-field" type="text" />
        <div className="password4">Password</div>
      </div>
      <div className="confirm-password-field-parent">
        <input className="confirm-password-field" type="text" />
        <div className="confirm-password2">Confirm Password</div>
      </div>
      <img className="notocloud-icon18" alt="" src="cloud.png" />
      <button className="reset-wrapper" onClick={onFrameButtonClick}>
        <div className="reset">RESET</div>
      </button>
    </div>
  );
};

export default FORGOTPASSWORDNEWPASSWORD;
