import React from "react";
import moment from "moment";
import {
  WiStrongWind,
  WiHumidity,
  WiCloudy,
  WiRain,
  WiSunrise,
  WiSunset,
  WiDaySunny,
} from "react-icons/wi";
import Tooltip from "../Tooltip";

const Stats = ({item}) => {
  return (
    <div data-testid="stats-container">
      <Tooltip message="Wind Speed">
        <div className="stats">
          <span>
            <WiStrongWind className="icon" />
          </span>
          <span className="description">{item.wind_speed}m/s</span>
        </div>
      </Tooltip>
      <Tooltip message="Humidity">
        <div className="stats">
          <span>
            <WiHumidity className="icon" />
          </span>
          <span className="description">{item.humidity}</span>
        </div>
      </Tooltip>
      <Tooltip message="Cloudiness">
        <div className="stats">
          <span>
            <WiCloudy className="icon" />
          </span>
          <span className="description">{item.clouds}%</span>
        </div>
      </Tooltip>
      <Tooltip message="Chance of precipitation">
        <div className="stats">
          <span>
            <WiRain className="icon" />
          </span>
          <span className="description">{item.pop}%</span>
        </div>
      </Tooltip>
      <Tooltip message="Sunrise">
        <div className="stats">
          <span>
            <WiSunrise className="icon" />
          </span>
          <span className="description">
            {moment.unix(item.sunrise).format("LT")}
          </span>
        </div>
      </Tooltip>
      <Tooltip message="Sunset">
        <div className="stats">
          <span>
            <WiSunset className="icon" />
          </span>
          <span className="description">
            {moment.unix(item.sunset).format("LT")}
          </span>
        </div>
      </Tooltip>
      <Tooltip message="UVI">
        <div className="stats">
          <span>
            <WiDaySunny className="icon" />
          </span>
          <span className="description">{item.uvi}</span>
        </div>
      </Tooltip>
    </div>
  );
};

export default Stats;
