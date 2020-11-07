export const UPDATE_REMOVED_LOCATIONS = 'locations/UPDATE_REMOVED_LOCATIONS'; // Это type действия - ACTION

const initialState = { // это начальное состояние
  removedLocations: [],
}

// Это редюсер
export default (state = initialState, action) => {
  switch (action.type) { // переключатель switch
    case UPDATE_REMOVED_LOCATIONS: // если action.type равен UPDATE_REMOVED_LOCATIONS, то
      return {
        ...state,
        removedLocations: action.payload // в payload хранится новое значение состояния removedLocations
      };

    default: // если ни один из экшенов не подошел, то оставляем старое состояние
      return state;
  }
};

export const updateRemovedLocations = (index, location, removedLocations) => { // locations = это массив, который мы передадим
  const copy = [...removedLocations]; // чтобы напрямую не менять состояние removedLocations
  
  if (!copy[index]) { // если под данным индексом лежит undefined, то добавляем пустой объект
    copy[index] = {};
  } 
  
  if (location.new){ // если задали правую часть
    copy[index].new = location.new;
  }

  if (location.removed){ // если задали левую часть
    copy[index].removed = location.removed;
  }

  return {
    type: UPDATE_REMOVED_LOCATIONS,
    payload: copy
  };
};
