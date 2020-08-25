import React from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import moment from 'moment';
import { WiStrongWind, WiHumidity, WiCloudy, WiRain, WiSunrise, WiSunset, WiDaySunny } from 'react-icons/wi';
import { IoIosArrowBack } from 'react-icons/io';
import './styles.scss';
import Graphic from "../Graphic";

const DayDetail = () => {
  let { path } = useParams();
  let location = useLocation();
  let item = location.state.item;
  return (
    <div>
      <div className="detail-header">
        <Link to="/"><IoIosArrowBack className="icon-header"/></Link>
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
            <div className="stats">
              <span><WiStrongWind className="icon"/></span>
              <span className="description">{item.wind_speed}m/s</span>
              {/* velocidad de viento */}
            </div>
            <div className="stats">
              <span><WiHumidity className="icon"/></span>
              <span className="description">{item.humidity}</span>
              {/* humedad */}
            </div>
            <div className="stats">
              <span><WiCloudy className="icon"/></span>
              <span className="description">{item.clouds}%</span>
              {/* nublado */}
            </div>
            <div className="stats">
              <span><WiRain className="icon"/></span>
              <span className="description">{item.pop}%</span> 
              {/* probabilidad de precipitacion */}
            </div>
            <div className="stats">
              <span><WiSunrise className="icon"/></span>
              <span className="description">{moment.unix(item.sunrise).format("LT")}</span> 
              {/* amanecer */}
            </div>
            <div className="stats">
              <span><WiSunset className="icon"/></span>
              <span className="description">{moment.unix(item.sunset).format("LT")}</span> 
              {/* Anochecer */}
            </div>
            <div className="stats">
              <span><WiDaySunny className="icon"/></span>
              <span className="description">{item.uvi}</span> 
              {/* indice UV del dia */}
            </div>
          </div>
        </div>
      </div>
      <Graphic elements={location.state.elements}/>
    </div>
  );
};

export default DayDetail;