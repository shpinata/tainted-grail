import React from 'react';
import Location from './Location';

const Guardians = props => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Локация</div>
            <div>Тип стража</div>
        </div>
        <Location name="Страж 1" number="2"/>
        <Location name="Страж 2" number="2"/>
    </div>
);

export default Guardians;