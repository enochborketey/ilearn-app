import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chatbox from "./Chatbox";
import {
  faGrip,
  faSwatchbook,
  faClipboardList,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ContextProvider from "../Context/Context";

export default function Messages() {
  

  return (
    <ContextProvider>
      <div className="flex h-screen">
      
      <div class="menu-card  custom:block">
        <div class="menu-content">
          <div className="logo">
            <img src={image} alt="Logo-image" />
          </div>
          <div className="menu">
            <ul>
            <li>
          <FontAwesomeIcon icon={faGrip} className='icon'/> 
          <Link to="/dashboard" className="menu-link">Dashboard</Link></li>


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

              <li className="active">
                {" "}
                <FontAwesomeIcon icon={faMessage} size="xl" style={{ marginRight: '4px', color: "red" }} />
                
                  Chat box
               
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
        {/* Main Chat Area */}
        <div className="flex-1">
          <Chatbox /> {/* Render the ChatBox outside the sidebar */}
        </div>
      </div>
    </ContextProvider>
  );
}