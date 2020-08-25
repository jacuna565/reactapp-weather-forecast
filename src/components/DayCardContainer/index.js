import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import './styles.scss';
import DayCard from '../DayCard';

import allActions from '../../actions';

const SHORT_WEEK_DAY = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

const DayCardContainer = ({thermometricUnit}) => {

  const weatherReducer = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getThermometricUnitFilter();
  },[thermometricUnit]);

  const getThermometricUnitFilter = () => {
    let filter = '';
    filter = thermometricUnit === 'Celsius' ? "&units=metric" : thermometricUnit === "Fahrenheit" ? "&units=imperial" : ''
    dispatch(allActions.weatherActions.loadWeather(filter));
    // setCurrentThermometricUnit(filter);
  }
  
  const renderDays = () =>{
    let list = weatherReducer.weathers.daily;
    const data = [];
    list.map((element, index) => {
      if(index > 0 && index < 6){
        var day = moment.unix(element.dt);
        var dayText= moment(day).format('dddd');
        var dayNumber = moment(day).day();
        data.push(
          <DayCard
            key={index}
            day={dayText}
            shortTitle={SHORT_WEEK_DAY[dayNumber]}
            maxTemp={element.temp.max}
            minTemp={element.temp.min}
            icon={element.weather[0].icon}
            isLoading={weatherReducer.isLoading}
          />
        )
      }
    })
    return data;
  }

  return (
    <>
      <div className="box-container">
        {renderDays()}
      </div>
    </>
  );
};

export default DayCardContainer; 