import React from 'react';
import Location from './Location';

const Menhirs = props => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Менгир 1</div>
            <div>Менгир 2</div>
            <div>Менгир 3</div>
        </div>
        <Location name="Локация" number="3"/>
        <Location name="Значение счетчика" number="3" />
    </div>
);

export default Menhirs;