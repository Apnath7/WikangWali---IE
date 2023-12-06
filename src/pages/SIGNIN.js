import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
      <img className="notocloud-icon7" alt="" src="/undefined12.png" />
      <img className="notocloud-icon8" alt="" src="/undefined12.png" />
      <div className="container2" />
      <img className="sign-in-child" alt="" src="/undefined13.png" />
      <div className="sign-in-item" />
      <img className="notocloud-icon9" alt="" src="/undefined12.png" />
      <img className="wikang-wali-logo1" alt="" src="/undefined14.png" />
      <div className="welcome2">Welcome!</div>
      <div className="sign-in-to">Sign in to your Account</div>
      <input className="rectangle-password" type="text" />
      <img className="notocloud-icon10" alt="" src="/undefined12.png" />
      <img className="notocloud-icon11" alt="" src="/undefined15.png" />
      <div className="email2">Email</div>
      <button className="signinbutton" onClick={onSigninButtonClick}>
        <div className="sign-in4">SIGN IN</div>
      </button>
      <div className="password2">Password</div>
      <div className="or-login-with">{`or login with `}</div>
      <a className="forgot-password" onClick={onForgotPasswordClick}>
        Forgot Password?
      </a>
      <img className="vector-icon10" alt="" src="/undefined17.png" />
      <div className="email-border-parent">
        <input className="email-border" type="text" />
        <img className="group-icon6" alt="" src="/undefined18.png" />
      </div>
      <img className="octiconlock-242" alt="" src="/undefined19.png" />
      <div className="dont-have-an">Don’t have an account?</div>
      <a className="sign-up4" onClick={onSignUpClick}>
        Sign Up
      </a>
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <img
          className="mingcuteback-line-icon1"
          alt=""
          src="/undefined20.png"
        />
      </button>
    </div>
  );
};

export default SIGNIN;
