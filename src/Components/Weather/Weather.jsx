import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    const { coord: coordinates, main, dt, weather, wind, name } = response.data;

    const formattedDate = new Date(dt * 1000);

    const dataObject = {
      ready: true,
      coordinates,
      temperature: main.temp,
      humidity: main.humidity,
      description: weather[0].description,
      date: formattedDate, //create a component with name "formattedDate"
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
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city.."
                autoFocus="on"
                className="form-control"
              ></input>
            </div>
            <div className="col-3">
              <input
                onChange={handleCityChange}
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
