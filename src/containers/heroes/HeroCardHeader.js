import React from 'react';

const HeroCardHeader = ({heroes, updateHero, ...props}) => {
    
    return (
        <div className="header-name">
            <div className="name">
                <div className="label">Имя:</div>
                <div className="control">
                    <input
                        value={(heroes[props.number] && heroes[props.number].name) || ""}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            updateHero(props.number, 'name', newValue, heroes);
                        }}
                    />
                </div>
            </div>
            <div className="location-counter">
                <div className="location">
                    <div>Локация:</div>
                    <input
                        type="number"
                        value={(heroes[props.number] && heroes[props.number].location) || ""}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            updateHero(props.number, 'location', newValue, heroes);
                        }}
                    />
                </div>
                <div className="counter">
                    <div>Счётчик:</div>
                    <input
                        type="number"
                        value={(heroes[props.number] && heroes[props.number].counter) || ""}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            updateHero(props.number, 'counter', newValue, heroes);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
export default HeroCardHeader;
