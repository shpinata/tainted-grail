import React from 'react';
import './index.css';
import LeftColumn from './LeftColumn';

const Locations = () => (
  <div className="locations-container">
    <div>
      <h1>ЛОКАЦИИ</h1>
    </div>
    <div>
      <LeftColumn />  
      <div className="right-column"></div>  
    </div>
  </div>
);

export default Locations
