import React from "react";
import "./index.css";

import Runningprojects from "./Runningprojects";

import Header from "./Header";

const Mainbody = () => {
  return (
    <div className="items">
      <Header />
      <Runningprojects />
    </div>
  );
};

export default Mainbody;
