import React from 'react';
import Characteristics from './Characteristics';
import kind from './img/kind.png';
import careful from './img/careful.png';
import spiritual from './img/spiritual.png';
import './index.css'

const Diplomacy = ({heroes, updateHero, ...props}) => (
    <div className="diplomacy">
        <Characteristics 
            img={kind}
            diplomacyKey="kind"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            img={careful}
            diplomacyKey="careful"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <Characteristics 
            img={spiritual}
            diplomacyKey="spiritual"
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
    </div>
);

export default Diplomacy;