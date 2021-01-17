import React from 'react';
import NewCard from './NewCard';
import AvailableCards from './AvailableCards';
import './index.css';


const Cards = ({heroes, updateHero, number}) => (
    <>
        <div className="view"> 
            <NewCard 
                keyCard="battleCards"
                number={number}
                heroes={heroes} 
                updateHero={updateHero}
            />
            <NewCard 
                keyCard="diplomacyCards"
                number={number}
                heroes={heroes} 
                updateHero={updateHero}
            />
        </div>
        <div>
            <AvailableCards 
                keyCard="battleCards" 
                number={number}
                heroes={heroes} 
            />
            <AvailableCards 
                keyCard="diplomacyCards" 
                number={number}
                heroes={heroes} 
            />    
        </div>
        
    </>

);

export default Cards;