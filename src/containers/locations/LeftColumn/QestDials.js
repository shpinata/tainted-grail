import React from 'react';
import Location from './Location';

const QestDials = props => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Локация</div>
            <div>Значение счетчика</div>
        </div>
        <Location name="Счетчик миссии 1" number="2"/>
        <Location name="Счетчик миссии 2" number="2"/>
    </div>
);

export default QestDials;