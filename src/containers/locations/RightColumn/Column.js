import React from 'react';
import './RightColumn.css';

const Column = () => {
    const boxs = [];
    for (let i = 0; i < 6; i++) {
        boxs.push(<div key={i}>
            <input/>
            →
            <input/>            
        </div>);
    }
    return (
        <div className="column-item">{boxs}</div>
    );
}  

export default Column;