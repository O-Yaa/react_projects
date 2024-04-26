import React, { useState } from "react";
import dayjs from "dayjs";
import WeatherIcons from "../utilities/WeatherIcons";
import styles from "./WeatherInfo.module.css";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("C");
  console.log(props);
  const date = dayjs.utc(props.date);
  // Make sure this prop name matches the data structure received
  const icon = props.icon;
  const temperature = Math.floor(
    unit === "C" ? props.temperature : (props.temperature * 9) / 5 + 32
  );

  const handleUnitChange = (event) => {
    setUnit(event.target.value); // Update the unit state based on selection
  };

  return (
    <div className={styles.WeatherInfo}>
      <img src={WeatherIcons[icon]} className={styles.Icon} alt="description" />

      <h1 className={styles.City}>{props.city}</h1>
      <div className="Information">
        <ul className={styles.Date}>
          <li>{date.local().format("MMM D, YYYY")}</li>
          <li>{date.local().format("ddd HH:mm")}</li>
        </ul>

        <ul className={styles.Description}>
          <li className="text-capitalize">{props.description}</li>
        </ul>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <span className={styles.Temperature}>{temperature}°</span>

              <select
                value={unit}
                onChange={handleUnitChange}
                className={styles.temperatureSelect}
              >
                <option value="C">C</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {Math.floor(props.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
