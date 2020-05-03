import React, { useState, useEffect } from "react";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import Header from "./Header";
import ResultsPage from "./ResultsPage";

const App = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchResults = async () => {
    try {
      const response = await axios({
        url: "https://media.lottoland.com/api/drawings/euroJackpot",
        adapter: jsonpAdapter,
      });
      setResults(JSON.parse(JSON.stringify(response.data.last)));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="app">
      <Header />
      {!loading && <ResultsPage results={results} />}
    </div>
  );
};

export default App;
