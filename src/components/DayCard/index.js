import React from "react";
import {Link} from "react-router-dom";
import './styles.scss';

const CELSIUS_FORMULA =  - 273.15;
// const FAHRENHEIT_FORMULA =  CELSIUS_FORMULA * 9/5 + 32;

const DayCard = (props) => {
  let {day, shortTitle, maxTemp, minTemp, icon} = props;
  return (
    <Link to={"/"+day}>
      <div className="box">
        <span className="text-day">{shortTitle}</span>
        <div>
          <img 
            src={require("../../assets/"+icon+".png")} 
            alt="Weather" 
            className="weather"
          />
        </div>
        <span className="text-max-temperature">{(maxTemp + CELSIUS_FORMULA).toFixed(0)}°</span>
        <span className="text-min-temperature">{(minTemp + CELSIUS_FORMULA).toFixed(0)}°</span>
      </div>
    </Link>
  );
};

export default DayCard;