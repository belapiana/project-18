import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((x, i) => ({ x, y: data.profits[i] })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return <ChartComponent type="scatter" data={chartData} options={{ responsive: true }} />;
};

export default ScatterChart;
