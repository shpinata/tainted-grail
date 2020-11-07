export const UPDATE_REMOVED_LOCATIONS = 'locations/UPDATE_REMOVED_LOCATIONS'; // Это type действия - ACTION
export const UPDATE_MENHIRS_LOCATIONS = 'locations/UPDATE_MENHIRS_LOCATIONS';
export const UPDATE_MENHIRS_COUNTERS = 'locations/UPDATE_MENHIRS_COUNTERS';
export const UPDATE_QESTDIALS_LOCATIONS = 'locations/UPDATE_QESTDIALS_LOCATIONS';
export const UPDATE_QESTDIALS_COUNTERS = 'locations/UPDATE_QESTDIALS_COUNTERS';
export const UPDATE_GUARDIANS_LOCATIONS = 'locations/UPDATE_GUARDIANS_LOCATIONS';
export const UPDATE_GUARDIANS_COUNTERS = 'locations/UPDATE_GUARDIANS_COUNTERS';

const initialState = { // это начальное состояние
  removedLocations: [],
  menhirsLocations: [],
  menhirsCounters: [],
  qestDialsLocations: [],
  qestDialsCounters: [],
  guardiansLocations: [],
  guardiansCounters: [],
}
// Это редюсер
export default (state = initialState, action) => {
  switch (action.type) { // переключатель switch
    case UPDATE_REMOVED_LOCATIONS: // если action.type равен UPDATE_REMOVED_LOCATIONS, то
      return {
        ...state,
        removedLocations: action.payload // в payload хранится новое значение состояния removedLocations
      };

    case UPDATE_MENHIRS_LOCATIONS:
      return {
        ...state,
        menhirsLocations: action.payload
      };
    case UPDATE_MENHIRS_COUNTERS:
      return {
        ...state,
        menhirsCounters: action.payload
      };

    case UPDATE_QESTDIALS_LOCATIONS:
      return {
        ...state,
        qestDialsLocations: action.payload
      };
    case UPDATE_QESTDIALS_COUNTERS:
      return {
        ...state,
        qestDialsCounters: action.payload
      };

    case UPDATE_GUARDIANS_LOCATIONS:
      return {
        ...state,
        guardiansLocations: action.payload
      };
    case UPDATE_GUARDIANS_COUNTERS:
      return {
        ...state,
        guardiansCounters: action.payload
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

export const updateMenhirsLocations = (index, number, menhirsLocations) => {
  const copy = [...menhirsLocations];
  copy[index] = number;
  return {
    type: UPDATE_MENHIRS_LOCATIONS,
    payload: copy
  };
};
export const updateMenhirsCounters = (index, number, menhirsCounters) => {
  const copy = [...menhirsCounters];
  copy[index] = number;
  return {
    type: UPDATE_MENHIRS_COUNTERS,
    payload: copy
  };
};

export const updateQestDialsLocations = (index, number, qestDialsLocations) => {
  const copy = [...qestDialsLocations];
  copy[index] = number;
  return {
    type: UPDATE_QESTDIALS_LOCATIONS,
    payload: copy
  };
};
export const updateQestDialsCounters = (index, number, qestDialsCounters) => {
  const copy = [...qestDialsCounters];
  copy[index] = number;
  return {
    type: UPDATE_QESTDIALS_COUNTERS,
    payload: copy
  };
};

export const updateGuardiansLocations = (index, number, guardiansLocations) => {
  const copy = [...guardiansLocations];
  copy[index] = number;
  return {
    type: UPDATE_GUARDIANS_LOCATIONS,
    payload: copy
  };
};
export const updateGuardiansCounters = (index, number, guardiansCounters) => {
  const copy = [...guardiansCounters];
  copy[index] = number;
  return {
    type: UPDATE_GUARDIANS_COUNTERS,
    payload: copy
  };
};