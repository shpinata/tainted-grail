import React from 'react';
import Characteristics from './Characteristics';
import rage from './img/rage.png';
import bravery from './img/bravery.png';
import dexterity from './img/dexterity.png';
import './index.css'

const Battle = ({heroes, updateHero, ...props}) => (
    <div className="battle">
        <Characteristics 
            battleKey="rage" 
            img={rage}
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            battleKey="bravery" 
            img={bravery}
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            battleKey="dexterity" 
            img={dexterity}
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
    </div>
);

export default Battle;