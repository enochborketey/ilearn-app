import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const TimeSpent = () => {
  const [timeSpent, setTimeSpent] = useState(() => {
    const storedTimeSpent = localStorage.getItem('timeSpent');
    return storedTimeSpent ? parseInt(storedTimeSpent) : 0;
  });

  const [startTime, setStartTime] = useState(() => {
    const storedStartTime = localStorage.getItem('startTime');
    return storedStartTime ? parseInt(storedStartTime) : new Date().getTime();
  });

  useEffect(() => {
    // Save the start time to localStorage if it isn't already stored
    if (!localStorage.getItem('startTime')) {
      localStorage.setItem('startTime', startTime.toString());
    }

    const updateTimeSpent = () => {
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - startTime) / 1000 / 60; // convert to minutes
      const newTimeSpent = Math.floor(timeDiff);
      setTimeSpent(newTimeSpent);
      localStorage.setItem('timeSpent', newTimeSpent.toString());
    };

    const intervalId = setInterval(updateTimeSpent, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  const remainingTime = 60 - timeSpent;

  const getColorForMinute = (minute) => {
    const colors = [
      'red', 'green', 'blue', 'purple', 'orange', 'teal', 'pink'
    ];
    return colors[minute % colors.length];
  };

  const chartData = {
    labels: [`Spent ${timeSpent} min`, `Remaining ${remainingTime} min`],
    datasets: [
      {
        data: [timeSpent, remainingTime],
        backgroundColor: [getColorForMinute(timeSpent), '#F61B01 '],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='progress-chart'>
      <p className='progress-text'>{timeSpent} minutes on the app.</p>
      <Doughnut data={chartData} />
    </div>
  );
};

export default TimeSpent;
