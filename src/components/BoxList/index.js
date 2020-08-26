import React from "react";
import moment from "moment";
import './styles.scss';

const BoxList = ({elements}) => {
  const renderItems = () => {
    let data = [];
    (elements !== undefined) && elements.map((item, index) => {
      var hour = moment(item.dt_txt).format("HH:mm");
      data.push(
        <div className="box" kwy={index}>
          <span className="text-day">{hour}</span>
          <div>
            <img 
              src={require("../../assets/"+item.weather[0].icon+".png")} 
              alt="Weather" 
              className="weather"
            />
          </div>
          <span className="text-max-temperature">{(item.main.temp_max).toFixed(2)}°</span>
          <span className="text-min-temperature">{(item.main.temp_min).toFixed(2)}°</span>
        </div>
      )
    });
    return data;
  }
  return (
    <div className="box-list-container">
      {renderItems()}
    </div>
  );
};

export default BoxList;