import React from 'react';
import './index.css';
import RunningCard from './RunningCard';
const Item1 = () => {
    return (
        <div className="item1">
            {/* <h2>Running Projects</h2> */}
            <h2 className="titles">Running</h2>
            <RunningCard/>
            <RunningCard/>
            <RunningCard/>
            <i className="far fa-plus-square"></i>
        </div>
    )
}

export default Item1
