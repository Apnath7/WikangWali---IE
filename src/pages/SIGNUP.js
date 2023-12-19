import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import axios from 'axios'; // Import axios for API requests
import "./SIGNUP.css";

const SIGNUP = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  
  const onSignUpButtonClick = async () => {
    if (
      emailValue &&
      passwordValue &&
      confirmPasswordValue &&
      passwordValue === confirmPasswordValue
    ) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const isPasswordValid = passwordRegex.test(passwordValue);
  
      if (!isPasswordValid) {
        alert("Password must have a minimum of 8 characters, a combination of uppercase and lowercase letters, with special character/s.");
        return; // Stop signup process if the password doesn't meet the criteria
      }
  
      const confirmed = window.confirm("Are you sure you want to sign up?");
    
      if (confirmed) {
        try {
          const response = await axios.post("http://localhost:8080/user/insertUser", {
            username: usernameValue,
            password: passwordValue,
            email: emailValue,
            isAdmin: false // Set admin status as needed
          });
      
          if (response.status === 200) {
            navigate("/3-sign-in");
          }
        } catch (error) {
          console.error("Signup Error:", error);
        }
      }
    } else {
      alert("Password and confirm password do not match.");
    }
  };

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
      <div className="notocloud-icon3" alt="" icon="cloud.png" />

      <div>
        
        <input
          className="username"
          type="text"
          value={usernameValue}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
        <Icon className="group-icon51" alt="" icon="solar:user-outline" />
      </div>

      <div>
      <input
        className="email"
        type="text"
        value={emailValue}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <Icon icon="ic:outline-email" className='emailicon'/>
      </div>

      <div>
      <input
        className="password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <Icon className="octiconlock-24" alt="" icon="solar:lock-outline" />
      </div>

      <div>
        
      <input
        className="confirm-password"
        type="password"
        value={confirmPasswordValue}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
      />

        <Icon className="octiconlock-241" alt="" icon="solar:lock-outline" />
      </div>

      <div class="dont-have-an">Already have an account?</div>
      <a className="sign-in" onClick={onSignInClick}>
        Sign In
      </a>

      <div class="or-login-with2">or login with </div>
      <button className="sign-up-button" onClick={onSignUpButtonClick}>
        <div className="sign-up1">SIGN UP</div>
      </button>

      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>

    </div>
  );
};

export default SIGNUP;
