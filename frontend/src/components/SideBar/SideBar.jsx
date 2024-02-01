import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from '../../API/useAPI';

const CapitalizePath = (word) => {
  if (word.length > 1) {
    return word[1].toUpperCase() + word.slice(2);
  }
  return '';
}

const SideBar = () => {
  const [activeButton, setActiveButton] = useState(CapitalizePath(window.location.pathname));
  let navigate = useNavigate();


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate('/' + buttonName.toLowerCase());
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    window.location.reload(false);
    window.location.href = "/";
  }

  const LoginButton = () => {
    return (
      <button className='login-button' onClick={() => handleButtonClick('Login')}>
        Login
      </button>);
  }
  const LogoutButton = () => {
    return (
      <button className='login-button' onClick={() => handleLogout()}>
        Logout
      </button>);
  }

  return (
    <div className='sidebar-container'>
      <div className="sidebar">

        <ul>
          <li>
            {isLoggedIn() ?
              <LogoutButton /> :
              <LoginButton />
            }
          </li>
	  {/*<li className={activeButton === '' ? 'active' : 'none'}>
            <button onClick={() => handleButtonClick('')}>Home</button>
          </li>
          <li className={activeButton === 'Blog' ? 'active' : 'none'}>
            <button onClick={() => handleButtonClick('Blog')}>Blog</button>
          </li>
          <li className={activeButton === 'Dictionary' ? 'active' : 'none'}>
            <button onClick={() => handleButtonClick('Dictionary')}>Dictionary</button>
          </li>*/}
          <li className={activeButton === 'Fyralath' ? 'fire-button-active' : 'none'}>
            <button onClick={() => handleButtonClick('Fyralath')}>Fyralath</button>
          </li>

        </ul>
      </div>
      <div className='active-user'>
        {isLoggedIn() ?
          <p>Logged in as: {localStorage.getItem("user")}</p> :
          <p>Not logged in</p>}
      </div>
    </div>
  );
};

export default SideBar;
