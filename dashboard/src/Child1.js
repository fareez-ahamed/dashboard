import React from 'react'
import './index.css';
import logo from './ronaldo.png';
const Child1 = (props) => {


  
    // var date  = new Date();
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // var today=(date.toLocaleDateString("en-US", { day: 'numeric' })+ " "+ date.toLocaleDateString("en-US", { month: 'short' })+ " ,    " + date.toLocaleDateString("en-US", { year: 'numeric' }))

    const nth = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    const fortnightAway = new Date();
    const date = fortnightAway.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][fortnightAway.getMonth()];

    var today = `${date} ${nth(date)}  ${month} , ${fortnightAway.getFullYear()}`;
    return (
        <div className="child1">
            <input name="inp" className="input" autoComplete="off" />
            <i className="fas fa-search"></i>
            <div className="date">
                <i className="far fa-calendar-alt"></i>
                <h4 className="time">{today}</h4>
            </div>
            <div className="profile">
                <i className="far fa-bell"></i>
                <img src={logo} className="rnimg"/>
                <h4 className="profilename">{props.profilename}</h4>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>  
    )
}

export default Child1;
