import React from 'react';
import Characteristics from './Characteristics';
import energy from './img/energy.png';
import live from './img/live.png';
import horror from './img/horror.png';
import './index.css';

const Parameters = props => (
    <div className="parameters">
        <Characteristics img={energy}/>
        <Characteristics img={live}/>
        <Characteristics img={horror}/>
    </div>
);

export default Parameters;