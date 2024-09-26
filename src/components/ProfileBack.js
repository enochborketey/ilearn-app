import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../index.css';


export default function ProfileBack() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const storage = getStorage();

  // Fetch user info
  useEffect(() => {
    const loggedInUser = auth.currentUser;
    if (loggedInUser) {
      setUser(loggedInUser);
      setUserName(loggedInUser.displayName || '');
      setEmail(loggedInUser.email || '');
    }
  }, [auth]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSave = async () => {
    try {
      // 1. Update profile picture if a new one is selected
      if (profilePicture) {
        const profilePictureRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(profilePictureRef, profilePicture);
        const photoURL = await getDownloadURL(profilePictureRef);

        await updateProfile(auth.currentUser, { photoURL });
      }

      // 2. Update username
      if (userName !== user.displayName) {
        await updateProfile(auth.currentUser, { displayName: userName });
      }

      // 3. Update email
      if (email !== user.email) {
        await updateEmail(auth.currentUser, email);
      }

      // 4. Update password
      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      // Fetch the updated user data
      setUser(auth.currentUser);

      // Clear input fields after save
      setUserName('');
      setEmail('');
      setPassword('');
      setProfilePicture(null);

      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="profile-back">
      <h1>Profile</h1>

      <div className="">
        <div className="rounded-full w-32 h-32 bg-gray-200 overflow-hidden">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="object-cover w-full h-full" />
          ) : user && user.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="object-cover w-full h-full" />
          ) : (


            <div className="flex items-center justify-center h-full">
      <label htmlFor="fileInput" className="cursor-pointer">
        <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-2xl" />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="hidden"
        />
      </label>
    </div>
          )}
        </div>

      </div>

      {/* <p>Change Image</p> */}

      <div className="flex flex-col">
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className=" mt-7 px-6 z-30 py-2 bg-[#F61B01] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:[text-shadow:2px_2px_2px_#fda4af]"
          onClick={handleSave}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
