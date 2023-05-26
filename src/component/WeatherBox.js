import React, { useEffect } from "react";

const WeatherBox = ({ WD_Box }) => {
  useEffect(() => {
    console.log("데이터 코드", WD_Box);
  }, [WD_Box]);

  return (
    <div className="Weather-box">
      <div>{WD_Box?.name}</div>
      <div>날씨 : {WD_Box?.weather[0].description}</div>
      <div>습도 : {WD_Box?.main.humidity}</div>
      <div>풍속 : {WD_Box?.wind.speed}</div>
      <div>온도 : {WD_Box?.main.temp}</div>
    </div>
  );
};

export default WeatherBox;
