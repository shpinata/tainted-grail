import React from 'react';

const HeroCardHeader = props => (
    <div className="header-name">
        <div className="name">
            <div>Имя:</div>
            <input/>
        </div>
        <div className="location-counter">
            <div className="location">
                <div>Локация:</div>
                <input/>
            </div>
            <div className="counter">
                <div>Счётчик:</div>
                <input/>
            </div>
        </div>
    </div>
);

export default HeroCardHeader;
