import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const DeleteAccount = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const handleConfirmDeleteChange = (event) => {
    setConfirmDelete(event.target.checked);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!confirmDelete) {
      setError('Please confirm that you want to delete your account');
      return;
    }
    if (!password) {
      setError('Please enter your password to confirm deletion');
      return;
    }
    // Call API to delete account
    fetch('/api/delete-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Account deleted successfully, redirect to login page
          window.location.href = '/login';
        } else {
          setError(data.error);
        }
      })
      .catch(() => {
        setError('An error occurred while deleting your account');
      });
  };

  return (
    <>
      <h2 className="PS">Delete Account</h2>
      <div className="max-w-md ml-12 p-4 delete">
        <p className="text-3xl  text-red-400 mt-5">
          Are you sure you want to delete your account? This action is permanent and cannot be undone.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <label className="block mb-2">
            Current Password:
            <div className="relative">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border-b border-white bg-transparent mb-6"
              />
              <FontAwesomeIcon
                icon={showCurrentPassword ? faEyeSlash : faEye}
                onClick={toggleCurrentPasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
        <Link to="/login" >
        <button type="submit" className= "w-22 mt-5 px-5 z-30 py-2 bg-[#F61B01]  rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:[text-shadow:2px_2px_2px_#fda4af] ">Delete Account</button>
        </Link>
          
        </form>
      </div>
    </>
  );
};

export default DeleteAccount;
