import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Loader from "../Loader";

const DayCard = (props) => {
  const [dayCardElements, setDayCardElements] = useState();
  const [dayCardItem, setDayCardItem] = useState();
  let {
    day,
    shortTitle,
    maxTemp,
    minTemp,
    icon,
    isLoading,
    item,
    elements,
  } = props;

  useEffect(() => {
    setDayCardItem(item);
    setDayCardElements(elements);
  }, [item, elements]);

  let temperature = isLoading ? (
    <div className="daycard-loader">
      <Loader />
    </div>
  ) : (
    <>
      <span className="text-max-temperature">{maxTemp.toFixed(0)}°</span>
      <span className="text-min-temperature">{minTemp.toFixed(0)}°</span>
    </>
  );

  return (
    <Link
      to={{
        pathname: "/" + day,
        state: {
          item: dayCardItem,
          elements: dayCardElements,
        },
      }}
    >
      <div className="box">
        <span className="text-day">{shortTitle}</span>
        <div>
          <img
            src={require("../../assets/" + icon + ".png")}
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
