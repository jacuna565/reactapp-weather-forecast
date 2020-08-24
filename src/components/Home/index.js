import React from "react";
import './styles.scss';

import DayCardContainer from '../DayCardContainer';

const Home = () => {
  return (
    <div className="container">
      <h3 className="region-title">Santiago, CL</h3>
      <div className="region-info">6:23pm, Monday, August 24, 2020</div>
      <DayCardContainer />
    </div>
  );
};

export default Home;