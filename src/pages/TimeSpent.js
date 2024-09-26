import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  

const TimeSpent = () => {
  const [timeSpend, setTimeSpend] = useState(() => {
        const storedTimeSpend = localStorage.getItem('timeSpent');
        return storedTimeSpend ? parseInt(storedTimeSpend) : 0;
      });

      const [chartData, setChartData] = useState({
             labels: [],
             datasets: [{
               label: 'Time Spent',
               data: [],
               backgroundColor: 'rgba(255, 99, 132, 0.2)',
               borderColor: 'rgba(255, 99, 132, 1)',
               borderWidth: 1
             }]
          });

          useEffect(() => {
                 let intervalId;
                 let startTime = new Date().getTime();
            
                 intervalId = setInterval(() => {
                   const currentTime = new Date().getTime();
                   const timeDiff = (currentTime - startTime) / 1000 / 60; // convert to minutes
                   const newTimeSpend = Math.floor(timeDiff) + timeSpend;
                   setTimeSpend(newTimeSpend);
                   localStorage.setItem('timeSpend', newTimeSpend.toString());
            
                   const newChartData = { ...chartData };
                   newChartData.labels.push(`Minute ${newTimeSpend}`);
                   newChartData.datasets[0].data.push(newTimeSpend);
                   setChartData(newChartData);
                 }, 1000 * 60); // update every minute
            
                 return () => {
                   clearInterval(intervalId);
                 };
               }, [timeSpend, chartData]);


  return (
    
    <div className='chart'>
          <p>You have spent {timeSpend} minutes on the app.</p>
          <Bar key={chartData.labels.length} data={chartData} />
         </div>
  );
};

export default TimeSpent;