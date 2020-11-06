import React from 'react';
import './index.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const Locations = () => (
  <div className="locations-container">
    <div>
      <h1>ЛОКАЦИИ</h1>
    </div>
    <div>
      <LeftColumn />  
      <RightColumn />  
    </div>
  </div>
);

export default Locations;