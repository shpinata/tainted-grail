import React from 'react';
import './index.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { connect } from 'react-redux';
import { updatePlayerNotes, cleanLocations } from '../../modules/locations';

const Locations = ({playerNotes, updatePlayerNotes, cleanLocations}) => (
  <div className="locations-container">
    <div className="list">
      <div>
        <LeftColumn />  
        <RightColumn />
      </div>
      <div>
        <h1>Заметки</h1>
        <textarea 
          value={playerNotes || ""}
          onChange={(e) => {
          const newValue = e.target.value;
          updatePlayerNotes(newValue);
        }}/>        
      </div>
      <button className="clear" onClick={cleanLocations}>Очистить</button>
    </div>
  </div>
);

const mapStateToProps = ({ locations }) => ({ 
  playerNotes: locations.playerNotes
});

const mapDispatchToProps = {
  updatePlayerNotes,
  cleanLocations
};

export default connect( 
  mapStateToProps,
  mapDispatchToProps,
)(Locations);
