import React, { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/financial_data.json')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1>
      <BarChart data={data} />
      <LineChart data={data} />
      <ScatterChart data={data} />
      <BubbleChart data={data} />
    </div>
  );
};

export default App;
