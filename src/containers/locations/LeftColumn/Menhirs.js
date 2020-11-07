import React from 'react';
import Location from './Location';
import { connect } from 'react-redux';
import { updateMenhirsLocations, updateMenhirsCounters } from '../../../modules/locations';

const Menhirs = ({menhirsLocations, menhirsCounters, onChangeLocations, onChangeCounters}) => (
    <div className="left-column-item">
        <div className="headerDiv">
            <div>Менгир 1</div>
            <div>Менгир 2</div>
            <div>Менгир 3</div>
        </div>
        <Location 
            name="Локация" 
            number="3"
            values = {menhirsLocations}
            onChange = {onChangeLocations}
        />
        <Location 
            name="Значение счетчика" 
            number="3" 
            values = {menhirsCounters}
            onChange = {onChangeCounters}
        />
    </div>
);

const mapStateToProps = ({ locations }) => ({ 
    menhirsLocations: locations.menhirsLocations,
    menhirsCounters: locations.menhirsCounters,
});
  
const mapDispatchToProps = {
    onChangeLocations: updateMenhirsLocations,
    onChangeCounters: updateMenhirsCounters,
};
  
export default connect( 
    mapStateToProps,
    mapDispatchToProps,
)(Menhirs);
