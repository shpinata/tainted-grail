import React from 'react';
import './leftColumn.css';
import Menhirs from './Menhirs';
import QestDials from './QestDials';
import Guardians from './Guardians';

const LeftColumn = () => (
    <div className="left-column">
        <Menhirs />  
        <QestDials />
        <Guardians />
    </div>     
);

export default LeftColumn