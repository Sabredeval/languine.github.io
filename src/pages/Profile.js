// src/components/Profile.js
import React from 'react';

function Profile() {
  // Placeholder data
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
