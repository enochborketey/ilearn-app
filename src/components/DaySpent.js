import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DaySpent = () => {
  const [timeSpent, setTimeSpent] = useState(() => {
    const storedTimeSpent = localStorage.getItem('timeSpent');
    return storedTimeSpent ? parseInt(storedTimeSpent) : 1; // Initialize to 1 if no stored value
  });

  const [startTime, setStartTime] = useState(() => {
    const storedStartTime = localStorage.getItem('startTime');
    return storedStartTime ? parseInt(storedStartTime) : new Date().getTime();
  });

  useEffect(() => {
    let intervalId;

    const updateTimeSpent = () => {
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - startTime) / (1000 * 60 * 60); // convert to hours
      const newTimeSpent = Math.max(1, Math.floor(timeDiff / 24)); // Ensure at least 1 day
      setTimeSpent(newTimeSpent);
      localStorage.setItem('timeSpent', newTimeSpent.toString());
    };

    intervalId = setInterval(updateTimeSpent, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  useEffect(() => {
    localStorage.setItem('startTime', startTime.toString());
  }, [startTime]);

  const remainingTime = 7 - timeSpent;

  const getColorForMinute = (minute) => {
    const colors = [
       'green', 'blue', 'purple', 'orange', 'teal', 'pink', 'gold'
    ];
    return colors[minute % colors.length];
  };

  const chartData = {
    labels: ['Time Spent', 'Remaining Time'],
    datasets: [
      {
        data: [timeSpent, remainingTime],
        backgroundColor: [getColorForMinute(timeSpent), 'rgb(246, 27, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='progress-chart'> 
      <p className='progress-text'> {timeSpent} day streak🔥</p>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DaySpent;


