import React from 'react';
import './index.css';


const AvailableCards = ({heroes, number, ...props}) => {
    const keyCard = props.keyCard;
    const createCard = (item) => {
        return <div>{item}</div>
    }
    if (heroes[number] && heroes[number][keyCard]) { // heroes[0]["diplomacyCards"]
        return (
            <div>
                {heroes[number][keyCard].map(createCard)}
            </div>
        );
    }
    return null;
}
export default AvailableCards;