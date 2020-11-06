import React from 'react';
import Location from './Location';

const QestDials = props => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Счетчик миссии 1</div>
            <div>Счетчик миссии 2</div>
        </div>
        <Location name="Локация" number="2"/>
        <Location name="Значение счетчика" number="2"/>
    </div>
);

export default QestDials;