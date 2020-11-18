export const UPDATE_HERO = 'locations/UPDATE_HERO'; 

const initialState = {
  heroes: []
};

export default (state = initialState, action) => {
  switch (action.type) { 
    case UPDATE_HERO: {
      return {
        ...state,
        heroes: action.payload
      };
    }
    default: 
      return state;
  }
};

export const updateHero = (index, name, value, heroes) => { 
  const copy = [...heroes];
  if (!copy[index]) { 
    copy[index] = {};
  } 
  const obj = copy[index];
  obj[name] = value;

  return {
    type: UPDATE_HERO,
    payload: copy
  };
};

export const cleanHero = () => {
  const qestion = window.confirm("Вы уверены, что хотите полностью очистить лист?");
  if (qestion) {
    return {
      type: UPDATE_HERO,
      payload: []
    } 
  }

}