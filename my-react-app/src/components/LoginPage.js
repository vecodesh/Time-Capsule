import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.css'; // Correct CSS file name

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isHome, setIsHome] = useState(true);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
      return;
    }

    // You can implement your login logic later (e.g., using axios to verify user credentials)
    // For now, let's assume successful login
    setLoggedIn(true);
    setIsHome(false);
    setError('');
  };

  if (loggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      {isHome ? (
        <div>
          {isLogin ? (
            <div className="manner">
              <video autoPlay loop muted playsInline>
                <source src={require('./Login.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="loginContainer">
                <h1 className="heading">LOGIN</h1>
                <div className="inputGroup">
                  <p style={{ color: 'white' }}>
                    Username
                    <input
                      className="inputField"
                      type='text'
                      placeholder='Enter Username'
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </p>
                  <p style={{ color: 'white' }}>
                    Password
                    <input
                      className="inputField"
                      type='password'
                      placeholder='Enter Password'
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </p>
                </div>
                {error && <p className="errorMessage">{error}</p>}
                <div>
                  <button className="loginButton" onClick={handleLogin}>
                    Login
                  </button>
                </div>
                <div className="signupLink">
                  <p style={{ color: 'white' }}>
                    New registration? &nbsp;&nbsp;&nbsp;
                    <button
                      className="signupButton"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Navigate to="/signup" />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default LoginPage;
