import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Implement logout functionality here
  };

  return (
    <div>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
};

export default LogoutButton;
