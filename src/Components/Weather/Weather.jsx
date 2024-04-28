import React, { useState } from "react";
import WeatherInfo from "../Info/WeatherInfo";

import styles from "./Weather.module.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    const { coord: coordinates, main, weather, wind, name } = response.data;

    const dateTime = new Date();

    const dataObject = {
      ready: true,
      coordinates,
      temperature: main.temp,
      humidity: main.humidity,
      description: weather[0].description,
      date: dateTime,
      icon: weather[0].icon,
      wind: wind.speed,
      city: name, // to access the name of the city
    };
    setWeatherData(dataObject);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    console.log("search");
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((e) => console.log(e))
      .then(() => {
        setCity(""); // Corrected: Clear the input field after search
      });

    console.log("searchEnd");
  }

  console.log("weatherData :", weatherData);

  return (
    <div className={styles.Weather}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              onChange={handleCityChange}
              type="search"
              placeholder="Enter city.."
              autoFocus="on"
              className="form-control"
              value={city}
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      {!weatherData && <p>No data to show</p>}

      {weatherData && <WeatherInfo {...weatherData} />}
    </div>
  );
}
