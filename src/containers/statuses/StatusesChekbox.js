import React from 'react';
import './Statuses.css';

const AchievementChekbox = (props) => {
    const size = props.size || 1;
    const checkboxs = [];
    for (let i = 0; i < size; i++) {
        checkboxs.push(<button key={i} type="checkbox" />);
    }
    return(
        <div className="statuses-ItemDiv">
            <div className="name">{props.text}</div>
            <div className="statuses-Item-CheckboxDiv">
                {checkboxs}
            </div>
        </div>
    );    
}


export default AchievementChekbox;