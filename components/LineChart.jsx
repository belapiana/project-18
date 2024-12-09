import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: data.profits,
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  return <ChartComponent type="line" data={chartData} options={{ responsive: true }} />;
};

export default LineChart;
