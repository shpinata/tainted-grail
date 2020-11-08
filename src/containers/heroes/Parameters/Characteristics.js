import React from 'react';

const Characteristics = ({heroes, updateHero, ...props}) => {
    const parametersKey = props.parametersKey;
    return (
        <div className="parameters-characteristic">
            <input
                value={(heroes[props.number] && heroes[props.number][parametersKey]) || ""}
                onChange={(e) => {
                    const newValue = e.target.value;
                    updateHero(props.number, parametersKey, newValue, heroes);
                }}
            />
            <div><img src={props.img} alt=""/></div>
        </div>
    );
}
export default Characteristics;