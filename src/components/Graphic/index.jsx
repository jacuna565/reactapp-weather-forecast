import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Loader from "../Loader";

export default function Graphic({ elements, categories }) {
  const [options, setOptions] = useState();
  useEffect(() => {
    setOptions({
      chart: {
        zoom: {
          enabled: false,
        },
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#ed6e4d", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Temperature",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: categories,
        title: {
          text: "Hours",
        },
      },
    });
  }, [elements, categories]);

  let renderGraphic = <Loader />;
  if (elements && elements.length !== 0) {
    renderGraphic = (
      <ReactApexChart
        options={options}
        series={elements}
        type="line"
        height={350}
      />
    );
  }

  return <div data-testid="graphic-container">{renderGraphic}</div>;
}
