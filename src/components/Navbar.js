import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const auth = getAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    if (loggedInUser) {
      setUser({
        name: loggedInUser.displayName,
 
      });
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Redirect the user to the login page or home page
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <>
      
        <div className="nav-bar">
          <div className="search-container">
            <input type="text" required="required" />
            <label>Search courses..</label>
            <i></i>
          </div>

          <div className="dropdown">
          Hi {user && user.name}!
            <button className="dropbtn" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} /> 
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <Link to="/settings">Settings</Link>
                <Link to="/Login" onClick={handleLogout}>Logout</Link>
              </div>
            )}
          </div>
        </div>
      
    </>
  );
};

export default Navbar;

