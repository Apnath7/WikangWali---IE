import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import "./SIGNUP.css";
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

  return (
    <div className="sign-up">
      <Icon className="notocloud-icon" alt="" icon="noto:cloud" />
      <Icon className="notocloud-icon1" alt="" icon="noto:cloud" />
      <div className="sign-up-child" />
      
      <img className="sign-up-item" alt="" src="/socialmedia.png" />
      <div className="sign-up-inner" />
      <Icon className="notocloud-icon2" alt="" icon="noto:cloud" />
      <img className="wikang-wali-logo" alt="" src="/undefined14.png" />
      <div className="welcome">Welcome!</div>
      <div className="create-your-account">Create your Account</div>
      <input className="email" type="text" />
      <input className="password" type="text" />
      <Icon className="notocloud-icon3" alt="" icon="noto:cloud" />
      <Icon className="notocloud-icon4" alt="" icon="noto:cloud" />
      <div className="email1">Email</div>
      <div className="return-button-item" />
      <Icon
        className="sign-up-child1"
        alt=""
        icon="ri:arrow-go-back-fill" color="white"
        onClick={onGroup1Click}
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
      <Icon className="vector-icon8" alt="" icon="octicon:eye-24" />
      <Icon className="group-icon4" alt="" icon="solar:user-outline" />
      <input className="username" type="text" />
      <div className="username1">Username</div>
      <Icon className="group-icon5" alt="" icon="solar:user-outline" />
      <Icon className="octiconlock-24" alt="" icon="solar:lock-outline" />
      <input className="confirm-password" type="text" />
      <div className="confirm-password-wrapper">
        <div className="confirm-password1">Confirm Password</div>
      </div>
      <img className="vector-icon9" alt="" src="/undefined17.png" />
      <Icon className="octiconlock-241" alt="" icon="solar:lock-outline" />
      <div className="frame-div" />
    </div>
  );
};

export default SIGNUP;
