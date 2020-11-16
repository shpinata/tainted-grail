import React from 'react';
import HeroCard from './HeroCard';
import './HeroCard.css';
import { connect } from 'react-redux';
import { updateHero, cleanHero } from '../../modules/heroes';

const Heroes = ({heroes, updateHero, cleanHero}) => (
  <div className="container">
    <div className="container-left"/>
    <div className="container-center">
      <div className='HeroCard'>
        <HeroCard number="0" heroes={heroes} updateHero={updateHero}/>  
        <HeroCard number="1" heroes={heroes} updateHero={updateHero}/>        
      </div>  
      <div className='HeroCard'>
        <HeroCard number="2" heroes={heroes} updateHero={updateHero}/>  
        <HeroCard number="3" heroes={heroes} updateHero={updateHero}/>       
      </div>     
      <button className="clear" onClick={cleanHero}>Очистить</button> 
    </div>
    <div className="container-right"/>
  </div>
)

const mapStateToProps = ({ hero }) => ({ 
  heroes: hero.heroes,
})

const mapDispatchToProps = {
  updateHero,
  cleanHero
};


export default connect( 
  mapStateToProps,
  mapDispatchToProps,
)(Heroes);

