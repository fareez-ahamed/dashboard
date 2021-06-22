import React from 'react'
import CompletedCard from './CompletedCard';
import './index.css';
const Item2 = () => {
    return (
        <div className="item2">
            <h2 className="titles">Completed</h2>
           <CompletedCard/>
           <CompletedCard/>
           <CompletedCard />
            <i className="far fa-edit" id="Completededit"></i>
        </div>
    )
}

export default Item2
