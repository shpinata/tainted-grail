import React from 'react';
import './index.css';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';
import { connect } from 'react-redux';
import { cleanStatuses } from '../../modules/statuses';


const Achievements = ({cleanStatuses}) => (
  <div id="firstDiv">
    <div id="statusesDiv">
      <FirstColumn />
      <SecondColumn />
    </div>
    <button className="clear" onClick={cleanStatuses}>Очистить</button>
  </div>
)

const mapDispatchToProps = {
  cleanStatuses
};

export default connect( 
  null,
  mapDispatchToProps,
)(Achievements);
