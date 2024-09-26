import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import science from "../images/Science2.png";
import math from "../images/Math.png";
import english from "../images/English.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faSwatchbook, faClipboardList, faBarsProgress, faMessage, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../components/Navbar";

export default function Courses() {
  return (
    <div className='courses'>  
      <div class="menu-card playing">
        <div class="menu-content">
          <div className='logo'><img src={image} alt="Logo-image" /></div>
          <div className='menu'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGrip} className='icon'/> 
                <Link to="/dashboard" className="menu-link">Dashboard</Link>
              </li>
              <li className="active">
                <FontAwesomeIcon icon={faSwatchbook} size="xl" style={{ marginRight: '4px', color: "red" }} />
                My Courses
              </li>
              {/* <li>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <Link to="/classes" className="menu-link">My Classes</Link>
              </li> */}
              <li>
                <FontAwesomeIcon icon={faBarsProgress} className='icon' />
                <Link to="/progress" className="menu-link">Progress</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} className='icon' />
                <Link to="/messages" className="menu-link">Messages</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faBell} className='icon'/>
                <Link to="/notifications" className="menu-link">Notifications</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faGear} className='icon' />
                <Link to="/settings" className="menu-link">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="courses-content">
        <Navbar/>
        <div className="courses-container">
          <h1>Courses</h1>
          
          <div className="courses-container1"> 
            <div className="course-section">
            <img src={math} alt="Math" />
            <h2>Math</h2>
            <p>Explore the world of numbers and equations.</p>
            <div className="course-links">
              <a href="https://www.khanacademy.org/math" target="_blank" className="course-link math"> Text</a>
              <a href="https://www.youtube.com/playlist?list=PLF797E961509B4EB5" target="_blank" className="video-link math"> Videos</a>
            </div>
          </div>

          <div className="course-section">
          <img src={science} alt="Science" />
          <h2>Science</h2>
          <p>Discover the wonders of the natural world.</p>
            <div className="course-links">
              <a href="https://www.sciencebuddies.org/" target="_blank" className="course-link science"> Text</a>
              <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr" target="_blank" className="video-link science"> Videos</a>
            </div>
          </div>

          <div className="course-section">
          <img src={english} alt="English" />
          <h2>English</h2>
          <p>Enhance your language and literature skills.</p> 
            <div className="course-links">
              <a href="https://www.englishclub.com/" target="_blank" className="course-link english"> Text</a>
              <a href="https://www.youtube.com/playlist?list=PLF797E961509B4EB5" target="_blank" className="video-link english"> Videos</a>
            </div>
          </div>  </div>
         


        </div>
      </div>
    </div>
  );
}


