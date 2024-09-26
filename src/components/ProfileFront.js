import React, {useState, useEffect} from 'react';
import '../index.css';
import image from '../images/edu1.png';
import { getAuth } from "firebase/auth";



const ProfileFront = ({
    
      profileImage = '', socialMediaLinks = [] }) => {
        const [user, setUser] = useState(null);
        

          // Function to fetch user info after login
  useEffect(() => {
    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    if (loggedInUser) {
      setUser({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photo: loggedInUser.photoURL || profileImage, // fallback to default profile image if none
      });
    }
  }, [profileImage]);



  return (
    <div className="profile-front">
      <h1>Welcome!
        </h1>
     
      {user ? (
        <div>
      <div className="profile-image">
        <img src={user.photo} alt="User Profile" />
      </div>
     
        </div>
      ):(
        <div>Loading...</div>
      )}
        <div className='edu'>   <img src={image} alt="" className=' ' />  </div>
       
      

    </div>
  );
};

export default ProfileFront;