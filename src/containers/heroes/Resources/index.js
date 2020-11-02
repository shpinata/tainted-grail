import React from 'react';
import ResourcesInput from './ResourcesInput';
import './index.css';

const Resources = props => (
    <div className="resources">
        <ResourcesInput text="Еда" />
        <ResourcesInput text="Золото" />
        <ResourcesInput text="Слава" />
        <ResourcesInput text="Опыт" />
        <ResourcesInput text="Магия" />
    </div>
);

export default Resources;