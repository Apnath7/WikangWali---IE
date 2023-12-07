import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNINSIGNUP.css";
import { Icon } from '@iconify/react';

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
      <div className="notocloud-icon5" alt="" src="/undefined12.png" />
      <div className="notocloud-icon6" alt="" src="/undefined12.png" />
      <div className="container1" />
      <div className="ambiance-blue" />
      <button className="return-button" onClick={onReturnButtonClick}>
        <div className="return-button-child" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>
      <img className="wikang-wali-logo1" alt="" src="/undefined14.png" />
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
