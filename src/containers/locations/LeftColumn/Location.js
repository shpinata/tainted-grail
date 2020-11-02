import React from 'react';

const Location = props => {
    const number = props.number || 1;
    const boxs = [];
    for (let i = 0; i < number; i++) {
        boxs.push(<input key={i} />);
    }
    return (
        <div className="locationDiv">
            <div>{props.name}</div>
            {boxs}            
        </div>
    );
}

export default Location;