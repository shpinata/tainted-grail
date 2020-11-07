import React from 'react';
import Location from './Location';
import { connect } from 'react-redux';
import { updateQestDialsLocations, updateQestDialsCounters } from '../../../modules/locations';

const QestDials = ({qestDialsLocations, qestDialsCounters, onChangeLocations, onChangeCounters}) => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Счетчик миссии 1</div>
            <div>Счетчик миссии 2</div>
        </div>
        <Location 
            name="Локация" 
            number="2"
            values = {qestDialsLocations}
            onChange = {onChangeLocations}
        />
        <Location 
            name="Значение счетчика" 
            number="2"
            values = {qestDialsCounters}
            onChange = {onChangeCounters}
        />
    </div>
);

const mapStateToProps = ({ locations }) => ({ 
    qestDialsLocations: locations.qestDialsLocations,
    qestDialsCounters: locations.qestDialsCounters,
});
  
const mapDispatchToProps = {
    onChangeLocations: updateQestDialsLocations,
    onChangeCounters: updateQestDialsCounters,
};
  
export default connect( 
    mapStateToProps,
    mapDispatchToProps,
)(QestDials);
