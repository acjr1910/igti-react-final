import React, { useState, useEffect } from 'react';
import { getRecordsByYear } from './api';

export default function App() {
  const [results, setResults] = useState();
  const [year] = useState('2003');

  useEffect(() => {
    (async () => 
      setResults(await getRecordsByYear(year)))(); 
  }, [year]);

  console.log(results);

  return (
    <div>
      <h2>{year}</h2>
    </div>);
}
