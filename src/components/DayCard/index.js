import React from "react";
import {Link} from "react-router-dom";
import './styles.scss';

import Weater from '../../assets/cloud-sun.png';

const DayCard = ({day, shortTitle}) => {
  return (
    <Link to={"/"+day}>
      <div className="box">
        <span className="text-day">{shortTitle}</span>
        <div>
          <img 
            src={Weater} 
            alt="Weather" 
            className="weather"
          />
        </div>
        <span className="text-max-temperature">22 .</span>
        <span className="text-min-temperature"> 8 .</span>
      </div>
    </Link>
  );
};

export default DayCard;