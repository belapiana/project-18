import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <ChartComponent type="bar" data={chartData} options={{ responsive: true }} />;
};

export default BarChart;
