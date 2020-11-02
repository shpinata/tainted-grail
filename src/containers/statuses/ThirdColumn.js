import React from 'react';
import './index.css';
import StatusesChekbox from './StatusesChekbox';
import StatusesNumber from './StatusesNumber';

const ThirdColumn = props => (
    <div className="statusesDiv-List">
        <StatusesNumber text="Последняя гавань" size="5"/>
        <StatusesChekbox text="Потусторонний зов" />
        <StatusesChekbox text="Почётный гость" />
        <StatusesNumber text="Преемник Геррайнта" size="3"/>
        <StatusesChekbox text="Прибежище от бури" />
        <StatusesChekbox text="Пропавшие пожитки" />
        <StatusesChekbox text="Раскрытая тайна" />
        <StatusesNumber text="Ритуал в долине" size="2"/>
        <StatusesNumber text="Рука помощи" size="6"/>
        <StatusesChekbox text="Секрет каменщика" />
        <StatusesChekbox text="Секрет старой стали" />
        <StatusesChekbox text="Следопыт" />
        <StatusesNumber text="Снадобье" size="4"/>
        <StatusesNumber text="Союзники Авалона" size="5"/>
        <StatusesChekbox text="Спасённые богиней" />
        <StatusesNumber text="Стервятник" size="5"/>
        <StatusesNumber text="Странные встречи" size="8"/>
        <StatusesNumber text="Судьба экспедиции" size="9"/>
        <div className="additionalText">Получив части 1-8, см. строфу 405 в книге секретов.</div>
        <StatusesNumber text="Тайны леса" size="4"/>
        <StatusesNumber text="Ценные встречи" size="5"/>
        <StatusesNumber text="Черный котёл" size="3"/>
        <StatusesNumber text="Эскалация" size="3"/>
    </div>
);

export default ThirdColumn;