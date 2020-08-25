import React, {useState, useEffect} from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
// import { LineChart, Line } from 'recharts';
// import {VictoryLine, VictoryChart, VictoryLabel, VictoryAxis, VictoryArea} from "victory";
// import { WiStrongWind, WiHumidity, WiCloudy, WiRain, WiSunrise, WiSunset, WiDaySunny } from 'react-icons/wi';
import './styles.scss';

const Graphic = ({elements}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    seedGraphicData();
  }, [elements]);

  const seedGraphicData = () =>{
    let data = [];
    elements.map((item, index) => {
      let xyObject = {};
      xyObject.name = 'item'+index;
      xyObject.x = item.dt_txt;
      xyObject.y = (item.main.temp);
      xyObject.label = item.main.temp + '°';
      xyObject.icon = item.weather[0].icon;
      data.push(xyObject);
    });
    setData(data)
  };

  const CustomTooltip = ({ active, payload, label }) => {
    let globalPayload = payload[0];
  
    if (active) {
      return (
        <div className="custom-tooltip">
          <span>{globalPayload.payload.label}</span>
          <img src={require('../../assets/'+globalPayload.payload.icon+'.png')}/>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className="graphic-container">
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            height={20}
            data={data}
            margin={{
              top: 5, right: 0, left: 0, bottom: 5,
            }}
          >
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="y" stroke="#ed6e4d" fill="#ed6e4d" />
          </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default Graphic;
