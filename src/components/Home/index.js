import React from "react";
import {Link} from "react-router-dom";
import './styles.scss';

export default function Home() {
  return (
    <div className="container">
      <h3 className="region-title">Region metropolitana de Santiago</h3>
      <div className="box-container">
        <Link to="/monday">
          <div className="box">
            <span className="text-day">lun.</span>
            <div>imge</div>
            <span className="text-max-temperature">max .</span>
            <span className="text-min-temperature">min .</span>
          </div>
        </Link>
      </div>
    </div>
  );
}