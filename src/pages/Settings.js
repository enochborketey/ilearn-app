import React, { useState } from 'react';
import "../index.css";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faSwatchbook,
  faClipboardList,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ProfileSettings from "../components/ProfileSettings";
import SecuritySettings from '../components/SecuritySettings';
import Password from '../components/Password';
import DeleteAccount from '../components/DeleteAccount';
import Navbar from "../components/Navbar";
import SettingsImg from '../images/Settingspic.png';

export default function Settings() {
  const tabs = ['profile', 'security', 'notifications', 'password', 'deleteAccount'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
    
  return (
    <div className="settings">
      <div class="menu-card playing">

        <div class="menu-content">

          <div className="logo">
            <img src={image} alt="Logo-image" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGrip} className="icon" />
                <Link to="/dashboard" className="menu-link">
                  Dashboard
                </Link>
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
                  Messages
                </Link>
              </li>

              <li>
                <FontAwesomeIcon icon={faBell} className="icon" />
                <Link to="/notifications" className="menu-link">
                  Notifications
                </Link>
              </li>

              <li className="active">
                <FontAwesomeIcon
                  icon={faGear}
                  size="xl"
                  style={{ marginRight: "8px", color: "red" }}
                />
                Settings
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    
    <div className="settings-content">

    <Navbar/>
    <div className="flex mt-[15px] ">
     <div className="settings-menu">
        <button
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => handleTabChange('profile')}
        >
          Profile Settings
        </button>
        <button
          className={activeTab === 'security' ? 'active' : ''}
          onClick={() => handleTabChange('security')}
        >
          Security Settings
        </button>
      
        <button
          className={activeTab === 'password' ? 'active' : ''}
          onClick={() => handleTabChange('password')}
        >
          Password
        </button>
        <button
          className={activeTab === 'deleteAccount' ? 'active' : ''}
          onClick={() => handleTabChange('deleteAccount')}
        >
          Delete Account
        </button> 
        <img src={SettingsImg} alt="Settings" className="mt-6"  />

      </div>
      <div className="content-section">
        {activeTab === 'profile' && <ProfileSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'password' && <Password />}
        {activeTab === 'deleteAccount' && <DeleteAccount />}
       
      </div>
      
</div>

 </div>

    </div>
  );
}
