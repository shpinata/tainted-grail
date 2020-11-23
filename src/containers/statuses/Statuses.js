import React from 'react';
import './Statuses.css';
import { connect } from 'react-redux';
import { updateStatus } from '../../modules/statuses';

const Statuses = ({ checkboxes = [], updateStatus, ...props }) => {
    const size = props.size || 1;
    const buttonNumber = [];
    const numbered = props.numbered;

    for (let i = 0; i < size; i++) {
        const buttonContent = numbered ? i + 1 : '';     
        buttonNumber.push(
            <button 
                key={i}
                style={checkboxes[i] ? {background: '#e65b5b'} : {}}
                onClick={() => updateStatus(props.text, i, checkboxes)}
            >
                {buttonContent}
            </button>);
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


const mapStateToProps = ({statuses}, props) => ({ 
    checkboxes: statuses[props.text],
})

// const mapStateToProps = ({ locations }) => ({ 
//     removedLocations: locations.removedLocations,
// })

const mapDispatchToProps = {
    updateStatus, // это тоже самое, что updateStatus: updateStatus
};
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Statuses);