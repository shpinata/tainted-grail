import React from 'react';
import './index.css';
import StatusesChekbox from './StatusesChekbox';
import StatusesNumber from './StatusesNumber';

const FirstColumn = props => (
    <div className="statusesDiv-List">
        <StatusesChekbox text="Ветры искаженья" />
        <StatusesChekbox text="Возвращение" />
        <StatusesNumber text="Война за Авалон" size="4"/>
        <StatusesNumber text="Восстановление ордена" size="8" />
        <div className="additionalText">Получив любые 6 частей, см. строфу 512 в книге секретов.</div>
        <StatusesNumber text="Враги Авалона" size="3"/>
        <StatusesNumber text="Выжившие" size="5"/>
        <StatusesChekbox text="Глубокая тайна" />
        <StatusesNumber text="Гнетущее открытие" size="3"/>
        <StatusesNumber text="Грёзы и пророчества" size="8"/>
        <StatusesNumber text="Дипломат" size="3"/>
        <StatusesNumber text="Дипломатическая миссия" size="6"/>
        <StatusesChekbox text="Добыча охотника" />
        <StatusesChekbox text="Жгучее желание" />
        <StatusesNumber text="Загадки на краю света" size="5"/>
        <StatusesNumber text="Закат рыцарства" size="8"/>
        <div className="additionalText">Получив любые 6 частей, см. строфу 525 в книге секретов.</div>        
        <StatusesChekbox text="Защита святыни" />
        <StatusesChekbox text="Защитник народа" />
        <StatusesChekbox text="Иждивенец" />
        <StatusesNumber text="Интриги на Полпути" size="3"/>
        <StatusesChekbox text="Искупление" size="5" />
        <StatusesChekbox text="Искупление червяка" />
        <StatusesNumber text="Исследование Туатана" size="5"/>
        <StatusesNumber text="Клад" size="8"/>
        <StatusesChekbox text="Конец пути" />
    </div>
);

export default FirstColumn;