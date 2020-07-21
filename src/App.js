import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard
        temp={35}
        condition="Clear"
        city="Sydny"
        country="Australia"
      />
      <WeatherCard temp={15} condition="Clouds" city="London" country="UK" />
    </div>
  );
}

export default App;
