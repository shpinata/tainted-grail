import React from 'react';
import './RightColumn.css';

const Column = ({ onChange, removedLocations }) => {
    const boxs = [];
    for (let i = 0; i < 18; i++) {
        const removed = removedLocations[i] && removedLocations[i].removed;
        const newLocation = removedLocations[i] && removedLocations[i].new;
        boxs.push(<div className="location-update" key={i}>
            <input 
                type="number"
                value={removed || ''}
                onChange={(e) => {
                    const removed = e.target.value;
                    onChange(i, { removed }, removedLocations);
                }}
            />
            {" → "}
            <input 
                type="number"
                value={newLocation || ''}
                onChange={(e) => {
                    const newLocation = e.target.value;
                    onChange(i, { new: newLocation }, removedLocations);
                }}
            />            
        </div>);
    }
    return (
        <div className="column-item">{boxs}</div>
    );
}  

export default Column;