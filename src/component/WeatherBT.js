import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const WeatherBT = ({
  city_name,
  setCity,
  getCurrentLocation,
  selectedCity,
}) => {
  const handleWeatherClick = () => {
    getCurrentLocation();
    console.log("실행");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleWeatherClick}>
        home
      </Button>

      {city_name.map((item) => (
        <Button
          variant={selectedCity === item ? "warning" : "primary"}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherBT;
