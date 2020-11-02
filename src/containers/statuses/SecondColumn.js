import React from 'react';
import './index.css';
import StatusesChekbox from './StatusesChekbox';
import StatusesNumber from './StatusesNumber';

const SecondColumn = props => (
    <div className="statusesDiv-List">
        <StatusesNumber text="Косуль" size="5"/>
        <StatusesNumber text="Кочующий менгир" size="2"/>
        <StatusesChekbox text="Матереубийца" />
        <StatusesChekbox text="Мир в боро" />
        <StatusesChekbox text="Мунрингское дело" />
        <StatusesChekbox text="Найденный монастырь" />
        <StatusesChekbox text="Нарушитель согласий" />
        <StatusesChekbox text="Наследие Фаэля" />
        <StatusesNumber text="Необъяснимая загадка" size="9"/>
        <StatusesChekbox text="Общие указания" />
        <StatusesChekbox text="Остывший костёр" />
        <StatusesNumber text="Павшие" size="7"/>
        <StatusesNumber text="Погребальная песнь" size="2"/>
        <StatusesChekbox text="Под наблюдением" size="4" />
        <div className="additionalText">Получив все 4 части, разыграйте особое событие В.</div>
        <StatusesChekbox text="Поддержка мятежа" size="4" />
        <StatusesNumber text="Подморье" size="5"/>
        <StatusesNumber text="Поиск пути" size="8"/>
        <StatusesNumber text="Покинутое место" size="9"/>
        <StatusesChekbox text="Помощь рыцарям" size="4" />
        <StatusesNumber text="Попавшие в переплёт" size="2"/>
        <StatusesChekbox text="Поручение Владычицы" />
        <StatusesChekbox text="Поручение Морганы" />
        <StatusesNumber text="Последнее противостояние" size="7"/>
        <StatusesNumber text="Последний урок" size="5"/>
    </div>
);

export default SecondColumn;