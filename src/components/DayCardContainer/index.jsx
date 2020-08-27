import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { city, SHORT_WEEK_DAY, WEEK_DAY } from "../../func/globals";
import "./styles.scss";
import DayCard from "../DayCard";

import allActions from "../../actions";

const DayCardContainer = ({ thermometricUnit }) => {
  const weatherReducer = useSelector((state) => state.weatherReducer);
  const weatherEvery3HoursReducer = useSelector(
    (state) => state.weatherEvery3HoursReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getThermometricUnitFilter = () => {
      let filter = "";
      filter =
        thermometricUnit === "Celsius"
          ? "&units=metric"
          : thermometricUnit === "Fahrenheit"
          ? "&units=imperial"
          : "";
      dispatch(allActions.weatherActions.loadWeather(filter));
      dispatch(allActions.weatherActions.loadWeatherEvery3Hours(filter, city));
    };
    getThermometricUnitFilter();
  }, [thermometricUnit]);

  function groupBy(list, uniqueDate) {
    const map = new Map();
    list.forEach((item) => {
      const key = item.dt_txt.includes(uniqueDate);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  const resultArr = (arrayDates) =>
    arrayDates.reduce((uniqueArr, item) => {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
      return uniqueArr;
    }, []);

  const renderDays = () => {
    let list = weatherEvery3HoursReducer.weathers.list;
    const data = [];
    let arrayDates = [];
    const every3hoursData = [];

    list !== undefined &&
      list.forEach((element) => {
        var dateText = element.dt_txt;
        var splitedDate = dateText.split(" ")[0];
        arrayDates.push(splitedDate);
      });

    let uniqueDates = resultArr(arrayDates);
    uniqueDates.forEach((item) => {
      const grouped = groupBy(list, item);
      for (const [key, value] of grouped.entries()) {
        if (key) {
          every3hoursData.push(value);
        }
      }
    });

    let listDaily = weatherReducer.weathers.daily;
    listDaily !== undefined &&
      listDaily.forEach((item, index) => {
        if (index > 0 && index < 6) {
          var day = moment.unix(item.dt).format("YYYY-MM-DD HH:mm");
          var dayNumber = moment(day).day();
          data.push(
            <DayCard
              key={index}
              day={WEEK_DAY[dayNumber]}
              shortTitle={SHORT_WEEK_DAY[dayNumber]}
              maxTemp={item.temp.max}
              minTemp={item.temp.min}
              icon={item.weather[0].icon}
              isLoading={weatherReducer.isLoading}
              item={item}
              elements={every3hoursData[index - 1]}
            />
          );
        }
      });
    return data;
  };

  return <div data-testid="daycard-container" className="box-container">{renderDays()}</div>;
};

export default DayCardContainer;
