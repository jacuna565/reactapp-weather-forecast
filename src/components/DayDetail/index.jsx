import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import moment from "moment";
import { IoIosArrowBack } from "react-icons/io";
import Stats from './Stats';
import Graphic from "../Graphic";
import BoxList from "../BoxList";
import "./styles.scss";

const DayDetail = () => {
  let { path } = useParams();
  let location = useLocation();
  let item = location.state !== undefined && location.state.item;
  const [elements, setElements] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const seedGraphicData = () => {
      let data = [];
      let series = [];
      let categories = [];
      let serieObject = {};
      location.state &&
        location.state.elements.forEach((item, index) => {
          data.push(item.main.temp);
          categories.push(item.dt_txt.split(" ")[1]);
        });
      serieObject.name = "Temperature";
      serieObject.data = data;
      series.push(serieObject);
      setElements(series);
      setCategories(categories);
    };
    seedGraphicData();
  }, [location]);

  return (
    <div data-testid="daydetail-container">
      <div className="detail-header">
        <Link to="/">
          <IoIosArrowBack className="icon-header" />
        </Link>
        <h3 className="title-day">{path}</h3>
        <span className="title-date">{moment.unix(item.dt).format("ll")}</span>
        <div className="detail-container">
          <div className="temperature-container">
            <img
              src={
                item
                  ? require("../../assets/" + item.weather[0].icon + ".png")
                  : "../../assets/01d.png"
              }
              alt="icon"
            />
            <div className="temperature">
              <span className="value">{item && item.temp.day}°</span>
              <span className="description">{item && item.weather[0].description}</span>
              <span className="description-altern">
                Feels like: {item && item.feels_like.day}°
              </span>
            </div>
          </div>
          <div className="stats-container">
            <Stats item={item}/>
          </div>
        </div>
      </div>
      <Graphic elements={elements} categories={categories} />
      <BoxList elements={location.state !== undefined && location.state.elements} />
    </div>
  );
};

export default DayDetail;
