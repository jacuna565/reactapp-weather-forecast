import React from "react";
import {Link, useParams} from "react-router-dom";

const DayDetail = () => {
  let { path } = useParams();
  return (
    <div>
      <Link to="/">back </Link>
      <h3>path: {path}</h3>
    </div>
  );
};

export default DayDetail;