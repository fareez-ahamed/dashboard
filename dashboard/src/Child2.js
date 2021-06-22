import React from 'react'
import './index.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import Profiles from './Profiles';
const Child2 = () => {
    return (
        <div className="child2">
            <div className="multipleprofiles">
                <Profiles image={image1}/>
                <Profiles image={image2}/>
                <Profiles image={image3}/>
                <Profiles image={image4}/>
                <i className="far fa-circle"></i>
                <p className="para1">+3</p> 

            </div>
            <div className="addprofile">
                <span className="profilebtn"><i className="fas fa-user-plus"></i>
                <p style={{padding:"5px"}}>Add People</p>
                </span>
                <p className="para3"><u>View Members</u></p>
            
            </div>
            <div className="priority">
            <i id="smallcircle" className="fas fa-circle"></i><p className="para">Important</p>
            <i id="smallcircle" className="fas fa-circle"></i><p className="para">Important</p>
            <i id="smallcircle" className="fas fa-circle"></i><p className="para2">Important</p>
            <i class="far fa-edit"></i> 
            </div>
                
        </div>
    )
}

export default Child2;
