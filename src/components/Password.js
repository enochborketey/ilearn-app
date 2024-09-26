import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false); // Define showNewPassword state
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false); // Define showConfirmNewPassword state

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword); // Toggle new password visibility
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword); // Toggle confirm new password visibility
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update password API call or any other necessary logic
    console.log('Password submitted:', currentPassword);
  };

  return (
    <>

    <div className="password-container">
      
    </div>

    <div className="password-container">
      
    </div>
      <h2 className="PS">Change Password</h2>
      <div className="max-w-md ml-12 p-4 password">
        <form onSubmit={handleSubmit}>
          {/* Current Password */}
          <label className="block mb-2">
            Current Password:
            <div className="relative">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                className="w-full px-3 py-2 border-b border-white bg-transparent mb-6"
                
              />
              <FontAwesomeIcon
                icon={showCurrentPassword ? faEyeSlash : faEye}
                onClick={toggleCurrentPasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          </label>

          {/* New Password */}
          <label className="block mb-2">
            New Password:
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="w-full px-3 py-2 border-b border-white bg-transparent mb-6"
                
              />
              <FontAwesomeIcon
                icon={showNewPassword ? faEyeSlash : faEye}
                onClick={toggleNewPasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          </label>

          {/* Confirm New Password */}
          
          <label className="block mb-4 ">
            Confirm New Password:
            <div className="relative">
              <input
                type={showConfirmNewPassword ? 'text' : 'password'}
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                className="w-full px-3 py-2 border-b border-white bg-transparent mb-6"
              
              />
              <FontAwesomeIcon
                icon={showConfirmNewPassword ? faEyeSlash : faEye}
                onClick={toggleConfirmNewPasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          </label>

          {/* Save Changes Button */}
          <button type="submit" className=" mb-2 px-6 z-30 py-2 bg-[#F61B01] rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_fda4af] hover:[text-shadow:2px_2px_2px_#fda4af] ">Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default Password;
