import React from 'react';
import Location from './Location';

const Guardians = props => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Страж 1</div>
            <div>Страж 2</div>
        </div>
        <Location name="Локация" number="2"/>
        <Location name="Тип стража" number="2"/>
    </div>
);

export default Guardians;