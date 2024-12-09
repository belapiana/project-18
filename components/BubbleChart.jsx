import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Expenses, Profits',
        data: data.expenses.map((x, i) => ({
          x,
          y: data.profits[i],
          r: data.sales[i] / 1000,
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return <ChartComponent type="bubble" data={chartData} options={{ responsive: true }} />;
};

export default BubbleChart;
