import React from "react";
import "./index.css";
import "./index.css";
import logo from "./ronaldo.png";

const Header = () => {
  const nth = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const fortnightAway = new Date();
  const date = fortnightAway.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][fortnightAway.getMonth()];

  var today = `${date} ${nth(date)}  ${month} , ${fortnightAway.getFullYear()}`;
  return (
    <div className="header">
      <div className="child1">
        <input name="inp" className="input" autoComplete="off" />
        <i className="fas fa-search"></i>
        <div className="date">
          <i className="far fa-calendar-alt"></i>
          <h4 className="time">{today}</h4>
        </div>
        <div className="profile">
          <i className="far fa-bell"></i>
          <img src={logo} className="rnimg" alt="Not-found" />
          <h4 className="profilename">Ronaldo</h4>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      {/* <Child1 profilename="Ronaldo"/> */}
    </div>
  );
};

export default Header;
