import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./SIGNUP.css";

const SIGNUP = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const onSignUpButtonClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const onReturnButtonClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPasswordValue(event.target.value);
  };

  return (
    <div className="sign-up">
      <img className="notocloud-icon" alt="" src="/cloud.png" />
      <img className="notocloud-icon1" alt="" src="/cloud.png" />
      <div className="sign-up-child" />
      <img className="sign-up-item" alt="" src="/socialmedia.png" />
      <div className="sign-up-inner" />
      <img className="notocloud-icon2" alt="" src="/cloud.png" />
      <img className="wikang-wali-logo" alt="" src="/undefined14.png" />
      <div className="welcome">Welcome!</div>
      <div className="notocloud-icon3" alt="" src="/undefined12.png" />
      <div className="notocloud-icon4" alt="" src="/undefined15.png" />
      <div className="create-your-account">Create your Account</div>
      
      <input
        className="email"
        type="text"
        value={emailValue}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      {emailValue.length === 0 && (
        <Icon className="notocloud-icon3" alt="" icon="cloud.png" />
      )}
      
      <input
        className="password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      {passwordValue.length === 0 && (
        <Icon className="octiconlock-24" alt="" icon="solar:lock-outline" />
      )}
      
      <input
        className="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      {usernameValue.length === 0 && (
        <Icon className="group-icon5" alt="" icon="solar:user-outline" />
      )}
      
      <input
        className="confirm-password"
        type="password"
        value={confirmPasswordValue}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
      />
      {confirmPasswordValue.length === 0 && (
        <Icon className="octiconlock-241" alt="" icon="solar:lock-outline" />
      )}
      
      <button className="sign-up-button" onClick={onSignUpButtonClick}>
        <div className="sign-up1">SIGN UP</div>
      </button>
      
      <a className="sign-in" onClick={onSignInClick}>
        Sign In
      </a>
      
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>
    </div>
  );
};

export default SIGNUP;
