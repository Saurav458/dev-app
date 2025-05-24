import React, { useState } from 'react';

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <p>This is some additional information about us!</p>}
    </div>
  );
}
