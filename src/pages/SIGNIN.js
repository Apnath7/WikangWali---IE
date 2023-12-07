import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./SIGNIN.css";
const SIGNIN = () => {
  const navigate = useNavigate();

  const onSigninButtonClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/4-forgot-passwordnew-password");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/5-sign-up");
  }, [navigate]);

  const onReturnButtonClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  return (
    <div className="sign-in3">
      <Icon className="notocloud-icon7" icon="noto:cloud" />
      <Icon className="notocloud-icon8" icon="noto:cloud" />
      <div className="container2" />
      <img className="sign-in-child" alt="" src="/socialmedia.png" />
      <div className="sign-in-item" />
      <Icon className="notocloud-icon9" alt="" icon="noto:cloud" />
      <img className="wikang-wali-logo1" alt="" src="/undefined14.png" />
      <div className="welcome2">Welcome!</div>
      <div className="sign-in-to">Sign in to your Account</div>
      <input className="rectangle-password" type="text" />
      <Icon className="notocloud-icon10" alt="" icon="noto:cloud" />
      <Icon className="notocloud-icon11" alt="" icon="noto:cloud" />
      <div className="email2">Email</div>
      <button className="signinbutton" onClick={onSigninButtonClick}>
        <div className="sign-in4">SIGN IN</div>
      </button>
      <div className="password2">Password</div>
      <div className="or-login-with">{`or login with `}</div>
      <a className="forgot-password" onClick={onForgotPasswordClick}>
        Forgot Password?
      </a>
      <Icon className="vector-icon10" alt="" icon="octicon:eye-24" />
      <div className="email-border-parent">
        <input className="email-border" type="text" />
        <Icon className="group-icon6" alt="" icon="solar:user-outline" />
      </div>
      <Icon className="octiconlock-242" alt="" icon="solar:lock-outline" />
      <div className="dont-have-an">Don’t have an account?</div>
      <a className="sign-up4" onClick={onSignUpClick}>
        Sign Up
      </a>
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon
          className="mingcuteback-line-icon1"
          alt=""
          icon="ri:arrow-go-back-fill" color="white"
        />
      </button>
    </div>
  );
};

export default SIGNIN;
