import Weather from "./Components/Weather/Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/esther-acquaye-25b9b61a0/"
            target="_blank"
            rel="noreferrer"
          >
            Esther A
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/O-Yaa/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
