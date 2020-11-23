import React from 'react';

const Characteristics = ({heroes, updateHero, ...props}) => {
    const battleKey = props.battleKey;
    return (
        <div className="battle-characteristic">
            <input
                type="number"
                value={(heroes[props.number] && heroes[props.number][battleKey]) || ""}
                onChange={(e) => {
                    const newValue = e.target.value;
                    updateHero(props.number, battleKey, newValue, heroes);
                }}
            />
            <div><img src={props.img} alt=""/></div>
        </div>
    );
}
export default Characteristics;