import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./SIGNIN.css";

const SIGNIN = () => {
  const [isEmailTyped, setIsEmailTyped] = useState(false);
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

  const handleEmailInputChange = (e) => {
    setIsEmailTyped(e.target.value !== "");
  };

  return (
    <div className="sign-in3">
      <div className="notocloud-icon7"/>
      <div className="notocloud-icon8"/>
      <div className="container2" />
      <img className="sign-in-child" alt="" src="/socialmedia.png" />
     
      <div className="sign-in-item" />
      <div className="notocloud-icon9"/>
      <img className="wikang-wali-logo1" alt="" src="/undefined14.png" />
      <div className="notocloud-icon10"/>
      <div className="notocloud-icon11"/>
      
      <div className="welcome2">Welcome!</div>
      <div className="sign-in-to">Sign in to your Account</div>
      <input className="rectangle-password" type="text" />

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
        <input
          className="email-border"
          type="text"
          onChange={handleEmailInputChange}
        />
        {/* Render email icon conditionally based on input */}
        {isEmailTyped ? null : <Icon icon="ic:outline-email" className="group-icon6" />}
      </div>
      <Icon className="octiconlock-242" alt="" icon="solar:lock-outline" />
      <Icon icon="solar:lock-linear" className="octiconlock-242"/>
      <div className="dont-have-an">Don’t have an account?</div>
      <a className="sign-up4" onClick={onSignUpClick}>
        Sign Up
      </a>
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>
    </div>
  );
};

export default SIGNIN;
