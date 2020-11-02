import React from 'react';
import './Statuses.css';

const AchievementNumber = (props) => {
    const size = props.size || 1;
    const buttonNumber = [];
    for (let i = 0; i < size; i++) {
        buttonNumber.push(<button key={i}>{i+1}</button>);
    }
    return(
        <div className="statuses-ItemDiv">
            <div className="name">{props.text}</div>
            <div className="statuses-Item-CheckboxDiv">
                {buttonNumber}
            </div>
        </div>
    );    
}


export default AchievementNumber;