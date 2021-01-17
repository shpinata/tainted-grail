import React, { useState } from 'react';

const NewCard = ({heroes, updateHero, number, ...props}) => {
    const [text, setText] = useState(''); // text - состояние, setText- изменить состояние
    const keyCard = props.keyCard;
    const cards = heroes[number] && heroes[number][keyCard];
    
    return (
        <div> 
            <input 
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button  
                onClick={() => {
                    let updated = cards ? [ text, ...cards ] : [text]; 
                    updateHero(number, keyCard, updated, heroes);
                    setText('');
                }}
            > + </button>
        </div>
    );
}

export default NewCard;