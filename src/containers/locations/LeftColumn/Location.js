import React from 'react';

const Location = ({values, onChange, ...props}) => {
    const number = props.number || 1;
    const boxs = [];
    for (let i = 0; i < number; i++) {
        boxs.push(<input 
            key={i} 
            value = {values[i] || ''}
            onChange={(e) => {
                const number = e.target.value;
                onChange(i, number, values);
            }}
        />);
    }
    return (
        <div className="locationDiv">
            <div>{props.name}</div>
            {boxs}            
        </div>
    );
}

export default Location;