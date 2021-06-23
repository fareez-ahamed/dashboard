import React from "react";
import "./index.css";
import Header from "./Header";
// import Item1 from './Item1';
import Runningprojects from "./Runningprojects";

const Mainbody = () => {
  return (
    <div className="items">
      <Header />
      {/* <Item1/>     */}
      <Runningprojects />
    </div>
  );
};

export default Mainbody;
