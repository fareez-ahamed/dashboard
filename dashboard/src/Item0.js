import React from 'react'
import './index.css';
import Child1 from './Child1';
import Child2 from './Child2';

const Item0 = () => {
    return (
        <div className="item0">
            <Child1 profilename="Ronaldo"/>
            <Child2/>
        </div>
    )
}

export default Item0
