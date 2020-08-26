import React from "react";
import {useParams, useLocation} from "react-router-dom";
import moment from 'moment';
import { WiStrongWind, WiHumidity, WiCloudy, WiRain, WiSunrise, WiSunset, WiDaySunny } from 'react-icons/wi';
import './styles.scss';
import Graphic from "../Graphic";
import Tooltip from "../Tooltip";
import BoxList from "../BoxList";

const DayDetail = () => {
  let { path } = useParams();
  let location = useLocation();
  let item = location.state.item;
  return (
    <div>
      <div className="detail-header">
        <h3 className="title-day">{path}</h3>
        <span className="title-date">{moment.unix(item.dt).format("ll")}</span>
        <div className="detail-container">
          <div className="temperature-container">
            <img src={require('../../assets/'+item.weather[0].icon+'.png')} />
            <div className="temperature">
              <span className="value">{item.temp.day}°</span>
              <span className="description">{item.weather[0].description}</span>
              <span className="description-altern">Feels like: {item.feels_like.day}°</span>
            </div>
          </div>
          <div className="stats-container">
            <Tooltip message="Velocidad de viento">
              <div className="stats">
                <span><WiStrongWind className="icon"/></span>
                <span className="description">{item.wind_speed}m/s</span>
              </div>
            </Tooltip>
            <Tooltip message="Humedad">
              <div className="stats">
                <span><WiHumidity className="icon"/></span>
                <span className="description">{item.humidity}</span>
              </div>
            </Tooltip>
            <Tooltip message="Nubosidad">
              <div className="stats">
                <span><WiCloudy className="icon"/></span>
                <span className="description">{item.clouds}%</span>
              </div>
            </Tooltip>
            <Tooltip message="Probabilidad de precipitacion">
              <div className="stats">
                <span><WiRain className="icon"/></span>
                <span className="description">{item.pop}%</span> 
              </div>
            </Tooltip>
            <Tooltip message="Amanecer">
              <div className="stats">
                <span><WiSunrise className="icon"/></span>
                <span className="description">{moment.unix(item.sunrise).format("LT")}</span> 
              </div>
            </Tooltip>
            <Tooltip message="Anochecer">
              <div className="stats">
                <span><WiSunset className="icon"/></span>
                <span className="description">{moment.unix(item.sunset).format("LT")}</span> 
              </div>
            </Tooltip>
            <Tooltip message="Indice de UV del dia">
              <div className="stats">
                <span><WiDaySunny className="icon"/></span>
                <span className="description">{item.uvi}</span> 
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <Graphic elements={location.state.elements}/>
      <BoxList elements={location.state.elements}/>
    </div>
  );
};

export default DayDetail;