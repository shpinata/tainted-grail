import React from 'react';
import Characteristics from './Characteristics';
import rage from './img/rage.png';
import bravery from './img/bravery.png';
import dexterity from './img/dexterity.png';
import './index.css'

const Battle = props => (
    <div className="battle">
        <Characteristics img={rage}/>
        <Characteristics img={bravery}/>
        <Characteristics img={dexterity}/>
    </div>
);

export default Battle;