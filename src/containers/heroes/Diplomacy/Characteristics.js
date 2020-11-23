import React from 'react';

const Characteristics = ({heroes, updateHero, ...props}) => {
    const diplomacyKey = props.diplomacyKey;
    return (
        <div className="diplomacy-characteristic">
            <div><img src={props.img} alt=""/></div>
            <input
                type="number"
                value={(heroes[props.number] && heroes[props.number][diplomacyKey]) || ""}
                onChange={(e) => {
                    const newValue = e.target.value;
                    updateHero(props.number, diplomacyKey, newValue, heroes);
                }}
            />
        </div>
    );
}

export default Characteristics;