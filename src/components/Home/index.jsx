import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

import DayCardContainer from "../DayCardContainer";
import allActions from "../../actions";

const Home = () => {
  const thermUnitReducer = useSelector((state) => state.thermUnitReducer);
  const [thermometricUnit, setThermometricUnit] = useState(thermUnitReducer.unit);
  const dispatch = useDispatch();

  useEffect(() => {
    // if(thermUnitReducer !== thermometricUnit){
      dispatch(allActions.weatherActions.getThermUnit(thermometricUnit));
    // }
  },[thermometricUnit])

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
        Weather forecast for the next
        <span className="comment-highlighted"> 5 days</span>
      </span>
      <DayCardContainer thermometricUnit={thermometricUnit} />
    </div>
  );
};

export default Home;
