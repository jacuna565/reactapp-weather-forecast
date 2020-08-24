import React from "react";
import './styles.scss';
import DayCard from '../DayCard';

const DayCardContainer = () => {
  return (
    <div className="box-container">
      <DayCard day="monday" shortTitle="lun."/>
      <DayCard day="tuesday" shortTitle="mar."/>
      <DayCard day="wednesday" shortTitle="mier."/>
      <DayCard day="thursday" shortTitle="jue."/>
      <DayCard day="friday" shortTitle="vie."/>
      <DayCard day="saturday" shortTitle="sab."/>
      <DayCard day="sunday" shortTitle="dom."/>
    </div>
  );
};

export default DayCardContainer; 