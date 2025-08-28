import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="app">
      <h1>Country Flags</h1>
      <div className="flags-grid-wrapper">
        <div className="flags-grid">
          {countries.map((country) => (
            <div key={country.name} className="flag-card">
              <img src={country.flag} alt={`${country.name} flag`} />
              <p className="country-name">{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
