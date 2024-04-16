import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>This is to test my Weather App</div>

      <form>
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
