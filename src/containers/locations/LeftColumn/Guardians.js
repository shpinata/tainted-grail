import React from 'react';
import Location from './Location';
import { connect } from 'react-redux';
import { updateGuardiansLocations, updateGuardiansCounters } from '../../../modules/locations';

const Guardians = ({guardiansLocations, guardiansCounters, onChangeLocations, onChangeCounters}) => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Страж 1</div>
            <div>Страж 2</div>
        </div>
        <Location 
            name="Локация" 
            number="2"
            values = {guardiansLocations}
            onChange = {onChangeLocations}
        />
        <Location 
            name="Тип стража" 
            number="2"
            type="text"
            values = {guardiansCounters}
            onChange = {onChangeCounters}
        />
    </div>
);

const mapStateToProps = ({ locations }) => ({ 
    guardiansLocations: locations.guardiansLocations,
    guardiansCounters: locations.guardiansCounters,
});
  
const mapDispatchToProps = {
    onChangeLocations: updateGuardiansLocations,
    onChangeCounters: updateGuardiansCounters,
};
  
export default connect( 
    mapStateToProps,
    mapDispatchToProps,
)(Guardians);
