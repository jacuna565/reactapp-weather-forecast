import React, { useState } from "react";
import "./styles.scss";

import DayCardContainer from "../DayCardContainer";

const Home = () => {
  const [thermometricUnit, setThermometricUnit] = useState("Celsius");

  const handleSelected = (event) => {
    setThermometricUnit(event.target.getAttribute("name"));
  };

  return (
    <div data-testid="home-container" className="container">
      <h3 className="region-title">Santiago, CL</h3>
      <div className="thermometric-unit">
        <span
          data-testid="span-clicked"
          name="Celsius"
          onClick={handleSelected}
          className={thermometricUnit === "Celsius" ? "selected" : ""}
        >
          °C
        </span>
        <span
          name="Fahrenheit"
          onClick={handleSelected}
          className={thermometricUnit === "Fahrenheit" ? "selected" : ""}
        >
          °F
        </span>
        <span
          name="Kelvin"
          onClick={handleSelected}
          className={thermometricUnit === "Kelvin" ? "selected" : ""}
        >
          K
        </span>
      </div>
      <span className="comment">
        Pronóstico del tiempo para los próximos{" "}
        <span className="comment-highlighted">5 dias</span>
      </span>
      <DayCardContainer thermometricUnit={thermometricUnit} />
    </div>
  );
};

export default Home;
