import React from "react";
import {Link} from "react-router-dom";
import './styles.scss';
import Loader from "../Loader";

const DayCard = (props) => {
  let {day, shortTitle, maxTemp, minTemp, icon, isLoading} = props;
  console.log('isLoading', isLoading);
  let temperature = isLoading ? <div className="daycard-loader"><Loader /></div> : <> <span className="text-max-temperature">{(maxTemp).toFixed(0)}°</span>
  <span className="text-min-temperature">{(minTemp).toFixed(0)}°</span> </>
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
        {temperature}
        
      </div>
    </Link>
  );
};

export default DayCard;