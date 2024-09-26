import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import TimeSpent from "../components/TimeSpent";
import WeekSpent from "../components/WeekSpent";
import DaySpent from "../components/DaySpent";
import Navbar from "../components/Navbar";
import image from "../images/logo.png";
import "../index.css";


export default function Progress() {
  const [activeTab, setActiveTab] = useState("weekSpent");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderChart = () => {
    switch (activeTab) {
      case "timeSpent":
        return <TimeSpent />;
      case "weekSpent":
        return <WeekSpent />;
      case "daySpent":
        return <DaySpent />;
      default:
        return null;
    }
  };

  return (
    <div className="progress">
      <div class="menu-card">
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

              <li className="active">
                <FontAwesomeIcon
                  icon={faBarsProgress}
                  size="xl"
                  style={{ marginRight: "8px", color: "red" }}
                />
                Progress
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
      <div className="progress-content">
        <Navbar />
       
        <div className="progress-container">
          <div className="progress1">
            <h1>Progress</h1>
            <div className="progress-menu">
              <ul>
                <li
                  className={activeTab === "timeSpent" ? "active" : ""}
                  onClick={() => handleTabChange("timeSpent")}
                >
                  Time⏳
                  <span className="li-txt">
                    {" "}
                    the number of minutes spent on the app{" "}
                  </span>
                </li>

                <li
                  className={activeTab === "weekSpent" ? "active" : ""}
                  onClick={() => handleTabChange("weekSpent")}
                >
                  Weeks🌗{" "}
                  <span className="li-txt">
                    {" "}
                    number of weeks spent on the app
                  </span>
                </li>
                <li
                  className={activeTab === "daySpent" ? "active" : ""}
                  onClick={() => handleTabChange("daySpent")}
                >
                  Days🌤️
                  <span className="li-txt">
                    {" "}
                    number of days spent on the app
                  </span>
                </li>
              </ul>
            </div>

            <h2>Streak Challenge</h2>
            <div className="flex">
              <span className="big">🎉</span>

              <h3>
                You unlocked your 1-day streak goal! Check out your{" "}
                <Link to="/reward" className="text-[#F61B01]  hover:text-blue-400">
                  reward
                </Link>
              </h3>
            </div>

            <h2> Complete a 1-week streak goal to unlock more rewards</h2>

            <form class="my-form">
              <div>
                <input id="check-1" type="checkbox" />
                <label for="check-1">
                  Get notified when you complete a streak
                </label>
              </div>
            </form>
          </div>

          <div>
            <div className="chart">{renderChart()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
