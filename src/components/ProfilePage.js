import React, { useState, useEffect } from 'react';
import ProfileFront from './ProfileFront'; // Adjust paths based on your file structure
import ProfileBack from './ProfileBack';
import { getAuth } from 'firebase/auth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  // Fetch initial user data
  useEffect(() => {
    const auth = getAuth();
    const loggedInUser = auth.currentUser;

    if (loggedInUser) {
      setUser({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        photo: loggedInUser.photoURL || '', // Fallback to default image
      });
    }
  }, []);

  return (
    <div className="profile-page">
      {/* Pass user info to ProfileFront */}
      <ProfileFront user={user} />

      {/* Pass user info and setUser to ProfileBack */}
      <ProfileBack user={user} setUser={setUser} />
    </div>
  );
}
