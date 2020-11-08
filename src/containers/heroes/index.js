import React from 'react';
import HeroCard from './HeroCard';
import './HeroCard.css';

const Heroes = props => (
  <div>
    <div className="headingDiv">
      <h1>ГЕРОИ</h1>  
    </div>
    <div className='firstDiv'>
      <HeroCard />  
      <HeroCard />  
      <HeroCard />  
      <HeroCard />       
    </div>        
  </div>
)

export default Heroes;
