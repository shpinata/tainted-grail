import React from 'react';
import Characteristics from './Characteristics';
import energy from './img/energy.png';
import live from './img/live.png';
import horror from './img/horror.png';
import './index.css';

const Parameters = ({heroes, updateHero, ...props}) => (
    <div className="parameters">
        <Characteristics 
            img={energy}
            parametersKey="energy"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            img={live}
            parametersKey="live"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            img={horror}
            parametersKey="horror"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
    </div>
);

export default Parameters;