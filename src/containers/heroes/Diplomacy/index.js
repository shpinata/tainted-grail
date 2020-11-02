import React from 'react';
import Characteristics from './Characteristics';
import kind from './img/kind.png';
import careful from './img/careful.png';
import spiritual from './img/spiritual.png';
import './index.css'

const Diplomacy = props => (
    <div className="diplomacy">
        <Characteristics img={kind}/>
        <Characteristics img={careful}/>
        <Characteristics img={spiritual}/>
    </div>
);

export default Diplomacy;