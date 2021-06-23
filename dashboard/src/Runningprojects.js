import React from "react";
import "./index.css";
import RunningProjectsCard from "./RunningProjectsCard";
const Runningprojects = () => {
  return (
    <div className="item1">
      {/* <h2>Running Projects</h2> */}
      <h2 className="titles">Running</h2>
      <RunningProjectsCard />
      <RunningProjectsCard />
      <RunningProjectsCard />
      <i className="far fa-plus-square"></i>
    </div>
  );
};

export default Runningprojects;
