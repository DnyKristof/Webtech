import React, { useContext } from 'react';
import "./Home.css";
const Home = () => {

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My Website</h1>
      </header>

      <div className="card">
        <h2>About Us</h2>
        <p>
          My name is Danyi Kristóf, I am a student of Miskolc University
        </p>
      </div>

      <div className="card">
        <h2>Our Features</h2>
        <p>
          Explore our blog with a variety of topics and contribute to our English-Hungarian dictionary. {/*You can also track the price of WoW's new legendary axe, Fyralath's price in real time.*/}
        </p>
      </div>

      <div className="card">
        <h2>Contact Us</h2>
        <p>
          For inquiries or suggestions, reach out to us at contact@me.com.
        </p>
      </div>

    </div>
  );
};

export default Home;
