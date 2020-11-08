import React from 'react';
import HeroCard from './HeroCard';
import './HeroCard.css';
import { connect } from 'react-redux';
import { updateHero } from '../../modules/heroes';

const Heroes = ({heroes, updateHero}) => (
  <div>
    <div className="headingDiv">
      <h1>ГЕРОИ</h1>  
    </div>
    <div className='firstDiv'>
      <HeroCard number="0" heroes={heroes} updateHero={updateHero}/>  
      <HeroCard number="1" heroes={heroes} updateHero={updateHero}/>  
      <HeroCard number="2" heroes={heroes} updateHero={updateHero}/>  
      <HeroCard number="3" heroes={heroes} updateHero={updateHero}/>       
    </div>        
  </div>
)

const mapStateToProps = ({ hero }) => ({ 
  heroes: hero.heroes,
})

const mapDispatchToProps = {
  updateHero: updateHero,
};


export default connect( 
  mapStateToProps,
  mapDispatchToProps,
)(Heroes);

