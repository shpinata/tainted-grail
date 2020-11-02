import React from 'react';
import HeroCardHeader from './HeroCardHeader';
import Battle from './Battle'
import Diplomacy from './Diplomacy';
import Parameters from './Parameters';
import Resources from './Resources';

const HeroCard = props => (
    <div className="firstDivHeroCard">
        <HeroCardHeader />
        <div className="characteristics">
            <Battle />
            <Parameters />
            <Diplomacy />
        </div>
        <Resources />
    </div>
);

export default HeroCard;