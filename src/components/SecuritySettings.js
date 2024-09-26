import React, { useState } from 'react';

const AuthenticationPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you'd handle the verification logic (e.g., sending SMS, verifying code).
    // For simplicity, I'm just logging the data.
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Verification Code:', verificationCode);
  };

  return (
    <>
     <h2 className='PS'>Two-Step Authentication</h2>
    <div className="authentication-container ">
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />

        <label htmlFor="verificationCode">Verification Code:</label>
        <input
          type="text"
          id="verificationCode"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          placeholder="Enter the code from SMS"
          required
        />

        <button type="submit" className=" w-48 mt-20 px-6 z-30 py-2 bg-[#F61B01]  rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:[text-shadow:2px_2px_2px_#fda4af] ">Verify and Sign In</button>
      </form>
    </div>
    </>
  );
};

export default AuthenticationPage;
