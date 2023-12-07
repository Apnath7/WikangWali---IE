import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
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
      <Icon className="notocloud-icon5" icon="noto:cloud" />
      <Icon className="notocloud-icon6" icon="noto:cloud"/>
      <div className="container1" />
      <div className="ambiance-blue" />
      <button className="return-button" onClick={onReturnButtonClick}>
        <div className="return-button-child" />
        <Icon className="mingcuteback-line-icon" icon="ri:arrow-go-back-fill" color="white"/>
      </button>
      <div className="birdclouds">
        <img className="birdclouds-child" alt="" src="/undefined14.png" />
      </div>
      <div className="sign-in-sign-up-child" />
      <div className="welcome-parent">
        <div className="welcome1">Welcome!</div>
        <div className="group-parent">
          <img className="frame-child" alt="" src="/socialmedia.png" />
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
