import React from 'react';
import './index.css';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import ThirdColumn from './ThirdColumn';


const Achievements = () => (
  <div id="firstDiv">
    <div>
      <h1>ДОСТИЖЕНИЯ</h1>
    </div>
    <div id="statusesDiv">
      <FirstColumn />
      <SecondColumn />
      <ThirdColumn />
    </div>
  </div>
)

export default Achievements;