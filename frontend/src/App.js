import React, { useState, useEffect } from "react";
import { getRecordsByYear } from "./api";
import YearSelection from "./components/YearSelection";
import ResultsTable from "./components/ResultsTable";

export default function App() {
  const [results, setResults] = useState(null);
  const [year, setYear] = React.useState("2003");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    (async () => setResults(await getRecordsByYear(year)))();
  }, [year]);

  return results ? (
    <div style={{ marginTop: 40, marginRight: 60, marginLeft: 60 }}>
      <YearSelection current={year} handleChange={handleYearChange} />
      <div style={{ marginTop: 20 }}>
        <ResultsTable results={results} />
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
