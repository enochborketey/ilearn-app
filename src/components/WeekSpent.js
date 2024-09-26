import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const WeekSpent = () => {
  const [dailyTimeSpent, setDailyTimeSpent] = useState([30, 45, 20, 50, 40, 55, 60]); 
  const weeksUsed = 1; 

  
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: dailyTimeSpent,
        backgroundColor: [
          'red', 'green', 'blue', 'purple', 'orange', 'teal', 'pink'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='progress-chart'>
      <p className='progress-text'> {weeksUsed} Week Streak🔥 </p>
      <Doughnut data={chartData} />
    </div>
  );
};

export default WeekSpent;


