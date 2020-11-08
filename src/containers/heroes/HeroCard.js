import React from 'react';
import HeroCardHeader from './HeroCardHeader';
import Battle from './Battle'
import Diplomacy from './Diplomacy';
import Parameters from './Parameters';
import Resources from './Resources';

const HeroCard = ({heroes, updateHero, ...props}) => (
    <div className="firstDivHeroCard">
        <HeroCardHeader
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero} 
        />
        <div className="characteristics">
            <Battle 
                number={props.number} 
                heroes={heroes} 
                updateHero={updateHero} 
            />
            <Parameters 
                number={props.number} 
                heroes={heroes} 
                updateHero={updateHero} 
            />
            <Diplomacy 
                number={props.number} 
                heroes={heroes} 
                updateHero={updateHero} 
            />
        </div>
        <Resources 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero} 
        />
    </div>
);

export default HeroCard;