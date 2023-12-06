import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNINSIGNUP.css";
const SIGNINSIGNUP = () => {
  const navigate = useNavigate();

  const onReturnButtonClick = useCallback(() => {
    navigate("/1-landing-page");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/5-sign-up");
  }, [navigate]);

  return (
    <div className="sign-in-sign-up">
      <img className="notocloud-icon5" alt="" src="/undefined12.png" />
      <img className="notocloud-icon6" alt="" src="/undefined12.png" />
      <div className="container1" />
      <div className="ambiance-blue" />
      <button className="return-button" onClick={onReturnButtonClick}>
        <div className="return-button-child" />
        <img className="mingcuteback-line-icon" alt="" src="/undefined20.png" />
      </button>
      <div className="birdclouds">
        <img className="birdclouds-child" alt="" src="/undefined21.png" />
      </div>
      <div className="sign-in-sign-up-child" />
      <div className="welcome-parent">
        <div className="welcome1">Welcome!</div>
        <div className="group-parent">
          <img className="frame-child" alt="" src="/undefined13.png" />
          <div className="sign-in-parent">
            <button className="sign-in1" onClick={onSignInClick}>
              <div className="sign-in2">SIGN IN</div>
            </button>
            <button className="sign-up2" onClick={onSignUpClick}>
              <div className="sign-up3">SIGN UP</div>
            </button>
            <img className="frame-item" alt="" src="/undefined22.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIGNINSIGNUP;
