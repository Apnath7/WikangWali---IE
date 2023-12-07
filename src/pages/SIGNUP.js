import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SIGNUP.css";
import { Icon } from '@iconify/react';

const SIGNUP = () => {
  const navigate = useNavigate();

  const onGroup1Click = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const onReturnButtonClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  return (
    <div className="sign-up">
      <div className="notocloud-icon" alt="" src="/undefined12.png" />
      <div className="notocloud-icon1" alt="" src="/undefined12.png" />
      <div className="sign-up-child" />
      <img className="sign-up-item" alt="" src="/undefined13.png" />
      <div className="sign-up-inner" />
      <div className="notocloud-icon2" alt="" src="/undefined12.png" />
      <img className="wikang-wali-logo" alt="" src="/undefined14.png" />
      <div className="welcome">Welcome!</div>
      <div className="notocloud-icon3" alt="" src="/undefined12.png" />
      <div className="notocloud-icon4" alt="" src="/undefined15.png" />
      
      <div className="create-your-account">Create your Account</div>
      <input className="email" type="text" />
      <input className="password" type="text" />
      <div className="email1">Email</div>
      <img className="sign-up-child1" src="/undefined16.png"onClick={onGroup1Click}
      />
      <button className="sign-up-button" onClick={onSignUpButtonClick}>
        <div className="sign-up1">SIGN UP</div>
      </button>
      <div className="password1">Password</div>
      <div className="or-signup-with">{`or signup with `}</div>
      <div className="already-have-an">Already have an account?</div>
      <a className="sign-in" onClick={onSignInClick}>
        Sign In
      </a>
      <img className="vector-icon8" alt="" src="/undefined17.png" />
      <img className="group-icon4" alt="" src="/undefined18.png" />
      <input className="username" type="text" />
      <div className="username1">Username</div>
      <img className="group-icon5" alt="" src="/undefined18.png" />
      <img className="octiconlock-24" alt="" src="/undefined19.png" />
      <input className="confirm-password" type="text" />
      <div className="confirm-password-wrapper">
        <div className="confirm-password1">Confirm Password</div>
      </div>
      <img className="vector-icon9" alt="" src="/undefined17.png" />
      <img className="octiconlock-241" alt="" src="/undefined19.png" />
      <div className="frame-div" />
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>
    </div>
  );
};

export default SIGNUP;
