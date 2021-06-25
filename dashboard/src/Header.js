import React from "react";
import "./header.css";
// import Child1 from './Child1';
// import Child2 from './Child2';
import Profiles from "./Profiles";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
// import Profiles from "./Profiles";
import logo from "./ronaldo.png";

const nth = function (d) {
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
const Header = () => {
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
      <div className="child2">
        <div className="multipleprofiles">
          <Profiles image={image1} />
          <Profiles image={image2} />
          <Profiles image={image3} />
          <Profiles image={image4} />
          <i className="far fa-circle"></i>
          <p className="para1">+3</p>
        </div>
        <div className="addprofile">
          <span className="profilebtn">
            <i className="fas fa-user-plus"></i>
            <p style={{ padding: "5px" }}>Add People</p>
          </span>
          <p className="para3">
            <u>View Members</u>
          </p>
        </div>
        <div className="priority">
          <i id="smallcircle" className="fas fa-circle"></i>
          <p className="para">Important</p>
          <i id="smallcircle" className="fas fa-circle"></i>
          <p className="para">Important</p>
          <i id="smallcircle" className="fas fa-circle"></i>
          <p className="para2">Important</p>
          <i class="far fa-edit"></i>
        </div>
      </div>
      {/* <Child1 profilename="Ronaldo" />
        <Child2 /> */}
    </div>
  );
};

export default Header;
