import React from 'react';
import ResourcesInput from './ResourcesInput';
import './index.css';

const Resources = ({heroes, updateHero, ...props}) => (
    <div className="resources">
        <ResourcesInput 
            text="Еда" 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <ResourcesInput 
            text="Золото" 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <ResourcesInput 
            text="Слава" 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <ResourcesInput 
            text="Опыт" 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
        <ResourcesInput 
            text="Магия" 
            number={props.number}
            heroes={heroes} 
            updateHero={updateHero}
        />
    </div>
);

export default Resources;