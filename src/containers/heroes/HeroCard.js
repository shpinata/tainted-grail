import React from 'react';
import HeroCardHeader from './HeroCardHeader';
import Battle from './Battle'
import Diplomacy from './Diplomacy';
import Parameters from './Parameters';
import Resources from './Resources';
import { NavLink } from 'react-router-dom';

const HeroCard = ({heroes, updateHero, ...props}) => (
    <div className="border-container">
        <div className="border-top"/>
        <div className="border-center">
            <HeroCardHeader
                number={props.number}
                heroes={heroes} 
                updateHero={updateHero} 
            />
            <div className="characteristics">
                <Battle 
                    number={props.number} 
                    heroes={heroes} 
                    updateHero={updateHero} 
                />
                <Parameters 
                    number={props.number} 
                    heroes={heroes} 
                    updateHero={updateHero} 
                />
                <Diplomacy 
                    number={props.number} 
                    heroes={heroes} 
                    updateHero={updateHero} 
                />
            </div>
            <Resources 
                number={props.number}
                heroes={heroes} 
                updateHero={updateHero} 
            />    
        </div>
        <div className="border-bottom"/>
        <div className="DivButtonCardDeck"> 
            {heroes[props.number] && heroes[props.number].name && (
                <NavLink exact to={`/card-deck/${props.number}`}>
                    <button>Колода</button>   
                </NavLink>  
            )} 
        </div>
    </div>
);


export default HeroCard;