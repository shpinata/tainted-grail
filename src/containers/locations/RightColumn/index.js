import React from 'react';
import './RightColumn.css';
import Column from './Column';
import { connect } from 'react-redux';
import { updateRemovedLocations } from '../../../modules/locations'; // функция генератор action - сделали сами

// props и в нем есть props.removedLocations, поэтому делаем деструктуризацию props
const RightColumn = ({ removedLocations, onChange }) => {
  return (
    <div className="right-column">
        <Column removedLocations={removedLocations} onChange={onChange} />
    </div>
  );
}

const mapStateToProps = ({ locations }) => ({ 
  // привязываем состояние из хранилища. мы берем состояние locations, внутри которого есть removedLocations.
  // для удобства имя передаваемое в props будет тоже removedLocations
  removedLocations: locations.removedLocations,
})

const mapDispatchToProps = {
  // тут мы пробрасываем генераторы action
  // важно это делать в mapDispatchToProps
  // иначе объект не передастся в экосистему редакса
  onChange: updateRemovedLocations,
};


export default connect( // добавляем логику редакса к нашей компоненте
  mapStateToProps,
  mapDispatchToProps,
)(RightColumn);