import React, { useState } from 'react';

function UserCard({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => setShowDetails(!showDetails);

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2>{user.name}</h2>
      <button onClick={handleToggle}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          <p>Age: {user.age}</p>
          <p>Location: {user.location}</p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
