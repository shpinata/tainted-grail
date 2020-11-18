import React from 'react';
import './index.css';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';


const Achievements = () => (
  <div id="firstDiv">
    <div id="statusesDiv">
      <FirstColumn />
      <SecondColumn />
    </div>
  </div>
)

export default Achievements;