import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import { updateHero } from '../../../modules/heroes';

const CardDeck = ({ heroes, updateHero, number, namePlayer }) => (
    <div className="container">
        <div className="container-center">
            <div>
                <h1>Колода карт</h1>
                <h2>{namePlayer}</h2>
            </div>
            <Cards number={number} heroes={heroes} updateHero={updateHero} />
            <button className="clear">Очистить</button> 
        </div>
    </div>
);

const mapStateToProps = ({ hero }, props) => ({ 
    heroes: hero.heroes,
    namePlayer: hero.heroes[props.match.params.number].name,
    number: props.match.params.number
})

const mapDispatchToProps = {
    updateHero
};
  
export default connect( 
    mapStateToProps,
    mapDispatchToProps,
)(CardDeck);

