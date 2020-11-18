import React from 'react';
import './index.css';
import Statuses from './Statuses';

const SecondColumn = () => (
    <div className="statusesDiv-List">
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
        <Statuses 
            text="Последняя гавань" 
            size="5" 
            numbered
        />
        <Statuses text="Потусторонний зов" />
        <Statuses text="Почётный гость" />
        <Statuses 
            text="Преемник Геррайнта" 
            size="3" 
            numbered
        />
        <Statuses text="Прибежище от бури" />
        <Statuses text="Пропавшие пожитки" />
        <Statuses text="Раскрытая тайна" />
        <Statuses 
            text="Ритуал в долине" 
            size="2" 
            numbered
        />
        <Statuses 
            text="Рука помощи" 
            size="6" 
            numbered
        />
        <Statuses text="Секрет каменщика" />
        <Statuses text="Секрет старой стали" />
        <Statuses text="Следопыт" />
        <Statuses 
            text="Снадобье" 
            size="4" 
            numbered
        />
        <Statuses 
            text="Союзники Авалона" 
            size="5" 
            numbered
        />
        <Statuses text="Спасённые богиней" />
        <Statuses 
            text="Стервятник" 
            size="5" 
            numbered
        />
        <Statuses 
            text="Странные встречи" 
            size="8" 
            numbered
        />
        <Statuses 
            text="Судьба экспедиции" 
            size="9" 
            numbered
        />
        <div className="additionalText">
            Получив части 1-8, см. строфу 405 в книге секретов.
        </div>
        <Statuses 
            text="Тайны леса" 
            size="4" 
            numbered
        />
        <Statuses 
            text="Ценные встречи" 
            size="5" 
            numbered
        />
        <Statuses 
            text="Черный котёл" 
            size="3" 
            numbered
        />
        <Statuses 
            text="Эскалация" 
            size="3" 
            numbered
        />
    </div>
);

export default SecondColumn;