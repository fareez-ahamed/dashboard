import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainbody from './Mainbody';
import Sidenav from './Sidenav';



ReactDOM.render(
  [
    <Sidenav/>,
    <Mainbody/>,  
  ],
  document.getElementById('root')
);


