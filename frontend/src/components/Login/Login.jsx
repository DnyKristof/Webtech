import React, { useState } from 'react';
import './Login.css';
import doLogin, { isLoggedIn } from '../../API/useAPI.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    console.log(username, password);

    const res = await doLogin(username, password);
    console.log(res);
    if (res !== 200) {
      setError(true);
    }

  };

  return (

    <div className="login-container">

      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error ?
        <p style={{ color: 'red', fontSize: '16px' }}>Wrong username or password</p> :
        ''
      }<p>
        Don't have an account yet? Register <a href="/register">here</a>
      </p>
    </div>
  );
};

export default Login;
