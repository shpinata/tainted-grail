import React from 'react';
import './index.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const Locations = () => (
  <div className="locations-container">
    <div className="list">
      <div>
        <LeftColumn />  
        <RightColumn />
      </div>
      <div>
        <h1>Заметки</h1>
        <textarea/>        
      </div>
    </div>
  </div>
);

export default Locations;