import React from 'react';

const ResourcesInput = ({heroes, updateHero, ...props}) => {
    const text = props.text;
    return(
        <div className="resource-div">
            <input
                value={(heroes[props.number] && heroes[props.number][text]) || ""}
                onChange={(e) => {
                    const newValue = e.target.value;
                    updateHero(props.number, text, newValue, heroes);
                }}
            />
            <div>{text}</div>
        </div>
    );
}

export default ResourcesInput;