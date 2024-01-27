import React, { useState } from 'react';
import './Login.css';
import { doRegister } from '../../API/useAPI';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState("");
  const [bdate, setBdate] = useState(null);

  const handleRegister = async (e) => {
    console.log(username, password);



    if (password !== password2) {
      setError("password");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //[^\s@]+ 1or more non whitespace, @[^\s@]+ non whitespace after @ , \. matches dot, [^\s@]+$ no whitespace or @ until end of string
    if (!emailPattern.test(email)) {
      setError("email");
      return;
    }
    if (username.length > 10) {
      setError("name");
      return;
    }

    const res = await doRegister(username, password);
    console.log(res);
    if (res !== 200) {
      setError("missing");
    }
  };

  const ErrorMessage = () => {
    return (<>
      {error == "password" ?
        <p style={{ color: 'red', fontSize: '16px' }}>The passwords do not match</p> :
        ''
      }
      {error == "missing" ?
        <p style={{ color: 'red', fontSize: '16px' }}>Please fill out every field</p> :
        ''
      }
      {error == "email" ?
        <p style={{ color: 'red', fontSize: '16px' }}>Please provide a valid email</p> :
        ''
      }
      {error == "name" ?
        <p style={{ color: 'red', fontSize: '16px' }}>Please choose a shorter username</p> :
        ''
      }
    </>
    );
  }

  return (
    <div className="login-container">
      <h2>Register</h2>
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
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="input-group">
        <label htmlFor="password2">Password again:</label>
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>
      
      <button onClick={handleRegister}>Register</button>
      <ErrorMessage />
      <p>
        Already have an account? Login <a href="/login">here</a>
      </p>
    </div>
  );
};

export default Register;
