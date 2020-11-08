import React from 'react';
import './index.css';
import Statuses from './Statuses';

const SecondColumn = () => (
    <div className="statusesDiv-List">
        <Statuses 
            text="Косуль" 
            size="5" 
            numbered
        />
        <Statuses 
            text="Кочующий менгир" 
            size="2" 
            numbered
        />
        <Statuses text="Матереубийца" />
        <Statuses text="Мир в боро" />
        <Statuses text="Мунрингское дело" />
        <Statuses text="Найденный монастырь" />
        <Statuses text="Нарушитель согласий" />
        <Statuses text="Наследие Фаэля" />
        <Statuses 
            text="Необъяснимая загадка" 
            size="9" 
            numbered
        />
        <Statuses text="Общие указания" />
        <Statuses text="Остывший костёр" />
        <Statuses 
            text="Павшие" 
            size="7" 
            numbered
        />
        <Statuses 
            text="Погребальная песнь" 
            size="2" 
            numbered
        />
        <Statuses 
            text="Под наблюдением" 
            size="4" 
        />
        <div className="additionalText">
            Получив все 4 части, разыграйте особое событие В.
        </div>
        <Statuses 
            text="Поддержка мятежа" 
            size="4" 
        />
        <Statuses 
            text="Подморье" 
            size="5" 
            numbered
        />
        <Statuses 
            text="Поиск пути" 
            size="8" 
            numbered
        />
        <Statuses 
            text="Покинутое место" 
            size="9" 
            numbered
        />
        <Statuses 
            text="Помощь рыцарям" 
            size="4" 
        />
        <Statuses 
            text="Попавшие в переплёт" 
            size="2" 
            numbered
        />
        <Statuses text="Поручение Владычицы" />
        <Statuses text="Поручение Морганы" />
        <Statuses 
            text="Последнее противостояние" 
            size="7" 
            numbered
        />
        <Statuses 
            text="Последний урок" 
            size="5" 
            numbered
        />
    </div>
);

export default SecondColumn;