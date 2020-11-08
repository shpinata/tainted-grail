import React from 'react';
import './index.css';
import Statuses from './Statuses';

const FirstColumn = () => {
    return (
        <div className="statusesDiv-List">
            <Statuses text="Ветры искаженья" />
            <Statuses text="Возвращение" />
            <Statuses
                text="Война за Авалон"
                size="4"
                numbered
            />
            <Statuses
                text="Восстановление ордена"
                size="8"
                numbered
            />
            <div className="additionalText">
                Получив любые 6 частей, см. строфу 512 в книге секретов.
            </div>
            <Statuses
                text="Враги Авалона"
                size="3"
                numbered
            />
            <Statuses
                text="Выжившие"
                size="5"
                numbered
            />
            <Statuses text="Глубокая тайна" />
            <Statuses
                text="Гнетущее открытие"
                size="3"
                numbered
            />
            <Statuses
                text="Грёзы и пророчества"
                size="8"
                numbered
            />
            <Statuses
                text="Дипломат"
                size="3"
                numbered
            />
            <Statuses
                text="Дипломатическая миссия"
                size="6"
                numbered
            />
            <Statuses text="Добыча охотника" />
            <Statuses text="Жгучее желание" />
            <Statuses
                text="Загадки на краю света"
                size="5"
                numbered
            />
            <Statuses
                text="Закат рыцарства"
                size="8"
                numbered
            />
            <div className="additionalText">
                Получив любые 6 частей, см. строфу 525 в книге секретов.
            </div>
            <Statuses text="Защита святыни" />
            <Statuses text="Защитник народа" />
            <Statuses text="Иждивенец" />
            <Statuses
                text="Интриги на Полпути"
                size="3"
                numbered
            />
            <Statuses
                text="Искупление"
                size="5"
            />
            <Statuses text="Искупление червяка" />
            <Statuses
                text="Исследование Туатана"
                size="5"
                numbered
            />
            <Statuses
                text="Клад"
                size="8"
                numbered
            />
            <Statuses text="Конец пути" />
        </div>
    );
}

export default FirstColumn;