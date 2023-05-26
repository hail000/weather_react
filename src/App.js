import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import WeatherBox from "./component/WeatherBox";
import WeatherBT from "./component/WeatherBT";
function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo"];

  const getCurrentLocation = () => {
    setIsLoading(true); // 로딩 상태 시작
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      fetchWeatherData(latitude, longitude);
      console.log("1");
    });
  };

  const [weatherData, setWeatherData] = useState(null);
  const key = "d4a54c527f61d7cfa6447e67bb42f444";
  const fetchWeatherData = async (lat, lon) => {
    let weather_url_where = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    try {
      let response = await fetch(weather_url_where);
      let data = await response.json();
      setWeatherData(data);
      //console.log("날씨 데이터 :", data);
    } catch (error) {
      console.log("날씨 데이터를 가져오는 중 오류 발생: ", error);
    }
    setIsLoading(false);
  };
  const getWeatherByCity = async () => {
    let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    try {
      let response = await fetch(weather_url);
      let data = await response.json();
      setWeatherData(data);
      console.log("날씨 데이터 :", data);
    } catch (error) {
      console.log("날씨 데이터를 가져오는 중 오류 발생: ", error);
    }

    // 로딩 상태 종료
  };

  useEffect(() => {
    //첫 시작시 작동
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    //1번
    <div>
      <div className="container">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            <WeatherBox WD_Box={weatherData} />
            <WeatherBT
              city_name={cities}
              setCity={setCity}
              getCurrentLocation={getCurrentLocation}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
