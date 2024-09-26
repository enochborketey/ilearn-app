import React, { useState, useEffect } from 'react';

const Activity = () => {
  const [activeHours, setActiveHours] = useState(0);

  // Simulate activity tracking (you can replace this with actual logic)
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment active hours (for demonstration purposes)
      setActiveHours((prevHours) => prevHours + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Your Active Hours Today:</h2>
      <div className="relative h-8 bg-blue-200 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-blue-500"
          style={{ width: `${(activeHours / 10) * 100}%` }} // Adjust the scale as needed
        />
      </div>
      <p className="mt-2">{activeHours} hours</p>
    </div>
  );
};

export default Activity;

  
