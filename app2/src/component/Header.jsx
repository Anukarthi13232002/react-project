import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <video className="video-bg" autoPlay loop muted>
        <source src="/background video.mp4" type="video/mp4" /> 
      </video>


      <div className="navbar">
        <nav className="nav-content">
          <img src="/logo.png" alt="Logo" className="logo" />
          <ul className="link">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <button className="search-btn" type="button">
            <img src="/search.png" alt="Search" className="search" />
          </button>
        </nav>
      </div>
      
      <div className='content'>
        <h1 className='first-content'>Kaira Technologies</h1>
        <p className='sec-content'>There is a famous saying "People don't buy what you do, they buy why you do it" - Simon Sinek. We at Kaira Technologies promise you that we will take your businesses and startups to a whole new level. Promoting a business is now as easy as having a cup of coffee, yes you have heard it right promoting businesses like never before</p>
        <button className="content-btn" type="button">Contact Us</button>
      </div>

      <div>
        <button className="whats-btn" type="button">
            <img src="whatsappimg.png" alt="" className="whatsapp" />
          </button>
      </div>

    </div>
  );
}

export default Header;
