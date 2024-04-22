import React from "react";
import dayjs from "dayjs";
import WeatherIcons from "../utilities/WeatherIcons";
import styles from "./WeatherInfo.module.css";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function WeatherInfo(props) {
  console.log(props);
  const date = dayjs.utc(props.date);
  // Make sure this prop name matches the data structure received
  const icon = props.icon;
  console.log(icon);

  return (
    <div className={styles.WeatherInfo}>
      <img src={WeatherIcons[icon]} className={styles.Icon} alt="description" />

      <h1>{props.city}</h1>
      <div className="Information">
        <p>{date.local().format("MMM D, YYYY")}</p>
        <p>{date.local().format("ddd HH:mm")}</p>

        <ul>
          <li className="text-capitalize">{props.description}</li>
        </ul>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <div>
              {Math.floor(props.temperature)}
              <a href="./">°C | °F</a>
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
