import React from "react";
import "./runningprojects.css";
import Card from "./RunningprojectsCard";
const Runningprojects = () => {
  return (
    <div className="runningprojects">
      {/* <h2>Running Projects</h2> */}
      <h2 className="titles">Running</h2>
      <Card />
      <Card />
      <Card />
      <i className="far fa-plus-square"></i>
    </div>
  );
};

export default Runningprojects;
