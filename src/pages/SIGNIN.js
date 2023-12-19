import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Icon } from '@iconify/react';
import "./SIGNIN.css";

const SIGNIN = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/getAllUsers");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSignInButtonClick = useCallback(async () => {
    try {
      const user = users.find(
        (u) => u.username === usernameValue && u.password === passwordValue
      );

      if (user) {
        navigate("/6-dashboard-home");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Sign-in Error:", error);
    }
  }, [navigate, users, usernameValue, passwordValue]);

  
  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

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
      <div className="notocloud-icon7"/>
      <div className="notocloud-icon8"/>
      <div className="container2" />
      <img className="sign-in-child" alt="" src="/socialmedia.png"/>
      <div className="sign-in-item" />
      <div className="notocloud-icon9"/>
      <img className="wikang-wali-logo1" alt="" src="/undefined14.png" />
      <div className="notocloud-icon10"/>
      <div className="notocloud-icon11"/>
      
      
      <div className="welcome2">Welcome!</div>
      <div className="sign-in-to">Sign in to your Account</div>
      
      
      
      <label className="email2">Username</label>
      <label className="email2">Username</label>
      <div className="email-border-parent">
        <input
          className="email-border"
          type="text"
          value={usernameValue}
          onChange={handleUsernameChange}
        />
        <Icon icon="ic:outline-email" className="group-icon6"/>
      </div>


      <div className="password2">Password</div>
      <input
        className="rectangle-password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      
      <button className="signinbutton" onClick={onSignInButtonClick}>
        <div className="sign-in4">SIGN IN</div>
      </button>
      <div className="or-login-with">{`or login with `}</div>
      <a className="forgot-password" onClick={onForgotPasswordClick}>
        Forgot Password?
      </a>
      <img className="vector-icon10" alt="" src="/undefined17.png" />
      
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
