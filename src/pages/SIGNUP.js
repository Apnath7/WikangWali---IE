import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for API requests
import "./SIGNUP.css";

const SignIn = () => {
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
    <div className="sign-in">
      {/* Your sign-in form components */}
      <input
        className="email"
        type="text"
        value={emailValue}
        onChange={handleEmailChange}
        placeholder="Email"
      />

      <input
        className="password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      <button className="sign-in-button" onClick={onSignInButtonClick}>
        Sign In
      </button>

      <div className="sign-up-link" onClick={onSignUpClick}>
        Sign Up
      </div>

      <button className="return-button" onClick={onReturnButtonClick}>
        Return
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

export default SignIn;
