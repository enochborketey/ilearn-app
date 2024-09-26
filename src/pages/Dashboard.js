import React from "react";
import { Link,  } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faSwatchbook,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import Buttons from "../components/Buttons";
import Navbar from "../components/Navbar";
import ProfileFront from "../components/ProfileFront";
import ProfileBack from "../components/ProfileBack";


export default function Dashboard() {
  

  return (
    <div className="dashboard">
      <div class="menu-card  custom:block">
        <div class="menu-content">
          <div className="logo">
            <img src={image} alt="Logo-image" />
          </div>
          <div className="menu">
            <ul>
              <li className="active ">
                <FontAwesomeIcon
                  icon={faGrip}
                  size="xl"
                  style={{ marginRight: "3px" , color: "red" }}
                />{" "}
                Dashboard
              </li>
              <li>
                <FontAwesomeIcon icon={faSwatchbook} className="icon" />
                <Link to="/courses" className="menu-link">
                  My Courses
                </Link>
              </li>

              {/* <li>
                <FontAwesomeIcon icon={faClipboardList} className="icon" />
                <Link to="/classes" className="menu-link">
                  My Classes
                </Link>
              </li> */}

              <li>
                <FontAwesomeIcon icon={faBarsProgress} className="icon" />
                <Link to="/progress" className="menu-link">
                  Progress
                </Link>
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faMessage} className="icon" />
                <Link to="/messages" className="menu-link">
                  Chat box
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faBell} className="icon" />
                <Link to="/notifications" className="menu-link">
                  Notifications
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faGear} className="icon" />
                <Link to="/settings" className="menu-link">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-container flex flex-row md:flex-row">
          <div className="courses-link">
            <div className="courses-link-heading">
              {" "}
              <h1>Learning Hub</h1>
              <Link to="/courses" className="button-link">
                <Buttons />
              </Link>
            </div>

            <div class="cards">
              <div class="card math">

                <div className="card1">
                  <span className="card-logo">Ϻ</span>
                  <span className="card-text">Mathematics <br>
                  </br><span className="lessons-text">6 Lessons</span></span>
                </div>
                <div className="card2">
                  <span className="rate"> Rate  ⭐4.5 </span>
                  
                </div>

              </div>


              <div class="card science">
              <div className="card1">
                  <span className="card-logo">Ě</span>
                  <span className="card-text">English Lang <br>
                  </br><span className="lessons-text">9 Lessons</span></span>
                </div>
                <div className="card2">
                  <span className="rate"> Rate  ⭐6.0 </span>
                  
                </div>
              </div>


              <div class="card english">
              <div className="card1">
                  <span className="card-logo">Š</span>
                  <span className="card-text">Intergrated S <br>
                  </br><span className="lessons-text">15 Lessons</span></span>
                </div>
                <div className="card2">
                  <span className="rate"> Rate  ⭐5.7 </span>
                  
                </div>
              </div>
            </div>

    <div className="video">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/4Oy-z4Q2K0E" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

          
          </div>

          <div className="profile-card">
            <div className="profile-card-inner">
              <div className="profile-card-front">
                <ProfileFront />
              </div>
              <div className="profile-card-back">
                <ProfileBack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}