import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for API requests
import "./SIGNUP.css";
import { Icon } from "@iconify/react";

const SIGNUP = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [emailValue, setEmailValue] = useState("");
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

  const onSignInButtonClick = async () => {
    // Your sign-in logic here
  };

  const SigninClick = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const onSignUpClick = useCallback(() => {
    navigate("/3-sign-up");
  }, [navigate]);

  const onReturnButtonClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

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
          //value={usernameValue}
          //onChange={handleUsernameChange}
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
          //value={confirmPasswordValue}
          //onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
        />
        <Icon className="octiconlock-241" alt="" icon="solar:lock-outline" />
      </div>

      <div class="dont-have-an">Already have an account?</div>
      <a className="sign-in" onClick={SigninClick}>
        Sign In
      </a>

      <div class="or-login-with2">or login with </div>
      <button className="sign-up-button" onClick={onSignUpClick}>
        <div className="sign-up1">SIGN UP</div>
      </button>

      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>

      {/* Display fetched users for testing purposes */}
      <div>
        <h3>Users:</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Username: {user.username}, Email: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SIGNUP;
